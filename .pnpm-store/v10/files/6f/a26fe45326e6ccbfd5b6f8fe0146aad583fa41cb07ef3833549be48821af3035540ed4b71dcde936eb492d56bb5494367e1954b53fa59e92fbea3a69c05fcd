import type {TupleOf} from '../tuple-of.d.ts';
import type {NegativeInfinity, PositiveInfinity} from '../numeric.d.ts';
import type {Trim} from '../trim.d.ts';
import type {Whitespace} from './characters.d.ts';

/**
Return a string representation of the given string or number.

Note: This type is not the return type of the `.toString()` function.
*/
export type ToString<T> = T extends string | number ? `${T}` : never;

/**
Converts a numeric string to a number.

@example
```
type PositiveInt = StringToNumber<'1234'>;
//=> 1234

type NegativeInt = StringToNumber<'-1234'>;
//=> -1234

type PositiveFloat = StringToNumber<'1234.56'>;
//=> 1234.56

type NegativeFloat = StringToNumber<'-1234.56'>;
//=> -1234.56

type PositiveInfinity = StringToNumber<'Infinity'>;
//=> Infinity

type NegativeInfinity = StringToNumber<'-Infinity'>;
//=> -Infinity
```

@category String
@category Numeric
@category Template literal
*/
export type StringToNumber<S extends string> = S extends `${infer N extends number}`
	? N
	: S extends 'Infinity'
		? PositiveInfinity
		: S extends '-Infinity'
			? NegativeInfinity
			: never;

/**
Returns a boolean for whether the given string `S` starts with the given string `SearchString`.

@example
```
type A = StartsWith<'abcde', 'abc'>;
//=> true

type B = StartsWith<'abcde', 'bc'>;
//=> false

type C = StartsWith<string, 'bc'>;
//=> never

type D = StartsWith<'abcde', string>;
//=> never
```

@category String
@category Template literal
*/
export type StartsWith<S extends string, SearchString extends string> = string extends S | SearchString
	? never
	: S extends `${SearchString}${infer T}`
		? true
		: false;

/**
Returns an array of the characters of the string.

@example
```
type A = StringToArray<'abcde'>;
//=> ['a', 'b', 'c', 'd', 'e']

type B = StringToArray<string>;
//=> never
```

@category String
*/
export type StringToArray<S extends string, Result extends string[] = []> = string extends S
	? never
	: S extends `${infer F}${infer R}`
		? StringToArray<R, [...Result, F]>
		: Result;

/**
Returns the length of the given string.

@example
```
type A = StringLength<'abcde'>;
//=> 5

type B = StringLength<string>;
//=> never
```

@category String
@category Template literal
*/
export type StringLength<S extends string> = string extends S
	? never
	: StringToArray<S>['length'];

/**
Returns a boolean for whether a string is whitespace.
*/
export type IsWhitespace<T extends string> = T extends Whitespace
	? true
	: T extends `${Whitespace}${infer Rest}`
		? IsWhitespace<Rest>
		: false;

/**
Returns a boolean for whether the string is numeric.

This type is a workaround for [Microsoft/TypeScript#46109](https://github.com/microsoft/TypeScript/issues/46109#issuecomment-930307987).
*/
export type IsNumeric<T extends string> = T extends `${number}`
	? Trim<T> extends T
		? true
		: false
	: false;

/**
Returns a boolean for whether `A` represents a number greater than `B`, where `A` and `B` are both numeric strings and have the same length.

@example
```
type A = SameLengthPositiveNumericStringGt<'50', '10'>;
//=> true

type B = SameLengthPositiveNumericStringGt<'10', '10'>;
//=> false
```
*/
type SameLengthPositiveNumericStringGt<A extends string, B extends string> = A extends `${infer FirstA}${infer RestA}`
	? B extends `${infer FirstB}${infer RestB}`
		? FirstA extends FirstB
			? SameLengthPositiveNumericStringGt<RestA, RestB>
			: PositiveNumericCharacterGt<FirstA, FirstB>
		: never
	: false;

type NumericString = '0123456789';

/**
Returns a boolean for whether `A` is greater than `B`, where `A` and `B` are both positive numeric strings.

@example
```
type A = PositiveNumericStringGt<'500', '1'>;
//=> true

type B = PositiveNumericStringGt<'1', '1'>;
//=> false

type C = PositiveNumericStringGt<'1', '500'>;
//=> false
```
*/
export type PositiveNumericStringGt<A extends string, B extends string> = A extends B
	? false
	: [TupleOf<StringLength<A>, 0>, TupleOf<StringLength<B>, 0>] extends infer R extends [readonly unknown[], readonly unknown[]]
		? R[0] extends [...R[1], ...infer Remain extends readonly unknown[]]
			? 0 extends Remain['length']
				? SameLengthPositiveNumericStringGt<A, B>
				: true
			: false
		: never;

/**
Returns a boolean for whether `A` represents a number greater than `B`, where `A` and `B` are both positive numeric characters.

@example
```
type A = PositiveNumericCharacterGt<'5', '1'>;
//=> true

type B = PositiveNumericCharacterGt<'1', '1'>;
//=> false
```
*/
type PositiveNumericCharacterGt<A extends string, B extends string> = NumericString extends `${infer HeadA}${A}${infer TailA}`
	? NumericString extends `${infer HeadB}${B}${infer TailB}`
		? HeadA extends `${HeadB}${infer _}${infer __}`
			? true
			: false
		: never
	: never;

export {};
