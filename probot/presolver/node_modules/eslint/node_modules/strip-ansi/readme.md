# strip-ansi [![Build Status](https://travis-ci.org/chalk/strip-ansi.svg?branch=master)](https://travis-ci.org/chalk/strip-ansi)

> Strip [ANSI escape codes](http://en.wikipedia.org/wiki/ANSI_escape_code)


## Install

```
$ npm install --save strip-ansi
```


## Usage

```js
var stripAnsi = require('strip-ansi');

stripAnsi('\u001b[4mcake\u001b[0m');
//=> 'cake'
```


## Related

- [strip-ansi-cli](https://github.com/chalk/strip-ansi-cli) - CLI for this module
- [has-ansi](https://github.com/chalk/has-ansi) - Check if a string has ANSI escape codes
- [ansi-regex](https://github.com/chalk/ansi-regex) - Regular expression for matching ANSI escape codes
- [chalk](https://github.com/chalk/chalk) - Terminal string styling done right


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
