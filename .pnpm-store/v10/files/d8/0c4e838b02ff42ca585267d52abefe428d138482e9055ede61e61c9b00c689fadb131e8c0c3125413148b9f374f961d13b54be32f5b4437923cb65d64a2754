import { withScope, getTraceContextFromScope } from '../currentScopes.js';
import { getDynamicSamplingContextFromSpan, getDynamicSamplingContextFromScope } from '../tracing/dynamicSamplingContext.js';
import { getActiveSpan, spanToTraceContext } from './spanUtils.js';

function _getTraceInfoFromScope(client, scope) {
  if (!scope) {
    return [void 0, void 0];
  }
  return withScope(scope, () => {
    const span = getActiveSpan();
    const traceContext = span ? spanToTraceContext(span) : getTraceContextFromScope(scope);
    const dynamicSamplingContext = span ? getDynamicSamplingContextFromSpan(span) : getDynamicSamplingContextFromScope(client, scope);
    return [dynamicSamplingContext, traceContext];
  });
}

export { _getTraceInfoFromScope };
//# sourceMappingURL=trace-info.js.map
