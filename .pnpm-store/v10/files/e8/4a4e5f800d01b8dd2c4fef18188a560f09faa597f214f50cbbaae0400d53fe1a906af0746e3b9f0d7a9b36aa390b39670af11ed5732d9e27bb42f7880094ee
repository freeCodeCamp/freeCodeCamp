declare namespace onetime {
	interface Options {
		/**
		Throw an error when called more than once.

		@default false
		*/
		throw?: boolean;
	}
}

declare const onetime: {
	/**
	Ensure a function is only called once. When called multiple times it will return the return value from the first call.

	@param fn - Function that should only be called once.
	@returns A function that only calls `fn` once.

	@example
	```
	import onetime = require('onetime');

	let i = 0;

	const foo = onetime(() => ++i);

	foo(); //=> 1
	foo(); //=> 1
	foo(); //=> 1

	onetime.callCount(foo); //=> 3
	```
	*/
	<ArgumentsType extends unknown[], ReturnType>(
		fn: (...arguments: ArgumentsType) => ReturnType,
		options?: onetime.Options
	): (...arguments: ArgumentsType) => ReturnType;

	/**
	Get the number of times `fn` has been called.

	@param fn - Function to get call count from.
	@returns A number representing how many times `fn` has been called.

	@example
	```
	import onetime = require('onetime');

	const foo = onetime(() => {});
	foo();
	foo();
	foo();

	console.log(onetime.callCount(foo));
	//=> 3
	```
	*/
	callCount(fn: (...arguments: any[]) => unknown): number;

	// TODO: Remove this for the next major release
	default: typeof onetime;
};

export = onetime;
