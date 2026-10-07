# Decode According to the WHATWG Encoding Standard

This package provides a thin layer on top of [iconv-lite](https://github.com/ashtuchkin/iconv-lite) which makes it expose some of the same primitives as the [Encoding Standard](https://encoding.spec.whatwg.org/).

```js
const whatwgEncoding = require("whatwg-encoding");

console.assert(whatwgEncoding.labelToName("latin1") === "windows-1252");
console.assert(whatwgEncoding.labelToName("  CYRILLic ") === "ISO-8859-5");

console.assert(whatwgEncoding.isSupported("IBM866") === true);

// Not supported by the Encoding Standard
console.assert(whatwgEncoding.isSupported("UTF-32") === false);

// In the Encoding Standard, but this package can't decode it
console.assert(whatwgEncoding.isSupported("x-mac-cyrillic") === false);

console.assert(whatwgEncoding.getBOMEncoding(new Buffer([0xFE, 0xFF])) === "UTF-16BE");
console.assert(whatwgEncoding.getBOMEncoding(new Buffer([0x48, 0x69])) === null);

console.assert(whatwgEncoding.decode(new Buffer([0x48, 0x69]), "UTF-8") === "Hi");
```

## API

- `decode(buffer, fallbackEncodingName)`: performs the [decode](https://encoding.spec.whatwg.org/#decode) algorithm (in which any BOM will override the passed fallback encoding), and returns the resulting string
- `labelToName(label)`: performs the [get an encoding](https://encoding.spec.whatwg.org/#concept-encoding-get) algorithm and returns the resulting encoding's name, or `null` for failure
- `isSupported(name)`: returns whether the encoding is one of [the encodings](https://encoding.spec.whatwg.org/#names-and-labels) of the Encoding Standard, _and_ is an encoding that this package can decode (via iconv-lite)
- `getBOMEncoding(buffer)`: sniffs the first 2–3 bytes of the supplied `Buffer`, returning one of the encoding names `"UTF-8"`, `"UTF-16LE"`, or `"UTF-16BE"` if the appropriate BOM is present, or `null` if no BOM is present

## Unsupported encodings

Since we rely on iconv-lite, we are limited to support only the encodings that they support. Currently we are missing support for:

- ISO-2022-JP
- ISO-8859-8-I
- replacement
- x-mac-cyrillic
- x-user-defined

Passing these encoding names will return `false` when calling `isSupported`, and passing any of the possible labels for these encodings to `labelToName` will return `null`.

## Credits

This package was originally based on the excellent work of [@nicolashenry](https://github.com/nicolashenry), [in jsdom](https://github.com/tmpvar/jsdom/blob/7ce11776ce161e8d5921a7a183585327400f786b/lib/jsdom/living/helpers/encoding.js). It has since been pulled out into this separate package.

## Alternatives

If you are looking for a JavaScript implementation of the Encoding Standard's `TextEncoder` and `TextDecoder` APIs, you'll want [@inexorabletash](https://github.com/inexorabletash)'s [text-encoding](https://github.com/inexorabletash/text-encoding) package.
