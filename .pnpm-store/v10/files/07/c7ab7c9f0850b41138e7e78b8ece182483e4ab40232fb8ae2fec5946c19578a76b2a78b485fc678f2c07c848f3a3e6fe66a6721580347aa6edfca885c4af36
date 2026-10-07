// TODO: Remove this when we target TypeScript >=3.5.
// eslint-disable-next-line @typescript-eslint/generic-type-naming
type _Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

/**
Create a type that requires exactly one of the given keys and disallows more. The remaining keys are kept as is.

Use-cases:
- Creating interfaces for components that only need one of the keys to display properly.
- Declaring generic keys in a single place for a single use-case that gets narrowed down via `RequireExactlyOne`.

The caveat with `RequireExactlyOne` is that TypeScript doesn't always know at compile time every key that will exist at runtime. Therefore `RequireExactlyOne` can't do anything to prevent extra keys it doesn't know about.

@example
```
import {RequireExactlyOne} from 'type-fest';

type Responder = {
	text: () => string;
	json: () => string;
	secure: boolean;
};

const responder: RequireExactlyOne<Responder, 'text' | 'json'> = {
	// Adding a `text` key here would cause a compile error.

	json: () => '{"message": "ok"}',
	secure: true
};
```
*/
export type RequireExactlyOne<ObjectType, KeysType extends keyof ObjectType = keyof ObjectType> =
	{[Key in KeysType]: (
		Required<Pick<ObjectType, Key>> &
		Partial<Record<Exclude<KeysType, Key>, never>>
	)}[KeysType] & _Omit<ObjectType, KeysType>;
