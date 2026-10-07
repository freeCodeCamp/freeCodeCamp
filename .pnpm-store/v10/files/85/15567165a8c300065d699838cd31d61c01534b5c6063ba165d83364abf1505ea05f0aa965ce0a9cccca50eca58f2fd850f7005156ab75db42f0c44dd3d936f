import type {StringToNumber} from './internal/string.d.ts';

/**
Returns the absolute value of the specified number or bigint.

@example
```
import type {Absolute} from 'type-fest';

type A = Absolute<-1>;
//=> 1

type B = Absolute<1>;
//=> 1

type C = Absolute<0>;
//=> 0

type D = Absolute<-1.025>;
//=> 1.025

type E = Absolute<-9999n>;
//=> 9999n
```

Returns back the same type if the input is not a literal type.

@example
```
import type {Absolute} from 'type-fest';

type A = Absolute<number>;
//=> number

type B = Absolute<bigint>;
//=> bigint

type C = Absolute<number | bigint>;
//=> number | bigint
```

@category Numeric
*/
export type Absolute<N extends number | bigint> = N extends bigint // Also, distributes `N`
	? `${N}` extends `-${infer Magnitude extends bigint}`
		? Magnitude
		: N
	: `${N}` extends `-${infer Magnitude}` // This doesn't use the `extends number` constraint approach because that fails with the `-Infinity` case
		? StringToNumber<Magnitude>
		: N;

export {};
