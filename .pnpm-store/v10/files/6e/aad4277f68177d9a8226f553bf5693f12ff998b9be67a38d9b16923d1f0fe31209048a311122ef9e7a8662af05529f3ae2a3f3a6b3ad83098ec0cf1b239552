import { options } from 'preact';

/**
 * Setup a rerender function that will drain the queue of pending renders
 * @returns {() => void}
 */
export function setupRerender() {
	options.__test__previousDebounce = options.debounceRendering;
	options.debounceRendering = cb => (options.__test__drainQueue = cb);
	return () => options.__test__drainQueue && options.__test__drainQueue();
}

const isThenable = value => value != null && typeof value.then == 'function';

/** Depth of nested calls to `act`. */
let actDepth = 0;

/**
 * Run a test function, and flush all effects and rerenders after invoking it.
 *
 * Returns a Promise which resolves "immediately" if the callback is
 * synchronous or when the callback's result resolves if it is asynchronous.
 *
 * @param {() => void|Promise<void>} cb The function under test. This may be sync or async.
 * @return {Promise<void>}
 */
export function act(cb) {
	if (++actDepth > 1) {
		// If calls to `act` are nested, a flush happens only when the
		// outermost call returns. In the inner call, we just execute the
		// callback and return since the infrastructure for flushing has already
		// been set up.
		//
		// If an exception occurs, the outermost `act` will handle cleanup.
		try {
			const result = cb();
			if (isThenable(result)) {
				return result.then(
					() => {
						--actDepth;
					},
					e => {
						--actDepth;
						throw e;
					}
				);
			}
		} catch (e) {
			--actDepth;
			throw e;
		}
		--actDepth;
		return Promise.resolve();
	}

	const previousRequestAnimationFrame = options.requestAnimationFrame;
	const rerender = setupRerender();

	/** @type {() => void} */
	let flush, toFlush;

	// Override requestAnimationFrame so we can flush pending hooks.
	options.requestAnimationFrame = fc => (flush = fc);

	const finish = () => {
		try {
			rerender();
			while (flush) {
				toFlush = flush;
				flush = null;

				toFlush();
				rerender();
			}
		} catch (e) {
			if (!err) {
				err = e;
			}
		} finally {
			teardown();
		}

		options.requestAnimationFrame = previousRequestAnimationFrame;
		--actDepth;
	};

	let err;
	let result;

	try {
		result = cb();
	} catch (e) {
		err = e;
	}

	if (isThenable(result)) {
		return result.then(finish, err => {
			finish();
			throw err;
		});
	}

	// nb. If the callback is synchronous, effects must be flushed before
	// `act` returns, so that the caller does not have to await the result,
	// even though React recommends this.
	finish();
	if (err) {
		throw err;
	}
	return Promise.resolve();
}

/**
 * Teardown test environment and reset preact's internal state
 */
export function teardown() {
	if (options.__test__drainQueue) {
		// Flush any pending updates leftover by test
		options.__test__drainQueue();
		delete options.__test__drainQueue;
	}

	if (typeof options.__test__previousDebounce != 'undefined') {
		options.debounceRendering = options.__test__previousDebounce;
		delete options.__test__previousDebounce;
	} else {
		options.debounceRendering = undefined;
	}
}
