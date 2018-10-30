# to-regex-range [![NPM version](https://img.shields.io/npm/v/to-regex-range.svg?style=flat)](https://www.npmjs.com/package/to-regex-range) [![NPM monthly downloads](https://img.shields.io/npm/dm/to-regex-range.svg?style=flat)](https://npmjs.org/package/to-regex-range)  [![NPM total downloads](https://img.shields.io/npm/dt/to-regex-range.svg?style=flat)](https://npmjs.org/package/to-regex-range) [![Linux Build Status](https://img.shields.io/travis/micromatch/to-regex-range.svg?style=flat&label=Travis)](https://travis-ci.org/micromatch/to-regex-range)

> Pass two numbers, get a regex-compatible source string for matching ranges. Validated against more than 2.78 million test assertions.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save to-regex-range
```

Install with [yarn](https://yarnpkg.com):

```sh
$ yarn add to-regex-range
```

<details>
<summary><strong>What does this do?</strong></summary>

<br>

This libary generates the `source` string to be passed to `new RegExp()` for matching a range of numbers.

**Example**

```js
var toRegexRange = require('to-regex-range');
var regex = new RegExp(toRegexRange('15', '95'));
```

A string is returned so that you can do whatever you need with it before passing it to `new RegExp()` (like adding `^` or `$` boundaries, defining flags, or combining it another string).

<br>

</details>

<details>
<summary><strong>Why use this library?</strong></summary>

<br>

### Convenience

Creating regular expressions for matching numbers gets deceptively complicated pretty fast.

For example, let's say you need a validation regex for matching part of a user-id, postal code, social security number, tax id, etc:

* regex for matching `1` => `/1/` (easy enough)
* regex for matching `1` through `5` => `/[1-5]/` (not bad...)
* regex for matching `1` or `5` => `/(1|5)/` (still easy...)
* regex for matching `1` through `50` => `/([1-9]|[1-4][0-9]|50)/` (uh-oh...)
* regex for matching `1` through `55` => `/([1-9]|[1-4][0-9]|5[0-5])/` (no prob, I can do this...)
* regex for matching `1` through `555` => `/([1-9]|[1-9][0-9]|[1-4][0-9]{2}|5[0-4][0-9]|55[0-5])/` (maybe not...)
* regex for matching `0001` through `5555` => `/(0{3}[1-9]|0{2}[1-9][0-9]|0[1-9][0-9]{2}|[1-4][0-9]{3}|5[0-4][0-9]{2}|55[0-4][0-9]|555[0-5])/` (okay, I get the point!)

The numbers are contrived, but they're also really basic. In the real world you might need to generate a regex on-the-fly for validation.

**Learn more**

If you're interested in learning more about [character classes](http://www.regular-expressions.info/charclass.html) and other regex features, I personally have always found [regular-expressions.info](http://www.regular-expressions.info/charclass.html) to be pretty useful.

### Heavily tested

As of April 27, 2017, this library runs [2,783,483 test assertions](./test/test.js) against generated regex-ranges to provide brute-force verification that results are indeed correct.

Tests run in ~870ms on my MacBook Pro, 2.5 GHz Intel Core i7.

### Highly optimized

Generated regular expressions are highly optimized:

* duplicate sequences and character classes are reduced using quantifiers
* smart enough to use `?` conditionals when number(s) or range(s) can be positive or negative
* uses fragment caching to avoid processing the same exact string more than once

<br>

</details>

## Usage

Add this library to your javascript application with the following line of code

```js
var toRegexRange = require('to-regex-range');
```

The main export is a function that takes two integers: the `min` value and `max` value (formatted as strings or numbers).

```js
var source = toRegexRange('15', '95');
//=> 1[5-9]|[2-8][0-9]|9[0-5]

var re = new RegExp('^' + source + '$');
console.log(re.test('14')); //=> false
console.log(re.test('50')); //=> true
console.log(re.test('94')); //=> true
console.log(re.test('96')); //=> false
```

## Options

### options.capture

**Type**: `boolean`

**Deafault**: `undefined`

Wrap the returned value in parentheses when there is more than one regex condition. Useful when you're dynamically generating ranges.

```js
console.log(toRegexRange('-10', '10'));
//=> -[1-9]|-?10|[0-9]

console.log(toRegexRange('-10', '10', {capture: true}));
//=> (-[1-9]|-?10|[0-9])
```

### options.shorthand

**Type**: `boolean`

**Deafault**: `undefined`

Use the regex shorthand for `[0-9]`:

```js
console.log(toRegexRange('0', '999999'));
//=> [0-9]|[1-9][0-9]{1,5}

console.log(toRegexRange('0', '999999', {shorthand: true}));
//=> \d|[1-9]\d{1,5}
```

### options.relaxZeros

**Type**: `boolean`

**Default**: `true`

This option only applies to **negative zero-padded ranges**. By default, when a negative zero-padded range is defined, the number of leading zeros is relaxed using `-0*`.

```js
console.log(toRegexRange('-001', '100'));
//=> -0*1|0{2}[0-9]|0[1-9][0-9]|100

console.log(toRegexRange('-001', '100', {relaxZeros: false}));
//=> -0{2}1|0{2}[0-9]|0[1-9][0-9]|100
```

<details>
<summary><strong>Why are zeros relaxed for negative zero-padded ranges by default?</strong></summary>

Consider the following.

```js
var regex = toRegexRange('-001', '100');
```

_Note that `-001` and `100` are both three digits long_.

In most zero-padding implementations, only a single leading zero is enough to indicate that zero-padding should be applied. Thus, the leading zeros would be "corrected" on the negative range in the example to `-01`, instead of `-001`, to make total length of each string no greater than the length of the largest number in the range (in other words, `-001` is 4 digits, but `100` is only three digits).

If zeros were not relaxed by default, you might expect the resulting regex of the above pattern to match `-001` - given that it's defined that way in the arguments - _but it wouldn't_. It would, however, match `-01`. This gets even more ambiguous with large ranges, like `-01` to `1000000`.

Thus, we relax zeros by default to provide a more predictable experience for users.

</details>

## Examples

| **Range** | **Result** | **Compile time** | 
| --- | --- | --- |
| `toRegexRange('5, 5')` | `5` | _33μs_ |
| `toRegexRange('5, 6')` | `5\|6` | _53μs_ |
| `toRegexRange('29, 51')` | `29\|[34][0-9]\|5[01]` | _699μs_ |
| `toRegexRange('31, 877')` | `3[1-9]\|[4-9][0-9]\|[1-7][0-9]{2}\|8[0-6][0-9]\|87[0-7]` | _711μs_ |
| `toRegexRange('111, 555')` | `11[1-9]\|1[2-9][0-9]\|[2-4][0-9]{2}\|5[0-4][0-9]\|55[0-5]` | _62μs_ |
| `toRegexRange('-10, 10')` | `-[1-9]\|-?10\|[0-9]` | _74μs_ |
| `toRegexRange('-100, -10')` | `-1[0-9]\|-[2-9][0-9]\|-100` | _49μs_ |
| `toRegexRange('-100, 100')` | `-[1-9]\|-?[1-9][0-9]\|-?100\|[0-9]` | _45μs_ |
| `toRegexRange('001, 100')` | `0{2}[1-9]\|0[1-9][0-9]\|100` | _158μs_ |
| `toRegexRange('0010, 1000')` | `0{2}1[0-9]\|0{2}[2-9][0-9]\|0[1-9][0-9]{2}\|1000` | _61μs_ |
| `toRegexRange('1, 2')` | `1\|2` | _10μs_ |
| `toRegexRange('1, 5')` | `[1-5]` | _24μs_ |
| `toRegexRange('1, 10')` | `[1-9]\|10` | _23μs_ |
| `toRegexRange('1, 100')` | `[1-9]\|[1-9][0-9]\|100` | _30μs_ |
| `toRegexRange('1, 1000')` | `[1-9]\|[1-9][0-9]{1,2}\|1000` | _52μs_ |
| `toRegexRange('1, 10000')` | `[1-9]\|[1-9][0-9]{1,3}\|10000` | _47μs_ |
| `toRegexRange('1, 100000')` | `[1-9]\|[1-9][0-9]{1,4}\|100000` | _44μs_ |
| `toRegexRange('1, 1000000')` | `[1-9]\|[1-9][0-9]{1,5}\|1000000` | _49μs_ |
| `toRegexRange('1, 10000000')` | `[1-9]\|[1-9][0-9]{1,6}\|10000000` | _63μs_ |

## Heads up!

**Order of arguments**

When the `min` is larger than the `max`, values will be flipped to create a valid range:

```js
toRegexRange('51', '29');
```

Is effectively flipped to:

```js
toRegexRange('29', '51');
//=> 29|[3-4][0-9]|5[0-1]
```

**Steps / increments**

This library does not support steps (increments). A pr to add support would be welcome.

## History

### v2.0.0 - 2017-04-21

**New features**

Adds support for zero-padding!

### v1.0.0

**Optimizations**

Repeating ranges are now grouped using quantifiers. rocessing time is roughly the same, but the generated regex is much smaller, which should result in faster matching.

## Attribution

Inspired by the python library [range-regex](https://github.com/dimka665/range-regex).

## About

### Related projects

* [expand-range](https://www.npmjs.com/package/expand-range): Fast, bash-like range expansion. Expand a range of numbers or letters, uppercase or lowercase. See… [more](https://github.com/jonschlinkert/expand-range) | [homepage](https://github.com/jonschlinkert/expand-range "Fast, bash-like range expansion. Expand a range of numbers or letters, uppercase or lowercase. See the benchmarks. Used by micromatch.")
* [fill-range](https://www.npmjs.com/package/fill-range): Fill in a range of numbers or letters, optionally passing an increment or `step` to… [more](https://github.com/jonschlinkert/fill-range) | [homepage](https://github.com/jonschlinkert/fill-range "Fill in a range of numbers or letters, optionally passing an increment or `step` to use, or create a regex-compatible range with `options.toRegex`")
* [micromatch](https://www.npmjs.com/package/micromatch): Glob matching for javascript/node.js. A drop-in replacement and faster alternative to minimatch and multimatch. | [homepage](https://github.com/jonschlinkert/micromatch "Glob matching for javascript/node.js. A drop-in replacement and faster alternative to minimatch and multimatch.")
* [repeat-element](https://www.npmjs.com/package/repeat-element): Create an array by repeating the given value n times. | [homepage](https://github.com/jonschlinkert/repeat-element "Create an array by repeating the given value n times.")
* [repeat-string](https://www.npmjs.com/package/repeat-string): Repeat the given string n times. Fastest implementation for repeating a string. | [homepage](https://github.com/jonschlinkert/repeat-string "Repeat the given string n times. Fastest implementation for repeating a string.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Building docs

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2017, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on April 27, 2017._