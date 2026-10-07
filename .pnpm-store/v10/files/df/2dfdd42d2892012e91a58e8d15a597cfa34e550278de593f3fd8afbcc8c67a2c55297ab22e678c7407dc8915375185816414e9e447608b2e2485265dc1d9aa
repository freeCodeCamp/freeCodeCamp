import type {If} from './if.d.ts';
import type {ApplyDefaultOptions, BuiltIns, LiteralKeyOf} from './internal/index.d.ts';
import type {IsUnknown} from './is-unknown.d.ts';
import type {Merge} from './merge.d.ts';

/**
@see {@link PartialOnUndefinedDeep}
*/
export type PartialOnUndefinedDeepOptions = {
	/**
	Whether to affect the individual elements of arrays and tuples.

	@default false
	*/
	readonly recurseIntoArrays?: boolean;
};

type DefaultPartialOnUndefinedDeepOptions = {
	recurseIntoArrays: false;
};

/**
Create a deep version of another type where all keys accepting `undefined` type are set to optional.

This utility type is recursive, transforming at any level deep. By default, it does not affect arrays and tuples items unless you explicitly pass `{recurseIntoArrays: true}` as the second type argument.

Use-cases:
- Make all properties of a type that can be undefined optional to not have to specify keys with undefined value.

@example
```
import type {PartialOnUndefinedDeep} from 'type-fest';

type Settings = {
	optionA: string;
	optionB: number | undefined;
	subOption: {
		subOptionA: boolean;
		subOptionB: boolean | undefined;
	};
};

const testSettings: PartialOnUndefinedDeep<Settings> = {
	optionA: 'foo',
	// 👉 optionB is now optional and can be omitted
	subOption: {
		subOptionA: true,
		// 👉 subOptionB is now optional as well and can be omitted
	},
};
```

@category Object
*/
export type PartialOnUndefinedDeep<T, Options extends PartialOnUndefinedDeepOptions = {}> =
	_PartialOnUndefinedDeep<T, ApplyDefaultOptions<PartialOnUndefinedDeepOptions, DefaultPartialOnUndefinedDeepOptions, Options>>;

type _PartialOnUndefinedDeep<T, Options extends Required<PartialOnUndefinedDeepOptions>> = T extends Record<any, any> | undefined
	? {[KeyType in keyof T as undefined extends T[KeyType] ? If<IsUnknown<T[KeyType]>, never, KeyType> : never]?: PartialOnUndefinedDeepValue<T[KeyType], Options>} extends infer U // Make a partial type with all value types accepting undefined (and set them optional)
		? Merge<{[KeyType in keyof T as KeyType extends LiteralKeyOf<U> ? never : KeyType]: PartialOnUndefinedDeepValue<T[KeyType], Options>}, U> // Join all remaining keys not treated in U
		: never // Should not happen
	: T;

/**
Utility type to get the value type by key and recursively call `PartialOnUndefinedDeep` to transform sub-objects.
*/
type PartialOnUndefinedDeepValue<T, Options extends Required<PartialOnUndefinedDeepOptions>> = T extends BuiltIns | ((...arguments_: any[]) => unknown)
	? T
	: T extends ReadonlyArray<infer U> // Test if type is array or tuple
		? Options['recurseIntoArrays'] extends true // Check if option is activated
			? U[] extends T // Check if array not tuple
				? readonly U[] extends T
					? ReadonlyArray<_PartialOnUndefinedDeep<U, Options>> // Readonly array treatment
					: Array<_PartialOnUndefinedDeep<U, Options>> // Mutable array treatment
				: _PartialOnUndefinedDeep<{[Key in keyof T]: _PartialOnUndefinedDeep<T[Key], Options>}, Options> // Tuple treatment
			: T
		: T extends Record<any, any> | undefined
			? _PartialOnUndefinedDeep<T, Options>
			: unknown;

export {};
