import type {DelimiterCasedProperties} from './delimiter-cased-properties';

/**
Convert object properties to kebab case but not recursively.

This can be useful when, for example, converting some API types from a different style.

@see KebabCase
@see KebabCasedPropertiesDeep

@example
```
import type {KebabCasedProperties} from 'type-fest';

interface User {
	userId: number;
	userName: string;
}

const result: KebabCasedProperties<User> = {
	'user-id': 1,
	'user-name': 'Tom',
};
```

@category Change case
@category Template literal
@category Object
*/
export type KebabCasedProperties<Value> = DelimiterCasedProperties<Value, '-'>;
