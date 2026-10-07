import type {ReadonlyKeysOf} from './readonly-keys-of.d.ts';

/**
Returns a boolean for whether the given type has any readonly fields.

This is useful when you want to create an API whose behavior depends on the presence or absence of readonly fields.

@example
```
import type {HasReadonlyKeys, ReadonlyKeysOf} from 'type-fest';

type UpdateService<Entity extends object> = {
	removeField: HasReadonlyKeys<Entity> extends true
		? (field: ReadonlyKeysOf<Entity>) => Promise<void>
		: never;
};
```

@category Utilities
*/
export type HasReadonlyKeys<BaseType extends object> = ReadonlyKeysOf<BaseType> extends never ? false : true;

export {};
