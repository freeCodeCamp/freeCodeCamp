/**
A stricter version of {@link Exclude<T, U>} that ensures every member of `U` can successfully exclude something from `T`.

For example, `ExcludeStrict<string | number | boolean, number | bigint>` will error because `bigint` cannot exclude anything from `string | number | boolean`.

@example
```
// Valid Examples
import type {ExcludeStrict} from 'type-fest';

type Example1 = ExcludeStrict<{status: 'success'; data: string[]} | {status: 'error'; error: string}, {status: 'success'}>;
//=> {status: 'error'; error: string}

type Example2 = ExcludeStrict<'xs' | 's' | 'm' | 'l' | 'xl', 'xs' | 's'>;
//=> 'm' | 'l' | 'xl'

type Example3 = ExcludeStrict<{x: number; y: number} | [number, number], unknown[]>;
//=> {x: number; y: number}
```

@example
```
// Invalid Examples
import type {ExcludeStrict} from 'type-fest';

// `'xxl'` cannot exclude anything from `'xs' | 's' | 'm' | 'l' | 'xl'`
// @ts-expect-error
type Example1 = ExcludeStrict<'xs' | 's' | 'm' | 'l' | 'xl', 'xl' | 'xxl'>;
//                                                           ~~~~~~~~~~~~
// Error: Type "'xl' | 'xxl'" does not satisfy the constraint 'never'.

// `unknown[]` cannot exclude anything from `{x: number; y: number} | {x: string; y: string}`
// @ts-expect-error
type Example2 = ExcludeStrict<{x: number; y: number} | {x: string; y: string}, unknown[]>;
//                                                                             ~~~~~~~~~
// Error: Type 'unknown[]' does not satisfy the constraint 'never'.
```

@category Improved Built-in
*/
export type ExcludeStrict<
	T,
	U extends [U] extends [
		// Ensure every member of `U` excludes something from `T`
		U extends unknown ? ([T] extends [Exclude<T, U>] ? never : U) : never,
	]
		? unknown
		: never,
> = Exclude<T, U>;

export {};
