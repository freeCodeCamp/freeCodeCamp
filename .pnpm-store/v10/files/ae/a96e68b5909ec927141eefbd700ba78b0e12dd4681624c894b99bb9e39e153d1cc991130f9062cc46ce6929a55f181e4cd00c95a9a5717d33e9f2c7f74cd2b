import type {CamelCase} from './camel-case';

/**
Convert object properties to camel case but not recursively.

This can be useful when, for example, converting some API types from a different style.

@see CamelCasedPropertiesDeep
@see CamelCase

@example
```
import type {CamelCasedProperties} from 'type-fest';

interface User {
	UserId: number;
	UserName: string;
}

const result: CamelCasedProperties<User> = {
	userId: 1,
	userName: 'Tom',
};
```

@category Change case
@category Template literal
@category Object
*/
export type CamelCasedProperties<Value> = Value extends Function
	? Value
	: Value extends Array<infer U>
	? Value
	: {
			[K in keyof Value as CamelCase<K>]: Value[K];
	};
