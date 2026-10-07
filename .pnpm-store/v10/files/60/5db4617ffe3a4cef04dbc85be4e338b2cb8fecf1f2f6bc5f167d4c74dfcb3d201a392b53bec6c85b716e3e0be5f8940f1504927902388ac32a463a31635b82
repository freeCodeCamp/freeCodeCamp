import type {StaticPartOfArray, VariablePartOfArray} from './internal/index.d.ts';
import type {GreaterThanOrEqual} from './greater-than-or-equal.d.ts';
import type {Subtract} from './subtract.d.ts';
import type {UnknownArray} from './unknown-array.d.ts';
import type {TupleOf} from './tuple-of.d.ts';

/**
The implementation of `SplitArrayByIndex` for fixed length arrays.
*/
type SplitFixedArrayByIndex<T extends UnknownArray, SplitIndex extends number> =
	SplitIndex extends 0
		? [[], T]
		: T extends readonly [...TupleOf<SplitIndex>, ...infer V]
			? T extends readonly [...infer U, ...V]
				? [U, V]
				: [never, never]
			: [never, never];

/**
The implementation of `SplitArrayByIndex` for variable length arrays.
*/
type SplitVariableArrayByIndex<T extends UnknownArray,
	SplitIndex extends number,
	T1 = Subtract<SplitIndex, StaticPartOfArray<T>['length']>,
	T2 = T1 extends number
		? TupleOf<GreaterThanOrEqual<T1, 0> extends true ? T1 : number, VariablePartOfArray<T>[number]>
		: [],
> =
	SplitIndex extends 0
		? [[], T]
		: GreaterThanOrEqual<StaticPartOfArray<T>['length'], SplitIndex> extends true
			? [
				SplitFixedArrayByIndex<StaticPartOfArray<T>, SplitIndex>[0],
				[
					...SplitFixedArrayByIndex<StaticPartOfArray<T>, SplitIndex>[1],
					...VariablePartOfArray<T>,
				],
			]
			: [
				[
					...StaticPartOfArray<T>,
					...(T2 extends UnknownArray ? T2 : []),
				],
				VariablePartOfArray<T>,
			];

/**
Split the given array `T` by the given `SplitIndex`.

@example
```
type A = SplitArrayByIndex<[1, 2, 3, 4], 2>;
//=> [[1, 2], [3, 4]];

type B = SplitArrayByIndex<[1, 2, 3, 4], 0>;
//=> [[], [1, 2, 3, 4]];
```
*/
type SplitArrayByIndex<T extends UnknownArray, SplitIndex extends number> =
	SplitIndex extends 0
		? [[], T]
		: number extends T['length']
			? SplitVariableArrayByIndex<T, SplitIndex>
			: SplitFixedArrayByIndex<T, SplitIndex>;

/**
Create a new array type by adding or removing elements at a specified index range in the original array.

Use-case: Replace or insert items in an array type.

Like [`Array#splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) but for types.

@example
```
import type {ArraySplice} from 'type-fest';

type SomeMonths0 = ['January', 'April', 'June'];
type Months0 = ArraySplice<SomeMonths0, 1, 0, ['Feb', 'March']>;
//=> ['January', 'Feb', 'March', 'April', 'June']

type SomeMonths1 = ['January', 'April', 'June'];
type Months1 = ArraySplice<SomeMonths1, 1, 1>;
//=> ['January', 'June']

type SomeMonths2 = ['January', 'Foo', 'April'];
type Months2 = ArraySplice<SomeMonths2, 1, 1, ['Feb', 'March']>;
//=> ['January', 'Feb', 'March', 'April']
```

@category Array
*/
export type ArraySplice<
	T extends UnknownArray,
	Start extends number,
	DeleteCount extends number,
	Items extends UnknownArray = [],
> =
	SplitArrayByIndex<T, Start> extends [infer U extends UnknownArray, infer V extends UnknownArray]
		? SplitArrayByIndex<V, DeleteCount> extends [infer _Deleted extends UnknownArray, infer X extends UnknownArray]
			? [...U, ...Items, ...X]
			: never // Should never happen
		: never; // Should never happen

export {};
