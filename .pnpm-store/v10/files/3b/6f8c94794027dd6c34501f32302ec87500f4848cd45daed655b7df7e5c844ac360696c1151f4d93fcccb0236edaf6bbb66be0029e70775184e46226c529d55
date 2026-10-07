'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const _path = require('./shared/pathe.BSlhyZSM.cjs');

const delimiter = /* @__PURE__ */ (() => globalThis.process?.platform === "win32" ? ";" : ":")();
const _platforms = { posix: void 0, win32: void 0 };
const mix = (del = delimiter) => {
  return new Proxy(_path._path, {
    get(_, prop) {
      if (prop === "delimiter") return del;
      if (prop === "posix") return posix;
      if (prop === "win32") return win32;
      return _platforms[prop] || _path._path[prop];
    }
  });
};
const posix = /* @__PURE__ */ mix(":");
const win32 = /* @__PURE__ */ mix(";");

exports.basename = _path.basename;
exports.dirname = _path.dirname;
exports.extname = _path.extname;
exports.format = _path.format;
exports.isAbsolute = _path.isAbsolute;
exports.join = _path.join;
exports.matchesGlob = _path.matchesGlob;
exports.normalize = _path.normalize;
exports.normalizeString = _path.normalizeString;
exports.parse = _path.parse;
exports.relative = _path.relative;
exports.resolve = _path.resolve;
exports.sep = _path.sep;
exports.toNamespacedPath = _path.toNamespacedPath;
exports.default = posix;
exports.delimiter = delimiter;
exports.posix = posix;
exports.win32 = win32;
