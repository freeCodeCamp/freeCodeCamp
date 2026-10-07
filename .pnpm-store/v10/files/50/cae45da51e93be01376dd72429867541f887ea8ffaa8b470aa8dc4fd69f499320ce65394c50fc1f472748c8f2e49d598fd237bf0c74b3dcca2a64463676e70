# create-hmac

[![NPM Package](https://img.shields.io/npm/v/create-hmac.svg?style=flat-square)](https://www.npmjs.org/package/create-hmac)
[![Build Status](https://img.shields.io/travis/crypto-browserify/createHmac.svg?branch=master&style=flat-square)](https://travis-ci.org/crypto-browserify/createHmac)
[![Dependency status](https://img.shields.io/david/crypto-browserify/createHmac.svg?style=flat-square)](https://david-dm.org/crypto-browserify/createHmac#info=dependencies)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

Node style HMACs for use in the browser, with native HMAC functions in node. API is the same as HMACs in node:

```js
var createHmac = require('create-hmac')
var hmac = createHmac('sha224', Buffer.from('secret key'))
hmac.update('synchronous write') //optional encoding parameter
hmac.digest() // synchronously get result with optional encoding parameter

hmac.write('write to it as a stream')
hmac.end() //remember it's a stream
hmac.read() //only if you ended it as a stream though
```
