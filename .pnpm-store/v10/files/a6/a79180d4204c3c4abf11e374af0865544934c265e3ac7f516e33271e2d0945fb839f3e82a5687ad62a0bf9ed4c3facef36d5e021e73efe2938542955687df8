import type {PascalCase} from './pascal-case';

/**
Convert object properties to pascal case but not recursively.

This can be useful when, for example, converting some API types from a different style.

@see PascalCase
@see PascalCasedPropertiesDeep

@example
```
import type {PascalCasedProperties} from 'type-fest';

interface User {
	userId: number;
	userName: string;
}

const result: PascalCasedProperties<User> = {
	UserId: 1,
	UserName: 'Tom',
};
```

@category Change case
@category Template literal
@category Object
*/
export type PascalCasedProperties<Value> = Value extends Function
	? Value
	: Value extends Array<infer U>
	? Value
	: {[K in keyof Value as PascalCase<K>]: Value[K]};
