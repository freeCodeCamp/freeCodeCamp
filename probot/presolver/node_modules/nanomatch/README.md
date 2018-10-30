# nanomatch [![NPM version](https://img.shields.io/npm/v/nanomatch.svg?style=flat)](https://www.npmjs.com/package/nanomatch) [![NPM monthly downloads](https://img.shields.io/npm/dm/nanomatch.svg?style=flat)](https://npmjs.org/package/nanomatch) [![NPM total downloads](https://img.shields.io/npm/dt/nanomatch.svg?style=flat)](https://npmjs.org/package/nanomatch) [![Linux Build Status](https://img.shields.io/travis/micromatch/nanomatch.svg?style=flat&label=Travis)](https://travis-ci.org/micromatch/nanomatch) [![Windows Build Status](https://img.shields.io/appveyor/ci/micromatch/nanomatch.svg?style=flat&label=AppVeyor)](https://ci.appveyor.com/project/micromatch/nanomatch)

> Fast, minimal glob matcher for node.js. Similar to micromatch, minimatch and multimatch, but complete Bash 4.3 wildcard support only (no support for exglobs, posix brackets or braces)

Please consider following this project's author, [Jon Schlinkert](https://github.com/jonschlinkert), and consider starring the project to show your :heart: and support.

## Table of Contents

<details>
<summary><strong>Details</strong></summary>

- [Install](#install)
- [What is nanomatch?](#what-is-nanomatch)
- [Getting started](#getting-started)
  * [Installing nanomatch](#installing-nanomatch)
  * [Usage](#usage)
- [Documentation](#documentation)
  * [Escaping](#escaping)
- [API](#api)
- [Options](#options)
  * [options.basename](#optionsbasename)
  * [options.bash](#optionsbash)
  * [options.cache](#optionscache)
  * [options.dot](#optionsdot)
  * [options.failglob](#optionsfailglob)
  * [options.ignore](#optionsignore)
  * [options.matchBase](#optionsmatchbase)
  * [options.nocase](#optionsnocase)
  * [options.nodupes](#optionsnodupes)
  * [options.noglobstar](#optionsnoglobstar)
  * [options.nonegate](#optionsnonegate)
  * [options.nonull](#optionsnonull)
  * [options.nullglob](#optionsnullglob)
  * [options.slash](#optionsslash)
  * [options.star](#optionsstar)
  * [options.snapdragon](#optionssnapdragon)
  * [options.sourcemap](#optionssourcemap)
  * [options.unescape](#optionsunescape)
  * [options.unixify](#optionsunixify)
- [Features](#features)
- [Bash expansion libs](#bash-expansion-libs)
- [Benchmarks](#benchmarks)
  * [Running benchmarks](#running-benchmarks)
  * [Nanomatch vs. Minimatch vs. Multimatch](#nanomatch-vs-minimatch-vs-multimatch)
- [About](#about)

</details>

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save nanomatch
```

<details>
<summary><strong>Release history</strong></summary>

## History

### key

Changelog entries are classified using the following labels _(from [keep-a-changelog](https://github.com/olivierlacan/keep-a-changelog)_):

* `added`: for new features
* `changed`: for changes in existing functionality
* `deprecated`: for once-stable features removed in upcoming releases
* `removed`: for deprecated features removed in this release
* `fixed`: for any bug fixes
* `bumped`: updated dependencies, only minor or higher will be listed.

### [1.1.0](https://github.com/micromatch/nanomatch/compare/1.0.4...1.1.0) - 2017-04-11

**Fixed**

* adds support for unclosed quotes

**Added**

* adds support for `options.noglobstar`

### [1.0.4](https://github.com/micromatch/nanomatch/compare/1.0.3...1.0.4) - 2017-04-06

Housekeeping updates. Adds documentation section about escaping, cleans up utils.

### [1.0.3](https://github.com/micromatch/nanomatch/compare/1.0.1...1.0.3) - 2017-04-06

This release includes fixes for windows path edge cases and other improvements for stricter adherence to bash spec.

**Fixed**

* More windows path edge cases

**Added**

* Support for bash-like quoted strings for escaping sequences of characters, such as `foo/"**"/bar` where `**` should be matched literally and not evaluated as special characters.

### [1.0.1](https://github.com/micromatch/nanomatch/compare/1.0.0...1.0.1) - 2016-12-12

**Added**

* Support for windows path edge cases where backslashes are used in brackets or other unusual combinations.

### [1.0.0](https://github.com/micromatch/nanomatch/compare/0.1.0...1.0.0) - 2016-12-12

Stable release.

### [0.1.0] - 2016-10-08

First release.

</details>

## What is nanomatch?

Nanomatch is a fast and accurate glob matcher with full support for standard Bash glob features, including the following "metacharacters": `*`, `**`, `?` and `[...]`.

**Learn more**

* [Getting started](#getting-started): learn how to install and begin using nanomatch
* [Features](#features): jump to info about supported patterns, and a glob matching reference
* [API documentation](#api): jump to available options and methods
* [Unit tests](test): visit unit tests. there is no better way to learn a code library than spending time the unit tests. Nanomatch has 36,000 unit tests - go become a glob matching ninja!

<details>
<summary><strong>How is this different?</strong></summary>

**Speed and accuracy**

Nanomatch uses [snapdragon](https://github.com/jonschlinkert/snapdragon) for parsing and compiling globs, which results in:

* Granular control over the entire conversion process in a way that is easy to understand, reason about, and customize.
* Faster matching, from a combination of optimized glob patterns and (optional) caching.
* Much greater accuracy than minimatch. In fact, nanomatch passes _all of the spec tests_ from bash, including some that bash still fails. However, since there is no real specification for globs, if you encounter a pattern that yields unexpected match results [after researching previous issues](../../issues), [please let us know](../../issues/new).

**Basic globbing only**

Nanomatch supports [basic globbing only](#features), which is limited to `*`, `**`, `?` and regex-like brackets.

If you need support for the other [bash "expansion" types](#bash-expansion-libs) (in addition to the wildcard matching provided by nanomatch), consider using [micromatch](https://github.com/micromatch/micromatch) instead. _(micromatch >=3.0.0  uses the nanomatch parser and compiler for basic glob matching)_

</details>

## Getting started

### Installing nanomatch

**Install with [yarn](https://yarnpkg.com/)**

```sh
$ yarn add nanomatch
```

**Install with [npm](https://npmjs.com)**

```sh
$ npm install nanomatch
```

### Usage

Add nanomatch to your project using node's `require()` system:

```js
var nanomatch = require('nanomatch');

// the main export is a function that takes an array of strings to match
// and a string or array of patterns to use for matching
nanomatch(list, patterns[, options]);
```

**Params**

* `list` **{String|Array}**: List of strings to perform matches against. This is often a list of file paths.
* `patterns` **{String|Array}**: One or more [glob paterns](#features) to use for matching.
* `options` **{Object}**: Any [supported options](#options) may be passed

**Examples**

```js
var nm = require('nanomatch');
console.log(nm(['a', 'b/b', 'c/c/c'], '*'));
//=> ['a']

console.log(nm(['a', 'b/b', 'c/c/c'], '*/*'));
//=> ['b/b']

console.log(nm(['a', 'b/b', 'c/c/c'], '**'));
//=> ['a', 'b/b', 'c/c/c']
```

See the [API documentation](#api) for available methods and [options](https://github.com/einaros/options.js).

## Documentation

### Escaping

_Backslashes and quotes_ can be used to escape characters, forcing nanomatch to regard those characters as a literal characters.

**Backslashes**

Use backslashes to escape single characters. For example, the following pattern would match `foo/*/bar` exactly:

```js
'foo/\*/bar'
```

The following pattern would match `foo/` followed by a literal `*`, followed by zero or more of any characters besides `/`, followed by `/bar`.

```js
'foo/\**/bar'
```

**Quoted strings**

Use single or double quotes to escape sequences of characters. For example, the following patterns would match `foo/**/bar` exactly:

```js
'foo/"**"/bar'
'foo/\'**\'/bar'
"foo/'**'/bar"
```

**Matching literal quotes**

If you need to match quotes literally, you can escape them as well. For example, the following will match `foo/"*"/bar`, `foo/"a"/bar`, `foo/"b"/bar`, or `foo/"c"/bar`:

```js
'foo/\\"*\\"/bar'
```

And the following will match `foo/'*'/bar`, `foo/'a'/bar`, `foo/'b'/bar`, or `foo/'c'/bar`:

```js
'foo/\\\'*\\\'/bar'
```

## API

### [nanomatch](index.js#L40)

The main function takes a list of strings and one or more glob patterns to use for matching.

**Params**

* `list` **{Array}**: A list of strings to match
* `patterns` **{String|Array}**: One or more glob patterns to use for matching.
* `options` **{Object}**: See available [options](#options) for changing how matches are performed
* `returns` **{Array}**: Returns an array of matches

**Example**

```js
var nm = require('nanomatch');
nm(list, patterns[, options]);

console.log(nm(['a.js', 'a.txt'], ['*.js']));
//=> [ 'a.js' ]
```

### [.match](index.js#L106)

Similar to the main function, but `pattern` must be a string.

**Params**

* `list` **{Array}**: Array of strings to match
* `pattern` **{String}**: Glob pattern to use for matching.
* `options` **{Object}**: See available [options](#options) for changing how matches are performed
* `returns` **{Array}**: Returns an array of matches

**Example**

```js
var nm = require('nanomatch');
nm.match(list, pattern[, options]);

console.log(nm.match(['a.a', 'a.aa', 'a.b', 'a.c'], '*.a'));
//=> ['a.a', 'a.aa']
```

### [.isMatch](index.js#L167)

Returns true if the specified `string` matches the given glob `pattern`.

**Params**

* `string` **{String}**: String to match
* `pattern` **{String}**: Glob pattern to use for matching.
* `options` **{Object}**: See available [options](#options) for changing how matches are performed
* `returns` **{Boolean}**: Returns true if the string matches the glob pattern.

**Example**

```js
var nm = require('nanomatch');
nm.isMatch(string, pattern[, options]);

console.log(nm.isMatch('a.a', '*.a'));
//=> true
console.log(nm.isMatch('a.b', '*.a'));
//=> false
```

### [.some](index.js#L205)

Returns true if some of the elements in the given `list` match any of the given glob `patterns`.

**Params**

* `list` **{String|Array}**: The string or array of strings to test. Returns as soon as the first match is found.
* `patterns` **{String|Array}**: One or more glob patterns to use for matching.
* `options` **{Object}**: See available [options](#options) for changing how matches are performed
* `returns` **{Boolean}**: Returns true if any patterns match `str`

**Example**

```js
var nm = require('nanomatch');
nm.some(list, patterns[, options]);

console.log(nm.some(['foo.js', 'bar.js'], ['*.js', '!foo.js']));
// true
console.log(nm.some(['foo.js'], ['*.js', '!foo.js']));
// false
```

### [.every](index.js#L243)

Returns true if every element in the given `list` matches at least one of the given glob `patterns`.

**Params**

* `list` **{String|Array}**: The string or array of strings to test.
* `patterns` **{String|Array}**: One or more glob patterns to use for matching.
* `options` **{Object}**: See available [options](#options) for changing how matches are performed
* `returns` **{Boolean}**: Returns true if any patterns match `str`

**Example**

```js
var nm = require('nanomatch');
nm.every(list, patterns[, options]);

console.log(nm.every('foo.js', ['foo.js']));
// true
console.log(nm.every(['foo.js', 'bar.js'], ['*.js']));
// true
console.log(nm.every(['foo.js', 'bar.js'], ['*.js', '!foo.js']));
// false
console.log(nm.every(['foo.js'], ['*.js', '!foo.js']));
// false
```

### [.any](index.js#L277)

Returns true if **any** of the given glob `patterns` match the specified `string`.

**Params**

* `str` **{String|Array}**: The string to test.
* `patterns` **{String|Array}**: One or more glob patterns to use for matching.
* `options` **{Object}**: See available [options](#options) for changing how matches are performed
* `returns` **{Boolean}**: Returns true if any patterns match `str`

**Example**

```js
var nm = require('nanomatch');
nm.any(string, patterns[, options]);

console.log(nm.any('a.a', ['b.*', '*.a']));
//=> true
console.log(nm.any('a.a', 'b.*'));
//=> false
```

### [.all](index.js#L325)

Returns true if **all** of the given `patterns` match the specified string.

**Params**

* `str` **{String|Array}**: The string to test.
* `patterns` **{String|Array}**: One or more glob patterns to use for matching.
* `options` **{Object}**: See available [options](#options) for changing how matches are performed
* `returns` **{Boolean}**: Returns true if any patterns match `str`

**Example**

```js
var nm = require('nanomatch');
nm.all(string, patterns[, options]);

console.log(nm.all('foo.js', ['foo.js']));
// true

console.log(nm.all('foo.js', ['*.js', '!foo.js']));
// false

console.log(nm.all('foo.js', ['*.js', 'foo.js']));
// true

console.log(nm.all('foo.js', ['*.js', 'f*', '*o*', '*o.js']));
// true
```

### [.not](index.js#L359)

Returns a list of strings that _**do not match any**_ of the given `patterns`.

**Params**

* `list` **{Array}**: Array of strings to match.
* `patterns` **{String|Array}**: One or more glob pattern to use for matching.
* `options` **{Object}**: See available [options](#options) for changing how matches are performed
* `returns` **{Array}**: Returns an array of strings that **do not match** the given patterns.

**Example**

```js
var nm = require('nanomatch');
nm.not(list, patterns[, options]);

console.log(nm.not(['a.a', 'b.b', 'c.c'], '*.a'));
//=> ['b.b', 'c.c']
```

### [.contains](index.js#L394)

Returns true if the given `string` contains the given pattern. Similar to [.isMatch](#isMatch) but the pattern can match any part of the string.

**Params**

* `str` **{String}**: The string to match.
* `patterns` **{String|Array}**: Glob pattern to use for matching.
* `options` **{Object}**: See available [options](#options) for changing how matches are performed
* `returns` **{Boolean}**: Returns true if the patter matches any part of `str`.

**Example**

```js
var nm = require('nanomatch');
nm.contains(string, pattern[, options]);

console.log(nm.contains('aa/bb/cc', '*b'));
//=> true
console.log(nm.contains('aa/bb/cc', '*d'));
//=> false
```

### [.matchKeys](index.js#L450)

Filter the keys of the given object with the given `glob` pattern and `options`. Does not attempt to match nested keys. If you need this feature, use [glob-object](https://github.com/jonschlinkert/glob-object) instead.

**Params**

* `object` **{Object}**: The object with keys to filter.
* `patterns` **{String|Array}**: One or more glob patterns to use for matching.
* `options` **{Object}**: See available [options](#options) for changing how matches are performed
* `returns` **{Object}**: Returns an object with only keys that match the given patterns.

**Example**

```js
var nm = require('nanomatch');
nm.matchKeys(object, patterns[, options]);

var obj = { aa: 'a', ab: 'b', ac: 'c' };
console.log(nm.matchKeys(obj, '*b'));
//=> { ab: 'b' }
```

### [.matcher](index.js#L479)

Returns a memoized matcher function from the given glob `pattern` and `options`. The returned function takes a string to match as its only argument and returns true if the string is a match.

**Params**

* `pattern` **{String}**: Glob pattern
* `options` **{Object}**: See available [options](#options) for changing how matches are performed.
* `returns` **{Function}**: Returns a matcher function.

**Example**

```js
var nm = require('nanomatch');
nm.matcher(pattern[, options]);

var isMatch = nm.matcher('*.!(*a)');
console.log(isMatch('a.a'));
//=> false
console.log(isMatch('a.b'));
//=> true
```

### [.capture](index.js#L560)

Returns an array of matches captured by `pattern` in `string, or`null` if the pattern did not match.

**Params**

* `pattern` **{String}**: Glob pattern to use for matching.
* `string` **{String}**: String to match
* `options` **{Object}**: See available [options](#options) for changing how matches are performed
* `returns` **{Boolean}**: Returns an array of captures if the string matches the glob pattern, otherwise `null`.

**Example**

```js
var nm = require('nanomatch');
nm.capture(pattern, string[, options]);

console.log(nm.capture('test/*.js', 'test/foo.js'));
//=> ['foo']
console.log(nm.capture('test/*.js', 'foo/bar.css'));
//=> null
```

### [.makeRe](index.js#L595)

Create a regular expression from the given glob `pattern`.

**Params**

* `pattern` **{String}**: A glob pattern to convert to regex.
* `options` **{Object}**: See available [options](#options) for changing how matches are performed.
* `returns` **{RegExp}**: Returns a regex created from the given pattern.

**Example**

```js
var nm = require('nanomatch');
nm.makeRe(pattern[, options]);

console.log(nm.makeRe('*.js'));
//=> /^(?:(\.[\\\/])?(?!\.)(?=.)[^\/]*?\.js)$/
```

### [.create](index.js#L658)

Parses the given glob `pattern` and returns an object with the compiled `output` and optional source `map`.

**Params**

* `pattern` **{String}**: Glob pattern to parse and compile.
* `options` **{Object}**: Any [options](#options) to change how parsing and compiling is performed.
* `returns` **{Object}**: Returns an object with the parsed AST, compiled string and optional source map.

**Example**

```js
var nm = require('nanomatch');
nm.create(pattern[, options]);

console.log(nm.create('abc/*.js'));
// { options: { source: 'string', sourcemap: true },
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
//   idx: 6 }
```

### [.parse](index.js#L697)

Parse the given `str` with the given `options`.

**Params**

* `str` **{String}**
* `options` **{Object}**
* `returns` **{Object}**: Returns an AST

**Example**

```js
var nm = require('nanomatch');
nm.parse(pattern[, options]);

var ast = nm.parse('a/{b,c}/d');
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

### [.compile](index.js#L745)

Compile the given `ast` or string with the given `options`.

**Params**

* `ast` **{Object|String}**
* `options` **{Object}**
* `returns` **{Object}**: Returns an object that has an `output` property with the compiled string.

**Example**

```js
var nm = require('nanomatch');
nm.compile(ast[, options]);

var ast = nm.parse('a/{b,c}/d');
console.log(nm.compile(ast));
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

### [.clearCache](index.js#L768)

Clear the regex cache.

**Example**

```js
nm.clearCache();
```

## Options

<details>
<summary><strong>basename</strong></summary>

### options.basename

Allow glob patterns without slashes to match a file path based on its basename. Same behavior as [minimatch](https://github.com/isaacs/minimatch) option `matchBase`.

Type: `boolean`

Default: `false`

**Example**

```js
nm(['a/b.js', 'a/c.md'], '*.js');
//=> []

nm(['a/b.js', 'a/c.md'], '*.js', {matchBase: true});
//=> ['a/b.js']
```

</details>

<details>
<summary><strong>bash</strong></summary>

### options.bash

Enabled by default, this option enforces bash-like behavior with stars immediately following a bracket expression. Bash bracket expressions are similar to regex character classes, but unlike regex, a star following a bracket expression **does not repeat the bracketed characters**. Instead, the star is treated the same as an other star.

Type: `boolean`

Default: `true`

**Example**

```js
var files = ['abc', 'ajz'];
console.log(nm(files, '[a-c]*'));
//=> ['abc', 'ajz']

console.log(nm(files, '[a-c]*', {bash: false}));
```

</details>

<details>
<summary><strong>cache</strong></summary>

### options.cache

Disable regex and function memoization.

Type: `boolean`

Default: `undefined`

</details>

<details>
<summary><strong>dot</strong></summary>

### options.dot

Match dotfiles. Same behavior as [minimatch](https://github.com/isaacs/minimatch) option `dot`.

Type: `boolean`

Default: `false`

</details>

<details>
<summary><strong>failglob</strong></summary>

### options.failglob

Similar to the `--failglob` behavior in Bash, throws an error when no matches are found.

Type: `boolean`

Default: `undefined`

</details>

<details>
<summary><strong>ignore</strong></summary>

### options.ignore

String or array of glob patterns to match files to ignore.

Type: `String|Array`

Default: `undefined`

</details>

<details>
<summary><strong>matchBase</strong></summary>

### options.matchBase

Alias for [options.basename](#options-basename).

</details>

<details>
<summary><strong>nocase</strong></summary>

### options.nocase

Use a case-insensitive regex for matching files. Same behavior as [minimatch](https://github.com/isaacs/minimatch).

Type: `boolean`

Default: `undefined`

</details>

<details>
<summary><strong>nodupes</strong></summary>

### options.nodupes

Remove duplicate elements from the result array.

Type: `boolean`

Default: `true` (enabled by default)

**Example**

Example of using the `unescape` and `nodupes` options together:

```js
nm.match(['a/b/c', 'a/b/c'], '**');
//=> ['abc']

nm.match(['a/b/c', 'a/b/c'], '**', {nodupes: false});
//=> ['a/b/c', 'a/b/c']
```

</details>

<details>
<summary><strong>nonegate</strong></summary>

### options.noglobstar

Disable matching with globstars (`**`).

Type: `boolean`

Default: `undefined`

```js
nm(['a/b', 'a/b/c', 'a/b/c/d'], 'a/**');
//=> ['a/b', 'a/b/c', 'a/b/c/d']

nm(['a/b', 'a/b/c', 'a/b/c/d'], 'a/**', {noglobstar: true});
//=> ['a/b']
```

</details>

<details>
<summary><strong>nonegate</strong></summary>

### options.nonegate

Disallow negation (`!`) patterns, and treat leading `!` as a literal character to match.

Type: `boolean`

Default: `undefined`

</details>

<details>
<summary><strong>nonull</strong></summary>

### options.nonull

Alias for [options.nullglob](#options-nullglob).

</details>

<details>
<summary><strong>nullglob</strong></summary>

### options.nullglob

If `true`, when no matches are found the actual (arrayified) glob pattern is returned instead of an empty array. Same behavior as [minimatch](https://github.com/isaacs/minimatch) option `nonull`.

Type: `boolean`

Default: `undefined`

</details>

<details>
<summary><strong><a name="slash">slash</a></strong></summary>

### options.slash

Customize the slash character(s) to use for matching.

Type: `string|function`

Default: `[/\\]` (forward slash and backslash)

</details>

<details>
<summary><strong><a name="star">star</a></strong></summary>

### options.star

Customize the star character(s) to use for matching. It's not recommended that you modify this unless you have advanced knowledge of the compiler and matching rules.

Type: `string|function`

Default: `[^/\\]*?`

</details>

<details>
<summary><strong><a name="snapdragon">snapdragon</a></strong></summary>

### options.snapdragon

Pass your own instance of [snapdragon](https://github.com/jonschlinkert/snapdragon) to customize parsers or compilers.

Type: `object`

Default: `undefined`

</details>

<details>
<summary><strong>snapdragon</strong></summary>

### options.sourcemap

Generate a source map by enabling the `sourcemap` option with the `.parse`, `.compile`, or `.create` methods.

**Examples**

```js
var nm = require('nanomatch');

var res = nm.create('abc/*.js', {sourcemap: true});
console.log(res.map);
// { version: 3,
//   sources: [ 'string' ],
//   names: [],
//   mappings: 'AAAA,GAAG,EAAC,iBAAC,EAAC,EAAE',
//   sourcesContent: [ 'abc/*.js' ] }

var ast = nm.parse('abc/**/*.js');
var res = nm.compile(ast, {sourcemap: true});
console.log(res.map);
// { version: 3,
//   sources: [ 'string' ],
//   names: [],
//   mappings: 'AAAA,GAAG,EAAC,2BAAE,EAAC,iBAAC,EAAC,EAAE',
//   sourcesContent: [ 'abc/**/*.js' ] }
```

</details>

<details>
<summary><strong>unescape</strong></summary>

### options.unescape

Remove backslashes from returned matches.

Type: `boolean`

Default: `undefined`

**Example**

In this example we want to match a literal `*`:

```js
nm.match(['abc', 'a\\*c'], 'a\\*c');
//=> ['a\\*c']

nm.match(['abc', 'a\\*c'], 'a\\*c', {unescape: true});
//=> ['a*c']
```

</details>

<details>
<summary><strong>unixify</strong></summary>

### options.unixify

Convert path separators on returned files to posix/unix-style forward slashes.

Type: `boolean`

Default: `true`

**Example**

```js
nm.match(['a\\b\\c'], 'a/**');
//=> ['a/b/c']

nm.match(['a\\b\\c'], {unixify: false});
//=> ['a\\b\\c']
```

</details>

## Features

Nanomatch has full support for standard Bash glob features, including the following "metacharacters": `*`, `**`, `?` and `[...]`.

Here are some examples of how they work:

| **Pattern** | **Description** | 
| --- | --- |
| `*` | Matches any string except for `/`, leading `.`, or `/.` inside a path |
| `**` | Matches any string including `/`, but not a leading `.` or `/.` inside a path. More than two stars (e.g. `***` is treated the same as one star, and `**` loses its special meaning | when it's not the only thing in a path segment, per Bash specifications) |
| `foo*` | Matches any string beginning with `foo` |
| `*bar*` | Matches any string containing `bar` (beginning, middle or end) |
| `*.min.js` | Matches any string ending with `.min.js` |
| `[abc]*.js` | Matches any string beginning with `a`, `b`, or `c` and ending with `.js` |
| `abc?` | Matches `abcd` or `abcz` but not `abcde` |

The exceptions noted for `*` apply to all patterns that contain a `*`.

**Not supported**

The following extended-globbing features are not supported:

* [brace expansion](https://github.com/jonschlinkert/braces) (e.g. `{a,b,c}`)
* [extglobs](https://github.com/jonschlinkert/extglob) (e.g. `@(a|!(c|d))`)
* [POSIX brackets](https://github.com/jonschlinkert/expand-brackets) (e.g. `[[:alpha:][:digit:]]`)

If you need any of these features consider using [micromatch](https://github.com/micromatch/micromatch) instead.

## Bash expansion libs

Nanomatch is part of a suite of libraries aimed at bringing the power and expressiveness of [Bash's](https://www.gnu.org/software/bash/) matching and expansion capabilities to JavaScript, _and - as you can see by the [benchmarks](#benchmarks) - without sacrificing speed_.

| **Related library** | **Matching Type** | **Example** | **Description** | 
| --- | --- | --- | --- |
| `nanomatch` (you are here) | Wildcards | `*` | [Filename expansion](https://www.gnu.org/software/bash/manual/html_node/Filename-Expansion.html#Filename-Expansion), also referred to as globbing and pathname expansion, allows the use of [wildcards](#features) for matching. |
| [expand-tilde](https://github.com/jonschlinkert/expand-tilde) | Tildes | `~` | [Tilde expansion](https://www.gnu.org/software/bash/manual/html_node/Tilde-Expansion.html#Tilde-Expansion) converts the leading tilde in a file path to the user home directory. |
| [braces](https://github.com/jonschlinkert/braces) | Braces | `{a,b,c}` | [Brace expansion](https://www.gnu.org/software/bash/manual/html_node/Brace-Expansion.html) |
| [expand-brackets](https://github.com/jonschlinkert/expand-brackets) | Brackets | `[[:alpha:]]` | [POSIX character classes](https://www.gnu.org/software/grep/manual/html_node/Character-Classes-and-Bracket-Expressions.html) (also referred to as POSIX brackets, or POSIX character classes) |
| [extglob](https://github.com/jonschlinkert/extglob) | Parens | `!(a\ | b)` | [Extglobs](https://www.gnu.org/software/bash/manual/html_node/Pattern-Matching.html#Pattern-Matching) |
| [micromatch](https://github.com/micromatch/micromatch) | All | all | Micromatch is built on top of the other libraries. |

There are many resources available on the web if you want to dive deeper into how these features work in Bash.

## Benchmarks

### Running benchmarks

Install dev dependencies:

```bash
npm i -d && node benchmark
```

### Nanomatch vs. Minimatch vs. Multimatch

```bash
# globstar-basic (182 bytes)
  minimatch x 69,512 ops/sec ±1.92% (88 runs sampled)
  multimatch x 63,376 ops/sec ±1.41% (89 runs sampled)
  nanomatch x 432,451 ops/sec ±0.92% (88 runs sampled)

  fastest is nanomatch (by 651% avg)

# large-list-globstar (485686 bytes)
  minimatch x 34.02 ops/sec ±1.42% (59 runs sampled)
  multimatch x 33.58 ops/sec ±1.97% (58 runs sampled)
  nanomatch x 483 ops/sec ±1.06% (86 runs sampled)

  fastest is nanomatch (by 1429% avg)

# long-list-globstar (194085 bytes)
  minimatch x 383 ops/sec ±0.74% (90 runs sampled)
  multimatch x 378 ops/sec ±0.59% (89 runs sampled)
  nanomatch x 990 ops/sec ±1.14% (85 runs sampled)

  fastest is nanomatch (by 260% avg)

# negation-basic (132 bytes)
  minimatch x 242,145 ops/sec ±1.17% (89 runs sampled)
  multimatch x 76,403 ops/sec ±0.78% (92 runs sampled)
  nanomatch x 537,253 ops/sec ±1.44% (86 runs sampled)

  fastest is nanomatch (by 337% avg)

# not-glob-basic (93 bytes)
  minimatch x 252,402 ops/sec ±1.33% (89 runs sampled)
  multimatch x 209,954 ops/sec ±1.30% (90 runs sampled)
  nanomatch x 1,716,468 ops/sec ±1.13% (86 runs sampled)

  fastest is nanomatch (by 742% avg)

# star-basic (93 bytes)
  minimatch x 182,780 ops/sec ±1.41% (91 runs sampled)
  multimatch x 153,210 ops/sec ±0.72% (89 runs sampled)
  nanomatch x 599,621 ops/sec ±1.22% (90 runs sampled)

  fastest is nanomatch (by 357% avg)

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

* [extglob](https://www.npmjs.com/package/extglob): Extended glob support for JavaScript. Adds (almost) the expressive power of regular expressions to glob… [more](https://github.com/micromatch/extglob) | [homepage](https://github.com/micromatch/extglob "Extended glob support for JavaScript. Adds (almost) the expressive power of regular expressions to glob patterns.")
* [is-extglob](https://www.npmjs.com/package/is-extglob): Returns true if a string has an extglob. | [homepage](https://github.com/jonschlinkert/is-extglob "Returns true if a string has an extglob.")
* [is-glob](https://www.npmjs.com/package/is-glob): Returns `true` if the given string looks like a glob pattern or an extglob pattern… [more](https://github.com/jonschlinkert/is-glob) | [homepage](https://github.com/jonschlinkert/is-glob "Returns `true` if the given string looks like a glob pattern or an extglob pattern. This makes it easy to create code that only uses external modules like node-glob when necessary, resulting in much faster code execution and initialization time, and a bet")
* [micromatch](https://www.npmjs.com/package/micromatch): Glob matching for javascript/node.js. A drop-in replacement and faster alternative to minimatch and multimatch. | [homepage](https://github.com/micromatch/micromatch "Glob matching for javascript/node.js. A drop-in replacement and faster alternative to minimatch and multimatch.")

### Contributors

| **Commits** | **Contributor** | 
| --- | --- |
| 164 | [jonschlinkert](https://github.com/jonschlinkert) |
| 1 | [devongovett](https://github.com/devongovett) |

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