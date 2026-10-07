"use strict";

const {
  addHook
} = require("pirates");
const sourceMapSupport = require("source-map-support");
let piratesRevert;
const maps = Object.create(null);
function installSourceMapSupport() {
  installSourceMapSupport = () => {};
  sourceMapSupport.install({
    handleUncaughtExceptions: false,
    environment: "node",
    retrieveSourceMap(filename) {
      const map = maps == null ? void 0 : maps[filename];
      if (map) {
        return {
          url: null,
          map: map
        };
      } else {
        return null;
      }
    }
  });
}
{
  const Module = require("module");
  let compiling = false;
  const internalModuleCache = Module._cache;
  var compileBabel7 = function compileBabel7(client, code, filename) {
    if (!client.isLocalClient) return compile(client, code, filename);
    if (compiling) return code;
    const globalModuleCache = Module._cache;
    try {
      compiling = true;
      Module._cache = internalModuleCache;
      return compile(client, code, filename);
    } finally {
      compiling = false;
      Module._cache = globalModuleCache;
    }
  };
}
function compile(client, inputCode, filename) {
  const result = client.transform(inputCode, filename);
  if (result === null) return inputCode;
  const {
    code,
    map
  } = result;
  if (map) {
    maps[filename] = map;
    installSourceMapSupport();
  }
  return code;
}
exports.register = function register(client, opts = {}) {
  var _opts$extensions;
  if (piratesRevert) piratesRevert();
  piratesRevert = addHook(compileBabel7.bind(null, client), {
    exts: (_opts$extensions = opts.extensions) != null ? _opts$extensions : client.getDefaultExtensions(),
    ignoreNodeModules: false
  });
  client.setOptions(opts);
};
exports.revert = function revert() {
  if (piratesRevert) piratesRevert();
};

//# sourceMappingURL=hook.js.map
