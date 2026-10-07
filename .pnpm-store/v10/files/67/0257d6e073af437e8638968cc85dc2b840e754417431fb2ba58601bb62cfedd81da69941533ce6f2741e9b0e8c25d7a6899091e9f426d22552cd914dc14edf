import {DelimiterCase} from './delimiter-case';

/**
Convert a string literal to kebab-case.

This can be useful when, for example, converting a camel-cased object property to a kebab-cased CSS class name or a command-line flag.

@example
```
import {KebabCase} from 'type-fest';

// Simple

const someVariable: KebabCase<'fooBar'> = 'foo-bar';

// Advanced

type KebabCasedProps<T> = {
	[K in keyof T as KebabCase<K>]: T[K]
};

interface CliOptions {
	dryRun: boolean;
	includeFile: string;
	foo: number;
}

const rawCliOptions: KebabCasedProps<CliOptions> = {
	'dry-run': true,
	'include-file': 'bar.js',
	foo: 123
};
```
*/

export type KebabCase<Value> = DelimiterCase<Value, '-'>;
