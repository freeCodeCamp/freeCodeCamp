# Validate XML Names and Qualified Names

This package simply tells you whether or not a string matches the [`Name`](http://www.w3.org/TR/xml/#NT-Name) or [`QName`](http://www.w3.org/TR/xml-names/#NT-QName) productions in the XML Namespaces specification. We use it for implementing the [validate](https://dom.spec.whatwg.org/#validate) algorithm in jsdom, but you can use it for whatever you want.

## Usage

This package's main module's default export takes a string and will return an object of the form `{ success, error }`, where `success` is a boolean and if it is `false`, then `error` is a string containing some hint as to where the match went wrong.

```js
"use strict":
var xnv = require("xml-name-validator");
var assert = require("assert");

// Will return { success: true, error: undefined }
xnv.name("x");
xnv.name(":");
xnv.name("a:0");
xnv.name("a:b:c");

// Will return { success: false, error: <an explanatory string> }
xnv.name("\\");
xnv.name("'");
xnv.name("0");
xnv.name("a!");

// Will return { success: true, error: undefined }
xnv.qname("x");
xnv.qname("a0");
xnv.qname("a:b");

// Will return { success: false, error: <an explanatory string> }
xnv.qname(":a");
xnv.qname(":b");
xnv.qname("a:b:c");
xnv.qname("a:0");
```
