;
const pluginCorejs2 = require("babel-plugin-polyfill-corejs2").default;
const pluginRegenerator = require("babel-plugin-polyfill-regenerator").default;
const pluginsCompat = "#__secret_key__@babel/runtime__compatibility";
function createCorejs2Plugin(options) {
  return (api, _, filename) => pluginCorejs2(api, options, filename);
}
function createRegeneratorPlugin(options, useRuntimeRegenerator, corejsPlugin) {
  if (!useRuntimeRegenerator) return corejsPlugin != null ? corejsPlugin : undefined;
  return (api, _, filename) => {
    return Object.assign({}, pluginRegenerator(api, options, filename), {
      inherits: corejsPlugin != null ? corejsPlugin : undefined
    });
  };
}
module.exports = function createBasePolyfillsPlugin({
  corejs,
  regenerator = true
}, runtimeVersion, absoluteImports, corejs3Plugin) {
  let proposals = false;
  let rawVersion;
  if (typeof corejs === "object" && corejs !== null) {
    rawVersion = corejs.version;
    proposals = Boolean(corejs.proposals);
  } else {
    rawVersion = corejs;
  }
  const corejsVersion = rawVersion ? Number(rawVersion) : false;
  if (![false, 2, 3].includes(corejsVersion)) {
    throw new Error(`The \`core-js\` version must be false, 2 or 3, but got ${JSON.stringify(rawVersion)}.`);
  }
  if (proposals && (!corejsVersion || corejsVersion < 3)) {
    throw new Error("The 'proposals' option is only supported when using 'corejs: 3'");
  }
  if (typeof regenerator !== "boolean") {
    throw new Error("The 'regenerator' option must be undefined, or a boolean.");
  }
  const polyfillOpts = {
    method: "usage-pure",
    absoluteImports,
    [pluginsCompat]: {
      useBabelRuntime: true,
      runtimeVersion,
      ext: ""
    }
  };
  return createRegeneratorPlugin(polyfillOpts, regenerator, corejsVersion === 2 ? createCorejs2Plugin(polyfillOpts) : corejsVersion === 3 ? corejs3Plugin : null);
};

//# sourceMappingURL=polyfills.cjs.map
