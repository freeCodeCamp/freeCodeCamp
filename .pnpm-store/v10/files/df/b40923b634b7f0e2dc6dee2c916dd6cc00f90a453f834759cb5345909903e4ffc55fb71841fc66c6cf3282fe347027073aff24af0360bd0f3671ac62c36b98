import type {CamelCase} from './camel-case';

/**
Convert object properties to camel case recursively.

This can be useful when, for example, converting some API types from a different style.

@see CamelCasedProperties
@see CamelCase

@example
```
import type {CamelCasedPropertiesDeep} from 'type-fest';

interface User {
	UserId: number;
	UserName: string;
}

interface UserWithFriends {
	UserInfo: User;
	UserFriends: User[];
}

const result: CamelCasedPropertiesDeep<UserWithFriends> = {
	userInfo: {
		userId: 1,
		userName: 'Tom',
	},
	userFriends: [
		{
			userId: 2,
			userName: 'Jerry',
		},
		{
			userId: 3,
			userName: 'Spike',
		},
	],
};
```

@category Change case
@category Template literal
@category Object
*/
export type CamelCasedPropertiesDeep<Value> = Value extends Function
	? Value
	: Value extends Array<infer U>
	? Array<CamelCasedPropertiesDeep<U>>
	: Value extends Set<infer U>
	? Set<CamelCasedPropertiesDeep<U>> : {
			[K in keyof Value as CamelCase<K>]: CamelCasedPropertiesDeep<Value[K]>;
	};
