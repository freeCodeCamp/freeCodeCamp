"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/generic.ts
var generic_exports = {};
__export(generic_exports, {
  MINIMUM_BUN_VERSION: () => import_shared2.MINIMUM_BUN_VERSION,
  getBunBuiltinModules: () => getBunBuiltinModules,
  getBunImplementedNodeModules: () => getBunImplementedNodeModules,
  getBunModules: () => getBunModules,
  isBunBuiltin: () => isBunBuiltin,
  isBunImplementedNodeModule: () => isBunImplementedNodeModule,
  isBunModule: () => isBunModule
});
module.exports = __toCommonJS(generic_exports);
var import_shared = require("./shared");
var import_shared2 = require("./shared");
function isBunModule(moduleName, bunVersion) {
  return (0, import_shared.checkModule)(moduleName, import_shared.bundledBunModules, bunVersion != null ? bunVersion : "latest");
}
function isBunImplementedNodeModule(moduleName, bunVersion) {
  return (0, import_shared.checkModule)(moduleName, import_shared.implementedNodeModules, bunVersion != null ? bunVersion : "latest");
}
function isBunBuiltin(moduleName, bunVersion) {
  return isBunModule(moduleName, bunVersion) || isBunImplementedNodeModule(moduleName, bunVersion);
}
function getBunModules(bunVersion) {
  return (0, import_shared.getModules)(import_shared.bundledBunModules, bunVersion != null ? bunVersion : "latest");
}
function getBunImplementedNodeModules(bunVersion) {
  return (0, import_shared.getModules)(import_shared.implementedNodeModules, bunVersion != null ? bunVersion : "latest");
}
function getBunBuiltinModules(bunVersion) {
  return [...getBunModules(bunVersion), ...getBunImplementedNodeModules(bunVersion)];
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MINIMUM_BUN_VERSION,
  getBunBuiltinModules,
  getBunImplementedNodeModules,
  getBunModules,
  isBunBuiltin,
  isBunImplementedNodeModule,
  isBunModule
});
