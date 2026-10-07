import type {IsAny} from './is-any.d.ts';

/**
Returns a boolean for whether the given key is an optional key of type.

This is useful when writing utility types or schema validators that need to differentiate `optional` keys.

@example
```
import type {IsOptionalKeyOf} from 'type-fest';

type User = {
	name: string;
	surname: string;

	luckyNumber?: number;
};

type Admin = {
	name: string;
	surname?: string;
};

type T1 = IsOptionalKeyOf<User, 'luckyNumber'>;
//=> true

type T2 = IsOptionalKeyOf<User, 'name'>;
//=> false

type T3 = IsOptionalKeyOf<User, 'name' | 'luckyNumber'>;
//=> boolean

type T4 = IsOptionalKeyOf<User | Admin, 'name'>;
//=> false

type T5 = IsOptionalKeyOf<User | Admin, 'surname'>;
//=> boolean
```

@category Type Guard
@category Utilities
*/
export type IsOptionalKeyOf<Type extends object, Key extends keyof Type> =
	IsAny<Type | Key> extends true ? never
		: Key extends keyof Type
			? Type extends Record<Key, Type[Key]>
				? false
				: true
			: false;

export {};
