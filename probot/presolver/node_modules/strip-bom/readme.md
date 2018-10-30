# strip-bom [![Build Status](https://travis-ci.org/sindresorhus/strip-bom.svg?branch=master)](https://travis-ci.org/sindresorhus/strip-bom)

> Strip UTF-8 [byte order mark](http://en.wikipedia.org/wiki/Byte_order_mark#UTF-8) (BOM) from a string

From Wikipedia:

> The Unicode Standard permits the BOM in UTF-8, but does not require nor recommend its use. Byte order has no meaning in UTF-8.


## Install

```
$ npm install --save strip-bom
```


## Usage

```js
const stripBom = require('strip-bom');

stripBom('\uFEFFunicorn');
//=> 'unicorn'
```


## Related

- [strip-bom-cli](https://github.com/sindresorhus/strip-bom-cli) - CLI for this module
- [strip-bom-buf](https://github.com/sindresorhus/strip-bom-buf) - Buffer version of this module
- [strip-bom-stream](https://github.com/sindresorhus/strip-bom-stream) - Stream version of this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
