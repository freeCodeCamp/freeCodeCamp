# string-length [![Build Status](https://travis-ci.org/sindresorhus/string-length.svg?branch=master)](https://travis-ci.org/sindresorhus/string-length)

> Get the real length of a string - by correctly counting astral symbols and ignoring [ansi escape codes](https://github.com/sindresorhus/strip-ansi)

`String#length` errornously counts [astral symbols](https://web.archive.org/web/20150721114550/http://www.tlg.uci.edu/~opoudjis/unicode/unicode_astral.html) as two characters.


## Install

```
$ npm install string-length
```


## Usage

```js
const stringLength = require('string-length');

'🐴'.length;
//=> 2

stringLength('🐴');
//=> 1

stringLength('\u001B[1municorn\u001B[22m');
//=> 7
```


## Related

- [string-width](https://github.com/sindresorhus/string-width) - Get visual width of a string


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
