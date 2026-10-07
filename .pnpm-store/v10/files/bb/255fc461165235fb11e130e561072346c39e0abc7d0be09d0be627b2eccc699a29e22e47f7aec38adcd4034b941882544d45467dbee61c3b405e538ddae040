import { DEBUG_BUILD } from '../debug-build.js';
import { debug } from './debug-logger.js';
import { isMatchingPattern } from './string.js';

function logIgnoredSpan(droppedSpan) {
  debug.log(`Ignoring span ${droppedSpan.op} - ${droppedSpan.description} because it matches \`ignoreSpans\`.`);
}
function shouldIgnoreSpan(span, ignoreSpans) {
  if (!ignoreSpans?.length) {
    return false;
  }
  for (const pattern of ignoreSpans) {
    if (isStringOrRegExp(pattern)) {
      if (span.description && isMatchingPattern(span.description, pattern)) {
        DEBUG_BUILD && logIgnoredSpan(span);
        return true;
      }
      continue;
    }
    const hasAttributes = !!pattern.attributes && Object.keys(pattern.attributes).length > 0;
    if (!pattern.name && !pattern.op && !hasAttributes) {
      continue;
    }
    const nameMatches = pattern.name ? span.description && isMatchingPattern(span.description, pattern.name) : true;
    const opMatches = pattern.op ? span.op && isMatchingPattern(span.op, pattern.op) : true;
    const attrsMatch = pattern.attributes ? Object.entries(pattern.attributes).every(
      ([key, valuePattern]) => _matchesAttributeValue(span.attributes?.[key], valuePattern)
    ) : true;
    if (nameMatches && opMatches && attrsMatch) {
      DEBUG_BUILD && logIgnoredSpan(span);
      return true;
    }
  }
  return false;
}
function _matchesAttributeValue(actual, pat) {
  if (typeof actual === "string" && (typeof pat === "string" || pat instanceof RegExp)) {
    return isMatchingPattern(actual, pat);
  }
  if (Array.isArray(actual) && Array.isArray(pat)) {
    return actual.length === pat.length && actual.every((v, i) => v === pat[i]);
  }
  return actual === pat;
}
function reparentChildSpans(spans, dropSpan) {
  const droppedSpanParentId = dropSpan.parent_span_id;
  const droppedSpanId = dropSpan.span_id;
  if (!droppedSpanParentId) {
    return;
  }
  for (const span of spans) {
    if (span.parent_span_id === droppedSpanId) {
      span.parent_span_id = droppedSpanParentId;
    }
  }
}
function isStringOrRegExp(value) {
  return typeof value === "string" || value instanceof RegExp;
}

export { reparentChildSpans, shouldIgnoreSpan };
//# sourceMappingURL=should-ignore-span.js.map
