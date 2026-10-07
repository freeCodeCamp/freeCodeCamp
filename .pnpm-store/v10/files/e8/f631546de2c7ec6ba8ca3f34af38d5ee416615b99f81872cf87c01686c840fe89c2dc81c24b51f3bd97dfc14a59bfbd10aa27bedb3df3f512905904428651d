import { SpanStatusCode } from '@opentelemetry/api';
import { spanRequestSymbol } from './constants.js';

function startSpan(reply, tracer, spanName, spanAttributes = {}) {
  const span = tracer.startSpan(spanName, { attributes: spanAttributes });
  const spans = reply[spanRequestSymbol] || [];
  spans.push(span);
  Object.defineProperty(reply, spanRequestSymbol, {
    enumerable: false,
    configurable: true,
    value: spans
  });
  return span;
}
function endSpan(reply, err) {
  const spans = reply[spanRequestSymbol] || [];
  if (!spans.length) {
    return;
  }
  spans.forEach((span) => {
    if (err) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: err.message
      });
      span.recordException(err);
    }
    span.end();
  });
  delete reply[spanRequestSymbol];
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

export { endSpan, safeExecuteInTheMiddleMaybePromise, startSpan };
//# sourceMappingURL=utils.js.map
