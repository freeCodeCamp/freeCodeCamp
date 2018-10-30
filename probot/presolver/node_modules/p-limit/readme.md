# p-limit [![Build Status](https://travis-ci.org/sindresorhus/p-limit.svg?branch=master)](https://travis-ci.org/sindresorhus/p-limit)

> Run multiple promise-returning & async functions with limited concurrency


## Install

```
$ npm install p-limit
```


## Usage

```js
const pLimit = require('p-limit');

const limit = pLimit(1);

const input = [
	limit(() => fetchSomething('foo')),
	limit(() => fetchSomething('bar')),
	limit(() => doSomething())
];

(async () => {
	// Only one promise is run at once
	const result = await Promise.all(input);
	console.log(result);
})();
```


## API

### pLimit(concurrency)

Returns a `limit` function.

#### concurrency

Type: `number`<br>
Minimum: `1`

Concurrency limit.

### limit(fn)

Returns the promise returned by calling `fn`.

#### fn

Type: `Function`

Promise-returning/async function.


## Related

- [p-queue](https://github.com/sindresorhus/p-queue) - Promise queue with concurrency control
- [p-throttle](https://github.com/sindresorhus/p-throttle) - Throttle promise-returning & async functions
- [p-debounce](https://github.com/sindresorhus/p-debounce) - Debounce promise-returning & async functions
- [p-all](https://github.com/sindresorhus/p-all) - Run promise-returning & async functions concurrently with optional limited concurrency
- [More…](https://github.com/sindresorhus/promise-fun)


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
