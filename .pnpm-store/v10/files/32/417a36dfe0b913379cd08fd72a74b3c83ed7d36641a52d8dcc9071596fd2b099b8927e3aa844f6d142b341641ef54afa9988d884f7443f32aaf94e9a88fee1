import type {BuiltIns, HasMultipleCallSignatures} from './internal/index.d.ts';
import type {IsNever} from './is-never.d.ts';
import type {Simplify} from './simplify.d.ts';

/**
Create a deeply required version of another type.

Use-cases:
- Creating optional configuration interfaces where the underlying implementation still requires all options to be fully specified.
- Modeling the resulting type after a deep merge with a set of defaults.

Use [`Required<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype) if you only need one level deep.

@example
```
import type {RequiredDeep} from 'type-fest';

type Settings = {
	textEditor?: {
		fontSize?: number;
		fontColor?: string;
		fontWeight?: number | undefined;
	};
	autocomplete?: boolean;
	autosave?: boolean | undefined;
};

type RequiredSettings = RequiredDeep<Settings>;
//=> {
// 	textEditor: {
// 		fontSize: number;
// 		fontColor: string;
// 		fontWeight: number | undefined;
// 	};
// 	autocomplete: boolean;
// 	autosave: boolean | undefined;
// }
```

Note that types containing overloaded functions are not made deeply required due to a [TypeScript limitation](https://github.com/microsoft/TypeScript/issues/29732).

@category Utilities
@category Object
@category Array
@category Set
@category Map
*/
export type RequiredDeep<T> = T extends BuiltIns
	? T
	: T extends Map<infer KeyType, infer ValueType>
		? Map<RequiredDeep<KeyType>, RequiredDeep<ValueType>>
		: T extends Set<infer ItemType>
			? Set<RequiredDeep<ItemType>>
			: T extends ReadonlyMap<infer KeyType, infer ValueType>
				? ReadonlyMap<RequiredDeep<KeyType>, RequiredDeep<ValueType>>
				: T extends ReadonlySet<infer ItemType>
					? ReadonlySet<RequiredDeep<ItemType>>
					: T extends WeakMap<infer KeyType, infer ValueType>
						? WeakMap<RequiredDeep<KeyType>, RequiredDeep<ValueType>>
						: T extends WeakSet<infer ItemType>
							? WeakSet<RequiredDeep<ItemType>>
							: T extends Promise<infer ValueType>
								? Promise<RequiredDeep<ValueType>>
								: T extends (...arguments_: any[]) => unknown
									? IsNever<keyof T> extends true
										? T
										: HasMultipleCallSignatures<T> extends true
											? T
											: ((...arguments_: Parameters<T>) => ReturnType<T>) & RequiredObjectDeep<T>
									: T extends object
										? Simplify<RequiredObjectDeep<T>> // `Simplify` to prevent `RequiredObjectDeep` from appearing in the resulting type
										: unknown;

type RequiredObjectDeep<ObjectType extends object> = {
	[KeyType in keyof ObjectType]-?: RequiredDeep<ObjectType[KeyType]>
};

export {};
