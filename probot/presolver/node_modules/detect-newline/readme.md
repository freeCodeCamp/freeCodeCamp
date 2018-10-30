# detect-newline [![Build Status](https://travis-ci.org/sindresorhus/detect-newline.svg?branch=master)](https://travis-ci.org/sindresorhus/detect-newline)

> Detect the dominant newline character of a string


## Install

```
$ npm install --save detect-newline
```


## Usage

```js
const detectNewline = require('detect-newline');

detectNewline('foo\nbar\nbaz\r\n');
//=> '\n'
```


## API

### detectNewline(input)

Returns detected newline or `null` when no newline character is found.

### detectNewline.graceful(input)

Returns detected newline or `\n` when no newline character is found.


## Related

- [detect-newline-cli](https://github.com/sindresorhus/detect-newline-cli) - CLI for this module
- [detect-indent](https://github.com/sindresorhus/detect-indent) - Detect the indentation of code


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
