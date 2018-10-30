"use strict";

exports.__esModule = true;

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

exports.default = buildConfigChain;

var _resolve = require("../../../helpers/resolve");

var _resolve2 = _interopRequireDefault(_resolve);

var _json = require("json5");

var _json2 = _interopRequireDefault(_json);

var _pathIsAbsolute = require("path-is-absolute");

var _pathIsAbsolute2 = _interopRequireDefault(_pathIsAbsolute);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var existsCache = {};
var jsonCache = {};

var BABELIGNORE_FILENAME = ".babelignore";
var BABELRC_FILENAME = ".babelrc";
var PACKAGE_FILENAME = "package.json";

function exists(filename) {
  var cached = existsCache[filename];
  if (cached == null) {
    return existsCache[filename] = _fs2.default.existsSync(filename);
  } else {
    return cached;
  }
}

function buildConfigChain() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var log = arguments[1];

  var filename = opts.filename;
  var builder = new ConfigChainBuilder(log);

  if (opts.babelrc !== false) {
    builder.findConfigs(filename);
  }

  builder.mergeConfig({
    options: opts,
    alias: "base",
    dirname: filename && _path2.default.dirname(filename)
  });

  return builder.configs;
}

var ConfigChainBuilder = function () {
  function ConfigChainBuilder(log) {
    (0, _classCallCheck3.default)(this, ConfigChainBuilder);

    this.resolvedConfigs = [];
    this.configs = [];
    this.log = log;
  }

  ConfigChainBuilder.prototype.findConfigs = function findConfigs(loc) {
    if (!loc) return;

    if (!(0, _pathIsAbsolute2.default)(loc)) {
      loc = _path2.default.join(process.cwd(), loc);
    }

    var foundConfig = false;
    var foundIgnore = false;

    while (loc !== (loc = _path2.default.dirname(loc))) {
      if (!foundConfig) {
        var configLoc = _path2.default.join(loc, BABELRC_FILENAME);
        if (exists(configLoc)) {
          this.addConfig(configLoc);
          foundConfig = true;
        }

        var pkgLoc = _path2.default.join(loc, PACKAGE_FILENAME);
        if (!foundConfig && exists(pkgLoc)) {
          foundConfig = this.addConfig(pkgLoc, "babel", JSON);
        }
      }

      if (!foundIgnore) {
        var ignoreLoc = _path2.default.join(loc, BABELIGNORE_FILENAME);
        if (exists(ignoreLoc)) {
          this.addIgnoreConfig(ignoreLoc);
          foundIgnore = true;
        }
      }

      if (foundIgnore && foundConfig) return;
    }
  };

  ConfigChainBuilder.prototype.addIgnoreConfig = function addIgnoreConfig(loc) {
    var file = _fs2.default.readFileSync(loc, "utf8");
    var lines = file.split("\n");

    lines = lines.map(function (line) {
      return line.replace(/#(.*?)$/, "").trim();
    }).filter(function (line) {
      return !!line;
    });

    if (lines.length) {
      this.mergeConfig({
        options: { ignore: lines },
        alias: loc,
        dirname: _path2.default.dirname(loc)
      });
    }
  };

  ConfigChainBuilder.prototype.addConfig = function addConfig(loc, key) {
    var json = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _json2.default;

    if (this.resolvedConfigs.indexOf(loc) >= 0) {
      return false;
    }

    this.resolvedConfigs.push(loc);

    var content = _fs2.default.readFileSync(loc, "utf8");
    var options = void 0;

    try {
      options = jsonCache[content] = jsonCache[content] || json.parse(content);
      if (key) options = options[key];
    } catch (err) {
      err.message = loc + ": Error while parsing JSON - " + err.message;
      throw err;
    }

    this.mergeConfig({
      options: options,
      alias: loc,
      dirname: _path2.default.dirname(loc)
    });

    return !!options;
  };

  ConfigChainBuilder.prototype.mergeConfig = function mergeConfig(_ref) {
    var options = _ref.options,
        alias = _ref.alias,
        loc = _ref.loc,
        dirname = _ref.dirname;

    if (!options) {
      return false;
    }

    options = (0, _assign2.default)({}, options);

    dirname = dirname || process.cwd();
    loc = loc || alias;

    if (options.extends) {
      var extendsLoc = (0, _resolve2.default)(options.extends, dirname);
      if (extendsLoc) {
        this.addConfig(extendsLoc);
      } else {
        if (this.log) this.log.error("Couldn't resolve extends clause of " + options.extends + " in " + alias);
      }
      delete options.extends;
    }

    this.configs.push({
      options: options,
      alias: alias,
      loc: loc,
      dirname: dirname
    });

    var envOpts = void 0;
    var envKey = process.env.BABEL_ENV || process.env.NODE_ENV || "development";
    if (options.env) {
      envOpts = options.env[envKey];
      delete options.env;
    }

    this.mergeConfig({
      options: envOpts,
      alias: alias + ".env." + envKey,
      dirname: dirname
    });
  };

  return ConfigChainBuilder;
}();

module.exports = exports["default"];