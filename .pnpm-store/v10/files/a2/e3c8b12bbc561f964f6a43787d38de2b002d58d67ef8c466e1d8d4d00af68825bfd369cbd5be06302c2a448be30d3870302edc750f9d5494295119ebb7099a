# micromatch [![NPM version](https://img.shields.io/npm/v/micromatch.svg?style=flat)](https://www.npmjs.com/package/micromatch) [![NPM monthly downloads](https://img.shields.io/npm/dm/micromatch.svg?style=flat)](https://npmjs.org/package/micromatch) [![NPM total downloads](https://img.shields.io/npm/dt/micromatch.svg?style=flat)](https://npmjs.org/package/micromatch)  [![Tests](https://github.com/micromatch/micromatch/actions/workflows/test.yml/badge.svg)](https://github.com/micromatch/micromatch/actions/workflows/test.yml)

> Glob matching for javascript/node.js. A replacement and faster alternative to minimatch and multimatch.

Please consider following this project's author, [Jon Schlinkert](https://github.com/jonschlinkert), and consider starring the project to show your :heart: and support.

## Table of Contents

<details>
<summary><strong>Details</strong></summary>

  * [Install](#install)
- [Sponsors](#sponsors)
  * [Gold Sponsors](#gold-sponsors)
  * [Quickstart](#quickstart)
  * [Why use micromatch?](#why-use-micromatch)
    + [Matching features](#matching-features)
  * [Switching to micromatch](#switching-to-micromatch)
    + [From minimatch](#from-minimatch)
    + [From multimatch](#from-multimatch)
  * [API](#api)
  * [Options](#options)
  * [Options Examples](#options-examples)
    + [options.basename](#optionsbasename)
    + [options.bash](#optionsbash)
    + [options.expandRange](#optionsexpandrange)
    + [options.format](#optionsformat)
    + [options.ignore](#optionsignore)
    + [options.matchBase](#optionsmatchbase)
    + [options.noextglob](#optionsnoextglob)
    + [options.nonegate](#optionsnonegate)
    + [options.noglobstar](#optionsnoglobstar)
    + [options.nonull](#optionsnonull)
    + [options.nullglob](#optionsnullglob)
    + [options.onIgnore](#optionsonignore)
    + [options.onMatch](#optionsonmatch)
    + [options.onResult](#optionsonresult)
    + [options.posixSlashes](#optionsposixslashes)
    + [options.unescape](#optionsunescape)
  * [Extended globbing](#extended-globbing)
    + [Extglobs](#extglobs)
    + [Braces](#braces)
    + [Regex character classes](#regex-character-classes)
    + [Regex groups](#regex-groups)
    + [POSIX bracket expressions](#posix-bracket-expressions)
  * [Notes](#notes)
    + [Bash 4.3 parity](#bash-43-parity)
    + [Backslashes](#backslashes)
  * [Benchmarks](#benchmarks)
    + [Running benchmarks](#running-benchmarks)
    + [Latest results](#latest-results)
  * [Contributing](#contributing)
  * [About](#about)

</details>

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save micromatch
```

<br />

# Sponsors

[Become a Sponsor](https://github.com/sponsors/jonschlinkert) to add your logo to this README, or any of [my other projects](https://github.com/jonschlinkert?tab=repositories&q=&type=&language=&sort=stargazers)

<br />

## Quickstart

```js
const micromatch = require('micromatch');
// micromatch(list, patterns[, options]);
```

The [main export](#micromatch) takes a list of strings and one or more glob patterns:

```js
console.log(micromatch(['foo', 'bar', 'baz', 'qux'], ['f*', 'b*'])) //=> ['foo', 'bar', 'baz']
console.log(micromatch(['foo', 'bar', 'baz', 'qux'], ['*', '!b*'])) //=> ['foo', 'qux']
```

Use [.isMatch()](#ismatch) to for boolean matching:

```js
console.log(micromatch.isMatch('foo', 'f*')) //=> true
console.log(micromatch.isMatch('foo', ['b*', 'f*'])) //=> true
```

[Switching](#switching-to-micromatch) from minimatch and multimatch is easy!

<br>

## Why use micromatch?

> micromatch is a [replacement](#switching-to-micromatch) for minimatch and multimatch

* Supports all of the same matching features as [minimatch](https://github.com/isaacs/minimatch) and [multimatch](https://github.com/sindresorhus/multimatch)
* More complete support for the Bash 4.3 specification than minimatch and multimatch. Micromatch passes _all of the spec tests_ from bash, including some that bash still fails.
* **Fast & Performant** - Loads in about 5ms and performs [fast matches](#benchmarks).
* **Glob matching** - Using wildcards (`*` and `?`), globstars (`**`) for nested directories
* **[Advanced globbing](#extended-globbing)** - Supports [extglobs](#extglobs), [braces](#braces-1), and [POSIX brackets](#posix-bracket-expressions), and support for escaping special characters with `\` or quotes.
* **Accurate** - Covers more scenarios [than minimatch](https://github.com/yarnpkg/yarn/pull/3339)
* **Well tested** - More than 5,000 [test assertions](./test)
* **Windows support** - More reliable windows support than minimatch and multimatch.
* **[Safe](https://github.com/micromatch/braces#braces-is-safe)** - Micromatch is not subject to DoS with brace patterns like minimatch and multimatch.

### Matching features

* Support for multiple glob patterns (no need for wrappers like multimatch)
* Wildcards (`**`, `*.js`)
* Negation (`'!a/*.js'`, `'*!(b).js'`)
* [extglobs](#extglobs) (`+(x|y)`, `!(a|b)`)
* [POSIX character classes](#posix-bracket-expressions) (`[[:alpha:][:digit:]]`)
* [brace expansion](https://github.com/micromatch/braces) (`foo/{1..5}.md`, `bar/{a,b,c}.js`)
* regex character classes (`foo-[1-5].js`)
* regex logical "or" (`foo/(abc|xyz).js`)

You can mix and match these features to create whatever patterns you need!

## Switching to micromatch

_(There is one notable difference between micromatch and minimatch in regards to how backslashes are handled. See [the notes about backslashes](#backslashes) for more information.)_

### From minimatch

Use [micromatch.isMatch()](#ismatch) instead of `minimatch()`:

```js
console.log(micromatch.isMatch('foo', 'b*')); //=> false
```

Use [micromatch.match()](#match) instead of `minimatch.match()`:

```js
console.log(micromatch.match(['foo', 'bar'], 'b*')); //=> 'bar'
```

### From multimatch

Same signature:

```js
console.log(micromatch(['foo', 'bar', 'baz'], ['f*', '*z'])); //=> ['foo', 'baz']
```

## API

**Params**

* `list` **{String|Array<string>}**: List of strings to match.
* `patterns` **{String|Array<string>}**: One or more glob patterns to use for matching.
* `options` **{Object}**: See available [options](#options)
* `returns` **{Array}**: Returns an array of matches

**Example**

```js
const mm = require('micromatch');
// mm(list, patterns[, options]);

console.log(mm(['a.js', 'a.txt'], ['*.js']));
//=> [ 'a.js' ]
```

### [.matcher](index.js#L109)

Returns a matcher function from the given glob `pattern` and `options`. The returned function takes a string to match as its only argument and returns true if the string is a match.

**Params**

* `pattern` **{String}**: Glob pattern
* `options` **{Object}**
* `returns` **{Function}**: Returns a matcher function.

**Example**

```js
const mm = require('micromatch');
// mm.matcher(pattern[, options]);

const isMatch = mm.matcher('*.!(*a)');
console.log(isMatch('a.a')); //=> false
console.log(isMatch('a.b')); //=> true
```

### [.isMatch](index.js#L128)

Returns true if **any** of the given glob `patterns` match the specified `string`.

**Params**

* `str` **{String}**: The string to test.
* `patterns` **{String|Array}**: One or more glob patterns to use for matching.
* `[options]` **{Object}**: See available [options](#options).
* `returns` **{Boolean}**: Returns true if any patterns match `str`

**Example**

```js
const mm = require('micromatch');
// mm.isMatch(string, patterns[, options]);

console.log(mm.isMatch('a.a', ['b.*', '*.a'])); //=> true
console.log(mm.isMatch('a.a', 'b.*')); //=> false
```

### [.not](index.js#L153)

Returns a list of strings that _**do not match any**_ of the given `patterns`.

**Params**

* `list` **{Array}**: Array of strings to match.
* `patterns` **{String|Array}**: One or more glob pattern to use for matching.
* `options` **{Object}**: See available [options](#options) for changing how matches are performed
* `returns` **{Array}**: Returns an array of strings that **do not match** the given patterns.

**Example**

```js
const mm = require('micromatch');
// mm.not(list, patterns[, options]);

console.log(mm.not(['a.a', 'b.b', 'c.c'], '*.a'));
//=> ['b.b', 'c.c']
```

### [.contains](index.js#L193)

Returns true if the given `string` contains the given pattern. Similar to [.isMatch](#isMatch) but the pattern can match any part of the string.

**Params**

* `str` **{String}**: The string to match.
* `patterns` **{String|Array}**: Glob pattern to use for matching.
* `options` **{Object}**: See available [options](#options) for changing how matches are performed
* `returns` **{Boolean}**: Returns true if any of the patterns matches any part of `str`.

**Example**

```js
var mm = require('micromatch');
// mm.contains(string, pattern[, options]);

console.log(mm.contains('aa/bb/cc', '*b'));
//=> true
console.log(mm.contains('aa/bb/cc', '*d'));
//=> false
```

### [.matchKeys](index.js#L235)

Filter the keys of the given object with the given `glob` pattern and `options`. Does not attempt to match nested keys. If you need this feature, use [glob-object](https://github.com/jonschlinkert/glob-object) instead.

**Params**

* `object` **{Object}**: The object with keys to filter.
* `patterns` **{String|Array}**: One or more glob patterns to use for matching.
* `options` **{Object}**: See available [options](#options) for changing how matches are performed
* `returns` **{Object}**: Returns an object with only keys that match the given patterns.

**Example**

```js
const mm = require('micromatch');
// mm.matchKeys(object, patterns[, options]);

const obj = { aa: 'a', ab: 'b', ac: 'c' };
console.log(mm.matchKeys(obj, '*b'));
//=> { ab: 'b' }
```

### [.some](index.js#L264)

Returns true if some of the strings in the given `list` match any of the given glob `patterns`.

**Params**

* `list` **{String|Array}**: The string or array of strings to test. Returns as soon as the first match is found.
* `patterns` **{String|Array}**: One or more glob patterns to use for matching.
* `options` **{Object}**: See available [options](#options) for changing how matches are performed
* `returns` **{Boolean}**: Returns true if any `patterns` matches any of the strings in `list`

**Example**

```js
const mm = require('micromatch');
// mm.some(list, patterns[, options]);

console.log(mm.some(['foo.js', 'bar.js'], ['*.js', '!foo.js']));
// true
console.log(mm.some(['foo.js'], ['*.js', '!foo.js']));
// false
```

### [.every](index.js#L300)

Returns true if every string in the given `list` matches any of the given glob `patterns`.

**Params**

* `list` **{String|Array}**: The string or array of strings to test.
* `patterns` **{String|Array}**: One or more glob patterns to use for matching.
* `options` **{Object}**: See available [options](#options) for changing how matches are performed
* `returns` **{Boolean}**: Returns true if all `patterns` matches all of the strings in `list`

**Example**

```js
const mm = require('micromatch');
// mm.every(list, patterns[, options]);

console.log(mm.every('foo.js', ['foo.js']));
// true
console.log(mm.every(['foo.js', 'bar.js'], ['*.js']));
// true
console.log(mm.every(['foo.js', 'bar.js'], ['*.js', '!foo.js']));
// false
console.log(mm.every(['foo.js'], ['*.js', '!foo.js']));
// false
```

### [.all](index.js#L339)

Returns true if **all** of the given `patterns` match the specified string.

**Params**

* `str` **{String|Array}**: The string to test.
* `patterns` **{String|Array}**: One or more glob patterns to use for matching.
* `options` **{Object}**: See available [options](#options) for changing how matches are performed
* `returns` **{Boolean}**: Returns true if any patterns match `str`

**Example**

```js
const mm = require('micromatch');
// mm.all(string, patterns[, options]);

console.log(mm.all('foo.js', ['foo.js']));
// true

console.log(mm.all('foo.js', ['*.js', '!foo.js']));
// false

console.log(mm.all('foo.js', ['*.js', 'foo.js']));
// true

console.log(mm.all('foo.js', ['*.js', 'f*', '*o*', '*o.js']));
// true
```

### [.capture](index.js#L366)

Returns an array of matches captured by `pattern` in `string, or`null` if the pattern did not match.

**Params**

* `glob` **{String}**: Glob pattern to use for matching.
* `input` **{String}**: String to match
* `options` **{Object}**: See available [options](#options) for changing how matches are performed
* `returns` **{Array|null}**: Returns an array of captures if the input matches the glob pattern, otherwise `null`.

**Example**

```js
const mm = require('micromatch');
// mm.capture(pattern, string[, options]);

console.log(mm.capture('test/*.js', 'test/foo.js'));
//=> ['foo']
console.log(mm.capture('test/*.js', 'foo/bar.css'));
//=> null
```

### [.makeRe](index.js#L392)

Create a regular expression from the given glob `pattern`.

**Params**

* `pattern` **{String}**: A glob pattern to convert to regex.
* `options` **{Object}**
* `returns` **{RegExp}**: Returns a regex created from the given pattern.

**Example**

```js
const mm = require('micromatch');
// mm.makeRe(pattern[, options]);

console.log(mm.makeRe('*.js'));
//=> /^(?:(\.[\\\/])?(?!\.)(?=.)[^\/]*?\.js)$/
```

### [.scan](index.js#L408)

Scan a glob pattern to separate the pattern into segments. Used by the [split](#split) method.

**Params**

* `pattern` **{String}**
* `options` **{Object}**
* `returns` **{Object}**: Returns an object with

**Example**

```js
const mm = require('micromatch');
const state = mm.scan(pattern[, options]);
```

### [.parse](index.js#L424)

Parse a glob pattern to create the source string for a regular expression.

**Params**

* `glob` **{String}**
* `options` **{Object}**
* `returns` **{Object}**: Returns an object with useful properties and output to be used as regex source string.

**Example**

```js
const mm = require('micromatch');
const state = mm.parse(pattern[, options]);
```

### [.braces](index.js#L451)

Process the given brace `pattern`.

**Params**

* `pattern` **{String}**: String with brace pattern to process.
* `options` **{Object}**: Any [options](#options) to change how expansion is performed. See the [braces](https://github.com/micromatch/braces) library for all available options.
* `returns` **{Array}**

**Example**

```js
const { braces } = require('micromatch');
console.log(braces('foo/{a,b,c}/bar'));
//=> [ 'foo/(a|b|c)/bar' ]

console.log(braces('foo/{a,b,c}/bar', { expand: true }));
//=> [ 'foo/a/bar', 'foo/b/bar', 'foo/c/bar' ]
```

## Options

| **Option** | **Type** | **Default value** | **Description** |
| --- | --- | --- | --- |
| `basename`            | `boolean`      | `false`     | If set, then patterns without slashes will be matched against the basename of the path if it contains slashes.  For example, `a?b` would match the path `/xyz/123/acb`, but not `/xyz/acb/123`. |
| `bash`                | `boolean`      | `false`     | Follow bash matching rules more strictly - disallows backslashes as escape characters, and treats single stars as globstars (`**`). |
| `capture`             | `boolean`      | `undefined` | Return regex matches in supporting methods. |
| `contains`            | `boolean`      | `undefined` | Allows glob to match any part of the given string(s). |
| `cwd`                 | `string`       | `process.cwd()` | Current working directory. Used by `picomatch.split()` |
| `debug`               | `boolean`      | `undefined` | Debug regular expressions when an error is thrown. |
| `dot`                 | `boolean`      | `false`     | Match dotfiles. Otherwise dotfiles are ignored unless a `.` is explicitly defined in the pattern. |
| `expandRange`         | `function`     | `undefined` | Custom function for expanding ranges in brace patterns, such as `{a..z}`. The function receives the range values as two arguments, and it must return a string to be used in the generated regex. It's recommended that returned strings be wrapped in parentheses. This option is overridden by the `expandBrace` option. |
| `failglob`            | `boolean`      | `false`     | Similar to the `failglob` behavior in Bash, throws an error when no matches are found. Based on the bash option of the same name. |
| `fastpaths`           | `boolean`      | `true`      | To speed up processing, full parsing is skipped for a handful common glob patterns. Disable this behavior by setting this option to `false`. |
| `flags`               | `boolean`      | `undefined` | Regex flags to use in the generated regex. If defined, the `nocase` option will be overridden. |
| [format](#optionsformat) | `function` | `undefined` | Custom function for formatting the returned string. This is useful for removing leading slashes, converting Windows paths to Posix paths, etc. |
| `ignore`              | `array\|string` | `undefined` | One or more glob patterns for excluding strings that should not be matched from the result. |
| `keepQuotes`          | `boolean`      | `false`     | Retain quotes in the generated regex, since quotes may also be used as an alternative to backslashes.  |
| `literalBrackets`     | `boolean`      | `undefined` | When `true`, brackets in the glob pattern will be escaped so that only literal brackets will be matched. |
| `lookbehinds`         | `boolean`      | `true`      | Support regex positive and negative lookbehinds. Note that you must be using Node 8.1.10 or higher to enable regex lookbehinds. |
| `matchBase`           | `boolean`      | `false`     | Alias for `basename` |
| `maxLength`           | `boolean`      | `65536`     | Limit the max length of the input string. An error is thrown if the input string is longer than this value. |
| `nobrace`             | `boolean`      | `false`     | Disable brace matching, so that `{a,b}` and `{1..3}` would be treated as literal characters. |
| `nobracket`           | `boolean`      | `undefined` | Disable matching with regex brackets. |
| `nocase`              | `boolean`      | `false`     | Perform case-insensitive matching. Equivalent to the regex `i` flag. Note that this option is ignored when the `flags` option is defined. |
| `nodupes`             | `boolean`      | `true`      | Deprecated, use `nounique` instead. This option will be removed in a future major release. By default duplicates are removed. Disable uniquification by setting this option to false. |
| `noext`               | `boolean`      | `false`     | Alias for `noextglob` |
| `noextglob`           | `boolean`      | `false`     | Disable support for matching with [extglobs](#extglobs) (like `+(a\|b)`) |
| `noglobstar`          | `boolean`      | `false`     | Disable support for matching nested directories with globstars (`**`) |
| `nonegate`            | `boolean`      | `false`     | Disable support for negating with leading `!` |
| `noquantifiers`       | `boolean`      | `false`     | Disable support for regex quantifiers (like `a{1,2}`) and treat them as brace patterns to be expanded. |
| [onIgnore](#optionsonIgnore) | `function` | `undefined` | Function to be called on ignored items. |
| [onMatch](#optionsonMatch) | `function` | `undefined` | Function to be called on matched items. |
| [onResult](#optionsonResult) | `function` | `undefined` | Function to be called on all items, regardless of whether or not they are matched or ignored. |
| `posix`               | `boolean`      | `false`     | Support [POSIX character classes](#posix-bracket-expressions) ("posix brackets"). |
| `posixSlashes`        | `boolean`      | `undefined` | Convert all slashes in file paths to forward slashes. This does not convert slashes in the glob pattern itself |
| `prepend`             | `string`       | `undefined` | String to prepend to the generated regex used for matching. |
| `regex`               | `boolean`      | `false`     | Use regular expression rules for `+` (instead of matching literal `+`), and for stars that follow closing parentheses or brackets (as in `)*` and `]*`). |
| `strictBrackets`      | `boolean`      | `undefined` | Throw an error if brackets, braces, or parens are imbalanced. |
| `strictSlashes`       | `boolean`      | `undefined` | When true, picomatch won't match trailing slashes with single stars. |
| `unescape`            | `boolean`      | `undefined` | Remove preceding backslashes from escaped glob characters before creating the regular expression to perform matches. |
| `unixify`             | `boolean`      | `undefined` | Alias for `posixSlashes`, for backwards compatitibility. |

## Options Examples

### options.basename

Allow glob patterns without slashes to match a file path based on its basename. Same behavior as [minimatch](https://github.com/isaacs/minimatch) option `matchBase`.

**Type**: `Boolean`

**Default**: `false`

**Example**

```js
micromatch(['a/b.js', 'a/c.md'], '*.js');
//=> []

micromatch(['a/b.js', 'a/c.md'], '*.js', { basename: true });
//=> ['a/b.js']
```

### options.bash

Enabled by default, this option enforces bash-like behavior with stars immediately following a bracket expression. Bash bracket expressions are similar to regex character classes, but unlike regex, a star following a bracket expression **does not repeat the bracketed characters**. Instead, the star is treated the same as any other star.

**Type**: `Boolean`

**Default**: `true`

**Example**

```js
const files = ['abc', 'ajz'];
console.log(micromatch(files, '[a-c]*'));
//=> ['abc', 'ajz']

console.log(micromatch(files, '[a-c]*', { bash: false }));
```

### options.expandRange

**Type**: `function`

**Default**: `undefined`

Custom function for expanding ranges in brace patterns. The [fill-range](https://github.com/jonschlinkert/fill-range) library is ideal for this purpose, or you can use custom code to do whatever you need.

**Example**

The following example shows how to create a glob that matches a numeric folder name between `01` and `25`, with leading zeros.

```js
const fill = require('fill-range');
const regex = micromatch.makeRe('foo/{01..25}/bar', {
  expandRange(a, b) {
    return `(${fill(a, b, { toRegex: true })})`;
  }
});

console.log(regex)
//=> /^(?:foo\/((?:0[1-9]|1[0-9]|2[0-5]))\/bar)$/

console.log(regex.test('foo/00/bar')) // false
console.log(regex.test('foo/01/bar')) // true
console.log(regex.test('foo/10/bar')) // true
console.log(regex.test('foo/22/bar')) // true
console.log(regex.test('foo/25/bar')) // true
console.log(regex.test('foo/26/bar')) // false
```

### options.format

**Type**: `function`

**Default**: `undefined`

Custom function for formatting strings before they're matched.

**Example**

```js
// strip leading './' from strings
const format = str => str.replace(/^\.\//, '');
const isMatch = picomatch('foo/*.js', { format });
console.log(isMatch('./foo/bar.js')) //=> true
```

### options.ignore

String or array of glob patterns to match files to ignore.

**Type**: `String|Array`

**Default**: `undefined`

```js
const isMatch = micromatch.matcher('*', { ignore: 'f*' });
console.log(isMatch('foo')) //=> false
console.log(isMatch('bar')) //=> true
console.log(isMatch('baz')) //=> true
```

### options.matchBase

Alias for [options.basename](#options-basename).

### options.noextglob

Disable extglob support, so that [extglobs](#extglobs) are regarded as literal characters.

**Type**: `Boolean`

**Default**: `undefined`

**Examples**

```js
console.log(micromatch(['a/z', 'a/b', 'a/!(z)'], 'a/!(z)'));
//=> ['a/b', 'a/!(z)']

console.log(micromatch(['a/z', 'a/b', 'a/!(z)'], 'a/!(z)', { noextglob: true }));
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
micromatch(['a/b', 'a/b/c', 'a/b/c/d'], 'a/**');
//=> ['a/b', 'a/b/c', 'a/b/c/d']

micromatch(['a/b', 'a/b/c', 'a/b/c/d'], 'a/**', {noglobstar: true});
//=> ['a/b']
```

### options.nonull

Alias for [options.nullglob](#options-nullglob).

### options.nullglob

If `true`, when no matches are found the actual (arrayified) glob pattern is returned instead of an empty array. Same behavior as [minimatch](https://github.com/isaacs/minimatch) option `nonull`.

**Type**: `Boolean`

**Default**: `undefined`

### options.onIgnore

```js
const onIgnore = ({ glob, regex, input, output }) => {
  console.log({ glob, regex, input, output });
  // { glob: '*', regex: /^(?:(?!\.)(?=.)[^\/]*?\/?)$/, input: 'foo', output: 'foo' }
};

const isMatch = micromatch.matcher('*', { onIgnore, ignore: 'f*' });
isMatch('foo');
isMatch('bar');
isMatch('baz');
```

### options.onMatch

```js
const onMatch = ({ glob, regex, input, output }) => {
  console.log({ input, output });
  // { input: 'some\\path', output: 'some/path' }
  // { input: 'some\\path', output: 'some/path' }
  // { input: 'some\\path', output: 'some/path' }
};

const isMatch = micromatch.matcher('**', { onMatch, posixSlashes: true });
isMatch('some\\path');
isMatch('some\\path');
isMatch('some\\path');
```

### options.onResult

```js
const onResult = ({ glob, regex, input, output }) => {
  console.log({ glob, regex, input, output });
};

const isMatch = micromatch('*', { onResult, ignore: 'f*' });
isMatch('foo');
isMatch('bar');
isMatch('baz');
```

### options.posixSlashes

Convert path separators on returned files to posix/unix-style forward slashes. Aliased as `unixify` for backwards compatibility.

**Type**: `Boolean`

**Default**: `true` on windows, `false` everywhere else.

**Example**

```js
console.log(micromatch.match(['a\\b\\c'], 'a/**'));
//=> ['a/b/c']

console.log(micromatch.match(['a\\b\\c'], { posixSlashes: false }));
//=> ['a\\b\\c']
```

### options.unescape

Remove backslashes from escaped glob characters before creating the regular expression to perform matches.

**Type**: `Boolean`

**Default**: `undefined`

**Example**

In this example we want to match a literal `*`:

```js
console.log(micromatch.match(['abc', 'a\\*c'], 'a\\*c'));
//=> ['a\\*c']

console.log(micromatch.match(['abc', 'a\\*c'], 'a\\*c', { unescape: true }));
//=> ['a*c']
```

<br>
<br>

## Extended globbing

Micromatch supports the following extended globbing features.

### Extglobs

Extended globbing, as described by the bash man page:

| **pattern** | **regex equivalent** | **description** |
| --- | --- | --- |
| `?(pattern)` | `(pattern)?` | Matches zero or one occurrence of the given patterns |
| `*(pattern)` | `(pattern)*` | Matches zero or more occurrences of the given patterns |
| `+(pattern)` | `(pattern)+` | Matches one or more occurrences of the given patterns |
| `@(pattern)` | `(pattern)` <sup>*</sup> | Matches one of the given patterns |
| `!(pattern)` | N/A (equivalent regex is much more complicated) | Matches anything except one of the given patterns |

<sup><strong>*</strong></sup> Note that `@` isn't a regex character.

### Braces

Brace patterns can be used to match specific ranges or sets of characters.

**Example**

The pattern `{f,b}*/{1..3}/{b,q}*` would match any of following strings:

```
foo/1/bar
foo/2/bar
foo/3/bar
baz/1/qux
baz/2/qux
baz/3/qux
```

Visit [braces](https://github.com/micromatch/braces) to see the full range of features and options related to brace expansion, or to create brace matching or expansion related issues.

### Regex character classes

Given the list: `['a.js', 'b.js', 'c.js', 'd.js', 'E.js']`:

* `[ac].js`: matches both `a` and `c`, returning `['a.js', 'c.js']`
* `[b-d].js`: matches from `b` to `d`, returning `['b.js', 'c.js', 'd.js']`
* `a/[A-Z].js`: matches and uppercase letter, returning `['a/E.md']`

Learn about [regex character classes](http://www.regular-expressions.info/charclass.html).

### Regex groups

Given `['a.js', 'b.js', 'c.js', 'd.js', 'E.js']`:

* `(a|c).js`: would match either `a` or `c`, returning `['a.js', 'c.js']`
* `(b|d).js`: would match either `b` or `d`, returning `['b.js', 'd.js']`
* `(b|[A-Z]).js`: would match either `b` or an uppercase letter, returning `['b.js', 'E.js']`

As with regex, parens can be nested, so patterns like `((a|b)|c)/b` will work. Although brace expansion might be friendlier to use, depending on preference.

### POSIX bracket expressions

POSIX brackets are intended to be more user-friendly than regex character classes. This of course is in the eye of the beholder.

**Example**

```js
console.log(micromatch.isMatch('a1', '[[:alpha:][:digit:]]')) //=> true
console.log(micromatch.isMatch('a1', '[[:alpha:][:alpha:]]')) //=> false
```

***

## Notes

### Bash 4.3 parity

Whenever possible matching behavior is based on behavior Bash 4.3, which is mostly consistent with minimatch.

However, it's suprising how many edge cases and rabbit holes there are with glob matching, and since there is no real glob specification, and micromatch is more accurate than both Bash and minimatch, there are cases where best-guesses were made for behavior. In a few cases where Bash had no answers, we used wildmatch (used by git) as a fallback.

### Backslashes

There is an important, notable difference between minimatch and micromatch _in regards to how backslashes are handled_ in glob patterns.

* Micromatch exclusively and explicitly reserves backslashes for escaping characters in a glob pattern, even on windows, which is consistent with bash behavior. _More importantly, unescaping globs can result in unsafe regular expressions_.
* Minimatch converts all backslashes to forward slashes, which means you can't use backslashes to escape any characters in your glob patterns.

We made this decision for micromatch for a couple of reasons:

* Consistency with bash conventions.
* Glob patterns are not filepaths. They are a type of [regular language](https://en.wikipedia.org/wiki/Regular_language) that is converted to a JavaScript regular expression. Thus, when forward slashes are defined in a glob pattern, the resulting regular expression will match windows or POSIX path separators just fine.

**A note about joining paths to globs**

Note that when you pass something like `path.join('foo', '*')` to micromatch, you are creating a filepath and expecting it to still work as a glob pattern. This causes problems on windows, since the `path.sep` is `\\`.

In other words, since `\\` is reserved as an escape character in globs, on windows `path.join('foo', '*')` would result in `foo\\*`, which tells micromatch to match `*` as a literal character. This is the same behavior as bash.

To solve this, you might be inspired to do something like `'foo\\*'.replace(/\\/g, '/')`, but this causes another, potentially much more serious, problem.

## Benchmarks

### Running benchmarks

Install dependencies for running benchmarks:

```sh
$ cd bench && npm install
```

Run the benchmarks:

```sh
$ npm run bench
```

### Latest results

As of August 23, 2024 (longer bars are better):

```sh
# .makeRe star
  micromatch x 2,232,802 ops/sec ±2.34% (89 runs sampled))
  minimatch x 781,018 ops/sec ±6.74% (92 runs sampled))

# .makeRe star; dot=true
  micromatch x 1,863,453 ops/sec ±0.74% (93 runs sampled)
  minimatch x 723,105 ops/sec ±0.75% (93 runs sampled)

# .makeRe globstar
  micromatch x 1,624,179 ops/sec ±2.22% (91 runs sampled)
  minimatch x 1,117,230 ops/sec ±2.78% (86 runs sampled))

# .makeRe globstars
  micromatch x 1,658,642 ops/sec ±0.86% (92 runs sampled)
  minimatch x 741,224 ops/sec ±1.24% (89 runs sampled))

# .makeRe with leading star
  micromatch x 1,525,014 ops/sec ±1.63% (90 runs sampled)
  minimatch x 561,074 ops/sec ±3.07% (89 runs sampled)

# .makeRe - braces
  micromatch x 172,478 ops/sec ±2.37% (78 runs sampled)
  minimatch x 96,087 ops/sec ±2.34% (88 runs sampled)))

# .makeRe braces - range (expanded)
  micromatch x 26,973 ops/sec ±0.84% (89 runs sampled)
  minimatch x 3,023 ops/sec ±0.99% (90 runs sampled))

# .makeRe braces - range (compiled)
  micromatch x 152,892 ops/sec ±1.67% (83 runs sampled)
  minimatch x 992 ops/sec ±3.50% (89 runs sampled)d))

# .makeRe braces - nested ranges (expanded)
  micromatch x 15,816 ops/sec ±13.05% (80 runs sampled)
  minimatch x 2,953 ops/sec ±1.64% (91 runs sampled)

# .makeRe braces - nested ranges (compiled)
  micromatch x 110,881 ops/sec ±1.85% (82 runs sampled)
  minimatch x 1,008 ops/sec ±1.51% (91 runs sampled)

# .makeRe braces - set (compiled)
  micromatch x 134,930 ops/sec ±3.54% (63 runs sampled))
  minimatch x 43,242 ops/sec ±0.60% (93 runs sampled)

# .makeRe braces - nested sets (compiled)
  micromatch x 94,455 ops/sec ±1.74% (69 runs sampled))
  minimatch x 27,720 ops/sec ±1.84% (93 runs sampled))
```

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
* [expand-brackets](https://www.npmjs.com/package/expand-brackets): Expand POSIX bracket expressions (character classes) in glob patterns. | [homepage](https://github.com/micromatch/expand-brackets "Expand POSIX bracket expressions (character classes) in glob patterns.")
* [extglob](https://www.npmjs.com/package/extglob): Extended glob support for JavaScript. Adds (almost) the expressive power of regular expressions to glob… [more](https://github.com/micromatch/extglob) | [homepage](https://github.com/micromatch/extglob "Extended glob support for JavaScript. Adds (almost) the expressive power of regular expressions to glob patterns.")
* [fill-range](https://www.npmjs.com/package/fill-range): Fill in a range of numbers or letters, optionally passing an increment or `step` to… [more](https://github.com/jonschlinkert/fill-range) | [homepage](https://github.com/jonschlinkert/fill-range "Fill in a range of numbers or letters, optionally passing an increment or `step` to use, or create a regex-compatible range with `options.toRegex`")
* [nanomatch](https://www.npmjs.com/package/nanomatch): Fast, minimal glob matcher for node.js. Similar to micromatch, minimatch and multimatch, but complete Bash… [more](https://github.com/micromatch/nanomatch) | [homepage](https://github.com/micromatch/nanomatch "Fast, minimal glob matcher for node.js. Similar to micromatch, minimatch and multimatch, but complete Bash 4.3 wildcard support only (no support for exglobs, posix brackets or braces)")

### Contributors

| **Commits** | **Contributor** |  
| --- | --- |  
| 523 | [jonschlinkert](https://github.com/jonschlinkert) |  
| 12  | [es128](https://github.com/es128) |  
| 9   | [danez](https://github.com/danez) |  
| 8   | [doowb](https://github.com/doowb) |  
| 6   | [paulmillr](https://github.com/paulmillr) |  
| 5   | [mrmlnc](https://github.com/mrmlnc) |  
| 3   | [DrPizza](https://github.com/DrPizza) |  
| 2   | [Tvrqvoise](https://github.com/Tvrqvoise) |  
| 2   | [antonyk](https://github.com/antonyk) |  
| 2   | [MartinKolarik](https://github.com/MartinKolarik) |  
| 2   | [Glazy](https://github.com/Glazy) |  
| 2   | [mceIdo](https://github.com/mceIdo) |  
| 2   | [TrySound](https://github.com/TrySound) |  
| 1   | [yvele](https://github.com/yvele) |  
| 1   | [wtgtybhertgeghgtwtg](https://github.com/wtgtybhertgeghgtwtg) |  
| 1   | [simlu](https://github.com/simlu) |  
| 1   | [curbengh](https://github.com/curbengh) |  
| 1   | [fidian](https://github.com/fidian) |  
| 1   | [tomByrer](https://github.com/tomByrer) |  
| 1   | [ZoomerTedJackson](https://github.com/ZoomerTedJackson) |  
| 1   | [styfle](https://github.com/styfle) |  
| 1   | [sebdeckers](https://github.com/sebdeckers) |  
| 1   | [muescha](https://github.com/muescha) |  
| 1   | [juszczykjakub](https://github.com/juszczykjakub) |  
| 1   | [joyceerhl](https://github.com/joyceerhl) |  
| 1   | [donatj](https://github.com/donatj) |  
| 1   | [frangio](https://github.com/frangio) |  
| 1   | [UltCombo](https://github.com/UltCombo) |  
| 1   | [DianeLooney](https://github.com/DianeLooney) |  
| 1   | [devongovett](https://github.com/devongovett) |  
| 1   | [Cslove](https://github.com/Cslove) |  
| 1   | [amilajack](https://github.com/amilajack) |  

### Author

**Jon Schlinkert**

* [GitHub Profile](https://github.com/jonschlinkert)
* [Twitter Profile](https://twitter.com/jonschlinkert)
* [LinkedIn Profile](https://linkedin.com/in/jonschlinkert)

### License

Copyright © 2024, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.8.0, on August 23, 2024._