import type {ApplyDefaultOptions, AsciiPunctuation, StartsWith} from './internal/index.d.ts';
import type {IsStringLiteral} from './is-literal.d.ts';
import type {Merge} from './merge.d.ts';
import type {RemovePrefix} from './remove-prefix.d.ts';
import type {_DefaultWordsOptions, Words, WordsOptions} from './words.d.ts';

export type _DefaultDelimiterCaseOptions = Merge<_DefaultWordsOptions, {splitOnNumbers: false}>;

/**
Convert an array of words to delimiter case starting with a delimiter with input capitalization.
*/
type DelimiterCaseFromArray<
	Words extends string[],
	Delimiter extends string,
	OutputString extends string = '',
> = Words extends [
	infer FirstWord extends string,
	...infer RemainingWords extends string[],
]
	? DelimiterCaseFromArray<RemainingWords, Delimiter, `${OutputString}${
		StartsWith<FirstWord, AsciiPunctuation> extends true ? '' : Delimiter
	}${FirstWord}`>
	: OutputString;

/**
Convert a string literal to a custom string delimiter casing.

This can be useful when, for example, converting a camel-cased object property to an oddly cased one.

@see {@link KebabCase}
@see {@link SnakeCase}

@example
```
import type {DelimiterCase} from 'type-fest';

// Simple

const someVariable: DelimiterCase<'fooBar', '#'> = 'foo#bar';
const someVariableNoSplitOnNumbers: DelimiterCase<'p2pNetwork', '#', {splitOnNumbers: false}> = 'p2p#network';
const someVariableWithPunctuation: DelimiterCase<'div.card::after', '#', {splitOnPunctuation: true}> = 'div#card#after';

// Advanced

type OddlyCasedProperties<T> = {
	[K in keyof T as DelimiterCase<K, '#'>]: T[K]
};

type SomeOptions = {
	dryRun: boolean;
	includeFile: string;
	foo: number;
};

const rawCliOptions: OddlyCasedProperties<SomeOptions> = {
	'dry#run': true,
	'include#file': 'bar.js',
	foo: 123,
};
```

@category Change case
@category Template literal
 */
export type DelimiterCase<
	Value,
	Delimiter extends string,
	Options extends WordsOptions = {},
> = Value extends string
	? IsStringLiteral<Value> extends false
		? Value
		: Lowercase<RemovePrefix<DelimiterCaseFromArray<
			Words<Value, ApplyDefaultOptions<WordsOptions, _DefaultDelimiterCaseOptions, Options>>,
			Delimiter
		>, string, {strict: false}>>
	: Value;

export {};
