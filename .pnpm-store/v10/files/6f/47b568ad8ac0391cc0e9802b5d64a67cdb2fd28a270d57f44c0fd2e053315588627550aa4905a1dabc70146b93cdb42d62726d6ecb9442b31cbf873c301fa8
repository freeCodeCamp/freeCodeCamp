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
  DEFAULT_MAX_RETRIES: () => DEFAULT_MAX_RETRIES,
  DEFAULT_TIMEOUT: () => DEFAULT_TIMEOUT,
  ENV_CMDS_AUTH_TOKEN: () => ENV_CMDS_AUTH_TOKEN,
  ENV_CMDS_FULL_URI: () => ENV_CMDS_FULL_URI,
  ENV_CMDS_RELATIVE_URI: () => ENV_CMDS_RELATIVE_URI,
  Endpoint: () => Endpoint,
  fromContainerMetadata: () => fromContainerMetadata,
  fromInstanceMetadata: () => fromInstanceMetadata,
  getInstanceMetadataEndpoint: () => getInstanceMetadataEndpoint,
  httpRequest: () => httpRequest,
  providerConfigFromInit: () => providerConfigFromInit
});
module.exports = __toCommonJS(src_exports);

// src/fromContainerMetadata.ts

var import_url = require("url");

// src/remoteProvider/httpRequest.ts
var import_property_provider = require("@smithy/property-provider");
var import_buffer = require("buffer");
var import_http = require("http");
function httpRequest(options) {
  return new Promise((resolve, reject) => {
    var _a;
    const req = (0, import_http.request)({
      method: "GET",
      ...options,
      // Node.js http module doesn't accept hostname with square brackets
      // Refs: https://github.com/nodejs/node/issues/39738
      hostname: (_a = options.hostname) == null ? void 0 : _a.replace(/^\[(.+)\]$/, "$1")
    });
    req.on("error", (err) => {
      reject(Object.assign(new import_property_provider.ProviderError("Unable to connect to instance metadata service"), err));
      req.destroy();
    });
    req.on("timeout", () => {
      reject(new import_property_provider.ProviderError("TimeoutError from instance metadata service"));
      req.destroy();
    });
    req.on("response", (res) => {
      const { statusCode = 400 } = res;
      if (statusCode < 200 || 300 <= statusCode) {
        reject(
          Object.assign(new import_property_provider.ProviderError("Error response received from instance metadata service"), { statusCode })
        );
        req.destroy();
      }
      const chunks = [];
      res.on("data", (chunk) => {
        chunks.push(chunk);
      });
      res.on("end", () => {
        resolve(import_buffer.Buffer.concat(chunks));
        req.destroy();
      });
    });
    req.end();
  });
}
__name(httpRequest, "httpRequest");

// src/remoteProvider/ImdsCredentials.ts
var isImdsCredentials = /* @__PURE__ */ __name((arg) => Boolean(arg) && typeof arg === "object" && typeof arg.AccessKeyId === "string" && typeof arg.SecretAccessKey === "string" && typeof arg.Token === "string" && typeof arg.Expiration === "string", "isImdsCredentials");
var fromImdsCredentials = /* @__PURE__ */ __name((creds) => ({
  accessKeyId: creds.AccessKeyId,
  secretAccessKey: creds.SecretAccessKey,
  sessionToken: creds.Token,
  expiration: new Date(creds.Expiration)
}), "fromImdsCredentials");

// src/remoteProvider/RemoteProviderInit.ts
var DEFAULT_TIMEOUT = 1e3;
var DEFAULT_MAX_RETRIES = 0;
var providerConfigFromInit = /* @__PURE__ */ __name(({
  maxRetries = DEFAULT_MAX_RETRIES,
  timeout = DEFAULT_TIMEOUT
}) => ({ maxRetries, timeout }), "providerConfigFromInit");

// src/remoteProvider/retry.ts
var retry = /* @__PURE__ */ __name((toRetry, maxRetries) => {
  let promise = toRetry();
  for (let i = 0; i < maxRetries; i++) {
    promise = promise.catch(toRetry);
  }
  return promise;
}, "retry");

// src/fromContainerMetadata.ts
var ENV_CMDS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
var ENV_CMDS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
var ENV_CMDS_AUTH_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
var fromContainerMetadata = /* @__PURE__ */ __name((init = {}) => {
  const { timeout, maxRetries } = providerConfigFromInit(init);
  return () => retry(async () => {
    const requestOptions = await getCmdsUri();
    const credsResponse = JSON.parse(await requestFromEcsImds(timeout, requestOptions));
    if (!isImdsCredentials(credsResponse)) {
      throw new import_property_provider.CredentialsProviderError("Invalid response received from instance metadata service.");
    }
    return fromImdsCredentials(credsResponse);
  }, maxRetries);
}, "fromContainerMetadata");
var requestFromEcsImds = /* @__PURE__ */ __name(async (timeout, options) => {
  if (process.env[ENV_CMDS_AUTH_TOKEN]) {
    options.headers = {
      ...options.headers,
      Authorization: process.env[ENV_CMDS_AUTH_TOKEN]
    };
  }
  const buffer = await httpRequest({
    ...options,
    timeout
  });
  return buffer.toString();
}, "requestFromEcsImds");
var CMDS_IP = "169.254.170.2";
var GREENGRASS_HOSTS = {
  localhost: true,
  "127.0.0.1": true
};
var GREENGRASS_PROTOCOLS = {
  "http:": true,
  "https:": true
};
var getCmdsUri = /* @__PURE__ */ __name(async () => {
  if (process.env[ENV_CMDS_RELATIVE_URI]) {
    return {
      hostname: CMDS_IP,
      path: process.env[ENV_CMDS_RELATIVE_URI]
    };
  }
  if (process.env[ENV_CMDS_FULL_URI]) {
    const parsed = (0, import_url.parse)(process.env[ENV_CMDS_FULL_URI]);
    if (!parsed.hostname || !(parsed.hostname in GREENGRASS_HOSTS)) {
      throw new import_property_provider.CredentialsProviderError(
        `${parsed.hostname} is not a valid container metadata service hostname`,
        false
      );
    }
    if (!parsed.protocol || !(parsed.protocol in GREENGRASS_PROTOCOLS)) {
      throw new import_property_provider.CredentialsProviderError(
        `${parsed.protocol} is not a valid container metadata service protocol`,
        false
      );
    }
    return {
      ...parsed,
      port: parsed.port ? parseInt(parsed.port, 10) : void 0
    };
  }
  throw new import_property_provider.CredentialsProviderError(
    `The container metadata credential provider cannot be used unless the ${ENV_CMDS_RELATIVE_URI} or ${ENV_CMDS_FULL_URI} environment variable is set`,
    false
  );
}, "getCmdsUri");

// src/fromInstanceMetadata.ts



// src/error/InstanceMetadataV1FallbackError.ts

var _InstanceMetadataV1FallbackError = class _InstanceMetadataV1FallbackError extends import_property_provider.CredentialsProviderError {
  constructor(message, tryNextLink = true) {
    super(message, tryNextLink);
    this.tryNextLink = tryNextLink;
    this.name = "InstanceMetadataV1FallbackError";
    Object.setPrototypeOf(this, _InstanceMetadataV1FallbackError.prototype);
  }
};
__name(_InstanceMetadataV1FallbackError, "InstanceMetadataV1FallbackError");
var InstanceMetadataV1FallbackError = _InstanceMetadataV1FallbackError;

// src/utils/getInstanceMetadataEndpoint.ts
var import_node_config_provider = require("@smithy/node-config-provider");
var import_url_parser = require("@smithy/url-parser");

// src/config/Endpoint.ts
var Endpoint = /* @__PURE__ */ ((Endpoint2) => {
  Endpoint2["IPv4"] = "http://169.254.169.254";
  Endpoint2["IPv6"] = "http://[fd00:ec2::254]";
  return Endpoint2;
})(Endpoint || {});

// src/config/EndpointConfigOptions.ts
var ENV_ENDPOINT_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT";
var CONFIG_ENDPOINT_NAME = "ec2_metadata_service_endpoint";
var ENDPOINT_CONFIG_OPTIONS = {
  environmentVariableSelector: (env) => env[ENV_ENDPOINT_NAME],
  configFileSelector: (profile) => profile[CONFIG_ENDPOINT_NAME],
  default: void 0
};

// src/config/EndpointMode.ts
var EndpointMode = /* @__PURE__ */ ((EndpointMode2) => {
  EndpointMode2["IPv4"] = "IPv4";
  EndpointMode2["IPv6"] = "IPv6";
  return EndpointMode2;
})(EndpointMode || {});

// src/config/EndpointModeConfigOptions.ts
var ENV_ENDPOINT_MODE_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE";
var CONFIG_ENDPOINT_MODE_NAME = "ec2_metadata_service_endpoint_mode";
var ENDPOINT_MODE_CONFIG_OPTIONS = {
  environmentVariableSelector: (env) => env[ENV_ENDPOINT_MODE_NAME],
  configFileSelector: (profile) => profile[CONFIG_ENDPOINT_MODE_NAME],
  default: "IPv4" /* IPv4 */
};

// src/utils/getInstanceMetadataEndpoint.ts
var getInstanceMetadataEndpoint = /* @__PURE__ */ __name(async () => (0, import_url_parser.parseUrl)(await getFromEndpointConfig() || await getFromEndpointModeConfig()), "getInstanceMetadataEndpoint");
var getFromEndpointConfig = /* @__PURE__ */ __name(async () => (0, import_node_config_provider.loadConfig)(ENDPOINT_CONFIG_OPTIONS)(), "getFromEndpointConfig");
var getFromEndpointModeConfig = /* @__PURE__ */ __name(async () => {
  const endpointMode = await (0, import_node_config_provider.loadConfig)(ENDPOINT_MODE_CONFIG_OPTIONS)();
  switch (endpointMode) {
    case "IPv4" /* IPv4 */:
      return "http://169.254.169.254" /* IPv4 */;
    case "IPv6" /* IPv6 */:
      return "http://[fd00:ec2::254]" /* IPv6 */;
    default:
      throw new Error(`Unsupported endpoint mode: ${endpointMode}. Select from ${Object.values(EndpointMode)}`);
  }
}, "getFromEndpointModeConfig");

// src/utils/getExtendedInstanceMetadataCredentials.ts
var STATIC_STABILITY_REFRESH_INTERVAL_SECONDS = 5 * 60;
var STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS = 5 * 60;
var STATIC_STABILITY_DOC_URL = "https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html";
var getExtendedInstanceMetadataCredentials = /* @__PURE__ */ __name((credentials, logger) => {
  const refreshInterval = STATIC_STABILITY_REFRESH_INTERVAL_SECONDS + Math.floor(Math.random() * STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS);
  const newExpiration = new Date(Date.now() + refreshInterval * 1e3);
  logger.warn(
    `Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted after ${new Date(newExpiration)}.
For more information, please visit: ` + STATIC_STABILITY_DOC_URL
  );
  const originalExpiration = credentials.originalExpiration ?? credentials.expiration;
  return {
    ...credentials,
    ...originalExpiration ? { originalExpiration } : {},
    expiration: newExpiration
  };
}, "getExtendedInstanceMetadataCredentials");

// src/utils/staticStabilityProvider.ts
var staticStabilityProvider = /* @__PURE__ */ __name((provider, options = {}) => {
  const logger = (options == null ? void 0 : options.logger) || console;
  let pastCredentials;
  return async () => {
    let credentials;
    try {
      credentials = await provider();
      if (credentials.expiration && credentials.expiration.getTime() < Date.now()) {
        credentials = getExtendedInstanceMetadataCredentials(credentials, logger);
      }
    } catch (e) {
      if (pastCredentials) {
        logger.warn("Credential renew failed: ", e);
        credentials = getExtendedInstanceMetadataCredentials(pastCredentials, logger);
      } else {
        throw e;
      }
    }
    pastCredentials = credentials;
    return credentials;
  };
}, "staticStabilityProvider");

// src/fromInstanceMetadata.ts
var IMDS_PATH = "/latest/meta-data/iam/security-credentials/";
var IMDS_TOKEN_PATH = "/latest/api/token";
var AWS_EC2_METADATA_V1_DISABLED = "AWS_EC2_METADATA_V1_DISABLED";
var PROFILE_AWS_EC2_METADATA_V1_DISABLED = "ec2_metadata_v1_disabled";
var X_AWS_EC2_METADATA_TOKEN = "x-aws-ec2-metadata-token";
var fromInstanceMetadata = /* @__PURE__ */ __name((init = {}) => staticStabilityProvider(getInstanceImdsProvider(init), { logger: init.logger }), "fromInstanceMetadata");
var getInstanceImdsProvider = /* @__PURE__ */ __name((init) => {
  let disableFetchToken = false;
  const { logger, profile } = init;
  const { timeout, maxRetries } = providerConfigFromInit(init);
  const getCredentials = /* @__PURE__ */ __name(async (maxRetries2, options) => {
    var _a;
    const isImdsV1Fallback = disableFetchToken || ((_a = options.headers) == null ? void 0 : _a[X_AWS_EC2_METADATA_TOKEN]) == null;
    if (isImdsV1Fallback) {
      let fallbackBlockedFromProfile = false;
      let fallbackBlockedFromProcessEnv = false;
      const configValue = await (0, import_node_config_provider.loadConfig)(
        {
          environmentVariableSelector: (env) => {
            const envValue = env[AWS_EC2_METADATA_V1_DISABLED];
            fallbackBlockedFromProcessEnv = !!envValue && envValue !== "false";
            if (envValue === void 0) {
              throw new import_property_provider.CredentialsProviderError(
                `${AWS_EC2_METADATA_V1_DISABLED} not set in env, checking config file next.`
              );
            }
            return fallbackBlockedFromProcessEnv;
          },
          configFileSelector: (profile2) => {
            const profileValue = profile2[PROFILE_AWS_EC2_METADATA_V1_DISABLED];
            fallbackBlockedFromProfile = !!profileValue && profileValue !== "false";
            return fallbackBlockedFromProfile;
          },
          default: false
        },
        {
          profile
        }
      )();
      if (init.ec2MetadataV1Disabled || configValue) {
        const causes = [];
        if (init.ec2MetadataV1Disabled)
          causes.push("credential provider initialization (runtime option ec2MetadataV1Disabled)");
        if (fallbackBlockedFromProfile)
          causes.push(`config file profile (${PROFILE_AWS_EC2_METADATA_V1_DISABLED})`);
        if (fallbackBlockedFromProcessEnv)
          causes.push(`process environment variable (${AWS_EC2_METADATA_V1_DISABLED})`);
        throw new InstanceMetadataV1FallbackError(
          `AWS EC2 Metadata v1 fallback has been blocked by AWS SDK configuration in the following: [${causes.join(
            ", "
          )}].`
        );
      }
    }
    const imdsProfile = (await retry(async () => {
      let profile2;
      try {
        profile2 = await getProfile(options);
      } catch (err) {
        if (err.statusCode === 401) {
          disableFetchToken = false;
        }
        throw err;
      }
      return profile2;
    }, maxRetries2)).trim();
    return retry(async () => {
      let creds;
      try {
        creds = await getCredentialsFromProfile(imdsProfile, options);
      } catch (err) {
        if (err.statusCode === 401) {
          disableFetchToken = false;
        }
        throw err;
      }
      return creds;
    }, maxRetries2);
  }, "getCredentials");
  return async () => {
    const endpoint = await getInstanceMetadataEndpoint();
    if (disableFetchToken) {
      logger == null ? void 0 : logger.debug("AWS SDK Instance Metadata", "using v1 fallback (no token fetch)");
      return getCredentials(maxRetries, { ...endpoint, timeout });
    } else {
      let token;
      try {
        token = (await getMetadataToken({ ...endpoint, timeout })).toString();
      } catch (error) {
        if ((error == null ? void 0 : error.statusCode) === 400) {
          throw Object.assign(error, {
            message: "EC2 Metadata token request returned error"
          });
        } else if (error.message === "TimeoutError" || [403, 404, 405].includes(error.statusCode)) {
          disableFetchToken = true;
        }
        logger == null ? void 0 : logger.debug("AWS SDK Instance Metadata", "using v1 fallback (initial)");
        return getCredentials(maxRetries, { ...endpoint, timeout });
      }
      return getCredentials(maxRetries, {
        ...endpoint,
        headers: {
          [X_AWS_EC2_METADATA_TOKEN]: token
        },
        timeout
      });
    }
  };
}, "getInstanceImdsProvider");
var getMetadataToken = /* @__PURE__ */ __name(async (options) => httpRequest({
  ...options,
  path: IMDS_TOKEN_PATH,
  method: "PUT",
  headers: {
    "x-aws-ec2-metadata-token-ttl-seconds": "21600"
  }
}), "getMetadataToken");
var getProfile = /* @__PURE__ */ __name(async (options) => (await httpRequest({ ...options, path: IMDS_PATH })).toString(), "getProfile");
var getCredentialsFromProfile = /* @__PURE__ */ __name(async (profile, options) => {
  const credsResponse = JSON.parse(
    (await httpRequest({
      ...options,
      path: IMDS_PATH + profile
    })).toString()
  );
  if (!isImdsCredentials(credsResponse)) {
    throw new import_property_provider.CredentialsProviderError("Invalid response received from instance metadata service.");
  }
  return fromImdsCredentials(credsResponse);
}, "getCredentialsFromProfile");
// Annotate the CommonJS export names for ESM import in node:

0 && (module.exports = {
  httpRequest,
  getInstanceMetadataEndpoint,
  Endpoint,
  ENV_CMDS_FULL_URI,
  ENV_CMDS_RELATIVE_URI,
  ENV_CMDS_AUTH_TOKEN,
  fromContainerMetadata,
  fromInstanceMetadata,
  DEFAULT_TIMEOUT,
  DEFAULT_MAX_RETRIES,
  providerConfigFromInit
});

