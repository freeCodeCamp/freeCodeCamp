Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const index = require('./asyncContext/index.js');
const carrier = require('./carrier.js');
const scope = require('./scope.js');
const propagationContext = require('./utils/propagationContext.js');

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
  const carrier$1 = carrier.getMainCarrier();
  const acs = index.getAsyncContextStrategy(carrier$1);
  return acs.getCurrentScope();
}
function getIsolationScope() {
  const carrier$1 = carrier.getMainCarrier();
  const acs = index.getAsyncContextStrategy(carrier$1);
  return acs.getIsolationScope();
}
function getGlobalScope() {
  return carrier.getGlobalSingleton("globalScope", () => new scope.Scope());
}
function withScope(...rest) {
  const carrier$1 = carrier.getMainCarrier();
  const acs = index.getAsyncContextStrategy(carrier$1);
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
  const carrier$1 = carrier.getMainCarrier();
  const acs = index.getAsyncContextStrategy(carrier$1);
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
  const propagationContext$1 = scope.getPropagationContext();
  const { traceId, parentSpanId, propagationSpanId } = propagationContext$1;
  const traceContext = {
    trace_id: traceId,
    span_id: propagationSpanId || propagationContext.generateSpanId()
  };
  if (parentSpanId) {
    traceContext.parent_span_id = parentSpanId;
  }
  return traceContext;
}

exports.getClient = getClient;
exports.getCurrentScope = getCurrentScope;
exports.getExternalPropagationContext = getExternalPropagationContext;
exports.getGlobalScope = getGlobalScope;
exports.getIsolationScope = getIsolationScope;
exports.getTraceContextFromScope = getTraceContextFromScope;
exports.hasExternalPropagationContext = hasExternalPropagationContext;
exports.registerExternalPropagationContext = registerExternalPropagationContext;
exports.withIsolationScope = withIsolationScope;
exports.withScope = withScope;
//# sourceMappingURL=currentScopes.js.map
