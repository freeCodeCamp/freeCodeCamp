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
  endpointMiddleware: () => endpointMiddleware,
  endpointMiddlewareOptions: () => endpointMiddlewareOptions,
  getEndpointFromInstructions: () => getEndpointFromInstructions,
  getEndpointPlugin: () => getEndpointPlugin,
  resolveEndpointConfig: () => resolveEndpointConfig,
  resolveParams: () => resolveParams,
  toEndpointV1: () => toEndpointV1
});
module.exports = __toCommonJS(src_exports);

// src/service-customizations/s3.ts
var resolveParamsForS3 = /* @__PURE__ */ __name(async (endpointParams) => {
  const bucket = (endpointParams == null ? void 0 : endpointParams.Bucket) || "";
  if (typeof endpointParams.Bucket === "string") {
    endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
  }
  if (isArnBucketName(bucket)) {
    if (endpointParams.ForcePathStyle === true) {
      throw new Error("Path-style addressing cannot be used with ARN buckets");
    }
  } else if (!isDnsCompatibleBucketName(bucket) || bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:") || bucket.toLowerCase() !== bucket || bucket.length < 3) {
    endpointParams.ForcePathStyle = true;
  }
  if (endpointParams.DisableMultiRegionAccessPoints) {
    endpointParams.disableMultiRegionAccessPoints = true;
    endpointParams.DisableMRAP = true;
  }
  return endpointParams;
}, "resolveParamsForS3");
var DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
var IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
var DOTS_PATTERN = /\.\./;
var isDnsCompatibleBucketName = /* @__PURE__ */ __name((bucketName) => DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName), "isDnsCompatibleBucketName");
var isArnBucketName = /* @__PURE__ */ __name((bucketName) => {
  const [arn, partition, service, , , bucket] = bucketName.split(":");
  const isArn = arn === "arn" && bucketName.split(":").length >= 6;
  const isValidArn = Boolean(isArn && partition && service && bucket);
  if (isArn && !isValidArn) {
    throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
  }
  return isValidArn;
}, "isArnBucketName");

// src/adaptors/createConfigValueProvider.ts
var createConfigValueProvider = /* @__PURE__ */ __name((configKey, canonicalEndpointParamKey, config) => {
  const configProvider = /* @__PURE__ */ __name(async () => {
    const configValue = config[configKey] ?? config[canonicalEndpointParamKey];
    if (typeof configValue === "function") {
      return configValue();
    }
    return configValue;
  }, "configProvider");
  if (configKey === "credentialScope" || canonicalEndpointParamKey === "CredentialScope") {
    return async () => {
      const credentials = typeof config.credentials === "function" ? await config.credentials() : config.credentials;
      const configValue = (credentials == null ? void 0 : credentials.credentialScope) ?? (credentials == null ? void 0 : credentials.CredentialScope);
      return configValue;
    };
  }
  if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") {
    return async () => {
      const endpoint = await configProvider();
      if (endpoint && typeof endpoint === "object") {
        if ("url" in endpoint) {
          return endpoint.url.href;
        }
        if ("hostname" in endpoint) {
          const { protocol, hostname, port, path } = endpoint;
          return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
        }
      }
      return endpoint;
    };
  }
  return configProvider;
}, "createConfigValueProvider");

// src/adaptors/getEndpointFromInstructions.ts
var import_getEndpointFromConfig = require("./adaptors/getEndpointFromConfig");

// src/adaptors/toEndpointV1.ts
var import_url_parser = require("@smithy/url-parser");
var toEndpointV1 = /* @__PURE__ */ __name((endpoint) => {
  if (typeof endpoint === "object") {
    if ("url" in endpoint) {
      return (0, import_url_parser.parseUrl)(endpoint.url);
    }
    return endpoint;
  }
  return (0, import_url_parser.parseUrl)(endpoint);
}, "toEndpointV1");

// src/adaptors/getEndpointFromInstructions.ts
var getEndpointFromInstructions = /* @__PURE__ */ __name(async (commandInput, instructionsSupplier, clientConfig, context) => {
  if (!clientConfig.endpoint) {
    const endpointFromConfig = await (0, import_getEndpointFromConfig.getEndpointFromConfig)(clientConfig.serviceId || "");
    if (endpointFromConfig) {
      clientConfig.endpoint = () => Promise.resolve(toEndpointV1(endpointFromConfig));
    }
  }
  const endpointParams = await resolveParams(commandInput, instructionsSupplier, clientConfig);
  if (typeof clientConfig.endpointProvider !== "function") {
    throw new Error("config.endpointProvider is not set.");
  }
  const endpoint = clientConfig.endpointProvider(endpointParams, context);
  return endpoint;
}, "getEndpointFromInstructions");
var resolveParams = /* @__PURE__ */ __name(async (commandInput, instructionsSupplier, clientConfig) => {
  var _a;
  const endpointParams = {};
  const instructions = ((_a = instructionsSupplier == null ? void 0 : instructionsSupplier.getEndpointParameterInstructions) == null ? void 0 : _a.call(instructionsSupplier)) || {};
  for (const [name, instruction] of Object.entries(instructions)) {
    switch (instruction.type) {
      case "staticContextParams":
        endpointParams[name] = instruction.value;
        break;
      case "contextParams":
        endpointParams[name] = commandInput[instruction.name];
        break;
      case "clientContextParams":
      case "builtInParams":
        endpointParams[name] = await createConfigValueProvider(instruction.name, name, clientConfig)();
        break;
      default:
        throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
    }
  }
  if (Object.keys(instructions).length === 0) {
    Object.assign(endpointParams, clientConfig);
  }
  if (String(clientConfig.serviceId).toLowerCase() === "s3") {
    await resolveParamsForS3(endpointParams);
  }
  return endpointParams;
}, "resolveParams");

// src/endpointMiddleware.ts
var import_util_middleware = require("@smithy/util-middleware");
var endpointMiddleware = /* @__PURE__ */ __name(({
  config,
  instructions
}) => {
  return (next, context) => async (args) => {
    var _a, _b, _c;
    const endpoint = await getEndpointFromInstructions(
      args.input,
      {
        getEndpointParameterInstructions() {
          return instructions;
        }
      },
      { ...config },
      context
    );
    context.endpointV2 = endpoint;
    context.authSchemes = (_a = endpoint.properties) == null ? void 0 : _a.authSchemes;
    const authScheme = (_b = context.authSchemes) == null ? void 0 : _b[0];
    if (authScheme) {
      context["signing_region"] = authScheme.signingRegion;
      context["signing_service"] = authScheme.signingName;
      const smithyContext = (0, import_util_middleware.getSmithyContext)(context);
      const httpAuthOption = (_c = smithyContext == null ? void 0 : smithyContext.selectedHttpAuthScheme) == null ? void 0 : _c.httpAuthOption;
      if (httpAuthOption) {
        httpAuthOption.signingProperties = Object.assign(
          httpAuthOption.signingProperties || {},
          {
            signing_region: authScheme.signingRegion,
            signingRegion: authScheme.signingRegion,
            signing_service: authScheme.signingName,
            signingName: authScheme.signingName,
            signingRegionSet: authScheme.signingRegionSet
          },
          authScheme.properties
        );
      }
    }
    return next({
      ...args
    });
  };
}, "endpointMiddleware");

// src/getEndpointPlugin.ts
var import_middleware_serde = require("@smithy/middleware-serde");
var endpointMiddlewareOptions = {
  step: "serialize",
  tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
  name: "endpointV2Middleware",
  override: true,
  relation: "before",
  toMiddleware: import_middleware_serde.serializerMiddlewareOption.name
};
var getEndpointPlugin = /* @__PURE__ */ __name((config, instructions) => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(
      endpointMiddleware({
        config,
        instructions
      }),
      endpointMiddlewareOptions
    );
  }
}), "getEndpointPlugin");

// src/resolveEndpointConfig.ts

var resolveEndpointConfig = /* @__PURE__ */ __name((input) => {
  const tls = input.tls ?? true;
  const { endpoint } = input;
  const customEndpointProvider = endpoint != null ? async () => toEndpointV1(await (0, import_util_middleware.normalizeProvider)(endpoint)()) : void 0;
  const isCustomEndpoint = !!endpoint;
  return {
    ...input,
    endpoint: customEndpointProvider,
    tls,
    isCustomEndpoint,
    useDualstackEndpoint: (0, import_util_middleware.normalizeProvider)(input.useDualstackEndpoint ?? false),
    useFipsEndpoint: (0, import_util_middleware.normalizeProvider)(input.useFipsEndpoint ?? false)
  };
}, "resolveEndpointConfig");
// Annotate the CommonJS export names for ESM import in node:

0 && (module.exports = {
  getEndpointFromInstructions,
  resolveParams,
  toEndpointV1,
  endpointMiddleware,
  endpointMiddlewareOptions,
  getEndpointPlugin,
  resolveEndpointConfig
});

