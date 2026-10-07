/**
Represents an array with `unknown` value.

Use case: You want a type that all arrays can be assigned to, but you don't care about the value.

@example
```
import type {UnknownArray} from 'type-fest';

type IsArray<T> = T extends UnknownArray ? true : false;

type A = IsArray<['foo']>;
//=> true

type B = IsArray<readonly number[]>;
//=> true

type C = IsArray<string>;
//=> false
```

@category Type
@category Array
*/
export type UnknownArray = readonly unknown[];

export {};
