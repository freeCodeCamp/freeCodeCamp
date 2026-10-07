# pify [![Build Status](https://travis-ci.org/sindresorhus/pify.svg?branch=master)](https://travis-ci.org/sindresorhus/pify)

> Promisify a callback-style function

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-pify?utm_source=npm-pify&utm_medium=referral&utm_campaign=readme">Get professional support for 'pify' with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>

---


## Install

```
$ npm install pify
```


## Usage

```js
const fs = require('fs');
const pify = require('pify');

// Promisify a single function
pify(fs.readFile)('package.json', 'utf8').then(data => {
	console.log(JSON.parse(data).name);
	//=> 'pify'
});

// Promisify all methods in a module
pify(fs).readFile('package.json', 'utf8').then(data => {
	console.log(JSON.parse(data).name);
	//=> 'pify'
});
```


## API

### pify(input, [options])

Returns a `Promise` wrapped version of the supplied function or module.

#### input

Type: `Function` `Object`

Callback-style function or module whose methods you want to promisify.

#### options

##### multiArgs

Type: `boolean`<br>
Default: `false`

By default, the promisified function will only return the second argument from the callback, which works fine for most APIs. This option can be useful for modules like `request` that return multiple arguments. Turning this on will make it return an array of all arguments from the callback, excluding the error argument, instead of just the second argument. This also applies to rejections, where it returns an array of all the callback arguments, including the error.

```js
const request = require('request');
const pify = require('pify');

pify(request, {multiArgs: true})('https://sindresorhus.com').then(result => {
	const [httpResponse, body] = result;
});
```

##### include

Type: `string[]` `RegExp[]`

Methods in a module to promisify. Remaining methods will be left untouched.

##### exclude

Type: `string[]` `RegExp[]`<br>
Default: `[/.+(Sync|Stream)$/]`

Methods in a module **not** to promisify. Methods with names ending with `'Sync'` are excluded by default.

##### excludeMain

Type: `boolean`<br>
Default: `false`

If given module is a function itself, it will be promisified. Turn this option on if you want to promisify only methods of the module.

```js
const pify = require('pify');

function fn() {
	return true;
}

fn.method = (data, callback) => {
	setImmediate(() => {
		callback(null, data);
	});
};

// Promisify methods but not `fn()`
const promiseFn = pify(fn, {excludeMain: true});

if (promiseFn()) {
	promiseFn.method('hi').then(data => {
		console.log(data);
	});
}
```

##### errorFirst

Type: `boolean`<br>
Default: `true`

Whether the callback has an error as the first argument. You'll want to set this to `false` if you're dealing with an API that doesn't have an error as the first argument, like `fs.exists()`, some browser APIs, Chrome Extension APIs, etc.

##### promiseModule

Type: `Function`

Custom promise module to use instead of the native one.

Check out [`pinkie-promise`](https://github.com/floatdrop/pinkie-promise) if you need a tiny promise polyfill.


## Related

- [p-event](https://github.com/sindresorhus/p-event) - Promisify an event by waiting for it to be emitted
- [p-map](https://github.com/sindresorhus/p-map) - Map over promises concurrently
- [More…](https://github.com/sindresorhus/promise-fun)


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
