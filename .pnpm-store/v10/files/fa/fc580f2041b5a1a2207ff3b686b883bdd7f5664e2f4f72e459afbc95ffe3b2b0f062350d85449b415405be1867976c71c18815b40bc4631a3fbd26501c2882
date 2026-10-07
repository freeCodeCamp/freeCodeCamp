import type {StringDigit} from '../source/internal';
import type {Split} from './split';
import type {StringKeyOf} from './string-key-of';

type GetOptions = {
	strict?: boolean;
};

/**
Like the `Get` type but receives an array of strings as a path parameter.
*/
type GetWithPath<BaseType, Keys extends readonly string[], Options extends GetOptions = {}> =
	Keys extends []
	? BaseType
	: Keys extends readonly [infer Head, ...infer Tail]
	? GetWithPath<
		PropertyOf<BaseType, Extract<Head, string>, Options>,
		Extract<Tail, string[]>,
		Options
	>
	: never;

/**
Adds `undefined` to `Type` if `strict` is enabled.
*/
type Strictify<Type, Options extends GetOptions> =
	Options['strict'] extends true ? Type | undefined : Type;

/**
If `Options['strict']` is `true`, includes `undefined` in the returned type when accessing properties on `Record<string, any>`.

Known limitations:
- Does not include `undefined` in the type on object types with an index signature (for example, `{a: string; [key: string]: string}`).
*/
type StrictPropertyOf<BaseType, Key extends keyof BaseType, Options extends GetOptions> =
	Record<string, any> extends BaseType
	? string extends keyof BaseType
		? Strictify<BaseType[Key], Options> // Record<string, any>
		: BaseType[Key] // Record<'a' | 'b', any> (Records with a string union as keys have required properties)
	: BaseType[Key];

/**
Splits a dot-prop style path into a tuple comprised of the properties in the path. Handles square-bracket notation.

@example
```
ToPath<'foo.bar.baz'>
//=> ['foo', 'bar', 'baz']

ToPath<'foo[0].bar.baz'>
//=> ['foo', '0', 'bar', 'baz']
```
*/
type ToPath<S extends string> = Split<FixPathSquareBrackets<S>, '.'>;

/**
Replaces square-bracketed dot notation with dots, for example, `foo[0].bar` -> `foo.0.bar`.
*/
type FixPathSquareBrackets<Path extends string> =
	Path extends `[${infer Head}]${infer Tail}`
	? Tail extends `[${string}`
		? `${Head}.${FixPathSquareBrackets<Tail>}`
		: `${Head}${FixPathSquareBrackets<Tail>}`
	: Path extends `${infer Head}[${infer Middle}]${infer Tail}`
	? `${Head}.${FixPathSquareBrackets<`[${Middle}]${Tail}`>}`
	: Path;

/**
Returns true if `LongString` is made up out of `Substring` repeated 0 or more times.

@example
```
ConsistsOnlyOf<'aaa', 'a'> //=> true
ConsistsOnlyOf<'ababab', 'ab'> //=> true
ConsistsOnlyOf<'aBa', 'a'> //=> false
ConsistsOnlyOf<'', 'a'> //=> true
```
*/
type ConsistsOnlyOf<LongString extends string, Substring extends string> =
	LongString extends ''
	? true
	: LongString extends `${Substring}${infer Tail}`
	? ConsistsOnlyOf<Tail, Substring>
	: false;

/**
Convert a type which may have number keys to one with string keys, making it possible to index using strings retrieved from template types.

@example
```
type WithNumbers = {foo: string; 0: boolean};
type WithStrings = WithStringKeys<WithNumbers>;

type WithNumbersKeys = keyof WithNumbers;
//=> 'foo' | 0
type WithStringsKeys = keyof WithStrings;
//=> 'foo' | '0'
```
*/
type WithStringKeys<BaseType> = {
	[Key in StringKeyOf<BaseType>]: UncheckedIndex<BaseType, Key>
};

/**
Perform a `T[U]` operation if `T` supports indexing.
*/
type UncheckedIndex<T, U extends string | number> = [T] extends [Record<string | number, any>] ? T[U] : never;

/**
Get a property of an object or array. Works when indexing arrays using number-literal-strings, for example, `PropertyOf<number[], '0'> = number`, and when indexing objects with number keys.

Note:
- Returns `unknown` if `Key` is not a property of `BaseType`, since TypeScript uses structural typing, and it cannot be guaranteed that extra properties unknown to the type system will exist at runtime.
- Returns `undefined` from nullish values, to match the behaviour of most deep-key libraries like `lodash`, `dot-prop`, etc.
*/
type PropertyOf<BaseType, Key extends string, Options extends GetOptions = {}> =
	BaseType extends null | undefined
	? undefined
	: Key extends keyof BaseType
	? StrictPropertyOf<BaseType, Key, Options>
	: BaseType extends [] | [unknown, ...unknown[]]
	? unknown // It's a tuple, but `Key` did not extend `keyof BaseType`. So the index is out of bounds.
	: BaseType extends {
		[n: number]: infer Item;
		length: number; // Note: This is needed to avoid being too lax with records types using number keys like `{0: string; 1: boolean}`.
	}
	? (
		ConsistsOnlyOf<Key, StringDigit> extends true
		? Strictify<Item, Options>
		: unknown
	)
	: Key extends keyof WithStringKeys<BaseType>
	? StrictPropertyOf<WithStringKeys<BaseType>, Key, Options>
	: unknown;

// This works by first splitting the path based on `.` and `[...]` characters into a tuple of string keys. Then it recursively uses the head key to get the next property of the current object, until there are no keys left. Number keys extract the item type from arrays, or are converted to strings to extract types from tuples and dictionaries with number keys.
/**
Get a deeply-nested property from an object using a key path, like Lodash's `.get()` function.

Use-case: Retrieve a property from deep inside an API response or some other complex object.

@example
```
import type {Get} from 'type-fest';
import * as lodash from 'lodash';

const get = <BaseType, Path extends string | readonly string[]>(object: BaseType, path: Path): Get<BaseType, Path> =>
	lodash.get(object, path);

interface ApiResponse {
	hits: {
		hits: Array<{
			_id: string
			_source: {
				name: Array<{
					given: string[]
					family: string
				}>
				birthDate: string
			}
		}>
	}
}

const getName = (apiResponse: ApiResponse) =>
	get(apiResponse, 'hits.hits[0]._source.name');
	//=> Array<{given: string[]; family: string}>

// Path also supports a readonly array of strings
const getNameWithPathArray = (apiResponse: ApiResponse) =>
	get(apiResponse, ['hits','hits', '0', '_source', 'name'] as const);
	//=> Array<{given: string[]; family: string}>

// Strict mode:
Get<string[], '3', {strict: true}> //=> string | undefined
Get<Record<string, string>, 'foo', {strict: true}> // => string | undefined
```

@category Object
@category Array
@category Template literal
*/
export type Get<BaseType, Path extends string | readonly string[], Options extends GetOptions = {}> =
	GetWithPath<BaseType, Path extends string ? ToPath<Path> : Path, Options>;
