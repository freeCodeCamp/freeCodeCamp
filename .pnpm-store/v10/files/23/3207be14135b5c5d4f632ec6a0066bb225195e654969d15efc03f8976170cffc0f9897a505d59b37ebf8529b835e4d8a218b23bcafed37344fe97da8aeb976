import {Options as IndentStringOptions} from 'indent-string';

declare namespace redent {
	type Options = IndentStringOptions;
}

/**
[Strip redundant indentation](https://github.com/sindresorhus/strip-indent) and [indent the string](https://github.com/sindresorhus/indent-string).

@param string - The string to normalize indentation.
@param count - How many times you want `options.indent` repeated. Default: `0`.

@example
```
import redent = require('redent');

redent('\n  foo\n    bar\n', 1);
//=> '\n foo\n   bar\n'
```
*/
declare function redent(
	string: string,
	count?: number,
	options?: redent.Options
): string;

export = redent;
