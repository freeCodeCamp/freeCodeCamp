# term-size [![Build Status: Linux & macOS](https://travis-ci.org/sindresorhus/term-size.svg?branch=master)](https://travis-ci.org/sindresorhus/term-size) [![Build Status: Windows](https://ci.appveyor.com/api/projects/status/c3tydg6uedsk0bob/branch/master?svg=true)](https://ci.appveyor.com/project/sindresorhus/term-size/branch/master)

> Reliably get the terminal window size

Because [`process.stdout.columns`](https://nodejs.org/api/tty.html#tty_writestream_columns) doesn't exist when run [non-interactively](http://www.tldp.org/LDP/abs/html/intandnonint.html), for example, in a child process or when piped. This module even works when all the TTY file descriptors are redirected!

Confirmed working on macOS, Linux, and Windows.


## Install

```
$ npm install --save term-size
```


## Usage

```js
const termSize = require('term-size');

termSize();
//=> {columns: 143, rows: 24}
```


## API

### termSize()

Returns an `Object` with `columns` and `rows` properties.


## Related

- [term-size-cli](https://github.com/sindresorhus/term-size-cli) - CLI for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
