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
  fromProcess: () => fromProcess
});
module.exports = __toCommonJS(src_exports);

// src/fromProcess.ts
var import_shared_ini_file_loader = require("@smithy/shared-ini-file-loader");

// src/resolveProcessCredentials.ts
var import_property_provider = require("@smithy/property-provider");
var import_child_process = require("child_process");
var import_util = require("util");

// src/getValidatedProcessCredentials.ts
var getValidatedProcessCredentials = /* @__PURE__ */ __name((profileName, data) => {
  if (data.Version !== 1) {
    throw Error(`Profile ${profileName} credential_process did not return Version 1.`);
  }
  if (data.AccessKeyId === void 0 || data.SecretAccessKey === void 0) {
    throw Error(`Profile ${profileName} credential_process returned invalid credentials.`);
  }
  if (data.Expiration) {
    const currentTime = /* @__PURE__ */ new Date();
    const expireTime = new Date(data.Expiration);
    if (expireTime < currentTime) {
      throw Error(`Profile ${profileName} credential_process returned expired credentials.`);
    }
  }
  return {
    accessKeyId: data.AccessKeyId,
    secretAccessKey: data.SecretAccessKey,
    ...data.SessionToken && { sessionToken: data.SessionToken },
    ...data.Expiration && { expiration: new Date(data.Expiration) },
    ...data.CredentialScope && { credentialScope: data.CredentialScope }
  };
}, "getValidatedProcessCredentials");

// src/resolveProcessCredentials.ts
var resolveProcessCredentials = /* @__PURE__ */ __name(async (profileName, profiles) => {
  const profile = profiles[profileName];
  if (profiles[profileName]) {
    const credentialProcess = profile["credential_process"];
    if (credentialProcess !== void 0) {
      const execPromise = (0, import_util.promisify)(import_child_process.exec);
      try {
        const { stdout } = await execPromise(credentialProcess);
        let data;
        try {
          data = JSON.parse(stdout.trim());
        } catch {
          throw Error(`Profile ${profileName} credential_process returned invalid JSON.`);
        }
        return getValidatedProcessCredentials(profileName, data);
      } catch (error) {
        throw new import_property_provider.CredentialsProviderError(error.message);
      }
    } else {
      throw new import_property_provider.CredentialsProviderError(`Profile ${profileName} did not contain credential_process.`);
    }
  } else {
    throw new import_property_provider.CredentialsProviderError(`Profile ${profileName} could not be found in shared credentials file.`);
  }
}, "resolveProcessCredentials");

// src/fromProcess.ts
var fromProcess = /* @__PURE__ */ __name((init = {}) => async () => {
  var _a;
  (_a = init.logger) == null ? void 0 : _a.debug("@aws-sdk/credential-provider-process", "fromProcess");
  const profiles = await (0, import_shared_ini_file_loader.parseKnownFiles)(init);
  return resolveProcessCredentials((0, import_shared_ini_file_loader.getProfileName)(init), profiles);
}, "fromProcess");
// Annotate the CommonJS export names for ESM import in node:

0 && (module.exports = {
  fromProcess
});

