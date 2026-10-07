# w3c-xmlserializer

An XML serializer that follows the [W3C specification](https://w3c.github.io/DOM-Parsing/).

This package can be used in Node.js, as long as you feed it a DOM node, e.g. one produced by [jsdom](https://github.com/jsdom/jsdom).

## Basic usage

Assume you have a DOM tree rooted at a node `node`. In Node.js, you could create this using [jsdom](https://github.com/jsdom/jsdom) as follows:

```js
const { JSDOM } = require("jsdom");

const { document } = new JSDOM().window;
const node = document.createElement("akomaNtoso");
```

Then, you use this package as follows:


```js
const serialize = require("w3c-xmlserializer");

console.log(serialize(node));
// => '<akomantoso xmlns="http://www.w3.org/1999/xhtml"></akomantoso>'
```

## `requireWellFormed` option

By default the input DOM tree is not required to be "well-formed"; any given input will serialize to some output string. You can instead require well-formedness via

```js
serialize(node, { requireWellFormed: true });
```

which will cause `Error`s to be thrown when non-well-formed constructs are encountered. [Per the spec](https://w3c.github.io/DOM-Parsing/#dfn-require-well-formed), this largely is about imposing constraints on the names of elements, attributes, etc.

As a point of reference, on the web platform:

* The [`innerHTML` getter](https://w3c.github.io/DOM-Parsing/#dom-innerhtml-innerhtml) uses the require-well-formed mode, i.e. trying to get the `innerHTML` of non-well-formed subtrees will throw.
* The [`xhr.send()` method](https://xhr.spec.whatwg.org/#the-send()-method) does not require well-formedness, i.e. sending non-well-formed `Document`s will serialize and send them anyway.
