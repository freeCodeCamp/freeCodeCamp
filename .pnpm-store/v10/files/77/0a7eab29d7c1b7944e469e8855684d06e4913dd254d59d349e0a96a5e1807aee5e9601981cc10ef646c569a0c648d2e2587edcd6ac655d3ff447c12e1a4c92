"use strict";

exports.__esModule = true;
exports.importGatsbyPlugin = importGatsbyPlugin;
exports.setGatsbyPluginCache = setGatsbyPluginCache;
var _resolveJsFilePath = require("../bootstrap/resolve-js-file-path");
var _preferDefault = require("../bootstrap/prefer-default");
const pluginModuleCache = new Map();
function setGatsbyPluginCache(plugin, module, moduleObject) {
  const key = `${plugin.name}/${module}`;
  pluginModuleCache.set(key, moduleObject);
  const additionalPrefix = plugin.importKey || plugin.resolve;
  if (additionalPrefix) {
    const key = `${additionalPrefix}/${module}`;
    pluginModuleCache.set(key, moduleObject);
  }
}
async function importGatsbyPlugin(plugin, module) {
  const key = `${plugin.importKey || plugin.resolve || plugin.name}/${module}`;
  let pluginModule = pluginModuleCache.get(key);
  if (!pluginModule) {
    let importPluginModulePath;
    if (module === `gatsby-node` && plugin.resolvedCompiledGatsbyNode) {
      importPluginModulePath = plugin.resolvedCompiledGatsbyNode;
    } else {
      importPluginModulePath = `${plugin.resolve}/${module}`;
    }
    const pluginFilePath = await (0, _resolveJsFilePath.resolveJSFilepath)({
      rootDir: process.cwd(),
      filePath: importPluginModulePath
    });
    const rawPluginModule = await import((0, _resolveJsFilePath.maybeAddFileProtocol)(pluginFilePath));

    // If the module is cjs, the properties we care about are nested under a top-level `default` property
    pluginModule = (0, _preferDefault.preferDefault)(rawPluginModule);
    pluginModuleCache.set(key, pluginModule);
  }
  return pluginModule;
}
//# sourceMappingURL=import-gatsby-plugin.js.map