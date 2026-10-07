declare const pTry: {
	/**
	Start a promise chain.

	@param fn - The function to run to start the promise chain.
	@param arguments - Arguments to pass to `fn`.
	@returns The value of calling `fn(...arguments)`. If the function throws an error, the returned `Promise` will be rejected with that error.

	@example
	```
	import pTry = require('p-try');

	(async () => {
		try {
			const value = await pTry(() => {
				return synchronousFunctionThatMightThrow();
			});
			console.log(value);
		} catch (error) {
			console.error(error);
		}
	})();
	```
	*/
	<ValueType, ArgumentsType extends unknown[]>(
		fn: (...arguments: ArgumentsType) => PromiseLike<ValueType> | ValueType,
		...arguments: ArgumentsType
	): Promise<ValueType>;

	// TODO: remove this in the next major version, refactor the whole definition to:
	// declare function pTry<ValueType, ArgumentsType extends unknown[]>(
	//	fn: (...arguments: ArgumentsType) => PromiseLike<ValueType> | ValueType,
	//	...arguments: ArgumentsType
	// ): Promise<ValueType>;
	// export = pTry;
	default: typeof pTry;
};

export = pTry;
