# Determine the Encoding of a HTML Byte Stream

This package implements the HTML Standard's [encoding sniffing algorithm](https://html.spec.whatwg.org/multipage/syntax.html#encoding-sniffing-algorithm) in all its glory. The most interesting part of this is how it pre-scans the first 1024 bytes in order to search for certain `<meta charset>`-related patterns.

```js
const htmlEncodingSniffer = require("html-encoding-sniffer");
const fs = require("fs");

const htmlBuffer = fs.readFileSync("./html-page.html");
const sniffedEncoding = htmlEncodingSniffer(htmlBuffer);
```

The returned value will be a canonical [encoding name](https://encoding.spec.whatwg.org/#names-and-labels) (not a label). You might then combine this with the [whatwg-encoding](https://github.com/jsdom/whatwg-encoding) package to decode the result:

```js
const whatwgEncoding = require("whatwg-encoding");
const htmlString = whatwgEncoding.decode(htmlBuffer, sniffedEncoding);
```

## Options

You can pass two potential options to `htmlEncodingSniffer`:

```js
const sniffedEncoding = htmlEncodingSniffer(htmlBuffer, {
  transportLayerEncodingLabel,
  defaultEncoding
});
```

These represent two possible inputs into the [encoding sniffing algorithm](https://html.spec.whatwg.org/multipage/syntax.html#encoding-sniffing-algorithm):

- `transportLayerEncodingLabel` is an encoding label that is obtained from the "transport layer" (probably a HTTP `Content-Type` header), which overrides everything but a BOM.
- `defaultEncoding` is the ultimate fallback encoding used if no valid encoding is supplied by the transport layer, and no encoding is sniffed from the bytes. It defaults to `"windows-1252"`, as recommended by the algorithm's table of suggested defaults for "All other locales" (including the `en` locale).

## Credits

This package was originally based on the excellent work of [@nicolashenry](https://github.com/nicolashenry), [in jsdom](https://github.com/tmpvar/jsdom/blob/16fd85618f2705d181232f6552125872a37164bc/lib/jsdom/living/helpers/encoding.js). It has since been pulled out into this separate package.
