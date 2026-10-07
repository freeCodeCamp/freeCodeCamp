import type {If} from './if.d.ts';
import type {ApplyDefaultOptions} from './internal/index.d.ts';
import type {IsAny} from './is-any.d.ts';
import type {IsNever} from './is-never.d.ts';
import type {UnknownArray} from './unknown-array.d.ts';

/**
@see {@link IsTuple}
*/
export type IsTupleOptions = {
	/**
	Consider only fixed length arrays as tuples.

	- When set to `true` (default), arrays with rest elements (e.g., `[1, ...number[]]`) are _not_ considered as tuples.
	- When set to `false`, arrays with at least one non-rest element (e.g., `[1, ...number[]]`) are considered as tuples.

	@default true

	@example
	```ts
	import type {IsTuple} from 'type-fest';

	type Example1 = IsTuple<[number, ...number[]], {fixedLengthOnly: true}>;
	//=> false

	type Example2 = IsTuple<[number, ...number[]], {fixedLengthOnly: false}>;
	//=> true
	```
	*/
	fixedLengthOnly?: boolean;
};

type DefaultIsTupleOptions = {
	fixedLengthOnly: true;
};

/**
Returns a boolean for whether the given array is a tuple.

Use-case:
- If you want to make a conditional branch based on the result of whether an array is a tuple or not.

Note: `IsTuple` returns `boolean` when instantiated with a union of tuple and non-tuple (e.g., `IsTuple<[1, 2] | number[]>`).

@example
```ts
import type {IsTuple} from 'type-fest';

type Tuple = IsTuple<[1, 2, 3]>;
//=> true

type NotTuple = IsTuple<number[]>;
//=> false

type TupleWithOptionalItems = IsTuple<[1?, 2?]>;
//=> true

type RestItemsNotAllowed = IsTuple<[1, 2, ...number[]]>;
//=> false

type RestItemsAllowed = IsTuple<[1, 2, ...number[]], {fixedLengthOnly: false}>;
//=> true
```

@see {@link IsTupleOptions}

@category Type Guard
@category Utilities
*/
export type IsTuple<
	TArray extends UnknownArray,
	Options extends IsTupleOptions = {},
> =
	_IsTuple<TArray, ApplyDefaultOptions<IsTupleOptions, DefaultIsTupleOptions, Options>>;

type _IsTuple<
	TArray extends UnknownArray,
	Options extends Required<IsTupleOptions>,
> =
	If<IsAny<TArray>, boolean, If<IsNever<TArray>, false,
		TArray extends unknown // For distributing `TArray`
			? number extends TArray['length']
				? Options['fixedLengthOnly'] extends false
					? If<IsNever<keyof TArray & `${number}`>,
						TArray extends readonly [...any, any] ? true : false, // To handle cases where a non-rest element follows a rest element, e.g., `[...number[], number]`
						true>
					: false
				: true
			: false
	>>;

export {};
