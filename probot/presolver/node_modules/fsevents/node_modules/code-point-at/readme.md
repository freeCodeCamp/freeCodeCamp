# code-point-at [![Build Status](https://travis-ci.org/sindresorhus/code-point-at.svg?branch=master)](https://travis-ci.org/sindresorhus/code-point-at)

> ES2015 [`String#codePointAt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt) [ponyfill](https://ponyfill.com)


## Install

```
$ npm install --save code-point-at
```


## Usage

```js
var codePointAt = require('code-point-at');

codePointAt('🐴');
//=> 128052

codePointAt('abc', 2);
//=> 99
```

## API

### codePointAt(input, [position])


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
