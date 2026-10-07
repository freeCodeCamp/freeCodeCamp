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
  AdaptiveRetryStrategy: () => AdaptiveRetryStrategy,
  CONFIG_MAX_ATTEMPTS: () => CONFIG_MAX_ATTEMPTS,
  CONFIG_RETRY_MODE: () => CONFIG_RETRY_MODE,
  ENV_MAX_ATTEMPTS: () => ENV_MAX_ATTEMPTS,
  ENV_RETRY_MODE: () => ENV_RETRY_MODE,
  NODE_MAX_ATTEMPT_CONFIG_OPTIONS: () => NODE_MAX_ATTEMPT_CONFIG_OPTIONS,
  NODE_RETRY_MODE_CONFIG_OPTIONS: () => NODE_RETRY_MODE_CONFIG_OPTIONS,
  StandardRetryStrategy: () => StandardRetryStrategy,
  defaultDelayDecider: () => defaultDelayDecider,
  defaultRetryDecider: () => defaultRetryDecider,
  getOmitRetryHeadersPlugin: () => getOmitRetryHeadersPlugin,
  getRetryAfterHint: () => getRetryAfterHint,
  getRetryPlugin: () => getRetryPlugin,
  omitRetryHeadersMiddleware: () => omitRetryHeadersMiddleware,
  omitRetryHeadersMiddlewareOptions: () => omitRetryHeadersMiddlewareOptions,
  resolveRetryConfig: () => resolveRetryConfig,
  retryMiddleware: () => retryMiddleware,
  retryMiddlewareOptions: () => retryMiddlewareOptions
});
module.exports = __toCommonJS(src_exports);

// src/AdaptiveRetryStrategy.ts


// src/StandardRetryStrategy.ts
var import_protocol_http = require("@smithy/protocol-http");


var import_uuid = require("uuid");

// src/defaultRetryQuota.ts
var import_util_retry = require("@smithy/util-retry");
var getDefaultRetryQuota = /* @__PURE__ */ __name((initialRetryTokens, options) => {
  const MAX_CAPACITY = initialRetryTokens;
  const noRetryIncrement = (options == null ? void 0 : options.noRetryIncrement) ?? import_util_retry.NO_RETRY_INCREMENT;
  const retryCost = (options == null ? void 0 : options.retryCost) ?? import_util_retry.RETRY_COST;
  const timeoutRetryCost = (options == null ? void 0 : options.timeoutRetryCost) ?? import_util_retry.TIMEOUT_RETRY_COST;
  let availableCapacity = initialRetryTokens;
  const getCapacityAmount = /* @__PURE__ */ __name((error) => error.name === "TimeoutError" ? timeoutRetryCost : retryCost, "getCapacityAmount");
  const hasRetryTokens = /* @__PURE__ */ __name((error) => getCapacityAmount(error) <= availableCapacity, "hasRetryTokens");
  const retrieveRetryTokens = /* @__PURE__ */ __name((error) => {
    if (!hasRetryTokens(error)) {
      throw new Error("No retry token available");
    }
    const capacityAmount = getCapacityAmount(error);
    availableCapacity -= capacityAmount;
    return capacityAmount;
  }, "retrieveRetryTokens");
  const releaseRetryTokens = /* @__PURE__ */ __name((capacityReleaseAmount) => {
    availableCapacity += capacityReleaseAmount ?? noRetryIncrement;
    availableCapacity = Math.min(availableCapacity, MAX_CAPACITY);
  }, "releaseRetryTokens");
  return Object.freeze({
    hasRetryTokens,
    retrieveRetryTokens,
    releaseRetryTokens
  });
}, "getDefaultRetryQuota");

// src/delayDecider.ts

var defaultDelayDecider = /* @__PURE__ */ __name((delayBase, attempts) => Math.floor(Math.min(import_util_retry.MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase)), "defaultDelayDecider");

// src/retryDecider.ts
var import_service_error_classification = require("@smithy/service-error-classification");
var defaultRetryDecider = /* @__PURE__ */ __name((error) => {
  if (!error) {
    return false;
  }
  return (0, import_service_error_classification.isRetryableByTrait)(error) || (0, import_service_error_classification.isClockSkewError)(error) || (0, import_service_error_classification.isThrottlingError)(error) || (0, import_service_error_classification.isTransientError)(error);
}, "defaultRetryDecider");

// src/util.ts
var asSdkError = /* @__PURE__ */ __name((error) => {
  if (error instanceof Error)
    return error;
  if (error instanceof Object)
    return Object.assign(new Error(), error);
  if (typeof error === "string")
    return new Error(error);
  return new Error(`AWS SDK error wrapper for ${error}`);
}, "asSdkError");

// src/StandardRetryStrategy.ts
var _StandardRetryStrategy = class _StandardRetryStrategy {
  constructor(maxAttemptsProvider, options) {
    this.maxAttemptsProvider = maxAttemptsProvider;
    this.mode = import_util_retry.RETRY_MODES.STANDARD;
    this.retryDecider = (options == null ? void 0 : options.retryDecider) ?? defaultRetryDecider;
    this.delayDecider = (options == null ? void 0 : options.delayDecider) ?? defaultDelayDecider;
    this.retryQuota = (options == null ? void 0 : options.retryQuota) ?? getDefaultRetryQuota(import_util_retry.INITIAL_RETRY_TOKENS);
  }
  shouldRetry(error, attempts, maxAttempts) {
    return attempts < maxAttempts && this.retryDecider(error) && this.retryQuota.hasRetryTokens(error);
  }
  async getMaxAttempts() {
    let maxAttempts;
    try {
      maxAttempts = await this.maxAttemptsProvider();
    } catch (error) {
      maxAttempts = import_util_retry.DEFAULT_MAX_ATTEMPTS;
    }
    return maxAttempts;
  }
  async retry(next, args, options) {
    let retryTokenAmount;
    let attempts = 0;
    let totalDelay = 0;
    const maxAttempts = await this.getMaxAttempts();
    const { request } = args;
    if (import_protocol_http.HttpRequest.isInstance(request)) {
      request.headers[import_util_retry.INVOCATION_ID_HEADER] = (0, import_uuid.v4)();
    }
    while (true) {
      try {
        if (import_protocol_http.HttpRequest.isInstance(request)) {
          request.headers[import_util_retry.REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
        }
        if (options == null ? void 0 : options.beforeRequest) {
          await options.beforeRequest();
        }
        const { response, output } = await next(args);
        if (options == null ? void 0 : options.afterRequest) {
          options.afterRequest(response);
        }
        this.retryQuota.releaseRetryTokens(retryTokenAmount);
        output.$metadata.attempts = attempts + 1;
        output.$metadata.totalRetryDelay = totalDelay;
        return { response, output };
      } catch (e) {
        const err = asSdkError(e);
        attempts++;
        if (this.shouldRetry(err, attempts, maxAttempts)) {
          retryTokenAmount = this.retryQuota.retrieveRetryTokens(err);
          const delayFromDecider = this.delayDecider(
            (0, import_service_error_classification.isThrottlingError)(err) ? import_util_retry.THROTTLING_RETRY_DELAY_BASE : import_util_retry.DEFAULT_RETRY_DELAY_BASE,
            attempts
          );
          const delayFromResponse = getDelayFromRetryAfterHeader(err.$response);
          const delay = Math.max(delayFromResponse || 0, delayFromDecider);
          totalDelay += delay;
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }
        if (!err.$metadata) {
          err.$metadata = {};
        }
        err.$metadata.attempts = attempts;
        err.$metadata.totalRetryDelay = totalDelay;
        throw err;
      }
    }
  }
};
__name(_StandardRetryStrategy, "StandardRetryStrategy");
var StandardRetryStrategy = _StandardRetryStrategy;
var getDelayFromRetryAfterHeader = /* @__PURE__ */ __name((response) => {
  if (!import_protocol_http.HttpResponse.isInstance(response))
    return;
  const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
  if (!retryAfterHeaderName)
    return;
  const retryAfter = response.headers[retryAfterHeaderName];
  const retryAfterSeconds = Number(retryAfter);
  if (!Number.isNaN(retryAfterSeconds))
    return retryAfterSeconds * 1e3;
  const retryAfterDate = new Date(retryAfter);
  return retryAfterDate.getTime() - Date.now();
}, "getDelayFromRetryAfterHeader");

// src/AdaptiveRetryStrategy.ts
var _AdaptiveRetryStrategy = class _AdaptiveRetryStrategy extends StandardRetryStrategy {
  constructor(maxAttemptsProvider, options) {
    const { rateLimiter, ...superOptions } = options ?? {};
    super(maxAttemptsProvider, superOptions);
    this.rateLimiter = rateLimiter ?? new import_util_retry.DefaultRateLimiter();
    this.mode = import_util_retry.RETRY_MODES.ADAPTIVE;
  }
  async retry(next, args) {
    return super.retry(next, args, {
      beforeRequest: async () => {
        return this.rateLimiter.getSendToken();
      },
      afterRequest: (response) => {
        this.rateLimiter.updateClientSendingRate(response);
      }
    });
  }
};
__name(_AdaptiveRetryStrategy, "AdaptiveRetryStrategy");
var AdaptiveRetryStrategy = _AdaptiveRetryStrategy;

// src/configurations.ts
var import_util_middleware = require("@smithy/util-middleware");

var ENV_MAX_ATTEMPTS = "AWS_MAX_ATTEMPTS";
var CONFIG_MAX_ATTEMPTS = "max_attempts";
var NODE_MAX_ATTEMPT_CONFIG_OPTIONS = {
  environmentVariableSelector: (env) => {
    const value = env[ENV_MAX_ATTEMPTS];
    if (!value)
      return void 0;
    const maxAttempt = parseInt(value);
    if (Number.isNaN(maxAttempt)) {
      throw new Error(`Environment variable ${ENV_MAX_ATTEMPTS} mast be a number, got "${value}"`);
    }
    return maxAttempt;
  },
  configFileSelector: (profile) => {
    const value = profile[CONFIG_MAX_ATTEMPTS];
    if (!value)
      return void 0;
    const maxAttempt = parseInt(value);
    if (Number.isNaN(maxAttempt)) {
      throw new Error(`Shared config file entry ${CONFIG_MAX_ATTEMPTS} mast be a number, got "${value}"`);
    }
    return maxAttempt;
  },
  default: import_util_retry.DEFAULT_MAX_ATTEMPTS
};
var resolveRetryConfig = /* @__PURE__ */ __name((input) => {
  const { retryStrategy } = input;
  const maxAttempts = (0, import_util_middleware.normalizeProvider)(input.maxAttempts ?? import_util_retry.DEFAULT_MAX_ATTEMPTS);
  return {
    ...input,
    maxAttempts,
    retryStrategy: async () => {
      if (retryStrategy) {
        return retryStrategy;
      }
      const retryMode = await (0, import_util_middleware.normalizeProvider)(input.retryMode)();
      if (retryMode === import_util_retry.RETRY_MODES.ADAPTIVE) {
        return new import_util_retry.AdaptiveRetryStrategy(maxAttempts);
      }
      return new import_util_retry.StandardRetryStrategy(maxAttempts);
    }
  };
}, "resolveRetryConfig");
var ENV_RETRY_MODE = "AWS_RETRY_MODE";
var CONFIG_RETRY_MODE = "retry_mode";
var NODE_RETRY_MODE_CONFIG_OPTIONS = {
  environmentVariableSelector: (env) => env[ENV_RETRY_MODE],
  configFileSelector: (profile) => profile[CONFIG_RETRY_MODE],
  default: import_util_retry.DEFAULT_RETRY_MODE
};

// src/omitRetryHeadersMiddleware.ts


var omitRetryHeadersMiddleware = /* @__PURE__ */ __name(() => (next) => async (args) => {
  const { request } = args;
  if (import_protocol_http.HttpRequest.isInstance(request)) {
    delete request.headers[import_util_retry.INVOCATION_ID_HEADER];
    delete request.headers[import_util_retry.REQUEST_HEADER];
  }
  return next(args);
}, "omitRetryHeadersMiddleware");
var omitRetryHeadersMiddlewareOptions = {
  name: "omitRetryHeadersMiddleware",
  tags: ["RETRY", "HEADERS", "OMIT_RETRY_HEADERS"],
  relation: "before",
  toMiddleware: "awsAuthMiddleware",
  override: true
};
var getOmitRetryHeadersPlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(omitRetryHeadersMiddleware(), omitRetryHeadersMiddlewareOptions);
  }
}), "getOmitRetryHeadersPlugin");

// src/retryMiddleware.ts


var import_smithy_client = require("@smithy/smithy-client");


var import_isStreamingPayload = require("./isStreamingPayload/isStreamingPayload");
var retryMiddleware = /* @__PURE__ */ __name((options) => (next, context) => async (args) => {
  var _a;
  let retryStrategy = await options.retryStrategy();
  const maxAttempts = await options.maxAttempts();
  if (isRetryStrategyV2(retryStrategy)) {
    retryStrategy = retryStrategy;
    let retryToken = await retryStrategy.acquireInitialRetryToken(context["partition_id"]);
    let lastError = new Error();
    let attempts = 0;
    let totalRetryDelay = 0;
    const { request } = args;
    const isRequest = import_protocol_http.HttpRequest.isInstance(request);
    if (isRequest) {
      request.headers[import_util_retry.INVOCATION_ID_HEADER] = (0, import_uuid.v4)();
    }
    while (true) {
      try {
        if (isRequest) {
          request.headers[import_util_retry.REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
        }
        const { response, output } = await next(args);
        retryStrategy.recordSuccess(retryToken);
        output.$metadata.attempts = attempts + 1;
        output.$metadata.totalRetryDelay = totalRetryDelay;
        return { response, output };
      } catch (e) {
        const retryErrorInfo = getRetryErrorInfo(e);
        lastError = asSdkError(e);
        if (isRequest && (0, import_isStreamingPayload.isStreamingPayload)(request)) {
          (_a = context.logger instanceof import_smithy_client.NoOpLogger ? console : context.logger) == null ? void 0 : _a.warn(
            "An error was encountered in a non-retryable streaming request."
          );
          throw lastError;
        }
        try {
          retryToken = await retryStrategy.refreshRetryTokenForRetry(retryToken, retryErrorInfo);
        } catch (refreshError) {
          if (!lastError.$metadata) {
            lastError.$metadata = {};
          }
          lastError.$metadata.attempts = attempts + 1;
          lastError.$metadata.totalRetryDelay = totalRetryDelay;
          throw lastError;
        }
        attempts = retryToken.getRetryCount();
        const delay = retryToken.getRetryDelay();
        totalRetryDelay += delay;
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  } else {
    retryStrategy = retryStrategy;
    if (retryStrategy == null ? void 0 : retryStrategy.mode)
      context.userAgent = [...context.userAgent || [], ["cfg/retry-mode", retryStrategy.mode]];
    return retryStrategy.retry(next, args);
  }
}, "retryMiddleware");
var isRetryStrategyV2 = /* @__PURE__ */ __name((retryStrategy) => typeof retryStrategy.acquireInitialRetryToken !== "undefined" && typeof retryStrategy.refreshRetryTokenForRetry !== "undefined" && typeof retryStrategy.recordSuccess !== "undefined", "isRetryStrategyV2");
var getRetryErrorInfo = /* @__PURE__ */ __name((error) => {
  const errorInfo = {
    error,
    errorType: getRetryErrorType(error)
  };
  const retryAfterHint = getRetryAfterHint(error.$response);
  if (retryAfterHint) {
    errorInfo.retryAfterHint = retryAfterHint;
  }
  return errorInfo;
}, "getRetryErrorInfo");
var getRetryErrorType = /* @__PURE__ */ __name((error) => {
  if ((0, import_service_error_classification.isThrottlingError)(error))
    return "THROTTLING";
  if ((0, import_service_error_classification.isTransientError)(error))
    return "TRANSIENT";
  if ((0, import_service_error_classification.isServerError)(error))
    return "SERVER_ERROR";
  return "CLIENT_ERROR";
}, "getRetryErrorType");
var retryMiddlewareOptions = {
  name: "retryMiddleware",
  tags: ["RETRY"],
  step: "finalizeRequest",
  priority: "high",
  override: true
};
var getRetryPlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(retryMiddleware(options), retryMiddlewareOptions);
  }
}), "getRetryPlugin");
var getRetryAfterHint = /* @__PURE__ */ __name((response) => {
  if (!import_protocol_http.HttpResponse.isInstance(response))
    return;
  const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
  if (!retryAfterHeaderName)
    return;
  const retryAfter = response.headers[retryAfterHeaderName];
  const retryAfterSeconds = Number(retryAfter);
  if (!Number.isNaN(retryAfterSeconds))
    return new Date(retryAfterSeconds * 1e3);
  const retryAfterDate = new Date(retryAfter);
  return retryAfterDate;
}, "getRetryAfterHint");
// Annotate the CommonJS export names for ESM import in node:

0 && (module.exports = {
  AdaptiveRetryStrategy,
  StandardRetryStrategy,
  ENV_MAX_ATTEMPTS,
  CONFIG_MAX_ATTEMPTS,
  NODE_MAX_ATTEMPT_CONFIG_OPTIONS,
  resolveRetryConfig,
  ENV_RETRY_MODE,
  CONFIG_RETRY_MODE,
  NODE_RETRY_MODE_CONFIG_OPTIONS,
  defaultDelayDecider,
  omitRetryHeadersMiddleware,
  omitRetryHeadersMiddlewareOptions,
  getOmitRetryHeadersPlugin,
  defaultRetryDecider,
  retryMiddleware,
  retryMiddlewareOptions,
  getRetryPlugin,
  getRetryAfterHint
});

