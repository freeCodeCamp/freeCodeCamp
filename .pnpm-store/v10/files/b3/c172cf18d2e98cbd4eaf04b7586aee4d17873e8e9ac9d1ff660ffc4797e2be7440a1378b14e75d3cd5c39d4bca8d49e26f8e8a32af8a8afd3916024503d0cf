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
  AlgorithmId: () => AlgorithmId,
  EndpointURLScheme: () => EndpointURLScheme,
  FieldPosition: () => FieldPosition,
  HttpApiKeyAuthLocation: () => HttpApiKeyAuthLocation,
  HttpAuthLocation: () => HttpAuthLocation,
  IniSectionType: () => IniSectionType,
  RequestHandlerProtocol: () => RequestHandlerProtocol,
  SMITHY_CONTEXT_KEY: () => SMITHY_CONTEXT_KEY,
  getDefaultClientConfiguration: () => getDefaultClientConfiguration,
  resolveDefaultRuntimeConfig: () => resolveDefaultRuntimeConfig
});
module.exports = __toCommonJS(src_exports);

// src/auth/auth.ts
var HttpAuthLocation = /* @__PURE__ */ ((HttpAuthLocation2) => {
  HttpAuthLocation2["HEADER"] = "header";
  HttpAuthLocation2["QUERY"] = "query";
  return HttpAuthLocation2;
})(HttpAuthLocation || {});

// src/auth/HttpApiKeyAuth.ts
var HttpApiKeyAuthLocation = /* @__PURE__ */ ((HttpApiKeyAuthLocation2) => {
  HttpApiKeyAuthLocation2["HEADER"] = "header";
  HttpApiKeyAuthLocation2["QUERY"] = "query";
  return HttpApiKeyAuthLocation2;
})(HttpApiKeyAuthLocation || {});

// src/endpoint.ts
var EndpointURLScheme = /* @__PURE__ */ ((EndpointURLScheme2) => {
  EndpointURLScheme2["HTTP"] = "http";
  EndpointURLScheme2["HTTPS"] = "https";
  return EndpointURLScheme2;
})(EndpointURLScheme || {});

// src/extensions/checksum.ts
var AlgorithmId = /* @__PURE__ */ ((AlgorithmId2) => {
  AlgorithmId2["MD5"] = "md5";
  AlgorithmId2["CRC32"] = "crc32";
  AlgorithmId2["CRC32C"] = "crc32c";
  AlgorithmId2["SHA1"] = "sha1";
  AlgorithmId2["SHA256"] = "sha256";
  return AlgorithmId2;
})(AlgorithmId || {});
var getChecksumConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
  const checksumAlgorithms = [];
  if (runtimeConfig.sha256 !== void 0) {
    checksumAlgorithms.push({
      algorithmId: () => "sha256" /* SHA256 */,
      checksumConstructor: () => runtimeConfig.sha256
    });
  }
  if (runtimeConfig.md5 != void 0) {
    checksumAlgorithms.push({
      algorithmId: () => "md5" /* MD5 */,
      checksumConstructor: () => runtimeConfig.md5
    });
  }
  return {
    _checksumAlgorithms: checksumAlgorithms,
    addChecksumAlgorithm(algo) {
      this._checksumAlgorithms.push(algo);
    },
    checksumAlgorithms() {
      return this._checksumAlgorithms;
    }
  };
}, "getChecksumConfiguration");
var resolveChecksumRuntimeConfig = /* @__PURE__ */ __name((clientConfig) => {
  const runtimeConfig = {};
  clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
    runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
  });
  return runtimeConfig;
}, "resolveChecksumRuntimeConfig");

// src/extensions/defaultClientConfiguration.ts
var getDefaultClientConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
  return {
    ...getChecksumConfiguration(runtimeConfig)
  };
}, "getDefaultClientConfiguration");
var resolveDefaultRuntimeConfig = /* @__PURE__ */ __name((config) => {
  return {
    ...resolveChecksumRuntimeConfig(config)
  };
}, "resolveDefaultRuntimeConfig");

// src/http.ts
var FieldPosition = /* @__PURE__ */ ((FieldPosition2) => {
  FieldPosition2[FieldPosition2["HEADER"] = 0] = "HEADER";
  FieldPosition2[FieldPosition2["TRAILER"] = 1] = "TRAILER";
  return FieldPosition2;
})(FieldPosition || {});

// src/middleware.ts
var SMITHY_CONTEXT_KEY = "__smithy_context";

// src/profile.ts
var IniSectionType = /* @__PURE__ */ ((IniSectionType2) => {
  IniSectionType2["PROFILE"] = "profile";
  IniSectionType2["SSO_SESSION"] = "sso-session";
  IniSectionType2["SERVICES"] = "services";
  return IniSectionType2;
})(IniSectionType || {});

// src/transfer.ts
var RequestHandlerProtocol = /* @__PURE__ */ ((RequestHandlerProtocol2) => {
  RequestHandlerProtocol2["HTTP_0_9"] = "http/0.9";
  RequestHandlerProtocol2["HTTP_1_0"] = "http/1.0";
  RequestHandlerProtocol2["TDS_8_0"] = "tds/8.0";
  return RequestHandlerProtocol2;
})(RequestHandlerProtocol || {});
// Annotate the CommonJS export names for ESM import in node:

0 && (module.exports = {
  HttpAuthLocation,
  HttpApiKeyAuthLocation,
  EndpointURLScheme,
  AlgorithmId,
  getDefaultClientConfiguration,
  resolveDefaultRuntimeConfig,
  FieldPosition,
  SMITHY_CONTEXT_KEY,
  IniSectionType,
  RequestHandlerProtocol
});

