"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsYaml = _interopRequireDefault(require("js-yaml"));
var _fs = _interopRequireDefault(require("fs"));
var _input = _interopRequireDefault(require("./input"));
var _ipSub = _interopRequireDefault(require("ip-sub"));
var _model = require("../model");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
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
var InputYml = exports["default"] = /*#__PURE__*/function (_Input) {
  function InputYml(env) {
    var _this;
    _classCallCheck(this, InputYml);
    _this = _callSuper(this, InputYml, [env]);
    _defineProperty(_this, "loadPrefixes", function () {
      _this.defaultPrefixFile = _this.config.volume + _this.config.monitoredPrefixesFiles[0];
      if (!_fs["default"].existsSync(_this.defaultPrefixFile)) {
        return _this.generate().then(function () {
          return _this._loadPrefixes();
        });
      }
      return _this._loadPrefixes();
    });
    _defineProperty(_this, "_watchPrefixFile", function (file) {
      if (!_this.watcherSet) {
        _this.watcherSet = true;
        _fs["default"].watchFile(file, function () {
          if (_this._watchPrefixFileTimer) {
            clearTimeout(_this._watchPrefixFileTimer);
          }
          _this._watchPrefixFileTimer = setTimeout(function () {
            _this.prefixes = [];
            _this.asns = [];
            _this._loadPrefixes().then(function () {
              return _this._change();
            })["catch"](function (error) {
              _this.logger.log({
                level: 'error',
                message: error
              });
            });
          }, 5000);
        });
      }
    });
    _defineProperty(_this, "_loadPrefixes", function () {
      return new Promise(function (resolve, reject) {
        var uniquePrefixes = {};
        var uniqueAsns = {};
        var newPrefixList = [];
        var newAsList = [];
        var _iterator = _createForOfIteratorHelper(_this.config.monitoredPrefixesFiles),
          _step;
        try {
          var _loop = function _loop() {
              var prefixesFile = _step.value;
              var file = _this.config.volume + prefixesFile;
              var monitoredPrefixesFile = {};
              var fileContent;
              if (_fs["default"].existsSync(file)) {
                fileContent = _fs["default"].readFileSync(file, 'utf8');
                try {
                  monitoredPrefixesFile = _jsYaml["default"].load(fileContent) || {};
                  _this._watchPrefixFile(file);
                } catch (error) {
                  reject(new Error("The file " + prefixesFile + " is not valid yml: " + error.message.split(":")[0]));
                  return {
                    v: void 0
                  };
                }
                if (Object.keys(monitoredPrefixesFile).length === 0) {
                  reject(new Error("No prefixes to monitor in " + prefixesFile + ". Please read https://github.com/nttgin/BGPalerter/blob/main/docs/prefixes.md"));
                  return {
                    v: void 0
                  };
                }
                if (_this.validate(monitoredPrefixesFile)) {
                  if (monitoredPrefixesFile.options) {
                    _this.options = Object.assign(_this.options, monitoredPrefixesFile.options);
                    if (monitoredPrefixesFile.options.monitorASns) {
                      var newAsnSet = Object.keys(monitoredPrefixesFile.options.monitorASns).map(function (asn) {
                        if (uniqueAsns[asn]) {
                          reject(new Error("Duplicate entry for monitored AS " + asn));
                          return;
                        }
                        uniqueAsns[asn] = true;
                        var item = Object.assign({
                          asn: new _model.AS(asn),
                          group: ['default']
                        }, monitoredPrefixesFile.options.monitorASns[asn]);
                        if (item.upstreams && item.upstreams.length) {
                          item.upstreams = new _model.AS(item.upstreams);
                        }
                        if (item.downstreams && item.downstreams.length) {
                          item.downstreams = new _model.AS(item.downstreams);
                        }
                        return item;
                      });
                      newAsList = newAsList.concat(newAsnSet);
                    }
                  }
                  var monitoredPrefixes = Object.keys(monitoredPrefixesFile).filter(function (i) {
                    return i !== "options";
                  }).map(function (i) {
                    if (uniquePrefixes[i]) {
                      reject(new Error("Duplicate entry for " + i));
                      return;
                    }
                    uniquePrefixes[i] = true;
                    monitoredPrefixesFile[i].asn = new _model.AS(monitoredPrefixesFile[i].asn);
                    return Object.assign({
                      prefix: i,
                      group: ['default'],
                      ignore: false,
                      excludeMonitors: [],
                      includeMonitors: []
                    }, monitoredPrefixesFile[i]);
                  }).filter(function (i) {
                    return i !== null;
                  });
                  newPrefixList = newPrefixList.concat(monitoredPrefixes);
                }
              }
            },
            _ret;
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            _ret = _loop();
            if (_ret) return _ret.v;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        newPrefixList.sort(function (a, b) {
          return _ipSub["default"].sortByPrefixLength(b.prefix, a.prefix);
        });
        _this.asns = newAsList;
        _this.prefixes = newPrefixList;
        resolve(true);
      });
    });
    _defineProperty(_this, "validate", function (fileContent) {
      var prefixesError = [];
      var optionsError = [];
      var options = fileContent.options;
      if (options && options.monitorASns) {
        for (var item in options.monitorASns) {
          if (!new _model.AS(item).isValid()) {
            optionsError.push("Not a valid AS number in monitorASns");
          }
          var upstreams = options.monitorASns[item].upstreams;
          var downstreams = options.monitorASns[item].downstreams;
          if (upstreams && upstreams.length && !new _model.AS(upstreams).isValid()) {
            optionsError.push("One of the upstream ASes provided for AS".concat(item, " is not valid"));
          }
          if (downstreams && downstreams.length && !new _model.AS(downstreams).isValid()) {
            optionsError.push("One of the downstream ASes provided for AS".concat(item, " is not valid"));
          }
        }
      }
      prefixesError = Object.keys(fileContent).filter(function (i) {
        return i !== "options";
      }).map(function (prefix) {
        var item = fileContent[prefix];
        var asns;
        if (!prefix || !_ipSub["default"].isValidPrefix(prefix)) {
          return "Not a valid prefix: " + prefix;
        }
        if (_this.config.environment === "research") {
          item.asn = item.asn || 0;
        }
        if (["string", "number"].includes(_typeof(item.asn))) {
          asns = [item.asn];
        } else if (item.asn instanceof Array) {
          asns = item.asn;
        } else {
          return "Not a valid AS number for: " + prefix;
        }
        if (!new _model.AS(asns).isValid()) {
          return "Not a valid AS number for: " + prefix;
        }
        if (!["string", "number"].includes(_typeof(item.description))) {
          return "Not a valid description for: " + prefix;
        }
        if (typeof item.ignoreMorespecifics !== "boolean") {
          return "Not a valid ignoreMorespecifics value for: " + prefix;
        }
        if (item.ignore !== undefined && typeof item.ignore !== "boolean") {
          return "Not a valid ignore value for: " + prefix;
        }
        if (item.includeMonitors !== undefined && item.excludeMonitors !== undefined) {
          return "You can define only one of includeMonitor or excludeMonitor for: " + prefix;
        }
        if (item.excludeMonitors !== undefined && !Array.isArray(item.excludeMonitors)) {
          return "Not a valid excludeMonitor value for: " + prefix;
        }
        if (item.includeMonitors !== undefined && !Array.isArray(item.includeMonitors)) {
          return "Not a valid includeMonitor value for: " + prefix;
        }
        if (item.path) {
          (item.path.length ? item.path : [item.path]).map(function (rule) {
            if (!rule.matchDescription) {
              return "No matchDescription set";
            }
            _this._validateRegex(rule.match);
            _this._validateRegex(rule.notMatch);
            if (rule.maxLength && !(typeof rule.maxLength == "number" && rule.maxLength > 1)) {
              return "Not valid maxLength";
            }
            if (rule.minLength && !(typeof rule.minLength == "number" && rule.minLength > 1)) {
              return "Not valid minLength";
            }
          });
        }
        return null;
      });
      var errors = [].concat(_toConsumableArray(prefixesError), optionsError).filter(function (i) {
        return i != null;
      });
      errors.map(function (error) {
        throw new Error(error);
      });
      return errors.length === 0;
    });
    _defineProperty(_this, "_validateRegex", function (regex) {
      if (regex) {
        try {
          new RegExp(regex);
        } catch (e) {
          return "Not valid Path regex" + regex;
        }
      }
    });
    _defineProperty(_this, "getMonitoredMoreSpecifics", function () {
      return _this.prefixes.filter(function (p) {
        return !p.ignoreMorespecifics;
      });
    });
    _defineProperty(_this, "getMonitoredPrefixes", function () {
      return _this.prefixes;
    });
    _defineProperty(_this, "getMonitoredASns", function () {
      return _this.asns;
    });
    _defineProperty(_this, "save", function (content) {
      return new Promise(function (resolve, reject) {
        if (content && _typeof(content) === "object" && Object.keys(content).length > 0) {
          try {
            _fs["default"].writeFileSync(_this.defaultPrefixFile, _jsYaml["default"].dump(content));
            resolve();
          } catch (error) {
            reject(error);
          }
        } else {
          reject(new Error("Empty or not valid prefix list"));
        }
      });
    });
    _defineProperty(_this, "retrieve", function () {
      return new Promise(function (resolve, reject) {
        var prefixes = {};
        var monitorASns = {};
        var _iterator2 = _createForOfIteratorHelper(_this.prefixes),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var rule = _step2.value;
            var item = JSON.parse(JSON.stringify(rule));
            prefixes[rule.prefix] = item;
            item.asn = rule.asn.getValue();
            delete item.prefix;
            if (!item.includeMonitors.length) {
              delete item.includeMonitors;
            }
            if (!item.excludeMonitors.length) {
              delete item.excludeMonitors;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        var _iterator3 = _createForOfIteratorHelper(_this.asns),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var asnRule = _step3.value;
            monitorASns[asnRule.asn.getValue()] = {
              group: [asnRule.group].flat(),
              upstreams: asnRule.upstreams ? asnRule.upstreams.numbers : null,
              downstreams: asnRule.downstreams ? asnRule.downstreams.numbers : null
            };
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        var options = Object.assign({}, _this.options, {
          monitorASns: monitorASns
        });
        resolve(_objectSpread(_objectSpread({}, prefixes), {}, {
          options: options
        }));
      });
    });
    _this.prefixes = [];
    _this.asns = [];
    _this.options = {};
    _this.watcherSet = false;
    if (!_this.config.monitoredPrefixesFiles || _this.config.monitoredPrefixesFiles.length === 0) {
      throw new Error("The monitoredPrefixesFiles key is missing in the config file");
    } else if (_this.config.monitoredPrefixesFiles.length === 1) {
      _this.setReGeneratePrefixList();
    }
    return _this;
  }
  _inherits(InputYml, _Input);
  return _createClass(InputYml);
}(_input["default"]);