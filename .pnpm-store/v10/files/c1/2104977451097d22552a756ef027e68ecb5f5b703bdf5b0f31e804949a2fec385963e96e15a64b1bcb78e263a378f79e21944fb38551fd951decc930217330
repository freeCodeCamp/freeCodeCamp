Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const traceData = require('./traceData.js');

function getTraceMetaTags(traceData$1) {
  return Object.entries(traceData$1 || traceData.getTraceData()).map(([key, value]) => `<meta name="${key}" content="${value}"/>`).join("\n");
}

exports.getTraceMetaTags = getTraceMetaTags;
//# sourceMappingURL=meta.js.map
