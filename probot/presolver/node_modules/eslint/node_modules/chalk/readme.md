<h1 align="center">
	<br>
	<br>
	<img width="360" src="https://cdn.rawgit.com/chalk/chalk/19935d6484811c5e468817f846b7b3d417d7bf4a/logo.svg" alt="chalk">
	<br>
	<br>
	<br>
</h1>

> Terminal string styling done right

[![Build Status](https://travis-ci.org/chalk/chalk.svg?branch=master)](https://travis-ci.org/chalk/chalk)
[![Coverage Status](https://coveralls.io/repos/chalk/chalk/badge.svg?branch=master)](https://coveralls.io/r/chalk/chalk?branch=master)
[![](http://img.shields.io/badge/unicorn-approved-ff69b4.svg)](https://www.youtube.com/watch?v=9auOCbH5Ns4)


[colors.js](https://github.com/Marak/colors.js) used to be the most popular string styling module, but it has serious deficiencies like extending `String.prototype` which causes all kinds of [problems](https://github.com/yeoman/yo/issues/68). Although there are other ones, they either do too much or not enough.

**Chalk is a clean and focused alternative.**

![](https://github.com/chalk/ansi-styles/raw/master/screenshot.png)


## Why

- Highly performant
- Doesn't extend `String.prototype`
- Expressive API
- Ability to nest styles
- Clean and focused
- Auto-detects color support
- Actively maintained
- [Used by ~4500 modules](https://www.npmjs.com/browse/depended/chalk) as of July 15, 2015


## Install

```
$ npm install --save chalk
```


## Usage

Chalk comes with an easy to use composable API where you just chain and nest the styles you want.

```js
var chalk = require('chalk');

// style a string
chalk.blue('Hello world!');

// combine styled and normal strings
chalk.blue('Hello') + 'World' + chalk.red('!');

// compose multiple styles using the chainable API
chalk.blue.bgRed.bold('Hello world!');

// pass in multiple arguments
chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz');

// nest styles
chalk.red('Hello', chalk.underline.bgBlue('world') + '!');

// nest styles of the same type even (color, underline, background)
chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
);
```

Easily define your own themes.

```js
var chalk = require('chalk');
var error = chalk.bold.red;
console.log(error('Error!'));
```

Take advantage of console.log [string substitution](http://nodejs.org/docs/latest/api/console.html#console_console_log_data).

```js
var name = 'Sindre';
console.log(chalk.green('Hello %s'), name);
//=> Hello Sindre
```


## API

### chalk.`<style>[.<style>...](string, [string...])`

Example: `chalk.red.bold.underline('Hello', 'world');`

Chain [styles](#styles) and call the last one as a method with a string argument. Order doesn't matter, and later styles take precedent in case of a conflict. This simply means that `Chalk.red.yellow.green` is equivalent to `Chalk.green`.

Multiple arguments will be separated by space.

### chalk.enabled

Color support is automatically detected, but you can override it by setting the `enabled` property. You should however only do this in your own code as it applies globally to all chalk consumers.

If you need to change this in a reusable module create a new instance:

```js
var ctx = new chalk.constructor({enabled: false});
```

### chalk.supportsColor

Detect whether the terminal [supports color](https://github.com/chalk/supports-color). Used internally and handled for you, but exposed for convenience.

Can be overridden by the user with the flags `--color` and `--no-color`. For situations where using `--color` is not possible, add an environment variable `FORCE_COLOR` with any value to force color. Trumps `--no-color`.

### chalk.styles

Exposes the styles as [ANSI escape codes](https://github.com/chalk/ansi-styles).

Generally not useful, but you might need just the `.open` or `.close` escape code if you're mixing externally styled strings with your own.

```js
var chalk = require('chalk');

console.log(chalk.styles.red);
//=> {open: '\u001b[31m', close: '\u001b[39m'}

console.log(chalk.styles.red.open + 'Hello' + chalk.styles.red.close);
```

### chalk.hasColor(string)

Check whether a string [has color](https://github.com/chalk/has-ansi).

### chalk.stripColor(string)

[Strip color](https://github.com/chalk/strip-ansi) from a string.

Can be useful in combination with `.supportsColor` to strip color on externally styled text when it's not supported.

Example:

```js
var chalk = require('chalk');
var styledString = getText();

if (!chalk.supportsColor) {
	styledString = chalk.stripColor(styledString);
}
```


## Styles

### Modifiers

- `reset`
- `bold`
- `dim`
- `italic` *(not widely supported)*
- `underline`
- `inverse`
- `hidden`
- `strikethrough` *(not widely supported)*

### Colors

- `black`
- `red`
- `green`
- `yellow`
- `blue` *(on Windows the bright version is used as normal blue is illegible)*
- `magenta`
- `cyan`
- `white`
- `gray`

### Background colors

- `bgBlack`
- `bgRed`
- `bgGreen`
- `bgYellow`
- `bgBlue`
- `bgMagenta`
- `bgCyan`
- `bgWhite`


## 256-colors

Chalk does not support anything other than the base eight colors, which guarantees it will work on all terminals and systems. Some terminals, specifically `xterm` compliant ones, will support the full range of 8-bit colors. For this the lower level [ansi-256-colors](https://github.com/jbnicolai/ansi-256-colors) package can be used.


## Windows

If you're on Windows, do yourself a favor and use [`cmder`](http://bliker.github.io/cmder/) instead of `cmd.exe`.


## Related

- [chalk-cli](https://github.com/chalk/chalk-cli) - CLI for this module
- [ansi-styles](https://github.com/chalk/ansi-styles/) - ANSI escape codes for styling strings in the terminal
- [supports-color](https://github.com/chalk/supports-color/) - Detect whether a terminal supports color
- [strip-ansi](https://github.com/chalk/strip-ansi) - Strip ANSI escape codes
- [has-ansi](https://github.com/chalk/has-ansi) - Check if a string has ANSI escape codes
- [ansi-regex](https://github.com/chalk/ansi-regex) - Regular expression for matching ANSI escape codes
- [wrap-ansi](https://github.com/chalk/wrap-ansi) - Wordwrap a string with ANSI escape codes


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
