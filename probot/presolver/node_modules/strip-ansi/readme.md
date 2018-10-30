# strip-ansi [![Build Status](https://travis-ci.org/chalk/strip-ansi.svg?branch=master)](https://travis-ci.org/chalk/strip-ansi)

> Strip [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code)


## Install

```
$ npm install strip-ansi
```


## Usage

```js
const stripAnsi = require('strip-ansi');

stripAnsi('\u001B[4mUnicorn\u001B[0m');
//=> 'Unicorn'
```


## Related

- [strip-ansi-cli](https://github.com/chalk/strip-ansi-cli) - CLI for this module
- [has-ansi](https://github.com/chalk/has-ansi) - Check if a string has ANSI escape codes
- [ansi-regex](https://github.com/chalk/ansi-regex) - Regular expression for matching ANSI escape codes
- [chalk](https://github.com/chalk/chalk) - Terminal string styling done right


## Maintainers

- [Sindre Sorhus](https://github.com/sindresorhus)
- [Josh Junon](https://github.com/qix-)


## License

MIT
