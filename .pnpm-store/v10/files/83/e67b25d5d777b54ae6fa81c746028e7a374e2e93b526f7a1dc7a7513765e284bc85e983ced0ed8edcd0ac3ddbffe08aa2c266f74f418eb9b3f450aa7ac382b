"use strict";

const path = require("path");
const fs = require("fs");
const os = require("os");
const findCacheDir = require("find-cache-dir");
let FILENAME = process.env.BABEL_CACHE_PATH;
exports.initializeCacheFilename = function () {
  FILENAME || (FILENAME = path.join(findCacheDir({
    name: "@babel/register"
  }) || os.homedir() || os.tmpdir(), `.babel.${babel.version}.${babel.getEnv()}.json`));
};
const babel = require("./babel-core.js");
let data = {};
let cacheDirty = false;
let cacheDisabled = false;
function isCacheDisabled() {
  var _process$env$BABEL_DI;
  return (_process$env$BABEL_DI = process.env.BABEL_DISABLE_CACHE) != null ? _process$env$BABEL_DI : cacheDisabled;
}
exports.save = save;
function save() {
  if (isCacheDisabled() || !cacheDirty) return;
  cacheDirty = false;
  let serialised = "{}";
  try {
    serialised = JSON.stringify(data);
  } catch (err) {
    if (err.message === "Invalid string length") {
      err.message = "Cache too large so it's been cleared.";
      console.error(err.stack);
    } else {
      throw err;
    }
  }
  try {
    (((v, w) => (v = v.split("."), w = w.split("."), +v[0] > +w[0] || v[0] == w[0] && +v[1] >= +w[1]))(process.versions.node, "10.12") ? fs.mkdirSync : require("make-dir").sync)(path.dirname(FILENAME), {
      recursive: true
    });
    fs.writeFileSync(FILENAME, serialised);
  } catch (e) {
    switch (e.code) {
      case "ENOENT":
      case "EACCES":
      case "EPERM":
        console.warn(`Babel could not write cache to file: ${FILENAME}
due to a permission issue. Cache is disabled.`);
        cacheDisabled = true;
        break;
      case "EROFS":
        console.warn(`Babel could not write cache to file: ${FILENAME}
because it resides in a readonly filesystem. Cache is disabled.`);
        cacheDisabled = true;
        break;
      default:
        throw e;
    }
  }
}
exports.load = function load() {
  if (isCacheDisabled()) {
    data = {};
    return;
  }
  process.on("exit", save);
  process.nextTick(save);
  let cacheContent;
  try {
    cacheContent = fs.readFileSync(FILENAME);
  } catch (e) {
    switch (e.code) {
      case "EACCES":
        console.warn(`Babel could not read cache file: ${FILENAME}
due to a permission issue. Cache is disabled.`);
        cacheDisabled = true;
      default:
        return;
    }
  }
  try {
    data = JSON.parse(cacheContent);
  } catch (_unused) {}
};
exports.get = function get() {
  return data;
};
exports.setDirty = function setDirty() {
  cacheDirty = true;
};
exports.clear = function clear() {
  data = {};
};

//# sourceMappingURL=cache.js.map
