# Path-to-RegExp

> Turn a path string such as `/user/:name` into a regular expression.

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

## Installation

```
npm install path-to-regexp --save
```

## Usage

```javascript
var pathToRegexp = require('path-to-regexp')

// pathToRegexp(path, keys?, options?)
// pathToRegexp.parse(path)
// pathToRegexp.compile(path)
```

- **path** A string, array of strings, or a regular expression.
- **keys** An array to be populated with the keys found in the path.
- **options**
  - **sensitive** When `true` the route will be case sensitive. (default: `false`)
  - **strict** When `false` the trailing slash is optional. (default: `false`)
  - **end** When `false` the path will match at the beginning. (default: `true`)
  - Advanced options (use for non-pathname strings, e.g. host names):
    - **delimiter** The default delimiter for segments. (default: `'/'`)
    - **endsWith** Optional character, or list of characters, to treat as "end" characters.
    - **delimiters** List of characters to consider delimiters when parsing. (default: `'./'`)

```javascript
var keys = []
var re = pathToRegexp('/foo/:bar', keys)
// re = /^\/foo\/([^\/]+?)\/?$/i
// keys = [{ name: 'bar', prefix: '/', delimiter: '/', optional: false, repeat: false, pattern: '[^\\/]+?' }]
```

**Please note:** The `RegExp` returned by `path-to-regexp` is intended for ordered data (e.g. pathnames, hostnames). It does not handle arbitrary data (e.g. query strings, URL fragments, JSON, etc).

### Parameters

The path argument is used to define parameters and populate the list of keys.

#### Named Parameters

Named parameters are defined by prefixing a colon to the parameter name (`:foo`). By default, the parameter will match until the following path segment.

```js
var re = pathToRegexp('/:foo/:bar')
// keys = [{ name: 'foo', prefix: '/', ... }, { name: 'bar', prefix: '/', ... }]

re.exec('/test/route')
//=> ['/test/route', 'test', 'route']
```

**Please note:** Parameter names must be made up of "word characters" (`[A-Za-z0-9_]`).

#### Parameter Modifiers

##### Optional

Parameters can be suffixed with a question mark (`?`) to make the parameter optional.

```js
var re = pathToRegexp('/:foo/:bar?')
// keys = [{ name: 'foo', ... }, { name: 'bar', delimiter: '/', optional: true, repeat: false }]

re.exec('/test')
//=> ['/test', 'test', undefined]

re.exec('/test/route')
//=> ['/test', 'test', 'route']
```

**Tip:** If the parameter is the _only_ value in the segment, the prefix is also optional.

##### Zero or more

Parameters can be suffixed with an asterisk (`*`) to denote a zero or more parameter matches. The prefix is taken into account for each match.

```js
var re = pathToRegexp('/:foo*')
// keys = [{ name: 'foo', delimiter: '/', optional: true, repeat: true }]

re.exec('/')
//=> ['/', undefined]

re.exec('/bar/baz')
//=> ['/bar/baz', 'bar/baz']
```

##### One or more

Parameters can be suffixed with a plus sign (`+`) to denote a one or more parameter matches. The prefix is taken into account for each match.

```js
var re = pathToRegexp('/:foo+')
// keys = [{ name: 'foo', delimiter: '/', optional: false, repeat: true }]

re.exec('/')
//=> null

re.exec('/bar/baz')
//=> ['/bar/baz', 'bar/baz']
```

#### Custom Matching Parameters

All parameters can be provided a custom regexp, which overrides the default match (`[^\/]+`). For example, you can match digits in the path:

```js
var re = pathToRegexp('/icon-:foo(\\d+).png')
// keys = [{ name: 'foo', ... }]

re.exec('/icon-123.png')
//=> ['/icon-123.png', '123']

re.exec('/icon-abc.png')
//=> null
```

**Please note:** Backslashes need to be escaped with another backslash in strings.

#### Unnamed Parameters

It is possible to write an unnamed parameter that only consists of a matching group. It works the same as a named parameter, except it will be numerically indexed.

```js
var re = pathToRegexp('/:foo/(.*)')
// keys = [{ name: 'foo', ... }, { name: 0, ... }]

re.exec('/test/route')
//=> ['/test/route', 'test', 'route']
```

### Parse

The parse function is exposed via `pathToRegexp.parse`. This will return an array of strings and keys.

```js
var tokens = pathToRegexp.parse('/route/:foo/(.*)')

console.log(tokens[0])
//=> "/route"

console.log(tokens[1])
//=> { name: 'foo', prefix: '/', delimiter: '/', optional: false, repeat: false, pattern: '[^\\/]+?' }

console.log(tokens[2])
//=> { name: 0, prefix: '/', delimiter: '/', optional: false, repeat: false, pattern: '.*' }
```

**Note:** This method only works with strings.

### Compile ("Reverse" Path-To-RegExp)

Path-To-RegExp exposes a compile function for transforming a string into a valid path.

```js
var toPath = pathToRegexp.compile('/user/:id')

toPath({ id: 123 }) //=> "/user/123"
toPath({ id: 'café' }) //=> "/user/caf%C3%A9"
toPath({ id: '/' }) //=> "/user/%2F"

toPath({ id: ':/' }) //=> "/user/%3A%2F"
toPath({ id: ':/' }, { encode: (value, token) => value }) //=> "/user/:/"

var toPathRepeated = pathToRegexp.compile('/:segment+')

toPathRepeated({ segment: 'foo' }) //=> "/foo"
toPathRepeated({ segment: ['a', 'b', 'c'] }) //=> "/a/b/c"

var toPathRegexp = pathToRegexp.compile('/user/:id(\\d+)')

toPathRegexp({ id: 123 }) //=> "/user/123"
toPathRegexp({ id: '123' }) //=> "/user/123"
toPathRegexp({ id: 'abc' }) //=> Throws `TypeError`.
```

**Note:** The generated function will throw on invalid input. It will do all necessary checks to ensure the generated path is valid. This method only works with strings.

### Working with Tokens

Path-To-RegExp exposes the two functions used internally that accept an array of tokens.

* `pathToRegexp.tokensToRegExp(tokens, keys?, options?)` Transform an array of tokens into a matching regular expression.
* `pathToRegexp.tokensToFunction(tokens)` Transform an array of tokens into a path generator function.

#### Token Information

* `name` The name of the token (`string` for named or `number` for index)
* `prefix` The prefix character for the segment (`/` or `.`)
* `delimiter` The delimiter for the segment (same as prefix or `/`)
* `optional` Indicates the token is optional (`boolean`)
* `repeat` Indicates the token is repeated (`boolean`)
* `partial` Indicates this token is a partial path segment (`boolean`)
* `pattern` The RegExp used to match this token (`string`)

## Compatibility with Express <= 4.x

Path-To-RegExp breaks compatibility with Express <= `4.x`:

* RegExp special characters can only be used in a parameter
  * Express.js 4.x used all `RegExp` special characters regardless of position - this considered a bug
* Parameters have suffixes that augment meaning - `*`, `+` and `?`. E.g. `/:user*`
* No wildcard asterisk (`*`) - use parameters instead (`(.*)`)

## TypeScript

Includes a [`.d.ts`](index.d.ts) file for TypeScript users.

## Live Demo

You can see a live demo of this library in use at [express-route-tester](http://forbeslindesay.github.com/express-route-tester/).

## License

MIT

[npm-image]: https://img.shields.io/npm/v/path-to-regexp.svg?style=flat
[npm-url]: https://npmjs.org/package/path-to-regexp
[travis-image]: https://img.shields.io/travis/pillarjs/path-to-regexp.svg?style=flat
[travis-url]: https://travis-ci.org/pillarjs/path-to-regexp
[coveralls-image]: https://img.shields.io/coveralls/pillarjs/path-to-regexp.svg?style=flat
[coveralls-url]: https://coveralls.io/r/pillarjs/path-to-regexp?branch=master
[david-image]: http://img.shields.io/david/pillarjs/path-to-regexp.svg?style=flat
[david-url]: https://david-dm.org/pillarjs/path-to-regexp
[license-image]: http://img.shields.io/npm/l/path-to-regexp.svg?style=flat
[license-url]: LICENSE.md
[downloads-image]: http://img.shields.io/npm/dm/path-to-regexp.svg?style=flat
[downloads-url]: https://npmjs.org/package/path-to-regexp
