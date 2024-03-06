"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _monitor = _interopRequireDefault(require("./monitor"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /*
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
var MonitorRPKI = exports["default"] = /*#__PURE__*/function (_Monitor) {
  _inherits(MonitorRPKI, _Monitor);
  function MonitorRPKI(name, channel, params, env, input) {
    var _this;
    _classCallCheck(this, MonitorRPKI);
    _this = _callSuper(this, MonitorRPKI, [name, channel, params, env, input]);

    // Warn about deprecated config parameters
    _defineProperty(_assertThisInitialized(_this), "updateMonitoredResources", function () {
      _this.monitored = _this.input.getMonitoredASns();
    });
    _defineProperty(_assertThisInitialized(_this), "filter", function (message) {
      return message.type === 'announcement';
    });
    _defineProperty(_assertThisInitialized(_this), "squashAlerts", function (alerts) {
      var peers = _toConsumableArray(new Set(alerts.map(function (alert) {
        return alert.matchedMessage.peer;
      }))).length;
      if (peers >= _this.thresholdMinPeers) {
        var firstAlert = alerts[0];
        var message = firstAlert.matchedMessage;
        var extra = firstAlert.extra;
        var covering = extra.covering && extra.covering.length ? extra.covering.map(function (i) {
          return "".concat(i.prefix, "|AS").concat(i.asn, "|maxLength:").concat(i.maxLength);
        }).join(", ") : false;
        var coveringString = covering ? ". Valid ROAs: ".concat(covering) : '';
        if (extra.roaDisappeared && _this.params.checkDisappearing) {
          return "The route ".concat(message.prefix, " announced by ").concat(message.originAS, " is no longer covered by a ROA");
        } else if (extra.valid === null && _this.params.checkUncovered) {
          return "The route ".concat(message.prefix, " announced by ").concat(message.originAS, " is not covered by a ROA");
        } else if (extra.valid === false) {
          return "The route ".concat(message.prefix, " announced by ").concat(message.originAS, " is not RPKI valid").concat(coveringString);
        }
      }
    });
    _defineProperty(_assertThisInitialized(_this), "_validate", function (result, message, matchedRule) {
      var prefix = result.prefix;
      var origin = result.origin.getValue();
      if (result && !_this.rpki.getStatus().stale) {
        var rpkiMetadata = _this.rpki.getMetadata();
        var cacheKey = "a" + [prefix, origin].join("-").replace(/\./g, "_").replace(/\:/g, "_").replace(/\//g, "_");
        var key = "".concat(cacheKey, "-").concat(result.valid);
        if (result.valid === null) {
          var cache = _this.seenRpkiValidAnnouncements[cacheKey];
          if (cache && cache.rpkiValid && cache.date + _this.cacheValidPrefixesMs >= new Date().getTime()) {
            // valid cache
            _this.publishAlert(key, prefix, matchedRule, message, {
              rpkiMetadata: rpkiMetadata,
              covering: null,
              valid: null,
              roaDisappeared: true,
              subType: "rpki-disappear"
            });
          } else if (_this.params.checkUncovered) {
            _this.publishAlert(key, prefix, matchedRule, message, {
              rpkiMetadata: rpkiMetadata,
              covering: null,
              valid: null,
              subType: "rpki-unknown"
            });
          }
        } else if (result.valid === false) {
          _this.publishAlert(key, prefix, matchedRule, message, {
            rpkiMetadata: rpkiMetadata,
            covering: result.covering,
            valid: false,
            subType: "rpki-invalid"
          });
        } else if (result.valid) {
          // Refresh dictionary
          _this.seenRpkiValidAnnouncements[cacheKey] = {
            date: new Date().getTime(),
            rpkiValid: true
          };
          if (_this.seenRpkiValidAnnouncementsTimer) {
            clearTimeout(_this.seenRpkiValidAnnouncementsTimer);
          }

          // Store dictionary
          _this.seenRpkiValidAnnouncementsTimer = setTimeout(function () {
            var now = new Date().getTime();

            // Delete old cache items
            for (var _i = 0, _Object$keys = Object.keys(_this.seenRpkiValidAnnouncements); _i < _Object$keys.length; _i++) {
              var roa = _Object$keys[_i];
              if (_this.seenRpkiValidAnnouncements[roa].date + _this.cacheValidPrefixesMs < now) {
                delete _this.seenRpkiValidAnnouncements[roa];
              }
            }
            _this.storage.set(_this.seenRpkiValidAnnouncementsKey, _this.seenRpkiValidAnnouncements)["catch"](function (error) {
              _this.logger.log({
                level: 'error',
                message: error
              });
            });
          }, 1000);
        }
      }
    });
    _defineProperty(_assertThisInitialized(_this), "validate", function (message, matchedRule) {
      _this.rpki.addToValidationQueue(message, matchedRule, _this._validate);
    });
    _defineProperty(_assertThisInitialized(_this), "monitor", function (message) {
      try {
        var messageOrigin = message.originAS;
        var prefix = message.prefix;
        var matchedPrefixRules = _this.getMoreSpecificMatches(prefix, false, true);
        if (matchedPrefixRules.length) {
          var _iterator = _createForOfIteratorHelper(matchedPrefixRules),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var matchedPrefixRule = _step.value;
              if (matchedPrefixRule.matched) {
                // There is a prefix match
                if (!matchedPrefixRule.matched.ignore && matchedPrefixRule.included) {
                  // The prefix match is not excluded in any way
                  _this.validate(message, matchedPrefixRule.matched);
                }
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else {
          var matchedASRule = _this.getMonitoredAsMatch(messageOrigin); // Try AS match
          if (matchedASRule) {
            _this.validate(message, matchedASRule);
          }
        }
      } catch (error) {
        _this.logger.log({
          level: 'error',
          message: error
        });
      }
      return Promise.resolve(true);
    });
    for (var _i2 = 0, _Object$keys2 = Object.keys(params); _i2 < _Object$keys2.length; _i2++) {
      var configParamKey = _Object$keys2[_i2];
      var deprecated = ["preCacheROAs", "refreshVrpListMinutes", "vrpFile", "vrpProvider"];
      if (deprecated.includes(configParamKey)) {
        _this.logger.log({
          level: 'error',
          message: "The parameters ".concat(deprecated.join(","), " are deprecated in monitorRPKI. Please use see here: https://github.com/nttgin/BGPalerter/blob/main/docs/rpki.md")
        });
      }
    }
    _this.rpki = env.rpki;
    _this.cacheValidPrefixesMs = (_this.params.cacheValidPrefixesSeconds || 3600 * 24 * 7) * 1000;
    _this.input.onChange(function () {
      _this.updateMonitoredResources();
    });
    _this.thresholdMinPeers = params && params.thresholdMinPeers != null ? params.thresholdMinPeers : 1;
    _this.seenRpkiValidAnnouncementsKey = "seen-rpki-valid-announcements";
    _this.seenRpkiValidAnnouncements = {};
    _this.storage // Reload the previously discovered ROAs (needed to alert in case of disappearing ROAs)
    .get(_this.seenRpkiValidAnnouncementsKey).then(function (prefixes) {
      _this.seenRpkiValidAnnouncements = prefixes ? prefixes : {};
    })["catch"](function (error) {
      _this.logger.log({
        level: 'error',
        message: error
      });
    });
    _this.queue = [];
    return _this;
  }
  return _createClass(MonitorRPKI);
}(_monitor["default"]);