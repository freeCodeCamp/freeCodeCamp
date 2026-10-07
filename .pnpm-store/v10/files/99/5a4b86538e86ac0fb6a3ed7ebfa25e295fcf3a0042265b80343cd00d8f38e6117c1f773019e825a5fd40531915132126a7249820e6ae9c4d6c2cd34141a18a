import type {IntRange} from './int-range.d.ts';
import type {Sum} from './sum.d.ts';

/**
Generate a union of numbers between a specified start and end (both inclusive), with an optional step.

You skip over numbers using the `Step` parameter (defaults to `1`). For example, `IntClosedRange<0, 10, 2>` will create a union of `0 | 2 | 4 | 6 | 8 | 10`.

Note: `Start` or `End` must be non-negative and smaller than `999`.

Use-cases:
1. This can be used to define a set of valid input/output values. for example:

@example
```
import type {IntClosedRange} from 'type-fest';

type Age = IntClosedRange<0, 20>;
//=> 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20

type FontSize = IntClosedRange<10, 20>;
//=> 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20

type EvenNumber = IntClosedRange<0, 10, 2>;
//=> 0 | 2 | 4 | 6 | 8 | 10
```

2. This can be used to define random numbers in a range. For example, `type RandomNumber = IntClosedRange<0, 100>;`

@example
```
import type {IntClosedRange} from 'type-fest';

type ZeroToNine = IntClosedRange<0, 9>;
//=> 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

type Hundreds = IntClosedRange<100, 900, 100>;
//=> 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
```

@see {@link IntRange}
*/
export type IntClosedRange<Start extends number, End extends number, Skip extends number = 1> = IntRange<Start, Sum<End, 1>, Skip>;

export {};
