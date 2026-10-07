# Fast String Truncated Width

A fast function for calculating where a string should be truncated, given a width limit and an ellipsis string.

This is a low-level function that basically calculates the visual width of a string and the index at which it should be truncated once printed to the terminal, but taking into account an optional width limit and an optional ellipsis string, so that the string doesn't have to be processed multiple times to be truncated, and how long the part after the truncation point is doesn't cost us anything because we can just ignore it.

Note that codepoints considered "ambiguous" in Unicode will always use "regularWidth" as their width, if you need to customize this you should use [`string-width`](https://www.npmjs.com/package/string-width) instead.

## Install

```sh
npm install fast-string-truncated-width
```

## Usage

```ts
import fastStringTruncatedWidth from 'fast-string-truncated-width';

// The width of various classes of characters is configurable

const widthOptions = {
  controlWidth: 0,
  tabWidth: 8,
  emojiWidth: 2,
  regularWidth: 1,
  wideWidth: 2
};

// Retrieving the result for a string that fits within our width limit

const result1 = fastStringTruncatedWidth ( '\x1b[31mhello', { limit: Infinity, ellipsis: '…' }, widthOptions );

result1.truncated; // => false, the string fits within the width limit, it doesn't have to be truncated
result1.ellipsed; // => false, the ellipsis string doesn't need to be appended to the string
result1.width; // => 5, the visual width of the string once printed to the terminal
result1.index; // => 10, the end index at which the string should be sliced, equal to input.length in this case

// Retrieving the result for a string that doesn't fit within our width limit

const result2 = fastStringTruncatedWidth ( '\x1b[31mhello', { limit: 3, ellipsis: '…' }, widthOptions );

result2.truncated; // => true, the string doesn't fit within the width limit, it has to be truncated
result2.ellipsed; // => true, the ellipsis string should be appended to the string (this isn't always the case, for example if our limit is 0)
result2.width; // => 2, the visual width of the string once printed to the terminal (this doesn't account for the width of the ellipsis string itself)
result2.index; // => 7, the end index at which the string should be sliced to truncate it correctly

// Let's actually truncate a string
// If you are truncating a string that may contain ANSI escapes you'll probaly want to put a "reset" escape after the sliced portion of the input

const input = '\x1b[31mhello';
const options = { limit: 3, ellipsis: '…' };
const result3 = fastStringTruncatedWidth ( input, options, widthOptions );
const output = `${input.slice ( 0, result3.index )}${result3.ellipsed ? options.ellipsis : ''}`; // => '\x1b[31mhe…'
```

## License

MIT © Fabio Spampinato
