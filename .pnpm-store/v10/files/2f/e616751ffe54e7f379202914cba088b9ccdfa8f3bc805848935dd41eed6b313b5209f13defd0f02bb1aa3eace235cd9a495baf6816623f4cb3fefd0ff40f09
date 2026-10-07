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

// src/shared.ts
var shared_exports = {};
__export(shared_exports, {
  MINIMUM_BUN_VERSION: () => MINIMUM_BUN_VERSION,
  bundledBunModules: () => bun_modules_default,
  checkModule: () => checkModule,
  getModules: () => getModules,
  implementedNodeModules: () => implemented_node_modules_default
});
module.exports = __toCommonJS(shared_exports);
var import_valid = __toESM(require("semver/functions/valid"));
var import_satisfies = __toESM(require("semver/functions/satisfies"));
var import_lt = __toESM(require("semver/functions/lt"));

// src/assets/bun-modules.json
var bun_modules_default = {
  bun: true,
  "bun:ffi": true,
  "bun:jsc": true,
  "bun:sqlite": true,
  "bun:test": true,
  "bun:wrap": true
};

// src/assets/implemented-node-modules.json
var implemented_node_modules_default = {
  assert: true,
  "assert/strict": true,
  "node:assert": true,
  "node:assert/strict": true,
  async_hooks: true,
  "node:async_hooks": true,
  "async_hooks/async_context": true,
  buffer: true,
  "node:buffer": true,
  child_process: true,
  "node:child_process": true,
  constants: true,
  "node:constants": true,
  cluster: ">= 1.1.25",
  "node:cluster": ">= 1.1.25",
  console: true,
  "node:console": true,
  crypto: true,
  "node:crypto": true,
  dgram: ">= 1.1.6",
  "node:dgram": ">= 1.1.6",
  diagnostics_channel: true,
  "node:diagnostics_channel": true,
  dns: true,
  "dns/promises": true,
  "node:dns": true,
  "node:dns/promises": true,
  domain: true,
  "node:domain": true,
  events: true,
  "node:events": true,
  fs: true,
  "fs/promises": true,
  "node:fs": true,
  "node:fs/promises": true,
  http: true,
  "node:http": true,
  http2: ">= 1.0.13",
  "node:http2": ">= 1.0.13",
  https: true,
  "node:https": true,
  module: true,
  "node:module": true,
  net: true,
  "node:net": true,
  os: true,
  "node:os": true,
  path: true,
  "path/posix": true,
  "path/win32": true,
  "node:path": true,
  "node:path/posix": true,
  "node:path/win32": true,
  perf_hooks: true,
  "node:perf_hooks": true,
  process: true,
  "node:process": true,
  punycode: true,
  "node:punycode": true,
  querystring: true,
  "node:querystring": true,
  readline: true,
  "readline/promises": true,
  "node:readline": true,
  "node:readline/promises": true,
  stream: true,
  "stream/consumers": true,
  "stream/promises": true,
  "stream/web": true,
  "node:stream": true,
  "node:stream/consumers": true,
  "node:stream/promises": true,
  "node:stream/web": true,
  string_decoder: true,
  "node:string_decoder": true,
  sys: true,
  "node:sys": true,
  timers: true,
  "timers/promises": true,
  "node:timers": true,
  "node:timers/promises": true,
  tls: true,
  "node:tls": true,
  tty: true,
  "node:tty": true,
  url: true,
  "node:url": true,
  util: true,
  "util/types": true,
  "node:util": true,
  "node:util/types": true,
  v8: true,
  "node:v8": true,
  vm: true,
  "node:vm": true,
  wasi: true,
  "node:wasi": true,
  worker_threads: true,
  "node:worker_threads": true,
  zlib: true,
  "node:zlib": true,
  "node:test": ">=1.2.6"
};

// src/shared.ts
var MINIMUM_BUN_VERSION = "1.0.0";
function checkModule(moduleName, modules, bunVersion) {
  if (typeof moduleName !== "string") throw new TypeError("Module name must be a string");
  if (!(moduleName in modules)) return false;
  const targetBunVersion = toSemVerStringified(bunVersion);
  if ((0, import_lt.default)(targetBunVersion, MINIMUM_BUN_VERSION)) {
    throw new RangeError(`Bun version must be at least ${MINIMUM_BUN_VERSION}`);
  }
  return satisfiesVersionRange(targetBunVersion, modules[moduleName]);
}
function getModules(modules, bunVersion) {
  const targetBunVersion = toSemVerStringified(bunVersion);
  if ((0, import_lt.default)(targetBunVersion, MINIMUM_BUN_VERSION)) {
    throw new RangeError(`Bun version must be at least ${MINIMUM_BUN_VERSION}`);
  }
  return Object.keys(modules).filter((moduleName) => {
    return satisfiesVersionRange(targetBunVersion, modules[moduleName]);
  });
}
function satisfiesVersionRange(version, versionRange) {
  if (typeof versionRange === "boolean") return versionRange;
  return (0, import_satisfies.default)(version, versionRange);
}
function toSemVerStringified(input) {
  if (typeof input !== "string") throw new TypeError("Bun version must be a string");
  if (input === "latest") return "999.999.999";
  if ((0, import_valid.default)(input)) return input;
  throw new TypeError("Bun version must be a string like '1.0.0' or 'latest'");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MINIMUM_BUN_VERSION,
  bundledBunModules,
  checkModule,
  getModules,
  implementedNodeModules
});
