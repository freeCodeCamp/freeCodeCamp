import type {IsNever} from './is-never.d.ts';
import type {IsEqual} from './is-equal.d.ts';

/**
Returns a boolean for whether the given type is a union.

@example
```
import type {IsUnion} from 'type-fest';

type A = IsUnion<string | number>;
//=> true

type B = IsUnion<string>;
//=> false
```
*/
export type IsUnion<T> = InternalIsUnion<T>;

/**
The actual implementation of `IsUnion`.
*/
type InternalIsUnion<T, U = T> =
	(
		IsNever<T> extends true
			? false
			: T extends any
				? IsEqual<U, T> extends true
					? false
					: true
				: never
	) extends infer Result
	// In some cases `Result` will return `false | true` which is `boolean`,
	// that means `T` has at least two types and it's a union type,
	// so we will return `true` instead of `boolean`.
		? boolean extends Result ? true
			: Result
		: never; // Should never happen

export {};
