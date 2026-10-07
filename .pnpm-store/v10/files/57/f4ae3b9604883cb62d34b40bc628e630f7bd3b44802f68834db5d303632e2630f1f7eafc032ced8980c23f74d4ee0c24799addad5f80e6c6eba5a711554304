import type {DelimiterCase} from './delimiter-case';

/**
Convert object properties to delimiter case recursively.

This can be useful when, for example, converting some API types from a different style.

@see DelimiterCase
@see DelimiterCasedProperties

@example
```
import type {DelimiterCasedPropertiesDeep} from 'type-fest';

interface User {
	userId: number;
	userName: string;
}

interface UserWithFriends {
	userInfo: User;
	userFriends: User[];
}

const result: DelimiterCasedPropertiesDeep<UserWithFriends, '-'> = {
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
export type DelimiterCasedPropertiesDeep<
	Value,
	Delimiter extends string,
> = Value extends Function | Date | RegExp
	? Value
	: Value extends Array<infer U>
	? Array<DelimiterCasedPropertiesDeep<U, Delimiter>>
	: Value extends Set<infer U>
	? Set<DelimiterCasedPropertiesDeep<U, Delimiter>> : {
			[K in keyof Value as DelimiterCase<
				K,
				Delimiter
			>]: DelimiterCasedPropertiesDeep<Value[K], Delimiter>;
	};
