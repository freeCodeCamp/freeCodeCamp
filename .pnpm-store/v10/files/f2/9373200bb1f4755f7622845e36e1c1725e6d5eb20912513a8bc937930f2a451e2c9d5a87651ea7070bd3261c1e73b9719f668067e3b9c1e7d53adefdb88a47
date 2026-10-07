Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const LOCAL_VARIABLES_KEY = "__SENTRY_ERROR_LOCAL_VARIABLES__";
function createRateLimiter(maxPerSecond, enable, disable) {
  let count = 0;
  let retrySeconds = 5;
  let disabledTimeout = 0;
  setInterval(() => {
    if (disabledTimeout === 0) {
      if (count > maxPerSecond) {
        retrySeconds *= 2;
        disable(retrySeconds);
        if (retrySeconds > 86400) {
          retrySeconds = 86400;
        }
        disabledTimeout = retrySeconds;
      }
    } else {
      disabledTimeout -= 1;
      if (disabledTimeout === 0) {
        enable();
      }
    }
    count = 0;
  }, 1e3).unref();
  return () => {
    count += 1;
  };
}
function isAnonymous(name) {
  return name !== void 0 && (name.length === 0 || name === "?" || name === "<anonymous>");
}
function functionNamesMatch(a, b) {
  return a === b || `Object.${a}` === b || a === `Object.${b}` || isAnonymous(a) && isAnonymous(b);
}

exports.LOCAL_VARIABLES_KEY = LOCAL_VARIABLES_KEY;
exports.createRateLimiter = createRateLimiter;
exports.functionNamesMatch = functionNamesMatch;
exports.isAnonymous = isAnonymous;
//# sourceMappingURL=common.js.map
