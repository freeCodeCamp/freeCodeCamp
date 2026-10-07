/**
Extracts the type of the last element of an array.

Use-case: Defining the return type of functions that extract the last element of an array, for example [`lodash.last`](https://lodash.com/docs/4.17.15#last).

@example
```
import type {LastArrayElement} from 'type-fest';

declare function lastOf<V extends readonly any[]>(array: V): LastArrayElement<V>;

const array = ['foo', 2];

typeof lastOf(array);
//=> number
```

@category Array
@category Template literal
*/
export type LastArrayElement<ValueType extends readonly unknown[]> =
	ValueType extends readonly [infer ElementType]
		? ElementType
		: ValueType extends readonly [infer _, ...infer Tail]
		? LastArrayElement<Tail>
		: ValueType extends ReadonlyArray<infer ElementType>
		? ElementType
		: never;
