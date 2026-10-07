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
  ConfiguredRetryStrategy: () => ConfiguredRetryStrategy,
  DEFAULT_MAX_ATTEMPTS: () => DEFAULT_MAX_ATTEMPTS,
  DEFAULT_RETRY_DELAY_BASE: () => DEFAULT_RETRY_DELAY_BASE,
  DEFAULT_RETRY_MODE: () => DEFAULT_RETRY_MODE,
  DefaultRateLimiter: () => DefaultRateLimiter,
  INITIAL_RETRY_TOKENS: () => INITIAL_RETRY_TOKENS,
  INVOCATION_ID_HEADER: () => INVOCATION_ID_HEADER,
  MAXIMUM_RETRY_DELAY: () => MAXIMUM_RETRY_DELAY,
  NO_RETRY_INCREMENT: () => NO_RETRY_INCREMENT,
  REQUEST_HEADER: () => REQUEST_HEADER,
  RETRY_COST: () => RETRY_COST,
  RETRY_MODES: () => RETRY_MODES,
  StandardRetryStrategy: () => StandardRetryStrategy,
  THROTTLING_RETRY_DELAY_BASE: () => THROTTLING_RETRY_DELAY_BASE,
  TIMEOUT_RETRY_COST: () => TIMEOUT_RETRY_COST
});
module.exports = __toCommonJS(src_exports);

// src/config.ts
var RETRY_MODES = /* @__PURE__ */ ((RETRY_MODES2) => {
  RETRY_MODES2["STANDARD"] = "standard";
  RETRY_MODES2["ADAPTIVE"] = "adaptive";
  return RETRY_MODES2;
})(RETRY_MODES || {});
var DEFAULT_MAX_ATTEMPTS = 3;
var DEFAULT_RETRY_MODE = "standard" /* STANDARD */;

// src/DefaultRateLimiter.ts
var import_service_error_classification = require("@smithy/service-error-classification");
var _DefaultRateLimiter = class _DefaultRateLimiter {
  constructor(options) {
    // Pre-set state variables
    this.currentCapacity = 0;
    this.enabled = false;
    this.lastMaxRate = 0;
    this.measuredTxRate = 0;
    this.requestCount = 0;
    this.lastTimestamp = 0;
    this.timeWindow = 0;
    this.beta = (options == null ? void 0 : options.beta) ?? 0.7;
    this.minCapacity = (options == null ? void 0 : options.minCapacity) ?? 1;
    this.minFillRate = (options == null ? void 0 : options.minFillRate) ?? 0.5;
    this.scaleConstant = (options == null ? void 0 : options.scaleConstant) ?? 0.4;
    this.smooth = (options == null ? void 0 : options.smooth) ?? 0.8;
    const currentTimeInSeconds = this.getCurrentTimeInSeconds();
    this.lastThrottleTime = currentTimeInSeconds;
    this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
    this.fillRate = this.minFillRate;
    this.maxCapacity = this.minCapacity;
  }
  getCurrentTimeInSeconds() {
    return Date.now() / 1e3;
  }
  async getSendToken() {
    return this.acquireTokenBucket(1);
  }
  async acquireTokenBucket(amount) {
    if (!this.enabled) {
      return;
    }
    this.refillTokenBucket();
    if (amount > this.currentCapacity) {
      const delay = (amount - this.currentCapacity) / this.fillRate * 1e3;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
    this.currentCapacity = this.currentCapacity - amount;
  }
  refillTokenBucket() {
    const timestamp = this.getCurrentTimeInSeconds();
    if (!this.lastTimestamp) {
      this.lastTimestamp = timestamp;
      return;
    }
    const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
    this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + fillAmount);
    this.lastTimestamp = timestamp;
  }
  updateClientSendingRate(response) {
    let calculatedRate;
    this.updateMeasuredRate();
    if ((0, import_service_error_classification.isThrottlingError)(response)) {
      const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
      this.lastMaxRate = rateToUse;
      this.calculateTimeWindow();
      this.lastThrottleTime = this.getCurrentTimeInSeconds();
      calculatedRate = this.cubicThrottle(rateToUse);
      this.enableTokenBucket();
    } else {
      this.calculateTimeWindow();
      calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
    }
    const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
    this.updateTokenBucketRate(newRate);
  }
  calculateTimeWindow() {
    this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3));
  }
  cubicThrottle(rateToUse) {
    return this.getPrecise(rateToUse * this.beta);
  }
  cubicSuccess(timestamp) {
    return this.getPrecise(
      this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate
    );
  }
  enableTokenBucket() {
    this.enabled = true;
  }
  updateTokenBucketRate(newRate) {
    this.refillTokenBucket();
    this.fillRate = Math.max(newRate, this.minFillRate);
    this.maxCapacity = Math.max(newRate, this.minCapacity);
    this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
  }
  updateMeasuredRate() {
    const t = this.getCurrentTimeInSeconds();
    const timeBucket = Math.floor(t * 2) / 2;
    this.requestCount++;
    if (timeBucket > this.lastTxRateBucket) {
      const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
      this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
      this.requestCount = 0;
      this.lastTxRateBucket = timeBucket;
    }
  }
  getPrecise(num) {
    return parseFloat(num.toFixed(8));
  }
};
__name(_DefaultRateLimiter, "DefaultRateLimiter");
var DefaultRateLimiter = _DefaultRateLimiter;

// src/constants.ts
var DEFAULT_RETRY_DELAY_BASE = 100;
var MAXIMUM_RETRY_DELAY = 20 * 1e3;
var THROTTLING_RETRY_DELAY_BASE = 500;
var INITIAL_RETRY_TOKENS = 500;
var RETRY_COST = 5;
var TIMEOUT_RETRY_COST = 10;
var NO_RETRY_INCREMENT = 1;
var INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
var REQUEST_HEADER = "amz-sdk-request";

// src/defaultRetryBackoffStrategy.ts
var getDefaultRetryBackoffStrategy = /* @__PURE__ */ __name(() => {
  let delayBase = DEFAULT_RETRY_DELAY_BASE;
  const computeNextBackoffDelay = /* @__PURE__ */ __name((attempts) => {
    return Math.floor(Math.min(MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
  }, "computeNextBackoffDelay");
  const setDelayBase = /* @__PURE__ */ __name((delay) => {
    delayBase = delay;
  }, "setDelayBase");
  return {
    computeNextBackoffDelay,
    setDelayBase
  };
}, "getDefaultRetryBackoffStrategy");

// src/defaultRetryToken.ts
var createDefaultRetryToken = /* @__PURE__ */ __name(({
  retryDelay,
  retryCount,
  retryCost
}) => {
  const getRetryCount = /* @__PURE__ */ __name(() => retryCount, "getRetryCount");
  const getRetryDelay = /* @__PURE__ */ __name(() => Math.min(MAXIMUM_RETRY_DELAY, retryDelay), "getRetryDelay");
  const getRetryCost = /* @__PURE__ */ __name(() => retryCost, "getRetryCost");
  return {
    getRetryCount,
    getRetryDelay,
    getRetryCost
  };
}, "createDefaultRetryToken");

// src/StandardRetryStrategy.ts
var _StandardRetryStrategy = class _StandardRetryStrategy {
  constructor(maxAttempts) {
    this.maxAttempts = maxAttempts;
    this.mode = "standard" /* STANDARD */;
    this.capacity = INITIAL_RETRY_TOKENS;
    this.retryBackoffStrategy = getDefaultRetryBackoffStrategy();
    this.maxAttemptsProvider = typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts;
  }
  async acquireInitialRetryToken(retryTokenScope) {
    return createDefaultRetryToken({
      retryDelay: DEFAULT_RETRY_DELAY_BASE,
      retryCount: 0
    });
  }
  async refreshRetryTokenForRetry(token, errorInfo) {
    const maxAttempts = await this.getMaxAttempts();
    if (this.shouldRetry(token, errorInfo, maxAttempts)) {
      const errorType = errorInfo.errorType;
      this.retryBackoffStrategy.setDelayBase(
        errorType === "THROTTLING" ? THROTTLING_RETRY_DELAY_BASE : DEFAULT_RETRY_DELAY_BASE
      );
      const delayFromErrorType = this.retryBackoffStrategy.computeNextBackoffDelay(token.getRetryCount());
      const retryDelay = errorInfo.retryAfterHint ? Math.max(errorInfo.retryAfterHint.getTime() - Date.now() || 0, delayFromErrorType) : delayFromErrorType;
      const capacityCost = this.getCapacityCost(errorType);
      this.capacity -= capacityCost;
      return createDefaultRetryToken({
        retryDelay,
        retryCount: token.getRetryCount() + 1,
        retryCost: capacityCost
      });
    }
    throw new Error("No retry token available");
  }
  recordSuccess(token) {
    this.capacity = Math.max(INITIAL_RETRY_TOKENS, this.capacity + (token.getRetryCost() ?? NO_RETRY_INCREMENT));
  }
  /**
   * @returns the current available retry capacity.
   *
   * This number decreases when retries are executed and refills when requests or retries succeed.
   */
  getCapacity() {
    return this.capacity;
  }
  async getMaxAttempts() {
    try {
      return await this.maxAttemptsProvider();
    } catch (error) {
      console.warn(`Max attempts provider could not resolve. Using default of ${DEFAULT_MAX_ATTEMPTS}`);
      return DEFAULT_MAX_ATTEMPTS;
    }
  }
  shouldRetry(tokenToRenew, errorInfo, maxAttempts) {
    const attempts = tokenToRenew.getRetryCount() + 1;
    return attempts < maxAttempts && this.capacity >= this.getCapacityCost(errorInfo.errorType) && this.isRetryableError(errorInfo.errorType);
  }
  getCapacityCost(errorType) {
    return errorType === "TRANSIENT" ? TIMEOUT_RETRY_COST : RETRY_COST;
  }
  isRetryableError(errorType) {
    return errorType === "THROTTLING" || errorType === "TRANSIENT";
  }
};
__name(_StandardRetryStrategy, "StandardRetryStrategy");
var StandardRetryStrategy = _StandardRetryStrategy;

// src/AdaptiveRetryStrategy.ts
var _AdaptiveRetryStrategy = class _AdaptiveRetryStrategy {
  constructor(maxAttemptsProvider, options) {
    this.maxAttemptsProvider = maxAttemptsProvider;
    this.mode = "adaptive" /* ADAPTIVE */;
    const { rateLimiter } = options ?? {};
    this.rateLimiter = rateLimiter ?? new DefaultRateLimiter();
    this.standardRetryStrategy = new StandardRetryStrategy(maxAttemptsProvider);
  }
  async acquireInitialRetryToken(retryTokenScope) {
    await this.rateLimiter.getSendToken();
    return this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);
  }
  async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
    this.rateLimiter.updateClientSendingRate(errorInfo);
    return this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
  }
  recordSuccess(token) {
    this.rateLimiter.updateClientSendingRate({});
    this.standardRetryStrategy.recordSuccess(token);
  }
};
__name(_AdaptiveRetryStrategy, "AdaptiveRetryStrategy");
var AdaptiveRetryStrategy = _AdaptiveRetryStrategy;

// src/ConfiguredRetryStrategy.ts
var _ConfiguredRetryStrategy = class _ConfiguredRetryStrategy extends StandardRetryStrategy {
  /**
   * @param maxAttempts - the maximum number of retry attempts allowed.
   *                      e.g., if set to 3, then 4 total requests are possible.
   * @param computeNextBackoffDelay - a millisecond delay for each retry or a function that takes the retry attempt
   *                                  and returns the delay.
   *
   * @example exponential backoff.
   * ```js
   * new Client({
   *   retryStrategy: new ConfiguredRetryStrategy(3, (attempt) => attempt ** 2)
   * });
   * ```
   * @example constant delay.
   * ```js
   * new Client({
   *   retryStrategy: new ConfiguredRetryStrategy(3, 2000)
   * });
   * ```
   */
  constructor(maxAttempts, computeNextBackoffDelay = DEFAULT_RETRY_DELAY_BASE) {
    super(typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts);
    if (typeof computeNextBackoffDelay === "number") {
      this.computeNextBackoffDelay = () => computeNextBackoffDelay;
    } else {
      this.computeNextBackoffDelay = computeNextBackoffDelay;
    }
  }
  async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
    const token = await super.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
    token.getRetryDelay = () => this.computeNextBackoffDelay(token.getRetryCount());
    return token;
  }
};
__name(_ConfiguredRetryStrategy, "ConfiguredRetryStrategy");
var ConfiguredRetryStrategy = _ConfiguredRetryStrategy;
// Annotate the CommonJS export names for ESM import in node:

0 && (module.exports = {
  AdaptiveRetryStrategy,
  ConfiguredRetryStrategy,
  DefaultRateLimiter,
  StandardRetryStrategy,
  RETRY_MODES,
  DEFAULT_MAX_ATTEMPTS,
  DEFAULT_RETRY_MODE,
  DEFAULT_RETRY_DELAY_BASE,
  MAXIMUM_RETRY_DELAY,
  THROTTLING_RETRY_DELAY_BASE,
  INITIAL_RETRY_TOKENS,
  RETRY_COST,
  TIMEOUT_RETRY_COST,
  NO_RETRY_INCREMENT,
  INVOCATION_ID_HEADER,
  REQUEST_HEADER
});

