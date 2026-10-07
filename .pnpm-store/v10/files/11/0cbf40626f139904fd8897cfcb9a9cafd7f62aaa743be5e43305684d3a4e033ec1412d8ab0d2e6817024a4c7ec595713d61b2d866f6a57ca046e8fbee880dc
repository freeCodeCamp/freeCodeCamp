import type {CamelCase, CamelCaseOptions, _DefaultCamelCaseOptions} from './camel-case.d.ts';
import type {ApplyDefaultOptions, NonRecursiveType} from './internal/index.d.ts';
import type {UnknownArray} from './unknown-array.d.ts';

/**
Convert object properties to camel case recursively.

This can be useful when, for example, converting some API types from a different style.

@see {@link CamelCasedProperties}
@see {@link CamelCase}

@example
```
import type {CamelCasedPropertiesDeep} from 'type-fest';

type User = {
	UserId: number;
	UserName: string;
};

type UserWithFriends = {
	UserInfo: User;
	UserFriends: User[];
};

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

const preserveConsecutiveUppercase: CamelCasedPropertiesDeep<{fooBAR: {fooBARBiz: [{fooBARBaz: string}]}}, {preserveConsecutiveUppercase: true}> = {
	fooBAR: {
		fooBARBiz: [{
			fooBARBaz: 'string',
		}],
	},
};

const splitOnPunctuation: CamelCasedPropertiesDeep<{'user@info': {'user::id': number; 'user::name': string}}, {splitOnPunctuation: true}> = {
	userInfo: {
		userId: 1,
		userName: 'Tom',
	},
};
```

@category Change case
@category Template literal
@category Object
*/
export type CamelCasedPropertiesDeep<
	Value,
	Options extends CamelCaseOptions = {},
> = _CamelCasedPropertiesDeep<Value, ApplyDefaultOptions<CamelCaseOptions, _DefaultCamelCaseOptions, Options>>;

type _CamelCasedPropertiesDeep<
	Value,
	Options extends Required<CamelCaseOptions>,
> = Value extends NonRecursiveType
	? Value
	: Value extends UnknownArray
		? CamelCasedPropertiesArrayDeep<Value, Options>
		: Value extends Set<infer U>
			? Set<_CamelCasedPropertiesDeep<U, Options>>
			: Value extends object
				? {
					[K in keyof Value as CamelCase<K, Options>]: _CamelCasedPropertiesDeep<Value[K], Options>;
				}
				: Value;

// This is a copy of DelimiterCasedPropertiesArrayDeep (see: delimiter-cased-properties-deep.d.ts).
// These types should be kept in sync.
type CamelCasedPropertiesArrayDeep<
	Value extends UnknownArray,
	Options extends Required<CamelCaseOptions>,
> = Value extends []
	? []
	// Trailing spread array
	: Value extends [infer U, ...infer V]
		? [_CamelCasedPropertiesDeep<U, Options>, ..._CamelCasedPropertiesDeep<V, Options>]
		: Value extends readonly [infer U, ...infer V]
			? readonly [_CamelCasedPropertiesDeep<U, Options>, ..._CamelCasedPropertiesDeep<V, Options>]
			// Leading spread array
			: Value extends readonly [...infer U, infer V]
				? [..._CamelCasedPropertiesDeep<U, Options>, _CamelCasedPropertiesDeep<V, Options>]
				// Array
				: Value extends Array<infer U>
					? Array<_CamelCasedPropertiesDeep<U, Options>>
					: Value extends ReadonlyArray<infer U>
						? ReadonlyArray<_CamelCasedPropertiesDeep<U, Options>>
						: never;

export {};
