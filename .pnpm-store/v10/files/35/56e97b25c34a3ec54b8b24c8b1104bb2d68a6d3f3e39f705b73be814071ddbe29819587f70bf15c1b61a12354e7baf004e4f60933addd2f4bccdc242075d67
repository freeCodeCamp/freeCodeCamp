import type {Simplify} from '../simplify.d.ts';
import type {IsEqual} from '../is-equal.d.ts';
import type {KeysOfUnion} from '../keys-of-union.d.ts';
import type {RequiredKeysOf} from '../required-keys-of.d.ts';
import type {Merge} from '../merge.d.ts';
import type {OptionalKeysOf} from '../optional-keys-of.d.ts';
import type {IsAny} from '../is-any.d.ts';
import type {If} from '../if.d.ts';
import type {IsNever} from '../is-never.d.ts';
import type {FilterDefinedKeys, FilterOptionalKeys} from './keys.d.ts';
import type {MapsSetsOrArrays, NonRecursiveType} from './type.d.ts';
import type {StringToNumber, ToString} from './string.d.ts';

/**
Create an object type with the given key `<Key>` and value `<Value>`.

It will copy the prefix and optional status of the same key from the given object `CopiedFrom` into the result.

@example
```
type A = BuildObject<'a', string>;
//=> {a: string}

// Copy `readonly` and `?` from the key `a` of `{readonly a?: any}`
type B = BuildObject<'a', string, {readonly a?: any}>;
//=> {readonly a?: string}
```
*/
export type BuildObject<Key extends PropertyKey, Value, CopiedFrom extends object = {}> =
	Key extends keyof CopiedFrom
		? Pick<{[_ in keyof CopiedFrom]: Value}, Key>
		: Key extends `${infer NumberKey extends number}`
			? NumberKey extends keyof CopiedFrom
				? Pick<{[_ in keyof CopiedFrom]: Value}, NumberKey>
				: {[_ in Key]: Value}
			: {[_ in Key]: Value};

/**
Returns a boolean for whether the given type is a plain key-value object.
*/
export type IsPlainObject<T> =
	IsNever<T> extends true
		? false
		: T extends NonRecursiveType | MapsSetsOrArrays
			? false
			: T extends object
				? true
				: false;

/**
Extract the object field type if T is an object and K is a key of T, return `never` otherwise.

It creates a type-safe way to access the member type of `unknown` type.
*/
export type ObjectValue<T, K> =
	K extends keyof T
		? T[K]
		: ToString<K> extends keyof T
			? T[ToString<K>]
			: K extends `${infer NumberK extends number}`
				? NumberK extends keyof T
					? T[NumberK]
					: never
				: never;

/**
For an object T, if it has any properties that are a union with `undefined`, make those into optional properties instead.

@example
```
type User = {
	firstName: string;
	lastName: string | undefined;
};

type OptionalizedUser = UndefinedToOptional<User>;
//=> {
// 	firstName: string;
// 	lastName?: string;
// }
```
*/
export type UndefinedToOptional<T extends object> = Simplify<
	{
	// Property is not a union with `undefined`, keep it as-is.
		[Key in keyof Pick<T, FilterDefinedKeys<T>>]: T[Key];
	} & {
	// Property _is_ a union with defined value. Set as optional (via `?`) and remove `undefined` from the union.
		[Key in keyof Pick<T, FilterOptionalKeys<T>>]?: Exclude<T[Key], undefined>;
	}
>;

/**
Works similar to the built-in `Pick` utility type, except for the following differences:
- Distributes over union types and allows picking keys from any member of the union type.
- Primitives types are returned as-is.
- Picks all keys if `Keys` is `any`.
- Doesn't pick `number` from a `string` index signature.

@example
```
type ImageUpload = {
	url: string;
	size: number;
	thumbnailUrl: string;
};

type VideoUpload = {
	url: string;
	duration: number;
	encodingFormat: string;
};

// Distributes over union types and allows picking keys from any member of the union type
type MediaDisplay = HomomorphicPick<ImageUpload | VideoUpload, "url" | "size" | "duration">;
//=> {url: string; size: number} | {url: string; duration: number}

// Primitive types are returned as-is
type Primitive = HomomorphicPick<string | number, 'toUpperCase' | 'toString'>;
//=> string | number

// Picks all keys if `Keys` is `any`
type Any = HomomorphicPick<{a: 1; b: 2} | {c: 3}, any>;
//=> {a: 1; b: 2} | {c: 3}

// Doesn't pick `number` from a `string` index signature
type IndexSignature = HomomorphicPick<{[k: string]: unknown}, number>;
//=> {}
*/
export type HomomorphicPick<T, Keys extends KeysOfUnion<T>> = {
	[P in keyof T as Extract<P, Keys>]: T[P]
};

/**
Extract all possible values for a given key from a union of object types.

@example
```
type Statuses = ValueOfUnion<{id: 1; status: 'open'} | {id: 2; status: 'closed'}, 'status'>;
//=> "open" | "closed"
```
*/
export type ValueOfUnion<Union, Key extends KeysOfUnion<Union>> =
	Union extends unknown ? Key extends keyof Union ? Union[Key] : never : never;

/**
Extract all readonly keys from a union of object types.

@example
```
type User = {
	readonly id: string;
	name: string;
};

type Post = {
	readonly id: string;
	readonly author: string;
	body: string;
};

type ReadonlyKeys = ReadonlyKeysOfUnion<User | Post>;
//=> "id" | "author"
```
*/
export type ReadonlyKeysOfUnion<Union> = Union extends unknown ? keyof {
	[Key in keyof Union as IsEqual<{[K in Key]: Union[Key]}, {readonly [K in Key]: Union[Key]}> extends true ? Key : never]: never
} : never;

/**
Merges user specified options with default options.

@example
```
type PathsOptions = {maxRecursionDepth?: number; leavesOnly?: boolean};
type DefaultPathsOptions = {maxRecursionDepth: 10; leavesOnly: false};
type SpecifiedOptions = {leavesOnly: true};

type Result = ApplyDefaultOptions<PathsOptions, DefaultPathsOptions, SpecifiedOptions>;
//=> {maxRecursionDepth: 10; leavesOnly: true}
```

@example
```
// Complains if default values are not provided for optional options

type PathsOptions = {maxRecursionDepth?: number; leavesOnly?: boolean};
type DefaultPathsOptions = {maxRecursionDepth: 10};
type SpecifiedOptions = {};

type Result = ApplyDefaultOptions<PathsOptions, DefaultPathsOptions, SpecifiedOptions>;
//                                              ~~~~~~~~~~~~~~~~~~~
// Property 'leavesOnly' is missing in type 'DefaultPathsOptions' but required in type '{ maxRecursionDepth: number; leavesOnly: boolean; }'.
```

@example
```
// Complains if an option's default type does not conform to the expected type

type PathsOptions = {maxRecursionDepth?: number; leavesOnly?: boolean};
type DefaultPathsOptions = {maxRecursionDepth: 10; leavesOnly: 'no'};
type SpecifiedOptions = {};

type Result = ApplyDefaultOptions<PathsOptions, DefaultPathsOptions, SpecifiedOptions>;
//                                              ~~~~~~~~~~~~~~~~~~~
// Types of property 'leavesOnly' are incompatible. Type 'string' is not assignable to type 'boolean'.
```

@example
```
// Complains if an option's specified type does not conform to the expected type

type PathsOptions = {maxRecursionDepth?: number; leavesOnly?: boolean};
type DefaultPathsOptions = {maxRecursionDepth: 10; leavesOnly: false};
type SpecifiedOptions = {leavesOnly: 'yes'};

type Result = ApplyDefaultOptions<PathsOptions, DefaultPathsOptions, SpecifiedOptions>;
//                                                                   ~~~~~~~~~~~~~~~~
// Types of property 'leavesOnly' are incompatible. Type 'string' is not assignable to type 'boolean'.
```
*/
export type ApplyDefaultOptions<
	Options extends object,
	Defaults extends Simplify<Omit<Required<Options>, RequiredKeysOf<Options>> & Partial<Record<RequiredKeysOf<Options>, never>>>,
	SpecifiedOptions extends Options,
> =
	If<IsAny<SpecifiedOptions>, Defaults,
		If<IsNever<SpecifiedOptions>, Defaults,
			Simplify<Merge<Defaults, {
				[Key in keyof SpecifiedOptions
				as Key extends OptionalKeysOf<Options> ? undefined extends SpecifiedOptions[Key] ? never : Key : Key
				]: SpecifiedOptions[Key]
			}> & Required<Options>>>>; // `& Required<Options>` ensures that `ApplyDefaultOptions<SomeOption, ...>` is always assignable to `Required<SomeOption>`

/**
Collapses literal types in a union into their corresponding primitive types, when possible. For example, `CollapseLiterals<'foo' | 'bar' | (string & {})>` returns `string`.

Note: This doesn't collapse literals within tagged types. For example, `CollapseLiterals<Tagged<'foo' | (string & {}), 'Tag'>>` returns `("foo" & Tag<"Tag", never>) | (string & Tag<"Tag", never>)` and not `string & Tag<"Tag", never>`.

Use-case: For collapsing unions created using {@link LiteralUnion}.

@example
```
import type {LiteralUnion} from 'type-fest';

type A = CollapseLiterals<'foo' | 'bar' | (string & {})>;
//=> string

type B = CollapseLiterals<LiteralUnion<1 | 2 | 3, number>>;
//=> number

type C = CollapseLiterals<LiteralUnion<'onClick' | 'onChange', `on${string}`>>;
//=> `on${string}`

type D = CollapseLiterals<'click' | 'change' | (`on${string}` & {})>;
//=> 'click' | 'change' | `on${string}`

type E = CollapseLiterals<LiteralUnion<'foo' | 'bar', string> | null | undefined>;
//=> string | null | undefined
```
*/
export type CollapseLiterals<T> = {} extends T
	? T
	: T extends infer U & {}
		? U
		: T;

/**
Normalize keys by including string and number representations wherever applicable.

@example
```ts
type A = NormalizedKeys<0 | '1'>;
//=> 0 | '0' | 1 | '1'

type B = NormalizedKeys<string>;
//=> string | number

type C = NormalizedKeys<number>;
//=> number | `${number}`

type D = NormalizedKeys<symbol | 'foo'>;
//=> symbol | 'foo'
```
*/
export type NormalizedKeys<Keys extends PropertyKey> =
	| Keys
	| (string extends Keys ? number : never)
	| StringToNumber<Keys & string>
	| ToString<Keys & number>;

export {};
