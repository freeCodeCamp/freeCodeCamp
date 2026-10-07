import type {ApplyDefaultOptions} from './internal/object.d.ts';
import type {IfNotAnyOrNever, NonRecursiveType} from './internal/type.d.ts';
import type {OptionalKeysOf} from './optional-keys-of.d.ts';
import type {Simplify} from './simplify.d.ts';
import type {UnknownArray} from './unknown-array.d.ts';

/**
@see {@link Schema}
*/
export type SchemaOptions = {
	/**
	By default, this affects elements in array and tuple types. You can change this by passing `{recurseIntoArrays: false}` as the third type argument:
	- If `recurseIntoArrays` is set to `true` (default), array elements will be recursively processed as well.
	- If `recurseIntoArrays` is set to `false`, arrays will not be recursively processed, and the entire array will be replaced with the given value type.

	@example
	```
	import type {Schema} from 'type-fest';

	type Participants = {
		attendees: string[];
		speakers: string[];
	};

	type ParticipantsWithMetadata = Schema<Participants, {id: number; name: string}, {recurseIntoArrays: true}>;
	//=> {
	// 	attendees: {
	// 		id: number;
	// 		name: string;
	// 	}[];
	// 	speakers: {
	// 		id: number;
	// 		name: string;
	// 	}[];
	// }

	type ParticipantsCount = Schema<Participants, number, {recurseIntoArrays: false}>;
	//=> {attendees: number; speakers: number}
	```

	@default true
	*/
	recurseIntoArrays?: boolean;
};

type DefaultSchemaOptions = {
	recurseIntoArrays: true;
};

/**
Create a deep version of another object type where property values are recursively replaced into a given value type.

Use-cases:
- Form validation: Define how each field should be validated.
- Form settings: Define configuration for input fields.
- Parsing: Define types that specify special behavior for specific fields.

@example
```
import type {Schema} from 'type-fest';

type User = {
	id: string;
	name: {
		firstname: string;
		lastname: string;
	};
	created: Date;
	active: boolean;
	passwordHash: string;
	location: [latitude: number, longitude: number];
};

type UserMask = Schema<User, 'mask' | 'hide' | 'show'>;

const userMaskSettings: UserMask = {
	id: 'show',
	name: {
		firstname: 'show',
		lastname: 'mask',
	},
	created: 'show',
	active: 'show',
	passwordHash: 'hide',
	location: ['hide', 'hide'],
};
```

@see {@link SchemaOptions}

@category Object
*/
export type Schema<Type, Value, Options extends SchemaOptions = {}> =
	IfNotAnyOrNever<Type,
		_Schema<Type, Value, ApplyDefaultOptions<SchemaOptions, DefaultSchemaOptions, Options>>,
		Value, Value>;

type _Schema<Type, Value, Options extends Required<SchemaOptions>> =
	Type extends NonRecursiveType | Map<unknown, unknown> | Set<unknown> | ReadonlyMap<unknown, unknown> | ReadonlySet<unknown>
		? Value
		: Type extends UnknownArray
			? Options['recurseIntoArrays'] extends false
				? Value
				: SchemaHelper<Type, Value, Options>
			: SchemaHelper<Type, Value, Options>;

/**
Internal helper for {@link _Schema}.

Recursively transforms the value of each property in objects and arrays.
*/
type SchemaHelper<Type, Value, Options extends Required<SchemaOptions>> = Simplify<{
	[Key in keyof Type]: _Schema<
		Key extends OptionalKeysOf<Type & object> ? Exclude<Type[Key], undefined> : Type[Key], // Remove `| undefined` when accessing optional properties
		Value,
		Options>
}>;

export {};
