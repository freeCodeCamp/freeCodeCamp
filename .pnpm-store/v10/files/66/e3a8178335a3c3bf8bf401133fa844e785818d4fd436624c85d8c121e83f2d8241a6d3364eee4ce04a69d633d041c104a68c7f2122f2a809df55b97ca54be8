import type {NonRecursiveType, UnionMin, UnionMax, TupleLength, StaticPartOfArray, VariablePartOfArray, IsArrayReadonly, SetArrayAccess, ApplyDefaultOptions} from './internal/index.d.ts';
import type {IsNever} from './is-never.d.ts';
import type {UnknownArray} from './unknown-array.d.ts';

/**
SharedUnionFieldsDeep options.

@see {@link SharedUnionFieldsDeep}
*/
export type SharedUnionFieldsDeepOptions = {
	/**
	When set to true, this option impacts each element within arrays or tuples. If all union values are arrays or tuples, it constructs an array of the shortest possible length, ensuring every element exists in the union array.

	@default false
 	*/
	recurseIntoArrays?: boolean;
};

type DefaultSharedUnionFieldsDeepOptions = {
	recurseIntoArrays: false;
};

/**
Create a type with shared fields from a union of object types, deeply traversing nested structures.

Use the {@link SharedUnionFieldsDeepOptions `Options`} to specify the behavior for arrays.

Use-cases:
- You want a safe object type where each key exists in the union object.
- You want to focus on the common fields of the union type and don't want to have to care about the other fields.

@example
```
import type {SharedUnionFieldsDeep} from 'type-fest';

type Cat = {
	info: {
		name: string;
		type: 'cat';
		catType: string;
	};
};

type Dog = {
	info: {
		name: string;
		type: 'dog';
		dogType: string;
	};
};

function displayPetInfo(petInfo: (Cat | Dog)['info']) {
	// typeof petInfo =>
	// {
	// 	name: string;
	// 	type: 'cat';
	// 	catType: string; // Needn't care about this field, because it's not a common pet info field.
	// } | {
	// 	name: string;
	// 	type: 'dog';
	// 	dogType: string; // Needn't care about this field, because it's not a common pet info field.
	// }

	// petInfo type is complex and have some needless fields

	console.log('name:', petInfo.name);
	console.log('type:', petInfo.type);
}

function displayPetInfoWithSharedUnionFieldsDeep(petInfo: SharedUnionFieldsDeep<Cat | Dog>['info']) {
	// typeof petInfo =>
	// {
	// 	name: string;
	// 	type: 'cat' | 'dog';
	// }

	// petInfo type is simple and clear

	console.log('name:', petInfo.name);
	console.log('type:', petInfo.type);
}
```

@see {@link SharedUnionFields}

@category Object
@category Union
*/
export type SharedUnionFieldsDeep<Union, Options extends SharedUnionFieldsDeepOptions = {}> =
	ApplyDefaultOptions<SharedUnionFieldsDeepOptions, DefaultSharedUnionFieldsDeepOptions, Options> extends infer OptionsWithDefaults extends Required<SharedUnionFieldsDeepOptions>
	// `Union extends` will convert `Union`
	// to a [distributive conditional type](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#distributive-conditional-types).
	// But this is not what we want, so we need to wrap `Union` with `[]` to prevent it.
		? [Union] extends [NonRecursiveType | ReadonlyMap<unknown, unknown> | ReadonlySet<unknown>]
			? Union
			: [Union] extends [UnknownArray]
				? OptionsWithDefaults['recurseIntoArrays'] extends true
					? SetArrayAccess<SharedArrayUnionFieldsDeep<Union, OptionsWithDefaults>, IsArrayReadonly<Union>>
					: Union
				: [Union] extends [object]
					? SharedObjectUnionFieldsDeep<Union, OptionsWithDefaults>
					: Union
		: never;

/**
Same as `SharedUnionFieldsDeep`, but accepts only `object`s and as inputs. Internal helper for `SharedUnionFieldsDeep`.
*/
type SharedObjectUnionFieldsDeep<Union, Options extends Required<SharedUnionFieldsDeepOptions>> =
	// `keyof Union` can extract the same key in union type, if there is no same key, return never.
	keyof Union extends infer Keys
		? IsNever<Keys> extends false
			? {
				[Key in keyof Union]:
				Union[Key] extends NonRecursiveType
					? Union[Key]
					// Remove `undefined` from the union to support optional
					// fields, then recover `undefined` if union was already undefined.
					: SharedUnionFieldsDeep<Exclude<Union[Key], undefined>, Options> | (
						undefined extends Required<Union>[Key] ? undefined : never
					)
			}
			: {}
		: Union;

/**
Same as `SharedUnionFieldsDeep`, but accepts only `UnknownArray`s and as inputs. Internal helper for `SharedUnionFieldsDeep`.
*/
type SharedArrayUnionFieldsDeep<Union extends UnknownArray, Options extends Required<SharedUnionFieldsDeepOptions>> =
	// Restore the readonly modifier of the array.
	SetArrayAccess<
		InternalSharedArrayUnionFieldsDeep<Union, Options>,
		IsArrayReadonly<Union>
	>;

/**
Internal helper for `SharedArrayUnionFieldsDeep`. Needn't care the `readonly` modifier of arrays.
*/
type InternalSharedArrayUnionFieldsDeep<
	Union extends UnknownArray,
	Options extends Required<SharedUnionFieldsDeepOptions>,
	ResultTuple extends UnknownArray = [],
> =
	// We should build a minimum possible length tuple where each element in the tuple exists in the union tuple.
	IsNever<TupleLength<Union>> extends true
		// Rule 1: If all the arrays in the union have non-fixed lengths,
		// like `Array<string> | [number, ...string[]]`
		// we should build a tuple that is [the_fixed_parts_of_union, ...the_rest_of_union[]].
		// For example: `InternalSharedArrayUnionFieldsDeep<Array<string> | [number, ...string[]]>`
		// => `[string | number, ...string[]]`.
		? ResultTuple['length'] extends UnionMax<StaticPartOfArray<Union>['length']>
			? [
				// The fixed-length part of the tuple.
				...ResultTuple,
				// The rest of the union.
				// Due to `ResultTuple` is the maximum possible fixed-length part of the tuple,
				// so we can use `StaticPartOfArray` to get the rest of the union.
				...Array<
					SharedUnionFieldsDeep<VariablePartOfArray<Union>[number], Options>
				>,
			]
			// Build the fixed-length tuple recursively.
			: InternalSharedArrayUnionFieldsDeep<
				Union, Options,
				[...ResultTuple, SharedUnionFieldsDeep<Union[ResultTuple['length']], Options>]
			>
		// Rule 2: If at least one of the arrays in the union have fixed lengths,
		// like `Array<string> | [number, string]`,
		// we should build a tuple of the smallest possible length to ensure any
		// item in the result tuple exists in the union tuple.
		// For example: `InternalSharedArrayUnionFieldsDeep<Array<string> | [number, string]>`
		// => `[string | number, string]`.
		: ResultTuple['length'] extends UnionMin<TupleLength<Union>>
			? ResultTuple
			// As above, build tuple recursively.
			: InternalSharedArrayUnionFieldsDeep<
				Union, Options,
				[...ResultTuple, SharedUnionFieldsDeep<Union[ResultTuple['length']], Options>]
			>;

export {};
