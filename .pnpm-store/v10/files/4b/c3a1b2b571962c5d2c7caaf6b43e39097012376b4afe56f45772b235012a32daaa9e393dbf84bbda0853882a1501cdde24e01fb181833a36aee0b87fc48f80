import type {UnionToTuple} from './union-to-tuple.d.ts';

/**
Returns the length of a union type.

@example
```
import type {UnionLength} from 'type-fest';

type T1 = UnionLength<'foo' | 'bar' | 'baz'>;
//=> 3

type T2 = UnionLength<[string, string, string] | {x: string; y: string; z: string}>;
//=> 2

type T3 = UnionLength<any>;
//=> 1

type T4 = UnionLength<never>;
//=> 0
```

@category Type
*/
export type UnionLength<Union> = UnionToTuple<Union>['length'];

export {};
