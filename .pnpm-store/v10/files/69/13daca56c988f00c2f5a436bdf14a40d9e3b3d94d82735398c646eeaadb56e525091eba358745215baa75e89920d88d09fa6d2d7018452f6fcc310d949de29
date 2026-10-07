# toidentifier

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][github-actions-ci-image]][github-actions-ci-url]
[![Test Coverage][codecov-image]][codecov-url]

> Convert a string of words to a JavaScript identifier

## Install

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install toidentifier
```

## Example

```js
var toIdentifier = require('toidentifier')

console.log(toIdentifier('Bad Request'))
// => "BadRequest"
```

## API

This CommonJS module exports a single default function: `toIdentifier`.

### toIdentifier(string)

Given a string as the argument, it will be transformed according to
the following rules and the new string will be returned:

1. Split into words separated by space characters (`0x20`).
2. Upper case the first character of each word.
3. Join the words together with no separator.
4. Remove all non-word (`[0-9a-z_]`) characters.

## License

[MIT](LICENSE)

[codecov-image]: https://img.shields.io/codecov/c/github/component/toidentifier.svg
[codecov-url]: https://codecov.io/gh/component/toidentifier
[downloads-image]: https://img.shields.io/npm/dm/toidentifier.svg
[downloads-url]: https://npmjs.org/package/toidentifier
[github-actions-ci-image]: https://img.shields.io/github/workflow/status/component/toidentifier/ci/master?label=ci
[github-actions-ci-url]: https://github.com/component/toidentifier?query=workflow%3Aci
[npm-image]: https://img.shields.io/npm/v/toidentifier.svg
[npm-url]: https://npmjs.org/package/toidentifier


##

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/
