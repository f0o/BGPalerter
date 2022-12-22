"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _cluster = _interopRequireDefault(require("cluster"));

var _fs = _interopRequireDefault(require("fs"));

var _inputYml = _interopRequireDefault(require("./inputs/inputYml"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Default input connector
var Worker = /*#__PURE__*/_createClass(function Worker(_ref) {
  var _this = this;

  var configFile = _ref.configFile,
      volume = _ref.volume,
      configConnector = _ref.configConnector,
      inputConnector = _ref.inputConnector,
      groupFile = _ref.groupFile;

  _classCallCheck(this, Worker);

  _defineProperty(this, "main", function (worker) {
    var LossyBuffer = require("./utils/lossyBuffer")["default"];

    var ConnectorFactory = require("./connectorFactory")["default"];

    console.log("BGPalerter, version:", _this.version, "environment:", _this.config.environment); // Write pid on a file

    if (_this.config.pidFile) {
      try {
        _fs["default"].writeFileSync(_this.config.pidFile, (process.pid || "").toString());
      } catch (error) {
        _this.logger.log({
          level: 'error',
          message: "Cannot write pid file: " + error
        });
      }
    }

    var connectorFactory = new ConnectorFactory();

    if (_this.config.uptimeMonitor) {
      _this.logger.log({
        level: 'error',
        message: "The uptime monitor configuration changed. Please see the documentation https://github.com/nttgin/BGPalerter/blob/main/docs/process-monitors.md"
      });
    }

    if (_this.config.processMonitors) {
      var _iterator = _createForOfIteratorHelper(_this.config.processMonitors),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var uptimeEntry = _step.value;

          var UptimeModule = require("./processMonitors/" + uptimeEntry.file)["default"];

          new UptimeModule(connectorFactory, uptimeEntry.params);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    var bufferCleaningInterval = 200;
    _this.config.maxMessagesPerSecond = _this.config.maxMessagesPerSecond || 6000;
    var buffer = new LossyBuffer(parseInt(_this.config.maxMessagesPerSecond / (1000 / bufferCleaningInterval)), bufferCleaningInterval, _this.logger);
    connectorFactory.loadConnectors();
    return connectorFactory.connectConnectors(_this.input).then(function () {
      var _iterator2 = _createForOfIteratorHelper(connectorFactory.getConnectors()),
          _step2;

      try {
        var _loop = function _loop() {
          var connector = _step2.value;
          connector.onMessage(function (message) {
            buffer.add({
              connector: connector.name,
              message: message
            });
          });

          if (worker) {
            buffer.onData(function (message) {
              worker.send(message);
            });
          } else {
            buffer.onData(function (message) {
              _this.pubSub.publish("data", message);
            });
          }
        };

        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    })["catch"](function (error) {
      _this.logger.log({
        level: 'error',
        message: error
      });
    });
  });

  global.EXTERNAL_CONFIG_CONNECTOR = global.EXTERNAL_CONFIG_CONNECTOR || configConnector;
  global.EXTERNAL_INPUT_CONNECTOR = global.EXTERNAL_INPUT_CONNECTOR || inputConnector;
  global.EXTERNAL_CONFIG_FILE = global.EXTERNAL_CONFIG_FILE || configFile;
  global.EXTERNAL_GROUP_FILE = global.EXTERNAL_GROUP_FILE || groupFile;
  global.EXTERNAL_VOLUME_DIRECTORY = global.EXTERNAL_VOLUME_DIRECTORY || volume;

  var env = require("./env");

  this.config = env.config;
  this.logger = env.logger;
  this.input = new (global.EXTERNAL_INPUT_CONNECTOR || _inputYml["default"])(env);
  this.pubSub = env.pubSub;
  this.version = env.version;

  if (!this.config.multiProcess) {
    var Consumer = require("./consumer")["default"];

    this.main();
    new Consumer(env, this.input);
  } else {
    if (_cluster["default"].isMaster) {
      this.main(_cluster["default"].fork());
    } else {
      var _Consumer = require("./consumer")["default"];

      new _Consumer(env, this.input);
    }
  }
});

exports["default"] = Worker;