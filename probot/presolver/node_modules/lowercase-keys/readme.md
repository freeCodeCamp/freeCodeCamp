# lowercase-keys [![Build Status](https://travis-ci.org/sindresorhus/lowercase-keys.svg?branch=master)](https://travis-ci.org/sindresorhus/lowercase-keys)

> Lowercase the keys of an object


## Install

```
$ npm install --save lowercase-keys
```


## Usage

```js
var lowercaseKeys = require('lowercase-keys');

lowercaseKeys({FOO: true, bAr: false});
//=> {foo: true, bar: false}
```


## API

### lowercaseKeys(object)

Lowercases the keys and returns a new object.



## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
