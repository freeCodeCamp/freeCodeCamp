# Parse `data:` URLs

This package helps you parse `data:` URLs [according to the WHATWG Fetch Standard](https://fetch.spec.whatwg.org/#data-urls):

```js
const parseDataURL = require("data-urls");

const textExample = parseDataURL("data:,Hello%2C%20World!");
console.log(textExample.mimeType.toString()); // "text/plain;charset=US-ASCII"
console.log(textExample.body);                // Uint8Array(13) [ 72, 101, 108, 108, 111, 44, … ]

const htmlExample = parseDataURL("data:text/html,%3Ch1%3EHello%2C%20World!%3C%2Fh1%3E");
console.log(htmlExample.mimeType.toString()); // "text/html"
console.log(htmlExample.body);                // Uint8Array(22) [ 60, 104, 49, 62, 72, 101, … ]

const pngExample = parseDataURL("data:image/png;base64,iVBORw0KGgoAAA" +
                                "ANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4" +
                                "//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU" +
                                "5ErkJggg==");
console.log(pngExample.mimeType.toString()); // "image/png"
console.log(pngExample.body);                // Uint8Array(85) [ 137, 80, 78, 71, 13, 10, … ]
```

## API

This package's main module's default export is a function that accepts a string and returns a `{ mimeType, body }` object, or `null` if the result cannot be parsed as a `data:` URL.

- The `mimeType` property is an instance of [whatwg-mimetype](https://www.npmjs.com/package/whatwg-mimetype)'s `MIMEType` class.
- The `body` property is a `Uint8Array` instance.

As shown in the examples above, you can easily get a stringified version of the MIME type using its `toString()` method. Read on for more on getting the stringified version of the body.

### Decoding the body

To decode the body bytes of a parsed data URL, you'll need to use the `charset` parameter of the MIME type, if any. This contains an encoding [label](https://encoding.spec.whatwg.org/#label); there are [various possible labels](https://encoding.spec.whatwg.org/#names-and-labels) for a given encoding. We suggest using the [whatwg-encoding](https://www.npmjs.com/package/whatwg-encoding) package as follows:

```js
const parseDataURL = require("data-urls");
const { labelToName, decode } = require("whatwg-encoding");

const dataURL = parseDataURL(arbitraryString);

// If there's no charset parameter, let's just hope it's UTF-8; that seems like a good guess.
const encodingName = labelToName(dataURL.mimeType.parameters.get("charset") || "utf-8");
const bodyDecoded = decode(dataURL.body, encodingName);
```

This is especially important since the default, if no parseable MIME type is given, is "US-ASCII", [aka windows-1252](https://encoding.spec.whatwg.org/#names-and-labels), not UTF-8 like you might asume. So for example given an `arbitraryString` of `"data:,Héllo!"`, the above code snippet will correctly produce a `bodyDecoded` of `"Héllo!"` by using the windows-1252 decoder, whereas if you used a UTF-8 decoder you'd get back `"HÃ©llo!"`.

### Advanced functionality: parsing from a URL record

If you are using the [whatwg-url](https://github.com/jsdom/whatwg-url) package, you may already have a "URL record" object on hand, as produced by that package's `parseURL` export. In that case, you can use this package's `fromURLRecord` export to save a bit of work:

```js
const { parseURL } = require("whatwg-url");
const dataURLFromURLRecord = require("data-urls").fromURLRecord;

const urlRecord = parseURL("data:,Hello%2C%20World!");
const dataURL = dataURLFromURLRecord(urlRecord);
```

In practice, we expect this functionality only to be used by consumers like [jsdom](https://www.npmjs.com/package/jsdom), which are using these packages at a very low level.
