var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
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

// src/loadSts.ts
var loadSts_exports = {};
__export(loadSts_exports, {
  getDefaultRoleAssumer: () => import_client_sts.getDefaultRoleAssumer
});
var import_client_sts;
var init_loadSts = __esm({
  "src/loadSts.ts"() {
    import_client_sts = require("@aws-sdk/client-sts");
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  fromIni: () => fromIni
});
module.exports = __toCommonJS(src_exports);

// src/fromIni.ts


// src/resolveProfileData.ts


// src/resolveAssumeRoleCredentials.ts

var import_shared_ini_file_loader = require("@smithy/shared-ini-file-loader");

// src/resolveCredentialSource.ts
var import_property_provider = require("@smithy/property-provider");
var resolveCredentialSource = /* @__PURE__ */ __name((credentialSource, profileName) => {
  const sourceProvidersMap = {
    EcsContainer: (options) => Promise.resolve().then(() => __toESM(require("@smithy/credential-provider-imds"))).then(({ fromContainerMetadata }) => fromContainerMetadata(options)),
    Ec2InstanceMetadata: (options) => Promise.resolve().then(() => __toESM(require("@smithy/credential-provider-imds"))).then(({ fromInstanceMetadata }) => fromInstanceMetadata(options)),
    Environment: (options) => Promise.resolve().then(() => __toESM(require("@aws-sdk/credential-provider-env"))).then(({ fromEnv }) => fromEnv(options))
  };
  if (credentialSource in sourceProvidersMap) {
    return sourceProvidersMap[credentialSource];
  } else {
    throw new import_property_provider.CredentialsProviderError(
      `Unsupported credential source in profile ${profileName}. Got ${credentialSource}, expected EcsContainer or Ec2InstanceMetadata or Environment.`
    );
  }
}, "resolveCredentialSource");

// src/resolveAssumeRoleCredentials.ts
var isAssumeRoleProfile = /* @__PURE__ */ __name((arg) => Boolean(arg) && typeof arg === "object" && typeof arg.role_arn === "string" && ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1 && ["undefined", "string"].indexOf(typeof arg.external_id) > -1 && ["undefined", "string"].indexOf(typeof arg.mfa_serial) > -1 && (isAssumeRoleWithSourceProfile(arg) || isAssumeRoleWithProviderProfile(arg)), "isAssumeRoleProfile");
var isAssumeRoleWithSourceProfile = /* @__PURE__ */ __name((arg) => typeof arg.source_profile === "string" && typeof arg.credential_source === "undefined", "isAssumeRoleWithSourceProfile");
var isAssumeRoleWithProviderProfile = /* @__PURE__ */ __name((arg) => typeof arg.credential_source === "string" && typeof arg.source_profile === "undefined", "isAssumeRoleWithProviderProfile");
var resolveAssumeRoleCredentials = /* @__PURE__ */ __name(async (profileName, profiles, options, visitedProfiles = {}) => {
  var _a;
  (_a = options.logger) == null ? void 0 : _a.debug("@aws-sdk/credential-provider-ini", "resolveAssumeRoleCredentials (STS)");
  const data = profiles[profileName];
  if (!options.roleAssumer) {
    const { getDefaultRoleAssumer: getDefaultRoleAssumer2 } = await Promise.resolve().then(() => (init_loadSts(), loadSts_exports));
    options.roleAssumer = getDefaultRoleAssumer2(
      {
        ...options.clientConfig,
        credentialProviderLogger: options.logger,
        parentClientConfig: options == null ? void 0 : options.parentClientConfig
      },
      options.clientPlugins
    );
  }
  const { source_profile } = data;
  if (source_profile && source_profile in visitedProfiles) {
    throw new import_property_provider.CredentialsProviderError(
      `Detected a cycle attempting to resolve credentials for profile ${(0, import_shared_ini_file_loader.getProfileName)(options)}. Profiles visited: ` + Object.keys(visitedProfiles).join(", "),
      false
    );
  }
  const sourceCredsProvider = source_profile ? resolveProfileData(source_profile, profiles, options, {
    ...visitedProfiles,
    [source_profile]: true
  }) : (await resolveCredentialSource(data.credential_source, profileName)(options))();
  const params = {
    RoleArn: data.role_arn,
    RoleSessionName: data.role_session_name || `aws-sdk-js-${Date.now()}`,
    ExternalId: data.external_id,
    DurationSeconds: parseInt(data.duration_seconds || "3600", 10)
  };
  const { mfa_serial } = data;
  if (mfa_serial) {
    if (!options.mfaCodeProvider) {
      throw new import_property_provider.CredentialsProviderError(
        `Profile ${profileName} requires multi-factor authentication, but no MFA code callback was provided.`,
        false
      );
    }
    params.SerialNumber = mfa_serial;
    params.TokenCode = await options.mfaCodeProvider(mfa_serial);
  }
  const sourceCreds = await sourceCredsProvider;
  return options.roleAssumer(sourceCreds, params);
}, "resolveAssumeRoleCredentials");

// src/resolveProcessCredentials.ts
var isProcessProfile = /* @__PURE__ */ __name((arg) => Boolean(arg) && typeof arg === "object" && typeof arg.credential_process === "string", "isProcessProfile");
var resolveProcessCredentials = /* @__PURE__ */ __name(async (options, profile) => Promise.resolve().then(() => __toESM(require("@aws-sdk/credential-provider-process"))).then(
  ({ fromProcess }) => fromProcess({
    ...options,
    profile
  })()
), "resolveProcessCredentials");

// src/resolveSsoCredentials.ts
var resolveSsoCredentials = /* @__PURE__ */ __name(async (profile, options = {}) => {
  const { fromSSO } = await Promise.resolve().then(() => __toESM(require("@aws-sdk/credential-provider-sso")));
  return fromSSO({
    profile,
    logger: options.logger
  })();
}, "resolveSsoCredentials");
var isSsoProfile = /* @__PURE__ */ __name((arg) => arg && (typeof arg.sso_start_url === "string" || typeof arg.sso_account_id === "string" || typeof arg.sso_session === "string" || typeof arg.sso_region === "string" || typeof arg.sso_role_name === "string"), "isSsoProfile");

// src/resolveStaticCredentials.ts
var isStaticCredsProfile = /* @__PURE__ */ __name((arg) => Boolean(arg) && typeof arg === "object" && typeof arg.aws_access_key_id === "string" && typeof arg.aws_secret_access_key === "string" && ["undefined", "string"].indexOf(typeof arg.aws_session_token) > -1, "isStaticCredsProfile");
var resolveStaticCredentials = /* @__PURE__ */ __name((profile, options) => {
  var _a;
  (_a = options == null ? void 0 : options.logger) == null ? void 0 : _a.debug("@aws-sdk/credential-provider-ini", "resolveStaticCredentials");
  return Promise.resolve({
    accessKeyId: profile.aws_access_key_id,
    secretAccessKey: profile.aws_secret_access_key,
    sessionToken: profile.aws_session_token,
    credentialScope: profile.aws_credential_scope
  });
}, "resolveStaticCredentials");

// src/resolveWebIdentityCredentials.ts
var isWebIdentityProfile = /* @__PURE__ */ __name((arg) => Boolean(arg) && typeof arg === "object" && typeof arg.web_identity_token_file === "string" && typeof arg.role_arn === "string" && ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1, "isWebIdentityProfile");
var resolveWebIdentityCredentials = /* @__PURE__ */ __name(async (profile, options) => Promise.resolve().then(() => __toESM(require("@aws-sdk/credential-provider-web-identity"))).then(
  ({ fromTokenFile }) => fromTokenFile({
    webIdentityTokenFile: profile.web_identity_token_file,
    roleArn: profile.role_arn,
    roleSessionName: profile.role_session_name,
    roleAssumerWithWebIdentity: options.roleAssumerWithWebIdentity,
    logger: options.logger,
    parentClientConfig: options.parentClientConfig
  })()
), "resolveWebIdentityCredentials");

// src/resolveProfileData.ts
var resolveProfileData = /* @__PURE__ */ __name(async (profileName, profiles, options, visitedProfiles = {}) => {
  const data = profiles[profileName];
  if (Object.keys(visitedProfiles).length > 0 && isStaticCredsProfile(data)) {
    return resolveStaticCredentials(data, options);
  }
  if (isAssumeRoleProfile(data)) {
    return resolveAssumeRoleCredentials(profileName, profiles, options, visitedProfiles);
  }
  if (isStaticCredsProfile(data)) {
    return resolveStaticCredentials(data, options);
  }
  if (isWebIdentityProfile(data)) {
    return resolveWebIdentityCredentials(data, options);
  }
  if (isProcessProfile(data)) {
    return resolveProcessCredentials(options, profileName);
  }
  if (isSsoProfile(data)) {
    return await resolveSsoCredentials(profileName, options);
  }
  throw new import_property_provider.CredentialsProviderError(`Profile ${profileName} could not be found or parsed in shared credentials file.`);
}, "resolveProfileData");

// src/fromIni.ts
var fromIni = /* @__PURE__ */ __name((init = {}) => async () => {
  var _a;
  (_a = init.logger) == null ? void 0 : _a.debug("@aws-sdk/credential-provider-ini", "fromIni");
  const profiles = await (0, import_shared_ini_file_loader.parseKnownFiles)(init);
  return resolveProfileData((0, import_shared_ini_file_loader.getProfileName)(init), profiles, init);
}, "fromIni");
// Annotate the CommonJS export names for ESM import in node:

0 && (module.exports = {
  fromIni
});

