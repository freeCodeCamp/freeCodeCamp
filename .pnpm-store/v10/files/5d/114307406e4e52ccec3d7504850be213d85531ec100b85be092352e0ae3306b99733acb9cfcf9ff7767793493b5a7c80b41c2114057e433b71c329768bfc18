import type {IsFloat} from './is-float.d.ts';
import type {IsInteger} from './is-integer.d.ts';

export type _Numeric = number | bigint;

type Zero = 0 | 0n;

/**
Matches the hidden `Infinity` type.

Please upvote [this issue](https://github.com/microsoft/TypeScript/issues/32277) if you want to have this type as a built-in in TypeScript.

@see {@link NegativeInfinity}

@category Numeric
*/
// See https://github.com/microsoft/TypeScript/issues/31752
// eslint-disable-next-line no-loss-of-precision
export type PositiveInfinity = 1e999;

/**
Matches the hidden `-Infinity` type.

Please upvote [this issue](https://github.com/microsoft/TypeScript/issues/32277) if you want to have this type as a built-in in TypeScript.

@see {@link PositiveInfinity}

@category Numeric
*/
// See https://github.com/microsoft/TypeScript/issues/31752
// eslint-disable-next-line no-loss-of-precision
export type NegativeInfinity = -1e999;

/**
A finite `number`.
You can't pass a `bigint` as they are already guaranteed to be finite.

Use-case: Validating and documenting parameters.

Note: This can't detect `NaN`, please upvote [this issue](https://github.com/microsoft/TypeScript/issues/28682) if you want to have this type as a built-in in TypeScript.

@example
```
import type {Finite} from 'type-fest';

declare function setScore<T extends number>(length: Finite<T>): void;
```

@category Numeric
*/
export type Finite<T extends number> = T extends PositiveInfinity | NegativeInfinity ? never : T;

/**
A `number` that is an integer.

Use-case: Validating and documenting parameters.

@example
```
import type {Integer} from 'type-fest';

type SomeInteger = Integer<1>;
//=> 1

type IntegerWithDecimal = Integer<1.0>;
//=> 1

type NegativeInteger = Integer<-1>;
//=> -1

type Float = Integer<1.5>;
//=> never

// Supports non-decimal numbers

type OctalInteger = Integer<0o10>;
//=> 8

type BinaryInteger = Integer<0b10>;
//=> 2

type HexadecimalInteger = Integer<0x10>;
//=> 16
```

@example
```
import type {Integer} from 'type-fest';

declare function setYear<T extends number>(length: Integer<T>): void;
```

@see {@link NegativeInteger}
@see {@link NonNegativeInteger}

@category Numeric
*/
// `${bigint}` is a type that matches a valid bigint literal without the `n` (ex. 1, 0b1, 0o1, 0x1)
// Because T is a number and not a string we can effectively use this to filter out any numbers containing decimal points
export type Integer<T> =
	T extends unknown // To distributive type
		? IsInteger<T> extends true ? T : never
		: never; // Never happens

/**
A `number` that is not an integer.

Use-case: Validating and documenting parameters.

It does not accept `Infinity`.

@example
```
import type {Float} from 'type-fest';

declare function setPercentage<T extends number>(length: Float<T>): void;
```

@see {@link Integer}

@category Numeric
*/
export type Float<T> =
	T extends unknown // To distributive type
		? IsFloat<T> extends true ? T : never
		: never; // Never happens

/**
A negative (`-∞ < x < 0`) `number` that is not an integer.
Equivalent to `Negative<Float<T>>`.

Use-case: Validating and documenting parameters.

@see {@link Negative}
@see {@link Float}

@category Numeric
*/
export type NegativeFloat<T extends number> = Negative<Float<T>>;

/**
A negative `number`/`bigint` (`-∞ < x < 0`)

Use-case: Validating and documenting parameters.

@see {@link NegativeInteger}
@see {@link NonNegative}

@category Numeric
*/
export type Negative<T extends _Numeric> = T extends Zero ? never : `${T}` extends `-${string}` ? T : never;

/**
A negative (`-∞ < x < 0`) `number` that is an integer.
Equivalent to `Negative<Integer<T>>`.

You can't pass a `bigint` as they are already guaranteed to be integers, instead use `Negative<T>`.

Use-case: Validating and documenting parameters.

@see {@link Negative}
@see {@link Integer}

@category Numeric
*/
export type NegativeInteger<T extends number> = Negative<Integer<T>>;

/**
A non-negative `number`/`bigint` (`0 <= x < ∞`).

Use-case: Validating and documenting parameters.

@see {@link NonNegativeInteger}
@see {@link Negative}

@example
```
import type {NonNegative} from 'type-fest';

declare function setLength<T extends number>(length: NonNegative<T>): void;
```

@category Numeric
*/
export type NonNegative<T extends _Numeric> = T extends Zero ? T : Negative<T> extends never ? T : never;

/**
A non-negative (`0 <= x < ∞`) `number` that is an integer.
Equivalent to `NonNegative<Integer<T>>`.

You can't pass a `bigint` as they are already guaranteed to be integers, instead use `NonNegative<T>`.

Use-case: Validating and documenting parameters.

@see {@link NonNegative}
@see {@link Integer}

@example
```
import type {NonNegativeInteger} from 'type-fest';

declare function setLength<T extends number>(length: NonNegativeInteger<T>): void;
```

@category Numeric
*/
export type NonNegativeInteger<T extends number> = NonNegative<Integer<T>>;

/**
Returns a boolean for whether the given number is a negative number.

@see {@link Negative}

@example
```
import type {IsNegative} from 'type-fest';

type ShouldBeFalse = IsNegative<1>;
type ShouldBeTrue = IsNegative<-1>;
```

@category Numeric
*/
export type IsNegative<T extends _Numeric> = T extends Negative<T> ? true : false;

export {};
