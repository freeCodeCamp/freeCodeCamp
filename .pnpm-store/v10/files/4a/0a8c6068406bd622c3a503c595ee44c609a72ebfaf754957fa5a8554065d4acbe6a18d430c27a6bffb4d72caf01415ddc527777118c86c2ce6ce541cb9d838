import { isPromise } from './is-promise.js';
export function maybeAsyncResult(getResult, resultHandler, errorHandler = (err) => {
    throw err;
}) {
    try {
        const result = isFunction(getResult) ? getResult() : getResult;
        return isPromise(result)
            ? result.then((result) => resultHandler(result))
            : resultHandler(result);
    }
    catch (err) {
        return errorHandler(err);
    }
}
function isFunction(arg) {
    return typeof arg === 'function';
}
