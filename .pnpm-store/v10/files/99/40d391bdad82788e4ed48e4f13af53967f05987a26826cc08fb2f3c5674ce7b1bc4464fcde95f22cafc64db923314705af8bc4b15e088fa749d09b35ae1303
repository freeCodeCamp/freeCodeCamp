Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const api = require('@opentelemetry/api');
const constants = require('./constants.js');

function startSpan(reply, tracer, spanName, spanAttributes = {}) {
  const span = tracer.startSpan(spanName, { attributes: spanAttributes });
  const spans = reply[constants.spanRequestSymbol] || [];
  spans.push(span);
  Object.defineProperty(reply, constants.spanRequestSymbol, {
    enumerable: false,
    configurable: true,
    value: spans
  });
  return span;
}
function endSpan(reply, err) {
  const spans = reply[constants.spanRequestSymbol] || [];
  if (!spans.length) {
    return;
  }
  spans.forEach((span) => {
    if (err) {
      span.setStatus({
        code: api.SpanStatusCode.ERROR,
        message: err.message
      });
      span.recordException(err);
    }
    span.end();
  });
  delete reply[constants.spanRequestSymbol];
}
function safeExecuteInTheMiddleMaybePromise(execute, onFinish, preventThrowingError) {
  let error;
  let result = void 0;
  try {
    result = execute();
    if (isPromise(result)) {
      result.then(
        (res) => onFinish(void 0, res),
        (err) => onFinish(err)
      );
    }
  } catch (e) {
    error = e;
  } finally {
    if (!isPromise(result)) {
      onFinish(error, result);
      if (error && true) {
        throw error;
      }
    }
    return result;
  }
}
function isPromise(val) {
  return typeof val === "object" && val && typeof Object.getOwnPropertyDescriptor(val, "then")?.value === "function" || false;
}

exports.endSpan = endSpan;
exports.safeExecuteInTheMiddleMaybePromise = safeExecuteInTheMiddleMaybePromise;
exports.startSpan = startSpan;
//# sourceMappingURL=utils.js.map
