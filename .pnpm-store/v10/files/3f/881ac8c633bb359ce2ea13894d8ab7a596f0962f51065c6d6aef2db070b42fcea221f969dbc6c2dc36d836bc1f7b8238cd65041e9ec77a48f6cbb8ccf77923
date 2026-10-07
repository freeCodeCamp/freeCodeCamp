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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  UA_APP_ID_ENV_NAME: () => UA_APP_ID_ENV_NAME,
  UA_APP_ID_INI_NAME: () => UA_APP_ID_INI_NAME,
  crtAvailability: () => crtAvailability,
  defaultUserAgent: () => defaultUserAgent
});
module.exports = __toCommonJS(src_exports);
var import_node_config_provider = require("@smithy/node-config-provider");
var import_os = require("os");
var import_process = require("process");

// src/crt-availability.ts
var crtAvailability = {
  isCrtAvailable: false
};

// src/is-crt-available.ts
var isCrtAvailable = /* @__PURE__ */ __name(() => {
  if (crtAvailability.isCrtAvailable) {
    return ["md/crt-avail"];
  }
  return null;
}, "isCrtAvailable");

// src/index.ts
var UA_APP_ID_ENV_NAME = "AWS_SDK_UA_APP_ID";
var UA_APP_ID_INI_NAME = "sdk-ua-app-id";
var defaultUserAgent = /* @__PURE__ */ __name(({ serviceId, clientVersion }) => {
  const sections = [
    // sdk-metadata
    ["aws-sdk-js", clientVersion],
    // ua-metadata
    ["ua", "2.0"],
    // os-metadata
    [`os/${(0, import_os.platform)()}`, (0, import_os.release)()],
    // language-metadata
    // ECMAScript edition doesn't matter in JS, so no version needed.
    ["lang/js"],
    ["md/nodejs", `${import_process.versions.node}`]
  ];
  const crtAvailable = isCrtAvailable();
  if (crtAvailable) {
    sections.push(crtAvailable);
  }
  if (serviceId) {
    sections.push([`api/${serviceId}`, clientVersion]);
  }
  if (import_process.env.AWS_EXECUTION_ENV) {
    sections.push([`exec-env/${import_process.env.AWS_EXECUTION_ENV}`]);
  }
  const appIdPromise = (0, import_node_config_provider.loadConfig)({
    environmentVariableSelector: (env2) => env2[UA_APP_ID_ENV_NAME],
    configFileSelector: (profile) => profile[UA_APP_ID_INI_NAME],
    default: void 0
  })();
  let resolvedUserAgent = void 0;
  return async () => {
    if (!resolvedUserAgent) {
      const appId = await appIdPromise;
      resolvedUserAgent = appId ? [...sections, [`app/${appId}`]] : [...sections];
    }
    return resolvedUserAgent;
  };
}, "defaultUserAgent");
// Annotate the CommonJS export names for ESM import in node:

0 && (module.exports = {
  crtAvailability,
  UA_APP_ID_ENV_NAME,
  UA_APP_ID_INI_NAME,
  defaultUserAgent
});

