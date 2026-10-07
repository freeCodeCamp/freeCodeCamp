import type tag from 'tagged-tag';

// eslint-disable-next-line type-fest/require-exported-types
export type TagContainer<Token> = {
	readonly [tag]: Token;
};

type Tag<Token extends PropertyKey, TagMetadata> = TagContainer<{[K in Token]: TagMetadata}>;

/**
Create a [tagged type](https://medium.com/@KevinBGreene/surviving-the-typescript-ecosystem-branding-and-type-tagging-6cf6e516523d) that can support [multiple tags](https://github.com/sindresorhus/type-fest/issues/665) and [per-tag metadata](https://medium.com/@ethanresnick/advanced-typescript-tagged-types-improved-with-type-level-metadata-5072fc125fcf).

A type returned by `Tagged` can be passed to `Tagged` again, to create a type with multiple tags.

A tag's name is usually a string (and must be a string, number, or symbol), but each application of a tag can also contain an arbitrary type as its "metadata". See {@link GetTagMetadata} for examples and explanation.

A type `A` returned by `Tagged` is assignable to another type `B` returned by `Tagged` if and only if:
  - the underlying (untagged) type of `A` is assignable to the underlying type of `B`;
	- `A` contains at least all the tags `B` has;
	- and the metadata type for each of `A`'s tags is assignable to the metadata type of `B`'s corresponding tag.

There have been several discussions about adding similar features to TypeScript. Unfortunately, nothing has (yet) moved forward:
	- [Microsoft/TypeScript#202](https://github.com/microsoft/TypeScript/issues/202)
	- [Microsoft/TypeScript#4895](https://github.com/microsoft/TypeScript/issues/4895)
	- [Microsoft/TypeScript#33290](https://github.com/microsoft/TypeScript/pull/33290)

@example
```
import type {Tagged} from 'type-fest';

type AccountNumber = Tagged<number, 'AccountNumber'>;
type AccountBalance = Tagged<number, 'AccountBalance'>;

function createAccountNumber(): AccountNumber {
	// As you can see, casting from a `number` (the underlying type being tagged) is allowed.
	return 2 as AccountNumber;
}

declare function getMoneyForAccount(accountNumber: AccountNumber): AccountBalance;

// This will compile successfully.
getMoneyForAccount(createAccountNumber());

// But this won't, because it has to be explicitly passed as an `AccountNumber` type!
// Critically, you could not accidentally use an `AccountBalance` as an `AccountNumber`.
// @ts-expect-error
getMoneyForAccount(2);

// You can also use tagged values like their underlying, untagged type.
// I.e., this will compile successfully because an `AccountNumber` can be used as a regular `number`.
// In this sense, the underlying base type is not hidden, which differentiates tagged types from opaque types in other languages.
const accountNumber = createAccountNumber() + 2;
```

@example
```
import type {Tagged} from 'type-fest';

// You can apply multiple tags to a type by using `Tagged` repeatedly.
type Url = Tagged<string, 'URL'>;
type SpecialCacheKey = Tagged<Url, 'SpecialCacheKey'>;

// You can also pass a union of tag names, so this is equivalent to the above, although it doesn't give you the ability to assign distinct metadata to each tag.
type SpecialCacheKey2 = Tagged<string, 'URL' | 'SpecialCacheKey'>;
```

@category Type
*/
export type Tagged<Type, TagName extends PropertyKey, TagMetadata = never> = Type & Tag<TagName, TagMetadata>;

/**
Given a type and a tag name, returns the metadata associated with that tag on that type.

In the example below, one could use `Tagged<string, 'JSON'>` to represent "a string that is valid JSON". That type might be useful -- for instance, it communicates that the value can be safely passed to `JSON.parse` without it throwing an exception. However, it doesn't indicate what type of value will be produced on parse (which is sometimes known). `JsonOf<T>` solves this; it represents "a string that is valid JSON and that, if parsed, would produce a value of type T". The type T is held in the metadata associated with the `'JSON'` tag.

This article explains more about [how tag metadata works and when it can be useful](https://medium.com/@ethanresnick/advanced-typescript-tagged-types-improved-with-type-level-metadata-5072fc125fcf).

@example
```
import type {Tagged, GetTagMetadata} from 'type-fest';

type JsonOf<T> = Tagged<string, 'JSON', T>;

function stringify<T>(it: T) {
	return JSON.stringify(it) as JsonOf<T>;
}

function parse<T extends JsonOf<unknown>>(it: T) {
	return JSON.parse(it) as GetTagMetadata<T, 'JSON'>;
}

const x = stringify({hello: 'world'});
const parsed = parse(x); // The type of `parsed` is { hello: string }
```

@category Type
*/
export type GetTagMetadata<Type extends Tag<TagName, unknown>, TagName extends PropertyKey> = Type[typeof tag][TagName];

/**
Get the untagged portion of a tagged type created with `Tagged`.

Why is this necessary?

1. Use a `Tagged` type as object keys
2. Prevent TS4058 error: "Return type of exported function has or is using name X from external module Y but cannot be named"

@example
```
import type {Tagged, UnwrapTagged} from 'type-fest';

type AccountType = Tagged<'SAVINGS' | 'CHECKING', 'AccountType'>;

const moneyByAccountType: Record<UnwrapTagged<AccountType>, number> = {
	SAVINGS: 99,
	CHECKING: 0.1,
};

// Without UnwrapTagged, the following expression would throw a type error.
const money = moneyByAccountType.SAVINGS; // TS error: Property 'SAVINGS' does not exist

// Attempting to pass a non-Tagged type to UnwrapTagged will raise a type error.
// @ts-expect-error
type WontWork = UnwrapTagged<string>;
```

@category Type
*/
export type UnwrapTagged<TaggedType extends Tag<PropertyKey, any>> =
	RemoveAllTags<TaggedType>;

type RemoveAllTags<T> = T extends Tag<PropertyKey, any>
	? {
		[ThisTag in keyof T[typeof tag]]: T extends Tagged<infer Type, ThisTag, T[typeof tag][ThisTag]>
			? RemoveAllTags<Type>
			: never
	}[keyof T[typeof tag]]
	: T;

/**
Note: The `Opaque` type is deprecated in favor of `Tagged`.

Attach a "tag" to an arbitrary type. This allows you to create distinct types, that aren't assignable to one another, for runtime values that would otherwise have the same type. (See examples.)

The generic type parameters can be anything.

Note that `Opaque` is somewhat of a misnomer here, in that, unlike [some alternative implementations](https://github.com/microsoft/TypeScript/issues/4895#issuecomment-425132582), the original, untagged type is not actually hidden. (E.g., functions that accept the untagged type can still be called with the "opaque" version -- but not vice-versa.)

Also note that this implementation is limited to a single tag. If you want to allow multiple tags, use `Tagged` instead.

[Read more about tagged types.](https://medium.com/@KevinBGreene/surviving-the-typescript-ecosystem-branding-and-type-tagging-6cf6e516523d)

There have been several discussions about adding similar features to TypeScript. Unfortunately, nothing has (yet) moved forward:
	- [Microsoft/TypeScript#202](https://github.com/microsoft/TypeScript/issues/202)
	- [Microsoft/TypeScript#15408](https://github.com/Microsoft/TypeScript/issues/15408)
	- [Microsoft/TypeScript#15807](https://github.com/Microsoft/TypeScript/issues/15807)

@example
```
import type {Opaque} from 'type-fest';

type AccountNumber = Opaque<number, 'AccountNumber'>;
type AccountBalance = Opaque<number, 'AccountBalance'>;

// The `Token` parameter allows the compiler to differentiate between types, whereas "unknown" will not. For example, consider the following structures:
type ThingOne = Opaque<string>;
type ThingTwo = Opaque<string>;

// To the compiler, these types are allowed to be cast to each other as they have the same underlying type. They are both `string & { __opaque__: unknown }`.
// To avoid this behaviour, you would instead pass the "Token" parameter, like so.
type NewThingOne = Opaque<string, 'ThingOne'>;
type NewThingTwo = Opaque<string, 'ThingTwo'>;

// Now they're completely separate types, so the following will fail to compile.
function createNewThingOne(): NewThingOne {
	// As you can see, casting from a string is still allowed. However, you may not cast NewThingOne to NewThingTwo, and vice versa.
	return 'new thing one' as NewThingOne;
}

// This will fail to compile, as they are fundamentally different types.
// @ts-expect-error
const thingTwo = createNewThingOne() as NewThingTwo;

// Here's another example of opaque typing.
function createAccountNumber(): AccountNumber {
	return 2 as AccountNumber;
}

declare function getMoneyForAccount(accountNumber: AccountNumber): AccountBalance;

// This will compile successfully.
getMoneyForAccount(createAccountNumber());

// But this won't, because it has to be explicitly passed as an `AccountNumber` type.
// @ts-expect-error
getMoneyForAccount(2);

// You can use opaque values like they aren't opaque too.
const accountNumber = createAccountNumber();

// This will compile successfully.
const newAccountNumber = accountNumber + 2;

// As a side note, you can (and should) use recursive types for your opaque types to make them stronger and hopefully easier to type.
type Person = {
	id: Opaque<number, Person>;
	name: string;
};
```

@category Type
@deprecated Use {@link Tagged} instead
*/
export type Opaque<Type, Token = unknown> = Type & TagContainer<Token>;

/**
Note: The `UnwrapOpaque` type is deprecated in favor of `UnwrapTagged`.

Revert an opaque or tagged type back to its original type by removing the readonly `[tag]`.

Why is this necessary?

1. Use an `Opaque` type as object keys
2. Prevent TS4058 error: "Return type of exported function has or is using name X from external module Y but cannot be named"

@example
```
import type {Opaque, UnwrapOpaque} from 'type-fest';

type AccountType = Opaque<'SAVINGS' | 'CHECKING', 'AccountType'>;

const moneyByAccountType: Record<UnwrapOpaque<AccountType>, number> = {
	SAVINGS: 99,
	CHECKING: 0.1,
};

// Without UnwrapOpaque, the following expression would throw a type error.
const money = moneyByAccountType.SAVINGS; // TS error: Property 'SAVINGS' does not exist

// Attempting to pass a non-Opaque type to UnwrapOpaque will raise a type error.
// @ts-expect-error
type WontWork = UnwrapOpaque<string>;

// Using a Tagged type will work too.
// @ts-expect-error
type WillWork = UnwrapOpaque<Tagged<number, 'AccountNumber'>>; // number
```

@category Type
@deprecated Use {@link UnwrapTagged} instead
*/
export type UnwrapOpaque<OpaqueType extends TagContainer<unknown>> =
	OpaqueType extends Tag<PropertyKey, any>
		? RemoveAllTags<OpaqueType>
		: OpaqueType extends Opaque<infer Type, OpaqueType[typeof tag]>
			? Type
			: OpaqueType;

export {type default as tag} from 'tagged-tag';

export {};
