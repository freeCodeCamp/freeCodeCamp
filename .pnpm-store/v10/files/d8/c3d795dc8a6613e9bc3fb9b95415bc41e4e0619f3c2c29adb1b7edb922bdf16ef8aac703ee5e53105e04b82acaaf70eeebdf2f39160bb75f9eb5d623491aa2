"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
exports.resolveFSPath = resolveFSPath;
var _path = require("path");
var _module = require("module");
function _default(moduleName, dirname, absoluteRuntime) {
  if (absoluteRuntime === false) return moduleName;
  return resolveAbsoluteRuntime(moduleName, _path.resolve(dirname, absoluteRuntime === true ? "." : absoluteRuntime));
}
function resolveAbsoluteRuntime(moduleName, dirname) {
  try {
    return _path.dirname((((v, w) => (v = v.split("."), w = w.split("."), +v[0] > +w[0] || v[0] == w[0] && +v[1] >= +w[1]))(process.versions.node, "8.9") ? require.resolve : (r, {
      paths: [b]
    }, M = require("module")) => {
      let f = M._findPath(r, M._nodeModulePaths(b).concat(b));
      if (f) return f;
      f = new Error(`Cannot resolve module '${r}'`);
      f.code = "MODULE_NOT_FOUND";
      throw f;
    })(`${moduleName}/package.json`, {
      paths: [dirname]
    })).replace(/\\/g, "/");
  } catch (err) {
    if (err.code !== "MODULE_NOT_FOUND") throw err;
    throw Object.assign(new Error(`Failed to resolve "${moduleName}" relative to "${dirname}"`), {
      code: "BABEL_RUNTIME_NOT_FOUND",
      runtime: moduleName,
      dirname
    });
  }
}
function resolveFSPath(path) {
  return require.resolve(path).replace(/\\/g, "/");
}

//# sourceMappingURL=index.js.map
