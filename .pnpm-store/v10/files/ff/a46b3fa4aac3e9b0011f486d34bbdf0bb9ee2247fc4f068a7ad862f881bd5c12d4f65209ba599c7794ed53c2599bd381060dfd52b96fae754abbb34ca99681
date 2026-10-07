import {UpperCaseCharacters, WordSeparators} from '../source/utilities';

/**
Unlike a simpler split, this one includes the delimiter splitted on in the resulting array literal. This is to enable splitting on, for example, upper-case characters.
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
type StringPartToDelimiterCase<StringPart extends string, UsedWordSeparators extends string, UsedUpperCaseCharacters extends string, Delimiter extends string> =
	StringPart extends UsedWordSeparators ? Delimiter :
	StringPart extends UsedUpperCaseCharacters ? `${Delimiter}${Lowercase<StringPart>}` :
	StringPart;

/**
Takes the result of a splitted string literal and recursively concatenates it together into the desired casing.

It receives `UsedWordSeparators` and `UsedUpperCaseCharacters` as input to ensure it's fully encapsulated.

@see SplitIncludingDelimiters
*/
type StringArrayToDelimiterCase<Parts extends any[], UsedWordSeparators extends string, UsedUpperCaseCharacters extends string, Delimiter extends string> =
	Parts extends [`${infer FirstPart}`, ...infer RemainingParts]
		? `${StringPartToDelimiterCase<FirstPart, UsedWordSeparators, UsedUpperCaseCharacters, Delimiter>}${StringArrayToDelimiterCase<RemainingParts, UsedWordSeparators, UsedUpperCaseCharacters, Delimiter>}`
		: '';

/**
Convert a string literal to a custom string delimiter casing.

This can be useful when, for example, converting a camel-cased object property to an oddly cased one.

@see KebabCase
@see SnakeCase

@example
```
import {DelimiterCase} from 'type-fest';

// Simple

const someVariable: DelimiterCase<'fooBar', '#'> = 'foo#bar';

// Advanced

type OddlyCasedProps<T> = {
	[K in keyof T as DelimiterCase<K, '#'>]: T[K]
};

interface SomeOptions {
	dryRun: boolean;
	includeFile: string;
	foo: number;
}

const rawCliOptions: OddlyCasedProps<SomeOptions> = {
	'dry#run': true,
	'include#file': 'bar.js',
	foo: 123
};
```
*/

export type DelimiterCase<Value, Delimiter extends string> = Value extends string
	? StringArrayToDelimiterCase<
		SplitIncludingDelimiters<Value, WordSeparators | UpperCaseCharacters>,
		WordSeparators,
		UpperCaseCharacters,
		Delimiter
	>
	: Value;
