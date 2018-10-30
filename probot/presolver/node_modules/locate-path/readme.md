# locate-path [![Build Status](https://travis-ci.org/sindresorhus/locate-path.svg?branch=master)](https://travis-ci.org/sindresorhus/locate-path)

> Get the first path that exists on disk of multiple paths


## Install

```
$ npm install --save locate-path
```


## Usage

Here we find the first file that exists on disk, in array order.

```js
const locatePath = require('locate-path');

const files = [
	'unicorn.png',
	'rainbow.png', // only this one actually exists on disk
	'pony.png'
];

locatePath(files).then(foundPath => {
	console.log(foundPath);
	//=> 'rainbow'
});
```


## API

### locatePath(input, [options])

Returns a `Promise` for the first path that exists or `undefined` if none exists.

#### input

Type: `Iterable<string>`

Paths to check.

#### options

Type: `Object`

##### concurrency

Type: `number`<br>
Default: `Infinity`<br>
Minimum: `1`

Number of concurrently pending promises.

##### preserveOrder

Type: `boolean`<br>
Default: `true`

Preserve `input` order when searching.

Disable this to improve performance if you don't care about the order.

##### cwd

Type: `string`<br>
Default: `process.cwd()`

Current working directory.

### locatePath.sync(input, [options])

Returns the first path that exists or `undefined` if none exists.

#### input

Type: `Iterable<string>`

Paths to check.

#### options

Type: `Object`

##### cwd

Same as above.


## Related

- [path-exists](https://github.com/sindresorhus/path-exists) - Check if a path exists


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
