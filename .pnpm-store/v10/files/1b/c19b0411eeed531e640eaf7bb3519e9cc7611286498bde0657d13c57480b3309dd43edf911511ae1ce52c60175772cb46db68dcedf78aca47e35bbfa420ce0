import type {IsNever} from './is-never.d.ts';
import type {IsAny} from './is-any.d.ts';

/**
A stricter, non-distributive version of `extends` for checking whether one type is assignable to another.

Unlike the built-in `extends` keyword, `ExtendsStrict`:

1. Prevents distribution over union types by wrapping both types in tuples. For example, `ExtendsStrict<string | number, number>` returns `false`, whereas `string | number extends number` would result in `boolean`.

2. Treats `never` as a special case: `never` doesn't extend every other type, it only extends itself (or `any`). For example, `ExtendsStrict<never, number>` returns `false` whereas `never extends number` would result in `true`.

@example
```
import type {ExtendsStrict} from 'type-fest';

type T1 = ExtendsStrict<number | string, string>;
//=> false

type T2 = ExtendsStrict<never, number>;
//=> false

type T3 = ExtendsStrict<never, never>;
//=> true

type T4 = ExtendsStrict<string, number | string>;
//=> true

type T5 = ExtendsStrict<string, string>;
//=> true
```

@category Improved Built-in
*/
export type ExtendsStrict<Left, Right> =
	IsAny<Left | Right> extends true
		? true
		: IsNever<Left> extends true
			? IsNever<Right>
			: [Left] extends [Right]
				? true
				: false;

export {};
