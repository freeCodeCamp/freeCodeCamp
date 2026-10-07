const Module = require("module");
const globalModuleCache = Module._cache;
const internalModuleCache = Object.create(null);
Module._cache = internalModuleCache;
const node = require("./node.js");
Module._cache = globalModuleCache;
const smsPath = require.resolve("source-map-support");
globalModuleCache[smsPath] = internalModuleCache[smsPath];
const register = node.default;
register();
module.exports = node;

//# sourceMappingURL=nodeWrapper.js.map
