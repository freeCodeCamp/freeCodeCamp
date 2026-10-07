/**
Extract all required keys from the given type.

This is useful when you want to create a new type that contains different type values for the required keys only or use the list of keys for validation purposes, etc...

@example
```
import type {RequiredKeysOf} from 'type-fest';

declare function createValidation<Entity extends object, Key extends RequiredKeysOf<Entity> = RequiredKeysOf<Entity>>(field: Key, validator: (value: Entity[Key]) => boolean): ValidatorFn;

interface User {
	name: string;
	surname: string;

	luckyNumber?: number;
}

const validator1 = createValidation<User>('name', value => value.length < 25);
const validator2 = createValidation<User>('surname', value => value.length < 25);
```

@category Utilities
*/
export type RequiredKeysOf<BaseType extends object> = Exclude<{
	[Key in keyof BaseType]: BaseType extends Record<Key, BaseType[Key]>
		? Key
		: never
}[keyof BaseType], undefined>;
