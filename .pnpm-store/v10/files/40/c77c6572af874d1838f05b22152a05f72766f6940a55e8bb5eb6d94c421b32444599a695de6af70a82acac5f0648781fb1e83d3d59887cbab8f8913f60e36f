# space-separated-tokens

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Parse and stringify space-separated tokens according to the [spec][].

## Install

[npm][]:

```sh
npm install space-separated-tokens
```

## Usage

```js
var spaceSeparated = require('space-separated-tokens')

spaceSeparated.parse(' foo\tbar\nbaz  ')
//=> ['foo', 'bar', 'baz']

spaceSeparated.stringify(['foo', 'bar', 'baz'])
//=> 'foo bar baz'
```

## API

### `spaceSeparated.parse(value)`

Parse space-separated tokens to an array of strings, according to the [spec][].

###### Parameters

*   `value` (`string`) — space-separated tokens

###### Returns

`Array.<string>` — List of tokens.

### `spaceSeparated.stringify(values)`

Serialize an array of strings to space-separated tokens.
Note that it’s not possible to specify empty or whitespace only values.

###### Parameters

*   `values` (`Array.<string>`) — List of tokens

###### Returns

`string` — Space-separated tokens.

## Related

*   [`collapse-white-space`](https://github.com/wooorm/collapse-white-space)
    — Replace multiple white-space characters with a single space
*   [`property-information`](https://github.com/wooorm/property-information)
    — Information on HTML properties
*   [`comma-separated-tokens`](https://github.com/wooorm/comma-separated-tokens)
    — Parse/stringify comma-separated tokens

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/wooorm/space-separated-tokens.svg

[build]: https://travis-ci.org/wooorm/space-separated-tokens

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/space-separated-tokens.svg

[coverage]: https://codecov.io/github/wooorm/space-separated-tokens

[downloads-badge]: https://img.shields.io/npm/dm/space-separated-tokens.svg

[downloads]: https://www.npmjs.com/package/space-separated-tokens

[size-badge]: https://img.shields.io/bundlephobia/minzip/space-separated-tokens.svg

[size]: https://bundlephobia.com/result?p=space-separated-tokens

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[spec]: https://html.spec.whatwg.org/#space-separated-tokens
