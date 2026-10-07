Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const debugBuild = require('../debug-build.js');
const debugLogger = require('./debug-logger.js');
const string = require('./string.js');

function logIgnoredSpan(droppedSpan) {
  debugLogger.debug.log(`Ignoring span ${droppedSpan.op} - ${droppedSpan.description} because it matches \`ignoreSpans\`.`);
}
function shouldIgnoreSpan(span, ignoreSpans) {
  if (!ignoreSpans?.length) {
    return false;
  }
  for (const pattern of ignoreSpans) {
    if (isStringOrRegExp(pattern)) {
      if (span.description && string.isMatchingPattern(span.description, pattern)) {
        debugBuild.DEBUG_BUILD && logIgnoredSpan(span);
        return true;
      }
      continue;
    }
    const hasAttributes = !!pattern.attributes && Object.keys(pattern.attributes).length > 0;
    if (!pattern.name && !pattern.op && !hasAttributes) {
      continue;
    }
    const nameMatches = pattern.name ? span.description && string.isMatchingPattern(span.description, pattern.name) : true;
    const opMatches = pattern.op ? span.op && string.isMatchingPattern(span.op, pattern.op) : true;
    const attrsMatch = pattern.attributes ? Object.entries(pattern.attributes).every(
      ([key, valuePattern]) => _matchesAttributeValue(span.attributes?.[key], valuePattern)
    ) : true;
    if (nameMatches && opMatches && attrsMatch) {
      debugBuild.DEBUG_BUILD && logIgnoredSpan(span);
      return true;
    }
  }
  return false;
}
function _matchesAttributeValue(actual, pat) {
  if (typeof actual === "string" && (typeof pat === "string" || pat instanceof RegExp)) {
    return string.isMatchingPattern(actual, pat);
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

exports.reparentChildSpans = reparentChildSpans;
exports.shouldIgnoreSpan = shouldIgnoreSpan;
//# sourceMappingURL=should-ignore-span.js.map
