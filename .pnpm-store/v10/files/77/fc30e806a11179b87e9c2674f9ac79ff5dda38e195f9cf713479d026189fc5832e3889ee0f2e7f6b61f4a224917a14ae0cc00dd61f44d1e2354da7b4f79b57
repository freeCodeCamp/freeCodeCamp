// src/bun.ts
import { builtinModules } from "node:module";
import { checkModule, getModules, bundledBunModules, implementedNodeModules } from "./shared";
import { MINIMUM_BUN_VERSION } from "./shared";
var currentBunVersion = Bun.version;
var bunModules = { ...bundledBunModules };
for (const moduleName of builtinModules) {
  if (moduleName.startsWith("bun:")) {
    bunModules[moduleName] ??= `>=${currentBunVersion}`;
  }
}
function isBunModule(moduleName, bunVersion) {
  return checkModule(moduleName, bunModules, bunVersion ?? currentBunVersion);
}
function isBunImplementedNodeModule(moduleName, bunVersion) {
  return checkModule(moduleName, implementedNodeModules, bunVersion ?? currentBunVersion);
}
function isBunBuiltin(moduleName, bunVersion) {
  return isBunModule(moduleName, bunVersion) || isBunImplementedNodeModule(moduleName, bunVersion);
}
function getBunModules(bunVersion) {
  return getModules(bunModules, bunVersion ?? currentBunVersion);
}
function getBunImplementedNodeModules(bunVersion) {
  return getModules(implementedNodeModules, bunVersion ?? currentBunVersion);
}
function getBunBuiltinModules(bunVersion) {
  return [...getBunModules(bunVersion), ...getBunImplementedNodeModules(bunVersion)];
}
export {
  MINIMUM_BUN_VERSION,
  getBunBuiltinModules,
  getBunImplementedNodeModules,
  getBunModules,
  isBunBuiltin,
  isBunImplementedNodeModule,
  isBunModule
};
