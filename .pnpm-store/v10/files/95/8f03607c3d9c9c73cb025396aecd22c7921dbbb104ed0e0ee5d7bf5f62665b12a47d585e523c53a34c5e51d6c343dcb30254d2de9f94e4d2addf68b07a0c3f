"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getModuleName;
const originalGetModuleName = getModuleName;
exports.default = getModuleName = function getModuleName(rootOpts, pluginOpts) {
  var _pluginOpts$moduleId, _pluginOpts$moduleIds, _pluginOpts$getModule, _pluginOpts$moduleRoo;
  return originalGetModuleName(rootOpts, {
    moduleId: (_pluginOpts$moduleId = pluginOpts.moduleId) != null ? _pluginOpts$moduleId : rootOpts.moduleId,
    moduleIds: (_pluginOpts$moduleIds = pluginOpts.moduleIds) != null ? _pluginOpts$moduleIds : rootOpts.moduleIds,
    getModuleId: (_pluginOpts$getModule = pluginOpts.getModuleId) != null ? _pluginOpts$getModule : rootOpts.getModuleId,
    moduleRoot: (_pluginOpts$moduleRoo = pluginOpts.moduleRoot) != null ? _pluginOpts$moduleRoo : rootOpts.moduleRoot
  });
};
function getModuleName(rootOpts, pluginOpts) {
  const {
    filename,
    filenameRelative = filename,
    sourceRoot = pluginOpts.moduleRoot
  } = rootOpts;
  const {
    moduleId,
    moduleIds = !!moduleId,
    getModuleId,
    moduleRoot = sourceRoot
  } = pluginOpts;
  if (!moduleIds) return null;
  if (moduleId != null && !getModuleId) {
    return moduleId;
  }
  let moduleName = moduleRoot != null ? moduleRoot + "/" : "";
  if (filenameRelative) {
    const sourceRootReplacer = sourceRoot != null ? new RegExp("^" + sourceRoot + "/?") : "";
    moduleName += filenameRelative.replace(sourceRootReplacer, "").replace(/\.\w*$/, "");
  }
  moduleName = moduleName.replace(/\\/g, "/");
  if (getModuleId) {
    return getModuleId(moduleName) || moduleName;
  } else {
    return moduleName;
  }
}

//# sourceMappingURL=get-module-name.js.map
