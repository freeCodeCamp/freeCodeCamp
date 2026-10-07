import { SpanStatusCode, diag } from '@opentelemetry/api';
import { SemconvStability, safeExecuteInTheMiddle } from '@opentelemetry/instrumentation';
import { ATTR_DB_MONGODB_COLLECTION, ATTR_DB_NAME, ATTR_DB_USER, ATTR_NET_PEER_NAME, ATTR_NET_PEER_PORT } from './semconv.js';
import { ATTR_DB_COLLECTION_NAME, ATTR_DB_NAMESPACE, ATTR_SERVER_ADDRESS, ATTR_SERVER_PORT } from '@opentelemetry/semantic-conventions';

function getAttributesFromCollection(collection, dbSemconvStability, netSemconvStability) {
  const attrs = {};
  if (dbSemconvStability & SemconvStability.OLD) {
    attrs[ATTR_DB_MONGODB_COLLECTION] = collection.name;
    attrs[ATTR_DB_NAME] = collection.conn.name;
    attrs[ATTR_DB_USER] = collection.conn.user;
  }
  if (dbSemconvStability & SemconvStability.STABLE) {
    attrs[ATTR_DB_COLLECTION_NAME] = collection.name;
    attrs[ATTR_DB_NAMESPACE] = collection.conn.name;
  }
  if (netSemconvStability & SemconvStability.OLD) {
    attrs[ATTR_NET_PEER_NAME] = collection.conn.host;
    attrs[ATTR_NET_PEER_PORT] = collection.conn.port;
  }
  if (netSemconvStability & SemconvStability.STABLE) {
    attrs[ATTR_SERVER_ADDRESS] = collection.conn.host;
    attrs[ATTR_SERVER_PORT] = collection.conn.port;
  }
  return attrs;
}
function setErrorStatus(span, error = {}) {
  span.recordException(error);
  span.setStatus({
    code: SpanStatusCode.ERROR,
    message: `${error.message} ${error.code ? `
Mongoose Error Code: ${error.code}` : ""}`
  });
}
function applyResponseHook(span, response, responseHook, moduleVersion = void 0) {
  if (!responseHook) {
    return;
  }
  safeExecuteInTheMiddle(
    () => responseHook(span, { moduleVersion, response }),
    (e) => {
      if (e) {
        diag.error("mongoose instrumentation: responseHook error", e);
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

export { getAttributesFromCollection, handleCallbackResponse, handlePromiseResponse };
//# sourceMappingURL=utils.js.map
