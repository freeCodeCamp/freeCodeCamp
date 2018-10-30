# extglob [![NPM version](https://img.shields.io/npm/v/extglob.svg?style=flat)](https://www.npmjs.com/package/extglob) [![NPM monthly downloads](https://img.shields.io/npm/dm/extglob.svg?style=flat)](https://npmjs.org/package/extglob) [![NPM total downloads](https://img.shields.io/npm/dt/extglob.svg?style=flat)](https://npmjs.org/package/extglob) [![Linux Build Status](https://img.shields.io/travis/micromatch/extglob.svg?style=flat&label=Travis)](https://travis-ci.org/micromatch/extglob) [![Windows Build Status](https://img.shields.io/appveyor/ci/micromatch/extglob.svg?style=flat&label=AppVeyor)](https://ci.appveyor.com/project/micromatch/extglob)

> Extended glob support for JavaScript. Adds (almost) the expressive power of regular expressions to glob patterns.

Please consider following this project's author, [Jon Schlinkert](https://github.com/jonschlinkert), and consider starring the project to show your :heart: and support.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save extglob
```

* Convert an extglob string to a regex-compatible string.
* More complete (and correct) support than [minimatch](https://github.com/isaacs/minimatch) (minimatch fails a large percentage of the extglob tests)
* Handles [negation patterns](#extglob-patterns)
* Handles [nested patterns](#extglob-patterns)
* Organized code base, easy to maintain and make changes when edge cases arise
* As you can see by the [benchmarks](#benchmarks), extglob doesn't pay with speed for it's completeness, accuracy and quality.

**Heads up!**: This library only supports extglobs, to handle full glob patterns and other extended globbing features use [micromatch](https://github.com/jonschlinkert/micromatch) instead.

## Usage

The main export is a function that takes a string and options, and returns an object with the parsed AST and the compiled `.output`, which is a regex-compatible string that can be used for matching.

```js
var extglob = require('extglob');
console.log(extglob('!(xyz)*.js'));
```

## Extglob cheatsheet

Extended globbing patterns can be defined as follows (as described by the [bash man page](https://www.gnu.org/software/bash/manual/html_node/Pattern-Matching.html)):

| **pattern** | **regex equivalent** | **description** | 
| --- | --- | --- |
| `?(pattern-list)` | `(...|...)?` | Matches zero or one occurrence of the given pattern(s) |
| `*(pattern-list)` | `(...|...)*` | Matches zero or more occurrences of the given pattern(s) |
| `+(pattern-list)` | `(...|...)+` | Matches one or more occurrences of the given pattern(s) |
| `@(pattern-list)` | `(...|...)` <sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup> | Matches one of the given pattern(s) |
| `!(pattern-list)` | N/A | Matches anything except one of the given pattern(s) |

## API

### [extglob](index.js#L36)

Convert the given `extglob` pattern into a regex-compatible string. Returns an object with the compiled result and the parsed AST.

**Params**

* `pattern` **{String}**
* `options` **{Object}**
* `returns` **{String}**

**Example**

```js
var extglob = require('extglob');
console.log(extglob('*.!(*a)'));
//=> '(?!\\.)[^/]*?\\.(?!(?!\\.)[^/]*?a\\b).*?'
```

### [.match](index.js#L56)

Takes an array of strings and an extglob pattern and returns a new array that contains only the strings that match the pattern.

**Params**

* `list` **{Array}**: Array of strings to match
* `pattern` **{String}**: Extglob pattern
* `options` **{Object}**
* `returns` **{Array}**: Returns an array of matches

**Example**

```js
var extglob = require('extglob');
console.log(extglob.match(['a.a', 'a.b', 'a.c'], '*.!(*a)'));
//=> ['a.b', 'a.c']
```

### [.isMatch](index.js#L111)

Returns true if the specified `string` matches the given extglob `pattern`.

**Params**

* `string` **{String}**: String to match
* `pattern` **{String}**: Extglob pattern
* `options` **{String}**
* `returns` **{Boolean}**

**Example**

```js
var extglob = require('extglob');

console.log(extglob.isMatch('a.a', '*.!(*a)'));
//=> false
console.log(extglob.isMatch('a.b', '*.!(*a)'));
//=> true
```

### [.contains](index.js#L150)

Returns true if the given `string` contains the given pattern. Similar to `.isMatch` but the pattern can match any part of the string.

**Params**

* `str` **{String}**: The string to match.
* `pattern` **{String}**: Glob pattern to use for matching.
* `options` **{Object}**
* `returns` **{Boolean}**: Returns true if the patter matches any part of `str`.

**Example**

```js
var extglob = require('extglob');
console.log(extglob.contains('aa/bb/cc', '*b'));
//=> true
console.log(extglob.contains('aa/bb/cc', '*d'));
//=> false
```

### [.matcher](index.js#L184)

Takes an extglob pattern and returns a matcher function. The returned function takes the string to match as its only argument.

**Params**

* `pattern` **{String}**: Extglob pattern
* `options` **{String}**
* `returns` **{Boolean}**

**Example**

```js
var extglob = require('extglob');
var isMatch = extglob.matcher('*.!(*a)');

console.log(isMatch('a.a'));
//=> false
console.log(isMatch('a.b'));
//=> true
```

### [.create](index.js#L214)

Convert the given `extglob` pattern into a regex-compatible string. Returns an object with the compiled result and the parsed AST.

**Params**

* `str` **{String}**
* `options` **{Object}**
* `returns` **{String}**

**Example**

```js
var extglob = require('extglob');
console.log(extglob.create('*.!(*a)').output);
//=> '(?!\\.)[^/]*?\\.(?!(?!\\.)[^/]*?a\\b).*?'
```

### [.capture](index.js#L248)

Returns an array of matches captured by `pattern` in `string`, or `null` if the pattern did not match.

**Params**

* `pattern` **{String}**: Glob pattern to use for matching.
* `string` **{String}**: String to match
* `options` **{Object}**: See available [options](#options) for changing how matches are performed
* `returns` **{Boolean}**: Returns an array of captures if the string matches the glob pattern, otherwise `null`.

**Example**

```js
var extglob = require('extglob');
extglob.capture(pattern, string[, options]);

console.log(extglob.capture('test/*.js', 'test/foo.js'));
//=> ['foo']
console.log(extglob.capture('test/*.js', 'foo/bar.css'));
//=> null
```

### [.makeRe](index.js#L281)

Create a regular expression from the given `pattern` and `options`.

**Params**

* `pattern` **{String}**: The pattern to convert to regex.
* `options` **{Object}**
* `returns` **{RegExp}**

**Example**

```js
var extglob = require('extglob');
var re = extglob.makeRe('*.!(*a)');
console.log(re);
//=> /^[^\/]*?\.(?![^\/]*?a)[^\/]*?$/
```

## Options

Available options are based on the options from Bash (and the option names used in bash).

### options.nullglob

**Type**: `boolean`

**Default**: `undefined`

When enabled, the pattern itself will be returned when no matches are found.

### options.nonull

Alias for [options.nullglob](#optionsnullglob), included for parity with minimatch.

### options.cache

**Type**: `boolean`

**Default**: `undefined`

Functions are memoized based on the given glob patterns and options. Disable memoization by setting `options.cache` to false.

### options.failglob

**Type**: `boolean`

**Default**: `undefined`

Throw an error is no matches are found.

## Benchmarks

Last run on December 21, 2017

```sh
# negation-nested (49 bytes)
  extglob x 2,228,255 ops/sec ±0.98% (89 runs sampled)
  minimatch x 207,875 ops/sec ±0.61% (91 runs sampled)

  fastest is extglob (by 1072% avg)

# negation-simple (43 bytes)
  extglob x 2,205,668 ops/sec ±1.00% (91 runs sampled)
  minimatch x 311,923 ops/sec ±1.25% (91 runs sampled)

  fastest is extglob (by 707% avg)

# range-false (57 bytes)
  extglob x 2,263,877 ops/sec ±0.40% (94 runs sampled)
  minimatch x 271,372 ops/sec ±1.02% (91 runs sampled)

  fastest is extglob (by 834% avg)

# range-true (56 bytes)
  extglob x 2,161,891 ops/sec ±0.41% (92 runs sampled)
  minimatch x 268,265 ops/sec ±1.17% (91 runs sampled)

  fastest is extglob (by 806% avg)

# star-simple (46 bytes)
  extglob x 2,211,081 ops/sec ±0.49% (92 runs sampled)
  minimatch x 343,319 ops/sec ±0.59% (91 runs sampled)

  fastest is extglob (by 644% avg)

```

## Differences from Bash

This library has complete parity with Bash 4.3 with only a couple of minor differences.

* In some cases Bash returns true if the given string "contains" the pattern, whereas this library returns true if the string is an exact match for the pattern. You can relax this by setting `options.contains` to true.
* This library is more accurate than Bash and thus does not fail some of the tests that Bash 4.3 still lists as failing in their unit tests

## About

<details>
<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

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
* [expand-range](https://www.npmjs.com/package/expand-range): Fast, bash-like range expansion. Expand a range of numbers or letters, uppercase or lowercase. Used… [more](https://github.com/jonschlinkert/expand-range) | [homepage](https://github.com/jonschlinkert/expand-range "Fast, bash-like range expansion. Expand a range of numbers or letters, uppercase or lowercase. Used by [micromatch].")
* [fill-range](https://www.npmjs.com/package/fill-range): Fill in a range of numbers or letters, optionally passing an increment or `step` to… [more](https://github.com/jonschlinkert/fill-range) | [homepage](https://github.com/jonschlinkert/fill-range "Fill in a range of numbers or letters, optionally passing an increment or `step` to use, or create a regex-compatible range with `options.toRegex`")
* [micromatch](https://www.npmjs.com/package/micromatch): Glob matching for javascript/node.js. A drop-in replacement and faster alternative to minimatch and multimatch. | [homepage](https://github.com/micromatch/micromatch "Glob matching for javascript/node.js. A drop-in replacement and faster alternative to minimatch and multimatch.")

### Contributors

| **Commits** | **Contributor** | 
| --- | --- |
| 49 | [jonschlinkert](https://github.com/jonschlinkert) |
| 2 | [isiahmeadows](https://github.com/isiahmeadows) |
| 1 | [doowb](https://github.com/doowb) |
| 1 | [devongovett](https://github.com/devongovett) |
| 1 | [mjbvz](https://github.com/mjbvz) |
| 1 | [shinnn](https://github.com/shinnn) |

### Author

**Jon Schlinkert**

* [linkedin/in/jonschlinkert](https://linkedin.com/in/jonschlinkert)
* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2017, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on December 21, 2017._

<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1"  class="footnote-item">`@` isn "'t a RegEx character." <a href="#fnref1" class="footnote-backref">↩</a>

</li>
</ol>
</section>