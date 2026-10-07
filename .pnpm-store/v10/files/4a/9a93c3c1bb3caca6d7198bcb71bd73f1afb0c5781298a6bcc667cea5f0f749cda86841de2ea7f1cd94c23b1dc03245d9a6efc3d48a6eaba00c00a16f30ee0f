# slice-ansi [![XO: Linted](https://img.shields.io/badge/xo-linted-blue.svg)](https://github.com/xojs/xo)

> Slice a string with [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code#Colors_and_Styles)

## Install

```sh
npm install slice-ansi
```

## Usage

```js
import chalk from 'chalk';
import sliceAnsi from 'slice-ansi';

const string = 'The quick brown ' + chalk.red('fox jumped over ') +
	'the lazy ' + chalk.green('dog and then ran away with the unicorn.');

console.log(sliceAnsi(string, 20, 30));
```

## API

### sliceAnsi(string, startSlice, endSlice?)

#### string

Type: `string`

String with ANSI escape codes. Like one styled by [`chalk`](https://github.com/chalk/chalk).

#### startSlice

Type: `number`

Zero-based index at which to start the slice.

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
