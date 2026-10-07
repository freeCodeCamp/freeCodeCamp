declare namespace astralRegex {
	interface Options {
		/**
		Only match an exact string. Useful with `RegExp#test()` to check if a string is a astral symbol. Default: `false` _(Matches any astral symbols in a string)_
		*/
		readonly exact?: boolean;
	}
}

/**
Regular expression for matching [astral symbols](https://everything2.com/title/astral+plane).

@returns A `RegExp` for matching astral symbols.

@example
```
import astralRegex = require('astral-regex');

astralRegex({exact: true}).test('🦄');
//=> true

'foo 🦄 💩 bar'.match(astralRegex());
//=> ['🦄', '💩']
```
*/
declare function astralRegex(options?: astralRegex.Options): RegExp;

export = astralRegex;
