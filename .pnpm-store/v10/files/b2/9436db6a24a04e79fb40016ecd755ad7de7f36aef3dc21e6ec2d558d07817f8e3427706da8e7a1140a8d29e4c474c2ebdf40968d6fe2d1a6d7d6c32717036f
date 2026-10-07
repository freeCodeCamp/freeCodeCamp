# Validate XML Names and Qualified Names

This package simply tells you whether or not a string matches the [`Name`](http://www.w3.org/TR/xml/#NT-Name) or [`QName`](http://www.w3.org/TR/xml-names/#NT-QName) productions in the XML Namespaces specification. We use it for implementing the [validate](https://dom.spec.whatwg.org/#validate) algorithm in jsdom, but you can use it for whatever you want.

## Usage

This package's main module exports two functions, `name()` and `qname()`. Both take a string and return a boolean indicating whether or not the string matches the relevant production.

```js
"use strict":
const xnv = require("xml-name-validator");

// Will return true
xnv.name("x");
xnv.name(":");
xnv.name("a:0");
xnv.name("a:b:c");

// Will return false
xnv.name("\\");
xnv.name("'");
xnv.name("0");
xnv.name("a!");

// Will return true
xnv.qname("x");
xnv.qname("a0");
xnv.qname("a:b");

// Will return false
xnv.qname(":a");
xnv.qname(":b");
xnv.qname("a:b:c");
xnv.qname("a:0");
```
