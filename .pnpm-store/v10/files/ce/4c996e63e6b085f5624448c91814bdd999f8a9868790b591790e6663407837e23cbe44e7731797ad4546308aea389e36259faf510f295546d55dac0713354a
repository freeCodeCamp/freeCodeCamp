import {Except} from './except';

/**
Create a type that requires at least one of the given properties. The remaining properties are kept as is.

@example
```
import {RequireAtLeastOne} from 'type-fest';

type Responder = {
	text?: () => string;
	json?: () => string;

	secure?: boolean;
};

const responder: RequireAtLeastOne<Responder, 'text' | 'json'> = {
	json: () => '{"message": "ok"}',
	secure: true
};
```
*/
export type RequireAtLeastOne<ObjectType, KeysType extends keyof ObjectType = keyof ObjectType> =
	{
		// For each Key in KeysType make a mapped type
		[Key in KeysType]: (
			// …by picking that Key's type and making it required
			Required<Pick<ObjectType, Key>>
		)
	}[KeysType]
	// …then, make intersection types by adding the remaining properties to each mapped type.
	& Except<ObjectType, KeysType>;
