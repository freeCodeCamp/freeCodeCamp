# snapdragon [![NPM version](https://img.shields.io/npm/v/snapdragon.svg?style=flat)](https://www.npmjs.com/package/snapdragon) [![NPM downloads](https://img.shields.io/npm/dm/snapdragon.svg?style=flat)](https://npmjs.org/package/snapdragon) [![Build Status](https://img.shields.io/travis/jonschlinkert/snapdragon.svg?style=flat)](https://travis-ci.org/jonschlinkert/snapdragon)

> Fast, pluggable and easy-to-use parser-renderer factory.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save snapdragon
```

Created by [jonschlinkert](https://github.com/jonschlinkert) and [doowb](https://github.com/doowb).

**Features**

* Bootstrap your own parser, get sourcemap support for free
* All parsing and compiling is handled by simple, reusable middleware functions
* Inspired by the parsers in [pug](http://jade-lang.com) and [css](https://github.com/reworkcss/css).

## History

### v0.5.0

**Breaking changes**

Substantial breaking changes were made in v0.5.0! Most of these changes are part of a larger refactor that will be finished in 0.6.0, including the introduction of a `Lexer` class.

* Renderer was renamed to `Compiler`
* the `.render` method was renamed to `.compile`
* Many other smaller changes. A more detailed overview will be provided in 0.6.0. If you don't have to time review code, I recommend you wait for the 0.6.0 release.

## Usage examples

```js
var Snapdragon = require('snapdragon');
var snapdragon = new Snapdragon();
```

**Parse**

```js
var ast = snapdragon.parser('some string', options)
  // parser middleware that can be called by other middleware
  .set('foo', function () {})
  // parser middleware, runs immediately in the order defined
  .use(bar())
  .use(baz())
```

**Render**

```js
// pass the `ast` from the parse method
var res = snapdragon.compiler(ast)
  // compiler middleware, called when the name of the middleware
  // matches the `node.type` (defined in a parser middleware)
  .set('bar', function () {})
  .set('baz', function () {})
  .compile()
```

See the [examples](./examples/).

## Getting started

**Parsers**

Parsers are middleware functions used for parsing a string into an ast node.

```js
var ast = snapdragon.parser(str, options)
  .use(function() {
    var pos = this.position();
    var m = this.match(/^\./);
    if (!m) return;
    return pos({
      // `type` specifies the compiler to use
      type: 'dot',
      val: m[0]
    });
  })
```

**AST node**

When the parser finds a match, `pos()` is called, pushing a token for that node onto the ast that looks something like:

```js
{ type: 'dot',
  val: '.',
  position:
   { start: { lineno: 1, column: 1 },
     end: { lineno: 1, column: 2 } }}
```

**Renderers**

Renderers are _named_ middleware functions that visit over an array of ast nodes to compile a string.

```js
var res = snapdragon.compiler(ast)
  .set('dot', function (node) {
    console.log(node.val)
    //=> '.'
    return this.emit(node.val);
  })
```

**Source maps**

If you want source map support, make sure to emit the position as well.

```js
var res = snapdragon.compiler(ast)
  .set('dot', function (node) {
    return this.emit(node.val, node.position);
  })
```

## Docs

### Parser middleware

A parser middleware is a function that returns an abject called a `token`. This token is pushed onto the AST as a node.

**Example token**

```js
{ type: 'dot',
  val: '.',
  position:
   { start: { lineno: 1, column: 1 },
     end: { lineno: 1, column: 2 } }}
```

**Example parser middleware**

Match a single `.` in a string:

1. Get the starting position by calling `this.position()`
2. pass a regex for matching a single dot to the `.match` method
3. if **no match** is found, return `undefined`
4. if a **match** is found, `pos()` is called, which returns a token with:
  - `type`: the name of the [compiler] to use
  - `val`: The actual value captured by the regex. In this case, a `.`. Note that you can capture and return whatever will be needed by the corresponding [compiler].
  - The ending position: automatically calculated by adding the length of the first capture group to the starting position.

## Renderer middleware

Renderers are run when the name of the compiler middleware matches the `type` defined on an ast `node` (which is defined in a parser).

**Example**

Exercise: Parse a dot, then compile it as an escaped dot.

```js
var ast = snapdragon.parser('.')
  .use(function () {
    var pos = this.position();
    var m = this.match(/^\./);
    if (!m) return;
    return pos({
      // define the `type` of compiler to use
      type: 'dot',
      val: m[0]
    })
  })

var result = snapdragon.compiler(ast)
  .set('dot', function (node) {
    return this.emit('\\' + node.val);
  })
  .compile()

console.log(result.output);
//=> '\.'
```

## API

### [Parser](lib/parser.js#L19)

Create a new `Parser` with the given `input` and `options`.

**Params**

* `input` **{String}**
* `options` **{Object}**

### [.define](lib/parser.js#L103)

Define a non-enumberable property on the `Parser` instance.

**Example**

```js
parser.define('foo', 'bar');
```

**Params**

* `key` **{String}**: propery name
* `val` **{any}**: property value
* `returns` **{Object}**: Returns the Parser instance for chaining.

Set parser `name` with the given `fn`

**Params**

* `name` **{String}**
* `fn` **{Function}**

Get parser `name`

**Params**

* `name` **{String}**

Push a `token` onto the `type` stack.

**Params**

* `type` **{String}**
* `returns` **{Object}** `token`

Pop a token off of the `type` stack

**Params**

* `type` **{String}**
* `returns` **{Object}**: Returns a token

Return true if inside a `stack` node. Types are `braces`, `parens` or `brackets`.

**Params**

* `type` **{String}**
* `returns` **{Boolean}**

**Example**

```js
parser.isType(node, 'brace');
```

**Params**

* `node` **{Object}**
* `type` **{String}**
* `returns` **{Boolean}**

### [.define](lib/compiler.js#L71)

Define a non-enumberable property on the `Compiler` instance.

**Example**

```js
compiler.define('foo', 'bar');
```

**Params**

* `key` **{String}**: propery name
* `val` **{any}**: property value
* `returns` **{Object}**: Returns the Compiler instance for chaining.

## About

### Related projects

* [braces](https://www.npmjs.com/package/braces): Fastest brace expansion for node.js, with the most complete support for the Bash 4.3 braces… [more](https://github.com/jonschlinkert/braces) | [homepage](https://github.com/jonschlinkert/braces "Fastest brace expansion for node.js, with the most complete support for the Bash 4.3 braces specification.")
* [expand-brackets](https://www.npmjs.com/package/expand-brackets): Expand POSIX bracket expressions (character classes) in glob patterns. | [homepage](https://github.com/jonschlinkert/expand-brackets "Expand POSIX bracket expressions (character classes) in glob patterns.")
* [extglob](https://www.npmjs.com/package/extglob): Convert extended globs to regex-compatible strings. Add (almost) the expressive power of regular expressions to… [more](https://github.com/jonschlinkert/extglob) | [homepage](https://github.com/jonschlinkert/extglob "Convert extended globs to regex-compatible strings. Add (almost) the expressive power of regular expressions to glob patterns.")
* [micromatch](https://www.npmjs.com/package/micromatch): Glob matching for javascript/node.js. A drop-in replacement and faster alternative to minimatch and multimatch. | [homepage](https://github.com/jonschlinkert/micromatch "Glob matching for javascript/node.js. A drop-in replacement and faster alternative to minimatch and multimatch.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Contributors

| **Commits** | **Contributor**<br/> | 
| --- | --- |
| 106 | [jonschlinkert](https://github.com/jonschlinkert) |
| 2 | [doowb](https://github.com/doowb) |

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
Released under the [MIT license](https://github.com/jonschlinkert/snapdragon/blob/master/LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.1.31, on October 10, 2016._