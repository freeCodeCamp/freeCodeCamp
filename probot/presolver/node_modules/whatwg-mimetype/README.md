# Parse, serialize, and manipulate MIME types

This package will parse [MIME types](https://mimesniff.spec.whatwg.org/#understanding-mime-types) into a structured format, which can then be manipulated and serialized:

```js
const MIMEType = require("whatwg-mimetype");

const mimeType = new MIMEType(`Text/HTML;Charset="utf-8"`);

console.assert(mimeType.toString() === "text/html;charset=utf-8");

console.assert(mimeType.type === "text");
console.assert(mimeType.subtype === "html");
console.assert(mimeType.essence === "text/html");
console.assert(mimeType.parameters.get("charset") === "utf-8");

mimeType.parameters.set("charset", "windows-1252");
console.assert(mimeType.parameters.get("charset") === "windows-1252");
console.assert(mimeType.toString() === "text/html;charset=windows-1252");

console.assert(mimeType.isHTML() === true);
console.assert(mimeType.isXML() === false);
```

Parsing is a fairly complex process; see [the specification](https://mimesniff.spec.whatwg.org/#parsing-a-mime-type) for details (and similarly [for serialization](https://mimesniff.spec.whatwg.org/#serializing-a-mime-type)).

This package's algorithms conform to those of the WHATWG [MIME Sniffing Standard](https://mimesniff.spec.whatwg.org/), and is aligned up to commit [190c18a](https://github.com/whatwg/mimesniff/commit/190c18af1d81754ff298cfb6fc9e581afdce4d2c).

## `MIMEType` API

This package's main module's default export is a class, `MIMEType`. Its constructor takes a string which it will attempt to parse into a MIME type; if parsing fails, an `Error` will be thrown.

### The `parse()` static factory method

As an alternative to the constructor, you can use `MIMEType.parse(string)`. The only difference is that `parse()` will return `null` on failed parsing, whereas the constructor will throw. It thus makes the most sense to use the constructor in cases where unparseable MIME types would be exceptional, and use `parse()` when dealing with input from some unconstrained source.

### Properties

- `type`: the MIME type's [type](https://mimesniff.spec.whatwg.org/#mime-type-type), e.g. `"text"`
- `subtype`: the MIME type's [subtype](https://mimesniff.spec.whatwg.org/#mime-type-subtype), e.g. `"html"`
- `essence`: the MIME type's [essence](https://mimesniff.spec.whatwg.org/#mime-type-essence), e.g. `"text/html"`
- `parameters`: an instance of `MIMETypeParameters`, containing this MIME type's [parameters](https://mimesniff.spec.whatwg.org/#mime-type-parameters)

`type` and `subtype` can be changed. They will be validated to be non-empty and only contain [HTTP token code points](https://mimesniff.spec.whatwg.org/#http-token-code-point).

`essence` is only a getter, and cannot be changed.

`parameters` is also a getter, but the contents of the `MIMETypeParameters` object are mutable, as described below.

### Methods

- `toString()` serializes the MIME type to a string
- `isHTML()`: returns true if this instance represents [a HTML MIME type](https://mimesniff.spec.whatwg.org/#html-mime-type)
- `isXML()`: returns true if this instance represents [an XML MIME type](https://mimesniff.spec.whatwg.org/#xml-mime-type)
- `isJavaScript({ allowParameters })`: returns true if this instance represents [a JavaScript MIME type](https://html.spec.whatwg.org/multipage/scripting.html#javascript-mime-type); `allowParameters` can be set to true to allow arbitrary parameters, instead of their presence causing the method to return `false`

_Note: the `isHTML()`, `isXML()`, and `isJavaScript()` methods are speculative, and may be removed or changed in future major versions. See [whatwg/mimesniff#48](https://github.com/whatwg/mimesniff/issues/48) for brainstorming in this area. Currently we implement these mainly because they are useful in jsdom._

## `MIMETypeParameters` API

The `MIMETypeParameters` class, instances of which are returned by `mimeType.parameters`, has equivalent surface API to a [JavaScript `Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).

However, `MIMETypeParameters` methods will always interpret their arguments as appropriate for MIME types, so e.g. parameter names will be lowercased, and attempting to set invalid characters will throw.

Some examples:

```js
const mimeType = new MIMEType(`x/x;a=b;c=D;E="F"`);

// Logs:
// a b
// c D
// e F
for (const [name, value] of mimeType.parameters) {
  console.log(name, value);
}

console.assert(mimeType.parameters.has("a"));
console.assert(mimeType.parameters.has("A"));
console.assert(mimeType.parameters.get("A") === "b");

mimeType.parameters.set("Q", "X");
console.assert(mimeType.parameters.get("q") === "X");
console.assert(mimeType.toString() === "x/x;a=b;c=d;e=F;q=X");

// Throws:
mimeType.parameters.set("@", "x");
```

## Raw parsing/serialization APIs

If you want primitives on which to build your own API, you can get direct access to the parsing and serialization algorithms as follows:

```js
const parse = require("whatwg-mimetype/parser");
const serialize = require("whatwg-mimetype/serialize");
```

`parse(string)` returns an object containing the `type` and `subtype` strings, plus `parameters`, which is a `Map`. This is roughly our equivalent of the spec's [MIME type record](https://mimesniff.spec.whatwg.org/#mime-type). If parsing fails, it instead returns `null`.

`serialize(record)` operates on the such an object, giving back a string according to the serialization algorithm.
