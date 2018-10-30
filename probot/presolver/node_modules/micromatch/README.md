# micromatch [![NPM version](https://img.shields.io/npm/v/micromatch.svg?style=flat)](https://www.npmjs.com/package/micromatch) [![NPM downloads](https://img.shields.io/npm/dm/micromatch.svg?style=flat)](https://npmjs.org/package/micromatch) [![Build Status](https://img.shields.io/travis/jonschlinkert/micromatch.svg?style=flat)](https://travis-ci.org/jonschlinkert/micromatch)

> Glob matching for javascript/node.js. A drop-in replacement and faster alternative to minimatch and multimatch.

Micromatch supports all of the same matching features as [minimatch](https://github.com/isaacs/minimatch) and [multimatch](https://github.com/sindresorhus/multimatch).

* [mm()](#usage) is the same as [multimatch()](https://github.com/sindresorhus/multimatch)
* [mm.match()](#match) is the same as [minimatch.match()](https://github.com/isaacs/minimatch)
* use [mm.isMatch()](#ismatch) instead of [minimatch()](https://github.com/isaacs/minimatch)

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save micromatch
```

## Start matching!

```js
var mm = require('micromatch');
console.log(mm(['']))
```

***

### Features

* [Drop-in replacement](#switch-from-minimatch) for [minimatch](https://github.com/isaacs/minimatch) and [multimatch](https://github.com/sindresorhus/multimatch)
* Built-in support for multiple glob patterns, like `['foo/*.js', '!bar.js']`
* [Brace Expansion](https://github.com/jonschlinkert/braces) (`foo/bar-{1..5}.md`, `one/{two,three}/four.md`)
* Typical glob patterns, like `**/*`, `a/b/*.js`, or `['foo/*.js', '!bar.js']`
* Methods like `.isMatch()`, `.contains()` and `.any()`

**Extended globbing features:**

* Logical `OR` (`foo/bar/(abc|xyz).js`)
* Regex character classes (`foo/bar/baz-[1-5].js`)
* POSIX [bracket expressions](https://github.com/jonschlinkert/expand-brackets) (`**/[[:alpha:][:digit:]]/`)
* [extglobs](https://github.com/jonschlinkert/extglob) (`**/+(x|y)`, `!(a|b)`, etc).

You can combine these to create whatever matching patterns you need.

**Example**

```js
// double-negation!
mm(['fa', 'fb', 'f', 'fo'], '!(f!(o))');
//=> ['fo']
```

## Why switch to micromatch?

* Native support for multiple glob patterns, no need for wrappers like [multimatch](https://github.com/sindresorhus/multimatch)
* [10-55x faster](#benchmarks) and more performant than [minimatch](https://github.com/isaacs/minimatch) and [multimatch](https://github.com/sindresorhus/multimatch). This is achieved through a combination of caching and regex optimization strategies, a fundamentally different approach than minimatch.
* More extensive support for the Bash 4.3 specification
* More complete extglob support
* Extensive [unit tests](./test) (approx. 1,300 tests). Minimatch fails many of the tests.

### Switch from minimatch

Use `mm.isMatch()` instead of `minimatch()`:

```js
mm.isMatch('foo', 'b*');
//=> false
```

Use `mm.match()` instead of `minimatch.match()`:

```js
mm.match(['foo', 'bar'], 'b*');
//=> 'bar'
```

### Switch from multimatch

Same signature:

```js
mm(['foo', 'bar', 'baz'], ['f*', '*z']);
//=> ['foo', 'baz']
```

***

## Usage

Add micromatch to your node.js project:

```js
var mm = require('micromatch');
```

**Signature**

```js
mm(array_of_strings, glob_patterns[, options]);
```

**Example**

```js
mm(['foo', 'bar', 'baz'], 'b*');
//=> ['bar', 'baz']
```

### Usage examples

**Brace expansion**

Match files with `.js` or `.txt` extensions.

```js
mm(['a.js', 'b.md', 'c.txt'], '*.{js,txt}');
//=> ['a.js', 'c.txt']
```

**Extglobs**

Match anything except for files with the `.md` extension.

```js
mm(files, '**/*.!(md)');

//=> ['a.js', 'c.txt']
```

**Multiple patterns**

Match using an array of patterns.

```js
mm(['a.md', 'b.js', 'c.txt', 'd.json'], ['*.md', '*.txt']);
//=> ['a.md', 'c.txt']
```

**Negation patterns:**

Behavior is designed to be what users would expect, based on conventions that are already well-established.

* [minimatch](https://github.com/isaacs/minimatch) behavior is used when the pattern is a string, so patterns are **inclusive by default**.
* [multimatch](https://github.com/sindresorhus/multimatch) behavior is used when an array of patterns is passed, so patterns are **exclusive by default**.

```js
mm(['a.js', 'b.md', 'c.txt'], '!*.{js,txt}');
//=> ['b.md']

mm(['a.md', 'b.js', 'c.txt', 'd.json'], ['*.*', '!*.{js,txt}']);
//=> ['a.md', 'd.json']
```

***

## API methods

```js
var mm = require('micromatch');
```

### .match

```js
mm.match(array, globString);
```

Return an array of files that match the given glob pattern. Useful if you only need to use a single glob pattern.

**Example**

```js
mm.match(['ab', 'a/b', 'bb', 'b/c'], '?b');
//=> ['ab', 'bb']

mm.match(['ab', 'a/b', 'bb', 'b/c'], '*/b');
//=> ['a/b']
```

### .isMatch

```js
mm.isMatch(filepath, globString);
```

Returns true if a file path matches the given glob pattern.

**Example**

```js
mm.isMatch('.verb.md', '*.md');
//=> false

mm.isMatch('.verb.md', '*.md', {dot: true});
//=> true
```

### .contains

Returns true if any part of a file path matches the given glob pattern. Think of this is "has path" versus "is path".

**Example**

`.isMatch()` would return false for both of the following:

```js
mm.contains('a/b/c', 'a/b');
//=> true

mm.contains('a/b/c', 'a/*');
//=> true
```

### .matcher

Returns a function for matching using the supplied pattern. e.g. create your own "matcher". The advantage of this method is that the pattern can be compiled outside of a loop.

**Pattern**

Can be any of the following:

* `glob/string`
* `regex`
* `function`

**Example**

```js
var isMatch = mm.matcher('*.md');
var files = [];

['a.md', 'b.txt', 'c.md'].forEach(function(fp) {
  if (isMatch(fp)) {
    files.push(fp);
  }
});
```

### .filter

Returns a function that can be passed to `Array#filter()`.

**Params**

* `patterns` **{String|Array}**:

**Examples**

Single glob:

```js
var fn = mm.filter('*.md');
['a.js', 'b.txt', 'c.md'].filter(fn);
//=> ['c.md']

var fn = mm.filter('[a-c]');
['a', 'b', 'c', 'd', 'e'].filter(fn);
//=> ['a', 'b', 'c']
```

Array of glob patterns:

```js
var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

var fn = mm.filter(['{1..10}', '![7-9]', '!{3..4}']);
arr.filter(fn);
//=> [1, 2, 5, 6, 10]
```

_(Internally this function generates the matching function by using the [matcher](#matcher) method. You can use the [matcher](#matcher) method directly to create your own filter function)_

### .any

Returns true if a file path matches any of the given patterns.

```js
mm.any(filepath, patterns, options);
```

**Params**

* filepath `{String}`: The file path to test.
* patterns `{String|Array}`: One or more glob patterns
* options: `{Object}`: options to pass to the `.matcher()` method.

**Example**

```js
mm.any('abc', ['!*z']);
//=> true
mm.any('abc', ['a*', 'z*']);
//=> true
mm.any('abc', 'a*');
//=> true
mm.any('abc', ['z*']);
//=> false
```

### .expand

Returns an object with a regex-compatible string and tokens.

```js
mm.expand('*.js');

// when `track` is enabled (for debugging), the `history` array is used
// to record each mutation to the glob pattern as it's converted to regex
{ options: { track: false, dot: undefined, makeRe: true, negated: false },
  pattern: '(.*\\/|^)bar\\/(?:(?!(?:^|\\/)\\.).)*?',
  history: [],
  tokens:
   { path:
      { whole: '**/bar/**',
        dirname: '**/bar/',
        filename: '**',
        basename: '**',
        extname: '',
        ext: '' },
     is:
      { glob: true,
        negated: false,
        globstar: true,
        dotfile: false,
        dotdir: false },
     match: {},
     original: '**/bar/**',
     pattern: '**/bar/**',
     base: '' } }
```

### .makeRe

Create a regular expression for matching file paths based on the given pattern:

```js
mm.makeRe('*.js');
//=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
```

## Options

### options.unixify

Normalize slashes in file paths and glob patterns to forward slashes.

Type: `{Boolean}`

Default: `undefined` on non-windows, `true` on windows.

### options.dot

Match dotfiles. Same behavior as [minimatch](https://github.com/isaacs/minimatch).

Type: `{Boolean}`

Default: `false`

### options.unescape

Unescape slashes in glob patterns. Use cautiously, especially on windows.

Type: `{Boolean}`

Default: `undefined`

**Example**

```js
mm.isMatch('abc', '\\a\\b\\c', {unescape: true});
//=> true
```

### options.nodupes

Remove duplicate elements from the result array.

Type: `{Boolean}`

Default: `undefined`

**Example**

Example of using the `unescape` and `nodupes` options together:

```js
mm.match(['abc', '\\a\\b\\c'], '\\a\\b\\c', {unescape: true});
//=> ['abc', 'abc']

mm.match(['abc', '\\a\\b\\c'], '\\a\\b\\c', {unescape: true, nodupes: true});
//=> ['abc']
```

### options.matchBase

Allow glob patterns without slashes to match a file path based on its basename. . Same behavior as [minimatch](https://github.com/isaacs/minimatch).

Type: `{Boolean}`

Default: `false`

**Example**

```js
mm(['a/b.js', 'a/c.md'], '*.js');
//=> []

mm(['a/b.js', 'a/c.md'], '*.js', {matchBase: true});
//=> ['a/b.js']
```

### options.nobraces

Don't expand braces in glob patterns. Same behavior as [minimatch](https://github.com/isaacs/minimatch) `nobrace`.

Type: `{Boolean}`

Default: `undefined`

See [braces](https://github.com/jonschlinkert/braces) for more information about extended brace expansion.

### options.nobrackets

Don't expand POSIX bracket expressions.

Type: `{Boolean}`

Default: `undefined`

See [expand-brackets](https://github.com/jonschlinkert/expand-brackets) for more information about extended bracket expressions.

### options.noextglob

Don't expand extended globs.

Type: `{Boolean}`

Default: `undefined`

See [extglob](https://github.com/jonschlinkert/extglob) for more information about extended globs.

### options.nocase

Use a case-insensitive regex for matching files. Same behavior as [minimatch](https://github.com/isaacs/minimatch).

Type: `{Boolean}`

Default: `false`

### options.nonegate

Disallow negation (`!`) patterns.

Type: `{Boolean}`

Default: `false`

### options.nonull

If `true`, when no matches are found the actual (array-ified) glob pattern is returned instead of an empty array. Same behavior as [minimatch](https://github.com/isaacs/minimatch).

Type: `{Boolean}`

Default: `false`

### options.cache

Cache the platform (e.g. `win32`) to prevent this from being looked up for every filepath.

Type: `{Boolean}`

Default: `true`

***

## Other features

Micromatch also supports the following.

### Extended globbing

#### extglobs

Extended globbing, as described by the bash man page:

| **pattern** | **regex equivalent** | **description** | 
| --- | --- | --- |
| `?(pattern-list)` | `(... | ...)?` | Matches zero or one occurrence of the given patterns |
| `*(pattern-list)` | `(... | ...)*` | Matches zero or more occurrences of the given patterns |
| `+(pattern-list)` | `(... | ...)+` | Matches one or more occurrences of the given patterns |
| `@(pattern-list)` | `(... | ...)` <sup>*</sup> | Matches one of the given patterns |
| `!(pattern-list)` | N/A | Matches anything except one of the given patterns |

<sup><strong>*</strong></sup> `@` isn't a RegEx character.

Powered by [extglob](https://github.com/jonschlinkert/extglob). Visit that library for the full range of options or to report extglob related issues.

See [extglob](https://github.com/jonschlinkert/extglob) for more information about extended globs.

#### brace expansion

In simple cases, brace expansion appears to work the same way as the logical `OR` operator. For example, `(a|b)` will achieve the same result as `{a,b}`.

Here are some powerful features unique to brace expansion (versus character classes):

* range expansion: `a{1..3}b/*.js` expands to: `['a1b/*.js', 'a2b/*.js', 'a3b/*.js']`
* nesting: `a{c,{d,e}}b/*.js` expands to: `['acb/*.js', 'adb/*.js', 'aeb/*.js']`

Visit [braces](https://github.com/jonschlinkert/braces) to ask questions and create an issue related to brace-expansion, or to see the full range of features and options related to brace expansion.

#### regex character classes

With the exception of brace expansion (`{a,b}`, `{1..5}`, etc), most of the special characters convert directly to regex, so you can expect them to follow the same rules and produce the same results as regex.

For example, given the list: `['a.js', 'b.js', 'c.js', 'd.js', 'E.js']`:

* `[ac].js`: matches both `a` and `c`, returning `['a.js', 'c.js']`
* `[b-d].js`: matches from `b` to `d`, returning `['b.js', 'c.js', 'd.js']`
* `[b-d].js`: matches from `b` to `d`, returning `['b.js', 'c.js', 'd.js']`
* `a/[A-Z].js`: matches and uppercase letter, returning `['a/E.md']`

Learn about [regex character classes](http://www.regular-expressions.info/charclass.html).

#### regex groups

Given `['a.js', 'b.js', 'c.js', 'd.js', 'E.js']`:

* `(a|c).js`: would match either `a` or `c`, returning `['a.js', 'c.js']`
* `(b|d).js`: would match either `b` or `d`, returning `['b.js', 'd.js']`
* `(b|[A-Z]).js`: would match either `b` or an uppercase letter, returning `['b.js', 'E.js']`

As with regex, parenthese can be nested, so patterns like `((a|b)|c)/b` will work. But it might be easier to achieve your goal using brace expansion.

#### POSIX bracket expressions

**Example**

```js
mm.isMatch('a1', '[[:alpha:][:digit:]]');
//=> true
```

See [expand-brackets](https://github.com/jonschlinkert/expand-brackets) for more information about extended bracket expressions.

***

## Notes

Whenever possible parsing behavior for patterns is based on globbing specifications in Bash 4.3. Patterns that aren't described by Bash follow wildmatch spec (used by git).

## Benchmarks

Run the [benchmarks](./benchmark):

```bash
node benchmark
```

As of July 15, 2016:

```bash
#1: basename-braces
  micromatch x 26,420 ops/sec ±0.89% (91 runs sampled)
  minimatch x 3,507 ops/sec ±0.64% (97 runs sampled)

#2: basename
  micromatch x 25,315 ops/sec ±0.82% (93 runs sampled)
  minimatch x 4,398 ops/sec ±0.86% (94 runs sampled)

#3: braces-no-glob
  micromatch x 341,254 ops/sec ±0.78% (93 runs sampled)
  minimatch x 30,197 ops/sec ±1.12% (91 runs sampled)

#4: braces
  micromatch x 54,649 ops/sec ±0.74% (94 runs sampled)
  minimatch x 3,095 ops/sec ±0.82% (95 runs sampled)

#5: immediate
  micromatch x 16,719 ops/sec ±0.79% (95 runs sampled)
  minimatch x 4,348 ops/sec ±0.86% (96 runs sampled)

#6: large
  micromatch x 721 ops/sec ±0.77% (94 runs sampled)
  minimatch x 17.73 ops/sec ±1.08% (50 runs sampled)

#7: long
  micromatch x 5,051 ops/sec ±0.87% (97 runs sampled)
  minimatch x 628 ops/sec ±0.83% (94 runs sampled)

#8: mid
  micromatch x 51,280 ops/sec ±0.80% (95 runs sampled)
  minimatch x 1,923 ops/sec ±0.84% (95 runs sampled)

#9: multi-patterns
  micromatch x 22,440 ops/sec ±0.97% (94 runs sampled)
  minimatch x 2,481 ops/sec ±1.10% (94 runs sampled)

#10: no-glob
  micromatch x 722,823 ops/sec ±1.30% (87 runs sampled)
  minimatch x 52,967 ops/sec ±1.09% (94 runs sampled)

#11: range
  micromatch x 243,471 ops/sec ±0.79% (94 runs sampled)
  minimatch x 11,736 ops/sec ±0.82% (96 runs sampled)

#12: shallow
  micromatch x 190,874 ops/sec ±0.98% (95 runs sampled)
  minimatch x 21,699 ops/sec ±0.81% (97 runs sampled)

#13: short
  micromatch x 496,393 ops/sec ±3.86% (90 runs sampled)
  minimatch x 53,765 ops/sec ±0.75% (95 runs sampled)
```

## Tests

### Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

### Coverage

As of July 15, 2016:

```sh
Statements : 100% (441/441)
Branches   : 100% (270/270)
Functions  : 100% (54/54)
Lines      : 100% (429/429)
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

Please be sure to run the benchmarks before/after any code changes to judge the impact before you do a PR. thanks!

## Related

* [braces](https://www.npmjs.com/package/braces): Fastest brace expansion for node.js, with the most complete support for the Bash 4.3 braces… [more](https://github.com/jonschlinkert/braces) | [homepage](https://github.com/jonschlinkert/braces "Fastest brace expansion for node.js, with the most complete support for the Bash 4.3 braces specification.")
* [expand-brackets](https://www.npmjs.com/package/expand-brackets): Expand POSIX bracket expressions (character classes) in glob patterns. | [homepage](https://github.com/jonschlinkert/expand-brackets "Expand POSIX bracket expressions (character classes) in glob patterns.")
* [expand-range](https://www.npmjs.com/package/expand-range): Fast, bash-like range expansion. Expand a range of numbers or letters, uppercase or lowercase. See… [more](https://github.com/jonschlinkert/expand-range) | [homepage](https://github.com/jonschlinkert/expand-range "Fast, bash-like range expansion. Expand a range of numbers or letters, uppercase or lowercase. See the benchmarks. Used by micromatch.")
* [extglob](https://www.npmjs.com/package/extglob): Convert extended globs to regex-compatible strings. Add (almost) the expressive power of regular expressions to… [more](https://github.com/jonschlinkert/extglob) | [homepage](https://github.com/jonschlinkert/extglob "Convert extended globs to regex-compatible strings. Add (almost) the expressive power of regular expressions to glob patterns.")
* [fill-range](https://www.npmjs.com/package/fill-range): Fill in a range of numbers or letters, optionally passing an increment or multiplier to… [more](https://github.com/jonschlinkert/fill-range) | [homepage](https://github.com/jonschlinkert/fill-range "Fill in a range of numbers or letters, optionally passing an increment or multiplier to use.")
* [gulp-micromatch](https://www.npmjs.com/package/gulp-micromatch): Filter vinyl files with glob patterns, string, regexp, array, object or matcher function. micromatch stream. | [homepage](https://github.com/tunnckocore/gulp-micromatch#readme "Filter vinyl files with glob patterns, string, regexp, array, object or matcher function. micromatch stream.")
* [is-glob](https://www.npmjs.com/package/is-glob): Returns `true` if the given string looks like a glob pattern or an extglob pattern… [more](https://github.com/jonschlinkert/is-glob) | [homepage](https://github.com/jonschlinkert/is-glob "Returns `true` if the given string looks like a glob pattern or an extglob pattern. This makes it easy to create code that only uses external modules like node-glob when necessary, resulting in much faster code execution and initialization time, and a bet")
* [parse-glob](https://www.npmjs.com/package/parse-glob): Parse a glob pattern into an object of tokens. | [homepage](https://github.com/jonschlinkert/parse-glob "Parse a glob pattern into an object of tokens.")

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

## Building docs

_(This document was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme) (a [verb](https://github.com/verbose/verb) generator), please don't edit the readme directly. Any changes to the readme must be made in [.verb.md](.verb.md).)_

To generate the readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install -g verb verb-generate-readme && verb
```

## Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

## Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/jonschlinkert/micromatch/blob/master/LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v0.9.0, on July 15, 2016._