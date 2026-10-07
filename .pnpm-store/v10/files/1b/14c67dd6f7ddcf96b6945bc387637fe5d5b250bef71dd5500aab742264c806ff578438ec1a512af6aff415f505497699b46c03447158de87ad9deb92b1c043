import type {_DefaultDelimiterCaseOptions, DelimiterCase} from './delimiter-case.d.ts';
import type {ApplyDefaultOptions, NonRecursiveType} from './internal/index.d.ts';
import type {UnknownArray} from './unknown-array.d.ts';
import type {WordsOptions} from './words.d.ts';

/**
Convert object properties to a custom string delimiter casing recursively.

This can be useful when, for example, converting some API types from a different style.

@see {@link DelimiterCase}
@see {@link DelimiterCasedProperties}

@example
```
import type {DelimiterCasedPropertiesDeep} from 'type-fest';

type User = {
	userId: number;
	userName: string;
};

type UserWithFriends = {
	userInfo: User;
	userFriends: User[];
};

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

const splitOnNumbers: DelimiterCasedPropertiesDeep<{line1: {line2: [{line3: string}]}}, '-', {splitOnNumbers: true}> = {
	'line-1': {
		'line-2': [
			{
				'line-3': 'string',
			},
		],
	},
};

const splitOnPunctuation: DelimiterCasedPropertiesDeep<{'user@info': {'user::id': number; 'user::name': string}}, '-', {splitOnPunctuation: true}> = {
	'user-info': {
		'user-id': 1,
		'user-name': 'Tom',
	},
};
```

@category Change case
@category Template literal
@category Object
*/
export type DelimiterCasedPropertiesDeep<
	Value,
	Delimiter extends string,
	Options extends WordsOptions = {},
> = _DelimiterCasedPropertiesDeep<Value, Delimiter, ApplyDefaultOptions<WordsOptions, _DefaultDelimiterCaseOptions, Options>>;

type _DelimiterCasedPropertiesDeep<
	Value,
	Delimiter extends string,
	Options extends Required<WordsOptions>,
> = Value extends NonRecursiveType
	? Value
	: Value extends UnknownArray
		? DelimiterCasedPropertiesArrayDeep<Value, Delimiter, Options>
		: Value extends Set<infer U>
			? Set<_DelimiterCasedPropertiesDeep<U, Delimiter, Options>>
			: Value extends object
				? {
					[K in keyof Value as DelimiterCase<K, Delimiter, Options>]:
					_DelimiterCasedPropertiesDeep<Value[K], Delimiter, Options>
				}
				: Value;

// This is a copy of CamelCasedPropertiesArrayDeep (see: camel-cased-properties-deep.d.ts).
// These types should be kept in sync.
type DelimiterCasedPropertiesArrayDeep<
	Value extends UnknownArray,
	Delimiter extends string,
	Options extends Required<WordsOptions>,
> = Value extends []
	? []
	// Trailing spread array
	:	Value extends [infer U, ...infer V]
		? [_DelimiterCasedPropertiesDeep<U, Delimiter, Options>, ..._DelimiterCasedPropertiesDeep<V, Delimiter, Options>]
		: Value extends readonly [infer U, ...infer V]
			? readonly [_DelimiterCasedPropertiesDeep<U, Delimiter, Options>, ..._DelimiterCasedPropertiesDeep<V, Delimiter, Options>]
			// Leading spread array
			: Value extends [...infer U, infer V]
				? [..._DelimiterCasedPropertiesDeep<U, Delimiter, Options>, _DelimiterCasedPropertiesDeep<V, Delimiter, Options>]
				: Value extends readonly [...infer U, infer V]
					? readonly [..._DelimiterCasedPropertiesDeep<U, Delimiter, Options>, _DelimiterCasedPropertiesDeep<V, Delimiter, Options>]
					// Array
					: Value extends Array<infer U>
						? Array<_DelimiterCasedPropertiesDeep<U, Delimiter, Options>>
						: Value extends ReadonlyArray<infer U>
							? ReadonlyArray<_DelimiterCasedPropertiesDeep<U, Delimiter, Options>>
							: never;

export {};
