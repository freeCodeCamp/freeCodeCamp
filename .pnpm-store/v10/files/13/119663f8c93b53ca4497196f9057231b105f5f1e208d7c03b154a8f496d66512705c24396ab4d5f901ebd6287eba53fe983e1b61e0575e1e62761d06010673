import type {IsNever} from './is-never.d.ts';
import type {IsAny} from './is-any.d.ts';
import type {If} from './if.d.ts';
import type {IsEqual} from './is-equal.d.ts';
import type {IfNotAnyOrNever} from './internal/type.d.ts';

/**
A stricter version of `Exclude<T, U>` that excludes types only when they are exactly identical.

@example
```
import type {ExcludeExactly} from 'type-fest';

type TestExclude1 = Exclude<'a' | 'b' | 'c' | 1 | 2 | 3, string>;
//=> 1 | 2 | 3

type TestExcludeExactly1 = ExcludeExactly<'a' | 'b' | 'c' | 1 | 2 | 3, string>;
//=> 'a' | 'b' | 'c' | 1 | 2 | 3

type TestExclude2 = Exclude<'a' | 'b' | 'c' | 1 | 2 | 3, any>;
//=> never

type TestExcludeExactly2 = ExcludeExactly<'a' | 'b' | 'c' | 1 | 2 | 3, any>;
//=> 'a' | 'b' | 'c' | 1 | 2 | 3

type TestExclude3 = Exclude<{a: string} | {a: string; b: string}, {a: string}>;
//=> never

type TestExcludeExactly3 = ExcludeExactly<{a: string} | {a: string; b: string}, {a: string}>;
//=> {a: string; b: string}
```

@category Improved Built-in
*/
export type ExcludeExactly<Union, Delete> =
	IfNotAnyOrNever<
		Union,
		_ExcludeExactly<Union, Delete>,
		// If `Union` is `any`, then if `Delete` is `any`, return `never`, else return `Union`.
		If<IsAny<Delete>, never, Union>,
		// If `Union` is `never`, then if `Delete` is `never`, return `never`, else return `Union`.
		If<IsNever<Delete>, never, Union>
	>;

type _ExcludeExactly<Union, Delete> =
	IfNotAnyOrNever<Delete,
		Union extends unknown // For distributing `Union`
			? [Delete extends unknown // For distributing `Delete`
				? If<IsEqual<Union, Delete>, true, never>
				: never] extends [never] ? Union : never
			: never,
		// If `Delete` is `any` or `never`, then return `Union`,
		// because `Union` cannot be `any` or `never` here.
		Union, Union
	>;

export {};
