# Parse `data:` URLs

This package helps you parse `data:` URLs [according to the WHATWG Fetch Standard](https://fetch.spec.whatwg.org/#data-urls):

```js
const parseDataURL = require("data-urls");

const textExample = parseDataURL("data:,Hello%2C%20World!");
console.log(textExample.mimeType.toString()); // "text/plain;charset=US-ASCII"
console.log(textExample.body.toString());     // "Hello, World!"

const htmlExample = dataURL("data:text/html,%3Ch1%3EHello%2C%20World!%3C%2Fh1%3E");
console.log(htmlExample.mimeType.toString()); // "text/html"
console.log(htmlExample.body.toString());     // <h1>Hello, World!</h1>

const pngExample = parseDataURL("data:image/png;base64,iVBORw0KGgoAAA" +
                                "ANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4" +
                                "//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU" +
                                "5ErkJggg==");
console.log(pngExample.mimeType.toString()); // "image/png"
console.log(pngExample.body);                // <Buffer 89 50 4e 47 0d ... >
```

## API

This package's main module's default export is a function that accepts a string and returns a `{ mimeType, body }` object, or `null` if the result cannot be parsed as a `data:` URL.

- The `mimeType` property is an instance of [whatwg-mimetype](https://www.npmjs.com/package/whatwg-mimetype)'s `MIMEType` class.
- The `body` property is a Node.js [`Buffer`](https://nodejs.org/docs/latest/api/buffer.html) instance.

As shown in the examples above, both of these have useful `toString()` methods for manipulating them as string values. However…

### A word of caution on string decoding

Because Node.js's `Buffer.prototype.toString()` assumes a UTF-8 encoding, simply doing `dataURL.body.toString()` may not work correctly if the `data:` URL's contents were not originally written in UTF-8. This includes if the encoding is "US-ASCII", [aka windows-1252](https://encoding.spec.whatwg.org/#names-and-labels), which is notable for being the default in many cases.

A more complete decoding example would use the [whatwg-encoding](https://www.npmjs.com/package/whatwg-encoding) package as follows:

```js
const parseDataURL = require("data-urls");
const { labelToName, decode } = require("whatwg-encoding");

const dataURL = parseDataURL(arbitraryString);
const encodingName = labelToName(dataURL.mimeType.parameters.get("charset"));
const bodyDecoded = decode(dataURL.body, encodingName);
```

For example, given an `arbitraryString` of `data:,Hello!`, this will produce a `bodyDecoded` of `"Hello!"`, as expected. But given an `arbitraryString` of `"data:,Héllo!"`, this will correctly produce a `bodyDecoded` of `"Héllo!"`, whereas just doing `dataURL.body.toString()` will give back `"HÃ©llo!"`.

In summary, only use `dataURL.body.toString()` when you are very certain your data is inside the ASCII range (i.e. code points within the range U+0000 to U+007F).

### Advanced functionality: parsing from a URL record

If you are using the [whatwg-url](https://github.com/jsdom/whatwg-url) package, you may already have a "URL record" object on hand, as produced by that package's `parseURL` export. In that case, you can use this package's `fromURLRecord` export to save a bit of work:

```js
const { parseURL } = require("whatwg-url");
const dataURLFromURLRecord = require("data-urls").fromURLRecord;

const urlRecord = parseURL("data:,Hello%2C%20World!");
const dataURL = dataURLFromURLRecord(urlRecord);
```

In practice, we expect this functionality only to be used by consumers like [jsdom](https://www.npmjs.com/package/jsdom), which are using these packages at a very low level.
