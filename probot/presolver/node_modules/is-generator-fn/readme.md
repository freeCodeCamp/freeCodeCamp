# is-generator-fn [![Build Status](https://travis-ci.org/sindresorhus/is-generator-fn.svg?branch=master)](https://travis-ci.org/sindresorhus/is-generator-fn)

> Check if something is a [generator function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)


## Install

```
$ npm install --save is-generator-fn
```


## Usage

```js
const isGeneratorFn = require('is-generator-fn');

isGeneratorFn(function * () {});
//=> true

isGeneratorFn(function () {});
//=> false
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
