import type {If} from './if.d.ts';
import type {IfNotAnyOrNever} from './internal/index.d.ts';
import type {IsAny} from './is-any.d.ts';
import type {IsNever} from './is-never.d.ts';

/**
Create a type that requires exactly one of the given keys and disallows more, while keeping the remaining keys as is.

Use-cases:
- Creating interfaces for components that only need one of the keys to display properly.
- Declaring generic keys in a single place for a single use-case that gets narrowed down via `RequireExactlyOne`.

The caveat with `RequireExactlyOne` is that TypeScript doesn't always know at compile time every key that will exist at runtime. Therefore `RequireExactlyOne` can't do anything to prevent extra keys it doesn't know about.

@example
```
import type {RequireExactlyOne} from 'type-fest';

type Responder = {
	text: () => string;
	json: () => string;
	secure: boolean;
};

const responder: RequireExactlyOne<Responder, 'text' | 'json'> = {
	// Adding a `text` key here would cause a compile error.

	json: () => '{"message": "ok"}',
	secure: true,
};
```

@category Object
*/
export type RequireExactlyOne<ObjectType, KeysType extends keyof ObjectType = keyof ObjectType> =
	IfNotAnyOrNever<ObjectType,
		If<IsNever<KeysType>,
			never,
			_RequireExactlyOne<ObjectType, If<IsAny<KeysType>, keyof ObjectType, KeysType>>
		>>;

type _RequireExactlyOne<ObjectType, KeysType extends keyof ObjectType> =
	{[Key in KeysType]: (
		Required<Pick<ObjectType, Key>>
		& Partial<Record<Exclude<KeysType, Key>, never>>
	)}[KeysType] & Omit<ObjectType, KeysType>;

export {};
