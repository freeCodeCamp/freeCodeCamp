# p-try [![Build Status](https://travis-ci.org/sindresorhus/p-try.svg?branch=master)](https://travis-ci.org/sindresorhus/p-try)

> Start a promise chain

[How is it useful?](http://cryto.net/~joepie91/blog/2016/05/11/what-is-promise-try-and-why-does-it-matter/)


## Install

```
$ npm install p-try
```


## Usage

```js
const pTry = require('p-try');

(async () => {
	try {
		const value = await pTry(() => {
			return synchronousFunctionThatMightThrow();
		});
		console.log(value);
	} catch (error) {
		console.error(error);
	}
})();
```


## API

### pTry(fn, ...arguments)

Returns a `Promise` resolved with the value of calling `fn(...arguments)`. If the function throws an error, the returned `Promise` will be rejected with that error.

Support for passing arguments on to the `fn` is provided in order to be able to avoid creating unnecessary closures. You probably don't need this optimization unless you're pushing a *lot* of functions.

#### fn

The function to run to start the promise chain.

#### arguments

Arguments to pass to `fn`.


## Related

- [p-finally](https://github.com/sindresorhus/p-finally) - `Promise#finally()` ponyfill - Invoked when the promise is settled regardless of outcome
- [More…](https://github.com/sindresorhus/promise-fun)


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
