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

if (supportsColor.has256) {
	console.log('Terminal supports 256 colors');
}

if (supportsColor.has16m) {
	console.log('Terminal supports 16 million colors (truecolor)');
}
```


## API

Returns an `object`, or `false` if color is not supported.

The returned object specifies a level of support for color through a `.level` property and a corresponding flag:

- `.level = 1` and `.hasBasic = true`: Basic color support (16 colors)
- `.level = 2` and `.has256 = true`: 256 color support
- `.level = 3` and `.has16m = true`: 16 million (truecolor) support


## Info

It obeys the `--color` and `--no-color` CLI flags.

For situations where using `--color` is not possible, add an environment variable `FORCE_COLOR` with any value to force color. Trumps `--no-color`.

Explicit 256/truecolor mode can be enabled using the `--color=256` and `--color=16m` flags, respectively.


## Related

- [supports-color-cli](https://github.com/chalk/supports-color-cli) - CLI for this module
- [chalk](https://github.com/chalk/chalk) - Terminal string styling done right


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
