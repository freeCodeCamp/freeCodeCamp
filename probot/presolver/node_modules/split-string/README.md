# split-string [![NPM version](https://img.shields.io/npm/v/split-string.svg?style=flat)](https://www.npmjs.com/package/split-string) [![NPM monthly downloads](https://img.shields.io/npm/dm/split-string.svg?style=flat)](https://npmjs.org/package/split-string) [![NPM total downloads](https://img.shields.io/npm/dt/split-string.svg?style=flat)](https://npmjs.org/package/split-string) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/split-string.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/split-string)

> Split a string on a character except when the character is escaped.

Please consider following this project's author, [Jon Schlinkert](https://github.com/jonschlinkert), and consider starring the project to show your :heart: and support.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save split-string
```

<!-- section: Why use this? -->

<details>
<summary><strong>Why use this?</strong></summary>

<br>

Although it's easy to split on a string:

```js
console.log('a.b.c'.split('.'));
//=> ['a', 'b', 'c']
```

It's more challenging to split a string whilst respecting escaped or quoted characters.

**Bad**

```js
console.log('a\\.b.c'.split('.'));
//=> ['a\\', 'b', 'c']

console.log('"a.b.c".d'.split('.'));
//=> ['"a', 'b', 'c"', 'd']
```

**Good**

```js
var split = require('split-string');
console.log(split('a\\.b.c'));
//=> ['a.b', 'c']

console.log(split('"a.b.c".d'));
//=> ['a.b.c', 'd']
```

See the [options](#options) to learn how to choose the separator or retain quotes or escaping.

<br>

</details>

## Usage

```js
var split = require('split-string');

split('a.b.c');
//=> ['a', 'b', 'c']

// respects escaped characters
split('a.b.c\\.d');
//=> ['a', 'b', 'c.d']

// respects double-quoted strings
split('a."b.c.d".e');
//=> ['a', 'b.c.d', 'e']
```

**Brackets**

Also respects brackets [unless disabled](#optionsbrackets):

```js
split('a (b c d) e', ' ');
//=> ['a', '(b c d)', 'e']
```

## Options

### options.brackets

**Type**: `object|boolean`

**Default**: `undefined`

**Description**

If enabled, split-string will not split inside brackets. The following brackets types are supported when `options.brackets` is `true`,

```js
{
  '<': '>',
  '(': ')',
  '[': ']',
  '{': '}'
}
```

Or, if object of brackets must be passed, each property on the object must be a bracket type, where the property key is the opening delimiter and property value is the closing delimiter.

**Examples**

```js
// no bracket support by default
split('a.{b.c}');
//=> [ 'a', '{b', 'c}' ]

// support all basic bracket types: "<>{}[]()"
split('a.{b.c}', {brackets: true});
//=> [ 'a', '{b.c}' ]

// also supports nested brackets 
split('a.{b.{c.d}.e}.f', {brackets: true});
//=> [ 'a', '{b.{c.d}.e}', 'f' ]

// support only the specified brackets
split('[a.b].(c.d)', {brackets: {'[': ']'}});
//=> [ '[a.b]', '(c', 'd)' ]
```

### options.sep

**Type**: `string`

**Default**: `.`

The separator/character to split on.

**Example**

```js
split('a.b,c', {sep: ','});
//=> ['a.b', 'c']

// you can also pass the separator as string as the last argument
split('a.b,c', ',');
//=> ['a.b', 'c']
```

### options.keepEscaping

**Type**: `boolean`

**Default**: `undefined`

Keep backslashes in the result.

**Example**

```js
split('a.b\\.c');
//=> ['a', 'b.c']

split('a.b.\\c', {keepEscaping: true});
//=> ['a', 'b\.c']
```

### options.keepQuotes

**Type**: `boolean`

**Default**: `undefined`

Keep single- or double-quotes in the result.

**Example**

```js
split('a."b.c.d".e');
//=> ['a', 'b.c.d', 'e']

split('a."b.c.d".e', {keepQuotes: true});
//=> ['a', '"b.c.d"', 'e']

split('a.\'b.c.d\'.e', {keepQuotes: true});
//=> ['a', '\'b.c.d\'', 'e']
```

### options.keepDoubleQuotes

**Type**: `boolean`

**Default**: `undefined`

Keep double-quotes in the result.

**Example**

```js
split('a."b.c.d".e');
//=> ['a', 'b.c.d', 'e']

split('a."b.c.d".e', {keepDoubleQuotes: true});
//=> ['a', '"b.c.d"', 'e']
```

### options.keepSingleQuotes

**Type**: `boolean`

**Default**: `undefined`

Keep single-quotes in the result.

**Example**

```js
split('a.\'b.c.d\'.e');
//=> ['a', 'b.c.d', 'e']

split('a.\'b.c.d\'.e', {keepSingleQuotes: true});
//=> ['a', '\'b.c.d\'', 'e']
```

## Customizer

**Type**: `function`

**Default**: `undefined`

Pass a function as the last argument to customize how tokens are added to the array.

**Example**

```js
var arr = split('a.b', function(tok) {
  if (tok.arr[tok.arr.length - 1] === 'a') {
    tok.split = false;
  }
});
console.log(arr);
//=> ['a.b']
```

**Properties**

The `tok` object has the following properties:

* `tok.val` (string) The current value about to be pushed onto the result array
* `tok.idx` (number) the current index in the string
* `tok.str` (string) the entire string
* `tok.arr` (array) the result array

## Release history

### v3.0.0 - 2017-06-17

**Added**

* adds support for brackets

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

* [deromanize](https://www.npmjs.com/package/deromanize): Convert roman numerals to arabic numbers (useful for books, outlines, documentation, slide decks, etc) | [homepage](https://github.com/jonschlinkert/deromanize "Convert roman numerals to arabic numbers (useful for books, outlines, documentation, slide decks, etc)")
* [randomatic](https://www.npmjs.com/package/randomatic): Generate randomized strings of a specified length using simple character sequences. The original generate-password. | [homepage](https://github.com/jonschlinkert/randomatic "Generate randomized strings of a specified length using simple character sequences. The original generate-password.")
* [repeat-string](https://www.npmjs.com/package/repeat-string): Repeat the given string n times. Fastest implementation for repeating a string. | [homepage](https://github.com/jonschlinkert/repeat-string "Repeat the given string n times. Fastest implementation for repeating a string.")
* [romanize](https://www.npmjs.com/package/romanize): Convert numbers to roman numerals (useful for books, outlines, documentation, slide decks, etc) | [homepage](https://github.com/jonschlinkert/romanize "Convert numbers to roman numerals (useful for books, outlines, documentation, slide decks, etc)")

### Contributors

| **Commits** | **Contributor** | 
| --- | --- |
| 28 | [jonschlinkert](https://github.com/jonschlinkert) |
| 9 | [doowb](https://github.com/doowb) |

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2017, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on November 19, 2017._