"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.createRequireFromPath = void 0;
var _module = _interopRequireDefault(require("module"));
var _path = _interopRequireDefault(require("path"));
const fallback = filename => {
  const mod = new _module.default(filename);
  mod.filename = filename;
  mod.paths = _module.default._nodeModulePaths(_path.default.dirname(filename));
  mod._compile(`module.exports = require;`, filename);
  return mod.exports;
};

// Polyfill Node's `Module.createRequireFromPath` if not present (added in Node v10.12.0)
const createRequireFromPath = _module.default.createRequire || _module.default.createRequireFromPath || fallback;
exports.createRequireFromPath = createRequireFromPath;