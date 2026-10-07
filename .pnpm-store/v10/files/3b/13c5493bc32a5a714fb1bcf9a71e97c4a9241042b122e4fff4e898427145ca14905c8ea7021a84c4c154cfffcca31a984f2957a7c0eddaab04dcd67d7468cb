# hash-base

[![npm Package](https://img.shields.io/npm/v/hash-base.svg?style=flat-square)](https://www.npmjs.org/package/hash-base)
[![Build Status](https://img.shields.io/travis/crypto-browserify/hash-base.svg?branch=master&style=flat-square)](https://travis-ci.org/crypto-browserify/hash-base)
[![Dependency status](https://img.shields.io/david/crypto-browserify/hash-base.svg?style=flat-square)](https://david-dm.org/crypto-browserify/hash-base#info=dependencies)

Abstract base class to inherit from if you want to create streams implementing the same API as node crypto [Hash][1] (for [Cipher][2] / [Decipher][3] check [crypto-browserify/cipher-base][4]).

## Example

```js
const HashBase = require('hash-base');
const inherits = require('inherits');

// our hash function is XOR sum of all bytes
function MyHash () {
	HashBase.call(this, 1); // in bytes

	this._sum = 0x00;
};

inherits(MyHash, HashBase)

MyHash.prototype._update = function () {
	for (let i = 0; i < this._block.length; ++i) {
		this._sum ^= this._block[i];
	}
};

MyHash.prototype._digest = function () {
	return this._sum;
};

const data = Buffer.from([0x00, 0x42, 0x01]);
const hash = new MyHash().update(data).digest();
console.log(hash); // => 67
```
You also can check [source code](index.js) or [crypto-browserify/md5.js][5]

## LICENSE

MIT

[1]: https://nodejs.org/api/crypto.html#crypto_class_hash
[2]: https://nodejs.org/api/crypto.html#crypto_class_cipher
[3]: https://nodejs.org/api/crypto.html#crypto_class_decipher
[4]: https://github.com/crypto-browserify/cipher-base
[5]: https://github.com/crypto-browserify/md5.js
