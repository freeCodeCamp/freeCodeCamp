import { chainAndCopyPromiseLike } from './chain-and-copy-promiselike.js';
import { isThenable } from './is.js';

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
  if (isThenable(value)) {
    return chainAndCopyPromiseLike(
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

export { handleCallbackErrors };
//# sourceMappingURL=handleCallbackErrors.js.map
