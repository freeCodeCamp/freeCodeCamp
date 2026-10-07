var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  credentialsTreatedAsExpired: () => credentialsTreatedAsExpired,
  credentialsWillNeedRefresh: () => credentialsWillNeedRefresh,
  defaultProvider: () => defaultProvider
});
module.exports = __toCommonJS(src_exports);

// src/defaultProvider.ts

var import_shared_ini_file_loader = require("@smithy/shared-ini-file-loader");

// src/remoteProvider.ts
var import_property_provider = require("@smithy/property-provider");
var ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
var remoteProvider = /* @__PURE__ */ __name(async (init) => {
  var _a, _b;
  const { ENV_CMDS_FULL_URI, ENV_CMDS_RELATIVE_URI, fromContainerMetadata, fromInstanceMetadata } = await Promise.resolve().then(() => __toESM(require("@smithy/credential-provider-imds")));
  if (process.env[ENV_CMDS_RELATIVE_URI] || process.env[ENV_CMDS_FULL_URI]) {
    (_a = init.logger) == null ? void 0 : _a.debug("@aws-sdk/credential-provider-node", "remoteProvider::fromHttp/fromContainerMetadata");
    const { fromHttp } = await Promise.resolve().then(() => __toESM(require("@aws-sdk/credential-provider-http")));
    return (0, import_property_provider.chain)(fromHttp(init), fromContainerMetadata(init));
  }
  if (process.env[ENV_IMDS_DISABLED]) {
    return async () => {
      throw new import_property_provider.CredentialsProviderError("EC2 Instance Metadata Service access disabled");
    };
  }
  (_b = init.logger) == null ? void 0 : _b.debug("@aws-sdk/credential-provider-node", "remoteProvider::fromInstanceMetadata");
  return fromInstanceMetadata(init);
}, "remoteProvider");

// src/defaultProvider.ts
var defaultProvider = /* @__PURE__ */ __name((init = {}) => (0, import_property_provider.memoize)(
  (0, import_property_provider.chain)(
    ...init.profile || process.env[import_shared_ini_file_loader.ENV_PROFILE] ? [] : [
      async () => {
        var _a;
        (_a = init.logger) == null ? void 0 : _a.debug("@aws-sdk/credential-provider-node", "defaultProvider::fromEnv");
        const { fromEnv } = await Promise.resolve().then(() => __toESM(require("@aws-sdk/credential-provider-env")));
        return fromEnv(init)();
      }
    ],
    async () => {
      var _a;
      (_a = init.logger) == null ? void 0 : _a.debug("@aws-sdk/credential-provider-node", "defaultProvider::fromSSO");
      const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoSession } = init;
      if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
        throw new import_property_provider.CredentialsProviderError(
          "Skipping SSO provider in default chain (inputs do not include SSO fields)."
        );
      }
      const { fromSSO } = await Promise.resolve().then(() => __toESM(require("@aws-sdk/credential-provider-sso")));
      return fromSSO(init)();
    },
    async () => {
      var _a;
      (_a = init.logger) == null ? void 0 : _a.debug("@aws-sdk/credential-provider-node", "defaultProvider::fromIni");
      const { fromIni } = await Promise.resolve().then(() => __toESM(require("@aws-sdk/credential-provider-ini")));
      return fromIni(init)();
    },
    async () => {
      var _a;
      (_a = init.logger) == null ? void 0 : _a.debug("@aws-sdk/credential-provider-node", "defaultProvider::fromProcess");
      const { fromProcess } = await Promise.resolve().then(() => __toESM(require("@aws-sdk/credential-provider-process")));
      return fromProcess(init)();
    },
    async () => {
      var _a;
      (_a = init.logger) == null ? void 0 : _a.debug("@aws-sdk/credential-provider-node", "defaultProvider::fromTokenFile");
      const { fromTokenFile } = await Promise.resolve().then(() => __toESM(require("@aws-sdk/credential-provider-web-identity")));
      return fromTokenFile(init)();
    },
    async () => {
      var _a;
      (_a = init.logger) == null ? void 0 : _a.debug("@aws-sdk/credential-provider-node", "defaultProvider::remoteProvider");
      return (await remoteProvider(init))();
    },
    async () => {
      throw new import_property_provider.CredentialsProviderError("Could not load credentials from any providers", false);
    }
  ),
  credentialsTreatedAsExpired,
  credentialsWillNeedRefresh
), "defaultProvider");
var credentialsWillNeedRefresh = /* @__PURE__ */ __name((credentials) => (credentials == null ? void 0 : credentials.expiration) !== void 0, "credentialsWillNeedRefresh");
var credentialsTreatedAsExpired = /* @__PURE__ */ __name((credentials) => (credentials == null ? void 0 : credentials.expiration) !== void 0 && credentials.expiration.getTime() - Date.now() < 3e5, "credentialsTreatedAsExpired");
// Annotate the CommonJS export names for ESM import in node:

0 && (module.exports = {
  defaultProvider,
  credentialsWillNeedRefresh,
  credentialsTreatedAsExpired
});

