import type {If} from '../if.d.ts';
import type {IsNever} from '../is-never.d.ts';
import type {OptionalKeysOf} from '../optional-keys-of.d.ts';
import type {UnknownArray} from '../unknown-array.d.ts';
import type {IsExactOptionalPropertyTypesEnabled, IfNotAnyOrNever} from './type.d.ts';

/**
Matches any unknown array or tuple.
*/
export type UnknownArrayOrTuple = readonly [...unknown[]];
// TODO: should unknown-array be updated?

/**
Extracts the type of the first element of an array or tuple.
*/
export type FirstArrayElement<TArray extends UnknownArrayOrTuple> = TArray extends readonly [infer THead, ...unknown[]]
	? THead
	: never;

/**
Returns the static, fixed-length portion of the given array, excluding variable-length parts.

@example
```
type A = [string, number, boolean, ...string[]];
type B = StaticPartOfArray<A>;
//=> [string, number, boolean]
```
*/
export type StaticPartOfArray<T extends UnknownArray, Result extends UnknownArray = []> =
	T extends unknown
		? number extends T['length']
			? T extends readonly [infer U, ...infer V]
				? StaticPartOfArray<V, [...Result, U]>
				: Result
			: T
		: never; // Should never happen

/**
Returns the variable, non-fixed-length portion of the given array, excluding static-length parts.

@example
```
type A = [string, number, boolean, ...string[]];
type B = VariablePartOfArray<A>;
//=> string[]
```
*/
export type VariablePartOfArray<T extends UnknownArray> =
	T extends unknown
		? T extends readonly [...StaticPartOfArray<T>, ...infer U]
			? U
			: []
		: never; // Should never happen

/**
Set the given array to readonly if `IsReadonly` is `true`, otherwise set the given array to normal, then return the result.

@example
```
type ReadonlyStringArray = readonly string[];
type NormalStringArray = string[];

type ReadonlyResult = SetArrayAccess<NormalStringArray, true>;
//=> readonly string[]

type NormalResult = SetArrayAccess<ReadonlyStringArray, false>;
//=> string[]
```
*/
export type SetArrayAccess<T extends UnknownArray, IsReadonly extends boolean> =
	T extends readonly [...infer U]
		? IsReadonly extends true
			? readonly [...U]
			: [...U]
		: T;

/**
Returns whether the given array `T` is readonly.
*/
export type IsArrayReadonly<T extends UnknownArray> = If<IsNever<T>, false, T extends unknown[] ? false : true>;

/**
Transforms a tuple type by replacing it's rest element with a single element that has the same type as the rest element, while keeping all the non-rest elements intact.

@example
```
type A = CollapseRestElement<[string, string, ...number[]]>;
//=> [string, string, number]

type B = CollapseRestElement<[...string[], number, number]>;
//=> [string, number, number]

type C = CollapseRestElement<[string, string, ...Array<number | bigint>]>;
//=> [string, string, number | bigint]

type D = CollapseRestElement<[string, number]>;
//=> [string, number]
```

Note: Optional modifiers (`?`) are removed from elements unless the `exactOptionalPropertyTypes` compiler option is disabled. When disabled, there's an additional `| undefined` for optional elements.

@example
```
// `exactOptionalPropertyTypes` enabled
type A = CollapseRestElement<[string?, string?, ...number[]]>;
//=> [string, string, number]

// `exactOptionalPropertyTypes` disabled
type B = CollapseRestElement<[string?, string?, ...number[]]>;
//=> [string | undefined, string | undefined, number]
```
*/
export type CollapseRestElement<TArray extends UnknownArray> = IfNotAnyOrNever<TArray, _CollapseRestElement<TArray>>;

type _CollapseRestElement<
	TArray extends UnknownArray,
	ForwardAccumulator extends UnknownArray = [],
	BackwardAccumulator extends UnknownArray = [],
> =
	TArray extends UnknownArray // For distributing `TArray`
		? keyof TArray & `${number}` extends never
			// Enters this branch, if `TArray` is empty (e.g., []),
			// or `TArray` contains no non-rest elements preceding the rest element (e.g., `[...string[]]` or `[...string[], string]`).
			? TArray extends readonly [...infer Rest, infer Last]
				? _CollapseRestElement<Rest, ForwardAccumulator, [Last, ...BackwardAccumulator]> // Accumulate elements that are present after the rest element.
				: TArray extends readonly []
					? [...ForwardAccumulator, ...BackwardAccumulator]
					: [...ForwardAccumulator, TArray[number], ...BackwardAccumulator] // Add the rest element between the accumulated elements.
			: TArray extends readonly [(infer First)?, ...infer Rest]
				? _CollapseRestElement<
					Rest,
					[
						...ForwardAccumulator,
						'0' extends OptionalKeysOf<TArray>
							? If<IsExactOptionalPropertyTypesEnabled, First, First | undefined> // Add `| undefined` for optional elements, if `exactOptionalPropertyTypes` is disabled.
							: First,
					],
					BackwardAccumulator
				>
				: never // Should never happen, since `[(infer First)?, ...infer Rest]` is a top-type for arrays.
		: never; // Should never happen

export {};
