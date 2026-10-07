# comma-separated-tokens

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Parse and stringify comma-separated tokens according to the [spec][].

## Install

[npm][]:

```sh
npm install comma-separated-tokens
```

## Use

```js
var commaSeparated = require('comma-separated-tokens')

commaSeparated.parse(' a ,b,,d d ') //=> ['a', 'b', '', 'd d']
commaSeparated.stringify(['a', 'b', '', 'd d']) //=> 'a, b, , d d'
```

## API

### `commaSeparated.parse(value)`

Parse comma-separated tokens (`string`) to an array of strings, according
to the [spec][].

### `commaSeparated.stringify(values[, options])`

Compile an array of strings to comma-separated tokens (`string`).
Handles empty items at start or end correctly.
Note that it’s not possible to specify initial or final whitespace per value.

##### `options`

###### `options.padLeft`

Whether to pad a space before a token (`boolean`, default: `true`).

###### `options.padRight`

Whether to pad a space after a token (`boolean`, default: `false`).

## Related

*   [`collapse-white-space`](https://github.com/wooorm/collapse-white-space)
    — Replace multiple white-space characters with a single space
*   [`property-information`](https://github.com/wooorm/property-information)
    — Information on HTML properties
*   [`space-separated-tokens`](https://github.com/wooorm/space-separated-tokens)
    — Parse/stringify space-separated tokens

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/wooorm/comma-separated-tokens.svg

[build]: https://travis-ci.org/wooorm/comma-separated-tokens

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/comma-separated-tokens.svg

[coverage]: https://codecov.io/github/wooorm/comma-separated-tokens

[downloads-badge]: https://img.shields.io/npm/dm/comma-separated-tokens.svg

[downloads]: https://www.npmjs.com/package/comma-separated-tokens

[size-badge]: https://img.shields.io/bundlephobia/minzip/comma-separated-tokens.svg

[size]: https://bundlephobia.com/result?p=comma-separated-tokens

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[spec]: https://html.spec.whatwg.org/#comma-separated-tokens
