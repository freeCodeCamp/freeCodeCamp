Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const currentScopes = require('../currentScopes.js');
const dynamicSamplingContext = require('../tracing/dynamicSamplingContext.js');
const spanUtils = require('./spanUtils.js');

function _getTraceInfoFromScope(client, scope) {
  if (!scope) {
    return [void 0, void 0];
  }
  return currentScopes.withScope(scope, () => {
    const span = spanUtils.getActiveSpan();
    const traceContext = span ? spanUtils.spanToTraceContext(span) : currentScopes.getTraceContextFromScope(scope);
    const dynamicSamplingContext$1 = span ? dynamicSamplingContext.getDynamicSamplingContextFromSpan(span) : dynamicSamplingContext.getDynamicSamplingContextFromScope(client, scope);
    return [dynamicSamplingContext$1, traceContext];
  });
}

exports._getTraceInfoFromScope = _getTraceInfoFromScope;
//# sourceMappingURL=trace-info.js.map
