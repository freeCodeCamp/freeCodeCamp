# is

> Type check values

For example, `is.string('🦄') //=> true`

<img src="header.gif" width="182" align="right">

## Highlights

- Written in TypeScript
- [Extensive use of type guards](#type-guards)
- [Supports type assertions](#type-assertions)
- [Aware of generic type parameters](#generic-type-parameters) (use with caution)
- Actively maintained
- ![Millions of downloads per week](https://img.shields.io/npm/dw/@sindresorhus/is)

## Install

```sh
npm install @sindresorhus/is
```

## Usage

```js
import is from '@sindresorhus/is';

is('🦄');
//=> 'string'

is(new Map());
//=> 'Map'

is.number(6);
//=> true
```

[Assertions](#type-assertions) perform the same type checks, but throw an error if the type does not match.

```js
import {assert} from '@sindresorhus/is';

assert.string(2);
//=> Error: Expected value which is `string`, received value of type `number`.
```

And with TypeScript:

```ts
import {assert} from '@sindresorhus/is';

assert.string(foo);
// `foo` is now typed as a `string`.
```

## API

### is(value)

Returns the type of `value`.

Primitives are lowercase and object types are camelcase.

Example:

- `'undefined'`
- `'null'`
- `'string'`
- `'symbol'`
- `'Array'`
- `'Function'`
- `'Object'`

Note: It will throw an error if you try to feed it object-wrapped primitives, as that's a bad practice. For example `new String('foo')`.

### is.{method}

All the below methods accept a value and returns a boolean for whether the value is of the desired type.

#### Primitives

##### .undefined(value)
##### .null(value)

**Note:** TypeScript users must use `.null_()` because of a TypeScript naming limitation.

##### .string(value)
##### .number(value)

Note: `is.number(NaN)` returns `false`. This intentionally deviates from `typeof` behavior to increase user-friendliness of `is` type checks.

##### .boolean(value)
##### .symbol(value)
##### .bigint(value)

#### Built-in types

##### .array(value, assertion?)

Returns true if `value` is an array and all of its items match the assertion (if provided).

```js
is.array(value); // Validate `value` is an array.
is.array(value, is.number); // Validate `value` is an array and all of its items are numbers.
```

##### .function(value)

**Note:** TypeScript users must use `.function_()` because of a TypeScript naming limitation.

##### .buffer(value)
##### .blob(value)
##### .object(value)

Keep in mind that [functions are objects too](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions).

##### .numericString(value)

Returns `true` for a string that represents a number satisfying `is.number`, for example, `'42'` and `'-8.3'`.

Note: `'NaN'` returns `false`, but `'Infinity'` and `'-Infinity'` return `true`.

##### .regExp(value)
##### .date(value)
##### .error(value)
##### .nativePromise(value)
##### .promise(value)

Returns `true` for any object with a `.then()` and `.catch()` method. Prefer this one over `.nativePromise()` as you usually want to allow userland promise implementations too.

##### .generator(value)

Returns `true` for any object that implements its own `.next()` and `.throw()` methods and has a function definition for `Symbol.iterator`.

##### .generatorFunction(value)

##### .asyncFunction(value)

Returns `true` for any `async` function that can be called with the `await` operator.

```js
is.asyncFunction(async () => {});
//=> true

is.asyncFunction(() => {});
//=> false
```

##### .asyncGenerator(value)

```js
is.asyncGenerator(
	(async function * () {
		yield 4;
	})()
);
//=> true

is.asyncGenerator(
	(function * () {
		yield 4;
	})()
);
//=> false
```

##### .asyncGeneratorFunction(value)

```js
is.asyncGeneratorFunction(async function * () {
	yield 4;
});
//=> true

is.asyncGeneratorFunction(function * () {
	yield 4;
});
//=> false
```

##### .boundFunction(value)

Returns `true` for any `bound` function.

```js
is.boundFunction(() => {});
//=> true

is.boundFunction(function () {}.bind(null));
//=> true

is.boundFunction(function () {});
//=> false
```

##### .map(value)
##### .set(value)
##### .weakMap(value)
##### .weakSet(value)
##### .weakRef(value)

#### Typed arrays

##### .int8Array(value)
##### .uint8Array(value)
##### .uint8ClampedArray(value)
##### .int16Array(value)
##### .uint16Array(value)
##### .int32Array(value)
##### .uint32Array(value)
##### .float32Array(value)
##### .float64Array(value)
##### .bigInt64Array(value)
##### .bigUint64Array(value)

#### Structured data

##### .arrayBuffer(value)
##### .sharedArrayBuffer(value)
##### .dataView(value)

##### .enumCase(value, enum)

TypeScript-only. Returns `true` if `value` is a member of `enum`.

```ts
enum Direction {
	Ascending = 'ascending',
	Descending = 'descending'
}

is.enumCase('ascending', Direction);
//=> true

is.enumCase('other', Direction);
//=> false
```

#### Emptiness

##### .emptyString(value)

Returns `true` if the value is a `string` and the `.length` is 0.

##### .emptyStringOrWhitespace(value)

Returns `true` if `is.emptyString(value)` or if it's a `string` that is all whitespace.

##### .nonEmptyString(value)

Returns `true` if the value is a `string` and the `.length` is more than 0.

##### .nonEmptyStringAndNotWhitespace(value)

Returns `true` if the value is a `string` that is not empty and not whitespace.

```js
const values = ['property1', '', null, 'property2', '    ', undefined];

values.filter(is.nonEmptyStringAndNotWhitespace);
//=> ['property1', 'property2']
```

##### .emptyArray(value)

Returns `true` if the value is an `Array` and the `.length` is 0.

##### .nonEmptyArray(value)

Returns `true` if the value is an `Array` and the `.length` is more than 0.

##### .emptyObject(value)

Returns `true` if the value is an `Object` and `Object.keys(value).length` is 0.

Please note that `Object.keys` returns only own enumerable properties. Hence something like this can happen:

```js
const object1 = {};

Object.defineProperty(object1, 'property1', {
	value: 42,
	writable: true,
	enumerable: false,
	configurable: true
});

is.emptyObject(object1);
//=> true
```

##### .nonEmptyObject(value)

Returns `true` if the value is an `Object` and `Object.keys(value).length` is more than 0.

##### .emptySet(value)

Returns `true` if the value is a `Set` and the `.size` is 0.

##### .nonEmptySet(Value)

Returns `true` if the value is a `Set` and the `.size` is more than 0.

##### .emptyMap(value)

Returns `true` if the value is a `Map` and the `.size` is 0.

##### .nonEmptyMap(value)

Returns `true` if the value is a `Map` and the `.size` is more than 0.

#### Miscellaneous

##### .directInstanceOf(value, class)

Returns `true` if `value` is a direct instance of `class`.

```js
is.directInstanceOf(new Error(), Error);
//=> true

class UnicornError extends Error {}

is.directInstanceOf(new UnicornError(), Error);
//=> false
```

##### .urlInstance(value)

Returns `true` if `value` is an instance of the [`URL` class](https://developer.mozilla.org/en-US/docs/Web/API/URL).

```js
const url = new URL('https://example.com');

is.urlInstance(url);
//=> true
```

##### .urlString(value)

Returns `true` if `value` is a URL string.

Note: this only does basic checking using the [`URL` class](https://developer.mozilla.org/en-US/docs/Web/API/URL) constructor.

```js
const url = 'https://example.com';

is.urlString(url);
//=> true

is.urlString(new URL(url));
//=> false
```

##### .truthy(value)

Returns `true` for all values that evaluate to true in a boolean context:

```js
is.truthy('🦄');
//=> true

is.truthy(undefined);
//=> false
```

##### .falsy(value)

Returns `true` if `value` is one of: `false`, `0`, `''`, `null`, `undefined`, `NaN`.

##### .nan(value)
##### .nullOrUndefined(value)
##### .primitive(value)

JavaScript primitives are as follows: `null`, `undefined`, `string`, `number`, `boolean`, `symbol`.

##### .integer(value)

##### .safeInteger(value)

Returns `true` if `value` is a [safe integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger).

##### .plainObject(value)

An object is plain if it's created by either `{}`, `new Object()`, or `Object.create(null)`.

##### .iterable(value)
##### .asyncIterable(value)
##### .class(value)

Returns `true` for instances created by a class.

**Note:** TypeScript users must use `.class_()` because of a TypeScript naming limitation.

##### .typedArray(value)

##### .arrayLike(value)

A `value` is array-like if it is not a function and has a `value.length` that is a safe integer greater than or equal to 0.

```js
is.arrayLike(document.forms);
//=> true

function foo() {
	is.arrayLike(arguments);
	//=> true
}
foo();
```

##### .tupleLike(value, guards)

A `value` is tuple-like if it matches the provided `guards` array both in `.length` and in types.

```js
is.tupleLike([1], [is.number]);
//=> true
```

```js
function foo() {
	const tuple = [1, '2', true];
	if (is.tupleLike(tuple, [is.number, is.string, is.boolean])) {
		tuple // [number, string, boolean]
	}
}

foo();
```

#### .positiveNumber(value)

Check if `value` is a number and is more than 0.

#### .negativeNumber(value)

Check if `value` is a number and is less than 0.

##### .inRange(value, range)

Check if `value` (number) is in the given `range`. The range is an array of two values, lower bound and upper bound, in no specific order.

```js
is.inRange(3, [0, 5]);
is.inRange(3, [5, 0]);
is.inRange(0, [-2, 2]);
```

##### .inRange(value, upperBound)

Check if `value` (number) is in the range of `0` to `upperBound`.

```js
is.inRange(3, 10);
```

##### .domElement(value)

Returns `true` if `value` is a DOM Element.

##### .nodeStream(value)

Returns `true` if `value` is a Node.js [stream](https://nodejs.org/api/stream.html).

```js
import fs from 'node:fs';

is.nodeStream(fs.createReadStream('unicorn.png'));
//=> true
```

##### .observable(value)

Returns `true` if `value` is an `Observable`.

```js
import {Observable} from 'rxjs';

is.observable(new Observable());
//=> true
```

##### .infinite(value)

Check if `value` is `Infinity` or `-Infinity`.

##### .evenInteger(value)

Returns `true` if `value` is an even integer.

##### .oddInteger(value)

Returns `true` if `value` is an odd integer.

##### .propertyKey(value)

Returns `true` if `value` can be used as an object property key (either `string`, `number`, or `symbol`).

##### .formData(value)

Returns `true` if `value` is an instance of the [`FormData` class](https://developer.mozilla.org/en-US/docs/Web/API/FormData).

```js
const data = new FormData();

is.formData(data);
//=> true
```

##### .urlSearchParams(value)

Returns `true` if `value` is an instance of the [`URLSearchParams` class](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams).

```js
const searchParams = new URLSearchParams();

is.urlSearchParams(searchParams);
//=> true
```

##### .any(predicate | predicate[], ...values)

Using a single `predicate` argument, returns `true` if **any** of the input `values` returns true in the `predicate`:

```js
is.any(is.string, {}, true, '🦄');
//=> true

is.any(is.boolean, 'unicorns', [], new Map());
//=> false
```

Using an array of `predicate[]`, returns `true` if **any** of the input `values` returns true for **any** of the `predicates` provided in an array:

```js
is.any([is.string, is.number], {}, true, '🦄');
//=> true

is.any([is.boolean, is.number], 'unicorns', [], new Map());
//=> false
```

##### .all(predicate, ...values)

Returns `true` if **all** of the input `values` returns true in the `predicate`:

```js
is.all(is.object, {}, new Map(), new Set());
//=> true

is.all(is.string, '🦄', [], 'unicorns');
//=> false
```

## Type guards

When using `is` together with TypeScript, [type guards](http://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types) are being used extensively to infer the correct type inside if-else statements.

```ts
import is from '@sindresorhus/is';

const padLeft = (value: string, padding: string | number) => {
	if (is.number(padding)) {
		// `padding` is typed as `number`
		return Array(padding + 1).join(' ') + value;
	}

	if (is.string(padding)) {
		// `padding` is typed as `string`
		return padding + value;
	}

	throw new TypeError(`Expected 'padding' to be of type 'string' or 'number', got '${is(padding)}'.`);
}

padLeft('🦄', 3);
//=> '   🦄'

padLeft('🦄', '🌈');
//=> '🌈🦄'
```

## Type assertions

The type guards are also available as [type assertions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions), which throw an error for unexpected types. It is a convenient one-line version of the often repetitive "if-not-expected-type-throw" pattern.

```ts
import {assert} from '@sindresorhus/is';

const handleMovieRatingApiResponse = (response: unknown) => {
	assert.plainObject(response);
	// `response` is now typed as a plain `object` with `unknown` properties.

	assert.number(response.rating);
	// `response.rating` is now typed as a `number`.

	assert.string(response.title);
	// `response.title` is now typed as a `string`.

	return `${response.title} (${response.rating * 10})`;
};

handleMovieRatingApiResponse({rating: 0.87, title: 'The Matrix'});
//=> 'The Matrix (8.7)'

// This throws an error.
handleMovieRatingApiResponse({rating: '🦄'});
```

## Generic type parameters

The type guards and type assertions are aware of [generic type parameters](https://www.typescriptlang.org/docs/handbook/generics.html), such as `Promise<T>` and `Map<Key, Value>`. The default is `unknown` for most cases, since `is` cannot check them at runtime. If the generic type is known at compile-time, either implicitly (inferred) or explicitly (provided), `is` propagates the type so it can be used later.

Use generic type parameters with caution. They are only checked by the TypeScript compiler, and not checked by `is` at runtime. This can lead to unexpected behavior, where the generic type is _assumed_ at compile-time, but actually is something completely different at runtime. It is best to use `unknown` (default) and type-check the value of the generic type parameter at runtime with `is` or `assert`.

```ts
import {assert} from '@sindresorhus/is';

async function badNumberAssumption(input: unknown) {
	// Bad assumption about the generic type parameter fools the compile-time type system.
	assert.promise<number>(input);
	// `input` is a `Promise` but only assumed to be `Promise<number>`.

	const resolved = await input;
	// `resolved` is typed as `number` but was not actually checked at runtime.

	// Multiplication will return NaN if the input promise did not actually contain a number.
	return 2 * resolved;
}

async function goodNumberAssertion(input: unknown) {
	assert.promise(input);
	// `input` is typed as `Promise<unknown>`

	const resolved = await input;
	// `resolved` is typed as `unknown`

	assert.number(resolved);
	// `resolved` is typed as `number`

	// Uses runtime checks so only numbers will reach the multiplication.
	return 2 * resolved;
}

badNumberAssumption(Promise.resolve('An unexpected string'));
//=> NaN

// This correctly throws an error because of the unexpected string value.
goodNumberAssertion(Promise.resolve('An unexpected string'));
```

## FAQ

### Why yet another type checking module?

There are hundreds of type checking modules on npm, unfortunately, I couldn't find any that fit my needs:

- Includes both type methods and ability to get the type
- Types of primitives returned as lowercase and object types as camelcase
- Covers all built-ins
- Unsurprising behavior
- Well-maintained
- Comprehensive test suite

For the ones I found, pick 3 of these.

The most common mistakes I noticed in these modules was using `instanceof` for type checking, forgetting that functions are objects, and omitting `symbol` as a primitive.

### Why not just use `instanceof` instead of this package?

`instanceof` does not work correctly for all types and it does not work across [realms](https://stackoverflow.com/a/49832343/64949). Examples of realms are iframes, windows, web workers, and the `vm` module in Node.js.

## For enterprise

Available as part of the Tidelift Subscription.

The maintainers of @sindresorhus/is and thousands of other packages are working with Tidelift to deliver commercial support and maintenance for the open source dependencies you use to build your applications. Save time, reduce risk, and improve code health, while paying the maintainers of the exact dependencies you use. [Learn more.](https://tidelift.com/subscription/pkg/npm-sindresorhus-is?utm_source=npm-sindresorhus-is&utm_medium=referral&utm_campaign=enterprise&utm_term=repo)

## Related

- [ow](https://github.com/sindresorhus/ow) - Function argument validation for humans
- [is-stream](https://github.com/sindresorhus/is-stream) - Check if something is a Node.js stream
- [is-observable](https://github.com/sindresorhus/is-observable) - Check if a value is an Observable
- [file-type](https://github.com/sindresorhus/file-type) - Detect the file type of a Buffer/Uint8Array
- [is-ip](https://github.com/sindresorhus/is-ip) - Check if a string is an IP address
- [is-array-sorted](https://github.com/sindresorhus/is-array-sorted) - Check if an Array is sorted
- [is-error-constructor](https://github.com/sindresorhus/is-error-constructor) - Check if a value is an error constructor
- [is-empty-iterable](https://github.com/sindresorhus/is-empty-iterable) - Check if an Iterable is empty
- [is-blob](https://github.com/sindresorhus/is-blob) - Check if a value is a Blob - File-like object of immutable, raw data
- [has-emoji](https://github.com/sindresorhus/has-emoji) - Check whether a string has any emoji

## Maintainers

- [Sindre Sorhus](https://github.com/sindresorhus)
- [Giora Guttsait](https://github.com/gioragutt)
- [Brandon Smith](https://github.com/brandon93s)
