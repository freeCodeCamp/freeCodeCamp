Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const api = require('@opentelemetry/api');
const instrumentation = require('@opentelemetry/instrumentation');
const semconv = require('./semconv.js');
const semanticConventions = require('@opentelemetry/semantic-conventions');

function getAttributesFromCollection(collection, dbSemconvStability, netSemconvStability) {
  const attrs = {};
  if (dbSemconvStability & instrumentation.SemconvStability.OLD) {
    attrs[semconv.ATTR_DB_MONGODB_COLLECTION] = collection.name;
    attrs[semconv.ATTR_DB_NAME] = collection.conn.name;
    attrs[semconv.ATTR_DB_USER] = collection.conn.user;
  }
  if (dbSemconvStability & instrumentation.SemconvStability.STABLE) {
    attrs[semanticConventions.ATTR_DB_COLLECTION_NAME] = collection.name;
    attrs[semanticConventions.ATTR_DB_NAMESPACE] = collection.conn.name;
  }
  if (netSemconvStability & instrumentation.SemconvStability.OLD) {
    attrs[semconv.ATTR_NET_PEER_NAME] = collection.conn.host;
    attrs[semconv.ATTR_NET_PEER_PORT] = collection.conn.port;
  }
  if (netSemconvStability & instrumentation.SemconvStability.STABLE) {
    attrs[semanticConventions.ATTR_SERVER_ADDRESS] = collection.conn.host;
    attrs[semanticConventions.ATTR_SERVER_PORT] = collection.conn.port;
  }
  return attrs;
}
function setErrorStatus(span, error = {}) {
  span.recordException(error);
  span.setStatus({
    code: api.SpanStatusCode.ERROR,
    message: `${error.message} ${error.code ? `
Mongoose Error Code: ${error.code}` : ""}`
  });
}
function applyResponseHook(span, response, responseHook, moduleVersion = void 0) {
  if (!responseHook) {
    return;
  }
  instrumentation.safeExecuteInTheMiddle(
    () => responseHook(span, { moduleVersion, response }),
    (e) => {
      if (e) {
        api.diag.error("mongoose instrumentation: responseHook error", e);
      }
    },
    true
  );
}
function handlePromiseResponse(execResponse, span, responseHook, moduleVersion = void 0) {
  if (!(execResponse instanceof Promise)) {
    applyResponseHook(span, execResponse, responseHook, moduleVersion);
    span.end();
    return execResponse;
  }
  return execResponse.then((response) => {
    applyResponseHook(span, response, responseHook, moduleVersion);
    return response;
  }).catch((err) => {
    setErrorStatus(span, err);
    throw err;
  }).finally(() => span.end());
}
function handleCallbackResponse(callback, exec, originalThis, span, args, responseHook, moduleVersion = void 0) {
  let callbackArgumentIndex = 0;
  if (args.length === 2) {
    callbackArgumentIndex = 1;
  } else if (args.length === 3) {
    callbackArgumentIndex = 2;
  }
  args[callbackArgumentIndex] = (err, response) => {
    if (err) {
      setErrorStatus(span, err);
    } else {
      applyResponseHook(span, response, responseHook, moduleVersion);
    }
    span.end();
    return callback(err, response);
  };
  return exec.apply(originalThis, args);
}

exports.getAttributesFromCollection = getAttributesFromCollection;
exports.handleCallbackResponse = handleCallbackResponse;
exports.handlePromiseResponse = handlePromiseResponse;
//# sourceMappingURL=utils.js.map
