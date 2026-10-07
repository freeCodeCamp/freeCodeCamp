/**
A stricter version of {@link Extract<T, U>} that ensures every member of `U` can successfully extract something from `T`.

For example, `ExtractStrict<string | number | boolean, number | bigint>` will error because `bigint` cannot extract anything from `string | number | boolean`.

@example
```
// Valid Examples
import type {ExtractStrict} from 'type-fest';

type Example1 = ExtractStrict<{status: 'success'; data: string[]} | {status: 'error'; error: string}, {status: 'success'}>;
//=> {status: 'success'; data: string[]}

type Example2 = ExtractStrict<'xs' | 's' | 'm' | 'l' | 'xl', 'xs' | 's'>;
//=> 'xs' | 's'

type Example3 = ExtractStrict<{x: number; y: number} | [number, number], unknown[]>;
//=> [number, number]
```

@example
```
// Invalid Examples
import type {ExtractStrict} from 'type-fest';

// `'xxl'` cannot extract anything from `'xs' | 's' | 'm' | 'l' | 'xl'`
// @ts-expect-error
type Example1 = ExtractStrict<'xs' | 's' | 'm' | 'l' | 'xl', 'xl' | 'xxl'>;
//                                                           ~~~~~~~~~~~~
// Error: Type "'xl' | 'xxl'" does not satisfy the constraint 'never'.

// `unknown[]` cannot extract anything from `{x: number; y: number} | {x: string; y: string}`
// @ts-expect-error
type Example2 = ExtractStrict<{x: number; y: number} | {x: string; y: string}, unknown[]>;
//                                                                             ~~~~~~~~~
// Error: Type 'unknown[]' does not satisfy the constraint 'never'.
```

@category Improved Built-in
*/
export type ExtractStrict<
	T,
	U extends [U] extends [
		// Ensure every member of `U` extracts something from `T`
		U extends unknown ? (Extract<T, U> extends never ? never : U) : never,
	]
		? unknown
		: never,
> = Extract<T, U>;

export {};
