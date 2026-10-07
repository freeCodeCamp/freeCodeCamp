import type {Primitive} from './primitive';

/**
Returns a boolean for whether the two given types are equal.

@link https://github.com/microsoft/TypeScript/issues/27024#issuecomment-421529650
@link https://stackoverflow.com/questions/68961864/how-does-the-equals-work-in-typescript/68963796#68963796
*/
export type IsEqual<T, U> =
	(<G>() => G extends T ? 1 : 2) extends
	(<G>() => G extends U ? 1 : 2)
		? true
		: false;

/**
Infer the length of the given array `<T>`.

@link https://itnext.io/implementing-arithmetic-within-typescripts-type-system-a1ef140a6f6f
*/
type TupleLength<T extends readonly unknown[]> = T extends {readonly length: infer L} ? L : never;

/**
Create a tuple type of the given length `<L>`.

@link https://itnext.io/implementing-arithmetic-within-typescripts-type-system-a1ef140a6f6f
*/
type BuildTuple<L extends number, T extends readonly unknown[] = []> = T extends {readonly length: L}
	? T
	: BuildTuple<L, [...T, unknown]>;

/**
Create a tuple of length `A` and a tuple composed of two other tuples,
the inferred tuple `U` and a tuple of length `B`, then extracts the length of tuple `U`.

@link https://itnext.io/implementing-arithmetic-within-typescripts-type-system-a1ef140a6f6f
*/
export type Subtract<A extends number, B extends number> = BuildTuple<A> extends [...(infer U), ...BuildTuple<B>]
	? TupleLength<U>
	: never;

/**
Matches any primitive, `Date`, or `RegExp` value.
*/
export type BuiltIns = Primitive | Date | RegExp;

/**
Gets keys from a type. Similar to `keyof` but this one also works for union types.

The reason a simple `keyof Union` does not work is because `keyof` always returns the accessible keys of a type. In the case of a union, that will only be the common keys.

@link https://stackoverflow.com/a/49402091
*/
export type KeysOfUnion<T> = T extends T ? keyof T : never;

export type UpperCaseCharacters = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';

export type WordSeparators = '-' | '_' | ' ';

export type StringDigit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
