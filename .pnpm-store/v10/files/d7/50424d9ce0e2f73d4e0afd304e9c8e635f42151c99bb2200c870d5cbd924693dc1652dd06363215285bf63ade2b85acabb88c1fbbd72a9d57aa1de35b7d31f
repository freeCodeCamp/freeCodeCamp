/**
Represents a set with `unknown` value.

Use case: You want a type that all sets can be assigned to, but you don't care about the value.

@example
```
import type {UnknownSet} from 'type-fest';

type IsSet<T> = T extends UnknownSet ? true : false;

type A = IsSet<Set<string>>;
//=> true

type B = IsSet<ReadonlySet<number>>;
//=> true

type C = IsSet<string>;
//=> false
```

@category Type
*/
export type UnknownSet = ReadonlySet<unknown>;

export {};
