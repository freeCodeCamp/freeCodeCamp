# strip-eof [![Build Status](https://travis-ci.org/sindresorhus/strip-eof.svg?branch=master)](https://travis-ci.org/sindresorhus/strip-eof)

> Strip the [End-Of-File](https://en.wikipedia.org/wiki/End-of-file) (EOF) character from a string/buffer


## Install

```
$ npm install --save strip-eof
```


## Usage

```js
const stripEof = require('strip-eof');

stripEof('foo\nbar\n\n');
//=> 'foo\nbar\n'

stripEof(new Buffer('foo\nbar\n\n')).toString();
//=> 'foo\nbar\n'
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
