# ripemd160

[![NPM Package](https://img.shields.io/npm/v/ripemd160.svg?style=flat-square)](https://www.npmjs.org/package/ripemd160)
[![Build Status](https://img.shields.io/travis/crypto-browserify/ripemd160.svg?branch=master&style=flat-square)](https://travis-ci.org/crypto-browserify/ripemd160)
[![Dependency status](https://img.shields.io/david/crypto-browserify/ripemd160.svg?style=flat-square)](https://david-dm.org/crypto-browserify/ripemd160#info=dependencies)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

Node style `ripemd160` on pure JavaScript.

## Example

```js
var RIPEMD160 = require('ripemd160')

console.log(new RIPEMD160().update('42').digest('hex'))
// => 0df020ba32aa9b8b904471ff582ce6b579bf8bc8

var ripemd160stream = new RIPEMD160()
ripemd160stream.end('42')
console.log(ripemd160stream.read().toString('hex'))
// => 0df020ba32aa9b8b904471ff582ce6b579bf8bc8
```

## LICENSE

MIT
