import type {OptionalKeysOf} from './optional-keys-of.d.ts';

/**
Extract all required keys from the given type.

This is useful when you want to create a new type that contains different type values for the required keys only or use the list of keys for validation purposes, etc...

@example
```
import type {RequiredKeysOf} from 'type-fest';

declare function createValidation<
	Entity extends object,
	Key extends RequiredKeysOf<Entity> = RequiredKeysOf<Entity>,
>(field: Key, validator: (value: Entity[Key]) => boolean): (entity: Entity) => boolean;

type User = {
	name: string;
	surname: string;
	luckyNumber?: number;
};

const validator1 = createValidation<User>('name', value => value.length < 25);
const validator2 = createValidation<User>('surname', value => value.length < 25);

// @ts-expect-error
const validator3 = createValidation<User>('luckyNumber', value => value > 0);
// Error: Argument of type '"luckyNumber"' is not assignable to parameter of type '"name" | "surname"'.
```

@category Utilities
*/
export type RequiredKeysOf<Type extends object> =
	Type extends unknown // For distributing `Type`
		? Exclude<keyof Type, OptionalKeysOf<Type>>
		: never; // Should never happen

export {};
