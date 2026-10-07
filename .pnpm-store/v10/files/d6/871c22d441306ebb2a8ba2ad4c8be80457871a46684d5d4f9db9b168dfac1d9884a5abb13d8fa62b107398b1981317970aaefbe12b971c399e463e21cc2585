# wrap-ansi [![Build Status](https://travis-ci.org/chalk/wrap-ansi.svg?branch=master)](https://travis-ci.org/chalk/wrap-ansi) [![Coverage Status](https://coveralls.io/repos/github/chalk/wrap-ansi/badge.svg?branch=master)](https://coveralls.io/github/chalk/wrap-ansi?branch=master)

> Wordwrap a string with [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code#Colors_and_Styles)


## Install

```
$ npm install wrap-ansi
```


## Usage

```js
const chalk = require('chalk');
const wrapAnsi = require('wrap-ansi');

const input = 'The quick brown ' + chalk.red('fox jumped over ') +
	'the lazy ' + chalk.green('dog and then ran away with the unicorn.');

console.log(wrapAnsi(input, 20));
```

<img width="331" src="screenshot.png">


## API

### wrapAnsi(string, columns, options?)

Wrap words to the specified column width.

#### string

Type: `string`

String with ANSI escape codes. Like one styled by [`chalk`](https://github.com/chalk/chalk). Newline characters will be normalized to `\n`.

#### columns

Type: `number`

Number of columns to wrap the text to.

#### options

Type: `object`

##### hard

Type: `boolean`<br>
Default: `false`

By default the wrap is soft, meaning long words may extend past the column width. Setting this to `true` will make it hard wrap at the column width.

##### wordWrap

Type: `boolean`<br>
Default: `true`

By default, an attempt is made to split words at spaces, ensuring that they don't extend past the configured columns. If wordWrap is `false`, each column will instead be completely filled splitting words as necessary.

##### trim

Type: `boolean`<br>
Default: `true`

Whitespace on all lines is removed by default. Set this option to `false` if you don't want to trim.


## Related

- [slice-ansi](https://github.com/chalk/slice-ansi) - Slice a string with ANSI escape codes
- [cli-truncate](https://github.com/sindresorhus/cli-truncate) - Truncate a string to a specific width in the terminal
- [chalk](https://github.com/chalk/chalk) - Terminal string styling done right
- [jsesc](https://github.com/mathiasbynens/jsesc) - Generate ASCII-only output from Unicode strings. Useful for creating test fixtures.


## Maintainers

- [Sindre Sorhus](https://github.com/sindresorhus)
- [Josh Junon](https://github.com/qix-)
- [Benjamin Coe](https://github.com/bcoe)


---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-wrap_ansi?utm_source=npm-wrap-ansi&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
