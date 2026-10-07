Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const api = require('@opentelemetry/api');
const core = require('@opentelemetry/core');

function hasValidSqlComment(query) {
  const indexOpeningDashDashComment = query.indexOf("--");
  if (indexOpeningDashDashComment >= 0) {
    return true;
  }
  const indexOpeningSlashComment = query.indexOf("/*");
  if (indexOpeningSlashComment < 0) {
    return false;
  }
  const indexClosingSlashComment = query.indexOf("*/");
  return indexOpeningDashDashComment < indexClosingSlashComment;
}
function fixedEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);
}
function addSqlCommenterComment(span, query) {
  if (typeof query !== "string" || query.length === 0) {
    return query;
  }
  if (hasValidSqlComment(query)) {
    return query;
  }
  const propagator = new core.W3CTraceContextPropagator();
  const headers = {};
  propagator.inject(api.trace.setSpan(api.ROOT_CONTEXT, span), headers, api.defaultTextMapSetter);
  const sortedKeys = Object.keys(headers).sort();
  if (sortedKeys.length === 0) {
    return query;
  }
  const commentString = sortedKeys.map((key) => {
    const encodedValue = fixedEncodeURIComponent(headers[key]);
    return `${key}='${encodedValue}'`;
  }).join(",");
  return `${query} /*${commentString}*/`;
}

exports.addSqlCommenterComment = addSqlCommenterComment;
//# sourceMappingURL=sql-common.js.map
