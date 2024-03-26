"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _rpkiValidator = _interopRequireDefault(require("rpki-validator"));
var _fs = _interopRequireDefault(require("fs"));
var _axiosEnrich = _interopRequireDefault(require("./axiosEnrich"));
var _redaxios = _interopRequireDefault(require("redaxios"));
var _moment = _interopRequireDefault(require("moment"));
var _objectFingerprint = _interopRequireDefault(require("object-fingerprint"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var RpkiUtils = exports["default"] = /*#__PURE__*/_createClass(function RpkiUtils(env) {
  var _this = this;
  _classCallCheck(this, RpkiUtils);
  _defineProperty(this, "_loadRpkiValidatorFromVrpProvider", function () {
    if (!_this.rpki) {
      var _this$params$advanced;
      var rpkiValidatorOptions = {
        connector: _this.params.vrpProvider,
        clientId: _this.clientId,
        advancedStatsRefreshRateMinutes: (_this$params$advanced = _this.params.advancedStatsRefreshRateMinutes) !== null && _this$params$advanced !== void 0 ? _this$params$advanced : 120,
        axios: (0, _axiosEnrich["default"])(_redaxios["default"], !_this.params.noProxy && _this.agent ? _this.agent : null, _this.userAgent)
      };
      if (_this.params.url) {
        rpkiValidatorOptions.url = _this.params.url;
      }
      _this.rpki = new _rpkiValidator["default"](rpkiValidatorOptions);
      if (_this.params.preCacheROAs) {
        _this._preCache();
      }
    }
  });
  _defineProperty(this, "_watchVrpFile", function (vrpFile) {
    var reload = function reload() {
      // Watch the external file to refresh the list
      if (_this.watchFileTimer) {
        clearTimeout(_this.watchFileTimer);
      }
      _this.watchFileTimer = setTimeout(function () {
        _this.logger.log({
          level: 'info',
          message: "VRPs reloaded due to file change."
        });
        _this._loadRpkiValidatorFromVrpFile(vrpFile);
      }, 3000);
    };
    _fs["default"].watchFile(vrpFile, reload);
  });
  _defineProperty(this, "_loadRpkiValidatorFromVrpFile", function (vrpFile) {
    if (_fs["default"].existsSync(vrpFile)) {
      try {
        var vrps = JSON.parse(_fs["default"].readFileSync(vrpFile, 'utf8'));
        if (vrps) {
          if (vrps.roas && vrps.roas.length) {
            vrps = vrps.roas;
          }
          if (vrps.length > 0) {
            if (_this.rpki) {
              _this.rpki.empty();
            } else {
              _this.rpki = new _rpkiValidator["default"]({
                connector: "external",
                clientId: _this.clientId
              });
            }
            _this.rpki.setVRPs(vrps);
            _this._preCache();
          } else {
            _this.logger.log({
              level: 'error',
              message: "The provided VRPs file is empty. Using default vrpProvider."
            });
          }
        }
      } catch (error) {
        _this.logger.log({
          level: 'error',
          message: "The provided VRPs file cannot be parsed. Using default vrpProvider."
        });
      }
    } else {
      _this.logger.log({
        level: 'error',
        message: "The provided VRPs file cannot be found. Using default vrpProvider."
      });
    }
    return _this._loadRpkiValidatorFromVrpProvider();
  });
  _defineProperty(this, "_loadRpkiValidator", function () {
    if (!!_this.params.vrpFile) {
      var vrpFile = _this.config.volume + _this.params.vrpFile;
      _this._loadRpkiValidatorFromVrpFile(vrpFile);
      _this._watchVrpFile(vrpFile);
    } else {
      _this._loadRpkiValidatorFromVrpProvider();
    }
  });
  _defineProperty(this, "_preCache", function () {
    if (!!_this.params.preCacheROAs) {
      return _this.rpki.preCache(_this.params.refreshVrpListMinutes).then(function (data) {
        _this.status.data = true;
        return data;
      })["catch"](function () {
        if (!_this._cannotDownloadErrorOnce) {
          _this.logger.log({
            level: 'error',
            message: "The VRP list cannot be downloaded. The RPKI monitoring should be working anyway with one of the on-line providers."
          });
        }
        _this._cannotDownloadErrorOnce = true;
      });
    } else {
      _this.status.data = true;
      return Promise.resolve();
    }
  });
  _defineProperty(this, "_validateQueue", function () {
    var batch = {};
    var _iterator = _createForOfIteratorHelper(_this.queue),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _step.value,
          message = _step$value.message,
          matchedRule = _step$value.matchedRule,
          callback = _step$value.callback;
        var key = message.originAS.getId() + "-" + message.prefix;
        batch[key] = batch[key] || [];
        batch[key].push({
          message: message,
          matchedRule: matchedRule,
          callback: callback
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    _this.queue = [];
    _this.validateBatch(Object.values(batch).map(function (elements) {
      var message = elements[0].message;
      return {
        prefix: message.prefix,
        origin: message.originAS
      };
    })).then(function () {
      var results = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var _iterator2 = _createForOfIteratorHelper(results),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var result = _step2.value;
          var key = result.origin.getId() + "-" + result.prefix;
          var _iterator3 = _createForOfIteratorHelper(batch[key]),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _step3$value = _step3.value,
                message = _step3$value.message,
                matchedRule = _step3$value.matchedRule,
                callback = _step3$value.callback;
              callback(result, message, matchedRule);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
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
  _defineProperty(this, "addToValidationQueue", function (message, matchedRule, callback) {
    if (message.originAS && message.prefix) {
      _this.queue.push({
        message: message,
        matchedRule: matchedRule,
        callback: callback
      });
    }
  });
  _defineProperty(this, "validate", function (prefix, origin) {
    return _this.validateBatch([{
      prefix: prefix,
      origin: origin
    }]).then(function (results) {
      return results[0];
    });
  });
  _defineProperty(this, "validateBatch", function (batch) {
    return _this._preCache().then(function () {
      return Promise.all(batch.map(function (_ref) {
        var prefix = _ref.prefix,
          origin = _ref.origin;
        var origins = [origin.getValue()].flat();
        return Promise.all(origins.map(function (asn) {
          return _this.rpki.validate(prefix, asn, true);
        })) // Validate each origin
        .then(function () {
          var results = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          if (results.length === 1) {
            // Only one result = only one origin, just return
            return _objectSpread(_objectSpread({}, results[0]), {}, {
              prefix: prefix,
              origin: origin
            });
          } else {
            // Multiple origin
            if (!!results.length && results.every(function (result) {
              return result && result.valid;
            })) {
              // All valid
              return {
                valid: true,
                covering: results.map(function (i) {
                  return i.covering;
                }).flat(),
                prefix: prefix,
                origin: origin
              };
            } else if (results.some(function (result) {
              return result && !result.valid;
            })) {
              // At least one not valid
              return {
                valid: false,
                covering: results.map(function (i) {
                  return i.covering;
                }).flat(),
                prefix: prefix,
                origin: origin
              };
            } else {
              // return not covered
              return {
                valid: null,
                covering: results.map(function (i) {
                  return i.covering;
                }).flat(),
                prefix: prefix,
                origin: origin
              };
            }
          }
        });
      }))["catch"](function (error) {
        _this.logger.log({
          level: 'error',
          message: "RPKI validation failed due to:" + error
        });
      });
    });
  });
  _defineProperty(this, "getVRPs", function () {
    return _this.rpki.toArray();
  });
  _defineProperty(this, "getMetadata", function () {
    return _this.rpki.getMetadata();
  });
  _defineProperty(this, "getStatus", function () {
    return _this.status;
  });
  _defineProperty(this, "_markAsStale", function () {
    if (!!_this.params.preCacheROAs) {
      var digest = (0, _objectFingerprint["default"])(_this.getVRPs());
      if (_this.oldDigest) {
        var stale = _this.oldDigest === digest;
        if (_this.status.stale !== stale) {
          if (stale) {
            _this.logger.log({
              level: 'error',
              message: "The VRP file is stale"
            });
          } else {
            _this.logger.log({
              level: 'info',
              message: "The VRP file is back to normal"
            });
          }
        }
        _this.status.stale = stale;
      }
      _this.oldDigest = digest;
    }
  });
  _defineProperty(this, "getExpiringElements", function (vrp, expires) {
    return _this.rpki.getExpiringElements(vrp, expires, _moment["default"].utc().unix());
  });
  this.config = env.config;
  this.agent = env.agent;
  this.params = this.config.rpki || {};
  this.clientId = env.clientId || "";
  this.logger = env.logger;
  this.userAgent = "".concat(this.clientId, "/").concat(env.version);
  var defaultMarkDataAsStaleAfterMinutes = 120;
  var providers = [].concat(_toConsumableArray(_rpkiValidator["default"].providers), ["api"]);
  if (this.params.url || this.params.vrpProvider === "api") {
    this.params.vrpProvider = "api";
    this.params.preCacheROAs = true;
    if (!this.params.url) {
      this.params.vrpProvider = providers[0];
      this.params.url = null;
      this.logger.log({
        level: 'error',
        message: "No url provided for the vrps api. Using default vrpProvider."
      });
    }
  }
  if (this.params.vrpFile) {
    this.params.vrpProvider = "external";
    this.params.refreshVrpListMinutes = null;
    this.params.preCacheROAs = true;
  } else {
    var _this$params$preCache;
    if (!this.params.vrpProvider) {
      this.params.vrpProvider = providers[0];
    } else if (!providers.includes(this.params.vrpProvider)) {
      this.params.vrpProvider = providers[0];
      this.logger.log({
        level: 'error',
        message: "The specified vrpProvider is not valid. Using default vrpProvider."
      });
    }
    this.params.refreshVrpListMinutes = Math.max(this.params.refreshVrpListMinutes || 0, 1);
    this.params.preCacheROAs = !!((_this$params$preCache = this.params.preCacheROAs) !== null && _this$params$preCache !== void 0 ? _this$params$preCache : true);
  }
  if (this.params.markDataAsStaleAfterMinutes !== undefined) {
    if (this.params.markDataAsStaleAfterMinutes <= this.params.refreshVrpListMinutes) {
      this.logger.log({
        level: 'error',
        message: "The specified markDataAsStaleAfterMinutes cannot be <= of refreshVrpListMinutes (".concat(defaultMarkDataAsStaleAfterMinutes, " minutes will be used).")
      });
      this.params.markDataAsStaleAfterMinutes = defaultMarkDataAsStaleAfterMinutes;
    }
  }
  this.status = {
    data: true,
    stale: false,
    provider: this.params.vrpProvider
  };
  this._loadRpkiValidator();
  if (this.params.markDataAsStaleAfterMinutes > 0) {
    this._markAsStale();
    setInterval(this._markAsStale, this.params.markDataAsStaleAfterMinutes * 60 * 1000);
  }
  this.queue = [];
  setInterval(this._validateQueue, 500); // Periodically validate prefixes-origin pairs
});