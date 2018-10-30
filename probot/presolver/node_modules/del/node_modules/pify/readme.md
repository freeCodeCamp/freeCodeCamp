# pify [![Build Status](https://travis-ci.org/sindresorhus/pify.svg?branch=master)](https://travis-ci.org/sindresorhus/pify)

> Promisify a callback-style function


## Install

```
$ npm install --save pify
```


## Usage

```js
const fs = require('fs');
const pify = require('pify');

// promisify a single function

pify(fs.readFile)('package.json', 'utf8').then(data => {
	console.log(JSON.parse(data).name);
	//=> 'pify'
});

// or promisify all methods in a module

pify(fs).readFile('package.json', 'utf8').then(data => {
	console.log(JSON.parse(data).name);
	//=> 'pify'
});
```


## API

### pify(input, [promiseModule], [options])

Returns a promise wrapped version of the supplied function or module.

#### input

Type: `function`, `object`

Callback-style function or module whose methods you want to promisify.

#### promiseModule

Type: `function`

Custom promise module to use instead of the native one.

Check out [`pinkie-promise`](https://github.com/floatdrop/pinkie-promise) if you need a tiny promise polyfill.

#### options

##### multiArgs

Type: `boolean`  
Default: `false`

By default, the promisified function will only return the second argument from the callback, which works fine for most APIs. This option can be useful for modules like `request` that return multiple arguments. Turning this on will make it return an array of all arguments from the callback, excluding the error argument, instead of just the second argument.

```js
const request = require('request');
const pify = require('pify');

pify(request, {multiArgs: true})('https://sindresorhus.com').then(result => {
	const [httpResponse, body] = result;
});
```

##### include

Type: `array` of (`string`|`regex`)

Methods in a module to promisify. Remaining methods will be left untouched.

##### exclude

Type: `array` of (`string`|`regex`)  
Default: `[/.+Sync$/]`

Methods in a module **not** to promisify. Methods with names ending with `'Sync'` are excluded by default.

##### excludeMain

Type: `boolean`  
Default: `false`

By default, if given module is a function itself, this function will be promisified. Turn this option on if you want to promisify only methods of the module.

```js
const pify = require('pify');

function fn() {
	return true;
}

fn.method = (data, callback) => {
	setImmediate(() => {
		callback(data, null);
	});
};

// promisify methods but not fn()
const promiseFn = pify(fn, {excludeMain: true});

if (promiseFn()) {
	promiseFn.method('hi').then(data => {
		console.log(data);
	});
}
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
