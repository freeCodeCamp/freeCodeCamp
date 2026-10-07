import type {AllExtend} from './all-extend.d.ts';

/**
Returns a boolean for whether the given string literal is lowercase.

@example
```
import type {IsLowercase} from 'type-fest';

type A = IsLowercase<'abc'>;
//=> true

type B = IsLowercase<'Abc'>;
//=> false

type C = IsLowercase<string>;
//=> boolean
```
*/
export type IsLowercase<S extends string> = AllExtend<_IsLowercase<S>, true>;

/**
Loops through each part in the string and returns a boolean array indicating whether each part is lowercase.
*/
type _IsLowercase<S extends string, Accumulator extends boolean[] = []> = S extends `${infer First}${infer Rest}`
	? _IsLowercase<Rest, [...Accumulator, IsLowercaseHelper<First>]>
	: [...Accumulator, IsLowercaseHelper<S>];

/**
Returns a boolean for whether an individual part of the string is lowercase.
*/
type IsLowercaseHelper<S extends string> = S extends Lowercase<string>
	? true
	: S extends Uppercase<string> | Capitalize<string> | `${string}${Uppercase<string>}${string}`
		? false
		: boolean;

export {};
