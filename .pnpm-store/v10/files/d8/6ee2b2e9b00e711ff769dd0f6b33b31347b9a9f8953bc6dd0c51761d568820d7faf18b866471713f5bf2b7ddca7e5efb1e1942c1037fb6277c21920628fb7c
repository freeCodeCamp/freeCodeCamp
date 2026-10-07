import type {RequireExactlyOne} from './require-exactly-one.d.ts';
import type {IfNotAnyOrNever, RequireNone} from './internal/index.d.ts';
import type {If} from './if.d.ts';
import type {IsAny} from './is-any.d.ts';
import type {IsNever} from './is-never.d.ts';

/**
Create a type that requires exactly one of the given keys or none of the given keys, while keeping the remaining keys as is.

@example
```
import type {RequireOneOrNone} from 'type-fest';

type Responder = RequireOneOrNone<{
	text: () => string;
	json: () => string;
	secure: boolean;
}, 'text' | 'json'>;

const responder1: Responder = {
	secure: true,
};

const responder2: Responder = {
	text: () => '{"message": "hi"}',
	secure: true,
};

const responder3: Responder = {
	json: () => '{"message": "ok"}',
	secure: true,
};
```

@category Object
*/
export type RequireOneOrNone<ObjectType, KeysType extends keyof ObjectType = keyof ObjectType> =
	IfNotAnyOrNever<ObjectType,
		If<IsNever<KeysType>,
			ObjectType,
			_RequireOneOrNone<ObjectType, If<IsAny<KeysType>, keyof ObjectType, KeysType>>
		>>;

type _RequireOneOrNone<ObjectType, KeysType extends keyof ObjectType> = (
	| RequireExactlyOne<ObjectType, KeysType>
	| RequireNone<KeysType>
) & Omit<ObjectType, KeysType>; // Ignore unspecified keys.

export {};
