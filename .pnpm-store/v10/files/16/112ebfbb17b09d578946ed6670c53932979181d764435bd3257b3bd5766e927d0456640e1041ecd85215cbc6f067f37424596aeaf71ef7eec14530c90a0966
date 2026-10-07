/**
Slice a string with [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code#Colors_and_Styles)

@param string - A string with ANSI escape codes. Like one styled by [`chalk`](https://github.com/chalk/chalk).
@param startSlice - Zero-based index at which to start the slice.
@param endSlice - Zero-based index at which to end the slice.

@example
```
import chalk from 'chalk';
import sliceAnsi from 'slice-ansi';

const string = 'The quick brown ' + chalk.red('fox jumped over ') +
	'the lazy ' + chalk.green('dog and then ran away with the unicorn.');

console.log(sliceAnsi(string, 20, 30));
```
*/
export default function sliceAnsi(string: string, startSlice: number, endSlice?: number): string;
