var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/loadSsoOidc.ts
var loadSsoOidc_exports = {};
__export(loadSsoOidc_exports, {
  CreateTokenCommand: () => import_client_sso_oidc.CreateTokenCommand,
  SSOOIDCClient: () => import_client_sso_oidc.SSOOIDCClient
});
var import_client_sso_oidc;
var init_loadSsoOidc = __esm({
  "src/loadSsoOidc.ts"() {
    import_client_sso_oidc = require("@aws-sdk/client-sso-oidc");
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  fromSso: () => fromSso,
  fromStatic: () => fromStatic,
  nodeProvider: () => nodeProvider
});
module.exports = __toCommonJS(src_exports);

// src/fromSso.ts



// src/constants.ts
var EXPIRE_WINDOW_MS = 5 * 60 * 1e3;
var REFRESH_MESSAGE = `To refresh this SSO session run 'aws sso login' with the corresponding profile.`;

// src/getSsoOidcClient.ts
var ssoOidcClientsHash = {};
var getSsoOidcClient = /* @__PURE__ */ __name(async (ssoRegion) => {
  const { SSOOIDCClient: SSOOIDCClient2 } = await Promise.resolve().then(() => (init_loadSsoOidc(), loadSsoOidc_exports));
  if (ssoOidcClientsHash[ssoRegion]) {
    return ssoOidcClientsHash[ssoRegion];
  }
  const ssoOidcClient = new SSOOIDCClient2({ region: ssoRegion });
  ssoOidcClientsHash[ssoRegion] = ssoOidcClient;
  return ssoOidcClient;
}, "getSsoOidcClient");

// src/getNewSsoOidcToken.ts
var getNewSsoOidcToken = /* @__PURE__ */ __name(async (ssoToken, ssoRegion) => {
  const { CreateTokenCommand: CreateTokenCommand2 } = await Promise.resolve().then(() => (init_loadSsoOidc(), loadSsoOidc_exports));
  const ssoOidcClient = await getSsoOidcClient(ssoRegion);
  return ssoOidcClient.send(
    new CreateTokenCommand2({
      clientId: ssoToken.clientId,
      clientSecret: ssoToken.clientSecret,
      refreshToken: ssoToken.refreshToken,
      grantType: "refresh_token"
    })
  );
}, "getNewSsoOidcToken");

// src/validateTokenExpiry.ts
var import_property_provider = require("@smithy/property-provider");
var validateTokenExpiry = /* @__PURE__ */ __name((token) => {
  if (token.expiration && token.expiration.getTime() < Date.now()) {
    throw new import_property_provider.TokenProviderError(`Token is expired. ${REFRESH_MESSAGE}`, false);
  }
}, "validateTokenExpiry");

// src/validateTokenKey.ts

var validateTokenKey = /* @__PURE__ */ __name((key, value, forRefresh = false) => {
  if (typeof value === "undefined") {
    throw new import_property_provider.TokenProviderError(
      `Value not present for '${key}' in SSO Token${forRefresh ? ". Cannot refresh" : ""}. ${REFRESH_MESSAGE}`,
      false
    );
  }
}, "validateTokenKey");

// src/writeSSOTokenToFile.ts
var import_shared_ini_file_loader = require("@smithy/shared-ini-file-loader");
var import_fs = require("fs");
var { writeFile } = import_fs.promises;
var writeSSOTokenToFile = /* @__PURE__ */ __name((id, ssoToken) => {
  const tokenFilepath = (0, import_shared_ini_file_loader.getSSOTokenFilepath)(id);
  const tokenString = JSON.stringify(ssoToken, null, 2);
  return writeFile(tokenFilepath, tokenString);
}, "writeSSOTokenToFile");

// src/fromSso.ts
var lastRefreshAttemptTime = /* @__PURE__ */ new Date(0);
var fromSso = /* @__PURE__ */ __name((init = {}) => async () => {
  var _a;
  (_a = init.logger) == null ? void 0 : _a.debug("@aws-sdk/token-providers", "fromSso");
  const profiles = await (0, import_shared_ini_file_loader.parseKnownFiles)(init);
  const profileName = (0, import_shared_ini_file_loader.getProfileName)(init);
  const profile = profiles[profileName];
  if (!profile) {
    throw new import_property_provider.TokenProviderError(`Profile '${profileName}' could not be found in shared credentials file.`, false);
  } else if (!profile["sso_session"]) {
    throw new import_property_provider.TokenProviderError(`Profile '${profileName}' is missing required property 'sso_session'.`);
  }
  const ssoSessionName = profile["sso_session"];
  const ssoSessions = await (0, import_shared_ini_file_loader.loadSsoSessionData)(init);
  const ssoSession = ssoSessions[ssoSessionName];
  if (!ssoSession) {
    throw new import_property_provider.TokenProviderError(
      `Sso session '${ssoSessionName}' could not be found in shared credentials file.`,
      false
    );
  }
  for (const ssoSessionRequiredKey of ["sso_start_url", "sso_region"]) {
    if (!ssoSession[ssoSessionRequiredKey]) {
      throw new import_property_provider.TokenProviderError(
        `Sso session '${ssoSessionName}' is missing required property '${ssoSessionRequiredKey}'.`,
        false
      );
    }
  }
  const ssoStartUrl = ssoSession["sso_start_url"];
  const ssoRegion = ssoSession["sso_region"];
  let ssoToken;
  try {
    ssoToken = await (0, import_shared_ini_file_loader.getSSOTokenFromFile)(ssoSessionName);
  } catch (e) {
    throw new import_property_provider.TokenProviderError(
      `The SSO session token associated with profile=${profileName} was not found or is invalid. ${REFRESH_MESSAGE}`,
      false
    );
  }
  validateTokenKey("accessToken", ssoToken.accessToken);
  validateTokenKey("expiresAt", ssoToken.expiresAt);
  const { accessToken, expiresAt } = ssoToken;
  const existingToken = { token: accessToken, expiration: new Date(expiresAt) };
  if (existingToken.expiration.getTime() - Date.now() > EXPIRE_WINDOW_MS) {
    return existingToken;
  }
  if (Date.now() - lastRefreshAttemptTime.getTime() < 30 * 1e3) {
    validateTokenExpiry(existingToken);
    return existingToken;
  }
  validateTokenKey("clientId", ssoToken.clientId, true);
  validateTokenKey("clientSecret", ssoToken.clientSecret, true);
  validateTokenKey("refreshToken", ssoToken.refreshToken, true);
  try {
    lastRefreshAttemptTime.setTime(Date.now());
    const newSsoOidcToken = await getNewSsoOidcToken(ssoToken, ssoRegion);
    validateTokenKey("accessToken", newSsoOidcToken.accessToken);
    validateTokenKey("expiresIn", newSsoOidcToken.expiresIn);
    const newTokenExpiration = new Date(Date.now() + newSsoOidcToken.expiresIn * 1e3);
    try {
      await writeSSOTokenToFile(ssoSessionName, {
        ...ssoToken,
        accessToken: newSsoOidcToken.accessToken,
        expiresAt: newTokenExpiration.toISOString(),
        refreshToken: newSsoOidcToken.refreshToken
      });
    } catch (error) {
    }
    return {
      token: newSsoOidcToken.accessToken,
      expiration: newTokenExpiration
    };
  } catch (error) {
    validateTokenExpiry(existingToken);
    return existingToken;
  }
}, "fromSso");

// src/fromStatic.ts

var fromStatic = /* @__PURE__ */ __name(({ token, logger }) => async () => {
  logger == null ? void 0 : logger.debug("@aws-sdk/token-providers", "fromStatic");
  if (!token || !token.token) {
    throw new import_property_provider.TokenProviderError(`Please pass a valid token to fromStatic`, false);
  }
  return token;
}, "fromStatic");

// src/nodeProvider.ts

var nodeProvider = /* @__PURE__ */ __name((init = {}) => (0, import_property_provider.memoize)(
  (0, import_property_provider.chain)(fromSso(init), async () => {
    throw new import_property_provider.TokenProviderError("Could not load token from any providers", false);
  }),
  (token) => token.expiration !== void 0 && token.expiration.getTime() - Date.now() < 3e5,
  (token) => token.expiration !== void 0
), "nodeProvider");
// Annotate the CommonJS export names for ESM import in node:

0 && (module.exports = {
  fromSso,
  fromStatic,
  nodeProvider
});

