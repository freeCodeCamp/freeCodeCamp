# supports-color [![Build Status](https://travis-ci.org/chalk/supports-color.svg?branch=master)](https://travis-ci.org/chalk/supports-color)

> Detect whether a terminal supports color


## Install

```
$ npm install --save supports-color
```


## Usage

```js
var supportsColor = require('supports-color');

if (supportsColor) {
	console.log('Terminal supports color');
}
```

It obeys the `--color` and `--no-color` CLI flags.

For situations where using `--color` is not possible, add an environment variable `FORCE_COLOR` with any value to force color. Trumps `--no-color`.


## Related

- [supports-color-cli](https://github.com/chalk/supports-color-cli) - CLI for this module
- [chalk](https://github.com/chalk/chalk) - Terminal string styling done right


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
