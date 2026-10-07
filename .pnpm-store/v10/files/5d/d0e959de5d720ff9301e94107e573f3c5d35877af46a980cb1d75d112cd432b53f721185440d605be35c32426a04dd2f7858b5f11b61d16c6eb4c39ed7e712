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
  CONFIG_USE_DUALSTACK_ENDPOINT: () => CONFIG_USE_DUALSTACK_ENDPOINT,
  CONFIG_USE_FIPS_ENDPOINT: () => CONFIG_USE_FIPS_ENDPOINT,
  DEFAULT_USE_DUALSTACK_ENDPOINT: () => DEFAULT_USE_DUALSTACK_ENDPOINT,
  DEFAULT_USE_FIPS_ENDPOINT: () => DEFAULT_USE_FIPS_ENDPOINT,
  ENV_USE_DUALSTACK_ENDPOINT: () => ENV_USE_DUALSTACK_ENDPOINT,
  ENV_USE_FIPS_ENDPOINT: () => ENV_USE_FIPS_ENDPOINT,
  NODE_REGION_CONFIG_FILE_OPTIONS: () => NODE_REGION_CONFIG_FILE_OPTIONS,
  NODE_REGION_CONFIG_OPTIONS: () => NODE_REGION_CONFIG_OPTIONS,
  NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS: () => NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS,
  NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS: () => NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS,
  REGION_ENV_NAME: () => REGION_ENV_NAME,
  REGION_INI_NAME: () => REGION_INI_NAME,
  getRegionInfo: () => getRegionInfo,
  resolveCustomEndpointsConfig: () => resolveCustomEndpointsConfig,
  resolveEndpointsConfig: () => resolveEndpointsConfig,
  resolveRegionConfig: () => resolveRegionConfig
});
module.exports = __toCommonJS(src_exports);

// src/endpointsConfig/NodeUseDualstackEndpointConfigOptions.ts
var import_util_config_provider = require("@smithy/util-config-provider");
var ENV_USE_DUALSTACK_ENDPOINT = "AWS_USE_DUALSTACK_ENDPOINT";
var CONFIG_USE_DUALSTACK_ENDPOINT = "use_dualstack_endpoint";
var DEFAULT_USE_DUALSTACK_ENDPOINT = false;
var NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = {
  environmentVariableSelector: (env) => (0, import_util_config_provider.booleanSelector)(env, ENV_USE_DUALSTACK_ENDPOINT, import_util_config_provider.SelectorType.ENV),
  configFileSelector: (profile) => (0, import_util_config_provider.booleanSelector)(profile, CONFIG_USE_DUALSTACK_ENDPOINT, import_util_config_provider.SelectorType.CONFIG),
  default: false
};

// src/endpointsConfig/NodeUseFipsEndpointConfigOptions.ts

var ENV_USE_FIPS_ENDPOINT = "AWS_USE_FIPS_ENDPOINT";
var CONFIG_USE_FIPS_ENDPOINT = "use_fips_endpoint";
var DEFAULT_USE_FIPS_ENDPOINT = false;
var NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = {
  environmentVariableSelector: (env) => (0, import_util_config_provider.booleanSelector)(env, ENV_USE_FIPS_ENDPOINT, import_util_config_provider.SelectorType.ENV),
  configFileSelector: (profile) => (0, import_util_config_provider.booleanSelector)(profile, CONFIG_USE_FIPS_ENDPOINT, import_util_config_provider.SelectorType.CONFIG),
  default: false
};

// src/endpointsConfig/resolveCustomEndpointsConfig.ts
var import_util_middleware = require("@smithy/util-middleware");
var resolveCustomEndpointsConfig = /* @__PURE__ */ __name((input) => {
  const { endpoint, urlParser } = input;
  return {
    ...input,
    tls: input.tls ?? true,
    endpoint: (0, import_util_middleware.normalizeProvider)(typeof endpoint === "string" ? urlParser(endpoint) : endpoint),
    isCustomEndpoint: true,
    useDualstackEndpoint: (0, import_util_middleware.normalizeProvider)(input.useDualstackEndpoint ?? false)
  };
}, "resolveCustomEndpointsConfig");

// src/endpointsConfig/resolveEndpointsConfig.ts


// src/endpointsConfig/utils/getEndpointFromRegion.ts
var getEndpointFromRegion = /* @__PURE__ */ __name(async (input) => {
  const { tls = true } = input;
  const region = await input.region();
  const dnsHostRegex = new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/);
  if (!dnsHostRegex.test(region)) {
    throw new Error("Invalid region in client config");
  }
  const useDualstackEndpoint = await input.useDualstackEndpoint();
  const useFipsEndpoint = await input.useFipsEndpoint();
  const { hostname } = await input.regionInfoProvider(region, { useDualstackEndpoint, useFipsEndpoint }) ?? {};
  if (!hostname) {
    throw new Error("Cannot resolve hostname from client config");
  }
  return input.urlParser(`${tls ? "https:" : "http:"}//${hostname}`);
}, "getEndpointFromRegion");

// src/endpointsConfig/resolveEndpointsConfig.ts
var resolveEndpointsConfig = /* @__PURE__ */ __name((input) => {
  const useDualstackEndpoint = (0, import_util_middleware.normalizeProvider)(input.useDualstackEndpoint ?? false);
  const { endpoint, useFipsEndpoint, urlParser } = input;
  return {
    ...input,
    tls: input.tls ?? true,
    endpoint: endpoint ? (0, import_util_middleware.normalizeProvider)(typeof endpoint === "string" ? urlParser(endpoint) : endpoint) : () => getEndpointFromRegion({ ...input, useDualstackEndpoint, useFipsEndpoint }),
    isCustomEndpoint: !!endpoint,
    useDualstackEndpoint
  };
}, "resolveEndpointsConfig");

// src/regionConfig/config.ts
var REGION_ENV_NAME = "AWS_REGION";
var REGION_INI_NAME = "region";
var NODE_REGION_CONFIG_OPTIONS = {
  environmentVariableSelector: (env) => env[REGION_ENV_NAME],
  configFileSelector: (profile) => profile[REGION_INI_NAME],
  default: () => {
    throw new Error("Region is missing");
  }
};
var NODE_REGION_CONFIG_FILE_OPTIONS = {
  preferredFile: "credentials"
};

// src/regionConfig/isFipsRegion.ts
var isFipsRegion = /* @__PURE__ */ __name((region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips")), "isFipsRegion");

// src/regionConfig/getRealRegion.ts
var getRealRegion = /* @__PURE__ */ __name((region) => isFipsRegion(region) ? ["fips-aws-global", "aws-fips"].includes(region) ? "us-east-1" : region.replace(/fips-(dkr-|prod-)?|-fips/, "") : region, "getRealRegion");

// src/regionConfig/resolveRegionConfig.ts
var resolveRegionConfig = /* @__PURE__ */ __name((input) => {
  const { region, useFipsEndpoint } = input;
  if (!region) {
    throw new Error("Region is missing");
  }
  return {
    ...input,
    region: async () => {
      if (typeof region === "string") {
        return getRealRegion(region);
      }
      const providedRegion = await region();
      return getRealRegion(providedRegion);
    },
    useFipsEndpoint: async () => {
      const providedRegion = typeof region === "string" ? region : await region();
      if (isFipsRegion(providedRegion)) {
        return true;
      }
      return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
    }
  };
}, "resolveRegionConfig");

// src/regionInfo/getHostnameFromVariants.ts
var getHostnameFromVariants = /* @__PURE__ */ __name((variants = [], { useFipsEndpoint, useDualstackEndpoint }) => {
  var _a;
  return (_a = variants.find(
    ({ tags }) => useFipsEndpoint === tags.includes("fips") && useDualstackEndpoint === tags.includes("dualstack")
  )) == null ? void 0 : _a.hostname;
}, "getHostnameFromVariants");

// src/regionInfo/getResolvedHostname.ts
var getResolvedHostname = /* @__PURE__ */ __name((resolvedRegion, { regionHostname, partitionHostname }) => regionHostname ? regionHostname : partitionHostname ? partitionHostname.replace("{region}", resolvedRegion) : void 0, "getResolvedHostname");

// src/regionInfo/getResolvedPartition.ts
var getResolvedPartition = /* @__PURE__ */ __name((region, { partitionHash }) => Object.keys(partitionHash || {}).find((key) => partitionHash[key].regions.includes(region)) ?? "aws", "getResolvedPartition");

// src/regionInfo/getResolvedSigningRegion.ts
var getResolvedSigningRegion = /* @__PURE__ */ __name((hostname, { signingRegion, regionRegex, useFipsEndpoint }) => {
  if (signingRegion) {
    return signingRegion;
  } else if (useFipsEndpoint) {
    const regionRegexJs = regionRegex.replace("\\\\", "\\").replace(/^\^/g, "\\.").replace(/\$$/g, "\\.");
    const regionRegexmatchArray = hostname.match(regionRegexJs);
    if (regionRegexmatchArray) {
      return regionRegexmatchArray[0].slice(1, -1);
    }
  }
}, "getResolvedSigningRegion");

// src/regionInfo/getRegionInfo.ts
var getRegionInfo = /* @__PURE__ */ __name((region, {
  useFipsEndpoint = false,
  useDualstackEndpoint = false,
  signingService,
  regionHash,
  partitionHash
}) => {
  var _a, _b, _c, _d, _e;
  const partition = getResolvedPartition(region, { partitionHash });
  const resolvedRegion = region in regionHash ? region : ((_a = partitionHash[partition]) == null ? void 0 : _a.endpoint) ?? region;
  const hostnameOptions = { useFipsEndpoint, useDualstackEndpoint };
  const regionHostname = getHostnameFromVariants((_b = regionHash[resolvedRegion]) == null ? void 0 : _b.variants, hostnameOptions);
  const partitionHostname = getHostnameFromVariants((_c = partitionHash[partition]) == null ? void 0 : _c.variants, hostnameOptions);
  const hostname = getResolvedHostname(resolvedRegion, { regionHostname, partitionHostname });
  if (hostname === void 0) {
    throw new Error(`Endpoint resolution failed for: ${{ resolvedRegion, useFipsEndpoint, useDualstackEndpoint }}`);
  }
  const signingRegion = getResolvedSigningRegion(hostname, {
    signingRegion: (_d = regionHash[resolvedRegion]) == null ? void 0 : _d.signingRegion,
    regionRegex: partitionHash[partition].regionRegex,
    useFipsEndpoint
  });
  return {
    partition,
    signingService,
    hostname,
    ...signingRegion && { signingRegion },
    ...((_e = regionHash[resolvedRegion]) == null ? void 0 : _e.signingService) && {
      signingService: regionHash[resolvedRegion].signingService
    }
  };
}, "getRegionInfo");
// Annotate the CommonJS export names for ESM import in node:

0 && (module.exports = {
  ENV_USE_DUALSTACK_ENDPOINT,
  CONFIG_USE_DUALSTACK_ENDPOINT,
  DEFAULT_USE_DUALSTACK_ENDPOINT,
  NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS,
  ENV_USE_FIPS_ENDPOINT,
  CONFIG_USE_FIPS_ENDPOINT,
  DEFAULT_USE_FIPS_ENDPOINT,
  NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS,
  resolveCustomEndpointsConfig,
  resolveEndpointsConfig,
  REGION_ENV_NAME,
  REGION_INI_NAME,
  NODE_REGION_CONFIG_OPTIONS,
  NODE_REGION_CONFIG_FILE_OPTIONS,
  resolveRegionConfig,
  getRegionInfo
});

