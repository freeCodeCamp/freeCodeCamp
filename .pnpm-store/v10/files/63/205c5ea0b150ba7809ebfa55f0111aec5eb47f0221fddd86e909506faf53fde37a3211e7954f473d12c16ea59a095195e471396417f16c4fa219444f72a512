/**
Return the length of an array. Equivalent to `T['length']` where `T` extends any array.

Tuples resolve to numeric literals, while non-tuples resolve to the `number` type.

@example
```
import type {ArrayLength} from 'type-fest';

type TupleLength = ArrayLength<[1, 2, 3]>;
//=> 3

type TupleWithOptionalMembersLength = ArrayLength<[1, 2, number?]>;
//=> 2 | 3

type NonTupleArrayLength = ArrayLength<string[]>;
//=> number

type TupleWithRestElementLength = ArrayLength<[1, 2, ...string[]]>;
//=> number

// Distinguish between arrays with fixed and non-fixed lengths
type IsFixedLengthArray<T extends readonly unknown[]> = number extends ArrayLength<T> ? false : true;

type A = IsFixedLengthArray<number[]>;
//=> false

type B = IsFixedLengthArray<[1, 2, 3]>;
//=> true
```

@category Array
*/
export type ArrayLength<T extends readonly unknown[]> = T['length'];

export {};
