import type {CamelCase, CamelCaseOptions, _DefaultCamelCaseOptions} from './camel-case.d.ts';
import type {ApplyDefaultOptions} from './internal/index.d.ts';

/**
Convert top-level object properties to camel case.

This can be useful when, for example, converting some API types from a different style.

@see {@link CamelCasedPropertiesDeep}
@see {@link CamelCase}

@example
```
import type {CamelCasedProperties} from 'type-fest';

type User = {
	UserId: number;
	UserName: string;
};

const result: CamelCasedProperties<User> = {
	userId: 1,
	userName: 'Tom',
};

const preserveConsecutiveUppercase: CamelCasedProperties<{fooBAR: string}, {preserveConsecutiveUppercase: true}> = {
	fooBAR: 'string',
};

const splitOnPunctuation: CamelCasedProperties<{'foo::bar': string}, {splitOnPunctuation: true}> = {
	fooBar: 'string',
};
```

@category Change case
@category Template literal
@category Object
*/
export type CamelCasedProperties<Value, Options extends CamelCaseOptions = {}> = Value extends Function
	? Value
	: Value extends Array<infer U>
		? Value
		: {
			[K in keyof Value as
			CamelCase<K, ApplyDefaultOptions<CamelCaseOptions, _DefaultCamelCaseOptions, Options>>
			]: Value[K];
		};

export {};
