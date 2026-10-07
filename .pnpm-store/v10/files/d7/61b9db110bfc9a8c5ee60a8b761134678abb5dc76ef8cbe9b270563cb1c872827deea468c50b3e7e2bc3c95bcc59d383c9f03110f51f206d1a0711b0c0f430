Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const currentScopes = require('../currentScopes.js');
const debugBuild = require('../debug-build.js');
const debugLogger = require('./debug-logger.js');
const spanUtils = require('./spanUtils.js');

const _INTERNAL_FLAG_BUFFER_SIZE = 100;
const _INTERNAL_MAX_FLAGS_PER_SPAN = 10;
const SPAN_FLAG_ATTRIBUTE_PREFIX = "flag.evaluation.";
function _INTERNAL_copyFlagsFromScopeToEvent(event) {
  if (event.type) {
    return event;
  }
  const scope = currentScopes.getCurrentScope();
  const flagContext = scope.getScopeData().contexts.flags;
  const flagBuffer = flagContext ? flagContext.values : [];
  if (!flagBuffer.length) {
    return event;
  }
  if (event.contexts === void 0) {
    event.contexts = {};
  }
  event.contexts.flags = { values: [...flagBuffer] };
  return event;
}
function _INTERNAL_insertFlagToScope(name, value, maxSize = _INTERNAL_FLAG_BUFFER_SIZE) {
  const scopeContexts = currentScopes.getCurrentScope().getScopeData().contexts;
  if (!scopeContexts.flags) {
    scopeContexts.flags = { values: [] };
  }
  const flags = scopeContexts.flags.values;
  _INTERNAL_insertToFlagBuffer(flags, name, value, maxSize);
}
function _INTERNAL_insertToFlagBuffer(flags, name, value, maxSize) {
  if (typeof value !== "boolean") {
    return;
  }
  if (flags.length > maxSize) {
    debugBuild.DEBUG_BUILD && debugLogger.debug.error(`[Feature Flags] insertToFlagBuffer called on a buffer larger than maxSize=${maxSize}`);
    return;
  }
  const index = flags.findIndex((f) => f.flag === name);
  if (index !== -1) {
    flags.splice(index, 1);
  }
  if (flags.length === maxSize) {
    flags.shift();
  }
  flags.push({
    flag: name,
    result: value
  });
}
function _INTERNAL_addFeatureFlagToActiveSpan(name, value, maxFlagsPerSpan = _INTERNAL_MAX_FLAGS_PER_SPAN) {
  if (typeof value !== "boolean") {
    return;
  }
  const span = spanUtils.getActiveSpan();
  if (!span) {
    return;
  }
  const attributes = spanUtils.spanToJSON(span).data;
  if (`${SPAN_FLAG_ATTRIBUTE_PREFIX}${name}` in attributes) {
    span.setAttribute(`${SPAN_FLAG_ATTRIBUTE_PREFIX}${name}`, value);
    return;
  }
  const numOfAddedFlags = Object.keys(attributes).filter((key) => key.startsWith(SPAN_FLAG_ATTRIBUTE_PREFIX)).length;
  if (numOfAddedFlags < maxFlagsPerSpan) {
    span.setAttribute(`${SPAN_FLAG_ATTRIBUTE_PREFIX}${name}`, value);
  }
}

exports._INTERNAL_FLAG_BUFFER_SIZE = _INTERNAL_FLAG_BUFFER_SIZE;
exports._INTERNAL_MAX_FLAGS_PER_SPAN = _INTERNAL_MAX_FLAGS_PER_SPAN;
exports._INTERNAL_addFeatureFlagToActiveSpan = _INTERNAL_addFeatureFlagToActiveSpan;
exports._INTERNAL_copyFlagsFromScopeToEvent = _INTERNAL_copyFlagsFromScopeToEvent;
exports._INTERNAL_insertFlagToScope = _INTERNAL_insertFlagToScope;
exports._INTERNAL_insertToFlagBuffer = _INTERNAL_insertToFlagBuffer;
//# sourceMappingURL=featureFlags.js.map
