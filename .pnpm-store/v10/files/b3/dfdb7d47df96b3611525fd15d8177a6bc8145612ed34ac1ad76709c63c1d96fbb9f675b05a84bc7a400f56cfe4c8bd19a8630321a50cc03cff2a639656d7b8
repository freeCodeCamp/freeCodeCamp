import type {BuiltIns, HasMultipleCallSignatures} from './internal/type.d.ts';
import type {IsNever} from './is-never.d.ts';
import type {Simplify} from './simplify.d.ts';

/**
Recursively removes `null` and `undefined` from the specified type.

Use-cases:
- Normalizing data received from external sources where `null`/`undefined` have been cleaned.
- Creating non-nullable variants of deeply nested types.

NOTE: Optional modifiers (`?`) are not removed from properties. For example, `NonNullableDeep<{foo?: string | null | undefined}>` will result in `{foo?: string}`. To remove both optional modifiers and nullables, use {@link RequiredDeep} in conjunction with this type.

@example
```
import type {NonNullableDeep} from 'type-fest';

type UserDraft = {
	name: string | null;
	address: {
		city: string | undefined;
		postalCode: string | null;
		landmark?: string | undefined;
	};
	tags: Array<string | null>;
	visits: Map<string | null, {
		date: Date | null;
		notes: Set<string | undefined>;
	}>;
};

type User = NonNullableDeep<UserDraft>;
//=> {
// 	name: string;
// 	address: {
// 		city: string;
// 		postalCode: string;
// 		landmark?: string;
// 	};
// 	tags: string[];
// 	visits: Map<string, {
// 		date: Date;
// 		notes: Set<string>;
// 	}>;
// }
```

@example
```
import type {NonNullableDeep} from 'type-fest';

type ArrayExample = NonNullableDeep<[{a: number | undefined}, ...Array<{b: string | null}>]>;
//=> [{a: number}, ...{b: string}[]]

type MapExample = NonNullableDeep<{a: Map<{a: string | null}, {c: number | undefined}>}>;
//=> {a: Map<{a: string}, {c: number}>}

type SetExample = NonNullableDeep<Set<{a: string | null}> | null | undefined>;
//=> Set<{a: string}>

type PromiseExample = NonNullableDeep<{a: Promise<{b: string | null}>}>;
//=> {a: Promise<{b: string}>}

type FunctionExample = NonNullableDeep<(a: string | null) => number | undefined>;
//=> (a: string) => number
```

@category Utilities
@category Object
@category Array
@category Set
@category Map
*/
export type NonNullableDeep<T> =
	T extends BuiltIns | (new (...arguments_: any[]) => unknown)
		? Exclude<T, null | undefined> // `Exclude` is used instead of `NonNullable` because `NonNullable<void>` results in `void & {}`.
		: T extends Map<infer KeyType, infer ValueType>
			? Map<NonNullableDeep<KeyType>, NonNullableDeep<ValueType>>
			: T extends Set<infer ItemType>
				? Set<NonNullableDeep<ItemType>>
				: T extends ReadonlyMap<infer KeyType, infer ValueType>
					? ReadonlyMap<NonNullableDeep<KeyType>, NonNullableDeep<ValueType>>
					: T extends ReadonlySet<infer ItemType>
						? ReadonlySet<NonNullableDeep<ItemType>>
						: T extends WeakMap<infer KeyType, infer ValueType>
							? WeakMap<NonNullableDeep<KeyType>, NonNullableDeep<ValueType>>
							: T extends WeakSet<infer ItemType>
								? WeakSet<NonNullableDeep<ItemType>>
								: T extends Promise<infer ValueType>
									? Promise<NonNullableDeep<ValueType>>
									: T extends (...arguments_: any[]) => unknown
										? HasMultipleCallSignatures<T> extends true
											? T
											: ((...arguments_: NonNullableDeep<Parameters<T>>) => NonNullableDeep<ReturnType<T>>)
												& (IsNever<keyof T> extends true
													? unknown
													: NonNullableDeep<Simplify<T>>) // `Simplify` removes the call signature
										: T extends object
											? {[P in keyof T]: NonNullableDeep<T[P]>}
											: unknown;

export {};
