export interface BundleOptions {
	intro?: string;
	separator?: string;
}

export interface SourceMapOptions {
	/**
	 * Whether the mapping should be high-resolution.
	 * Hi-res mappings map every single character, meaning (for example) your devtools will always
	 * be able to pinpoint the exact location of function calls and so on.
	 * With lo-res mappings, devtools may only be able to identify the correct
	 * line - but they're quicker to generate and less bulky.
	 * You can also set `"boundary"` to generate a semi-hi-res mappings segmented per word boundary
	 * instead of per character, suitable for string semantics that are separated by words.
	 * If sourcemap locations have been specified with s.addSourceMapLocation(), they will be used here.
	 */
	hires?: boolean | 'boundary';
	/**
	 * The filename where you plan to write the sourcemap.
	 */
	file?: string;
	/**
	 * The filename of the file containing the original source.
	 */
	source?: string;
	/**
	 * Whether to include the original content in the map's sourcesContent array.
	 */
	includeContent?: boolean;
}

export type SourceMapSegment =
	| [number]
	| [number, number, number, number]
	| [number, number, number, number, number];

export interface DecodedSourceMap {
	file: string;
	sources: string[];
	sourcesContent?: string[];
	names: string[];
	mappings: SourceMapSegment[][];
	x_google_ignoreList?: number[];
}

export class SourceMap {
	constructor(properties: DecodedSourceMap);

	version: number;
	file: string;
	sources: string[];
	sourcesContent?: string[];
	names: string[];
	mappings: string;
	x_google_ignoreList?: number[];
	debugId?: string;

	/**
	 * Returns the equivalent of `JSON.stringify(map)`
	 */
	toString(): string;
	/**
	 * Returns a DataURI containing the sourcemap. Useful for doing this sort of thing:
	 * `generateMap(options?: SourceMapOptions): SourceMap;`
	 */
	toUrl(): string;
}

export class Bundle {
	constructor(options?: BundleOptions);
	/**
	 * Adds the specified source to the bundle, which can either be a `MagicString` object directly,
	 * or an options object that holds a magic string `content` property and optionally provides
	 * a `filename` for the source within the bundle, as well as an optional `ignoreList` hint
	 * (which defaults to `false`). The `filename` is used when constructing the source map for the
	 * bundle, to identify this `source` in the source map's `sources` field. The `ignoreList` hint
	 * is used to populate the `x_google_ignoreList` extension field in the source map, which is a
	 * mechanism for tools to signal to debuggers that certain sources should be ignored by default
	 * (depending on user preferences).
	 */
	addSource(
		source: MagicString | { filename?: string; content: MagicString; ignoreList?: boolean },
	): this;
	append(str: string, options?: BundleOptions): this;
	clone(): this;
	generateMap(
		options?: SourceMapOptions,
	): Omit<SourceMap, 'sourcesContent'> & { sourcesContent: Array<string | null> };
	generateDecodedMap(
		options?: SourceMapOptions,
	): Omit<DecodedSourceMap, 'sourcesContent'> & { sourcesContent: Array<string | null> };
	getIndentString(): string;
	indent(indentStr?: string): this;
	indentExclusionRanges: ExclusionRange | Array<ExclusionRange>;
	prepend(str: string): this;
	toString(): string;
	trimLines(): this;
	trim(charType?: string): this;
	trimStart(charType?: string): this;
	trimEnd(charType?: string): this;
	isEmpty(): boolean;
	length(): number;
}

export type ExclusionRange = [number, number];

export interface MagicStringOptions {
	filename?: string;
	indentExclusionRanges?: ExclusionRange | Array<ExclusionRange>;
	offset?: number;
}

export interface IndentOptions {
	exclude?: ExclusionRange | Array<ExclusionRange>;
	indentStart?: boolean;
}

export interface OverwriteOptions {
	storeName?: boolean;
	contentOnly?: boolean;
}

export interface UpdateOptions {
	storeName?: boolean;
	overwrite?: boolean;
}

export default class MagicString {
	constructor(str: string, options?: MagicStringOptions);
	/**
	 * Adds the specified character index (with respect to the original string) to sourcemap mappings, if `hires` is false.
	 */
	addSourcemapLocation(char: number): void;
	/**
	 * Appends the specified content to the end of the string.
	 */
	append(content: string): this;
	/**
	 * Appends the specified content at the index in the original string.
	 * If a range *ending* with index is subsequently moved, the insert will be moved with it.
	 * See also `s.prependLeft(...)`.
	 */
	appendLeft(index: number, content: string): this;
	/**
	 * Appends the specified content at the index in the original string.
	 * If a range *starting* with index is subsequently moved, the insert will be moved with it.
	 * See also `s.prependRight(...)`.
	 */
	appendRight(index: number, content: string): this;
	/**
	 * Does what you'd expect.
	 */
	clone(): this;
	/**
	 * Generates a version 3 sourcemap.
	 */
	generateMap(options?: SourceMapOptions): SourceMap;
	/**
	 * Generates a sourcemap object with raw mappings in array form, rather than encoded as a string.
	 * Useful if you need to manipulate the sourcemap further, but most of the time you will use `generateMap` instead.
	 */
	generateDecodedMap(options?: SourceMapOptions): DecodedSourceMap;
	getIndentString(): string;

	/**
	 * Prefixes each line of the string with prefix.
	 * If prefix is not supplied, the indentation will be guessed from the original content, falling back to a single tab character.
	 */
	indent(options?: IndentOptions): this;
	/**
	 * Prefixes each line of the string with prefix.
	 * If prefix is not supplied, the indentation will be guessed from the original content, falling back to a single tab character.
	 *
	 * The options argument can have an exclude property, which is an array of [start, end] character ranges.
	 * These ranges will be excluded from the indentation - useful for (e.g.) multiline strings.
	 */
	indent(indentStr?: string, options?: IndentOptions): this;
	indentExclusionRanges: ExclusionRange | Array<ExclusionRange>;

	/**
	 * Moves the characters from `start` and `end` to `index`.
	 */
	move(start: number, end: number, index: number): this;
	/**
	 * Replaces the characters from `start` to `end` with `content`, along with the appended/prepended content in
	 * that range. The same restrictions as `s.remove()` apply.
	 *
	 * The fourth argument is optional. It can have a storeName property — if true, the original name will be stored
	 * for later inclusion in a sourcemap's names array — and a contentOnly property which determines whether only
	 * the content is overwritten, or anything that was appended/prepended to the range as well.
	 *
	 * It may be preferred to use `s.update(...)` instead if you wish to avoid overwriting the appended/prepended content.
	 */
	overwrite(
		start: number,
		end: number,
		content: string,
		options?: boolean | OverwriteOptions,
	): this;
	/**
	 * Replaces the characters from `start` to `end` with `content`. The same restrictions as `s.remove()` apply.
	 *
	 * The fourth argument is optional. It can have a storeName property — if true, the original name will be stored
	 * for later inclusion in a sourcemap's names array — and an overwrite property which determines whether only
	 * the content is overwritten, or anything that was appended/prepended to the range as well.
	 */
	update(start: number, end: number, content: string, options?: boolean | UpdateOptions): this;
	/**
	 * Prepends the string with the specified content.
	 */
	prepend(content: string): this;
	/**
	 * Same as `s.appendLeft(...)`, except that the inserted content will go *before* any previous appends or prepends at index
	 */
	prependLeft(index: number, content: string): this;
	/**
	 * Same as `s.appendRight(...)`, except that the inserted content will go *before* any previous appends or prepends at `index`
	 */
	prependRight(index: number, content: string): this;
	/**
	 * Removes the characters from `start` to `end` (of the original string, **not** the generated string).
	 * Removing the same content twice, or making removals that partially overlap, will cause an error.
	 */
	remove(start: number, end: number): this;
	/**
	 * Reset the modified characters from `start` to `end` (of the original string, **not** the generated string).
	 */
	reset(start: number, end: number): this;
	/**
	 * Returns the content of the generated string that corresponds to the slice between `start` and `end` of the original string.
	 * Throws error if the indices are for characters that were already removed.
	 */
	slice(start: number, end: number): string;
	/**
	 * Returns a clone of `s`, with all content before the `start` and `end` characters of the original string removed.
	 */
	snip(start: number, end: number): this;
	/**
	 * Trims content matching `charType` (defaults to `\s`, i.e. whitespace) from the start and end.
	 */
	trim(charType?: string): this;
	/**
	 * Trims content matching `charType` (defaults to `\s`, i.e. whitespace) from the start.
	 */
	trimStart(charType?: string): this;
	/**
	 * Trims content matching `charType` (defaults to `\s`, i.e. whitespace) from the end.
	 */
	trimEnd(charType?: string): this;
	/**
	 * Removes empty lines from the start and end.
	 */
	trimLines(): this;
	/**
	 * String replacement with RegExp or string.
	 */
	replace(
		regex: RegExp | string,
		replacement: string | ((substring: string, ...args: any[]) => string),
	): this;
	/**
	 * Same as `s.replace`, but replace all matched strings instead of just one.
	 */
	replaceAll(
		regex: RegExp | string,
		replacement: string | ((substring: string, ...args: any[]) => string),
	): this;

	lastChar(): string;
	lastLine(): string;
	/**
	 * Returns true if the resulting source is empty (disregarding white space).
	 */
	isEmpty(): boolean;
	length(): number;

	/**
	 * Indicates if the string has been changed.
	 */
	hasChanged(): boolean;

	original: string;
	/**
	 * Returns the generated string.
	 */
	toString(): string;

	offset: number;
}
