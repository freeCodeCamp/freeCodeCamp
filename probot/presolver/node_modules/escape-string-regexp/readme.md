# escape-string-regexp [![Build Status](https://travis-ci.org/sindresorhus/escape-string-regexp.svg?branch=master)](https://travis-ci.org/sindresorhus/escape-string-regexp)

> Escape RegExp special characters


## Install

```
$ npm install --save escape-string-regexp
```


## Usage

```js
const escapeStringRegexp = require('escape-string-regexp');

const escapedString = escapeStringRegexp('how much $ for a unicorn?');
//=> 'how much \$ for a unicorn\?'

new RegExp(escapedString);
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
