import type {_DefaultDelimiterCaseOptions} from './delimiter-case.d.ts';
import type {DelimiterCasedProperties} from './delimiter-cased-properties.d.ts';
import type {ApplyDefaultOptions} from './internal/index.d.ts';
import type {WordsOptions} from './words.d.ts';

/**
Convert top-level object properties to kebab case.

This can be useful when, for example, converting some API types from a different style.

@see {@link KebabCase}
@see {@link KebabCasedPropertiesDeep}

@example
```
import type {KebabCasedProperties} from 'type-fest';

type User = {
	userId: number;
	userName: string;
};

const result: KebabCasedProperties<User> = {
	'user-id': 1,
	'user-name': 'Tom',
};

const splitOnNumbers: KebabCasedProperties<{line1: string}, {splitOnNumbers: true}> = {
	'line-1': 'string',
};

const splitOnPunctuation: KebabCasedProperties<{'foo::bar': string}, {splitOnPunctuation: true}> = {
	'foo-bar': 'string',
};
```

@category Change case
@category Template literal
@category Object
*/
export type KebabCasedProperties<
	Value,
	Options extends WordsOptions = {},
> = DelimiterCasedProperties<Value, '-', ApplyDefaultOptions<WordsOptions, _DefaultDelimiterCaseOptions, Options>>;

export {};
