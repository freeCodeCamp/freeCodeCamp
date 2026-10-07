# p-defer [![Build Status](https://travis-ci.org/sindresorhus/p-defer.svg?branch=master)](https://travis-ci.org/sindresorhus/p-defer)

> Create a deferred promise

[Don't use this unless you know what you're doing.](https://github.com/petkaantonov/bluebird/wiki/Promise-anti-patterns#the-deferred-anti-pattern) Prefer the `Promise` constructor.


## Install

```
$ npm install p-defer
```


## Usage

```js
const pDefer = require('p-defer');

function delay(ms) {
	const deferred = pDefer();
	setTimeout(deferred.resolve, ms, '🦄');
	return deferred.promise;
}

(async () => {
	console.log(await delay(100));
	//=> '🦄'
})();
```

*The above is just an example. Use [`delay`](https://github.com/sindresorhus/delay) if you need to delay a promise.*


## API

### pDefer()

Returns an `object` with a `promise` property and functions to `resolve()` and `reject()`.


## Related

- [p-lazy](https://github.com/sindresorhus/p-lazy) - Create a lazy promise that defers execution until `.then()` or `.catch()` is called
- [More…](https://github.com/sindresorhus/promise-fun)
