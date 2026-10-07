# escape-string-regexp [![Build Status](https://travis-ci.org/sindresorhus/escape-string-regexp.svg?branch=master)](https://travis-ci.org/sindresorhus/escape-string-regexp)

> Escape RegExp special characters


## Install

```
$ npm install escape-string-regexp
```


## Usage

```js
const escapeStringRegexp = require('escape-string-regexp');

const escapedString = escapeStringRegexp('How much $ for a 🦄?');
//=> 'How much \\$ for a 🦄\\?'

new RegExp(escapedString);
```

You can also use this to escape a string that is inserted into the middle of a regex, for example, into a character class.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
