/**
Returns a boolean for whether the given number is a float, like `1.5` or `-1.5`.

Use-case:
- If you want to make a conditional branch based on the result of whether a number is a float or not.

@example
```
import type {IsFloat, PositiveInfinity} from 'type-fest';

type A = IsFloat<1.5>;
//=> true

type B = IsFloat<-1.5>;
//=> true

type C = IsFloat<1e-7>;
//=> true

type D = IsFloat<1.0>;
//=> false

type E = IsFloat<PositiveInfinity>;
//=> false

type F = IsFloat<1.23e+21>;
//=> false
```

@category Type Guard
@category Numeric
*/
export type IsFloat<T> = T extends number
	? `${T}` extends `${number}e${infer E extends '-' | '+'}${number}`
		? E extends '-'
			? true
			: false
		: `${T}` extends `${number}.${number}`
			? true
			: false
	: false;

export {};
