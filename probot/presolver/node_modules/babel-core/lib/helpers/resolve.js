"use strict";

exports.__esModule = true;

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = function (loc) {
  var relative = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : process.cwd();

  if ((typeof _module2.default === "undefined" ? "undefined" : (0, _typeof3.default)(_module2.default)) === "object") return null;

  var relativeMod = relativeModules[relative];

  if (!relativeMod) {
    relativeMod = new _module2.default();

    var filename = _path2.default.join(relative, ".babelrc");
    relativeMod.id = filename;
    relativeMod.filename = filename;

    relativeMod.paths = _module2.default._nodeModulePaths(relative);
    relativeModules[relative] = relativeMod;
  }

  try {
    return _module2.default._resolveFilename(loc, relativeMod);
  } catch (err) {
    return null;
  }
};

var _module = require("module");

var _module2 = _interopRequireDefault(_module);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var relativeModules = {};

module.exports = exports["default"];