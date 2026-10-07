import type {_DefaultDelimiterCaseOptions} from './delimiter-case.d.ts';
import type {DelimiterCasedPropertiesDeep} from './delimiter-cased-properties-deep.d.ts';
import type {ApplyDefaultOptions} from './internal/index.d.ts';
import type {WordsOptions} from './words.d.ts';

/**
Convert object properties to snake case recursively.

This can be useful when, for example, converting some API types from a different style.

@see {@link SnakeCase}
@see {@link SnakeCasedProperties}

@example
```
import type {SnakeCasedPropertiesDeep} from 'type-fest';

type User = {
	userId: number;
	userName: string;
};

type UserWithFriends = {
	userInfo: User;
	userFriends: User[];
};

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

const splitOnNumbers: SnakeCasedPropertiesDeep<{line1: {line2: [{line3: string}]}}, {splitOnNumbers: true}> = {
	line_1: {
		line_2: [
			{
				line_3: 'string',
			},
		],
	},
};

const splitOnPunctuation: SnakeCasedPropertiesDeep<{'user@info': {'user::id': number; 'user::name': string}}, {splitOnPunctuation: true}> = {
	'user_info': {
		'user_id': 1,
		'user_name': 'Tom',
	},
};
```

@category Change case
@category Template literal
@category Object
*/
export type SnakeCasedPropertiesDeep<
	Value,
	Options extends WordsOptions = {},
> = DelimiterCasedPropertiesDeep<Value, '_', ApplyDefaultOptions<WordsOptions, _DefaultDelimiterCaseOptions, Options>>;

export {};
