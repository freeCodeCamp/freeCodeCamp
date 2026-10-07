Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const currentScopes = require('../currentScopes.js');

function hasSpansEnabled(maybeOptions) {
  if (typeof __SENTRY_TRACING__ === "boolean" && !__SENTRY_TRACING__) {
    return false;
  }
  const options = maybeOptions || currentScopes.getClient()?.getOptions();
  return !!options && // Note: This check is `!= null`, meaning "nullish". `0` is not "nullish", `undefined` and `null` are. (This comment was brought to you by 15 minutes of questioning life)
  (options.tracesSampleRate != null || !!options.tracesSampler);
}

exports.hasSpansEnabled = hasSpansEnabled;
//# sourceMappingURL=hasSpansEnabled.js.map
