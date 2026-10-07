"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCorejs3Plugin = createCorejs3Plugin;
var _babelPluginPolyfillCorejs = require("babel-plugin-polyfill-corejs3");
const pluginCorejs3 = _babelPluginPolyfillCorejs.default || _babelPluginPolyfillCorejs;
const pluginsCompat = "#__secret_key__@babel/runtime__compatibility";
function createCorejs3Plugin(corejs, absoluteImports) {
  let proposals = false;
  let rawVersion;
  if (typeof corejs === "object" && corejs !== null) {
    rawVersion = corejs.version;
    proposals = Boolean(corejs.proposals);
  } else {
    rawVersion = corejs;
  }
  if (!rawVersion) return null;
  const version = rawVersion ? Number(rawVersion) : false;
  if (version !== 3) {
    throw new Error(`The \`core-js\` version must be 3, but got ${JSON.stringify(rawVersion)}.`);
  }
  return (api, _, filename) => pluginCorejs3(api, {
    method: "usage-pure",
    proposals,
    absoluteImports,
    [pluginsCompat]: {
      useBabelRuntime: true,
      ext: ""
    }
  }, filename);
}

//# sourceMappingURL=core-js.js.map
