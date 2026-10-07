# md5.js

[![NPM Package](https://img.shields.io/npm/v/md5.js.svg?style=flat-square)](https://www.npmjs.org/package/md5.js)
[![Build Status](https://img.shields.io/travis/crypto-browserify/md5.js.svg?branch=master&style=flat-square)](https://travis-ci.org/crypto-browserify/md5.js)
[![Dependency status](https://img.shields.io/david/crypto-browserify/md5.js.svg?style=flat-square)](https://david-dm.org/crypto-browserify/md5.js#info=dependencies)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

Node style `md5` on pure JavaScript.

From [NIST SP 800-131A][1]: *md5 is no longer acceptable where collision resistance is required such as digital signatures.*

## Example

```js
var MD5 = require('md5.js')

console.log(new MD5().update('42').digest('hex'))
// => a1d0c6e83f027327d8461063f4ac58a6

var md5stream = new MD5()
md5stream.end('42')
console.log(md5stream.read().toString('hex'))
// => a1d0c6e83f027327d8461063f4ac58a6
```

## LICENSE [MIT](LICENSE)

[1]: http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-131Ar1.pdf
