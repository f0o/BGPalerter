"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _WebSocket = _interopRequireDefault(require("../utils/WebSocket"));
var _connector = _interopRequireDefault(require("./connector"));
var _model = require("../model");
var _brembo = _interopRequireDefault(require("brembo"));
var _ipSub = _interopRequireDefault(require("ip-sub"));
var _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(_this, derived, args) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {
      return false;
    }
  }
  derived = _getPrototypeOf(derived);
  return _possibleConstructorReturn(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], _getPrototypeOf(_this).constructor) : derived.apply(_this, args));
}
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } /*
 * 	BSD 3-Clause License
 *
 * Copyright (c) 2019, NTT Ltd.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var beacons = {
  v4: ["84.205.64.0/24", "84.205.65.0/24", "84.205.67.0/24", "84.205.68.0/24", "84.205.69.0/24", "84.205.70.0/24", "84.205.71.0/24", "84.205.74.0/24", "84.205.75.0/24", "84.205.76.0/24", "84.205.77.0/24", "84.205.78.0/24", "84.205.79.0/24", "84.205.73.0/24", "84.205.82.0/24", "93.175.149.0/24", "93.175.151.0/24", "93.175.153.0/24"],
  v6: ["2001:7FB:FE00::/48", "2001:7FB:FE01::/48", "2001:7FB:FE03::/48", "2001:7FB:FE04::/48", "2001:7FB:FE05::/48", "2001:7FB:FE06::/48", "2001:7FB:FE07::/48", "2001:7FB:FE0A::/48", "2001:7FB:FE0B::/48", "2001:7FB:FE0C::/48", "2001:7FB:FE0D::/48", "2001:7FB:FE0E::/48", "2001:7FB:FE0F::/48", "2001:7FB:FE10::/48", "2001:7FB:FE12::/48", "2001:7FB:FE13::/48", "2001:7FB:FE14::/48", "2001:7FB:FE15::/48", "2001:7FB:FE16::/48", "2001:7FB:FE17::/48", "2001:7FB:FE18::/48"]
};
var selectedBeacons = [].concat(_toConsumableArray(beacons.v4.sort(function () {
  return .5 - Math.random();
}).slice(0, 3)), _toConsumableArray(beacons.v6.sort(function () {
  return .5 - Math.random();
}).slice(0, 3)));
var filteredBeacons = selectedBeacons;
var acceptPrefix = function acceptPrefix(prefix, possibleRIS) {
  return _ipSub["default"].isValidPrefix(prefix) && (!possibleRIS || !filteredBeacons.some(function (p) {
    return _ipSub["default"].isEqualPrefix(p, prefix);
  }));
};
var ConnectorRIS = exports["default"] = /*#__PURE__*/function (_Connector) {
  _inherits(ConnectorRIS, _Connector);
  function ConnectorRIS(name, _params, env) {
    var _this;
    _classCallCheck(this, ConnectorRIS);
    _this = _callSuper(this, ConnectorRIS, [name, _params, env]);
    _defineProperty(_assertThisInitialized(_this), "_shouldCanaryMonitoringStart", function () {
      return _this.environment !== "research" && !_this.params.disableCanary;
    });
    _defineProperty(_assertThisInitialized(_this), "_openConnect", function (resolve, data) {
      resolve(true);
      _this._connect("".concat(_this.name, " connector connected (instance:").concat(_this.instanceId, " connection:").concat(data.connection, ")"));
      if (_this.subscription) {
        _this.subscribe(_this.subscription);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "_messageToJsonCanary", function (message) {
      _this._checkCanary();
      message = JSON.parse(message);
      var path = (message.data || {}).path;
      if (path && path.length && path[path.length - 1] == 12654) {
        // Otherwise, don't alter the data
        message.data.possibleRIS = true;
      }
      _this._message(message);
    });
    _defineProperty(_assertThisInitialized(_this), "_messageToJson", function (message) {
      _this._message(JSON.parse(message));
    });
    _defineProperty(_assertThisInitialized(_this), "_appendListeners", function (resolve, reject) {
      if (_this._shouldCanaryMonitoringStart()) {
        _this.ws.on('message', _this._messageToJsonCanary);
      } else {
        _this.ws.on('message', _this._messageToJson);
      }
      _this.ws.on('close', function (error) {
        if (_this.connected) {
          _this._disconnect("RIPE RIS disconnected (error: " + error + "). Read more at https://github.com/nttgin/BGPalerter/blob/main/docs/ris-disconnections.md");
        } else {
          _this._disconnect("It was not possible to establish a connection with RIPE RIS");
          reject();
        }
      });
      _this.ws.on('error', function (error) {
        _this._error("".concat(_this.name, " ").concat(error.message, " (instance:").concat(_this.instanceId, " connection:").concat(error.connection, ")"));
      });
      _this.ws.on('open', function (data) {
        return _this._openConnect(resolve, data);
      });
    });
    _defineProperty(_assertThisInitialized(_this), "connect", function () {
      return new Promise(function (resolve, reject) {
        try {
          if (_this.ws) {
            _this.ws.disconnect();
          }
          var wsOptions = {
            perMessageDeflate: _this.params.perMessageDeflate
          };
          if (_this.params.authorizationHeader) {
            wsOptions.headers = {
              Authorization: _this.params.authorizationHeader
            };
          }
          if (!_this.params.noProxy && _this.agent) {
            wsOptions.agent = _this.agent;
          }
          _this.ws = new _WebSocket["default"](_this.url, wsOptions);
          _this.ws.connect();
          _this._appendListeners(resolve, reject);
        } catch (error) {
          _this._error(error);
          reject(error);
        }
      });
    });
    _defineProperty(_assertThisInitialized(_this), "disconnect", function () {
      if (_this.ws) {
        _this._disconnect("".concat(_this.name, " disconnected"));
      }
    });
    _defineProperty(_assertThisInitialized(_this), "_subscribeToAll", function (input) {
      return _this.ws.send(JSON.stringify({
        type: "ris_subscribe",
        data: _this.params.subscription
      }));
    });
    _defineProperty(_assertThisInitialized(_this), "_optimizedPathMatch", function (regex) {
      if (regex) {
        regex = regex.slice(0, 2) === ".*" ? regex.slice(2) : regex;
        regex = regex.slice(-2) === ".*" ? regex.slice(0, -2) : regex;
        var regexTests = ["^[\\^]*\\d+[\\$]*$", "^[\\^]*[\\d+,]+\\d+[\\$]*$", "^[\\^]*\\[[\\d+,]+\\d+\\][\\$]*$"];
        for (var _i = 0, _regexTests = regexTests; _i < _regexTests.length; _i++) {
          var r = _regexTests[_i];
          if (new RegExp(r).test(regex)) {
            return regex;
          }
        }
      }
      return null;
    });
    _defineProperty(_assertThisInitialized(_this), "_subscribeToPrefixes", function (input) {
      var monitoredPrefixes = input.getMonitoredLessSpecifics();
      var params = JSON.parse(JSON.stringify(_this.params.subscription));
      if (monitoredPrefixes.filter(function (i) {
        return _ipSub["default"].isEqualPrefix(i.prefix, '0:0:0:0:0:0:0:0/0') || _ipSub["default"].isEqualPrefix(i.prefix, '0.0.0.0/0');
      }).length === 2) {
        delete params.prefix;
        if (!_this.subscribed["everything"]) {
          console.log("Monitoring everything");
          _this.subscribed["everything"] = true;
        }
        filteredBeacons = []; // No beacons to filter

        return _this.ws.send(JSON.stringify({
          type: "ris_subscribe",
          data: params
        }));
      } else {
        return Promise.all(monitoredPrefixes.map(function (p) {
          if (!_this.subscribed[p.prefix]) {
            console.log("Monitoring", p.prefix);
            _this.subscribed[p.prefix] = true;
          }
          params.prefix = p.prefix;
          filteredBeacons = filteredBeacons.filter(function (prefix) {
            return !_ipSub["default"].isEqualPrefix(p.prefix, prefix) && !_ipSub["default"].isSubnet(p.prefix, prefix);
          });
          return _this.ws.send(JSON.stringify({
            type: "ris_subscribe",
            data: params
          }));
        }));
      }
    });
    _defineProperty(_assertThisInitialized(_this), "_subscribeToASns", function (input) {
      var monitoredASns = input.getMonitoredASns();
      var params = JSON.parse(JSON.stringify(_this.params.subscription));
      return Promise.all(monitoredASns.map(function (asn) {
        var asnString = asn.asn.getValue();
        if (!_this.subscribed[asnString]) {
          console.log("Monitoring AS".concat(asnString));
          _this.subscribed[asnString] = true;
        }
        params.path = "".concat(asnString, "$");
        return _this.ws.send(JSON.stringify({
          type: "ris_subscribe",
          data: params
        }));
      }));
    });
    _defineProperty(_assertThisInitialized(_this), "_startCanary", function () {
      if (_this.connected) {
        Promise.all(selectedBeacons.map(function (prefix) {
          _this.canaryBeacons[prefix] = true;
          return _this.ws.send(JSON.stringify({
            type: "ris_subscribe",
            data: {
              moreSpecific: false,
              lessSpecific: false,
              prefix: prefix,
              type: "UPDATE",
              socketOptions: {
                includeRaw: false,
                acknowledge: false
              }
            }
          }));
        })).then(function () {
          _this._checkCanary();
          _this.logger.log({
            level: 'info',
            message: "Subscribed to beacons"
          });
        })["catch"](function () {
          _this.logger.log({
            level: 'error',
            message: "Failed to subscribe to beacons"
          });
        });
      }
    });
    _defineProperty(_assertThisInitialized(_this), "_checkCanary", function () {
      clearTimeout(_this._timerCheckCanary);
      if (!_this.connected) {
        _this.logger.log({
          level: 'info',
          message: "RIS connected again, the streaming session is working properly"
        });
      }
      _this.connected = true;
      _this._timerCheckCanary = setTimeout(function () {
        if (_this.connected) {
          _this.connected = false;
          _this.logger.log({
            level: 'error',
            message: "RIS has been silent for too long, probably there is something wrong"
          });
        }
        if (_this.ws) {
          _this.ws.connect();
        }
      }, 3600 * 1000 * 4.5); // every 4.5 hours
    });
    _defineProperty(_assertThisInitialized(_this), "_onInputChange", function (input) {
      _this.connect().then(function () {
        return _this.subscribe(input);
      }).then(function () {
        _this.logger.log({
          level: 'info',
          message: "Prefix rules reloaded"
        });
      })["catch"](function (error) {
        if (error) {
          _this.logger.log({
            level: 'error',
            message: error
          });
        }
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onInputChange", function (input) {
      input.onChange(function () {
        // An external process may write bits of the file and trigger the reload multiple times
        // the timer is reset on each change and it triggers the reload 2 sec after the process stops writing.
        if (_this._timeoutFileChange) {
          clearTimeout(_this._timeoutFileChange);
        }
        _this._timeoutFileChange = setTimeout(function () {
          _this._onInputChange(input);
        }, 5000);
      });
    });
    _defineProperty(_assertThisInitialized(_this), "subscribe", function (input) {
      _this.subscription = input;
      return (_this.params.carefulSubscription ? Promise.all([_this._subscribeToPrefixes(input), _this._subscribeToASns(input)]) : _this._subscribeToAll(input)).then(function () {
        _this.logger.log({
          level: 'info',
          message: "Subscribed to monitored resources"
        });
        if (_this._shouldCanaryMonitoringStart()) {
          _this._startCanary();
        }
      }).then(function () {
        _this.onInputChange(input);
        return true;
      })["catch"](function (error) {
        _this._error(error);
        return false;
      });
    });
    _this.ws = null;
    _this.environment = env.config.environment;
    _this.subscription = null;
    _this.agent = env.agent;
    _this.subscribed = {};
    _this.canaryBeacons = {};
    _this.clientId = env.clientId;
    _this.instanceId = env.instanceId;
    _this.url = _brembo["default"].build(_this.params.url, {
      params: {
        client_version: env.version,
        client: _this.clientId,
        instance: _this.instanceId
      }
    });
    return _this;
  }
  return _createClass(ConnectorRIS);
}(_connector["default"]);
_class = ConnectorRIS;
_defineProperty(ConnectorRIS, "transform", function (message) {
  if (message.type === 'ris_message') {
    try {
      message = message.data;
      var components = [];
      var announcements = message["announcements"] || [];
      var aggregator = message["aggregator"] || null;
      var possibleRIS = message["possibleRIS"] || false;
      var withdrawals = (message["withdrawals"] || []).filter(function (prefix) {
        return acceptPrefix(prefix, possibleRIS);
      });
      var peer = message["peer"];
      var peerAS = message["peer_asn"];
      var communities = message["community"] || [];
      var timestamp = message["timestamp"] * 1000;
      var path, originAS;
      if (message["path"] && message["path"].length) {
        path = new _model.Path(message["path"].map(function (i) {
          return new _model.AS(i);
        }));
        originAS = path.getLast();
      } else {
        path = new _model.Path([]);
        originAS = null;
      }
      if (originAS && path.length()) {
        var _iterator = _createForOfIteratorHelper(announcements),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var announcement = _step.value;
            var nextHop = announcement["next_hop"];
            if (_ipSub["default"].isValidIP(nextHop)) {
              var prefixes = (announcement["prefixes"] || []).filter(function (prefix) {
                return acceptPrefix(prefix, possibleRIS);
              });
              var _iterator2 = _createForOfIteratorHelper(prefixes),
                _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var prefix = _step2.value;
                  components.push({
                    type: "announcement",
                    prefix: prefix,
                    peer: peer,
                    peerAS: peerAS,
                    path: path,
                    originAS: originAS,
                    nextHop: nextHop,
                    aggregator: aggregator,
                    timestamp: timestamp,
                    communities: communities
                  });
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      var _iterator3 = _createForOfIteratorHelper(withdrawals),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _prefix = _step3.value;
          components.push({
            type: "withdrawal",
            prefix: _prefix,
            peer: peer,
            peerAS: peerAS,
            timestamp: timestamp
          });
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return components;
    } catch (error) {
      throw new Error("Error during transform (".concat(_class.name, "): ") + error.message);
    }
  } else if (message.type === 'ris_error') {
    throw new Error("Error from RIS: " + message.data.message);
  }
});
;