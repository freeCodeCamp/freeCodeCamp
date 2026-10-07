import type {IsEqual} from './is-equal.d.ts';
import type {IsAny} from './is-any.d.ts';

/**
Returns a boolean for whether the given key is a readonly key of type.

This is useful when writing utility types or schema validators that need to differentiate `readonly` keys.

@example
```
import type {IsReadonlyKeyOf} from 'type-fest';

type User = {
	name: string;
	surname: string;

	readonly id: number;
};

type Admin = {
	name: string;
	id: string;
};

type T1 = IsReadonlyKeyOf<User, 'id'>;
//=> true

type T2 = IsReadonlyKeyOf<User, 'name'>;
//=> false

type T3 = IsReadonlyKeyOf<User, 'name' | 'id'>;
//=> boolean

type T4 = IsReadonlyKeyOf<User | Admin, 'name'>;
//=> false

type T5 = IsReadonlyKeyOf<User | Admin, 'id'>;
//=> boolean
```

@category Type Guard
@category Utilities
*/
export type IsReadonlyKeyOf<Type extends object, Key extends keyof Type> =
	IsAny<Type | Key> extends true ? never
		: Key extends unknown // For distributing `Key`
			? Type extends unknown // For distributing `Type`
				? IsEqual<
					{[K in Key]: Type[Key]},
					{readonly [K in Key]: Type[Key]}
				>
				: never // Should never happen
			: never; // Should never happen

export {};
