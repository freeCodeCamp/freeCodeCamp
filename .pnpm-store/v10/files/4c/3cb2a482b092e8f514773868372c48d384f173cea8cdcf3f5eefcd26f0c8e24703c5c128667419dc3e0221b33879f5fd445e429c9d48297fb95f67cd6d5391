import type {BuiltIns} from './internal/index.d.ts';

/**
Create a deep version of another type where all optional keys are set to also accept `undefined`.

Note: This is only needed when the [`exactOptionalPropertyTypes`](https://www.typescriptlang.org/tsconfig#exactOptionalPropertyTypes) TSConfig setting is enabled.

Use-cases:
- When `exactOptionalPropertyTypes` is enabled, an object like `{a: undefined}` is not assignable to the type `{a?: number}`. You can use `UndefinedOnPartialDeep<{a?: number}>` to make it assignable.

@example
```
import type {UndefinedOnPartialDeep} from 'type-fest';

type Settings = {
	optionA: string;
	optionB?: number;
	subOption: {
		subOptionA: boolean;
		subOptionB?: boolean;
	};
};

const testSettingsA: Settings = {
	optionA: 'foo',
	optionB: undefined, // TypeScript error if `exactOptionalPropertyTypes` is true.
	// @ts-expect-error
	subOption: {
		subOptionA: true,
		subOptionB: undefined, // TypeScript error if `exactOptionalPropertyTypes` is true
	},
};

const testSettingsB: UndefinedOnPartialDeep<Settings> = {
	optionA: 'foo',
	optionB: undefined, // `optionB` can be set to `undefined` now.
	subOption: {
		subOptionA: true,
		subOptionB: undefined, // `subOptionB` can be set to `undefined` now.
	},
};
```
*/
export type UndefinedOnPartialDeep<T> =
	// Handle built-in type and function
	T extends BuiltIns | Function
		? T
		// Handle tuple and array
		: T extends readonly unknown[]
			? UndefinedOnPartialList<T>
			// Handle map and readonly map
			: T extends Map<infer K, infer V>
				? Map<K, UndefinedOnPartialDeep<V>>
				: T extends ReadonlyMap<infer K, infer V>
					? ReadonlyMap<K, UndefinedOnPartialDeep<V>>
					// Handle set and readonly set
					: T extends Set<infer K>
						? Set<UndefinedOnPartialDeep<K>>
						: T extends ReadonlySet<infer K>
							? ReadonlySet<UndefinedOnPartialDeep<K>>
							// Handle object
							: T extends Record<any, any>
								? {
									[KeyType in keyof T]: undefined extends T[KeyType]
										? UndefinedOnPartialDeep<T[KeyType]> | undefined
										: UndefinedOnPartialDeep<T[KeyType]>
								}
								: T; // If T is not builtins / function / array / map / set / object, return T

// Handle tuples and arrays
type UndefinedOnPartialList<T extends readonly unknown[]> = T extends []
	? []
	: T extends [infer F, ...infer R]
		? [UndefinedOnPartialDeep<F>, ...UndefinedOnPartialDeep<R>]
		: T extends readonly [infer F, ...infer R]
			? readonly [UndefinedOnPartialDeep<F>, ...UndefinedOnPartialDeep<R>]
			: T extends Array<infer F>
				? Array<UndefinedOnPartialDeep<F>>
				: T extends ReadonlyArray<infer F>
					? ReadonlyArray<UndefinedOnPartialDeep<F>>
					: never;

export {};
