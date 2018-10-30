# p-locate [![Build Status](https://travis-ci.org/sindresorhus/p-locate.svg?branch=master)](https://travis-ci.org/sindresorhus/p-locate)

> Get the first fulfilled promise that satisfies the provided testing function

Think of it like an async version of [`Array#find`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/find).


## Install

```
$ npm install --save p-locate
```


## Usage

Here we find the first file that exists on disk, in array order.

```js
const pathExists = require('path-exists');
const pLocate = require('p-locate');

const files = [
	'unicorn.png',
	'rainbow.png', // only this one actually exists on disk
	'pony.png'
];

pLocate(files, file => pathExists(file)).then(foundPath => {
	console.log(foundPath);
	//=> 'rainbow'
});
```

*The above is just an example. Use [`locate-path`](https://github.com/sindresorhus/locate-path) if you need this.*


## API

### pLocate(input, tester, [options])

Returns a `Promise` that is fulfilled when `tester` resolves to `true` or the iterable is done, or rejects if any of the promises reject. The fulfilled value is the current iterable value or `undefined` if `tester` never resolved to `true`.

#### input

Type: `Iterable<Promise|any>`

#### tester(element)

Type: `Function`

Expected to return a `Promise<boolean>` or boolean.

#### options

Type: `Object`

##### concurrency

Type: `number`<br>
Default: `Infinity`<br>
Minimum: `1`

Number of concurrently pending promises returned by `tester`.

##### preserveOrder

Type: `boolean`<br>
Default: `true`

Preserve `input` order when searching.

Disable this to improve performance if you don't care about the order.


## Related

- [p-map](https://github.com/sindresorhus/p-map) - Map over promises concurrently
- [p-filter](https://github.com/sindresorhus/p-filter) - Filter promises concurrently
- [p-any](https://github.com/sindresorhus/p-any) - Wait for any promise to be fulfilled
- [More…](https://github.com/sindresorhus/promise-fun)


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
