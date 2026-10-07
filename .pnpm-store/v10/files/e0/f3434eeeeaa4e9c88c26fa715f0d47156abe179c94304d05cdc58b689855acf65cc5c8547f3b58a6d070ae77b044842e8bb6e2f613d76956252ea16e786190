import type {
	ApplyDefaultOptions,
	AsciiPunctuation,
	IsNumeric,
	WordSeparators,
} from './internal/index.d.ts';
import type {IsLowercase} from './is-lowercase.d.ts';
import type {IsUppercase} from './is-uppercase.d.ts';

type SkipEmptyWord<Word extends string> = Word extends '' ? [] : [Word];

type RemoveLastCharacter<
	Sentence extends string,
	Character extends string,
> = Sentence extends `${infer LeftSide}${Character}`
	? SkipEmptyWord<LeftSide>
	: never;

/**
Words options.

@see {@link Words}
*/
export type WordsOptions = {
	/**
	Split on numeric sequence.

	@default true

	@example
	```
	import type {Words} from 'type-fest';

	type Example1 = Words<'p2pNetwork', {splitOnNumbers: true}>;
	//=> ['p', '2', 'p', 'Network']

	type Example2 = Words<'p2pNetwork', {splitOnNumbers: false}>;
	//=> ['p2p', 'Network']
	```
	*/
	splitOnNumbers?: boolean;
	/**
	Split on {@link AsciiPunctuation | punctuation characters} (e.g., `#`, `&`, `*`, `:`, `?`, `@`, `~`).

	@example
	```
	import type {Words} from 'type-fest';

	type Example1 = Words<'hello:world', {splitOnPunctuation: true}>;
	//=> ['hello', 'world']

	type Example2 = Words<'hello:world', {splitOnPunctuation: false}>;
	//=> ['hello', ':world']
	```
	*/
	splitOnPunctuation?: boolean;
};

export type _DefaultWordsOptions = {
	splitOnNumbers: true;
	splitOnPunctuation: false;
};

/**
Split a string similar to Lodash's `_.words()` function.

- Split on each word that begins with a capital letter.
- Split on each {@link WordSeparators}.
- Split on each {@link AsciiPunctuation} (if {@link WordsOptions.splitOnPunctuation} is enabled).
- Split on numeric sequence.

@example
```
import type {Words} from 'type-fest';

type Words0 = Words<'helloWorld'>;
//=> ['hello', 'World']

type Words1 = Words<'helloWORLD'>;
//=> ['hello', 'WORLD']

type Words2 = Words<'hello-world'>;
//=> ['hello', 'world']

type Words3 = Words<'--hello the_world'>;
//=> ['hello', 'the', 'world']

type Words4 = Words<'lifeIs42'>;
//=> ['life', 'Is', '42']

type Words5 = Words<'p2pNetwork', {splitOnNumbers: false}>;
//=> ['p2p', 'Network']

type Words6 = Words<'hello:world', {splitOnPunctuation: true}>;
//=> ['hello', 'world']

type Words7 = Words<'hello:world', {splitOnPunctuation: false}>;
//=> ['hello', ':world']

type Words8 = Words<'hello::world', {splitOnPunctuation: true}>;
//=> ['hello', 'world']
```

@category Change case
@category Template literal
*/
export type Words<Sentence extends string, Options extends WordsOptions = {}> = WordsImplementation<Sentence, ApplyDefaultOptions<WordsOptions, _DefaultWordsOptions, Options>>;

type WordsImplementation<
	Sentence extends string,
	Options extends Required<WordsOptions>,
	LastCharacter extends string = '',
	CurrentWord extends string = '',
> = Sentence extends `${infer FirstCharacter}${infer RemainingCharacters}`
	? FirstCharacter extends WordSeparators | (Options['splitOnPunctuation'] extends true ? AsciiPunctuation : never)
		// Skip word separator
		? [...SkipEmptyWord<CurrentWord>, ...WordsImplementation<RemainingCharacters, Options>]
		: LastCharacter extends ''
			// Fist char of word
			? WordsImplementation<RemainingCharacters, Options, FirstCharacter, FirstCharacter>
			// Case change: non-numeric to numeric
			: [false, true] extends [IsNumeric<LastCharacter>, IsNumeric<FirstCharacter>]
				? Options['splitOnNumbers'] extends true
					// Split on number: push word
					? [...SkipEmptyWord<CurrentWord>, ...WordsImplementation<RemainingCharacters, Options, FirstCharacter, FirstCharacter>]
					// No split on number: concat word
					: WordsImplementation<RemainingCharacters, Options, FirstCharacter, `${CurrentWord}${FirstCharacter}`>
				// Case change: numeric to non-numeric
				: [true, false] extends [IsNumeric<LastCharacter>, IsNumeric<FirstCharacter>]
					? Options['splitOnNumbers'] extends true
						// Split on number: push word
						? [...SkipEmptyWord<CurrentWord>, ...WordsImplementation<RemainingCharacters, Options, FirstCharacter, FirstCharacter>]
						// No split on number: concat word
						: WordsImplementation<RemainingCharacters, Options, FirstCharacter, `${CurrentWord}${FirstCharacter}`>
					// No case change: concat word
					: [true, true] extends [IsNumeric<LastCharacter>, IsNumeric<FirstCharacter>]
						? WordsImplementation<RemainingCharacters, Options, FirstCharacter, `${CurrentWord}${FirstCharacter}`>
					// Case change: lower to upper, push word
						: [true, true] extends [IsLowercase<LastCharacter>, IsUppercase<FirstCharacter>]
							? [...SkipEmptyWord<CurrentWord>, ...WordsImplementation<RemainingCharacters, Options, FirstCharacter, FirstCharacter>]
						// Case change: upper to lower, brings back the last character, push word
							: [true, true] extends [IsUppercase<LastCharacter>, IsLowercase<FirstCharacter>]
								? [...RemoveLastCharacter<CurrentWord, LastCharacter>, ...WordsImplementation<RemainingCharacters, Options, FirstCharacter, `${LastCharacter}${FirstCharacter}`>]
							// No case change: concat word
								: WordsImplementation<RemainingCharacters, Options, FirstCharacter, `${CurrentWord}${FirstCharacter}`>
	: [...SkipEmptyWord<CurrentWord>];

export {};
