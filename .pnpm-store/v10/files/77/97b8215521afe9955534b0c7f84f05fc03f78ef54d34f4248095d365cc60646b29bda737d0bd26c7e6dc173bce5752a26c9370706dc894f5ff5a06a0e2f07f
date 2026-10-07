import type {Not} from './internal/index.d.ts';
import type {IsFloat} from './is-float.d.ts';
import type {PositiveInfinity, NegativeInfinity} from './numeric.d.ts';

/**
Returns a boolean for whether the given number is an integer, like `-5`, `1.0`, or `100`.

Use-case:
- If you want to make a conditional branch based on the result of whether a number is an integer or not.

@example
```
import type {IsInteger, PositiveInfinity} from 'type-fest';

type A = IsInteger<1>;
//=> true

type B = IsInteger<1.0>;
//=> true

type C = IsInteger<-1>;
//=> true

type D = IsInteger<0b10>;
//=> true

type E = IsInteger<0o10>;
//=> true

type F = IsInteger<0x10>;
//=> true

type G = IsInteger<1.23e+21>;
//=> true

type H = IsInteger<1.5>;
//=> false

type I = IsInteger<PositiveInfinity>;
//=> false

type J = IsInteger<1e-7>;
//=> false
```

@category Type Guard
@category Numeric
*/
export type IsInteger<T> =
	T extends bigint
		? true
		: T extends number
			? number extends T
				? false
				: T extends PositiveInfinity | NegativeInfinity
					? false
					: Not<IsFloat<T>>
			: false;

export {};
