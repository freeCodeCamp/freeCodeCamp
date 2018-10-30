"use strict";

exports.__esModule = true;
exports.transformFromAst = exports.transform = exports.analyse = exports.Pipeline = exports.OptionManager = exports.traverse = exports.types = exports.messages = exports.util = exports.version = exports.resolvePreset = exports.resolvePlugin = exports.template = exports.buildExternalHelpers = exports.options = exports.File = undefined;

var _file = require("../transformation/file");

Object.defineProperty(exports, "File", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_file).default;
  }
});

var _config = require("../transformation/file/options/config");

Object.defineProperty(exports, "options", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_config).default;
  }
});

var _buildExternalHelpers = require("../tools/build-external-helpers");

Object.defineProperty(exports, "buildExternalHelpers", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_buildExternalHelpers).default;
  }
});

var _babelTemplate = require("babel-template");

Object.defineProperty(exports, "template", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_babelTemplate).default;
  }
});

var _resolvePlugin = require("../helpers/resolve-plugin");

Object.defineProperty(exports, "resolvePlugin", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_resolvePlugin).default;
  }
});

var _resolvePreset = require("../helpers/resolve-preset");

Object.defineProperty(exports, "resolvePreset", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_resolvePreset).default;
  }
});

var _package = require("../../package");

Object.defineProperty(exports, "version", {
  enumerable: true,
  get: function get() {
    return _package.version;
  }
});
exports.Plugin = Plugin;
exports.transformFile = transformFile;
exports.transformFileSync = transformFileSync;

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _util = require("../util");

var util = _interopRequireWildcard(_util);

var _babelMessages = require("babel-messages");

var messages = _interopRequireWildcard(_babelMessages);

var _babelTypes = require("babel-types");

var t = _interopRequireWildcard(_babelTypes);

var _babelTraverse = require("babel-traverse");

var _babelTraverse2 = _interopRequireDefault(_babelTraverse);

var _optionManager = require("../transformation/file/options/option-manager");

var _optionManager2 = _interopRequireDefault(_optionManager);

var _pipeline = require("../transformation/pipeline");

var _pipeline2 = _interopRequireDefault(_pipeline);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.util = util;
exports.messages = messages;
exports.types = t;
exports.traverse = _babelTraverse2.default;
exports.OptionManager = _optionManager2.default;
function Plugin(alias) {
  throw new Error("The (" + alias + ") Babel 5 plugin is being run with Babel 6.");
}

exports.Pipeline = _pipeline2.default;


var pipeline = new _pipeline2.default();
var analyse = exports.analyse = pipeline.analyse.bind(pipeline);
var transform = exports.transform = pipeline.transform.bind(pipeline);
var transformFromAst = exports.transformFromAst = pipeline.transformFromAst.bind(pipeline);

function transformFile(filename, opts, callback) {
  if (typeof opts === "function") {
    callback = opts;
    opts = {};
  }

  opts.filename = filename;

  _fs2.default.readFile(filename, function (err, code) {
    var result = void 0;

    if (!err) {
      try {
        result = transform(code, opts);
      } catch (_err) {
        err = _err;
      }
    }

    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
}

function transformFileSync(filename) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  opts.filename = filename;
  return transform(_fs2.default.readFileSync(filename, "utf8"), opts);
}