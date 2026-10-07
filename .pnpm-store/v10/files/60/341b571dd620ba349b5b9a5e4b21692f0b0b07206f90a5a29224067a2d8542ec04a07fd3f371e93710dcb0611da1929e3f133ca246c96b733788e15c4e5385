export type Options = {
	/**
	Throw an error when called more than once.

	@default false
	*/
	readonly throw?: boolean;
};

declare const onetime: {
	/**
	Ensure a function is only called once. When called multiple times it will return the return value from the first call.

	@param fn - The function that should only be called once.
	@returns A function that only calls `fn` once.

	@example
	```
	import onetime from 'onetime';

	let index = 0;

	const foo = onetime(() => ++index);

	foo(); //=> 1
	foo(); //=> 1
	foo(); //=> 1

	onetime.callCount(foo); //=> 3
	```
	*/
	<ArgumentsType extends unknown[], ReturnType>(
		fn: (...arguments_: ArgumentsType) => ReturnType,
		options?: Options
	): (...arguments_: ArgumentsType) => ReturnType;

	/**
	Get the number of times `fn` has been called.

	@param fn - The function to get call count from.
	@returns A number representing how many times `fn` has been called.

	@example
	```
	import onetime from 'onetime';

	const foo = onetime(() => {});
	foo();
	foo();
	foo();

	console.log(onetime.callCount(foo));
	//=> 3
	```
	*/
	callCount(fn: (...arguments_: any[]) => unknown): number;
};

export default onetime;
