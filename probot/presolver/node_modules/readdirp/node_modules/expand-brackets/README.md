# expand-brackets [![NPM version](https://img.shields.io/npm/v/expand-brackets.svg?style=flat)](https://www.npmjs.com/package/expand-brackets) [![NPM monthly downloads](https://img.shields.io/npm/dm/expand-brackets.svg?style=flat)](https://npmjs.org/package/expand-brackets)  [![NPM total downloads](https://img.shields.io/npm/dt/expand-brackets.svg?style=flat)](https://npmjs.org/package/expand-brackets) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/expand-brackets.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/expand-brackets) [![Windows Build Status](https://img.shields.io/appveyor/ci/jonschlinkert/expand-brackets.svg?style=flat&label=AppVeyor)](https://ci.appveyor.com/project/jonschlinkert/expand-brackets)

> Expand POSIX bracket expressions (character classes) in glob patterns.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save expand-brackets
```

## Usage

```js
var brackets = require('expand-brackets');
brackets(string[, options]);
```

**Params**

The main export is a function that takes the following parameters:

* `pattern` **{String}**: the pattern to convert
* `options` **{Object}**: optionally supply an options object
* `returns` **{String}**: returns a string that can be used to create a regex

**Example**

```js
console.log(brackets('[![:lower:]]'));
//=> '[^a-z]'
```

## API

### [brackets](index.js#L29)

Parses the given POSIX character class `pattern` and returns a
string that can be used for creating regular expressions for matching.

**Params**

* `pattern` **{String}**
* `options` **{Object}**
* `returns` **{Object}**

### [.match](index.js#L54)

Takes an array of strings and a POSIX character class pattern, and returns a new array with only the strings that matched the pattern.

**Example**

```js
var brackets = require('expand-brackets');
console.log(brackets.match(['1', 'a', 'ab'], '[[:alpha:]]'));
//=> ['a']

console.log(brackets.match(['1', 'a', 'ab'], '[[:alpha:]]+'));
//=> ['a', 'ab']
```

**Params**

* `arr` **{Array}**: Array of strings to match
* `pattern` **{String}**: POSIX character class pattern(s)
* `options` **{Object}**
* `returns` **{Array}**

### [.isMatch](index.js#L100)

Returns true if the specified `string` matches the given brackets `pattern`.

**Example**

```js
var brackets = require('expand-brackets');

console.log(brackets.isMatch('a.a', '[[:alpha:]].[[:alpha:]]'));
//=> true
console.log(brackets.isMatch('1.2', '[[:alpha:]].[[:alpha:]]'));
//=> false
```

**Params**

* `string` **{String}**: String to match
* `pattern` **{String}**: Poxis pattern
* `options` **{String}**
* `returns` **{Boolean}**

### [.matcher](index.js#L123)

Takes a POSIX character class pattern and returns a matcher function. The returned function takes the string to match as its only argument.

**Example**

```js
var brackets = require('expand-brackets');
var isMatch = brackets.matcher('[[:lower:]].[[:upper:]]');

console.log(isMatch('a.a'));
//=> false
console.log(isMatch('a.A'));
//=> true
```

**Params**

* `pattern` **{String}**: Poxis pattern
* `options` **{String}**
* `returns` **{Boolean}**

### [.makeRe](index.js#L145)

Create a regular expression from the given `pattern`.

**Example**

```js
var brackets = require('expand-brackets');
var re = brackets.makeRe('[[:alpha:]]');
console.log(re);
//=> /^(?:[a-zA-Z])$/
```

**Params**

* `pattern` **{String}**: The pattern to convert to regex.
* `options` **{Object}**
* `returns` **{RegExp}**

### [.create](index.js#L187)

Parses the given POSIX character class `pattern` and returns an object with the compiled `output` and optional source `map`.

**Example**

```js
var brackets = require('expand-brackets');
console.log(brackets('[[:alpha:]]'));
// { options: { source: 'string' },
//   input: '[[:alpha:]]',
//   state: {},
//   compilers:
//    { eos: [Function],
//      noop: [Function],
//      bos: [Function],
//      not: [Function],
//      escape: [Function],
//      text: [Function],
//      posix: [Function],
//      bracket: [Function],
//      'bracket.open': [Function],
//      'bracket.inner': [Function],
//      'bracket.literal': [Function],
//      'bracket.close': [Function] },
//   output: '[a-zA-Z]',
//   ast:
//    { type: 'root',
//      errors: [],
//      nodes: [ [Object], [Object], [Object] ] },
//   parsingErrors: [] }
```

**Params**

* `pattern` **{String}**
* `options` **{Object}**
* `returns` **{Object}**

## Options

### options.sourcemap

Generate a source map for the given pattern.

**Example**

```js
var res = brackets('[:alpha:]', {sourcemap: true});

console.log(res.map);
// { version: 3,
//   sources: [ 'brackets' ],
//   names: [],
//   mappings: 'AAAA,MAAS',
//   sourcesContent: [ '[:alpha:]' ] }
```

### POSIX Character classes

The following named POSIX bracket expressions are supported:

* `[:alnum:]`: Alphanumeric characters (`a-zA-Z0-9]`)
* `[:alpha:]`: Alphabetic characters (`a-zA-Z]`)
* `[:blank:]`: Space and tab (`[ t]`)
* `[:digit:]`: Digits (`[0-9]`)
* `[:lower:]`: Lowercase letters (`[a-z]`)
* `[:punct:]`: Punctuation and symbols. (`[!"#$%&'()*+, -./:;<=>?@ [\]^_``{|}~]`)
* `[:upper:]`: Uppercase letters (`[A-Z]`)
* `[:word:]`: Word characters (letters, numbers and underscores) (`[A-Za-z0-9_]`)
* `[:xdigit:]`: Hexadecimal digits (`[A-Fa-f0-9]`)

See [posix-character-classes](https://github.com/jonschlinkert/posix-character-classes) for more details.

**Not supported**

* [equivalence classes](https://www.gnu.org/software/gawk/manual/html_node/Bracket-Expressions.html) are not supported
* [POSIX.2 collating symbols](https://www.gnu.org/software/gawk/manual/html_node/Bracket-Expressions.html) are not supported

## Changelog

### v2.0.0

**Breaking changes**

* The main export now returns the compiled string, instead of the object returned from the compiler

**Added features**

* Adds a `.create` method to do what the main function did before v2.0.0

### v0.2.0

In addition to performance and matching improvements, the v0.2.0 refactor adds complete POSIX character class support, with the exception of equivalence classes and POSIX.2 collating symbols which are not relevant to node.js usage.

**Added features**

* parser is exposed, so that expand-brackets parsers can be used by upstream parsers (like [micromatch](https://github.com/jonschlinkert/micromatch))
* compiler is exposed, so that expand-brackets compilers can be used by upstream compilers
* source maps

**source map example**

```js
var brackets = require('expand-brackets');
var res = brackets('[:alpha:]');
console.log(res.map);

{ version: 3,
     sources: [ 'brackets' ],
     names: [],
     mappings: 'AAAA,MAAS',
     sourcesContent: [ '[:alpha:]' ] }
```

## About

### Related projects

* [braces](https://www.npmjs.com/package/braces): Fast, comprehensive, bash-like brace expansion implemented in JavaScript. Complete support for the Bash 4.3 braces… [more](https://github.com/jonschlinkert/braces) | [homepage](https://github.com/jonschlinkert/braces "Fast, comprehensive, bash-like brace expansion implemented in JavaScript. Complete support for the Bash 4.3 braces specification, without sacrificing speed.")
* [extglob](https://www.npmjs.com/package/extglob): Extended glob support for JavaScript. Adds (almost) the expressive power of regular expressions to glob… [more](https://github.com/jonschlinkert/extglob) | [homepage](https://github.com/jonschlinkert/extglob "Extended glob support for JavaScript. Adds (almost) the expressive power of regular expressions to glob patterns.")
* [micromatch](https://www.npmjs.com/package/micromatch): Glob matching for javascript/node.js. A drop-in replacement and faster alternative to minimatch and multimatch. | [homepage](https://github.com/jonschlinkert/micromatch "Glob matching for javascript/node.js. A drop-in replacement and faster alternative to minimatch and multimatch.")
* [nanomatch](https://www.npmjs.com/package/nanomatch): Fast, minimal glob matcher for node.js. Similar to micromatch, minimatch and multimatch, but complete Bash… [more](https://github.com/jonschlinkert/nanomatch) | [homepage](https://github.com/jonschlinkert/nanomatch "Fast, minimal glob matcher for node.js. Similar to micromatch, minimatch and multimatch, but complete Bash 4.3 wildcard support only (no support for exglobs, posix brackets or braces)")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Contributors

| **Commits** | **Contributor**<br/> | 
| --- | --- |
| 66 | [jonschlinkert](https://github.com/jonschlinkert) |
| 2 | [MartinKolarik](https://github.com/MartinKolarik) |
| 2 | [es128](https://github.com/es128) |
| 1 | [eush77](https://github.com/eush77) |

### Building docs

_(This document was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme) (a [verb](https://github.com/verbose/verb) generator), please don't edit the readme directly. Any changes to the readme must be made in [.verb.md](.verb.md).)_

To generate the readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install -g verb verb-generate-readme && verb
```

### Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

### License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/jonschlinkert/expand-brackets/blob/master/LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.2.0, on December 12, 2016._