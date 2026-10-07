"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_3VVCXIQ5_exports = {};
__export(chunk_3VVCXIQ5_exports, {
  cleanupCache: () => cleanupCache
});
module.exports = __toCommonJS(chunk_3VVCXIQ5_exports);
var import_chunk_FSAAZH62 = require("./chunk-FSAAZH62.js");
var import_chunk_LONQL55G = require("./chunk-LONQL55G.js");
var import_chunk_QGM4M3NI = require("./chunk-QGM4M3NI.js");
var import_node_fs = __toESM(require("node:fs"));
var import_node_path = __toESM(require("node:path"));
var import_debug = __toESM(require("@prisma/debug"));
var import_p_map = (0, import_chunk_QGM4M3NI.__toESM)((0, import_chunk_FSAAZH62.require_p_map)());
var debug = (0, import_debug.default)("cleanupCache");
async function cleanupCache(n = 5) {
  try {
    const rootCacheDir = await (0, import_chunk_LONQL55G.getRootCacheDir)();
    if (!rootCacheDir) {
      debug("no rootCacheDir found");
      return;
    }
    const channel = "master";
    const cacheDir = import_node_path.default.join(rootCacheDir, channel);
    const dirs = await import_node_fs.default.promises.readdir(cacheDir);
    const dirsWithMeta = await Promise.all(
      dirs.map(async (dirName) => {
        const dir = import_node_path.default.join(cacheDir, dirName);
        const statResult = await import_node_fs.default.promises.stat(dir);
        return {
          dir,
          created: statResult.birthtime
        };
      })
    );
    dirsWithMeta.sort((a, b) => a.created < b.created ? 1 : -1);
    const dirsToRemove = dirsWithMeta.slice(n);
    await (0, import_p_map.default)(dirsToRemove, (dir) => import_node_fs.default.promises.rm(dir.dir, { force: true, recursive: true }), { concurrency: 20 });
  } catch (e) {
  }
}
