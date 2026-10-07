export type WidthType = 'fullwidth' | 'halfwidth' | 'wide' | 'narrow' | 'neutral' | 'ambiguous';

export type Options = {
	/**
	Whether to treat an `'ambiguous'` character as wide.

	@default true

	@example
	```
	import {eastAsianWidth} from 'get-east-asian-width';

	const codePoint = '⛣'.codePointAt(0);

	console.log(eastAsianWidth(codePoint));
	//=> 1

	console.log(eastAsianWidth(codePoint, {ambiguousAsWide: true}));
	//=> 2
	```

	> Ambiguous characters behave like wide or narrow characters depending on the context (language tag, script identification, associated font, source of data, or explicit markup; all can provide the context). __If the context cannot be established reliably, they should be treated as narrow characters by default.__
	> - http://www.unicode.org/reports/tr11/
	*/
	readonly ambiguousAsWide?: boolean;
};

/**
Returns the width as a number for the given code point.

@param codePoint - A Unicode code point.

@example
```
import {eastAsianWidth} from 'get-east-asian-width';

const codePoint = '字'.codePointAt(0);

console.log(eastAsianWidth(codePoint));
//=> 2
```
*/
export function eastAsianWidth(codePoint: number, options?: Options): 1 | 2;

/**
Returns the type of “East Asian Width” for the given code point.

@param codePoint - A Unicode code point.

@example
```
import {eastAsianWidthType} from 'get-east-asian-width';

const codePoint = '字'.codePointAt(0);

console.log(eastAsianWidthType(codePoint));
//=> 'wide'
```
*/
export function eastAsianWidthType(codePoint: number): WidthType;
