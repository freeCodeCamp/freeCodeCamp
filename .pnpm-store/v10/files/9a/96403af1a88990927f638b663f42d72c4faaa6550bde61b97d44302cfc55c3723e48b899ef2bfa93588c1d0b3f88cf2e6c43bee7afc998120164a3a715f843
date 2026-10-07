const SAFE_TIMERS_SYMBOL = Symbol("vitest:SAFE_TIMERS");
function getSafeTimers() {
	const { setTimeout: safeSetTimeout, setInterval: safeSetInterval, clearInterval: safeClearInterval, clearTimeout: safeClearTimeout, setImmediate: safeSetImmediate, clearImmediate: safeClearImmediate, queueMicrotask: safeQueueMicrotask } = globalThis[SAFE_TIMERS_SYMBOL] || globalThis;
	const { nextTick: safeNextTick } = globalThis[SAFE_TIMERS_SYMBOL] || globalThis.process || {};
	return {
		nextTick: safeNextTick,
		setTimeout: safeSetTimeout,
		setInterval: safeSetInterval,
		clearInterval: safeClearInterval,
		clearTimeout: safeClearTimeout,
		setImmediate: safeSetImmediate,
		clearImmediate: safeClearImmediate,
		queueMicrotask: safeQueueMicrotask
	};
}
function setSafeTimers() {
	const { setTimeout: safeSetTimeout, setInterval: safeSetInterval, clearInterval: safeClearInterval, clearTimeout: safeClearTimeout, setImmediate: safeSetImmediate, clearImmediate: safeClearImmediate, queueMicrotask: safeQueueMicrotask } = globalThis;
	const { nextTick: safeNextTick } = globalThis.process || {};
	const timers = {
		nextTick: safeNextTick,
		setTimeout: safeSetTimeout,
		setInterval: safeSetInterval,
		clearInterval: safeClearInterval,
		clearTimeout: safeClearTimeout,
		setImmediate: safeSetImmediate,
		clearImmediate: safeClearImmediate,
		queueMicrotask: safeQueueMicrotask
	};
	globalThis[SAFE_TIMERS_SYMBOL] = timers;
}
/**
* Returns a promise that resolves after the specified duration.
*
* @param timeout - Delay in milliseconds
* @param scheduler - Timer function to use, defaults to `setTimeout`. Useful for mocked timers.
*
* @example
* await delay(100)
*
* @example
* // With mocked timers
* const { setTimeout } = getSafeTimers()
* await delay(100, setTimeout)
*/
function delay(timeout, scheduler = setTimeout) {
	return new Promise((resolve) => scheduler(resolve, timeout));
}

export { delay, getSafeTimers, setSafeTimers };
