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
  isClockSkewCorrectedError: () => isClockSkewCorrectedError,
  isClockSkewError: () => isClockSkewError,
  isRetryableByTrait: () => isRetryableByTrait,
  isServerError: () => isServerError,
  isThrottlingError: () => isThrottlingError,
  isTransientError: () => isTransientError
});
module.exports = __toCommonJS(src_exports);

// src/constants.ts
var CLOCK_SKEW_ERROR_CODES = [
  "AuthFailure",
  "InvalidSignatureException",
  "RequestExpired",
  "RequestInTheFuture",
  "RequestTimeTooSkewed",
  "SignatureDoesNotMatch"
];
var THROTTLING_ERROR_CODES = [
  "BandwidthLimitExceeded",
  "EC2ThrottledException",
  "LimitExceededException",
  "PriorRequestNotComplete",
  "ProvisionedThroughputExceededException",
  "RequestLimitExceeded",
  "RequestThrottled",
  "RequestThrottledException",
  "SlowDown",
  "ThrottledException",
  "Throttling",
  "ThrottlingException",
  "TooManyRequestsException",
  "TransactionInProgressException"
  // DynamoDB
];
var TRANSIENT_ERROR_CODES = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"];
var TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
var NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"];

// src/index.ts
var isRetryableByTrait = /* @__PURE__ */ __name((error) => error.$retryable !== void 0, "isRetryableByTrait");
var isClockSkewError = /* @__PURE__ */ __name((error) => CLOCK_SKEW_ERROR_CODES.includes(error.name), "isClockSkewError");
var isClockSkewCorrectedError = /* @__PURE__ */ __name((error) => {
  var _a;
  return (_a = error.$metadata) == null ? void 0 : _a.clockSkewCorrected;
}, "isClockSkewCorrectedError");
var isThrottlingError = /* @__PURE__ */ __name((error) => {
  var _a, _b;
  return ((_a = error.$metadata) == null ? void 0 : _a.httpStatusCode) === 429 || THROTTLING_ERROR_CODES.includes(error.name) || ((_b = error.$retryable) == null ? void 0 : _b.throttling) == true;
}, "isThrottlingError");
var isTransientError = /* @__PURE__ */ __name((error) => {
  var _a;
  return isClockSkewCorrectedError(error) || TRANSIENT_ERROR_CODES.includes(error.name) || NODEJS_TIMEOUT_ERROR_CODES.includes((error == null ? void 0 : error.code) || "") || TRANSIENT_ERROR_STATUS_CODES.includes(((_a = error.$metadata) == null ? void 0 : _a.httpStatusCode) || 0);
}, "isTransientError");
var isServerError = /* @__PURE__ */ __name((error) => {
  var _a;
  if (((_a = error.$metadata) == null ? void 0 : _a.httpStatusCode) !== void 0) {
    const statusCode = error.$metadata.httpStatusCode;
    if (500 <= statusCode && statusCode <= 599 && !isTransientError(error)) {
      return true;
    }
    return false;
  }
  return false;
}, "isServerError");
// Annotate the CommonJS export names for ESM import in node:

0 && (module.exports = {
  isRetryableByTrait,
  isClockSkewError,
  isClockSkewCorrectedError,
  isThrottlingError,
  isTransientError,
  isServerError
});

