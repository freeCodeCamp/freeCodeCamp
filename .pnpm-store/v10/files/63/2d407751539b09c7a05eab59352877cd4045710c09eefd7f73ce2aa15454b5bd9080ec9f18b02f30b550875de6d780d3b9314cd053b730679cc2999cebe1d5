var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  CONFIG_PREFIX_SEPARATOR: () => CONFIG_PREFIX_SEPARATOR,
  DEFAULT_PROFILE: () => DEFAULT_PROFILE,
  ENV_PROFILE: () => ENV_PROFILE,
  getProfileName: () => getProfileName,
  loadSharedConfigFiles: () => loadSharedConfigFiles,
  loadSsoSessionData: () => loadSsoSessionData,
  parseKnownFiles: () => parseKnownFiles
});
module.exports = __toCommonJS(src_exports);
__reExport(src_exports, require("././getHomeDir"), module.exports);

// src/getProfileName.ts
var ENV_PROFILE = "AWS_PROFILE";
var DEFAULT_PROFILE = "default";
var getProfileName = /* @__PURE__ */ __name((init) => init.profile || process.env[ENV_PROFILE] || DEFAULT_PROFILE, "getProfileName");

// src/index.ts
__reExport(src_exports, require("././getSSOTokenFilepath"), module.exports);
__reExport(src_exports, require("././getSSOTokenFromFile"), module.exports);

// src/getConfigData.ts
var import_types = require("@smithy/types");
var getConfigData = /* @__PURE__ */ __name((data) => Object.entries(data).filter(([key]) => {
  const indexOfSeparator = key.indexOf(CONFIG_PREFIX_SEPARATOR);
  if (indexOfSeparator === -1) {
    return false;
  }
  return Object.values(import_types.IniSectionType).includes(key.substring(0, indexOfSeparator));
}).reduce(
  (acc, [key, value]) => {
    const indexOfSeparator = key.indexOf(CONFIG_PREFIX_SEPARATOR);
    const updatedKey = key.substring(0, indexOfSeparator) === import_types.IniSectionType.PROFILE ? key.substring(indexOfSeparator + 1) : key;
    acc[updatedKey] = value;
    return acc;
  },
  {
    // Populate default profile, if present.
    ...data.default && { default: data.default }
  }
), "getConfigData");

// src/getConfigFilepath.ts
var import_path = require("path");
var import_getHomeDir = require("././getHomeDir");
var ENV_CONFIG_PATH = "AWS_CONFIG_FILE";
var getConfigFilepath = /* @__PURE__ */ __name(() => process.env[ENV_CONFIG_PATH] || (0, import_path.join)((0, import_getHomeDir.getHomeDir)(), ".aws", "config"), "getConfigFilepath");

// src/getCredentialsFilepath.ts

var import_getHomeDir2 = require("././getHomeDir");
var ENV_CREDENTIALS_PATH = "AWS_SHARED_CREDENTIALS_FILE";
var getCredentialsFilepath = /* @__PURE__ */ __name(() => process.env[ENV_CREDENTIALS_PATH] || (0, import_path.join)((0, import_getHomeDir2.getHomeDir)(), ".aws", "credentials"), "getCredentialsFilepath");

// src/parseIni.ts

var prefixKeyRegex = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/;
var profileNameBlockList = ["__proto__", "profile __proto__"];
var parseIni = /* @__PURE__ */ __name((iniData) => {
  const map = {};
  let currentSection;
  let currentSubSection;
  for (const iniLine of iniData.split(/\r?\n/)) {
    const trimmedLine = iniLine.split(/(^|\s)[;#]/)[0].trim();
    const isSection = trimmedLine[0] === "[" && trimmedLine[trimmedLine.length - 1] === "]";
    if (isSection) {
      currentSection = void 0;
      currentSubSection = void 0;
      const sectionName = trimmedLine.substring(1, trimmedLine.length - 1);
      const matches = prefixKeyRegex.exec(sectionName);
      if (matches) {
        const [, prefix, , name] = matches;
        if (Object.values(import_types.IniSectionType).includes(prefix)) {
          currentSection = [prefix, name].join(CONFIG_PREFIX_SEPARATOR);
        }
      } else {
        currentSection = sectionName;
      }
      if (profileNameBlockList.includes(sectionName)) {
        throw new Error(`Found invalid profile name "${sectionName}"`);
      }
    } else if (currentSection) {
      const indexOfEqualsSign = trimmedLine.indexOf("=");
      if (![0, -1].includes(indexOfEqualsSign)) {
        const [name, value] = [
          trimmedLine.substring(0, indexOfEqualsSign).trim(),
          trimmedLine.substring(indexOfEqualsSign + 1).trim()
        ];
        if (value === "") {
          currentSubSection = name;
        } else {
          if (currentSubSection && iniLine.trimStart() === iniLine) {
            currentSubSection = void 0;
          }
          map[currentSection] = map[currentSection] || {};
          const key = currentSubSection ? [currentSubSection, name].join(CONFIG_PREFIX_SEPARATOR) : name;
          map[currentSection][key] = value;
        }
      }
    }
  }
  return map;
}, "parseIni");

// src/loadSharedConfigFiles.ts
var import_slurpFile = require("././slurpFile");
var swallowError = /* @__PURE__ */ __name(() => ({}), "swallowError");
var CONFIG_PREFIX_SEPARATOR = ".";
var loadSharedConfigFiles = /* @__PURE__ */ __name(async (init = {}) => {
  const { filepath = getCredentialsFilepath(), configFilepath = getConfigFilepath() } = init;
  const parsedFiles = await Promise.all([
    (0, import_slurpFile.slurpFile)(configFilepath, {
      ignoreCache: init.ignoreCache
    }).then(parseIni).then(getConfigData).catch(swallowError),
    (0, import_slurpFile.slurpFile)(filepath, {
      ignoreCache: init.ignoreCache
    }).then(parseIni).catch(swallowError)
  ]);
  return {
    configFile: parsedFiles[0],
    credentialsFile: parsedFiles[1]
  };
}, "loadSharedConfigFiles");

// src/getSsoSessionData.ts

var getSsoSessionData = /* @__PURE__ */ __name((data) => Object.entries(data).filter(([key]) => key.startsWith(import_types.IniSectionType.SSO_SESSION + CONFIG_PREFIX_SEPARATOR)).reduce((acc, [key, value]) => ({ ...acc, [key.substring(key.indexOf(CONFIG_PREFIX_SEPARATOR) + 1)]: value }), {}), "getSsoSessionData");

// src/loadSsoSessionData.ts
var import_slurpFile2 = require("././slurpFile");
var swallowError2 = /* @__PURE__ */ __name(() => ({}), "swallowError");
var loadSsoSessionData = /* @__PURE__ */ __name(async (init = {}) => (0, import_slurpFile2.slurpFile)(init.configFilepath ?? getConfigFilepath()).then(parseIni).then(getSsoSessionData).catch(swallowError2), "loadSsoSessionData");

// src/mergeConfigFiles.ts
var mergeConfigFiles = /* @__PURE__ */ __name((...files) => {
  const merged = {};
  for (const file of files) {
    for (const [key, values] of Object.entries(file)) {
      if (merged[key] !== void 0) {
        Object.assign(merged[key], values);
      } else {
        merged[key] = values;
      }
    }
  }
  return merged;
}, "mergeConfigFiles");

// src/parseKnownFiles.ts
var parseKnownFiles = /* @__PURE__ */ __name(async (init) => {
  const parsedFiles = await loadSharedConfigFiles(init);
  return mergeConfigFiles(parsedFiles.configFile, parsedFiles.credentialsFile);
}, "parseKnownFiles");
// Annotate the CommonJS export names for ESM import in node:

0 && (module.exports = {
  getHomeDir,
  ENV_PROFILE,
  DEFAULT_PROFILE,
  getProfileName,
  getSSOTokenFilepath,
  getSSOTokenFromFile,
  CONFIG_PREFIX_SEPARATOR,
  loadSharedConfigFiles,
  loadSsoSessionData,
  parseKnownFiles
});

