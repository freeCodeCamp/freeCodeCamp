declare namespace pLimit {
	interface Limit {
		/**
		The number of promises that are currently running.
		*/
		readonly activeCount: number;

		/**
		The number of promises that are waiting to run (i.e. their internal `fn` was not called yet).
		*/
		readonly pendingCount: number;

		/**
		Discard pending promises that are waiting to run.

		This might be useful if you want to teardown the queue at the end of your program's lifecycle or discard any function calls referencing an intermediary state of your app.

		Note: This does not cancel promises that are already running.
		*/
		clearQueue: () => void;

		/**
		@param fn - Promise-returning/async function.
		@param arguments - Any arguments to pass through to `fn`. Support for passing arguments on to the `fn` is provided in order to be able to avoid creating unnecessary closures. You probably don't need this optimization unless you're pushing a lot of functions.
		@returns The promise returned by calling `fn(...arguments)`.
		*/
		<Arguments extends unknown[], ReturnType>(
			fn: (...arguments: Arguments) => PromiseLike<ReturnType> | ReturnType,
			...arguments: Arguments
		): Promise<ReturnType>;
	}
}

/**
Run multiple promise-returning & async functions with limited concurrency.

@param concurrency - Concurrency limit. Minimum: `1`.
@returns A `limit` function.
*/
declare function pLimit(concurrency: number): pLimit.Limit;

export = pLimit;
