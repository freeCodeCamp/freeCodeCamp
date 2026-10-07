import type {If} from './if.d.ts';
import type {IfNotAnyOrNever} from './internal/type.d.ts';
import type {IsNegative} from './numeric.d.ts';
import type {UnknownArray} from './unknown-array.d.ts';

/**
Create a tuple type of the specified length with elements of the specified type.

@example
```
import type {TupleOf} from 'type-fest';

type RGB = TupleOf<3, number>;
//=> [number, number, number]

type Line = TupleOf<2, {x: number; y: number}>;
//=> [{x: number; y: number}, {x: number; y: number}]

type TicTacToeBoard = TupleOf<3, TupleOf<3, 'X' | 'O' | null>>;
//=> [['X' | 'O' | null, 'X' | 'O' | null, 'X' | 'O' | null], ['X' | 'O' | null, 'X' | 'O' | null, 'X' | 'O' | null], ['X' | 'O' | null, 'X' | 'O' | null, 'X' | 'O' | null]]
```

@example
```
import type {TupleOf} from 'type-fest';

type Range<Start extends number, End extends number> = Exclude<keyof TupleOf<End>, keyof TupleOf<Start>>;

type ZeroToFour = Range<0, 5>;
//=> '0' | '1' | '2' | '3' | '4'

type ThreeToEight = Range<3, 9>;
//=> '5' | '3' | '4' | '6' | '7' | '8'
```

Note: If the specified length is the non-literal `number` type, the result will not be a tuple but a regular array.

@example
```
import type {TupleOf} from 'type-fest';

type StringArray = TupleOf<number, string>;
//=> string[]
```

Note: If the type for elements is not specified, it will default to `unknown`.

@example
```
import type {TupleOf} from 'type-fest';

type UnknownTriplet = TupleOf<3>;
//=> [unknown, unknown, unknown]
```

Note: If the specified length is negative, the result will be an empty tuple.

@example
```
import type {TupleOf} from 'type-fest';

type EmptyTuple = TupleOf<-3, string>;
//=> []
```

Note: If you need a readonly tuple, simply wrap this type with `Readonly`, for example, to create `readonly [number, number, number]` use `Readonly<TupleOf<3, number>>`.

@category Array
*/
export type TupleOf<Length extends number, Fill = unknown> = IfNotAnyOrNever<Length,
	_TupleOf<If<IsNegative<Length>, 0, Length>, Fill, []>,
	Fill[], []>;

type _TupleOf<L extends number, Fill, Accumulator extends UnknownArray> = number extends L
	? Fill[]
	: L extends Accumulator['length']
		? Accumulator
		: _TupleOf<L, Fill, [...Accumulator, Fill]>;

export {};
