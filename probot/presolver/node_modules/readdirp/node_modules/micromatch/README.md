# micromatch [![NPM version](https://img.shields.io/npm/v/micromatch.svg?style=flat)](https://www.npmjs.com/package/micromatch) [![NPM monthly downloads](https://img.shields.io/npm/dm/micromatch.svg?style=flat)](https://npmjs.org/package/micromatch) [![NPM total downloads](https://img.shields.io/npm/dt/micromatch.svg?style=flat)](https://npmjs.org/package/micromatch) [![Linux Build Status](https://img.shields.io/travis/micromatch/micromatch.svg?style=flat&label=Travis)](https://travis-ci.org/micromatch/micromatch) [![Windows Build Status](https://img.shields.io/appveyor/ci/micromatch/micromatch.svg?style=flat&label=AppVeyor)](https://ci.appveyor.com/project/micromatch/micromatch)

> Glob matching for javascript/node.js. A drop-in replacement and faster alternative to minimatch and multimatch.

Please consider following this project's author, [Jon Schlinkert](https://github.com/jonschlinkert), and consider starring the project to show your :heart: and support.

## Table of Contents

<details>
<summary><strong>Details</strong></summary>

- [Install](#install)
- [Quickstart](#quickstart)
- [Why use micromatch?](#why-use-micromatch)
  * [Matching features](#matching-features)
- [Switching to micromatch](#switching-to-micromatch)
  * [From minimatch](#from-minimatch)
  * [From multimatch](#from-multimatch)
- [API](#api)
- [Options](#options)
  * [options.basename](#optionsbasename)
  * [options.bash](#optionsbash)
  * [options.cache](#optionscache)
  * [options.dot](#optionsdot)
  * [options.failglob](#optionsfailglob)
  * [options.ignore](#optionsignore)
  * [options.matchBase](#optionsmatchbase)
  * [options.nobrace](#optionsnobrace)
  * [options.nocase](#optionsnocase)
  * [options.nodupes](#optionsnodupes)
  * [options.noext](#optionsnoext)
  * [options.nonegate](#optionsnonegate)
  * [options.noglobstar](#optionsnoglobstar)
  * [options.nonull](#optionsnonull)
  * [options.nullglob](#optionsnullglob)
  * [options.snapdragon](#optionssnapdragon)
  * [options.sourcemap](#optionssourcemap)
  * [options.unescape](#optionsunescape)
  * [options.unixify](#optionsunixify)
- [Extended globbing](#extended-globbing)
  * [extglobs](#extglobs)
  * [braces](#braces)
  * [regex character classes](#regex-character-classes)
  * [regex groups](#regex-groups)
  * [POSIX bracket expressions](#posix-bracket-expressions)
- [Notes](#notes)
  * [Bash 4.3 parity](#bash-43-parity)
  * [Backslashes](#backslashes)
- [Contributing](#contributing)
- [Benchmarks](#benchmarks)
  * [Running benchmarks](#running-benchmarks)
  * [Latest results](#latest-results)
- [About](#about)

</details>

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save micromatch
```

## Quickstart

```js
var mm = require('micromatch');
mm(list, patterns[, options]);
```

The [main export](#micromatch) takes a list of strings and one or more glob patterns:

```js
console.log(mm(['foo', 'bar', 'qux'], ['f*', 'b*'])); 
//=> ['foo', 'bar']
```

Use [.isMatch()](#ismatch) to get true/false:

```js
console.log(mm.isMatch('foo', 'f*'));  
//=> true
```

[Switching](#switching-to-micromatch) from minimatch and multimatch is easy!

## Why use micromatch?

> micromatch is a [drop-in replacement](#switching-to-micromatch) for minimatch and multimatch

* Supports all of the same matching features as [minimatch](https://github.com/isaacs/minimatch) and [multimatch](https://github.com/sindresorhus/multimatch)
* Micromatch uses [snapdragon](https://github.com/jonschlinkert/snapdragon) for parsing and compiling globs, which provides granular control over the entire conversion process in a way that is easy to understand, reason about, and maintain.
* More consistently accurate matching [than minimatch](https://github.com/yarnpkg/yarn/pull/3339), with more than 36,000 [test assertions](./test) to prove it.
* More complete support for the Bash 4.3 specification than minimatch and multimatch. In fact, micromatch passes _all of the spec tests_ from bash, including some that bash still fails.
* [Faster matching](#benchmarks), from a combination of optimized glob patterns, faster algorithms, and regex caching.
* [Micromatch is safer](https://github.com/micromatch/braces#braces-is-safe), and is not subject to DoS with brace patterns, like minimatch and multimatch.
* More reliable windows support than minimatch and multimatch.

### Matching features

* Support for multiple glob patterns (no need for wrappers like multimatch)
* Wildcards (`**`, `*.js`)
* Negation (`'!a/*.js'`, `'*!(b).js']`)
* [extglobs](https://github.com/micromatch/extglob) (`+(x|y)`, `!(a|b)`)
* [POSIX character classes](https://github.com/micromatch/expand-brackets) (`[[:alpha:][:digit:]]`)
* [brace expansion](https://github.com/micromatch/braces) (`foo/{1..5}.md`, `bar/{a,b,c}.js`)
* regex character classes (`foo-[1-5].js`)
* regex logical "or" (`foo/(abc|xyz).js`)

You can mix and match these features to create whatever patterns you need!

## Switching to micromatch

There is one notable difference between micromatch and minimatch in regards to how backslashes are handled. See [the notes about backslashes](#backslashes) for more information.

### From minimatch

Use [mm.isMatch()](#ismatch) instead of `minimatch()`:

```js
mm.isMatch('foo', 'b*');
//=> false
```

Use [mm.match()](#match) instead of `minimatch.match()`:

```js
mm.match(['foo', 'bar'], 'b*');
//=> 'bar'
```

### From multimatch

Same signature:

```js
mm(['foo', 'bar', 'baz'], ['f*', '*z']);
//=> ['foo', 'baz']
```

## API

### [micromatch](index.js#L41)

The main function takes a list of strings and one or more glob patterns to use for matching.

**Params**

* `list` **{Array}**: A list of strings to match
* `patterns` **{String|Array}**: One or more glob patterns to use for matching.
* `options` **{Object}**: See available [options](#options) for changing how matches are performed
* `returns` **{Array}**: Returns an array of matches

**Example**

```js
var mm = require('micromatch');
mm(list, patterns[, options]);

console.log(mm(['a.js', 'a.txt'], ['*.js']));
//=> [ 'a.js' ]
```

### [.match](index.js#L93)

Similar to the main function, but `pattern` must be a string.

**Params**

* `list` **{Array}**: Array of strings to match
* `pattern` **{String}**: Glob pattern to use for matching.
* `options` **{Object}**: See available [options](#options) for changing how matches are performed
* `returns` **{Array}**: Returns an array of matches

**Example**

```js
var mm = require('micromatch');
mm.match(list, pattern[, options]);

console.log(mm.match(['a.a', 'a.aa', 'a.b', 'a.c'], '*.a'));
//=> ['a.a', 'a.aa']
```

### [.isMatch](index.js#L154)

Returns true if the specified `string` matches the given glob `pattern`.

**Params**

* `string` **{String}**: String to match
* `pattern` **{String}**: Glob pattern to use for matching.
* `options` **{Object}**: See available [options](#options) for changing how matches are performed
* `returns` **{Boolean}**: Returns true if the string matches the glob pattern.

**Example**

```js
var mm = require('micromatch');
mm.isMatch(string, pattern[, options]);

console.log(mm.isMatch('a.a', '*.a'));
//=> true
console.log(mm.isMatch('a.b', '*.a'));
//=> false
```

### [.some](index.js#L192)

Returns true if some of the strings in the given `list` match any of the given glob `patterns`.

**Params**

* `list` **{String|Array}**: The string or array of strings to test. Returns as soon as the first match is found.
* `patterns` **{String|Array}**: One or more glob patterns to use for matching.
* `options` **{Object}**: See available [options](#options) for changing how matches are performed
* `returns` **{Boolean}**: Returns true if any patterns match `str`

**Example**

```js
var mm = require('micromatch');
mm.some(list, patterns[, options]);

console.log(mm.some(['foo.js', 'bar.js'], ['*.js', '!foo.js']));
// true
console.log(mm.some(['foo.js'], ['*.js', '!foo.js']));
// false
```

### [.every](index.js#L228)

Returns true if every string in the given `list` matches any of the given glob `patterns`.

**Params**

* `list` **{String|Array}**: The string or array of strings to test.
* `patterns` **{String|Array}**: One or more glob patterns to use for matching.
* `options` **{Object}**: See available [options](#options) for changing how matches are performed
* `returns` **{Boolean}**: Returns true if any patterns match `str`

**Example**

```js
var mm = require('micromatch');
mm.every(list, patterns[, options]);

console.log(mm.every('foo.js', ['foo.js']));
// true
console.log(mm.every(['foo.js', 'bar.js'], ['*.js']));
// true
console.log(mm.every(['foo.js', 'bar.js'], ['*.js', '!foo.js']));
// false
console.log(mm.every(['foo.js'], ['*.js', '!foo.js']));
// false
```

### [.any](index.js#L260)

Returns true if **any** of the given glob `patterns` match the specified `string`.

**Params**

* `str` **{String|Array}**: The string to test.
* `patterns` **{String|Array}**: One or more glob patterns to use for matching.
* `options` **{Object}**: See available [options](#options) for changing how matches are performed
* `returns` **{Boolean}**: Returns true if any patterns match `str`

**Example**

```js
var mm = require('micromatch');
mm.any(string, patterns[, options]);

console.log(mm.any('a.a', ['b.*', '*.a']));
//=> true
console.log(mm.any('a.a', 'b.*'));
//=> false
```

### [.all](index.js#L308)

Returns true if **all** of the given `patterns` match the specified string.

**Params**

* `str` **{String|Array}**: The string to test.
* `patterns` **{String|Array}**: One or more glob patterns to use for matching.
* `options` **{Object}**: See available [options](#options) for changing how matches are performed
* `returns` **{Boolean}**: Returns true if any patterns match `str`

**Example**

```js
var mm = require('micromatch');
mm.all(string, patterns[, options]);

console.log(mm.all('foo.js', ['foo.js']));
// true

console.log(mm.all('foo.js', ['*.js', '!foo.js']));
// false

console.log(mm.all('foo.js', ['*.js', 'foo.js']));
// true

console.log(mm.all('foo.js', ['*.js', 'f*', '*o*', '*o.js']));
// true
```

### [.not](index.js#L340)

Returns a list of strings that _**do not match any**_ of the given `patterns`.

**Params**

* `list` **{Array}**: Array of strings to match.
* `patterns` **{String|Array}**: One or more glob pattern to use for matching.
* `options` **{Object}**: See available [options](#options) for changing how matches are performed
* `returns` **{Array}**: Returns an array of strings that **do not match** the given patterns.

**Example**

```js
var mm = require('micromatch');
mm.not(list, patterns[, options]);

console.log(mm.not(['a.a', 'b.b', 'c.c'], '*.a'));
//=> ['b.b', 'c.c']
```

### [.contains](index.js#L376)

Returns true if the given `string` contains the given pattern. Similar to [.isMatch](#isMatch) but the pattern can match any part of the string.

**Params**

* `str` **{String}**: The string to match.
* `patterns` **{String|Array}**: Glob pattern to use for matching.
* `options` **{Object}**: See available [options](#options) for changing how matches are performed
* `returns` **{Boolean}**: Returns true if the patter matches any part of `str`.

**Example**

```js
var mm = require('micromatch');
mm.contains(string, pattern[, options]);

console.log(mm.contains('aa/bb/cc', '*b'));
//=> true
console.log(mm.contains('aa/bb/cc', '*d'));
//=> false
```

### [.matchKeys](index.js#L432)

Filter the keys of the given object with the given `glob` pattern and `options`. Does not attempt to match nested keys. If you need this feature, use [glob-object](https://github.com/jonschlinkert/glob-object) instead.

**Params**

* `object` **{Object}**: The object with keys to filter.
* `patterns` **{String|Array}**: One or more glob patterns to use for matching.
* `options` **{Object}**: See available [options](#options) for changing how matches are performed
* `returns` **{Object}**: Returns an object with only keys that match the given patterns.

**Example**

```js
var mm = require('micromatch');
mm.matchKeys(object, patterns[, options]);

var obj = { aa: 'a', ab: 'b', ac: 'c' };
console.log(mm.matchKeys(obj, '*b'));
//=> { ab: 'b' }
```

### [.matcher](index.js#L461)

Returns a memoized matcher function from the given glob `pattern` and `options`. The returned function takes a string to match as its only argument and returns true if the string is a match.

**Params**

* `pattern` **{String}**: Glob pattern
* `options` **{Object}**: See available [options](#options) for changing how matches are performed.
* `returns` **{Function}**: Returns a matcher function.

**Example**

```js
var mm = require('micromatch');
mm.matcher(pattern[, options]);

var isMatch = mm.matcher('*.!(*a)');
console.log(isMatch('a.a'));
//=> false
console.log(isMatch('a.b'));
//=> true
```

### [.capture](index.js#L536)

Returns an array of matches captured by `pattern` in `string, or`null` if the pattern did not match.

**Params**

* `pattern` **{String}**: Glob pattern to use for matching.
* `string` **{String}**: String to match
* `options` **{Object}**: See available [options](#options) for changing how matches are performed
* `returns` **{Boolean}**: Returns an array of captures if the string matches the glob pattern, otherwise `null`.

**Example**

```js
var mm = require('micromatch');
mm.capture(pattern, string[, options]);

console.log(mm.capture('test/*.js', 'test/foo.js'));
//=> ['foo']
console.log(mm.capture('test/*.js', 'foo/bar.css'));
//=> null
```

### [.makeRe](index.js#L571)

Create a regular expression from the given glob `pattern`.

**Params**

* `pattern` **{String}**: A glob pattern to convert to regex.
* `options` **{Object}**: See available [options](#options) for changing how matches are performed.
* `returns` **{RegExp}**: Returns a regex created from the given pattern.

**Example**

```js
var mm = require('micromatch');
mm.makeRe(pattern[, options]);

console.log(mm.makeRe('*.js'));
//=> /^(?:(\.[\\\/])?(?!\.)(?=.)[^\/]*?\.js)$/
```

### [.braces](index.js#L618)

Expand the given brace `pattern`.

**Params**

* `pattern` **{String}**: String with brace pattern to expand.
* `options` **{Object}**: Any [options](#options) to change how expansion is performed. See the [braces](https://github.com/micromatch/braces) library for all available options.
* `returns` **{Array}**

**Example**

```js
var mm = require('micromatch');
console.log(mm.braces('foo/{a,b}/bar'));
//=> ['foo/(a|b)/bar']

console.log(mm.braces('foo/{a,b}/bar', {expand: true}));
//=> ['foo/(a|b)/bar']
```

### [.create](index.js#L685)

Parses the given glob `pattern` and returns an array of abstract syntax trees (ASTs), with the compiled `output` and optional source `map` on each AST.

**Params**

* `pattern` **{String}**: Glob pattern to parse and compile.
* `options` **{Object}**: Any [options](#options) to change how parsing and compiling is performed.
* `returns` **{Object}**: Returns an object with the parsed AST, compiled string and optional source map.

**Example**

```js
var mm = require('micromatch');
mm.create(pattern[, options]);

console.log(mm.create('abc/*.js'));
// [{ options: { source: 'string', sourcemap: true },
//   state: {},
//   compilers:
//    { ... },
//   output: '(\\.[\\\\\\/])?abc\\/(?!\\.)(?=.)[^\\/]*?\\.js',
//   ast:
//    { type: 'root',
//      errors: [],
//      nodes:
//       [ ... ],
//      dot: false,
//      input: 'abc/*.js' },
//   parsingErrors: [],
//   map:
//    { version: 3,
//      sources: [ 'string' ],
//      names: [],
//      mappings: 'AAAA,GAAG,EAAC,kBAAC,EAAC,EAAE',
//      sourcesContent: [ 'abc/*.js' ] },
//   position: { line: 1, column: 28 },
//   content: {},
//   files: {},
//   idx: 6 }]
```

### [.parse](index.js#L732)

Parse the given `str` with the given `options`.

**Params**

* `str` **{String}**
* `options` **{Object}**
* `returns` **{Object}**: Returns an AST

**Example**

```js
var mm = require('micromatch');
mm.parse(pattern[, options]);

var ast = mm.parse('a/{b,c}/d');
console.log(ast);
// { type: 'root',
//   errors: [],
//   input: 'a/{b,c}/d',
//   nodes:
//    [ { type: 'bos', val: '' },
//      { type: 'text', val: 'a/' },
//      { type: 'brace',
//        nodes:
//         [ { type: 'brace.open', val: '{' },
//           { type: 'text', val: 'b,c' },
//           { type: 'brace.close', val: '}' } ] },
//      { type: 'text', val: '/d' },
//      { type: 'eos', val: '' } ] }
```

### [.compile](index.js#L780)

Compile the given `ast` or string with the given `options`.

**Params**

* `ast` **{Object|String}**
* `options` **{Object}**
* `returns` **{Object}**: Returns an object that has an `output` property with the compiled string.

**Example**

```js
var mm = require('micromatch');
mm.compile(ast[, options]);

var ast = mm.parse('a/{b,c}/d');
console.log(mm.compile(ast));
// { options: { source: 'string' },
//   state: {},
//   compilers:
//    { eos: [Function],
//      noop: [Function],
//      bos: [Function],
//      brace: [Function],
//      'brace.open': [Function],
//      text: [Function],
//      'brace.close': [Function] },
//   output: [ 'a/(b|c)/d' ],
//   ast:
//    { ... },
//   parsingErrors: [] }
```

### [.clearCache](index.js#L801)

Clear the regex cache.

**Example**

```js
mm.clearCache();
```

## Options

* [basename](#optionsbasename)
* [bash](#optionsbash)
* [cache](#optionscache)
* [dot](#optionsdot)
* [failglob](#optionsfailglob)
* [ignore](#optionsignore)
* [matchBase](#optionsmatchBase)
* [nobrace](#optionsnobrace)
* [nocase](#optionsnocase)
* [nodupes](#optionsnodupes)
* [noext](#optionsnoext)
* [noglobstar](#optionsnoglobstar)
* [nonull](#optionsnonull)
* [nullglob](#optionsnullglob)
* [snapdragon](#optionssnapdragon)
* [sourcemap](#optionssourcemap)
* [unescape](#optionsunescape)
* [unixify](#optionsunixify)

### options.basename

Allow glob patterns without slashes to match a file path based on its basename. Same behavior as [minimatch](https://github.com/isaacs/minimatch) option `matchBase`.

**Type**: `Boolean`

**Default**: `false`

**Example**

```js
mm(['a/b.js', 'a/c.md'], '*.js');
//=> []

mm(['a/b.js', 'a/c.md'], '*.js', {matchBase: true});
//=> ['a/b.js']
```

### options.bash

Enabled by default, this option enforces bash-like behavior with stars immediately following a bracket expression. Bash bracket expressions are similar to regex character classes, but unlike regex, a star following a bracket expression **does not repeat the bracketed characters**. Instead, the star is treated the same as an other star.

**Type**: `Boolean`

**Default**: `true`

**Example**

```js
var files = ['abc', 'ajz'];
console.log(mm(files, '[a-c]*'));
//=> ['abc', 'ajz']

console.log(mm(files, '[a-c]*', {bash: false}));
```

### options.cache

Disable regex and function memoization.

**Type**: `Boolean`

**Default**: `undefined`

### options.dot

Match dotfiles. Same behavior as [minimatch](https://github.com/isaacs/minimatch) option `dot`.

**Type**: `Boolean`

**Default**: `false`

### options.failglob

Similar to the `--failglob` behavior in Bash, throws an error when no matches are found.

**Type**: `Boolean`

**Default**: `undefined`

### options.ignore

String or array of glob patterns to match files to ignore.

**Type**: `String|Array`

**Default**: `undefined`

### options.matchBase

Alias for [options.basename](#options-basename).

### options.nobrace

Disable expansion of brace patterns. Same behavior as [minimatch](https://github.com/isaacs/minimatch) option `nobrace`.

**Type**: `Boolean`

**Default**: `undefined`

See [braces](https://github.com/micromatch/braces) for more information about extended brace expansion.

### options.nocase

Use a case-insensitive regex for matching files. Same behavior as [minimatch](https://github.com/isaacs/minimatch).

**Type**: `Boolean`

**Default**: `undefined`

### options.nodupes

Remove duplicate elements from the result array.

**Type**: `Boolean`

**Default**: `undefined`

**Example**

Example of using the `unescape` and `nodupes` options together:

```js
mm.match(['a/b/c', 'a/b/c'], 'a/b/c');
//=> ['a/b/c', 'a/b/c']

mm.match(['a/b/c', 'a/b/c'], 'a/b/c', {nodupes: true});
//=> ['abc']
```

### options.noext

Disable extglob support, so that extglobs are regarded as literal characters.

**Type**: `Boolean`

**Default**: `undefined`

**Examples**

```js
mm(['a/z', 'a/b', 'a/!(z)'], 'a/!(z)');
//=> ['a/b', 'a/!(z)']

mm(['a/z', 'a/b', 'a/!(z)'], 'a/!(z)', {noext: true});
//=> ['a/!(z)'] (matches only as literal characters)
```

### options.nonegate

Disallow negation (`!`) patterns, and treat leading `!` as a literal character to match.

**Type**: `Boolean`

**Default**: `undefined`

### options.noglobstar

Disable matching with globstars (`**`).

**Type**: `Boolean`

**Default**: `undefined`

```js
mm(['a/b', 'a/b/c', 'a/b/c/d'], 'a/**');
//=> ['a/b', 'a/b/c', 'a/b/c/d']

mm(['a/b', 'a/b/c', 'a/b/c/d'], 'a/**', {noglobstar: true});
//=> ['a/b']
```

### options.nonull

Alias for [options.nullglob](#options-nullglob).

### options.nullglob

If `true`, when no matches are found the actual (arrayified) glob pattern is returned instead of an empty array. Same behavior as [minimatch](https://github.com/isaacs/minimatch) option `nonull`.

**Type**: `Boolean`

**Default**: `undefined`

### options.snapdragon

Pass your own instance of [snapdragon](https://github.com/jonschlinkert/snapdragon), to customize parsers or compilers.

**Type**: `Object`

**Default**: `undefined`

### options.sourcemap

Generate a source map by enabling the `sourcemap` option with the `.parse`, `.compile`, or `.create` methods.

_(Note that sourcemaps are currently not enabled for brace patterns)_

**Examples**

``` js
var mm = require('micromatch');
var pattern = '*(*(of*(a)x)z)';

var res = mm.create('abc/*.js', {sourcemap: true});
console.log(res.map);
// { version: 3,
//   sources: [ 'string' ],
//   names: [],
//   mappings: 'AAAA,GAAG,EAAC,iBAAC,EAAC,EAAE',
//   sourcesContent: [ 'abc/*.js' ] }

var ast = mm.parse('abc/**/*.js');
var res = mm.compile(ast, {sourcemap: true});
console.log(res.map);
// { version: 3,
//   sources: [ 'string' ],
//   names: [],
//   mappings: 'AAAA,GAAG,EAAC,2BAAE,EAAC,iBAAC,EAAC,EAAE',
//   sourcesContent: [ 'abc/**/*.js' ] }

var ast = mm.parse(pattern);
var res = mm.compile(ast, {sourcemap: true});
console.log(res.map);
// { version: 3,
//   sources: [ 'string' ],
//   names: [],
//   mappings: 'AAAA,CAAE,CAAE,EAAE,CAAE,CAAC,EAAC,CAAC,EAAC,CAAC,EAAC',
//   sourcesContent: [ '*(*(of*(a)x)z)' ] }
```

### options.unescape

Remove backslashes from returned matches.

**Type**: `Boolean`

**Default**: `undefined`

**Example**

In this example we want to match a literal `*`:

```js
mm.match(['abc', 'a\\*c'], 'a\\*c');
//=> ['a\\*c']

mm.match(['abc', 'a\\*c'], 'a\\*c', {unescape: true});
//=> ['a*c']
```

### options.unixify

Convert path separators on returned files to posix/unix-style forward slashes.

**Type**: `Boolean`

**Default**: `true` on windows, `false` everywhere else

**Example**

```js
mm.match(['a\\b\\c'], 'a/**');
//=> ['a/b/c']

mm.match(['a\\b\\c'], {unixify: false});
//=> ['a\\b\\c']
```

## Extended globbing

Micromatch also supports extended globbing features.

### extglobs

Extended globbing, as described by the bash man page:

| **pattern** | **regex equivalent** | **description** | 
| --- | --- | --- |
| `?(pattern)` | `(pattern)?` | Matches zero or one occurrence of the given patterns |
| `*(pattern)` | `(pattern)*` | Matches zero or more occurrences of the given patterns |
| `+(pattern)` | `(pattern)+` | Matches one or more occurrences of the given patterns |
| `@(pattern)` | `(pattern)` <sup>*</sup> | Matches one of the given patterns |
| `!(pattern)` | N/A (equivalent regex is much more complicated) | Matches anything except one of the given patterns |

<sup><strong>*</strong></sup> Note that `@` isn't a RegEx character.

Powered by [extglob](https://github.com/micromatch/extglob). Visit that library for the full range of options or to report extglob related issues.

### braces

Brace patterns can be used to match specific ranges or sets of characters. For example, the pattern `*/{1..3}/*` would match any of following strings:

```
foo/1/bar
foo/2/bar
foo/3/bar
baz/1/qux
baz/2/qux
baz/3/qux
```

Visit [braces](https://github.com/micromatch/braces) to see the full range of features and options related to brace expansion, or to create brace matching or expansion related issues.

### regex character classes

Given the list: `['a.js', 'b.js', 'c.js', 'd.js', 'E.js']`:

* `[ac].js`: matches both `a` and `c`, returning `['a.js', 'c.js']`
* `[b-d].js`: matches from `b` to `d`, returning `['b.js', 'c.js', 'd.js']`
* `[b-d].js`: matches from `b` to `d`, returning `['b.js', 'c.js', 'd.js']`
* `a/[A-Z].js`: matches and uppercase letter, returning `['a/E.md']`

Learn about [regex character classes](http://www.regular-expressions.info/charclass.html).

### regex groups

Given `['a.js', 'b.js', 'c.js', 'd.js', 'E.js']`:

* `(a|c).js`: would match either `a` or `c`, returning `['a.js', 'c.js']`
* `(b|d).js`: would match either `b` or `d`, returning `['b.js', 'd.js']`
* `(b|[A-Z]).js`: would match either `b` or an uppercase letter, returning `['b.js', 'E.js']`

As with regex, parens can be nested, so patterns like `((a|b)|c)/b` will work. Although brace expansion might be friendlier to use, depending on preference.

### POSIX bracket expressions

POSIX brackets are intended to be more user-friendly than regex character classes. This of course is in the eye of the beholder.

**Example**

```js
mm.isMatch('a1', '[[:alpha:][:digit:]]');
//=> true

mm.isMatch('a1', '[[:alpha:][:alpha:]]');
//=> false
```

See [expand-brackets](https://github.com/jonschlinkert/expand-brackets) for more information about bracket expressions.

***

## Notes

### Bash 4.3 parity

Whenever possible matching behavior is based on behavior Bash 4.3, which is mostly consistent with minimatch.

However, it's suprising how many edge cases and rabbit holes there are with glob matching, and since there is no real glob specification, and micromatch is more accurate than both Bash and minimatch, there are cases where best-guesses were made for behavior. In a few cases where Bash had no answers, we used wildmatch (used by git) as a fallback.

### Backslashes

There is an important, notable difference between minimatch and micromatch _in regards to how backslashes are handled_ in glob patterns.

* Micromatch exclusively and explicitly reserves backslashes for escaping characters in a glob pattern, even on windows. This is consistent with bash behavior.
* Minimatch converts all backslashes to forward slashes, which means you can't use backslashes to escape any characters in your glob patterns.

We made this decision for micromatch for a couple of reasons:

* consistency with bash conventions.
* glob patterns are not filepaths. They are a type of [regular language](https://en.wikipedia.org/wiki/Regular_language) that is converted to a JavaScript regular expression. Thus, when forward slashes are defined in a glob pattern, the resulting regular expression will match windows or POSIX path separators just fine.

**A note about joining paths to globs**

Note that when you pass something like `path.join('foo', '*')` to micromatch, you are creating a filepath and expecting it to still work as a glob pattern. This causes problems on windows, since the `path.sep` is `\\`.

In other words, since `\\` is reserved as an escape character in globs, on windows `path.join('foo', '*')` would result in `foo\\*`, which tells micromatch to match `*` as a literal character. This is the same behavior as bash.

## Contributing

All contributions are welcome! Please read [the contributing guide](.github/contributing.md) to get started.

**Bug reports**

Please create an issue if you encounter a bug or matching behavior that doesn't seem correct. If you find a matching-related issue, please:

* [research existing issues first](../../issues) (open and closed)
* visit the [GNU Bash documentation](https://www.gnu.org/software/bash/manual/) to see how Bash deals with the pattern
* visit the [minimatch](https://github.com/isaacs/minimatch) documentation to cross-check expected behavior in node.js
* if all else fails, since there is no real specification for globs we will probably need to discuss expected behavior and decide how to resolve it. which means any detail you can provide to help with this discussion would be greatly appreciated.

**Platform issues**

It's important to us that micromatch work consistently on all platforms. If you encounter any platform-specific matching or path related issues, please let us know (pull requests are also greatly appreciated).

## Benchmarks

### Running benchmarks

Install dev dependencies:

```bash
npm i -d && npm run benchmark
```

### Latest results

As of February 18, 2018 (longer bars are better):

```sh
# braces-globstar-large-list (485691 bytes)
  micromatch ██████████████████████████████████████████████████ (517 ops/sec ±0.49%)
  minimatch  █ (18.92 ops/sec ±0.54%)
  multimatch █ (18.94 ops/sec ±0.62%)

  micromatch is faster by an avg. of 2,733%

# braces-multiple (3362 bytes)
  micromatch ██████████████████████████████████████████████████ (33,625 ops/sec ±0.45%)
  minimatch   (2.92 ops/sec ±3.26%)
  multimatch  (2.90 ops/sec ±2.76%)

  micromatch is faster by an avg. of 1,156,935%

# braces-range (727 bytes)
  micromatch █████████████████████████████████████████████████ (155,220 ops/sec ±0.56%)
  minimatch  ██████ (20,186 ops/sec ±1.27%)
  multimatch ██████ (19,809 ops/sec ±0.60%)

  micromatch is faster by an avg. of 776%

# braces-set (2858 bytes)
  micromatch █████████████████████████████████████████████████ (24,354 ops/sec ±0.92%)
  minimatch  █████ (2,566 ops/sec ±0.56%)
  multimatch ████ (2,431 ops/sec ±1.25%)

  micromatch is faster by an avg. of 975%

# globstar-large-list (485686 bytes)
  micromatch █████████████████████████████████████████████████ (504 ops/sec ±0.45%)
  minimatch  ███ (33.36 ops/sec ±1.08%)
  multimatch ███ (33.19 ops/sec ±1.35%)

  micromatch is faster by an avg. of 1,514%

# globstar-long-list (90647 bytes)
  micromatch ██████████████████████████████████████████████████ (2,694 ops/sec ±1.08%)
  minimatch  ████████████████ (870 ops/sec ±1.09%)
  multimatch ████████████████ (862 ops/sec ±0.84%)

  micromatch is faster by an avg. of 311%

# globstar-short-list (182 bytes)
  micromatch ██████████████████████████████████████████████████ (328,921 ops/sec ±1.06%)
  minimatch  █████████ (64,808 ops/sec ±1.42%)
  multimatch ████████ (57,991 ops/sec ±2.11%)

  micromatch is faster by an avg. of 536%

# no-glob (701 bytes)
  micromatch █████████████████████████████████████████████████ (415,935 ops/sec ±0.36%)
  minimatch  ███████████ (92,730 ops/sec ±1.44%)
  multimatch █████████ (81,958 ops/sec ±2.13%)

  micromatch is faster by an avg. of 476%

# star-basename-long (12339 bytes)
  micromatch █████████████████████████████████████████████████ (7,963 ops/sec ±0.36%)
  minimatch  ███████████████████████████████ (5,072 ops/sec ±0.83%)
  multimatch ███████████████████████████████ (5,028 ops/sec ±0.40%)

  micromatch is faster by an avg. of 158%

# star-basename-short (349 bytes)
  micromatch ██████████████████████████████████████████████████ (269,552 ops/sec ±0.70%)
  minimatch  ██████████████████████ (122,457 ops/sec ±1.39%)
  multimatch ████████████████████ (110,788 ops/sec ±1.99%)

  micromatch is faster by an avg. of 231%

# star-folder-long (19207 bytes)
  micromatch █████████████████████████████████████████████████ (3,806 ops/sec ±0.38%)
  minimatch  ████████████████████████████ (2,204 ops/sec ±0.32%)
  multimatch ██████████████████████████ (2,020 ops/sec ±1.07%)

  micromatch is faster by an avg. of 180%

# star-folder-short (551 bytes)
  micromatch ██████████████████████████████████████████████████ (249,077 ops/sec ±0.40%)
  minimatch  ███████████ (59,431 ops/sec ±1.67%)
  multimatch ███████████ (55,569 ops/sec ±1.43%)

  micromatch is faster by an avg. of 433%
```

## About

<details>
<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

Please read the [contributing guide](.github/contributing.md) for advice on opening issues, pull requests, and coding standards.

</details>

<details>
<summary><strong>Running Tests</strong></summary>

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

</details>

<details>
<summary><strong>Building docs</strong></summary>

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

</details>

### Related projects

You might also be interested in these projects:

* [braces](https://www.npmjs.com/package/braces): Bash-like brace expansion, implemented in JavaScript. Safer than other brace expansion libs, with complete support… [more](https://github.com/micromatch/braces) | [homepage](https://github.com/micromatch/braces "Bash-like brace expansion, implemented in JavaScript. Safer than other brace expansion libs, with complete support for the Bash 4.3 braces specification, without sacrificing speed.")
* [expand-brackets](https://www.npmjs.com/package/expand-brackets): Expand POSIX bracket expressions (character classes) in glob patterns. | [homepage](https://github.com/jonschlinkert/expand-brackets "Expand POSIX bracket expressions (character classes) in glob patterns.")
* [extglob](https://www.npmjs.com/package/extglob): Extended glob support for JavaScript. Adds (almost) the expressive power of regular expressions to glob… [more](https://github.com/micromatch/extglob) | [homepage](https://github.com/micromatch/extglob "Extended glob support for JavaScript. Adds (almost) the expressive power of regular expressions to glob patterns.")
* [fill-range](https://www.npmjs.com/package/fill-range): Fill in a range of numbers or letters, optionally passing an increment or `step` to… [more](https://github.com/jonschlinkert/fill-range) | [homepage](https://github.com/jonschlinkert/fill-range "Fill in a range of numbers or letters, optionally passing an increment or `step` to use, or create a regex-compatible range with `options.toRegex`")
* [nanomatch](https://www.npmjs.com/package/nanomatch): Fast, minimal glob matcher for node.js. Similar to micromatch, minimatch and multimatch, but complete Bash… [more](https://github.com/micromatch/nanomatch) | [homepage](https://github.com/micromatch/nanomatch "Fast, minimal glob matcher for node.js. Similar to micromatch, minimatch and multimatch, but complete Bash 4.3 wildcard support only (no support for exglobs, posix brackets or braces)")

### Contributors

| **Commits** | **Contributor** | 
| --- | --- |
| 457 | [jonschlinkert](https://github.com/jonschlinkert) |
| 12 | [es128](https://github.com/es128) |
| 8 | [doowb](https://github.com/doowb) |
| 3 | [paulmillr](https://github.com/paulmillr) |
| 2 | [TrySound](https://github.com/TrySound) |
| 2 | [MartinKolarik](https://github.com/MartinKolarik) |
| 2 | [charlike-old](https://github.com/charlike-old) |
| 1 | [amilajack](https://github.com/amilajack) |
| 1 | [mrmlnc](https://github.com/mrmlnc) |
| 1 | [devongovett](https://github.com/devongovett) |
| 1 | [DianeLooney](https://github.com/DianeLooney) |
| 1 | [UltCombo](https://github.com/UltCombo) |
| 1 | [tomByrer](https://github.com/tomByrer) |
| 1 | [fidian](https://github.com/fidian) |

### Author

**Jon Schlinkert**

* [linkedin/in/jonschlinkert](https://linkedin.com/in/jonschlinkert)
* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2018, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on February 18, 2018._