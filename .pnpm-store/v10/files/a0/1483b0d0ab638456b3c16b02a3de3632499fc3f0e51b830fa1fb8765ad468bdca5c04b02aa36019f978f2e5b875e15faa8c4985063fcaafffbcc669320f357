import type {DelimiterCasedPropertiesDeep} from './delimiter-cased-properties-deep';

/**
Convert object properties to kebab case recursively.

This can be useful when, for example, converting some API types from a different style.

@see KebabCase
@see KebabCasedProperties

@example
```
import type [KebabCasedPropertiesDeep] from 'type-fest';

interface User {
	userId: number;
	userName: string;
}

interface UserWithFriends {
	userInfo: User;
	userFriends: User[];
}

const result: KebabCasedPropertiesDeep<UserWithFriends> = {
	'user-info': {
		'user-id': 1,
		'user-name': 'Tom',
	},
	'user-friends': [
		{
			'user-id': 2,
			'user-name': 'Jerry',
		},
		{
			'user-id': 3,
			'user-name': 'Spike',
		},
	],
};
```

@category Change case
@category Template literal
@category Object
*/
export type KebabCasedPropertiesDeep<Value> = DelimiterCasedPropertiesDeep<Value, '-'>;
