import type {IsOptionalKeyOf} from './is-optional-key-of.d.ts';

/**
Extract all optional keys from the given type.

This is useful when you want to create a new type that contains different type values for the optional keys only.

@example
```
import type {OptionalKeysOf, Except} from 'type-fest';

type User = {
	name: string;
	surname: string;

	luckyNumber?: number;
};

const REMOVE_FIELD = Symbol('remove field symbol');
type UpdateOperation<Entity extends object> = Except<Partial<Entity>, OptionalKeysOf<Entity>> & {
	[Key in OptionalKeysOf<Entity>]?: Entity[Key] | typeof REMOVE_FIELD;
};

const update1: UpdateOperation<User> = {
	name: 'Alice',
};

const update2: UpdateOperation<User> = {
	name: 'Bob',
	luckyNumber: REMOVE_FIELD,
};
```

@category Utilities
*/
export type OptionalKeysOf<Type extends object> =
	Type extends unknown // For distributing `Type`
		? (keyof {[Key in keyof Type as
			IsOptionalKeyOf<Type, Key> extends false
				? never
				: Key
			]: never
		}) & keyof Type // Intersect with `keyof Type` to ensure result of `OptionalKeysOf<Type>` is always assignable to `keyof Type`
		: never; // Should never happen

export {};
