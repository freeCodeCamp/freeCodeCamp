/**
Create a type that requires all of the given keys or none of the given keys. The remaining keys are kept as is.

Use-cases:
- Creating interfaces for components with mutually-inclusive keys.

The caveat with `RequireAllOrNone` is that TypeScript doesn't always know at compile time every key that will exist at runtime. Therefore `RequireAllOrNone` can't do anything to prevent extra keys it doesn't know about.

@example
```
import type {RequireAllOrNone} from 'type-fest';

type Responder = {
	text?: () => string;
	json?: () => string;
	secure: boolean;
};

const responder1: RequireAllOrNone<Responder, 'text' | 'json'> = {
	secure: true
};

const responder2: RequireAllOrNone<Responder, 'text' | 'json'> = {
	text: () => '{"message": "hi"}',
	json: () => '{"message": "ok"}',
	secure: true
};
```

@category Object
*/
export type RequireAllOrNone<ObjectType, KeysType extends keyof ObjectType = never> = (
	| Required<Pick<ObjectType, KeysType>> // Require all of the given keys.
	| Partial<Record<KeysType, never>> // Require none of the given keys.
) &
	Omit<ObjectType, KeysType>; // The rest of the keys.
