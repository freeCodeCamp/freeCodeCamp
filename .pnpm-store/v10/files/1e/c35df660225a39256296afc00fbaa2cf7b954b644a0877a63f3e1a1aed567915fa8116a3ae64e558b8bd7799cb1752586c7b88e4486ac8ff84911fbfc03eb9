export type Options = {
	/**
	By default the wrap is soft, meaning long words may extend past the column width. Setting this to `true` will make it hard wrap at the column width.

	@default false
	*/
	readonly hard?: boolean;

	/**
	By default, an attempt is made to split words at spaces, ensuring that they don't extend past the configured columns. If wordWrap is `false`, each column will instead be completely filled splitting words as necessary.

	@default true
	*/
	readonly wordWrap?: boolean;

	/**
	Whitespace on all lines is removed by default. Set this option to `false` if you don't want to trim.

	@default true
	*/
	readonly trim?: boolean;
};

/**
Wrap words to the specified column width.

@param string - A string with ANSI escape codes, like one styled by [`chalk`](https://github.com/chalk/chalk). Newline characters will be normalized to `\n`.
@param columns - The number of columns to wrap the text to.

@example
```
import chalk from 'chalk';
import wrapAnsi from 'wrap-ansi';

const input = 'The quick brown ' + chalk.red('fox jumped over ') +
	'the lazy ' + chalk.green('dog and then ran away with the unicorn.');

console.log(wrapAnsi(input, 20));
```
*/
export default function wrapAnsi(string: string, columns: number, options?: Options): string;
