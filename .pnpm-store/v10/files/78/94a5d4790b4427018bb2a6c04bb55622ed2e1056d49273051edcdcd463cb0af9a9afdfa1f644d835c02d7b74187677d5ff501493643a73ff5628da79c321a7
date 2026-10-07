# slice-ansi [![Build Status](https://travis-ci.org/chalk/slice-ansi.svg?branch=master)](https://travis-ci.org/chalk/slice-ansi) [![XO: Linted](https://img.shields.io/badge/xo-linted-blue.svg)](https://github.com/xojs/xo)

> Slice a string with [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code#Colors_and_Styles)

## Install

```
$ npm install slice-ansi
```

## Usage

```js
const chalk = require('chalk');
const sliceAnsi = require('slice-ansi');

const string = 'The quick brown ' + chalk.red('fox jumped over ') +
	'the lazy ' + chalk.green('dog and then ran away with the unicorn.');

console.log(sliceAnsi(string, 20, 30));
```

## API

### sliceAnsi(string, beginSlice, endSlice?)

#### string

Type: `string`

String with ANSI escape codes. Like one styled by [`chalk`](https://github.com/chalk/chalk).

#### beginSlice

Type: `number`

Zero-based index at which to begin the slice.

#### endSlice

Type: `number`

Zero-based index at which to end the slice.

## Related

- [wrap-ansi](https://github.com/chalk/wrap-ansi) - Wordwrap a string with ANSI escape codes
- [cli-truncate](https://github.com/sindresorhus/cli-truncate) - Truncate a string to a specific width in the terminal
- [chalk](https://github.com/chalk/chalk) - Terminal string styling done right

## Maintainers

- [Sindre Sorhus](https://github.com/sindresorhus)
- [Josh Junon](https://github.com/qix-)

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-slice_ansi?utm_source=npm-slice-ansi&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
