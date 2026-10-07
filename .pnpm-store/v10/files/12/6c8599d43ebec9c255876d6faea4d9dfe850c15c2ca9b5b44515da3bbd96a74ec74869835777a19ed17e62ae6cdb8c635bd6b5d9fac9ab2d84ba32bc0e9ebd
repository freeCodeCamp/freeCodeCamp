# regjsgen [![Build status][ci-img]][ci] [![Code coverage status][codecov-img]][codecov]

> This is a fork of [bnjmnt4n/regjsgen](https://github.com/bnjmnt4n/regjsgen) with some additional patches. The end goal is to merge these patches upstream.
> - [be866435](https://github.com/babel/regjsgen/commit/be86643508658c70ccb5bec8bc4e3dc2479cac62) _feat: support modifiers proposal_ ([bnjmnt4n/regjsgen#28](https://github.com/bnjmnt4n/regjsgen/pull/28))

Generate regular expressions from [regjsparser][regjsparser]’s AST.

## Installation

```sh
npm i regjsgen
```

## API

### `regjsgen.generate(ast)`

This function accepts an abstract syntax tree representing a regular expression (see [regjsparser][regjsparser]), and returns the generated regular expression string.

```js
const regjsparser = require('regjsparser');
const regjsgen = require('regjsgen');

// Generate an AST with `regjsparser`.
let ast = regjsparser.parse(regex);

// Modify AST
// …

// Generate `RegExp` string with `regjsgen`.
let regex = regjsgen.generate(ast);
```

## Support

Tested in Node.js 10, 12, 14, and 16.<br>
Compatible with regjsparser v0.7.0’s AST.


[ci]: https://github.com/bnjmnt4n/regjsgen/actions
[ci-img]: https://github.com/bnjmnt4n/regjsgen/workflows/Node.js%20CI/badge.svg
[codecov]: https://codecov.io/gh/bnjmnt4n/regjsgen
[codecov-img]: https://codecov.io/gh/bnjmnt4n/regjsgen/branch/master/graph/badge.svg
[regjsparser]: https://github.com/jviereck/regjsparser
