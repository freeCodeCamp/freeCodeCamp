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
  NODE_REGION_CONFIG_FILE_OPTIONS: () => NODE_REGION_CONFIG_FILE_OPTIONS,
  NODE_REGION_CONFIG_OPTIONS: () => NODE_REGION_CONFIG_OPTIONS,
  REGION_ENV_NAME: () => REGION_ENV_NAME,
  REGION_INI_NAME: () => REGION_INI_NAME,
  getAwsRegionExtensionConfiguration: () => getAwsRegionExtensionConfiguration,
  resolveAwsRegionExtensionConfiguration: () => resolveAwsRegionExtensionConfiguration,
  resolveRegionConfig: () => resolveRegionConfig
});
module.exports = __toCommonJS(src_exports);

// src/extensions/index.ts
var getAwsRegionExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
  let runtimeConfigRegion = /* @__PURE__ */ __name(async () => {
    if (runtimeConfig.region === void 0) {
      throw new Error("Region is missing from runtimeConfig");
    }
    const region = runtimeConfig.region;
    if (typeof region === "string") {
      return region;
    }
    return region();
  }, "runtimeConfigRegion");
  return {
    setRegion(region) {
      runtimeConfigRegion = region;
    },
    region() {
      return runtimeConfigRegion;
    }
  };
}, "getAwsRegionExtensionConfiguration");
var resolveAwsRegionExtensionConfiguration = /* @__PURE__ */ __name((awsRegionExtensionConfiguration) => {
  return {
    region: awsRegionExtensionConfiguration.region()
  };
}, "resolveAwsRegionExtensionConfiguration");

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
// Annotate the CommonJS export names for ESM import in node:

0 && (module.exports = {
  getAwsRegionExtensionConfiguration,
  resolveAwsRegionExtensionConfiguration,
  REGION_ENV_NAME,
  REGION_INI_NAME,
  NODE_REGION_CONFIG_OPTIONS,
  NODE_REGION_CONFIG_FILE_OPTIONS,
  resolveRegionConfig
});

