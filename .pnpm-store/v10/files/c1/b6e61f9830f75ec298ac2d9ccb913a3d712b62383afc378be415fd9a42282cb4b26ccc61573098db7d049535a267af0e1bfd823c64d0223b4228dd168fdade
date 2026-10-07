import type {SplitOnRestElement} from './split-on-rest-element.d.ts';
import type {UnknownArray} from './unknown-array.d.ts';

/**
Extract the [`rest`](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types) element type from an array.

@example
```
import type {ExtractRestElement} from 'type-fest';

type T1 = ExtractRestElement<[number, ...string[], string, 'foo']>;
//=> string

type T2 = ExtractRestElement<[...boolean[], string]>;
//=> boolean

type T3 = ExtractRestElement<[...Array<'foo'>, true]>;
//=> 'foo'

type T4 = ExtractRestElement<[number, string]>;
//=> never
```

@see {@link ExcludeRestElement}
@see {@link SplitOnRestElement}
@category Array
*/
export type ExtractRestElement<T extends UnknownArray> = SplitOnRestElement<T>[1][number];

export {};
