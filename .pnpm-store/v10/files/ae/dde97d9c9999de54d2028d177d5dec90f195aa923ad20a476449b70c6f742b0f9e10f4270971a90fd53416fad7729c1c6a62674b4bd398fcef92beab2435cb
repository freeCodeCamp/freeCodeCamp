# wrap-ansi

> Wordwrap a string with [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code#Colors_and_Styles)

## Install

```sh
npm install wrap-ansi
```

## Usage

```js
import chalk from 'chalk';
import wrapAnsi from 'wrap-ansi';

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

A string with ANSI escape codes, like one styled by [`chalk`](https://github.com/chalk/chalk).

Newline characters will be normalized to `\n`.

#### columns

Type: `number`

The number of columns to wrap the text to.

#### options

Type: `object`

##### hard

Type: `boolean`\
Default: `false`

By default the wrap is soft, meaning long words may extend past the column width. Setting this to `true` will make it hard wrap at the column width.

##### wordWrap

Type: `boolean`\
Default: `true`

By default, an attempt is made to split words at spaces, ensuring that they don't extend past the configured columns. If wordWrap is `false`, each column will instead be completely filled splitting words as necessary.

##### trim

Type: `boolean`\
Default: `true`

Whitespace on all lines is removed by default. Set this option to `false` if you don't want to trim.

## Related

- [slice-ansi](https://github.com/chalk/slice-ansi) - Slice a string with ANSI escape codes
- [cli-truncate](https://github.com/sindresorhus/cli-truncate) - Truncate a string to a specific width in the terminal
- [chalk](https://github.com/chalk/chalk) - Terminal string styling done right
- [jsesc](https://github.com/mathiasbynens/jsesc) - Generate ASCII-only output from Unicode strings. Useful for creating test fixtures.
