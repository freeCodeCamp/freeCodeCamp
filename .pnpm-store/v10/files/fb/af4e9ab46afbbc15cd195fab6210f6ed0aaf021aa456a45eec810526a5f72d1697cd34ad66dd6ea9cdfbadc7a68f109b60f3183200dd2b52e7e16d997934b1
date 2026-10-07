import type {NonRecursiveType} from './internal/index.d.ts';
import type {IsNever} from './is-never.d.ts';
import type {IsUnion} from './is-union.d.ts';
import type {Simplify} from './simplify.d.ts';
import type {UnknownArray} from './unknown-array.d.ts';

/**
Create a type with shared fields from a union of object types.

Use-cases:
- You want a safe object type where each key exists in the union object.
- You want to focus on the common fields of the union type and don't want to have to care about the other fields.

@example
```
import type {SharedUnionFields} from 'type-fest';

type Cat = {
	name: string;
	type: 'cat';
	catType: string;
};

type Dog = {
	name: string;
	type: 'dog';
	dogType: string;
};

function displayPetInfo(petInfo: Cat | Dog) {
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

function displayPetInfoWithSharedUnionFields(petInfo: SharedUnionFields<Cat | Dog>) {
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

@see {@link SharedUnionFieldsDeep}
@see {@link AllUnionFields}

@category Object
@category Union
*/
export type SharedUnionFields<Union> =
	Extract<Union, NonRecursiveType | ReadonlyMap<unknown, unknown> | ReadonlySet<unknown> | UnknownArray> extends infer SkippedMembers
		? Exclude<Union, SkippedMembers> extends infer RelevantMembers
			? // eslint-disable-line @stylistic/operator-linebreak
			| SkippedMembers
			| (IsNever<RelevantMembers> extends true
				? never
				: Simplify<Pick<RelevantMembers, keyof RelevantMembers>>)
			: never
		: never;

export {};
