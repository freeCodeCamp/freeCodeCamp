# Path-to-RegExp

> Turn a path string such as `/user/:name` into a regular expression.

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][build-image]][build-url]
[![Build coverage][coverage-image]][coverage-url]
[![License][license-image]][license-url]

## Installation

```
npm install path-to-regexp --save
```

## Usage

```javascript
const { pathToRegexp, match, parse, compile } = require("path-to-regexp");

// pathToRegexp(path, keys?, options?)
// match(path)
// parse(path)
// compile(path)
```

### Path to regexp

The `pathToRegexp` function will return a regular expression object based on the provided `path` argument. It accepts the following arguments:

- **path** A string, array of strings, or a regular expression.
- **keys** _(optional)_ An array to populate with keys found in the path.
- **options** _(optional)_
  - **sensitive** When `true` the regexp will be case sensitive. (default: `false`)
  - **strict** When `true` the regexp won't allow an optional trailing delimiter to match. (default: `false`)
  - **end** When `true` the regexp will match to the end of the string. (default: `true`)
  - **start** When `true` the regexp will match from the beginning of the string. (default: `true`)
  - **delimiter** The default delimiter for segments, e.g. `[^/#?]` for `:named` patterns. (default: `'/#?'`)
  - **endsWith** Optional character, or list of characters, to treat as "end" characters.
  - **encode** A function to encode strings before inserting into `RegExp`. (default: `x => x`)
  - **prefixes** List of characters to automatically consider prefixes when parsing. (default: `./`)

```javascript
const keys = [];
const regexp = pathToRegexp("/foo/:bar", keys);
// regexp = /^\/foo(?:\/([^\/#\?]+?))[\/#\?]?$/i
// keys = [{ name: 'bar', prefix: '/', suffix: '', pattern: '[^\\/#\\?]+?', modifier: '' }]
```

**Please note:** The `RegExp` returned by `path-to-regexp` is intended for ordered data (e.g. pathnames, hostnames). It can not handle arbitrarily ordered data (e.g. query strings, URL fragments, JSON, etc). When using paths that contain query strings, you need to escape the question mark (`?`) to ensure it does not flag the parameter as [optional](#optional).

### Parameters

The path argument is used to define parameters and populate keys.

#### Named Parameters

Named parameters are defined by prefixing a colon to the parameter name (`:foo`).

```js
const regexp = pathToRegexp("/:foo/:bar");
// keys = [{ name: 'foo', prefix: '/', ... }, { name: 'bar', prefix: '/', ... }]

regexp.exec("/test/route");
//=> [ '/test/route', 'test', 'route', index: 0, input: '/test/route', groups: undefined ]
```

**Please note:** Parameter names must use "word characters" (`[A-Za-z0-9_]`).

##### Custom Matching Parameters

Parameters can have a custom regexp, which overrides the default match (`[^/]+`). For example, you can match digits or names in a path:

```js
const regexpNumbers = pathToRegexp("/icon-:foo(\\d+).png");
// keys = [{ name: 'foo', ... }]

regexpNumbers.exec("/icon-123.png");
//=> ['/icon-123.png', '123']

regexpNumbers.exec("/icon-abc.png");
//=> null

const regexpWord = pathToRegexp("/(user|u)");
// keys = [{ name: 0, ... }]

regexpWord.exec("/u");
//=> ['/u', 'u']

regexpWord.exec("/users");
//=> null
```

**Tip:** Backslashes need to be escaped with another backslash in JavaScript strings.

##### Custom Prefix and Suffix

Parameters can be wrapped in `{}` to create custom prefixes or suffixes for your segment:

```js
const regexp = pathToRegexp("/:attr1?{-:attr2}?{-:attr3}?");

regexp.exec("/test");
// => ['/test', 'test', undefined, undefined]

regexp.exec("/test-test");
// => ['/test', 'test', 'test', undefined]
```

#### Unnamed Parameters

It is possible to write an unnamed parameter that only consists of a regexp. It works the same the named parameter, except it will be numerically indexed:

```js
const regexp = pathToRegexp("/:foo/(.*)");
// keys = [{ name: 'foo', ... }, { name: 0, ... }]

regexp.exec("/test/route");
//=> [ '/test/route', 'test', 'route', index: 0, input: '/test/route', groups: undefined ]
```

#### Modifiers

Modifiers must be placed after the parameter (e.g. `/:foo?`, `/(test)?`, `/:foo(test)?`, or `{-:foo(test)}?`).

##### Optional

Parameters can be suffixed with a question mark (`?`) to make the parameter optional.

```js
const regexp = pathToRegexp("/:foo/:bar?");
// keys = [{ name: 'foo', ... }, { name: 'bar', prefix: '/', modifier: '?' }]

regexp.exec("/test");
//=> [ '/test', 'test', undefined, index: 0, input: '/test', groups: undefined ]

regexp.exec("/test/route");
//=> [ '/test/route', 'test', 'route', index: 0, input: '/test/route', groups: undefined ]
```

**Tip:** The prefix is also optional, escape the prefix `\/` to make it required.

When dealing with query strings, escape the question mark (`?`) so it doesn't mark the parameter as optional. Handling unordered data is outside the scope of this library.

```js
const regexp = pathToRegexp("/search/:tableName\\?useIndex=true&term=amazing");

regexp.exec("/search/people?useIndex=true&term=amazing");
//=> [ '/search/people?useIndex=true&term=amazing', 'people', index: 0, input: '/search/people?useIndex=true&term=amazing', groups: undefined ]

// This library does not handle query strings in different orders
regexp.exec("/search/people?term=amazing&useIndex=true");
//=> null
```

##### Zero or more

Parameters can be suffixed with an asterisk (`*`) to denote a zero or more parameter matches.

```js
const regexp = pathToRegexp("/:foo*");
// keys = [{ name: 'foo', prefix: '/', modifier: '*' }]

regexp.exec("/");
//=> [ '/', undefined, index: 0, input: '/', groups: undefined ]

regexp.exec("/bar/baz");
//=> [ '/bar/baz', 'bar/baz', index: 0, input: '/bar/baz', groups: undefined ]
```

##### One or more

Parameters can be suffixed with a plus sign (`+`) to denote a one or more parameter matches.

```js
const regexp = pathToRegexp("/:foo+");
// keys = [{ name: 'foo', prefix: '/', modifier: '+' }]

regexp.exec("/");
//=> null

regexp.exec("/bar/baz");
//=> [ '/bar/baz','bar/baz', index: 0, input: '/bar/baz', groups: undefined ]
```

### Match

The `match` function will return a function for transforming paths into parameters:

```js
// Make sure you consistently `decode` segments.
const fn = match("/user/:id", { decode: decodeURIComponent });

fn("/user/123"); //=> { path: '/user/123', index: 0, params: { id: '123' } }
fn("/invalid"); //=> false
fn("/user/caf%C3%A9"); //=> { path: '/user/caf%C3%A9', index: 0, params: { id: 'café' } }
```

The `match` function can be used to custom match named parameters. For example, this can be used to whitelist a small number of valid paths:

```js
const urlMatch = match("/users/:id/:tab(home|photos|bio)", {
  decode: decodeURIComponent,
});

urlMatch("/users/1234/photos");
//=> { path: '/users/1234/photos', index: 0, params: { id: '1234', tab: 'photos' } }

urlMatch("/users/1234/bio");
//=> { path: '/users/1234/bio', index: 0, params: { id: '1234', tab: 'bio' } }

urlMatch("/users/1234/otherstuff");
//=> false
```

#### Process Pathname

You should make sure variations of the same path match the expected `path`. Here's one possible solution using `encode`:

```js
const fn = match("/café", { encode: encodeURI });

fn("/caf%C3%A9"); //=> { path: '/caf%C3%A9', index: 0, params: {} }
```

**Note:** [`URL`](https://developer.mozilla.org/en-US/docs/Web/API/URL) encodes paths, so `/café` would be normalized to `/caf%C3%A9` and match in the above example.

##### Alternative Using Normalize

Sometimes you won't have already normalized paths to use, so you could normalize it yourself before matching:

```js
/**
 * Normalize a pathname for matching, replaces multiple slashes with a single
 * slash and normalizes unicode characters to "NFC". When using this method,
 * `decode` should be an identity function so you don't decode strings twice.
 */
function normalizePathname(pathname: string) {
  return (
    decodeURI(pathname)
      // Replaces repeated slashes in the URL.
      .replace(/\/+/g, "/")
      // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
      // Note: Missing native IE support, may want to skip this step.
      .normalize()
  );
}

// Two possible ways of writing `/café`:
const re = pathToRegexp("/caf\u00E9");
const input = encodeURI("/cafe\u0301");

re.test(input); //=> false
re.test(normalizePathname(input)); //=> true
```

### Parse

The `parse` function will return a list of strings and keys from a path string:

```js
const tokens = parse("/route/:foo/(.*)");

console.log(tokens[0]);
//=> "/route"

console.log(tokens[1]);
//=> { name: 'foo', prefix: '/', suffix: '', pattern: '[^\\/#\\?]+?', modifier: '' }

console.log(tokens[2]);
//=> { name: 0, prefix: '/', suffix: '', pattern: '.*', modifier: '' }
```

**Note:** This method only works with strings.

### Compile ("Reverse" Path-To-RegExp)

The `compile` function will return a function for transforming parameters into a valid path:

```js
// Make sure you encode your path segments consistently.
const toPath = compile("/user/:id", { encode: encodeURIComponent });

toPath({ id: 123 }); //=> "/user/123"
toPath({ id: "café" }); //=> "/user/caf%C3%A9"
toPath({ id: ":/" }); //=> "/user/%3A%2F"

// Without `encode`, you need to make sure inputs are encoded correctly.
// (Note: You can use `validate: false` to create an invalid paths.)
const toPathRaw = compile("/user/:id", { validate: false });

toPathRaw({ id: "%3A%2F" }); //=> "/user/%3A%2F"
toPathRaw({ id: ":/" }); //=> "/user/:/"

const toPathRepeated = compile("/:segment+");

toPathRepeated({ segment: "foo" }); //=> "/foo"
toPathRepeated({ segment: ["a", "b", "c"] }); //=> "/a/b/c"

const toPathRegexp = compile("/user/:id(\\d+)");

toPathRegexp({ id: 123 }); //=> "/user/123"
toPathRegexp({ id: "123" }); //=> "/user/123"
```

**Note:** The generated function will throw on invalid input.

### Working with Tokens

Path-To-RegExp exposes the two functions used internally that accept an array of tokens:

- `tokensToRegexp(tokens, keys?, options?)` Transform an array of tokens into a matching regular expression.
- `tokensToFunction(tokens)` Transform an array of tokens into a path generator function.

#### Token Information

- `name` The name of the token (`string` for named or `number` for unnamed index)
- `prefix` The prefix string for the segment (e.g. `"/"`)
- `suffix` The suffix string for the segment (e.g. `""`)
- `pattern` The RegExp used to match this token (`string`)
- `modifier` The modifier character used for the segment (e.g. `?`)

## Compatibility with Express <= 4.x

Path-To-RegExp breaks compatibility with Express <= `4.x`:

- RegExp special characters can only be used in a parameter
  - Express.js 4.x supported `RegExp` special characters regardless of position - this is considered a bug
- Parameters have suffixes that augment meaning - `*`, `+` and `?`. E.g. `/:user*`
- No wildcard asterisk (`*`) - use parameters instead (`(.*)` or `:splat*`)

## Live Demo

You can see a live demo of this library in use at [express-route-tester](http://forbeslindesay.github.io/express-route-tester/).

## License

MIT

[npm-image]: https://img.shields.io/npm/v/path-to-regexp
[npm-url]: https://npmjs.org/package/path-to-regexp
[downloads-image]: https://img.shields.io/npm/dm/path-to-regexp
[downloads-url]: https://npmjs.org/package/path-to-regexp
[build-image]: https://img.shields.io/github/actions/workflow/status/pillarjs/path-to-regexp/ci.yml?branch=master
[build-url]: https://github.com/pillarjs/path-to-regexp/actions/workflows/ci.yml?query=branch%3Amaster
[coverage-image]: https://img.shields.io/codecov/c/gh/pillarjs/path-to-regexp
[coverage-url]: https://codecov.io/gh/pillarjs/path-to-regexp
[license-image]: http://img.shields.io/npm/l/path-to-regexp.svg?style=flat
[license-url]: LICENSE.md
