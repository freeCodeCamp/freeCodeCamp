[![Npm Package](https://badgen.net/npm/v/jsdoc-type-pratt-parser)](https://www.npmjs.com/package/jsdoc-type-pratt-parser)
[![Test Status](https://github.com/jsdoc-type-pratt-parser/jsdoc-type-pratt-parser/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/jsdoc-type-pratt-parser/jsdoc-type-pratt-parser/actions?query=branch%3Amain)
[![Coverage Status](https://coveralls.io/repos/github/jsdoc-type-pratt-parser/jsdoc-type-pratt-parser/badge.svg?branch=main)](https://coveralls.io/github/jsdoc-type-pratt-parser/jsdoc-type-pratt-parser?branch=main)
[![Code Style](https://badgen.net/badge/code%20style/ts-standard/blue?icon=typescript)](https://github.com/standard/ts-standard)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# Jsdoc Type Pratt Parser

This project is a parser for jsdoc types. It takes jsdoc type expressions like `Array<string>` and creates an abstract
syntax tree (AST) out of it. It is heavily inspired by the existing libraries [catharsis](https://github.com/hegemonic/catharsis) and [jsdoctypeparser](https://github.com/jsdoctypeparser/jsdoctypeparser), but does
not use [PEG.js](https://pegjs.org/), instead it is written as a pratt parser.

You can find some more information about pratt parsers here:
* https://en.wikipedia.org/wiki/Operator-precedence_parser#Pratt_parsing
* http://journal.stuffwithstuff.com/2011/03/19/pratt-parsers-expression-parsing-made-easy/
* https://matklad.github.io/2020/04/13/simple-but-powerful-pratt-parsing.html

## Table of Contents
* [Live Demo](#live-demo)
* [Getting Started](#getting-started)
* [API Documentation](#api-documentation)
* [Available Grammars](#available-grammars)
* [Transforms](#transforms)
* [Traverse](#traverse)
* [Tests Status](#tests-status)
* [Performance](#performance)
* [Development](#development)

## Live Demo

A simple live demo to test expressions can be found at: https://jsdoc-type-pratt-parser.github.io/jsdoc-type-pratt-parser/

## Getting started

```
npm install jsdoc-type-pratt-parser@alpha
```

```js
import { parse } from 'jsdoc-type-pratt-parser'

const result = parse('SomeType<string>', 'typescript')
```

## API Documentation

An API documentation can be found [here](https://jsdoc-type-pratt-parser.github.io/jsdoc-type-pratt-parser/docs/).
It is incomplete, but a good starting point. Please create issues or PRs if you don't find what you expect.

## Available Grammars

Three different modes (grammars) are supported: `'jsdoc'`, `'closure'` and `'typescript'`

## Transforms

A common task to do on ASTs are transforms, for example a stringification. This library includes some transform and
utilities to implement your own.

[`stringify`](https://jsdoc-type-pratt-parser.github.io/jsdoc-type-pratt-parser/docs/index.html#stringify):

```js
import { stringify } from 'jsdoc-type-pratt-parser'

const val = stringify({ type: 'JsdocTypeName', value: 'name'}) // -> 'name'
```

You can customize the stringification by using [`stringifyRules`](https://jsdoc-type-pratt-parser.github.io/jsdoc-type-pratt-parser/docs/index.html#stringifyRules)
and [`transform`](https://jsdoc-type-pratt-parser.github.io/jsdoc-type-pratt-parser/docs/index.html#transform):

```js
import { stringifyRules, transform } from 'jsdoc-type-pratt-parser'

const rules = stringifyRules()

// `result` is the current node and `transform` is a function to transform child nodes.
rules.NAME = (result, transform) => 'something else'

const val = transform(rules, { type: 'JsdocTypeName', value: 'name'}) // -> 'something else'
```

You can also build your own transform rules by implementing the [`TransformRules<TransformResultType>`](https://jsdoc-type-pratt-parser.github.io/jsdoc-type-pratt-parser/docs/index.html#TransformRules) interface or you
can build upon the [identity ruleset](https://jsdoc-type-pratt-parser.github.io/jsdoc-type-pratt-parser/docs/index.html#identityTransformRules) like this:

```js
import { identityTransformRules, transform } from 'jsdoc-type-pratt-parser'

const myRules = identityTransformRules()
myRules.NAME = () => ({ type: 'JsdocTypeName', value: 'funky' })

const val = transform(myRules, result)
```

This library also supports compatibility modes for catharsis and jsdoctypeparser. The provided transform functions attempt to
 transform the output to the expected output of the target library. This will not always be the same as some types are
 parsed differently. These modes are thought to make transition easier, but it is advised to use the native output as
 this will be more uniform and will contain more information.
 
[Catharsis compat mode](https://jsdoc-type-pratt-parser.github.io/jsdoc-type-pratt-parser/docs/index.html#catharsisTransform):

```js
import { parse, catharsisTransform } from 'jsdoc-type-pratt-parser'

const result = catharsisTransform(parse('myType.<string>', 'closure'))
```

[Jsdoctypeparser compat mode](https://jsdoc-type-pratt-parser.github.io/jsdoc-type-pratt-parser/docs/index.html#jtpTransform):

```js
import { parse, jtpTransform } from 'jsdoc-type-pratt-parser'

const result = jtpTransform(parse('myType.<string>', 'closure'))
```

## Traverse

You can traverse an AST with the [`traverse`](https://jsdoc-type-pratt-parser.github.io/jsdoc-type-pratt-parser/docs/index.html#traverse) function:

```js
import { traverse } from 'jsdoc-type-pratt-parser'

// property is the name of the property on parent that contains node
function onEnter(node, parent, property) {
    console.log(node.type)
}

// an onEnter and/or an onLeave function can be supplied
traverse({ type: 'JsdocTypeName', value: 'name'}, onEnter, console.log)
```

## Tests Status

This parser runs most tests of [catharsis](https://github.com/hegemonic/catharsis) and
[jsdoctypeparser](https://github.com/jsdoctypeparser/jsdoctypeparser). It compares the results of the different parsing libraries. If you
want to find out where the output differs, look in the tests for the comments `// This seems to be an error of ...` or
the `differ` keyword which indicates that differing results are produced.

## Performance

A simple [performance comparison](benchmark/benchmark.js) using [Benchmark.js](https://benchmarkjs.com/) produced the following results:
```
Testing expression: Name
catharsis x 37,816 ops/sec ±1.22% (1086 runs sampled)
jsdoc-type-pratt-parser x 602,617 ops/sec ±0.16% (1090 runs sampled)
jsdoctypeparser x 53,256 ops/sec ±0.73% (1081 runs sampled)
The fastest was jsdoc-type-pratt-parser

Testing expression: Array<number>
catharsis x 10,124 ops/sec ±0.56% (1084 runs sampled)
jsdoc-type-pratt-parser x 228,660 ops/sec ±0.40% (1084 runs sampled)
jsdoctypeparser x 42,365 ops/sec ±0.60% (1070 runs sampled)
The fastest was jsdoc-type-pratt-parser

Testing expression: { keyA: Type<A | "string val" >, keyB: function(string, B): A }
catharsis x 1,138 ops/sec ±0.66% (1087 runs sampled)
jsdoc-type-pratt-parser x 46,535 ops/sec ±0.47% (1090 runs sampled)
jsdoctypeparser x 18,291 ops/sec ±0.71% (1084 runs sampled)
The fastest was jsdoc-type-pratt-parser
```

The benchmark test uses catharsis without cache.
 
## Development

If you want to contribute see the [Development Guide](DEVELOPMENT.md) to get some pointers. Feel free to create issues if
there is information missing.
