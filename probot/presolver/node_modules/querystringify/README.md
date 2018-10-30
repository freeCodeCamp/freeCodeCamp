# querystringify

[![Made by unshift](https://img.shields.io/badge/made%20by-unshift-00ffcc.svg?style=flat-square)](http://unshift.io)[![Version npm](http://img.shields.io/npm/v/querystringify.svg?style=flat-square)](http://browsenpm.org/package/querystringify)[![Build Status](http://img.shields.io/travis/unshiftio/querystringify/master.svg?style=flat-square)](https://travis-ci.org/unshiftio/querystringify)[![Dependencies](https://img.shields.io/david/unshiftio/querystringify.svg?style=flat-square)](https://david-dm.org/unshiftio/querystringify)[![Coverage Status](http://img.shields.io/coveralls/unshiftio/querystringify/master.svg?style=flat-square)](https://coveralls.io/r/unshiftio/querystringify?branch=master)[![IRC channel](http://img.shields.io/badge/IRC-irc.freenode.net%23unshift-00a8ff.svg?style=flat-square)](http://webchat.freenode.net/?channels=unshift)

A somewhat JSON compatible interface for query string parsing. This query string
parser is dumb, don't expect to much from it as it only wants to parse simple
query strings. If you want to parse complex, multi level and deeply nested
query strings then you should ask your self. WTF am I doing?

## Installation

This module is released in npm as `querystringify`. It's also compatible with
`browserify` so it can be used on the server as well as on the client. To
install it simply run the following command from your CLI:

```
npm install --save querystringify
```

## Usage

In the following examples we assume that you've already required the library as:

```js
'use strict';

var qs = require('querystringify');
```

### qs.parse()

The parse method transforms a given query string in to an object. Parameters
without values are set to empty strings. It does not care if your query string
is prefixed with a `?` or not. It just extracts the parts between the `=` and
`&`:

```js
qs.parse('?foo=bar');         // { foo: 'bar' }
qs.parse('foo=bar');          // { foo: 'bar' }
qs.parse('foo=bar&bar=foo');  // { foo: 'bar', bar: 'foo' }
qs.parse('foo&bar=foo');      // { foo: '', bar: 'foo' }
```

### qs.stringify()

This transforms a given object in to a query string. By default we return the
query string without a `?` prefix. If you want to prefix it by default simply
supply `true` as second argument. If it should be prefixed by something else
simply supply a string with the prefix value as second argument:

```js
qs.stringify({ foo: bar });       // foo=bar
qs.stringify({ foo: bar }, true); // ?foo=bar
qs.stringify({ foo: bar }, '&');  // &foo=bar
qs.stringify({ foo: '' }, '&');   // &foo=
```

## License

MIT
