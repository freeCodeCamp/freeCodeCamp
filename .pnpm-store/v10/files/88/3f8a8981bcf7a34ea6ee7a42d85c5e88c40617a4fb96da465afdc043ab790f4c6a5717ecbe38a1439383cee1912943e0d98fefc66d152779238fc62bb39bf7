import type {UpperCaseCharacters, WordSeparators} from '../source/internal';

/**
Unlike a simpler split, this one includes the delimiter splitted on in the resulting array literal. This is to enable splitting on, for example, upper-case characters.

@category Template literal
*/
export type SplitIncludingDelimiters<Source extends string, Delimiter extends string> =
	Source extends '' ? [] :
	Source extends `${infer FirstPart}${Delimiter}${infer SecondPart}` ?
	(
		Source extends `${FirstPart}${infer UsedDelimiter}${SecondPart}`
			? UsedDelimiter extends Delimiter
				? Source extends `${infer FirstPart}${UsedDelimiter}${infer SecondPart}`
					? [...SplitIncludingDelimiters<FirstPart, Delimiter>, UsedDelimiter, ...SplitIncludingDelimiters<SecondPart, Delimiter>]
					: never
				: never
			: never
	) :
	[Source];

/**
Format a specific part of the splitted string literal that `StringArrayToDelimiterCase<>` fuses together, ensuring desired casing.

@see StringArrayToDelimiterCase
*/
type StringPartToDelimiterCase<StringPart extends string, Start extends boolean, UsedWordSeparators extends string, UsedUpperCaseCharacters extends string, Delimiter extends string> =
	StringPart extends UsedWordSeparators ? Delimiter :
	Start extends true ? Lowercase<StringPart> :
	StringPart extends UsedUpperCaseCharacters ? `${Delimiter}${Lowercase<StringPart>}` :
	StringPart;

/**
Takes the result of a splitted string literal and recursively concatenates it together into the desired casing.

It receives `UsedWordSeparators` and `UsedUpperCaseCharacters` as input to ensure it's fully encapsulated.

@see SplitIncludingDelimiters
*/
type StringArrayToDelimiterCase<Parts extends readonly any[], Start extends boolean, UsedWordSeparators extends string, UsedUpperCaseCharacters extends string, Delimiter extends string> =
	Parts extends [`${infer FirstPart}`, ...infer RemainingParts]
		? `${StringPartToDelimiterCase<FirstPart, Start, UsedWordSeparators, UsedUpperCaseCharacters, Delimiter>}${StringArrayToDelimiterCase<RemainingParts, false, UsedWordSeparators, UsedUpperCaseCharacters, Delimiter>}`
		: Parts extends [string]
		? string
		: '';

/**
Convert a string literal to a custom string delimiter casing.

This can be useful when, for example, converting a camel-cased object property to an oddly cased one.

@see KebabCase
@see SnakeCase

@example
```
import type {DelimiterCase} from 'type-fest';

// Simple

const someVariable: DelimiterCase<'fooBar', '#'> = 'foo#bar';

// Advanced

type OddlyCasedProperties<T> = {
	[K in keyof T as DelimiterCase<K, '#'>]: T[K]
};

interface SomeOptions {
	dryRun: boolean;
	includeFile: string;
	foo: number;
}

const rawCliOptions: OddlyCasedProperties<SomeOptions> = {
	'dry#run': true,
	'include#file': 'bar.js',
	foo: 123
};
```

@category Change case
@category Template literal
*/
export type DelimiterCase<Value, Delimiter extends string> = Value extends string
	? StringArrayToDelimiterCase<
		SplitIncludingDelimiters<Value, WordSeparators | UpperCaseCharacters>,
		true,
		WordSeparators,
		UpperCaseCharacters,
		Delimiter
	>
	: Value;
