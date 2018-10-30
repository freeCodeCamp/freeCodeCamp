# has-ansi [![Build Status](https://travis-ci.org/sindresorhus/has-ansi.svg?branch=master)](https://travis-ci.org/sindresorhus/has-ansi)

> Check if a string has [ANSI escape codes](http://en.wikipedia.org/wiki/ANSI_escape_code)


## Install

```
$ npm install --save has-ansi
```


## Usage

```js
var hasAnsi = require('has-ansi');

hasAnsi('\u001b[4mcake\u001b[0m');
//=> true

hasAnsi('cake');
//=> false
```


## Related

- [has-ansi-cli](https://github.com/sindresorhus/has-ansi-cli) - CLI for this module
- [strip-ansi](https://github.com/sindresorhus/strip-ansi) - Strip ANSI escape codes
- [ansi-regex](https://github.com/sindresorhus/ansi-regex) - Regular expression for matching ANSI escape codes
- [chalk](https://github.com/sindresorhus/chalk) - Terminal string styling done right


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
