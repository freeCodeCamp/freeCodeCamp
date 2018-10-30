[![NPM version](https://img.shields.io/npm/v/esprima.svg)](https://www.npmjs.com/package/esprima)
[![npm download](https://img.shields.io/npm/dm/esprima.svg)](https://www.npmjs.com/package/esprima)
[![Build Status](https://img.shields.io/travis/jquery/esprima/master.svg)](https://travis-ci.org/jquery/esprima)
[![Coverage Status](https://img.shields.io/codecov/c/github/jquery/esprima/master.svg)](https://codecov.io/github/jquery/esprima)

**Esprima** ([esprima.org](http://esprima.org), BSD license) is a high performance,
standard-compliant [ECMAScript](http://www.ecma-international.org/publications/standards/Ecma-262.htm)
parser written in ECMAScript (also popularly known as
[JavaScript](https://en.wikipedia.org/wiki/JavaScript)).
Esprima is created and maintained by [Ariya Hidayat](https://twitter.com/ariyahidayat),
with the help of [many contributors](https://github.com/jquery/esprima/contributors).

### Features

- Full support for ECMAScript 2016 ([ECMA-262 7th Edition](http://www.ecma-international.org/publications/standards/Ecma-262.htm))
- Sensible [syntax tree format](https://github.com/estree/estree/blob/master/es5.md) as standardized by [ESTree project](https://github.com/estree/estree)
- Experimental support for [JSX](https://facebook.github.io/jsx/), a syntax extension for [React](https://facebook.github.io/react/)
- Optional tracking of syntax node location (index-based and line-column)
- [Heavily tested](http://esprima.org/test/ci.html) (~1300 [unit tests](https://github.com/jquery/esprima/tree/master/test/fixtures) with [full code coverage](https://codecov.io/github/jquery/esprima))

### API

Esprima can be used to perform [lexical analysis](https://en.wikipedia.org/wiki/Lexical_analysis) (tokenization) or [syntactic analysis](https://en.wikipedia.org/wiki/Parsing) (parsing) of a JavaScript program.

A simple example on Node.js REPL:

```javascript
> var esprima = require('esprima');
> var program = 'const answer = 42';

> esprima.tokenize(program);
[ { type: 'Keyword', value: 'const' },
  { type: 'Identifier', value: 'answer' },
  { type: 'Punctuator', value: '=' },
  { type: 'Numeric', value: '42' } ]
  
> esprima.parse(program);
{ type: 'Program',
  body:
   [ { type: 'VariableDeclaration',
       declarations: [Object],
       kind: 'const' } ],
  sourceType: 'script' }
```
