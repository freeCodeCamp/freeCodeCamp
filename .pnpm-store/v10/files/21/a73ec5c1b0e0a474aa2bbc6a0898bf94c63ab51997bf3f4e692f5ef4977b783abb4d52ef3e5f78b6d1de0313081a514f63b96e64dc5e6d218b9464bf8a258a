import type {WritableKeysOf} from './writable-keys-of.d.ts';

/**
Returns a boolean for whether the given type has any writable fields.

This is useful when you want to create an API whose behavior depends on the presence or absence of writable fields.

@example
```
import type {HasWritableKeys, WritableKeysOf} from 'type-fest';

type UpdateService<Entity extends object> = {
	removeField: HasWritableKeys<Entity> extends true
		? (field: WritableKeysOf<Entity>) => Promise<void>
		: never;
};
```

@category Utilities
*/
export type HasWritableKeys<BaseType extends object> = WritableKeysOf<BaseType> extends never ? false : true;

export {};
