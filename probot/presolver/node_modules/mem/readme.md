# mem [![Build Status](https://travis-ci.org/sindresorhus/mem.svg?branch=master)](https://travis-ci.org/sindresorhus/mem)

> [Memoize](https://en.wikipedia.org/wiki/Memoization) functions - An optimization used to speed up consecutive function calls by caching the result of calls with identical input


## Install

```
$ npm install --save mem
```


## Usage

```js
const mem = require('mem');

let i = 0;
const counter = () => ++i;
const memoized = mem(counter);

memoized('foo');
//=> 1

// cached as it's the same arguments
memoized('foo');
//=> 1

// not cached anymore as the arguments changed
memoized('bar');
//=> 2

memoized('bar');
//=> 2
```

##### Works fine with promise returning functions

```js
const mem = require('mem');

let i = 0;
const counter = () => Promise.resolve(++i);
const memoized = mem(counter);

memoized().then(a => {
	console.log(a);
	//=> 1

	memoized().then(b => {
		// the return value didn't increase as it's cached
		console.log(b);
		//=> 1
	});
});
```

```js
const mem = require('mem');
const got = require('got');
const memGot = mem(got, {maxAge: 1000});

memGot('sindresorhus.com').then(() => {
	// this call is cached
	memGot('sindresorhus.com').then(() => {
		setTimeout(() => {
			// this call is not cached as the cache has expired
			memGot('sindresorhus.com').then(() => {});
		}, 2000);
	});
});
```


## API

### mem(fn, [options])

#### fn

Type: `Function`

Function to be memoized.

#### options

##### maxAge

Type: `number`<br>
Default: `Infinity`

Milliseconds until the cache expires.

##### cacheKey

Type: `Function`

Determines the cache key for storing the result based on the function arguments. By default, if there's only one argument and it's a [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive), it's used directly as a key, otherwise it's all the function arguments JSON stringified as an array.

You could for example change it to only cache on the first argument `x => JSON.stringify(x)`.

##### cache

Type: `Object`<br>
Default: `new Map()`

Use a different cache storage. Must implement the following methods: `.has(key)`, `.get(key)`, `.set(key, value)`, and optionally `.clear()`. You could for example use a `WeakMap` instead.

### mem.clear(fn)

Clear all cached data of a memoized function.

#### fn

Type: `Function`

Memoized function.


## Tips

### Cache statistics

If you want to know how many times your cache had a hit or a miss, you can make use of [stats-map](https://github.com/SamVerschueren/stats-map) as a replacement for the default cache.

#### Example

```js
const mem = require('mem');
const StatsMap = require('stats-map');
const got = require('got');

const cache = new StatsMap();
const memGot = mem(got, {cache});

memGot('sindresorhus.com')
	.then(() => memGot('sindresorhus.com'))
	.then(() => memGot('sindresorhus.com'));

console.log(cache.stats);
//=> {hits: 2, misses: 1}
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
