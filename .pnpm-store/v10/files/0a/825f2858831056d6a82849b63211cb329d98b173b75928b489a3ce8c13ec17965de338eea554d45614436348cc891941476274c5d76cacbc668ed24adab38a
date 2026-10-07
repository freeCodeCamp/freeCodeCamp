# array-iterate

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

[`Array#forEach()`][foreach] with the possibility to change the next position.

## Install

[npm][]:

```sh
npm install array-iterate
```

## Use

```js
var iterate = require('array-iterate')

var isFirst = true
var context = {hello: 'world'}

iterate([1, 2, 3, 4], callback, context)

function callback(value, index, values) {
  console.log(this, value, index, values)

  if (isFirst && index + 1 === values.length) {
    isFirst = false
    return 0
  }
}
```

Yields:

```js
{hello: 'world'}, 1, 0, [1, 2, 3, 4]
{hello: 'world'}, 2, 1, [1, 2, 3, 4]
{hello: 'world'}, 3, 2, [1, 2, 3, 4]
{hello: 'world'}, 4, 3, [1, 2, 3, 4]
{hello: 'world'}, 1, 0, [1, 2, 3, 4]
{hello: 'world'}, 2, 1, [1, 2, 3, 4]
{hello: 'world'}, 3, 2, [1, 2, 3, 4]
{hello: 'world'}, 4, 3, [1, 2, 3, 4]
```

## API

### `iterate(values, callback[, context])`

Works just like [`Array#forEach()`][foreach], but when `callback` returns a
`number`, iterates over the item at `number` next.

###### Parameters

*   `values` (`Array`-like thing) — Values to iterate over
*   `callback` ([`Function`][callback]) — Callback given to `iterate`
*   `context` (`*`, optional) — Context object to use when invoking `callback`

#### `function callback(value, index, values)`

Callback given to `iterate`.

###### Parameters

*   `value` (`*`) — Current iteration
*   `index` (`number`) — Position of `value` in `values`
*   `values` (`Array`-like thing) — Currently iterated over

###### Context

`context`, when given to `iterate`.

###### Returns

`number` (optional) — Position to go to next.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/wooorm/array-iterate.svg

[build]: https://travis-ci.org/wooorm/array-iterate

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/array-iterate.svg

[coverage]: https://codecov.io/github/wooorm/array-iterate

[downloads-badge]: https://img.shields.io/npm/dm/array-iterate.svg

[downloads]: https://www.npmjs.com/package/array-iterate

[size-badge]: https://img.shields.io/bundlephobia/minzip/array-iterate.svg

[size]: https://bundlephobia.com/result?p=array-iterate

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[foreach]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

[callback]: #function-callbackvalue-index-values
