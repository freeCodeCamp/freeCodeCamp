import { getAsyncContextStrategy } from './asyncContext/index.js';
import { getMainCarrier, getGlobalSingleton } from './carrier.js';
import { Scope } from './scope.js';
import { generateSpanId } from './utils/propagationContext.js';

let _externalPropagationContextProvider;
function registerExternalPropagationContext(fn) {
  _externalPropagationContextProvider = fn;
}
function getExternalPropagationContext() {
  return _externalPropagationContextProvider?.();
}
function hasExternalPropagationContext() {
  return _externalPropagationContextProvider !== void 0;
}
function getCurrentScope() {
  const carrier = getMainCarrier();
  const acs = getAsyncContextStrategy(carrier);
  return acs.getCurrentScope();
}
function getIsolationScope() {
  const carrier = getMainCarrier();
  const acs = getAsyncContextStrategy(carrier);
  return acs.getIsolationScope();
}
function getGlobalScope() {
  return getGlobalSingleton("globalScope", () => new Scope());
}
function withScope(...rest) {
  const carrier = getMainCarrier();
  const acs = getAsyncContextStrategy(carrier);
  if (rest.length === 2) {
    const [scope, callback] = rest;
    if (!scope) {
      return acs.withScope(callback);
    }
    return acs.withSetScope(scope, callback);
  }
  return acs.withScope(rest[0]);
}
function withIsolationScope(...rest) {
  const carrier = getMainCarrier();
  const acs = getAsyncContextStrategy(carrier);
  if (rest.length === 2) {
    const [isolationScope, callback] = rest;
    if (!isolationScope) {
      return acs.withIsolationScope(callback);
    }
    return acs.withSetIsolationScope(isolationScope, callback);
  }
  return acs.withIsolationScope(rest[0]);
}
function getClient() {
  return getCurrentScope().getClient();
}
function getTraceContextFromScope(scope) {
  const externalContext = getExternalPropagationContext();
  if (externalContext) {
    return { trace_id: externalContext.traceId, span_id: externalContext.spanId };
  }
  const propagationContext = scope.getPropagationContext();
  const { traceId, parentSpanId, propagationSpanId } = propagationContext;
  const traceContext = {
    trace_id: traceId,
    span_id: propagationSpanId || generateSpanId()
  };
  if (parentSpanId) {
    traceContext.parent_span_id = parentSpanId;
  }
  return traceContext;
}

export { getClient, getCurrentScope, getExternalPropagationContext, getGlobalScope, getIsolationScope, getTraceContextFromScope, hasExternalPropagationContext, registerExternalPropagationContext, withIsolationScope, withScope };
//# sourceMappingURL=currentScopes.js.map
