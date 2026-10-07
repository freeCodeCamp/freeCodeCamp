import type {_DefaultDelimiterCaseOptions} from './delimiter-case.d.ts';
import type {DelimiterCasedProperties} from './delimiter-cased-properties.d.ts';
import type {ApplyDefaultOptions} from './internal/index.d.ts';
import type {WordsOptions} from './words.d.ts';

/**
Convert top-level object properties to snake case.

This can be useful when, for example, converting some API types from a different style.

@see {@link SnakeCase}
@see {@link SnakeCasedPropertiesDeep}

@example
```
import type {SnakeCasedProperties} from 'type-fest';

type User = {
	userId: number;
	userName: string;
};

const result: SnakeCasedProperties<User> = {
	user_id: 1,
	user_name: 'Tom',
};

const splitOnNumbers: SnakeCasedProperties<{line1: string}, {splitOnNumbers: true}> = {
	'line_1': 'string',
};

const splitOnPunctuation: SnakeCasedProperties<{'foo::bar': string}, {splitOnPunctuation: true}> = {
	'foo_bar': 'string',
};
```

@category Change case
@category Template literal
@category Object
*/
export type SnakeCasedProperties<
	Value,
	Options extends WordsOptions = {},
> = DelimiterCasedProperties<Value, '_', ApplyDefaultOptions<WordsOptions, _DefaultDelimiterCaseOptions, Options>>;

export {};
