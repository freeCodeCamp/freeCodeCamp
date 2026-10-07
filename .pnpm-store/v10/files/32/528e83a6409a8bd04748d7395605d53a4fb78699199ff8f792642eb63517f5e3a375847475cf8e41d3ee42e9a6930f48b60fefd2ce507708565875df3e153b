export interface Options {
	/**
	Skip modifying [non-configurable properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor#Description) instead of throwing an error.

	@default false
	*/
	readonly ignoreNonConfigurable?: boolean;
}

/**
Modifies the `to` function to mimic the `from` function. Returns the `to` function.

`name`, `displayName`, and any other properties of `from` are copied. The `length` property is not copied. Prototype, class, and inherited properties are copied.

`to.toString()` will return the same as `from.toString()` but prepended with a `Wrapped with to()` comment.

@param to - Mimicking function.
@param from - Function to mimic.
@returns The modified `to` function.

@example
```
import mimicFunction from 'mimic-fn';

function foo() {}
foo.unicorn = '🦄';

function wrapper() {
	return foo();
}

console.log(wrapper.name);
//=> 'wrapper'

mimicFunction(wrapper, foo);

console.log(wrapper.name);
//=> 'foo'

console.log(wrapper.unicorn);
//=> '🦄'
```
*/
export default function mimicFunction<
	ArgumentsType extends unknown[],
	ReturnType,
	FunctionType extends (...arguments: ArgumentsType) => ReturnType
>(
	to: (...arguments: ArgumentsType) => ReturnType,
	from: FunctionType,
	options?: Options,
): FunctionType;
