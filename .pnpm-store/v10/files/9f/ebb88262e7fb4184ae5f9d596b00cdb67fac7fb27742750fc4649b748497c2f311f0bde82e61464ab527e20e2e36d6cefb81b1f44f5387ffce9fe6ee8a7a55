import type {DelimiterCasedPropertiesDeep} from './delimiter-cased-properties-deep';

/**
Convert object properties to snake case recursively.

This can be useful when, for example, converting some API types from a different style.

@see SnakeCase
@see SnakeCasedProperties

@example
```
import type {SnakeCasedPropertiesDeep} from 'type-fest';

interface User {
	userId: number;
	userName: string;
}

interface UserWithFriends {
	userInfo: User;
	userFriends: User[];
}

const result: SnakeCasedPropertiesDeep<UserWithFriends> = {
	user_info: {
		user_id: 1,
		user_name: 'Tom',
	},
	user_friends: [
		{
			user_id: 2,
			user_name: 'Jerry',
		},
		{
			user_id: 3,
			user_name: 'Spike',
		},
	],
};
```

@category Change case
@category Template literal
@category Object
*/
export type SnakeCasedPropertiesDeep<Value> = DelimiterCasedPropertiesDeep<Value, '_'>;
