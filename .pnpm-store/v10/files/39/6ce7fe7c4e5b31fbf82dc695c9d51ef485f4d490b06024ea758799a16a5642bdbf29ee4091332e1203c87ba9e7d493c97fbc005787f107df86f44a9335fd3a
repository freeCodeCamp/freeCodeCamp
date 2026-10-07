import type {AllExtend} from './all-extend.d.ts';

/**
Returns a boolean for whether the given string literal is uppercase.

@example
```
import type {IsUppercase} from 'type-fest';

type A = IsUppercase<'ABC'>;
//=> true

type B = IsUppercase<'Abc'>;
//=> false

type C = IsUppercase<string>;
//=> boolean
```
*/
export type IsUppercase<S extends string> = AllExtend<_IsUppercase<S>, true>;

/**
Loops through each part in the string and returns a boolean array indicating whether each part is uppercase.
*/
type _IsUppercase<S extends string, Accumulator extends boolean[] = []> = S extends `${infer First}${infer Rest}`
	? _IsUppercase<Rest, [...Accumulator, IsUppercaseHelper<First>]>
	: [...Accumulator, IsUppercaseHelper<S>];

/**
Returns a boolean for whether an individual part of the string is uppercase.
*/
type IsUppercaseHelper<S extends string> = S extends Uppercase<string>
	? true
	: S extends Lowercase<string> | Uncapitalize<string> | `${string}${Lowercase<string>}${string}`
		? false
		: boolean;

export {};
