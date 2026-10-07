import { getCurrentScope } from '../currentScopes.js';
import { DEBUG_BUILD } from '../debug-build.js';
import { debug } from './debug-logger.js';
import { getActiveSpan, spanToJSON } from './spanUtils.js';

const _INTERNAL_FLAG_BUFFER_SIZE = 100;
const _INTERNAL_MAX_FLAGS_PER_SPAN = 10;
const SPAN_FLAG_ATTRIBUTE_PREFIX = "flag.evaluation.";
function _INTERNAL_copyFlagsFromScopeToEvent(event) {
  if (event.type) {
    return event;
  }
  const scope = getCurrentScope();
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
  const scopeContexts = getCurrentScope().getScopeData().contexts;
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
    DEBUG_BUILD && debug.error(`[Feature Flags] insertToFlagBuffer called on a buffer larger than maxSize=${maxSize}`);
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
  const span = getActiveSpan();
  if (!span) {
    return;
  }
  const attributes = spanToJSON(span).data;
  if (`${SPAN_FLAG_ATTRIBUTE_PREFIX}${name}` in attributes) {
    span.setAttribute(`${SPAN_FLAG_ATTRIBUTE_PREFIX}${name}`, value);
    return;
  }
  const numOfAddedFlags = Object.keys(attributes).filter((key) => key.startsWith(SPAN_FLAG_ATTRIBUTE_PREFIX)).length;
  if (numOfAddedFlags < maxFlagsPerSpan) {
    span.setAttribute(`${SPAN_FLAG_ATTRIBUTE_PREFIX}${name}`, value);
  }
}

export { _INTERNAL_FLAG_BUFFER_SIZE, _INTERNAL_MAX_FLAGS_PER_SPAN, _INTERNAL_addFeatureFlagToActiveSpan, _INTERNAL_copyFlagsFromScopeToEvent, _INTERNAL_insertFlagToScope, _INTERNAL_insertToFlagBuffer };
//# sourceMappingURL=featureFlags.js.map
