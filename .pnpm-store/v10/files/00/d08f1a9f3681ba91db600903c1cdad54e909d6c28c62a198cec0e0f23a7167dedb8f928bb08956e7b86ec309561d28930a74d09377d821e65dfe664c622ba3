import type {DelimiterCasedProperties} from './delimiter-cased-properties';

/**
Convert object properties to snake case but not recursively.

This can be useful when, for example, converting some API types from a different style.

@see SnakeCase
@see SnakeCasedPropertiesDeep

@example
```
import type {SnakeCasedProperties} from 'type-fest';

interface User {
	userId: number;
	userName: string;
}

const result: SnakeCasedProperties<User> = {
	user_id: 1,
	user_name: 'Tom',
};
```

@category Change case
@category Template literal
@category Object
*/
export type SnakeCasedProperties<Value> = DelimiterCasedProperties<Value, '_'>;
