import type {GreaterThan} from '../greater-than.d.ts';
import type {LessThan} from '../less-than.d.ts';
import type {NegativeInfinity, PositiveInfinity} from '../numeric.d.ts';
import type {UnknownArray} from '../unknown-array.d.ts';

/**
Infer the length of the given tuple `<T>`.

Returns `never` if the given type is an non-fixed-length array like `Array<string>`.

@example
```
type Tuple = TupleLength<[string, number, boolean]>;
//=> 3

type Array = TupleLength<string[]>;
//=> never

// Supports union types.
type Union = TupleLength<[] | [1, 2, 3] | number[]>;
//=> 1 | 3
```
*/
export type TupleLength<T extends UnknownArray> =
	// `extends unknown` is used to convert `T` (if `T` is a union type) to
	// a [distributive conditional type](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#distributive-conditional-types))
	T extends unknown
		? number extends T['length']
			? never // Return never if the given type is an non-flexed-length array like `Array<string>`
			: T['length']
		: never; // Should never happen

/**
Returns the maximum value from a tuple of integers.

Note:
- Float numbers are not supported.

@example
```
type A = TupleMax<[1, 2, 5, 3]>;
//=> 5

type B = TupleMax<[1, 2, 5, 3, 99, -1]>;
//=> 99
```
*/
export type TupleMax<A extends number[], Result extends number = NegativeInfinity> = number extends A[number]
	? never
	: A extends [infer F extends number, ...infer R extends number[]]
		? GreaterThan<F, Result> extends true
			? TupleMax<R, F>
			: TupleMax<R, Result>
		: Result;

/**
Returns the minimum value from a tuple of integers.

Note:
- Float numbers are not supported.

@example
```
type A = TupleMin<[1, 2, 5, 3]>;
//=> 1

type B = TupleMin<[1, 2, 5, 3, -5]>;
//=> -5
```
*/
export type TupleMin<A extends number[], Result extends number = PositiveInfinity> = number extends A[number]
	? never
	: A extends [infer F extends number, ...infer R extends number[]]
		? LessThan<F, Result> extends true
			? TupleMin<R, F>
			: TupleMin<R, Result>
		: Result;

export {};
