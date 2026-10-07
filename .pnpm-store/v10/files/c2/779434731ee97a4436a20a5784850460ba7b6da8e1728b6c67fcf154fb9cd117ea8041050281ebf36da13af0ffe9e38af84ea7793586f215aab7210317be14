"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeStaticFileCache = makeStaticFileCache;
var _caching = require("../caching.js");
var fs = require("../../gensync-utils/fs.js");
function _fs2() {
  const data = require("fs");
  _fs2 = function () {
    return data;
  };
  return data;
}
function makeStaticFileCache(fn) {
  return (0, _caching.makeStrongCache)(function* (filepath, cache) {
    const cached = cache.invalidate(() => fileMtime(filepath));
    if (cached === null) {
      return null;
    }
    return fn(filepath, yield* fs.readFile(filepath, "utf8"));
  });
}
function fileMtime(filepath) {
  if (!_fs2().existsSync(filepath)) return null;
  try {
    return +_fs2().statSync(filepath).mtime;
  } catch (e) {
    if (e.code !== "ENOENT" && e.code !== "ENOTDIR") throw e;
  }
  return null;
}
0 && 0;

//# sourceMappingURL=utils.js.map
