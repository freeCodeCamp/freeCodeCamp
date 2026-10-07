import type {ApplyDefaultOptions} from './internal/index.d.ts';

export type ReplaceOptions = {
	all?: boolean;
};

type DefaultReplaceOptions = {
	all: false;
};

/**
Represents a string with some or all matches replaced by a replacement.

Use-case:
- `kebab-case-path` to `dotted.path.notation`
- Changing date/time format: `01-08-2042` → `01/08/2042`
- Manipulation of type properties, for example, removal of prefixes

@example
```
import type {Replace} from 'type-fest';

declare function replace<
	Input extends string,
	Search extends string,
	Replacement extends string,
>(
	input: Input,
	search: Search,
	replacement: Replacement,
): Replace<Input, Search, Replacement>;

declare function replaceAll<
	Input extends string,
	Search extends string,
	Replacement extends string,
>(
	input: Input,
	search: Search,
	replacement: Replacement,
): Replace<Input, Search, Replacement, {all: true}>;

// The return type is the exact string literal, not just `string`.

replace('hello ?', '?', '🦄');
//=> 'hello 🦄'

replace('hello ??', '?', '❓');
//=> 'hello ❓?'

replaceAll('10:42:00', ':', '-');
//=> '10-42-00'

replaceAll('__userName__', '__', '');
//=> 'userName'

replaceAll('My Cool Title', ' ', '');
//=> 'MyCoolTitle'
```

@category String
@category Template literal
*/
export type Replace<
	Input extends string,
	Search extends string,
	Replacement extends string,
	Options extends ReplaceOptions = {},
> = _Replace<Input, Search, Replacement, ApplyDefaultOptions<ReplaceOptions, DefaultReplaceOptions, Options>>;

type _Replace<
	Input extends string,
	Search extends string,
	Replacement extends string,
	Options extends Required<ReplaceOptions>,
	Accumulator extends string = '',
> = Search extends string // For distributing `Search`
	? Replacement extends string // For distributing `Replacement`
		? Input extends `${infer Head}${Search}${infer Tail}`
			? Options['all'] extends true
				? _Replace<Tail, Search, Replacement, Options, `${Accumulator}${Head}${Replacement}`>
				: `${Head}${Replacement}${Tail}`
			: `${Accumulator}${Input}`
		: never
	: never;

export {};
