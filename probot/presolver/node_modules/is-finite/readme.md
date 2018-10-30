# is-finite [![Build Status](https://travis-ci.org/sindresorhus/is-finite.svg?branch=master)](https://travis-ci.org/sindresorhus/is-finite)

> ES2015 [`Number.isFinite()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite) [ponyfill](https://ponyfill.com)


## Install

```sh
$ npm install --save is-finite
```


## Usage

```js
var numIsFinite = require('is-finite');

numIsFinite(4);
//=> true

numIsFinite(Infinity);
//=> false
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
