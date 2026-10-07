import type {_DefaultDelimiterCaseOptions, DelimiterCase} from './delimiter-case.d.ts';
import type {ApplyDefaultOptions} from './internal/index.d.ts';
import type {WordsOptions} from './words.d.ts';

/**
Convert object properties to a custom string delimiter casing.

This can be useful when, for example, converting some API types from a different style.

@see {@link DelimiterCase}
@see {@link DelimiterCasedPropertiesDeep}

@example
```
import type {DelimiterCasedProperties} from 'type-fest';

type User = {
	userId: number;
	userName: string;
};

const result: DelimiterCasedProperties<User, '-'> = {
	'user-id': 1,
	'user-name': 'Tom',
};

const splitOnNumbers: DelimiterCasedProperties<{line1: string}, '-', {splitOnNumbers: true}> = {
	'line-1': 'string',
};

const splitOnPunctuation: DelimiterCasedProperties<{'foo::bar': string}, '-', {splitOnPunctuation: true}> = {
	'foo-bar': 'string',
};
```

@category Change case
@category Template literal
@category Object
*/
export type DelimiterCasedProperties<
	Value,
	Delimiter extends string,
	Options extends WordsOptions = {},
> = Value extends Function
	? Value
	: Value extends Array<infer U>
		? Value
		: {[K in keyof Value as
			DelimiterCase<K, Delimiter, ApplyDefaultOptions<WordsOptions, _DefaultDelimiterCaseOptions, Options>>
			]: Value[K]};

export {};
