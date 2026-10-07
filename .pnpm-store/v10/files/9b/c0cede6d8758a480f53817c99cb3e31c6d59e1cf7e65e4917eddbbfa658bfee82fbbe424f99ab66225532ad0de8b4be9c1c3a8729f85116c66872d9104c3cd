# unherit

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Create a custom constructor which can be modified without affecting the original
class.

## Install

[npm][]:

```sh
npm install unherit
```

## Use

```js
var EventEmitter = require('events').EventEmitter
var unherit = require('unherit')

// Create a private class which acts just like `EventEmitter`.
var Emitter = unherit(EventEmitter)

Emitter.prototype.defaultMaxListeners = 0
// Now, all instances of `Emitter` have no maximum listeners, without affecting
// other `EventEmitter`s.

new Emitter().defaultMaxListeners === 0 // => true
new EventEmitter().defaultMaxListeners === undefined // => true
new Emitter() instanceof EventEmitter // => true
```

## API

### `unherit(Super)`

Create a custom constructor which can be modified without affecting the original
class.

###### Parameters

*   `Super` (`Function`) — Super-class

###### Returns

`Function` — Constructor acting like `Super`, which can be modified without
affecting the original class.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/wooorm/unherit.svg

[build]: https://travis-ci.org/wooorm/unherit

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/unherit.svg

[coverage]: https://codecov.io/github/wooorm/unherit

[downloads-badge]: https://img.shields.io/npm/dm/unherit.svg

[downloads]: https://www.npmjs.com/package/unherit

[size-badge]: https://img.shields.io/bundlephobia/minzip/unherit.svg

[size]: https://bundlephobia.com/result?p=unherit

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com
