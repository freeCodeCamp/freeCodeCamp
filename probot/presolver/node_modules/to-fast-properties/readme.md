# to-fast-properties [![Build Status](https://travis-ci.org/sindresorhus/to-fast-properties.svg?branch=master)](https://travis-ci.org/sindresorhus/to-fast-properties)

> Force V8 to use fast properties for an object

[Read more.](http://stackoverflow.com/questions/24987896/)

Use `%HasFastProperties(object)` and `--allow-natives-syntax` to check whether an object already has fast properties.


## Install

```
$ npm install --save to-fast-properties
```


## Usage

```js
const toFastProperties = require('to-fast-properties');

const obj = {
	foo: true,
	bar: true
};

delete obj.foo;
// `obj` now has slow properties

toFastProperties(obj);
// `obj` now has fast properties
```


## License

MIT © Petka Antonov, Sindre Sorhus
