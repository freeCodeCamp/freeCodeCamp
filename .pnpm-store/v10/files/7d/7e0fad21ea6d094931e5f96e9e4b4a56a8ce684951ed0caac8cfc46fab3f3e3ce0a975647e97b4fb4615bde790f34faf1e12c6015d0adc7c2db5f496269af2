import type {IsOptionalKeyOf} from './is-optional-key-of.d.ts';
import type {Not} from './internal/type.d.ts';
import type {IsAny} from './is-any.d.ts';

/**
Returns a boolean for whether the given key is a required key of type.

This is useful when writing utility types or schema validators that need to differentiate `required` keys.

@example
```
import type {IsRequiredKeyOf} from 'type-fest';

type User = {
	name: string;
	surname: string;

	luckyNumber?: number;
};

type Admin = {
	name: string;
	surname?: string;
};

type T1 = IsRequiredKeyOf<User, 'name'>;
//=> true

type T2 = IsRequiredKeyOf<User, 'luckyNumber'>;
//=> false

type T3 = IsRequiredKeyOf<User, 'name' | 'luckyNumber'>;
//=> boolean

type T4 = IsRequiredKeyOf<User | Admin, 'name'>;
//=> true

type T5 = IsRequiredKeyOf<User | Admin, 'surname'>;
//=> boolean
```

@category Type Guard
@category Utilities
*/
export type IsRequiredKeyOf<Type extends object, Key extends keyof Type> =
	IsAny<Type | Key> extends true ? never
		: Key extends keyof Type
			? Not<IsOptionalKeyOf<Type, Key>>
			: false;

export {};
