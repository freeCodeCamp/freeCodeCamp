# MD5

[![build status](https://secure.travis-ci.org/pvorb/node-md5.png)](http://travis-ci.org/pvorb/node-md5)

a JavaScript function for hashing messages with MD5.

## Installation

You can use this package on the server side as well as the client side.

### [Node.js](http://nodejs.org/):

~~~
npm install md5
~~~


## API

~~~ javascript
md5(message)
~~~

  * `message` -- `String` or `Buffer`
  * returns `String`


## Usage

~~~ javascript
var md5 = require('md5');

console.log(md5('message'));
~~~

This will print the following

~~~
78e731027d8fd50ed642340b7c9a63b3
~~~

It supports buffers, too

~~~ javascript
var fs = require('fs');
var md5 = require('md5');

fs.readFile('example.txt', function(err, buf) {
  console.log(md5(buf));
});
~~~

## Versions

Before version 2.0.0 there were two packages called md5 on npm, one lowercase,
one uppercase (the one you're looking at). As of version 2.0.0, all new versions
of this module will go to lowercase [md5](https://www.npmjs.com/package/md5) on
npm. To use the correct version, users of this module will have to change their
code from `require('MD5')` to `require('md5')` if they want to use versions >=
2.0.0.


## Bugs and Issues

If you encounter any bugs or issues, feel free to open an issue at
[github](https://github.com/pvorb/node-md5/issues).


## Credits

This package is based on the work of Jeff Mott, who did a pure JS implementation
of the MD5 algorithm that was published by Ronald L. Rivest in 1991. I needed a
npm package of the algorithm, so I used Jeff’s implementation for this package.
The original implementation can be found in the
[CryptoJS](http://code.google.com/p/crypto-js/) project.


## License

~~~
Copyright © 2011-2015, Paul Vorbach.
Copyright © 2009, Jeff Mott.

All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this
  list of conditions and the following disclaimer in the documentation and/or
  other materials provided with the distribution.
* Neither the name Crypto-JS nor the names of its contributors may be used to
  endorse or promote products derived from this software without specific prior
  written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
~~~
