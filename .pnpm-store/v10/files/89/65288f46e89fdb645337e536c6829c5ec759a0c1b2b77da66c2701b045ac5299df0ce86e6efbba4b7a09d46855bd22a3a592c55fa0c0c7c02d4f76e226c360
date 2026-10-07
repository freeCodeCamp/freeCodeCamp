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
var extension_exports = {};
__export(extension_exports, {
  isPlaywrightExtensionInstalled: () => isPlaywrightExtensionInstalled,
  playwrightExtensionId: () => playwrightExtensionId,
  playwrightExtensionInstallUrl: () => playwrightExtensionInstallUrl
});
module.exports = __toCommonJS(extension_exports);
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
const playwrightExtensionId = "mmlmfjhmonkocbjadbfplnigmagldckm";
const playwrightExtensionInstallUrl = `https://chromewebstore.google.com/detail/playwright-extension/${playwrightExtensionId}`;
async function isPlaywrightExtensionInstalled(userDataDir) {
  let entries;
  try {
    entries = await import_fs.default.promises.readdir(userDataDir);
  } catch {
    return false;
  }
  for (const entry of entries) {
    if (entry !== "Default" && !entry.startsWith("Profile "))
      continue;
    if (await isExtensionInstalledInProfile(import_path.default.join(userDataDir, entry)))
      return true;
  }
  return false;
}
async function isExtensionInstalledInProfile(profileDir) {
  if (await pathExists(import_path.default.join(profileDir, "Extensions", playwrightExtensionId)))
    return true;
  try {
    const prefs = await import_fs.default.promises.readFile(import_path.default.join(profileDir, "Preferences"), "utf-8");
    return prefs.includes(`"${playwrightExtensionId}"`);
  } catch {
    return false;
  }
}
async function pathExists(p) {
  try {
    await import_fs.default.promises.access(p);
    return true;
  } catch {
    return false;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  isPlaywrightExtensionInstalled,
  playwrightExtensionId,
  playwrightExtensionInstallUrl
});
