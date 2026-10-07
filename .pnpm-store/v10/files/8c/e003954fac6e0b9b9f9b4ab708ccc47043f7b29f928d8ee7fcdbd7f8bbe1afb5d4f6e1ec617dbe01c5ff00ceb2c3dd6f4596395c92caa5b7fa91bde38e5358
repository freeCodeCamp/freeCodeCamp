import type {ApplyDefaultOptions} from './internal/index.d.ts';
import type {Simplify} from './simplify.d.ts';

export type SetFieldTypeOptions = {
	/**
	Preserve optional and readonly modifiers for properties being updated.

	NOTE: Property modifiers will always be preserved for properties that are not being updated.

	@default true
	*/
	preservePropertyModifiers?: boolean;
};

type DefaultSetFieldTypeOptions = {
	preservePropertyModifiers: true;
};

/**
Create a type that changes the type of the given keys.

Use-cases:
- Creating variations of a base model.
- Fixing incorrect external types.

@see `Merge` if you need to change multiple properties to different types.

@example
```
import type {SetFieldType} from 'type-fest';

type MyModel = {
	readonly id: number;
	readonly createdAt: Date;
	updatedAt?: Date;
};

type MyModelApi1 = SetFieldType<MyModel, 'createdAt' | 'updatedAt', string>;
// {
// 	readonly id: number;
// 	readonly createdAt: string;
// 	updatedAt?: string;
// }

// `preservePropertyModifiers` option can be set to `false` if you want to remove property modifiers for properties being updated
type MyModelApi2 = SetFieldType<MyModel, 'createdAt' | 'updatedAt', string, {preservePropertyModifiers: false}>;
// {
// 	readonly id: number;
// 	createdAt: string; // no longer readonly
// 	updatedAt: string; // no longer optional
// }
```

@category Object
*/
export type SetFieldType<BaseType, Keys extends keyof BaseType, NewType, Options extends SetFieldTypeOptions = {}> =
	_SetFieldType<BaseType, Keys, NewType, ApplyDefaultOptions<SetFieldTypeOptions, DefaultSetFieldTypeOptions, Options>>;

type _SetFieldType<BaseType, Keys extends keyof BaseType, NewType, Options extends Required<SetFieldTypeOptions>> =
	Simplify<{
		[P in keyof BaseType]: P extends Keys ? NewType : BaseType[P];
	} & (
		// `Record` is used to remove property modifiers
		Options['preservePropertyModifiers'] extends false ? Record<Keys, NewType> : unknown
	)>;

export {};
