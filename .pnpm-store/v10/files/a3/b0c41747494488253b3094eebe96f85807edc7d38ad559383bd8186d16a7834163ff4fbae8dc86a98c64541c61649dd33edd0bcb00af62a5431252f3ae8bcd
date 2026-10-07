# create-hash

[![Build Status](https://travis-ci.org/crypto-browserify/createHash.svg)](https://travis-ci.org/crypto-browserify/createHash)

Node style hashes for use in the browser, with native hash functions in node.

API is the same as hashes in node:
```js
var createHash = require('create-hash')
var hash = createHash('sha224')
hash.update('synchronous write') // optional encoding parameter
hash.digest() // synchronously get result with optional encoding parameter

hash.write('write to it as a stream')
hash.end() // remember it's a stream
hash.read() // only if you ended it as a stream though
```

To get the JavaScript version even in node do `require('create-hash/browser')`
