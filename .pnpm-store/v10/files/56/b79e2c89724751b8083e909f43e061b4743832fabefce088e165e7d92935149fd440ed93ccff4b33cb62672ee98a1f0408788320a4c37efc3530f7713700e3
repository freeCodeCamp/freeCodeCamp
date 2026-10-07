import type {Join} from './join.d.ts';
import type {ArraySlice} from './array-slice.d.ts';
import type {StringToArray} from './internal/index.d.ts';

/**
Returns a string slice of a given range, just like `String#slice()`.

@see {ArraySlice}

@example
```
import type {StringSlice} from 'type-fest';

type A = StringSlice<'abcde', 0, 2>;
//=> 'ab'

type B = StringSlice<'abcde', 1>;
//=> 'bcde'

type C = StringSlice<'abcde', 0, -1>;
//=> 'abcd'

type D = StringSlice<'abcde', -2, -1>;
//=> 'd'
```

@category String
*/
export type StringSlice<
	S extends string,
	Start extends number = never,
	End extends number = never,
> = string extends S
	? string
	: ArraySlice<StringToArray<S>, Start, End> extends infer R extends readonly string[]
		? Join<R, ''>
		: never;

export {};
