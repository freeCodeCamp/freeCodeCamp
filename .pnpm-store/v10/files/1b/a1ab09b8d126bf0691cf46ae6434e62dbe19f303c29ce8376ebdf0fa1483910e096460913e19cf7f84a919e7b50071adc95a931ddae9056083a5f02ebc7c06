# hi-base32
A simple Base32(RFC 4648) encode / decode function for JavaScript supports UTF-8 encoding.  
[![Build Status](https://api.travis-ci.org/emn178/hi-base32.png)](https://travis-ci.org/emn178/hi-base32)
[![Build Status](https://coveralls.io/repos/emn178/hi-base32/badge.png?branch=master)](https://coveralls.io/r/emn178/hi-base32?branch=master)  
[![NPM](https://nodei.co/npm/hi-base32.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/hi-base32)

## Demo
[Base32 Encode Online](http://emn178.github.io/online-tools/base32_encode.html)  
[Base32 Decode Online](http://emn178.github.io/online-tools/base32_decode.html)  

## Download
[Compress](https://raw.github.com/emn178/hi-base32/master/build/base32.min.js)  
[Uncompress](https://raw.github.com/emn178/hi-base32/master/src/base32.js)

## Installation
You can also install hi-base32 by using Bower.

    bower install hi-base32

For node.js, you can use this command to install:

    npm install hi-base32

## Usage
You could use like this:
```JavaScript
base32.encode('String to encode');
base32.decode('Base32 string to decode');
```
If you use node.js, you should require the module first:
```JavaScript
var base32 = require('hi-base32');
```
It supports AMD:
```JavaScript
require(['your/path/hi-baes32.js'], function (baes32) {
// ...
});
```

## TypeScript
```TypeScript
import * as base32 from 'hi-base32';
// or
// import { encode, decode } from 'hi-base32';

base32.encode('String to encode');
base32.decode('Base32 string to decode');
```

### Methods

#### base32.encode(input, asciiOnly)

Encode string or bytes to base32, set asciiOnly to true for better performace if it is.

##### *input: `String`, `Array`, `Uint8Array` or `ArrayBuffer`*

Input string or bytes to encode.

##### *asciiOnly: `Boolean` (default: `false`)*

Specify the string encoding is ASCII. It only works when string input.

#### base32.decode(base32Str, asciiOnly)

Decode base32 string, set asciiOnly to true for better performace.

##### *base32Str: `String`*

Base32 string to decode.

##### *asciiOnly: `Boolean` (default: `false`)*

Specify the string encoding is ASCII.

#### base32.decode.asBytes(base32Str)

Decode base32 string and return byte `Array`

##### *base32Str: `String`*

Base32 string to decode.

## Example
```JavaScript
base32.encode('Man is distinguished, not only by his reason, but by this singular passion from other animals, which is a lust of the mind, that by a perseverance of delight in the continued and indefatigable generation of knowledge, exceeds the short vehemence of any carnal pleasure.');
// JVQW4IDJOMQGI2LTORUW4Z3VNFZWQZLEFQQG433UEBXW43DZEBRHSIDINFZSA4TFMFZW63RMEBRHK5BAMJ4SA5DINFZSA43JNZTXK3DBOIQHAYLTONUW63RAMZZG63JAN52GQZLSEBQW42LNMFWHGLBAO5UGSY3IEBUXGIDBEBWHK43UEBXWMIDUNBSSA3LJNZSCYIDUNBQXIIDCPEQGCIDQMVZHGZLWMVZGC3TDMUQG6ZRAMRSWY2LHNB2CA2LOEB2GQZJAMNXW45DJNZ2WKZBAMFXGIIDJNZSGKZTBORUWOYLCNRSSAZ3FNZSXEYLUNFXW4IDPMYQGW3TPO5WGKZDHMUWCAZLYMNSWKZDTEB2GQZJAONUG64TUEB3GK2DFNVSW4Y3FEBXWMIDBNZ4SAY3BOJXGC3BAOBWGKYLTOVZGKLQ=
base32.decode('JBSWY3DP'); // Hello
base32.decode.asBytes('JBSWY3DP'); // [72, 101, 108, 108, 111]

// It also supports UTF-8 encoding
base32.encode('中文'); // 4S4K3ZUWQ4======
```

## License
The project is released under the [MIT license](http://www.opensource.org/licenses/MIT).

## Contact
The project's website is located at https://github.com/emn178/hi-base32  
Author: Chen, Yi-Cyuan <emn178@gmail.com>
