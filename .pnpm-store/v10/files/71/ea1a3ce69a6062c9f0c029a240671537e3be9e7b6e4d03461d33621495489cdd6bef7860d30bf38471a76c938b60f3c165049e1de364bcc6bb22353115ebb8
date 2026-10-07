Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const chainAndCopyPromiselike = require('./chain-and-copy-promiselike.js');
const is = require('./is.js');

function handleCallbackErrors(fn, onError, onFinally = () => {
}, onSuccess = () => {
}) {
  let maybePromiseResult;
  try {
    maybePromiseResult = fn();
  } catch (e) {
    onError(e);
    onFinally();
    throw e;
  }
  return maybeHandlePromiseRejection(maybePromiseResult, onError, onFinally, onSuccess);
}
function maybeHandlePromiseRejection(value, onError, onFinally, onSuccess) {
  if (is.isThenable(value)) {
    return chainAndCopyPromiselike.chainAndCopyPromiseLike(
      value,
      (result) => {
        onFinally();
        onSuccess(result);
      },
      (err) => {
        onError(err);
        onFinally();
      }
    );
  }
  onFinally();
  onSuccess(value);
  return value;
}

exports.handleCallbackErrors = handleCallbackErrors;
//# sourceMappingURL=handleCallbackErrors.js.map
