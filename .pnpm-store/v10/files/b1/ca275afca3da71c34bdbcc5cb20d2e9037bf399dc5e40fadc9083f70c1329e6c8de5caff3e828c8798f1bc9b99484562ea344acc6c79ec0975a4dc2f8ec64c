function debounce(func, wait, options) {
  let callbackReturnValue;
  let timerId;
  let maxTimerId;
  const maxWait = options?.maxWait ? Math.max(options.maxWait, wait) : 0;
  const setTimeoutImpl = options?.setTimeoutImpl || setTimeout;
  function invokeFunc() {
    cancelTimers();
    callbackReturnValue = func();
    return callbackReturnValue;
  }
  function cancelTimers() {
    timerId !== void 0 && clearTimeout(timerId);
    maxTimerId !== void 0 && clearTimeout(maxTimerId);
    timerId = maxTimerId = void 0;
  }
  function flush() {
    if (timerId !== void 0 || maxTimerId !== void 0) {
      return invokeFunc();
    }
    return callbackReturnValue;
  }
  function debounced() {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeoutImpl(invokeFunc, wait);
    if (maxWait && maxTimerId === void 0) {
      maxTimerId = setTimeoutImpl(invokeFunc, maxWait);
    }
    return callbackReturnValue;
  }
  debounced.cancel = cancelTimers;
  debounced.flush = flush;
  return debounced;
}

export { debounce };
//# sourceMappingURL=debounce.js.map
