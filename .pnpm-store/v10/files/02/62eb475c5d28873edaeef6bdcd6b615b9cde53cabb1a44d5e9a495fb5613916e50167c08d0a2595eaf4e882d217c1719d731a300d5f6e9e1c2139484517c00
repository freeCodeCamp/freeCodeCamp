import type {And} from './and.d.ts';
import type {ApplyDefaultOptions, Not} from './internal/index.d.ts';
import type {IsStringLiteral} from './is-literal.d.ts';
import type {Or} from './or.d.ts';

/**
Split options.

@see {@link Split}
*/
export type SplitOptions = {
	/**
	When enabled, instantiations with non-literal string types (e.g., `string`, `Uppercase<string>`, `on${string}`) simply return back `string[]` without performing any splitting, as the exact structure cannot be statically determined.

	@default true

	@example
	```ts
	import type {Split} from 'type-fest';

	type Example1 = Split<`foo.${string}.bar`, '.', {strictLiteralChecks: false}>;
	//=> ['foo', string, 'bar']

	type Example2 = Split<`foo.${string}`, '.', {strictLiteralChecks: true}>;
	//=> string[]

	type Example3 = Split<'foobarbaz', `b${string}`, {strictLiteralChecks: false}>;
	//=> ['foo', 'r', 'z']

	type Example4 = Split<'foobarbaz', `b${string}`, {strictLiteralChecks: true}>;
	//=> string[]
	```
	*/
	strictLiteralChecks?: boolean;
};

type DefaultSplitOptions = {
	strictLiteralChecks: true;
};

/**
Represents an array of strings split using a given character or character set.

Use-case: Defining the return type of a method like `String.prototype.split`.

@example
```
import type {Split} from 'type-fest';

declare function split<S extends string, D extends string>(string: S, separator: D): Split<S, D>;

type Item = 'foo' | 'bar' | 'baz' | 'waldo';
const items = 'foo,bar,baz,waldo';
const array: Item[] = split(items, ',');
```

@see {@link SplitOptions}

@category String
@category Template literal
*/
export type Split<
	S extends string,
	Delimiter extends string,
	Options extends SplitOptions = {},
> =
	SplitHelper<S, Delimiter, ApplyDefaultOptions<SplitOptions, DefaultSplitOptions, Options>>;

type SplitHelper<
	S extends string,
	Delimiter extends string,
	Options extends Required<SplitOptions>,
	Accumulator extends string[] = [],
> = S extends string // For distributing `S`
	? Delimiter extends string // For distributing `Delimiter`
		// If `strictLiteralChecks` is `false` OR `S` and `Delimiter` both are string literals, then perform the split
		? Or<Not<Options['strictLiteralChecks']>, And<IsStringLiteral<S>, IsStringLiteral<Delimiter>>> extends true
			? S extends `${infer Head}${Delimiter}${infer Tail}`
				? SplitHelper<Tail, Delimiter, Options, [...Accumulator, Head]>
				: Delimiter extends ''
					? S extends ''
						? Accumulator
						: [...Accumulator, S]
					: [...Accumulator, S]
			// Otherwise, return `string[]`
			: string[]
		: never // Should never happen
	: never; // Should never happen

export {};
