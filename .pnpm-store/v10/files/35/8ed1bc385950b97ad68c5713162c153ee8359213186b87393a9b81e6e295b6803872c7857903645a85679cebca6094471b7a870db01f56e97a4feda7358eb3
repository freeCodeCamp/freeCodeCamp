# p-finally [![Build Status](https://travis-ci.org/sindresorhus/p-finally.svg?branch=master)](https://travis-ci.org/sindresorhus/p-finally)

> [`Promise#finally()`](https://github.com/tc39/proposal-promise-finally) [ponyfill](https://ponyfill.com) - Invoked when the promise is settled regardless of outcome

Useful for cleanup.


## Install

```
$ npm install --save p-finally
```


## Usage

```js
const pFinally = require('p-finally');

const dir = createTempDir();

pFinally(write(dir), () => cleanup(dir));
```


## API

### pFinally(promise, [onFinally])

Returns a `Promise`.

#### onFinally

Type: `Function`

Note: Throwing or returning a rejected promise will reject `promise` with the rejection reason.


## Related

- [p-try](https://github.com/sindresorhus/p-try) - `Promise#try()` ponyfill - Starts a promise chain
- [More…](https://github.com/sindresorhus/promise-fun)


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
