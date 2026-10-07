<div align="center">
	<br>
	<br>
	<img src="media/logo.svg" alt="type-fest" height="300">
	<br>
	<br>
	<b>A collection of essential TypeScript types</b>
	<br>
	<br>
	<br>
	<br>
	<hr>
	<div align="center">
		<p>
			<p>
				<sup>
					<a href="https://github.com/sponsors/sindresorhus">Sindre Sorhus' open source work is supported by the community</a>
				</sup>
			</p>
			<sup>Special thanks to:</sup>
			<br>
			<br>
			<a href="https://nitric.io/?utm_campaign=github_repo&utm_medium=referral&utm_content=sindresorhus&utm_source=github">
				<div>
					<img width="230" src="https://sindresorhus.com/assets/thanks/nitric-logo.svg" alt="nitric logo">
				</div>
				<b>Effortless backends with infrastructure from code</b>
				<div>
					<sup>An open-source framework that supports any programming language, cloud provider, or deployment automation tool.</sup>
				</div>
			</a>
			<br>
			<br>
			<a href="https://circleback.ai?utm_source=sindresorhus&utm_medium=sponsorship&utm_campaign=awesome-list&utm_id=type-fest">
				<div>
					<img width="300" src="https://sindresorhus.com/assets/thanks/circleback-logo.png?x" alt="Circleback logo">
				</div>
				<b>Get the most out of every conversation.</b>
				<div>
					<sup>AI-powered meeting notes, automations, and search. Give AI agents the context they need to get things done.</sup>
				</div>
			</a>
		</p>
	</div>
	<br>
	<hr>
</div>
<br>
<br>

[![](https://img.shields.io/badge/unicorn-approved-ff69b4.svg)](https://giphy.com/gifs/illustration-rainbow-unicorn-26AHG5KGFxSkUWw1i)
[![npm dependents](https://badgen.net/npm/dependents/type-fest)](https://www.npmjs.com/package/type-fest?activeTab=dependents)
[![npm downloads](https://badgen.net/npm/dt/type-fest)](https://www.npmjs.com/package/type-fest)

Many of the types here should have been built-in. You can help by suggesting some of them to the [TypeScript project](https://github.com/Microsoft/TypeScript/blob/main/CONTRIBUTING.md).

Either add this package as a dependency or copy-paste the needed types. No credit required. 👌

PR welcome for additional commonly needed types and docs improvements. Read the [contributing guidelines](.github/contributing.md) first.

**Help wanted with reviewing [proposals](https://github.com/sindresorhus/type-fest/issues) and [pull requests](https://github.com/sindresorhus/type-fest/pulls).**

## Install

```sh
npm install type-fest
```

*Requires TypeScript >=5.9, [ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c), and [`{strict: true}`](https://www.typescriptlang.org/tsconfig#strict) in your tsconfig.*

> [!NOTE]
> This readme shows the current development version. For docs about the latest version, see the [npm page](https://www.npmjs.com/package/type-fest).

*You may also like my [`ts-extras`](https://github.com/sindresorhus/ts-extras) package which provides runtime functions for some of these types.*

## Usage

```ts
import type {Except} from 'type-fest';

type Foo = {
	unicorn: string;
	rainbow: boolean;
};

type FooWithoutRainbow = Except<Foo, 'rainbow'>;
//=> {unicorn: string}
```

## API

Click the type names for complete docs.

### Basic

- [`Primitive`](source/primitive.d.ts) - Matches any [primitive value](https://developer.mozilla.org/en-US/docs/Glossary/Primitive).
- [`Class`](source/basic.d.ts) - Matches a [`class`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).
- [`Constructor`](source/basic.d.ts) - Matches a [`class` constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).
- [`AbstractClass`](source/basic.d.ts) - Matches an [`abstract class`](https://www.typescriptlang.org/docs/handbook/2/classes.html#abstract-classes-and-members).
- [`AbstractConstructor`](source/basic.d.ts) - Matches an [`abstract class`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-2.html#abstract-construct-signatures) constructor.
- [`TypedArray`](source/typed-array.d.ts) - Matches any [typed array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray), like `Uint8Array` or `Float64Array`.
- [`ObservableLike`](source/globals/observable-like.d.ts) - Matches a value that is like an [Observable](https://github.com/tc39/proposal-observable).
- [`LowercaseLetter`](source/characters.d.ts) - Matches any lowercase letter in the basic Latin alphabet (a-z).
- [`UppercaseLetter`](source/characters.d.ts) - Matches any uppercase letter in the basic Latin alphabet (A-Z).
- [`DigitCharacter`](source/characters.d.ts) - Matches any digit as a string ('0'-'9').
- [`Alphanumeric`](source/characters.d.ts) - Matches any lowercase letter (a-z), uppercase letter (A-Z), or digit ('0'-'9') in the basic Latin alphabet.

### Utilities

- [`EmptyObject`](source/empty-object.d.ts) - Represents a strictly empty plain object, the `{}` value.
- [`NonEmptyObject`](source/non-empty-object.d.ts) - Represents an object with at least 1 non-optional key.
- [`UnknownRecord`](source/unknown-record.d.ts) - Represents an object with `unknown` value. You probably want this instead of `{}`.
- [`UnknownArray`](source/unknown-array.d.ts) - Represents an array with `unknown` value.
- [`UnknownMap`](source/unknown-map.d.ts) - Represents a map with `unknown` key and value.
- [`UnknownSet`](source/unknown-set.d.ts) - Represents a set with `unknown` value.
- [`Except`](source/except.d.ts) - Create a type from an object type without certain keys.
- [`Writable`](source/writable.d.ts) - Create a type that strips `readonly` from the given type. Inverse of `Readonly<T>`.
- [`WritableDeep`](source/writable-deep.d.ts) - Create a deeply mutable version of an `object`/`ReadonlyMap`/`ReadonlySet`/`ReadonlyArray` type. The inverse of `ReadonlyDeep<T>`. Use `Writable<T>` if you only need one level deep.
- [`Merge`](source/merge.d.ts) - Merge two types into a new type. Keys of the second type overrides keys of the first type.
- [`ObjectMerge`](source/object-merge.d.ts) - Merge two object types into a new object type, where keys from the second override keys from the first.
- [`MergeDeep`](source/merge-deep.d.ts) - Merge two objects or two arrays/tuples recursively into a new type.
- [`MergeExclusive`](source/merge-exclusive.d.ts) - Create a type that has mutually exclusive keys.
- [`OverrideProperties`](source/override-properties.d.ts) - Override existing properties of the given type. Similar to `Merge`, but enforces that the original type has the properties you want to override.
- [`RequireAtLeastOne`](source/require-at-least-one.d.ts) - Create a type that requires at least one of the given keys, while keeping the remaining keys as is.
- [`RequireExactlyOne`](source/require-exactly-one.d.ts) - Create a type that requires exactly one of the given keys and disallows more, while keeping the remaining keys as is.
- [`RequireAllOrNone`](source/require-all-or-none.d.ts) - Create a type that requires all of the given keys or none of the given keys, while keeping the remaining keys as is.
- [`RequireOneOrNone`](source/require-one-or-none.d.ts) - Create a type that requires exactly one of the given keys or none of the given keys, while keeping the remaining keys as is.
- [`SingleKeyObject`](source/single-key-object.d.ts) - Create a type that only accepts an object with a single key.
- [`RequiredDeep`](source/required-deep.d.ts) - Create a deeply required version of another type.
- [`PickDeep`](source/pick-deep.d.ts) - Pick properties from a deeply-nested object.
- [`OmitDeep`](source/omit-deep.d.ts) - Omit properties from a deeply-nested object.
- [`OmitIndexSignature`](source/omit-index-signature.d.ts) - Omit any index signatures from the given object type, leaving only explicitly defined properties.
- [`PickIndexSignature`](source/pick-index-signature.d.ts) - Pick only index signatures from the given object type, leaving out all explicitly defined properties.
- [`PartialDeep`](source/partial-deep.d.ts) - Create a deeply optional version of another type.
- [`PartialOnUndefinedDeep`](source/partial-on-undefined-deep.d.ts) - Create a deep version of another type where all keys accepting `undefined` type are set to optional.
- [`UndefinedOnPartialDeep`](source/undefined-on-partial-deep.d.ts) - Create a deep version of another type where all optional keys are set to also accept `undefined`.
- [`UnwrapPartial`](source/unwrap-partial.d.ts) - Revert the `Partial` modifier on an object type.
- [`ReadonlyDeep`](source/readonly-deep.d.ts) - Create a deeply immutable version of another type.
- [`LiteralUnion`](source/literal-union.d.ts) - Create a union type by combining primitive types and literal types without sacrificing auto-completion in IDEs for the literal type part of the union.
- [`Tagged`](source/tagged.d.ts) - Create a [tagged type](https://medium.com/@KevinBGreene/surviving-the-typescript-ecosystem-branding-and-type-tagging-6cf6e516523d) that can support [multiple tags](https://github.com/sindresorhus/type-fest/issues/665) and [per-tag metadata](https://medium.com/@ethanresnick/advanced-typescript-tagged-types-improved-with-type-level-metadata-5072fc125fcf).
- [`UnwrapTagged`](source/tagged.d.ts) - Get the untagged portion of a tagged type created with `Tagged`.
- [`InvariantOf`](source/invariant-of.d.ts) - Create an [invariant type](https://basarat.gitbook.io/typescript/type-system/type-compatibility#footnote-invariance), which is a type that does not accept supertypes and subtypes.
- [`SetOptional`](source/set-optional.d.ts) - Create a type that makes the given keys optional, while keeping the remaining keys as is.
- [`SetReadonly`](source/set-readonly.d.ts) - Create a type that makes the given keys readonly, while keeping the remaining keys as is.
- [`SetRequired`](source/set-required.d.ts) - Create a type that makes the given keys required, while keeping the remaining keys as is.
- [`SetRequiredDeep`](source/set-required-deep.d.ts) - Create a type that makes the given keys required, with support for deeply nested key paths, while keeping the remaining keys as is.
- [`SetNonNullable`](source/set-non-nullable.d.ts) - Create a type that makes the given keys non-nullable, while keeping the remaining keys as is.
- [`SetNonNullableDeep`](source/set-non-nullable-deep.d.ts) - Create a type that makes the specified keys non-nullable (removes `null` and `undefined`), supports deeply nested key paths, and leaves all other keys unchanged.
- [`NonNullableDeep`](source/non-nullable-deep.d.ts) - Recursively removes `null` and `undefined` from the specified type.
- [`ValueOf`](source/value-of.d.ts) - Create a union of the given object's values, and optionally specify which keys to get the values from.
- [`ConditionalKeys`](source/conditional-keys.d.ts) - Extract the keys from a type where the value type of the key extends the given `Condition`.
- [`ConditionalPick`](source/conditional-pick.d.ts) - Pick keys from the shape that matches the given `Condition`.
- [`ConditionalPickDeep`](source/conditional-pick-deep.d.ts) - Pick keys recursively from the shape that matches the given condition.
- [`ConditionalExcept`](source/conditional-except.d.ts) - Exclude keys from a shape that matches the given `Condition`.
- [`UnionToIntersection`](source/union-to-intersection.d.ts) - Convert a union type to an intersection type.
- [`LiteralToPrimitive`](source/literal-to-primitive.d.ts) - Given a [literal type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types) return the [primitive type](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) it belongs to, or `never` if it's not a primitive.
- [`LiteralToPrimitiveDeep`](source/literal-to-primitive-deep.d.ts) - Like `LiteralToPrimitive` except it converts literal types inside an object or array deeply.
- [`Stringified`](source/stringified.d.ts) - Create a type with the keys of the given type changed to `string` type.
- [`IterableElement`](source/iterable-element.d.ts) - Get the element type of an `Iterable`/`AsyncIterable`. For example, `Array`, `Set`, `Map`, generator, stream, etc.
- [`Entry`](source/entry.d.ts) - Create a type that describes a single key-value pair produced when calling a collection’s `entries` method.
- [`Entries`](source/entries.d.ts) - Create a type that describes the key-value pairs produced when calling a collection’s `entries` method.
- [`SetReturnType`](source/set-return-type.d.ts) - Create a function type with a return type of your choice and the same parameters as the given function type.
- [`SetParameterType`](source/set-parameter-type.d.ts) - Create a function that replaces some parameters with the given parameters.
- [`Simplify`](source/simplify.d.ts) - Useful to flatten the type output to improve type hints shown in editors. And also to transform an interface into a type to aide with assignability.
- [`SimplifyDeep`](source/simplify-deep.d.ts) - Deeply simplifies an object type.
- [`Get`](source/get.d.ts) - Get a deeply-nested property from an object using a key path, like [Lodash's `.get()`](https://lodash.com/docs/latest#get) function.
- [`KeyAsString`](source/key-as-string.d.ts) - Get keys of the given type as strings.
- [`Schema`](source/schema.d.ts) - Create a deep version of another object type where property values are recursively replaced into a given value type.
- [`Exact`](source/exact.d.ts) - Create a type that does not allow extra properties, meaning it only allows properties that are explicitly declared.
- [`KeysOfUnion`](source/keys-of-union.d.ts) - Create a union of all keys from a given type, even those exclusive to specific union members.
- [`OptionalKeysOf`](source/optional-keys-of.d.ts) - Extract all optional keys from the given type.
- [`HasOptionalKeys`](source/has-optional-keys.d.ts) - Returns a boolean for whether the given type has any optional fields.
- [`RequiredKeysOf`](source/required-keys-of.d.ts) - Extract all required keys from the given type.
- [`HasRequiredKeys`](source/has-required-keys.d.ts) - Returns a boolean for whether the given type has any required fields.
- [`ReadonlyKeysOf`](source/readonly-keys-of.d.ts) - Extract all readonly keys from the given type.
- [`HasReadonlyKeys`](source/has-readonly-keys.d.ts) - Returns a boolean for whether the given type has any readonly fields.
- [`WritableKeysOf`](source/writable-keys-of.d.ts) - Extract all writable keys from the given type.
- [`HasWritableKeys`](source/has-writable-keys.d.ts) - Returns a boolean for whether the given type has any writable fields.
- [`Spread`](source/spread.d.ts) - Mimic the type inferred by TypeScript when merging two objects or two arrays/tuples using the spread syntax.
- [`IsEqual`](source/is-equal.d.ts) - Returns a boolean for whether the two given types are equal.
- [`TaggedUnion`](source/tagged-union.d.ts) - Create a union of types that share a common discriminant property.
- [`IntRange`](source/int-range.d.ts) - Generate a union of numbers between a specified start (inclusive) and end (exclusive), with an optional step.
- [`IntClosedRange`](source/int-closed-range.d.ts) - Generate a union of numbers between a specified start and end (both inclusive), with an optional step.
- [`ArrayIndices`](source/array-indices.d.ts) - Provides valid indices for a constant array or tuple.
- [`ArrayValues`](source/array-values.d.ts) - Provides all values for a constant array or tuple.
- [`ArraySplice`](source/array-splice.d.ts) - Create a new array type by adding or removing elements at a specified index range in the original array.
- [`ArrayTail`](source/array-tail.d.ts) - Extract the type of an array or tuple minus the first element.
- [`SetFieldType`](source/set-field-type.d.ts) - Create a type that changes the type of the given keys.
- [`Paths`](source/paths.d.ts) - Generate a union of all possible paths to properties in the given object.
- [`SharedUnionFields`](source/shared-union-fields.d.ts) - Create a type with shared fields from a union of object types.
- [`SharedUnionFieldsDeep`](source/shared-union-fields-deep.d.ts) - Create a type with shared fields from a union of object types, deeply traversing nested structures.
- [`AllUnionFields`](source/all-union-fields.d.ts) - Create a type with all fields from a union of object types.
- [`DistributedOmit`](source/distributed-omit.d.ts) - Omits keys from a type, distributing the operation over a union.
- [`DistributedPick`](source/distributed-pick.d.ts) - Pick keys from a type, distributing the operation over a union.
- [`And`](source/and.d.ts) - Returns a boolean for whether two given types are both `true`.
- [`Or`](source/or.d.ts) - Returns a boolean for whether either of two given types is `true`.
- [`Xor`](source/xor.d.ts) - Returns a boolean for whether only one of two given types is `true`.
- [`AndAll`](source/and-all.d.ts) - Returns a boolean for whether all of the given elements are `true`.
- [`OrAll`](source/or-all.d.ts) - Returns a boolean for whether any of the given elements is `true`.
- [`AllExtend`](source/all-extend.d.ts) - Returns a boolean for whether every element in an array type extends another type.
- [`SomeExtend`](source/some-extend.d.ts) - Returns a boolean for whether some element in an array type extends another type.
- [`NonEmptyTuple`](source/non-empty-tuple.d.ts) - Matches any non-empty tuple.
- [`NonEmptyString`](source/non-empty-string.d.ts) - Matches any non-empty string.
- [`FindGlobalType`](source/find-global-type.d.ts) - Tries to find the type of a global with the given name.
- [`FindGlobalInstanceType`](source/find-global-type.d.ts) - Tries to find one or more types from their globally-defined constructors.
- [`ConditionalSimplify`](source/conditional-simplify.d.ts) - Simplifies a type while including and/or excluding certain types from being simplified.
- [`ConditionalSimplifyDeep`](source/conditional-simplify-deep.d.ts) - Recursively simplifies a type while including and/or excluding certain types from being simplified.
- [`ExclusifyUnion`](source/exclusify-union.d.ts) - Ensure mutual exclusivity in object unions by adding other members’ keys as `?: never`.
- [`Optional`](source/optional.d.ts) - Create a type that represents either the value or `undefined`, while stripping `null` from the type.
- [`UnionMember`](source/union-member.d.ts) - Returns an arbitrary member of a union type.
- [`UnionLength`](source/union-length.d.ts) - Returns the length of a union type.

### Type Guard

- [`If`](source/if.d.ts) - An if-else-like type that resolves depending on whether the given `boolean` type is `true` or `false`.
- [`IsLiteral`](source/is-literal.d.ts) - Returns a boolean for whether the given type is a [literal type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types).
- [`IsStringLiteral`](source/is-literal.d.ts) - Returns a boolean for whether the given type is a `string` [literal type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types).
- [`IsNumericLiteral`](source/is-literal.d.ts) - Returns a boolean for whether the given type is a `number` or `bigint` [literal type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types).
- [`IsBooleanLiteral`](source/is-literal.d.ts) - Returns a boolean for whether the given type is a `true` or `false` [literal type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types).
- [`IsSymbolLiteral`](source/is-literal.d.ts) - Returns a boolean for whether the given type is a `symbol` [literal type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types).
- [`IsAny`](source/is-any.d.ts) - Returns a boolean for whether the given type is `any`.
- [`IsNever`](source/is-never.d.ts) - Returns a boolean for whether the given type is `never`.
- [`IsUnknown`](source/is-unknown.d.ts) - Returns a boolean for whether the given type is `unknown`.
- [`IsEmptyObject`](source/empty-object.d.ts) - Returns a boolean for whether the type is strictly equal to an empty plain object, the `{}` value.
- [`IsNull`](source/is-null.d.ts) - Returns a boolean for whether the given type is `null`.
- [`IsUndefined`](source/is-undefined.d.ts) - Returns a boolean for whether the given type is `undefined`.
- [`IsTuple`](source/is-tuple.d.ts) - Returns a boolean for whether the given array is a tuple.
- [`IsUnion`](source/is-union.d.ts) - Returns a boolean for whether the given type is a union.
- [`IsLowercase`](source/is-lowercase.d.ts) - Returns a boolean for whether the given string literal is lowercase.
- [`IsUppercase`](source/is-uppercase.d.ts) - Returns a boolean for whether the given string literal is uppercase.
- [`IsOptional`](source/is-optional.d.ts) - Returns a boolean for whether the given type includes `undefined`.
- [`IsNullable`](source/is-nullable.d.ts) - Returns a boolean for whether the given type includes `null`.
- [`IsOptionalKeyOf`](source/is-optional-key-of.d.ts) - Returns a boolean for whether the given key is an optional key of type.
- [`IsRequiredKeyOf`](source/is-required-key-of.d.ts) - Returns a boolean for whether the given key is a required key of type.
- [`IsReadonlyKeyOf`](source/is-readonly-key-of.d.ts) - Returns a boolean for whether the given key is a readonly key of type.
- [`IsWritableKeyOf`](source/is-writable-key-of.d.ts) - Returns a boolean for whether the given key is a writable key of type.

### JSON

- [`Jsonify`](source/jsonify.d.ts) - Transform a type to one that is assignable to the `JsonValue` type.
- [`Jsonifiable`](source/jsonifiable.d.ts) - Matches a value that can be losslessly converted to JSON.
- [`JsonPrimitive`](source/json-value.d.ts) - Matches any valid JSON primitive value.
- [`JsonObject`](source/json-value.d.ts) - Matches a JSON object.
- [`JsonArray`](source/json-value.d.ts) - Matches a JSON array.
- [`JsonValue`](source/json-value.d.ts) - Matches any valid JSON value.

### Structured clone

- [`StructuredCloneable`](source/structured-cloneable.d.ts) - Matches a value that can be losslessly cloned using `structuredClone`.

### Async

- [`Promisable`](source/promisable.d.ts) - Create a type that represents either the value or the value wrapped in `PromiseLike`.
- [`AsyncReturnType`](source/async-return-type.d.ts) - Unwrap the return type of a function that returns a `Promise`.
- [`Asyncify`](source/asyncify.d.ts) - Create an async version of the given function type, by boxing the return type in `Promise` while keeping the same parameter types.

### String

- [`Trim`](source/trim.d.ts) - Remove leading and trailing spaces from a string.
- [`Split`](source/split.d.ts) - Represents an array of strings split using a given character or character set.
- [`Words`](source/words.d.ts) - Split a string similar to Lodash's `_.words()` function.
- [`Replace`](source/replace.d.ts) - Represents a string with some or all matches replaced by a replacement.
- [`StringSlice`](source/string-slice.d.ts) - Returns a string slice of a given range, just like `String#slice()`.
- [`StringRepeat`](source/string-repeat.d.ts) - Returns a new string which contains the specified number of copies of a given string, just like `String#repeat()`.
- [`RemovePrefix`](source/remove-prefix.d.ts) - Remove the specified prefix from the start of a string.

### Array

- [`Arrayable`](source/arrayable.d.ts) - Create a type that represents either the value or an array of the value.
- [`Includes`](source/includes.d.ts) - Returns a boolean for whether the given array includes the given item.
- [`Join`](source/join.d.ts) - Join an array of strings and/or numbers using the given string as a delimiter.
- [`ArraySlice`](source/array-slice.d.ts) - Returns an array slice of a given range, just like `Array#slice()`.
- [`ArrayElement`](source/array-element.d.ts) - Extracts the element type of an array or tuple.
- [`LastArrayElement`](source/last-array-element.d.ts) - Extract the type of the last element of an array.
- [`FixedLengthArray`](source/fixed-length-array.d.ts) - Create a type that represents an array of the given type and length. The `Array` prototype methods that manipulate its length are excluded from the resulting type.
- [`MultidimensionalArray`](source/multidimensional-array.d.ts) - Create a type that represents a multidimensional array of the given type and dimension.
- [`MultidimensionalReadonlyArray`](source/multidimensional-readonly-array.d.ts) - Create a type that represents a multidimensional readonly array of the given type and dimension.
- [`ReadonlyTuple`](source/readonly-tuple.d.ts) - Create a type that represents a read-only tuple of the given type and length.
- [`TupleToUnion`](source/tuple-to-union.d.ts) - Convert a tuple/array into a union type of its elements.
- [`UnionToTuple`](source/union-to-tuple.d.ts) - Convert a union type into an unordered tuple type of its elements.
- [`TupleToObject`](source/tuple-to-object.d.ts) - Transforms a tuple into an object, mapping each tuple index to its corresponding type as a key-value pair.
- [`TupleOf`](source/tuple-of.d.ts) - Create a tuple type of the specified length with elements of the specified type.
- [`SplitOnRestElement`](source/split-on-rest-element.d.ts) - Splits an array into three parts, where the first contains all elements before the rest element, the second is the [`rest`](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types) element itself, and the third contains all elements after the rest element.
- [`ExtractRestElement`](source/extract-rest-element.d.ts) - Extract the [`rest`](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types) element type from an array.
- [`ExcludeRestElement`](source/exclude-rest-element.d.ts) - Create a tuple with the [`rest`](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types) element removed.
- [`ArrayReverse`](source/array-reverse.d.ts) - Reverse the order of elements in a tuple type.
- [`ArrayLength`](source/array-length.d.ts) - Return the length of an array. Equivalent to `T['length']` where `T` extends any array.

### Numeric

- [`PositiveInfinity`](source/numeric.d.ts) - Matches the hidden `Infinity` type.
- [`NegativeInfinity`](source/numeric.d.ts) - Matches the hidden `-Infinity` type.
- [`Finite`](source/numeric.d.ts) - A finite `number`.
- [`Integer`](source/numeric.d.ts) - A `number` that is an integer.
- [`Float`](source/numeric.d.ts) - A `number` that is not an integer.
- [`NegativeFloat`](source/numeric.d.ts) - A negative (`-∞ < x < 0`) `number` that is not an integer.
- [`Negative`](source/numeric.d.ts) - A negative `number`/`bigint` (`-∞ < x < 0`)
- [`NonNegative`](source/numeric.d.ts) - A non-negative `number`/`bigint` (`0 <= x < ∞`).
- [`NegativeInteger`](source/numeric.d.ts) - A negative (`-∞ < x < 0`) `number` that is an integer.
- [`NonNegativeInteger`](source/numeric.d.ts) - A non-negative (`0 <= x < ∞`) `number` that is an integer.
- [`IsNegative`](source/numeric.d.ts) - Returns a boolean for whether the given number is a negative number.
- [`IsFloat`](source/is-float.d.ts) - Returns a boolean for whether the given number is a float, like `1.5` or `-1.5`.
- [`IsInteger`](source/is-integer.d.ts) - Returns a boolean for whether the given number is an integer, like `-5`, `1.0`, or `100`.
- [`GreaterThan`](source/greater-than.d.ts) - Returns a boolean for whether a given number is greater than another number.
- [`GreaterThanOrEqual`](source/greater-than-or-equal.d.ts) - Returns a boolean for whether a given number is greater than or equal to another number.
- [`LessThan`](source/less-than.d.ts) - Returns a boolean for whether a given number is less than another number.
- [`LessThanOrEqual`](source/less-than-or-equal.d.ts) - Returns a boolean for whether a given number is less than or equal to another number.
- [`Sum`](source/sum.d.ts) - Returns the sum of two numbers.
- [`Subtract`](source/subtract.d.ts) - Returns the difference between two numbers.
- [`Absolute`](source/absolute.d.ts) - Returns the absolute value of the specified number or bigint.

### Change case

- [`CamelCase`](source/camel-case.d.ts) - Convert a string literal to camel-case.
- [`CamelCasedProperties`](source/camel-cased-properties.d.ts) - Convert top-level object properties to camel case.
- [`CamelCasedPropertiesDeep`](source/camel-cased-properties-deep.d.ts) - Convert object properties to camel case recursively.
- [`KebabCase`](source/kebab-case.d.ts) - Convert a string literal to kebab-case.
- [`KebabCasedProperties`](source/kebab-cased-properties.d.ts) - Convert top-level object properties to kebab case.
- [`KebabCasedPropertiesDeep`](source/kebab-cased-properties-deep.d.ts) - Convert object properties to kebab case recursively.
- [`PascalCase`](source/pascal-case.d.ts) - Convert a string literal to pascal-case.
- [`PascalCasedProperties`](source/pascal-cased-properties.d.ts) - Convert top-level object properties to pascal case.
- [`PascalCasedPropertiesDeep`](source/pascal-cased-properties-deep.d.ts) - Convert object properties to pascal case recursively.
- [`SnakeCase`](source/snake-case.d.ts) - Convert a string literal to snake-case.
- [`SnakeCasedProperties`](source/snake-cased-properties.d.ts) - Convert top-level object properties to snake case.
- [`SnakeCasedPropertiesDeep`](source/snake-cased-properties-deep.d.ts) - Convert object properties to snake case recursively.
- [`ScreamingSnakeCase`](source/screaming-snake-case.d.ts) - Convert a string literal to screaming-snake-case.
- [`DelimiterCase`](source/delimiter-case.d.ts) - Convert a string literal to a custom string delimiter casing.
- [`DelimiterCasedProperties`](source/delimiter-cased-properties.d.ts) - Convert object properties to a custom string delimiter casing.
- [`DelimiterCasedPropertiesDeep`](source/delimiter-cased-properties-deep.d.ts) - Convert object properties to a custom string delimiter casing recursively.

### Miscellaneous

- [`GlobalThis`](source/global-this.d.ts) - Declare locally scoped properties on `globalThis`.
- [`PackageJson`](source/package-json.d.ts) - Type for [npm's `package.json` file](https://docs.npmjs.com/creating-a-package-json-file). Also includes types for fields used by other popular projects, like TypeScript and Yarn.
- [`TsConfigJson`](source/tsconfig-json.d.ts) - Type for [TypeScript's `tsconfig.json` file](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

### Improved built-in

- [`ExtendsStrict`](source/extends-strict.d.ts) - A stricter, non-distributive version of `extends` for checking whether one type is assignable to another.
- [`ExtractStrict`](source/extract-strict.d.ts) - A stricter version of `Extract<T, U>` that ensures every member of `U` can successfully extract something from `T`.
- [`ExcludeStrict`](source/exclude-strict.d.ts) - A stricter version of `Exclude<T, U>` that ensures every member of `U` can successfully exclude something from `T`.
- [`ExcludeExactly`](source/exclude-exactly.d.ts) - A stricter version of `Exclude<T, U>` that excludes types only when they are exactly identical.

## Declined types

*If we decline a type addition, we will make sure to document the better solution here.*

- [`Diff` and `Spread`](https://github.com/sindresorhus/type-fest/pull/7) - The pull request author didn't provide any real-world use-cases and the PR went stale. If you think this type is useful, provide some real-world use-cases and we might reconsider.
- [`Dictionary`](https://github.com/sindresorhus/type-fest/issues/33) - You only save a few characters (`Dictionary<number>` vs `Record<string, number>`) from [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type), which is more flexible and well-known. Also, you shouldn't use an object as a dictionary. We have `Map` in JavaScript now.
- [`ExtractProperties` and `ExtractMethods`](https://github.com/sindresorhus/type-fest/pull/4) - The types violate the single responsibility principle. Instead, refine your types into more granular type hierarchies.
- [`Url2Json`](https://github.com/sindresorhus/type-fest/pull/262) - Inferring search parameters from a URL string is a cute idea, but not very useful in practice, since search parameters are usually dynamic and defined separately.
- [`Nullish`](https://github.com/sindresorhus/type-fest/pull/318) - The type only saves a couple of characters, not everyone knows what "nullish" means, and I'm also trying to [get away from `null`](https://github.com/sindresorhus/meta/discussions/7).
- [`TitleCase`](https://github.com/sindresorhus/type-fest/pull/303) - It's not solving a common need and is a better fit for a separate package.
- [`ExtendOr` and `ExtendAnd`](https://github.com/sindresorhus/type-fest/pull/247) - The benefits don't outweigh having to learn what they mean.
- [`PackageJsonExtras`](https://github.com/sindresorhus/type-fest/issues/371) - There are too many possible configurations that can be put into `package.json`. If you would like to extend `PackageJson` to support an additional configuration in your project, please see the *Extending existing types* section below.

## Alternative type names

*If you know one of our types by a different name, add it here for discovery.*

- `Prettify`- See [`Simplify`](source/simplify.d.ts)
- `Expand`- See [`Simplify`](source/simplify.d.ts)
- `PartialBy` - See [`SetOptional`](source/set-optional.d.ts)
- `RecordDeep`- See [`Schema`](source/schema.d.ts)
- `Mutable`- See [`Writable`](source/writable.d.ts)
- `RequireOnlyOne`, `OneOf` - See [`RequireExactlyOne`](source/require-exactly-one.d.ts)
- `AtMostOne` - See [`RequireOneOrNone`](source/require-one-or-none.d.ts)
- `AllKeys` - See [`KeysOfUnion`](source/keys-of-union.d.ts)
- `Branded` - See [`Tagged`](source/tagged.d.ts)
- `Opaque` - See [`Tagged`](source/tagged.d.ts)
- `SetElement` - See [`IterableElement`](source/iterable-element.d.ts)
- `SetEntry` - See [`IterableElement`](source/iterable-element.d.ts)
- `SetValues` - See [`IterableElement`](source/iterable-element.d.ts)
- `PickByTypes` - See [`ConditionalPick`](source/conditional-pick.d.ts)
- `HomomorphicOmit` - See [`Except`](source/except.d.ts)
- `IfAny`, `IfNever`, `If*` - See [`If`](source/if.d.ts)
- `Maybe`, `Option` - See [`Optional`](source/optional.d.ts)
- `MaybePromise` - See [`Promisable`](source/promisable.d.ts)
- `ReadonlyTuple` - See [`TupleOf`](source/tuple-of.d.ts)
- `LastOfUnion` - See [`UnionMember`](source/union-member.d.ts)
- `FirstOfUnion` - See [`UnionMember`](source/union-member.d.ts)

## Tips

### Extending existing types

<!-- eslint-disable-next-line type-fest/readme-jsdoc-sync -->
- [`PackageJson`](source/package-json.d.ts) - There are a lot of tools that place extra configurations inside the `package.json` file. You can extend `PackageJson` to support these additional configurations.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gBQIYGMDW2A5igFIDOEAdnNuXAEJ0o4HFmVUC+cAZlBBBwA5ElQBaXinIxhAbgCwAKFCRYCZGnQAZYFRgooPfoJHSANntmKlysWlaESFanAC8jZo-YuaAMgwLKwBhal5gIgB+AC44XX1DADpQqnCiLhsgA)

	```ts
	import type {PackageJson as BasePackageJson} from 'type-fest';
	import type {Linter} from 'eslint';

	type PackageJson = BasePackageJson & {eslintConfig?: Linter.Config};
	```
	</details>

### Related

- [typed-query-selector](https://github.com/g-plane/typed-query-selector) - Enhances `document.querySelector` and `document.querySelectorAll` with a template literal type that matches element types returned from an HTML element query selector.
- [`Linter.Config`](https://github.com/eslint/eslint/blob/main/lib/types/index.d.ts) - Definitions for the [ESLint configuration schema](https://eslint.org/docs/user-guide/configuring/language-options).

### Built-in types

There are many advanced types most users don't know about.


- [`Awaited<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype) - Extract the type of a value that a `Promise` resolves to.
  <details>
  <summary>
  	Example
  </summary>

  [Playground](https://www.typescriptlang.org/play/?#code/JYOwLgpgTgZghgYwgAgKoGdrIN4FgBQyyAkMACYBcyIArgLYBG0A3AUcSHHRFemFKADmrQiTiCe1ekygiiAXwJtkCADZx06NJigBBAA7AAytABuwJDmXENATxAJkMCGAQALDNAAUNHQElKKUZoAEoqAAUoAHs6YEwAHk8oAD4rUWJiAHpM5AAxF3dkMDcUXywyODA4J2i6IpLkCqqGDQgAOmssnIAVBsQwGjhVZGA6fVUIbnBK4CiQZFjBNzBkVSiogGtV4A2UYriKTuyVOb5kKAh0fVOUAF5kOAB3OGAV51c3LwAiTLhDTLKUEyABJsICAvIQnISF0TiAzk1qvcLlcbm0AFboOZeKFHHIXAZQeaI6EZAk0Ik4EaBACMABpqFxJF8AFJRNzzAAiUQgXwZ4kkAGYAAzIeSkxSiSXKMC2fQofIfCBkJLIe66Z6vZXxABKLgpIG6cogiR0BmMZgsEAA2l93u4kl8ALrJZIiZR2BxOGgOMCzeZuOAgMgTJKcypwLx-C1QcxIKhJc0mWNWhngwK0YJQEJpdj8Wy5mEIU4rQFURXuZWq+5PF4raPJuPte0eHQ+fxkXHpWG6GCQKBOApuITIQGNCMM2xRGgqIPIeWwKJQOqmOACadafr+rToGiFDSj-RNEfFUo6EbgaDwJB0vGz9wnhqImpRb2Es8QBlLhZwDYjuBkGQrz+kMyC6OEfjnBAACONCXGAm5aCAEDKsqHTpPIs4fMgXjQNE2aFhkxx4d+gbBqoQjWJKChKKIxbwqWZqGI2VpqtQECPNo0BJpaSA4tCZEhhAYYRu23HMbxn7IDSUJAA)

  ```ts
  interface User {
  	id: number;
  	name: string;
  	age: number;
  }

  class UserApiService {
  	async fetchUser(userId: number): Promise<User> {
  		// Fetch the user data from the database.
  		// The actual implementation might look like this:
  		// const response = await fetch('/api/user/${userId}');
  		// const data = response.json();
  		// return data;
  		return {
  			id: 1,
  			name: 'John Doe',
  			age: 30
  		};
  	}
  }

  type FetchedUser = Awaited<ReturnType<UserApiService['fetchUser']>>;

  async function handleUserData(apiService: UserApiService, userId: number) {
  	try {
  		const user: FetchedUser = await apiService.fetchUser(userId);
  		// After fetching user data, you can perform various actions such as updating the user interface,
  		// caching the data for future use, or making additional API requests as needed.
  	} catch (error) {
  		// Error handling
  	}
  }

  const userApiService = new UserApiService();
  handleUserData(userApiService, 1);
  ```

- [`Partial<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype) - Make all properties in `T` optional.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgHIHsAmEDC6QzADmyA3gLABQyycADnanALYQBcyAzmFKEQNxUaddFDAcQAV2YAjaIMoBfKlQQAbOJ05osEAIIMAQpOBrsUMkOR1eANziRkCfISKSoD4Pg4ZseAsTIALyW1DS0DEysHADkvvoMMQA0VsKi4sgAzAAMuVaKClY2wPaOknSYDrguADwA0sgQAB6QIJjaANYQAJ7oMDp+LsQAfAAUXd0cdUnI9mo+uv6uANp1ALoAlKHhyGAAFsCcAHTOAW4eYF4gyxNrwbNwago0ypRWp66jH8QcAApwYmAjxq8SWIy2FDCNDA3ToKFBQyIdR69wmfQG1TOhShyBgomQX3w3GQE2Q6IA8jIAFYQBBgI4TTiEs5bTQYsFInrLTbbHZOIlgZDlSqQABqj0kKBC3yINx6a2xfOQwH6o2FVXFaklwSCIUkbQghBAEEwENSfNOlykEGefNe5uhB2O6sgS3GPRmLogmslG1tLxUOKgEDA7hAuydtteryAA)

	```ts
	interface NodeConfig {
			appName: string;
			port: number;
	}

	class NodeAppBuilder {
			private configuration: NodeConfig = {
					appName: 'NodeApp',
					port: 3000
			};

			private updateConfig<Key extends keyof NodeConfig>(key: Key, value: NodeConfig[Key]) {
					this.configuration[key] = value;
			}

			config(config: Partial<NodeConfig>) {
					type NodeConfigKey = keyof NodeConfig;

					for (const key of Object.keys(config) as NodeConfigKey[]) {
							const updateValue = config[key];

							if (updateValue === undefined) {
									continue;
							}

							this.updateConfig(key, updateValue);
					}

					return this;
			}
	}

	// `Partial<NodeConfig>`` allows us to provide only a part of the
	// NodeConfig interface.
	new NodeAppBuilder().config({appName: 'ToDoApp'});
	```

	`Partial<T>` can be reverted with [`UnwrapPartial`](source/unwrap-partial.d.ts).
	</details>

- [`Required<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype) - Make all properties in `T` required.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://typescript-play.js.org/?target=6#code/AQ4SwOwFwUwJwGYEMDGNgGED21VQGJZwC2wA3gFCjXAzFJgA2A-AFzADOUckA5gNxUaIYjA4ckvGG07c+g6gF8KQkAgCuEFFDA5O6gEbEwUbLm2ESwABQIixACJIoSdgCUYAR3Vg4MACYAPGYuFvYAfACU5Ko0APRxwADKMBD+wFAAFuh2Vv7OSBlYGdmc8ABu8LHKsRyGxqY4oQT21pTCIHQMjOwA5DAAHgACxAAOjDAAdChYxL0ANLHUouKSMH0AEmAAhJhY6ozpAJ77GTCMjMCiV0ToSAb7UJPPC9WRgrEJwAAqR6MwSRQPFGUFocDgRHYxnEfGAowh-zgUCOwF6KwkUl6tXqJhCeEsxDaS1AXSYfUGI3GUxmc0WSneQA)

	```ts
	interface ContactForm {
			email?: string;
			message?: string;
	}

	function submitContactForm(formData: Required<ContactForm>) {
			// Send the form data to the server.
	}

	submitContactForm({
			email: 'ex@mple.com',
			message: 'Hi! Could you tell me more about…',
	});

	// TypeScript error: missing property 'message'
	submitContactForm({
			email: 'ex@mple.com',
	});
	```
	</details>

- [`Readonly<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) - Make all properties in `T` readonly.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://typescript-play.js.org/?target=6#code/AQ4UwOwVwW2AZA9gc3mAbmANsA3gKFCOAHkAzMgGkOJABEwAjKZa2kAUQCcvEu32AMQCGAF2FYBIAL4BufDRABLCKLBcywgMZgEKZOoDCiCGSXI8i4hGEwwALmABnUVxXJ57YFgzZHSVF8sT1BpBSItLGEnJz1kAy5LLy0TM2RHACUwYQATEywATwAeAITjU3MAPnkrCJMXLigtUT4AClxgGztKbyDgaX99I1TzAEokr1BRAAslJwA6FIqLAF48TtswHp9MHDla9hJGACswZvmyLjAwAC8wVpm5xZHkUZDaMKIwqyWXYCW0oN4sNlsA1h0ug5gAByACyBQAggAHJHQ7ZBIFoXbzBjMCz7OoQP5YIaJNYQMAAdziCVaALGNSIAHomcAACoFJFgADKWjcSNEwG4vC4ji0wggEEQguiTnMEGALWAV1yAFp8gVgEjeFyuKICvMrCTgVxnst5jtsGC4ljsPNhXxGaAWcAAOq6YRXYDCRg+RWIcA5JSC+kWdCepQ+v3RYCU3RInzRMCGwlpC19NYBW1Ye08R1AA)

	```ts
	enum LogLevel {
			Off,
			Debug,
			Error,
			Fatal
	};

	interface LoggerConfig {
			name: string;
			level: LogLevel;
	}

	class Logger {
			config: Readonly<LoggerConfig>;

			constructor({name, level}: LoggerConfig) {
					this.config = {name, level};
					Object.freeze(this.config);
			}
	}

	const config: LoggerConfig = {
		name: 'MyApp',
		level: LogLevel.Debug
	};

	const logger = new Logger(config);

	// TypeScript Error: cannot assign to read-only property.
	logger.config.level = LogLevel.Error;

	// We are able to edit config variable as we please.
	config.level = LogLevel.Error;
	```
	</details>

- [`Pick<T, K>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys) - From `T`, pick a set of properties whose keys are in the union `K`.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://typescript-play.js.org/?target=6#code/AQ4SwOwFwUwJwGYEMDGNgEE5TCgNugN4BQoZwOUBAXMAM5RyQDmA3KeSFABYCuAtgCMISMHloMmENh04oA9tBjQJjFuzIBfYrOAB6PcADCcGElh1gEGAHcKATwAO6ebyjB5CTNlwFwSxFR0BX5HeToYABNgBDh5fm8cfBg6AHIKG3ldA2BHOOcfFNpUygJ0pAhokr4hETFUgDpswywkggAFUwA3MFtgAF5gQgowKhhVKTYKGuFRcXo1aVZgbTIoJ3RW3xhOmB6+wfbcAGsAHi3kgBpgEtGy4AAfG54BWfqAPnZm4AAlZUj4MAkMA8GAGB4vEgfMlLLw6CwPBA8PYRmMgZVgAC6CgmI4cIommQELwICh8RBgKZKvALh1ur0bHQABR5PYMui0Wk7em2ADaAF0AJS0AASABUALIAGQAogR+Mp3CROCAFBBwVC2ikBpj5CgBIqGjizLA5TAFdAmalImAuqlBRoVQh5HBgEy1eDWfs7J5cjzGYKhroVfpDEhHM4MV6GRR5NN0JrtnRg6BVirTFBeHAKYmYY6QNpdB73LmCJZBlSAXAubtvczeSmQMNSuMbmKNgBlHFgPEUNwusBIPAAQlS1xetTmxT0SDoESgdD0C4aACtHMwxytLrohawgA)

	```ts
	interface Article {
			title: string;
			thumbnail: string;
			content: string;
	}

	// Creates new type out of the `Article` interface composed
	// from the Articles' two properties: `title` and `thumbnail`.
	// `ArticlePreview = {title: string; thumbnail: string}`
	type ArticlePreview = Pick<Article, 'title' | 'thumbnail'>;

	// Render a list of articles using only title and description.
	function renderArticlePreviews(previews: ArticlePreview[]): HTMLElement {
			const articles = document.createElement('div');

			for (const preview of previews) {
					// Append preview to the articles.
			}

			return articles;
	}

	const articles = renderArticlePreviews([
			{
				title: 'TypeScript tutorial!',
				thumbnail: '/assets/ts.jpg'
			}
	]);
	```
	</details>

- [`Record<K, T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type) - Construct a type with a set of properties `K` of type `T`.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://typescript-play.js.org/?target=6#code/AQ4ejYAUHsGcCWAXBMB2dgwGbAKYC2ADgDYwCeeemCaWArgE7ADGMxAhmuQHQBQoYEnJE8wALKEARnkaxEKdMAC8wAOS0kstGuAAfdQBM8ANzxlRjXQbVaWACwC0JPB0NqA3HwGgIwAJJoWozYHCxixnAsjAhStADmwESMMJYo1Fi4HMCIaPEu+MRklHj8gpqyoeHAAKJFFFTAAN4+giDYCIxwSAByHAR4AFw5SDF5Xm2gJBzdfQPD3WPxE5PAlBxdAPLYNQAelgh4aOHDaPQEMowrIAC+3oJ+AMKMrlrAXFhSAFZ4LEhC9g4-0BmA4JBISXgiCkBQABpILrJ5MhUGhYcATGD6Bk4Hh-jNgABrPDkOBlXyQAAq9ngYmJpOAAHcEOCRjAXqwYODfoo6DhakUSph+Uh7GI4P0xER4Cj0OSQGwMP8tP1hgAlX7swwAHgRl2RvIANALSA08ABtAC6AD4VM1Wm0Kow0MMrYaHYJjGYLLJXZb3at1HYnC43Go-QHQDcvA6-JsmEJXARgCDgMYWAhjIYhDAU+YiMAAFIwex0ZmilMITCGF79TLAGRsAgJYAAZRwSEZGzEABFTOZUrJ5Yn+jwnWgeER6HB7AAKJrADpdXqS4ZqYultTG6azVfqHswPBbtauLY7fayQ7HIbAAAMwBuAEoYw9IBq2Ixs9h2eFMOQYPQObALQKJgggABeYhghCIpikkKRpOQRIknAsZUiIeCttECBEP8NSMCkjDDAARMGziuIYxHwYOjDCMBmDNnAuTxA6irdCOBB1Lh5Dqpqn66tISIykawBnOCtqqC0gbjqc9DgpGkxegOliyfJDrRkAA)

	```ts
	// Positions of employees in our company.
	type MemberPosition = 'intern' | 'developer' | 'tech-lead';

	// Interface describing properties of a single employee.
	interface Employee {
			firstName: string;
			lastName: string;
			yearsOfExperience: number;
	}

	// Create an object that has all possible `MemberPosition` values set as keys.
	// Those keys will store a collection of Employees of the same position.
	const team: Record<MemberPosition, Employee[]> = {
			intern: [],
			developer: [],
			'tech-lead': [],
	};

	// Our team has decided to help John with his dream of becoming Software Developer.
	team.intern.push({
		firstName: 'John',
		lastName: 'Doe',
		yearsOfExperience: 0
	});

	// `Record` forces you to initialize all of the property keys.
	// TypeScript Error: "tech-lead" property is missing
	const teamEmpty: Record<MemberPosition, null> = {
			intern: null,
			developer: null,
	};
	```
	</details>

- [`Exclude<T, U>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#excludetype-excludedunion) - Exclude from `T` those types that are assignable to `U`.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://typescript-play.js.org/?target=6#code/JYOwLgpgTgZghgYwgAgMrQG7QMIHsQzADmyA3gFDLIAOuUYAXMiAK4A2byAPsgM5hRQJHqwC2AI2gBucgF9y5MAE9qKAEoQAjiwj8AEnBAATNtGQBeZAAooWphu26wAGmS3e93bRC8IASgsAPmRDJRlyAHoI5ABRAA8ENhYjFFYOZGVVZBgoXFFkAAM0zh5+QRBhZhYJaAKAOkjogEkQZAQ4X2QAdwALCFbaemRgXmQtFjhOMFwq9K6ULuB0lk6U+HYwZAxJnQaYFhAEMGB8ZCIIMAAFOjAANR2IK0HGWISklIAedCgsKDwCYgAbQA5M9gQBdVzFQJ+JhiSRQMiUYYwayZCC4VHPCzmSzAspCYEBWxgFhQAZwKC+FpgJ43VwARgADH4ZFQSWSBjcZPJyPtDsdTvxKWBvr8rD1DCZoJ5HPopaYoK4EPhCEQmGKcKriLCtrhgEYkVQVT5Nr4fmZLLZtMBbFZgT0wGBqES6ghbHBIJqoBKFdBWQpjfh+DQbhY2tqiHVsbjLMVkAB+ZAAZiZaeQTHOVxu9ySjxNaujNwDVHNvzqbBGkBAdPoAfkQA)

	```ts
	interface ServerConfig {
		port: null | string | number;
	}

	type RequestHandler = (request: Request, response: Response) => void;

	// Exclude `null` type from `null | string | number`.
	// In case the port is equal to `null`, we will use default value.
	function getPortValue(port: Exclude<ServerConfig['port'], null>): number {
		if (typeof port === 'string') {
			return parseInt(port, 10);
		}

		return port;
	}

	function startServer(handler: RequestHandler, config: ServerConfig): void {
		const server = require('http').createServer(handler);

		const port = config.port === null ? 3000 : getPortValue(config.port);
		server.listen(port);
	}
	```
	</details>

- [`Extract<T, U>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union) - Extract from `T` those types that are assignable to `U`.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://typescript-play.js.org/?target=6#code/CYUwxgNghgTiAEAzArgOzAFwJYHtXzSwEdkQBJYACgEoAueVZAWwCMQYBuAKDDwGcM8MgBF4AXngBlAJ6scESgHIRi6ty5ZUGdoihgEABXZ888AN5d48ANoiAuvUat23K6ihMQ9ATE0BzV3goPy8GZjZOLgBfLi4Aejj4AEEICBwAdz54MAALKFQQ+BxEeAAHY1NgKAwoIKy0grr4DByEUpgccpgMaXgAaxBerCzi+B9-ZulygDouFHRsU1z8kKMYE1RhaqgAHkt4AHkWACt4EAAPbVRgLLWNgBp9gGlBs8uQa6yAUUuYPQwdgNpKM7nh7mMML4CgA+R5WABqUAgpDeVxuhxO1he0jsXGh8EoOBO9COx3BQPo2PBADckaR6IjkSA6PBqTgsMBzPsicdrEC7OJWXSQNwYvFEgAVTS9JLXODpeDpKBZFg4GCoWa8VACIJykAKiQWKy2YQOAioYikCg0OEMDyhRSy4DyxS24KhAAMjyi6gS8AAwjh5OD0iBFHAkJoEOksC1mnkMJq8gUQKDNttKPlnfrwYp3J5XfBHXqoKpfYkAOI4ansTxaeDADmoRSCCBYAbxhC6TDx6rwYHIRX5bScjA4bLJwoDmDwDkfbA9JMrVMVdM1TN69LgkTgwgkchUahqIA)

	```ts
	declare function uniqueId(): number;

	const ID = Symbol('ID');

	interface Person {
		[ID]: number;
		name: string;
		age: number;
	}

	// Allows changing the person data as long as the property key is of string type.
	function changePersonData<
		Obj extends Person,
		Key extends Extract<keyof Person, string>,
		Value extends Obj[Key]
	> (obj: Obj, key: Key, value: Value): void {
		obj[key] = value;
	}

	// Tiny Andrew was born.
	const andrew = {
		[ID]: uniqueId(),
		name: 'Andrew',
		age: 0,
	};

	// Cool, we're fine with that.
	changePersonData(andrew, 'name', 'Pony');

	// Government didn't like the fact that you wanted to change your identity.
	changePersonData(andrew, ID, uniqueId());
	```
	</details>

- [`NonNullable<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype) - Exclude `null` and `undefined` from `T`.
	<details>
	<summary>
			Example
	</summary>
	Works with <a href="https://www.typescriptlang.org/tsconfig#strictNullChecks"><code>strictNullChecks</code></a> set to <code>true</code>.

	[Playground](https://typescript-play.js.org/?target=6#code/C4TwDgpgBACg9gJ2AOQK4FsBGEFQLxQDOwCAlgHYDmUAPlORtrnQwDasDcAUFwPQBU-WAEMkUOADMowqAGNWwwoSgATCBIqlgpOOSjAAFsOBRSy1IQgr9cKJlSlW1mZYQA3HFH68u8xcoBlHA8EACEHJ08Aby4oKDBUTFZSWXjEFEYcAEIALihkXTR2YSSIAB54JDQsHAA+blj4xOTUsHSACkMzPKD3HHDHNQQAGjSkPMqMmoQASh7g-oihqBi4uNIpdraxPAI2VhmVxrX9AzMAOm2ppnwoAA4ABifuE4BfKAhWSyOTuK7CS7pao3AhXF5rV48E4ICDAVAIPT-cGQyG+XTEIgLMJLTx7CAAdygvRCA0iCHaMwarhJOIQjUBSHaACJHk8mYdeLwxtdcVAAOSsh58+lXdr7Dlcq7A3n3J4PEUdADMcspUE53OluAIUGVTx46oAKuAIAFZGQwCYAKIIBCILjUxaDHAMnla+iodjcIA)

	```ts
	type PortNumber = string | number | null;

	/** Part of a class definition that is used to build a server */
	class ServerBuilder {
			portNumber!: NonNullable<PortNumber>;

			port(this: ServerBuilder, port: PortNumber): ServerBuilder {
					if (port == null) {
							this.portNumber = 8000;
					} else {
							this.portNumber = port;
					}

					return this;
			}
	}

	const serverBuilder = new ServerBuilder();

	serverBuilder
			.port('8000')   // portNumber = '8000'
			.port(null)     // portNumber =  8000
			.port(3000);    // portNumber =  3000

	// TypeScript error
	serverBuilder.portNumber = null;
	```
	</details>

- [`Parameters<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype) - Obtain the parameters of a function type in a tuple.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://typescript-play.js.org/?target=6#code/GYVwdgxgLglg9mABAZwBYmMANgUwBQxgAOIUAXIgIZgCeA2gLoCUFAbnDACaIDeAUIkQB6IYgCypSlBxUATrMo1ECsJzgBbLEoipqAc0J7EMKMgDkiHLnU4wp46pwAPHMgB0fAL58+oSLARECEosLAA5ABUYG2QAHgAxJGdpVWREPDdMylk9ZApqemZEAF4APipacrw-CApEgBogkKwAYThwckQwEHUAIxxZJl4BYVEImiIZKF0oZRwiWVdbeygJmThgOYgcGFYcbhqApCJsyhtpWXcR1cnEePBoeDAABVPzgbTixFeFd8uEsClADcIxGiygIFkSEOT3SmTc2VydQeRx+ZxwF2QQ34gkEwDgsnSuFmMBKiAADEDjIhYk1Qm0OlSYABqZnYka4xA1DJZHJYkGc7yCbyeRA+CAIZCzNAYbA4CIAdxg2zJwVCkWirjwMswuEaACYmCCgA)

	```ts
	function shuffle(input: any[]): void {
		// Mutate array randomly changing its' elements indexes.
	}

	function callNTimes<Fn extends (...arguments_: any[]) => any> (func: Fn, callCount: number) {
		// Type that represents the type of the received function parameters.
		type FunctionParameters = Parameters<Fn>;

		return function (...arguments_: FunctionParameters) {
			for (let i = 0; i < callCount; i++) {
				func(...arguments_);
			}
		}
	}

	const shuffleTwice = callNTimes(shuffle, 2);
	```
	</details>

- [`ConstructorParameters<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#constructorparameterstype) - Obtain the parameters of a constructor function type in a tuple.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://typescript-play.js.org/?target=6#code/MYGwhgzhAECCBOAXAlqApgWQPYBM0mgG8AoaaFRENALmgkXmQDsBzAblOmCycTV4D8teo1YdO3JiICuwRFngAKClWENmLAJRFOZRAAtkEAHQq00ALzlklNBzIBfYk+KhIMAJJTEYJsDQAwmDA+mgAPAAq0GgAHnxMODCKTGgA7tCKxllg8CwQtL4AngDaALraFgB80EWa1SRkAA6MAG5gfNAB4FABPDJyCrQR9tDNyG0dwMGhtBhgjWEiGgA00F70vv4RhY3hEZXVVinpc42KmuJkkv3y8Bly8EPaDWTkhiZd7r3e8LK3llwGCMXGQWGhEOsfH5zJlsrl8p0+gw-goAAo5MAAW3BaHgEEilU0tEhmzQ212BJ0ry4SOg+kg+gBBiMximIGA0nAfAQLGk2N4EAAEgzYcYcnkLsRdDTvNEYkYUKwSdCme9WdM0MYwYhFPSIPpJdTkAAzDKxBUaZX+aAAQgsVmkCTQxuYaBw2ng4Ok8CYcotSu8pMur09iG9vuObxZnx6SN+AyUWTF8MN0CcZE4Ywm5jZHK5aB5fP4iCFIqT4oRRTKRLo6lYVNeAHpG50wOzOe1zHr9NLQ+HoABybsD4HOKXXRA1JCoKhBELmI5pNaB6Fz0KKBAodDYPAgSUTmqYsAALx4m5nC6nW9nGq14KtaEUA9gR9PvuNCjQ9BgACNvcwNBtAcLiAA)

	```ts
	class ArticleModel {
		title: string;
		content?: string;

		constructor(title: string) {
			this.title = title;
		}
	}

	class InstanceCache<T extends (new (...arguments_: any[]) => any)> {
		private ClassConstructor: T;
		private cache: Map<string, InstanceType<T>> = new Map();

		constructor (ctr: T) {
			this.ClassConstructor = ctr;
		}

		getInstance (...arguments_: ConstructorParameters<T>): InstanceType<T> {
			const hash = this.calculateArgumentsHash(...arguments_);

			const existingInstance = this.cache.get(hash);
			if (existingInstance !== undefined) {
				return existingInstance;
			}

			return new this.ClassConstructor(...arguments_);
		}

		private calculateArgumentsHash(...arguments_: any[]): string {
			// Calculate hash.
			return 'hash';
		}
	}

	const articleCache = new InstanceCache(ArticleModel);
	const amazonArticle = articleCache.getInstance('Amazon forests burning!');
	```
	</details>

- [`ReturnType<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype) - Obtain the return type of a function type.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://typescript-play.js.org/?target=6#code/MYGwhgzhAECSAmICmBlJAnAbgS2E6A3gFDTTwD2AcuQC4AW2AdgOYAUAlAFzSbnbyEAvkWFFQkGJSQB3GMVI1sNZNwg10TZgG4S0YOUY0kh1es07d+xmvQBXYDXLpWi5UlMaWAGj0GjJ6BtNdkJdBQYIADpXZGgAXmgYpB1ScOwoq38aeN9DYxoU6GFRKzVoJjUwRjwAYXJbPPRuAFkwAAcAHgAxBodsAx9GWwBbACMMAD4cxhloVraOCyYjdAAzMDxoOut1e0d0UNIZ6WhWSPOwdGYIbiqATwBtAF0uaHudUQB6ACpv6ABpJBINqJdAbADW0Do5BOw3u5R2VTwMHIq2gAANtjZ0bkbHsnFCwJh8ONjHp0EgwEZ4JFoN9PkRVr1FAZoMwkDRYIjqkgOrosepoEgAB7+eAwAV2BxOLy6ACCVxgIrFEoMeOl6AACpcwMMORgIB1JRMiBNWKVdhruJKfOdIpdrtwFddXlzKjyACp3Nq842HaDIbL6BrZBIVGhIpB1EMYSLsmjmtWW-YhAA+qegAAYLKQLQj3ZsEsdccmnGcLor2Dn8xGedHGpEIBzEzspfsfMHDNAANTQACMVaIljV5GQkRA5DYmIpVKQAgAJARO9le33BDXIyi0YuLW2nJFGLqkOvxFB0YPdBSaLZ0IwNzyPkO8-xkGgsLh8Al427a3hWAhXwwHA8EHT5PmgAB1bAQBAANJ24adKWpft72RaBUTgRBUCAj89HAM8xCTaBjggABRQx0DuHJv25P9dCkWRZVIAAiBjoFImpmjlFBgA0NpsjadByDacgIDAEAIAAQmYpjoGYgAZSBsmGPw6DtZiiFA8CoJguDmAQmoZ2QvtUKQLdoAYmBTwgdEiCAA)

	```ts
	/** Provides every element of the iterable `iter` into the `callback` function and stores the results in an array. */
	function mapIter<
			Elem,
			Func extends (elem: Elem) => any,
			Ret extends ReturnType<Func>
	>(iter: Iterable<Elem>, callback: Func): Ret[] {
			const mapped: Ret[] = [];

			for (const elem of iter) {
					mapped.push(callback(elem));
			}

			return mapped;
	}

	const setObject: Set<string> = new Set();
	const mapObject: Map<number, string> = new Map();

	mapIter(setObject, (value: string) => value.indexOf('Foo')); // number[]

	mapIter(mapObject, ([key, value]: [number, string]) => {
			return key % 2 === 0 ? value : 'Odd';
	}); // string[]
	```
	</details>

- [`InstanceType<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype) - Obtain the instance type of a constructor function type.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://typescript-play.js.org/?target=6#code/MYGwhgzhAECSAmICmBlJAnAbgS2E6A3gFDTTwD2AcuQC4AW2AdgOYAUAlAFzSbnbyEAvkWFFQkGJSQB3GMVI1sNZNwg10TZgG4S0YOUY0kh1es07d+xmvQBXYDXLpWi5UlMaWAGj0GjJ6BtNdkJdBQYIADpXZGgAXmgYpB1ScOwoq38aeN9DYxoU6GFRKzVoJjUwRjwAYXJbPPRuAFkwAAcAHgAxBodsAx9GWwBbACMMAD4cxhloVraOCyYjdAAzMDxoOut1e0d0UNIZ6WhWSPOwdGYIbiqATwBtAF0uaHudUQB6ACpv6ABpJBINqJdAbADW0Do5BOw3u5R2VTwMHIq2gAANtjZ0bkbHsnFCwJh8ONjHp0EgwEZ4JFoN9PkRVr1FAZoMwkDRYIjqkgOrosepoEgAB7+eAwAV2BxOLy6ACCVxgIrFEoMeOl6AACpcwMMORgIB1JRMiBNWKVdhruJKfOdIpdrtwFddXlzKjyACp3Nq842HaDIbL6BrZBIVGhIpB1EMYSLsmjmtWW-YhAA+qegAAYLKQLQj3ZsEsdccmnGcLor2Dn8xGedHGpEIBzEzspfsfMHDNAANTQACMVaIljV5GQkRA5DYmIpVKQAgAJARO9le33BDXIyi0YuLW2nJFGLqkOvxFB0YPdBSaLZ0IwNzyPkO8-xkGgsLh8Al427a3hWAhXwwHA8EHT5PmgAB1bAQBAANJ24adKWpft72RaBUTgRBUCAj89HAM8xCTaBjggABRQx0DuHJv25P9dCkWRZVIAAiBjoFImpmjlFBgA0NpsjadByDacgIDAEAIAAQmYpjoGYgAZSBsmGPw6DtZiiFA8CoJguDmAQmoZ2QvtUKQLdoAYmBTwgdEiCAA)

	```ts
	class IdleService {
			doNothing (): void {}
	}

	class News {
			title: string;
			content: string;

			constructor(title: string, content: string) {
					this.title = title;
					this.content = content;
			}
	}

	const instanceCounter: Map<Function, number> = new Map();

	interface Constructor {
			new(...arguments_: any[]): any;
	}

	// Keep track how many instances of `Constr` constructor have been created.
	function getInstance<
			Constr extends Constructor,
			Arguments extends ConstructorParameters<Constr>
	>(constructor: Constr, ...arguments_: Arguments): InstanceType<Constr> {
			let count = instanceCounter.get(constructor) || 0;

			const instance = new constructor(...arguments_);

			instanceCounter.set(constructor, count + 1);

			console.log(`Created ${count + 1} instances of ${Constr.name} class`);

			return instance;
	}


	const idleService = getInstance(IdleService);
	// Will log: `Created 1 instances of IdleService class`
	const newsEntry = getInstance(News, 'New ECMAScript proposals!', 'Last month...');
	// Will log: `Created 1 instances of News class`
	```
	</details>

- [`Omit<T, K>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys) - Constructs a type by picking all properties from T and then removing K.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://typescript-play.js.org/?target=6#code/JYOwLgpgTgZghgYwgAgIImAWzgG2QbwChlks4BzCAVShwC5kBnMKUcgbmKYAcIFgIjBs1YgOXMpSFMWbANoBdTiW5woFddwAW0kfKWEAvoUIB6U8gDCUCHEiNkICAHdkYAJ69kz4GC3JcPG4oAHteKDABBxCYNAxsPFBIWEQUCAAPJG4wZABySUFcgJAAEzMLXNV1ck0dIuCw6EjBADpy5AB1FAQ4EGQAV0YUP2AHDy8wEOQbUugmBLwtEIA3OcmQnEjuZBgQqE7gAGtgZAhwKHdkHFGwNvGUdDIcAGUliIBJEF3kAF5kAHlML4ADyPBIAGjyBUYRQAPnkqho4NoYQA+TiEGD9EAISIhPozErQMG4AASK2gn2+AApek9pCSXm8wFSQooAJQMUkAFQAsgAZACiOAgmDOOSIJAQ+OYyGl4DgoDmf2QJRCCH6YvALQQNjsEGFovF1NyJWAy1y7OUyHMyE+yRAuFImG4Iq1YDswHxbRINjA-SgfXlHqVUE4xiAA)

	```ts
	interface Animal {
			imageUrl: string;
			species: string;
			images: string[];
			paragraphs: string[];
	}

	// Creates new type with all properties of the `Animal` interface
	// except 'images' and 'paragraphs' properties. We can use this
	// type to render small hover tooltip for a wiki entry list.
	type AnimalShortInfo = Omit<Animal, 'images' | 'paragraphs'>;

	function renderAnimalHoverInfo (animals: AnimalShortInfo[]): HTMLElement {
			const container = document.createElement('div');
			// Internal implementation.
			return container;
	}
	```
	</details>

- [`Uppercase<S extends string>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#uppercasestringtype) - Transforms every character in a string into uppercase.
	<details>
	<summary>
		Example
	</summary>

	```ts
	type T = Uppercase<'hello'>;  // 'HELLO'

	type T2 = Uppercase<'foo' | 'bar'>;  // 'FOO' | 'BAR'

	type T3<S extends string> = Uppercase<`aB${S}`>;
	type T4 = T3<'xYz'>;  // 'ABXYZ'

	type T5 = Uppercase<string>;  // string
	type T6 = Uppercase<any>;  // any
	type T7 = Uppercase<never>;  // never
	type T8 = Uppercase<42>;  // Error, type 'number' does not satisfy the constraint 'string'
	```
	</details>

- [`Lowercase<S extends string>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#lowercasestringtype) - Transforms every character in a string into lowercase.
	<details>
	<summary>
		Example
	</summary>

	```ts
	type T = Lowercase<'HELLO'>;  // 'hello'

	type T2 = Lowercase<'FOO' | 'BAR'>;  // 'foo' | 'bar'

	type T3<S extends string> = Lowercase<`aB${S}`>;
	type T4 = T3<'xYz'>;  // 'abxyz'

	type T5 = Lowercase<string>;  // string
	type T6 = Lowercase<any>;  // any
	type T7 = Lowercase<never>;  // never
	type T8 = Lowercase<42>;  // Error, type 'number' does not satisfy the constraint 'string'
	```
	</details>

- [`Capitalize<S extends string>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#capitalizestringtype) - Transforms the first character in a string into uppercase.
	<details>
	<summary>
		Example
	</summary>

	```ts
	type T = Capitalize<'hello'>;  // 'Hello'

	type T2 = Capitalize<'foo' | 'bar'>;  // 'Foo' | 'Bar'

	type T3<S extends string> = Capitalize<`aB${S}`>;
	type T4 = T3<'xYz'>;  // 'ABxYz'

	type T5 = Capitalize<string>;  // string
	type T6 = Capitalize<any>;  // any
	type T7 = Capitalize<never>;  // never
	type T8 = Capitalize<42>;  // Error, type 'number' does not satisfy the constraint 'string'
	```
	</details>

- [`Uncapitalize<S extends string>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#uncapitalizestringtype) - Transforms the first character in a string into lowercase.
	<details>
	<summary>
		Example
	</summary>

	```ts
	type T = Uncapitalize<'Hello'>;  // 'hello'

	type T2 = Uncapitalize<'Foo' | 'Bar'>;  // 'foo' | 'bar'

	type T3<S extends string> = Uncapitalize<`AB${S}`>;
	type T4 = T3<'xYz'>;  // 'aBxYz'

	type T5 = Uncapitalize<string>;  // string
	type T6 = Uncapitalize<any>;  // any
	type T7 = Uncapitalize<never>;  // never
	type T8 = Uncapitalize<42>;  // Error, type 'number' does not satisfy the constraint 'string'
	```
	</details>

You can find some examples in the [TypeScript docs](https://www.typescriptlang.org/docs/handbook/utility-types.html).

## Maintainers

- [Sindre Sorhus](https://github.com/sindresorhus)
- [Haozheng Li](https://github.com/Emiyaaaaa)
- [Som Shekhar Mukherjee](https://github.com/som-sm)
- [Jarek Radosz](https://github.com/CvX)
- [Dimitri Benin](https://github.com/BendingBender)
- [Pelle Wessman](https://github.com/voxpelli)
- [Sébastien Mischler](https://github.com/skarab42)

## License

- [MIT](license-mit)
- [CC0-1.0](license-cc0)

SPDX-License-Identifier: (MIT OR CC0-1.0)
