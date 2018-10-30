# DOMException

This package implements the [`DOMException`](https://heycam.github.io/webidl/#idl-DOMException) class, from web browsers. It exists in service of [jsdom](https://github.com/tmpvar/jsdom) and related packages.

Example usage:

```js
const DOMException = require("domexception");

const e1 = new DOMException("Something went wrong", "BadThingsError");
console.assert(e1.name === "BadThingsError");
console.assert(e1.code === 0);

const e2 = new DOMException("Another exciting error message", "NoModificationAllowedError");
console.assert(e2.name === "NoModificationAllowedError");
console.assert(e2.code === 7);

console.assert(DOMException.INUSE_ATTRIBUTE_ERR === 10);
```
