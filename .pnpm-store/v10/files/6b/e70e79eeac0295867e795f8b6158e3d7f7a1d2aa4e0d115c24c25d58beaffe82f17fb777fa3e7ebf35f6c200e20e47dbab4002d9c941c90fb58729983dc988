/**
Matches any non-empty tuple.

@example
```
import type {NonEmptyTuple} from 'type-fest';

const sum = (...numbers: NonEmptyTuple<number>) => numbers.reduce((total, value) => total + value, 0);

sum(1, 2, 3);
// Ok

// @ts-expect-error
sum();
// Error: Expected at least 1 arguments, but got 0.
```

@see {@link RequireAtLeastOne} for objects

@category Array
*/
export type NonEmptyTuple<T = unknown> = readonly [T, ...T[]];

export {};
