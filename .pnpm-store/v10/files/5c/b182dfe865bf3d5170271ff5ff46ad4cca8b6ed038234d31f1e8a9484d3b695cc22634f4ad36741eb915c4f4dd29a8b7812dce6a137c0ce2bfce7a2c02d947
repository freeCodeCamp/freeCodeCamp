# get-east-asian-width

> Determine the [East Asian Width](https://unicode.org/reports/tr11/) of a Unicode character

> East Asian Width categorizes Unicode characters based on their occupied space in East Asian typography, which helps in text layout and alignment, particularly in languages like Japanese, Chinese, and Korean.

Unlike other similar packages, this package uses the latest Unicode data (which changes each year).

## Install

```sh
npm install get-east-asian-width
```

## Usage

```js
import {eastAsianWidth, eastAsianWidthType} from 'get-east-asian-width';

const codePoint = '字'.codePointAt(0);

console.log(eastAsianWidth(codePoint));
//=> 2

console.log(eastAsianWidthType(codePoint));
//=> 'wide'
```

## `eastAsianWidth(codePoint: number, options?: object): 1 | 2`

Returns the width as a number for the given code point.

### options

Type: `object`

#### ambiguousAsWide

Type: `boolean`\
Default: `false`

Whether to treat an `'ambiguous'` character as wide.

```js
import {eastAsianWidth} from 'get-east-asian-width';

const codePoint = '⛣'.codePointAt(0);

console.log(eastAsianWidth(codePoint));
//=> 1

console.log(eastAsianWidth(codePoint, {ambiguousAsWide: true}));
//=> 2
```

> Ambiguous characters behave like wide or narrow characters depending on the context (language tag, script identification, associated font, source of data, or explicit markup; all can provide the context). **If the context cannot be established reliably, they should be treated as narrow characters by default.**
> - http://www.unicode.org/reports/tr11/

## `eastAsianWidthType(codePoint: number): 'fullwidth' | 'halfwidth' | 'wide' | 'narrow' | 'neutral' | 'ambiguous'`

Returns the type of “East Asian Width” for the given code point.

## Related

- [string-width](https://github.com/sindresorhus/string-width) - Get the visual width of a string
