# is-unicode-supported

> Detect whether the terminal supports Unicode

This can be useful to decide whether to use Unicode characters or fallback ASCII characters in command-line output.

Note that the check is quite naive. It just assumes all non-Windows terminals support Unicode and hard-codes which Windows terminals that do support Unicode. However, I have been using this logic in some popular packages for years without problems.

## Install

```
$ npm install is-unicode-supported
```

## Usage

```js
const isUnicodeSupported = require('is-unicode-supported');

isUnicodeSupported();
//=> true
```

## API

### isUnicodeSupported()

Returns a `boolean` for whether the terminal supports Unicode.

## Related

- [is-interactive](https://github.com/sindresorhus/is-interactive) - Check if stdout or stderr is interactive
- [supports-color](https://github.com/chalk/supports-color) - Detect whether a terminal supports color
- [figures](https://github.com/sindresorhus/figures) - Unicode symbols with Windows fallbacks
- [log-symbols](https://github.com/sindresorhus/log-symbols) - Colored symbols for various log levels
