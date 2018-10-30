"use strict";

exports.__esModule = true;

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _node = require("../../../api/node");

var context = _interopRequireWildcard(_node);

var _plugin2 = require("../../plugin");

var _plugin3 = _interopRequireDefault(_plugin2);

var _babelMessages = require("babel-messages");

var messages = _interopRequireWildcard(_babelMessages);

var _index = require("./index");

var _resolvePlugin = require("../../../helpers/resolve-plugin");

var _resolvePlugin2 = _interopRequireDefault(_resolvePlugin);

var _resolvePreset = require("../../../helpers/resolve-preset");

var _resolvePreset2 = _interopRequireDefault(_resolvePreset);

var _cloneDeepWith = require("lodash/cloneDeepWith");

var _cloneDeepWith2 = _interopRequireDefault(_cloneDeepWith);

var _clone = require("lodash/clone");

var _clone2 = _interopRequireDefault(_clone);

var _merge = require("../../../helpers/merge");

var _merge2 = _interopRequireDefault(_merge);

var _config2 = require("./config");

var _config3 = _interopRequireDefault(_config2);

var _removed = require("./removed");

var _removed2 = _interopRequireDefault(_removed);

var _buildConfigChain = require("./build-config-chain");

var _buildConfigChain2 = _interopRequireDefault(_buildConfigChain);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OptionManager = function () {
  function OptionManager(log) {
    (0, _classCallCheck3.default)(this, OptionManager);

    this.resolvedConfigs = [];
    this.options = OptionManager.createBareOptions();
    this.log = log;
  }

  OptionManager.memoisePluginContainer = function memoisePluginContainer(fn, loc, i, alias) {
    for (var _iterator = OptionManager.memoisedPlugins, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var cache = _ref;

      if (cache.container === fn) return cache.plugin;
    }

    var obj = void 0;

    if (typeof fn === "function") {
      obj = fn(context);
    } else {
      obj = fn;
    }

    if ((typeof obj === "undefined" ? "undefined" : (0, _typeof3.default)(obj)) === "object") {
      var _plugin = new _plugin3.default(obj, alias);
      OptionManager.memoisedPlugins.push({
        container: fn,
        plugin: _plugin
      });
      return _plugin;
    } else {
      throw new TypeError(messages.get("pluginNotObject", loc, i, typeof obj === "undefined" ? "undefined" : (0, _typeof3.default)(obj)) + loc + i);
    }
  };

  OptionManager.createBareOptions = function createBareOptions() {
    var opts = {};

    for (var _key in _config3.default) {
      var opt = _config3.default[_key];
      opts[_key] = (0, _clone2.default)(opt.default);
    }

    return opts;
  };

  OptionManager.normalisePlugin = function normalisePlugin(plugin, loc, i, alias) {
    plugin = plugin.__esModule ? plugin.default : plugin;

    if (!(plugin instanceof _plugin3.default)) {
      if (typeof plugin === "function" || (typeof plugin === "undefined" ? "undefined" : (0, _typeof3.default)(plugin)) === "object") {
        plugin = OptionManager.memoisePluginContainer(plugin, loc, i, alias);
      } else {
        throw new TypeError(messages.get("pluginNotFunction", loc, i, typeof plugin === "undefined" ? "undefined" : (0, _typeof3.default)(plugin)));
      }
    }

    plugin.init(loc, i);

    return plugin;
  };

  OptionManager.normalisePlugins = function normalisePlugins(loc, dirname, plugins) {
    return plugins.map(function (val, i) {
      var plugin = void 0,
          options = void 0;

      if (!val) {
        throw new TypeError("Falsy value found in plugins");
      }

      if (Array.isArray(val)) {
        plugin = val[0];
        options = val[1];
      } else {
        plugin = val;
      }

      var alias = typeof plugin === "string" ? plugin : loc + "$" + i;

      if (typeof plugin === "string") {
        var pluginLoc = (0, _resolvePlugin2.default)(plugin, dirname);
        if (pluginLoc) {
          plugin = require(pluginLoc);
        } else {
          throw new ReferenceError(messages.get("pluginUnknown", plugin, loc, i, dirname));
        }
      }

      plugin = OptionManager.normalisePlugin(plugin, loc, i, alias);

      return [plugin, options];
    });
  };

  OptionManager.prototype.mergeOptions = function mergeOptions(_ref2) {
    var _this = this;

    var rawOpts = _ref2.options,
        extendingOpts = _ref2.extending,
        alias = _ref2.alias,
        loc = _ref2.loc,
        dirname = _ref2.dirname;

    alias = alias || "foreign";
    if (!rawOpts) return;

    if ((typeof rawOpts === "undefined" ? "undefined" : (0, _typeof3.default)(rawOpts)) !== "object" || Array.isArray(rawOpts)) {
      this.log.error("Invalid options type for " + alias, TypeError);
    }

    var opts = (0, _cloneDeepWith2.default)(rawOpts, function (val) {
      if (val instanceof _plugin3.default) {
        return val;
      }
    });

    dirname = dirname || process.cwd();
    loc = loc || alias;

    for (var _key2 in opts) {
      var option = _config3.default[_key2];

      if (!option && this.log) {
        if (_removed2.default[_key2]) {
          this.log.error("Using removed Babel 5 option: " + alias + "." + _key2 + " - " + _removed2.default[_key2].message, ReferenceError);
        } else {
          var unknownOptErr = "Unknown option: " + alias + "." + _key2 + ". Check out http://babeljs.io/docs/usage/options/ for more information about options.";
          var presetConfigErr = "A common cause of this error is the presence of a configuration options object without the corresponding preset name. Example:\n\nInvalid:\n  `{ presets: [{option: value}] }`\nValid:\n  `{ presets: [['presetName', {option: value}]] }`\n\nFor more detailed information on preset configuration, please see https://babeljs.io/docs/en/plugins#pluginpresets-options.";


          this.log.error(unknownOptErr + "\n\n" + presetConfigErr, ReferenceError);
        }
      }
    }

    (0, _index.normaliseOptions)(opts);

    if (opts.plugins) {
      opts.plugins = OptionManager.normalisePlugins(loc, dirname, opts.plugins);
    }

    if (opts.presets) {
      if (opts.passPerPreset) {
        opts.presets = this.resolvePresets(opts.presets, dirname, function (preset, presetLoc) {
          _this.mergeOptions({
            options: preset,
            extending: preset,
            alias: presetLoc,
            loc: presetLoc,
            dirname: dirname
          });
        });
      } else {
        this.mergePresets(opts.presets, dirname);
        delete opts.presets;
      }
    }

    if (rawOpts === extendingOpts) {
      (0, _assign2.default)(extendingOpts, opts);
    } else {
      (0, _merge2.default)(extendingOpts || this.options, opts);
    }
  };

  OptionManager.prototype.mergePresets = function mergePresets(presets, dirname) {
    var _this2 = this;

    this.resolvePresets(presets, dirname, function (presetOpts, presetLoc) {
      _this2.mergeOptions({
        options: presetOpts,
        alias: presetLoc,
        loc: presetLoc,
        dirname: _path2.default.dirname(presetLoc || "")
      });
    });
  };

  OptionManager.prototype.resolvePresets = function resolvePresets(presets, dirname, onResolve) {
    return presets.map(function (val) {
      var options = void 0;
      if (Array.isArray(val)) {
        if (val.length > 2) {
          throw new Error("Unexpected extra options " + (0, _stringify2.default)(val.slice(2)) + " passed to preset.");
        }

        var _val = val;
        val = _val[0];
        options = _val[1];
      }

      var presetLoc = void 0;
      try {
        if (typeof val === "string") {
          presetLoc = (0, _resolvePreset2.default)(val, dirname);

          if (!presetLoc) {
            throw new Error("Couldn't find preset " + (0, _stringify2.default)(val) + " relative to directory " + (0, _stringify2.default)(dirname));
          }

          val = require(presetLoc);
        }

        if ((typeof val === "undefined" ? "undefined" : (0, _typeof3.default)(val)) === "object" && val.__esModule) {
          if (val.default) {
            val = val.default;
          } else {
            var _val2 = val,
                __esModule = _val2.__esModule,
                rest = (0, _objectWithoutProperties3.default)(_val2, ["__esModule"]);

            val = rest;
          }
        }

        if ((typeof val === "undefined" ? "undefined" : (0, _typeof3.default)(val)) === "object" && val.buildPreset) val = val.buildPreset;

        if (typeof val !== "function" && options !== undefined) {
          throw new Error("Options " + (0, _stringify2.default)(options) + " passed to " + (presetLoc || "a preset") + " which does not accept options.");
        }

        if (typeof val === "function") val = val(context, options, { dirname: dirname });

        if ((typeof val === "undefined" ? "undefined" : (0, _typeof3.default)(val)) !== "object") {
          throw new Error("Unsupported preset format: " + val + ".");
        }

        onResolve && onResolve(val, presetLoc);
      } catch (e) {
        if (presetLoc) {
          e.message += " (While processing preset: " + (0, _stringify2.default)(presetLoc) + ")";
        }
        throw e;
      }
      return val;
    });
  };

  OptionManager.prototype.normaliseOptions = function normaliseOptions() {
    var opts = this.options;

    for (var _key3 in _config3.default) {
      var option = _config3.default[_key3];
      var val = opts[_key3];

      if (!val && option.optional) continue;

      if (option.alias) {
        opts[option.alias] = opts[option.alias] || val;
      } else {
        opts[_key3] = val;
      }
    }
  };

  OptionManager.prototype.init = function init() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    for (var _iterator2 = (0, _buildConfigChain2.default)(opts, this.log), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
      var _ref3;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref3 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref3 = _i2.value;
      }

      var _config = _ref3;

      this.mergeOptions(_config);
    }

    this.normaliseOptions(opts);

    return this.options;
  };

  return OptionManager;
}();

exports.default = OptionManager;


OptionManager.memoisedPlugins = [];
module.exports = exports["default"];