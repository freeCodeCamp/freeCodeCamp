import { getTraceData } from './traceData.js';

function getTraceMetaTags(traceData) {
  return Object.entries(traceData || getTraceData()).map(([key, value]) => `<meta name="${key}" content="${value}"/>`).join("\n");
}

export { getTraceMetaTags };
//# sourceMappingURL=meta.js.map
