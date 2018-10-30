# is-obj [![Build Status](https://travis-ci.org/sindresorhus/is-obj.svg?branch=master)](https://travis-ci.org/sindresorhus/is-obj)

> Check if a value is an object

Keep in mind that array, function, regexp, etc, are objects in JavaScript.<br>
See [`is-plain-obj`](https://github.com/sindresorhus/is-plain-obj) if you want to check for plain objects.


## Install

```
$ npm install --save is-obj
```


## Usage

```js
const isObj = require('is-obj');

isObj({foo: 'bar'});
//=> true

isObj([1, 2, 3]);
//=> true

isObj('foo');
//=> false
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
