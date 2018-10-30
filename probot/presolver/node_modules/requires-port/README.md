# requires-port

[![Made by unshift](https://img.shields.io/badge/made%20by-unshift-00ffcc.svg?style=flat-square)](http://unshift.io)[![Version npm](http://img.shields.io/npm/v/requires-port.svg?style=flat-square)](http://browsenpm.org/package/requires-port)[![Build Status](http://img.shields.io/travis/unshiftio/requires-port/master.svg?style=flat-square)](https://travis-ci.org/unshiftio/requires-port)[![Dependencies](https://img.shields.io/david/unshiftio/requires-port.svg?style=flat-square)](https://david-dm.org/unshiftio/requires-port)[![Coverage Status](http://img.shields.io/coveralls/unshiftio/requires-port/master.svg?style=flat-square)](https://coveralls.io/r/unshiftio/requires-port?branch=master)[![IRC channel](http://img.shields.io/badge/IRC-irc.freenode.net%23unshift-00a8ff.svg?style=flat-square)](http://webchat.freenode.net/?channels=unshift)

The module name says it all, check if a protocol requires a given port.

## Installation

This module is intended to be used with browserify or Node.js and is distributed
in the public npm registry. To install it simply run the following command from
your CLI:

```j
npm install --save requires-port
```

## Usage

The module exports it self as function and requires 2 arguments:

1. The port number, can be a string or number.
2. Protocol, can be `http`, `http:` or even `https://yomoma.com`. We just split
   it at `:` and use the first result. We currently accept the following
   protocols:
   - `http`
   - `https`
   - `ws`
   - `wss`
   - `ftp`
   - `gopher`
   - `file`

It returns a boolean that indicates if protocol requires this port to be added
to your URL.

```js
'use strict';

var required = require('requires-port');

console.log(required('8080', 'http')) // true
console.log(required('80', 'http'))   // false
```

# License

MIT
