# abab [![npm version](https://badge.fury.io/js/abab.svg)](https://www.npmjs.com/package/abab) [![Build Status](https://travis-ci.org/jsdom/abab.svg?branch=master)](https://travis-ci.org/jsdom/abab)

A JavaScript module that implements `window.atob` and `window.btoa` according the forgiving-base64 algorithm in the [Infra Standard](https://infra.spec.whatwg.org/#forgiving-base64). The original code was forked from [w3c/web-platform-tests](https://github.com/w3c/web-platform-tests/blob/master/html/webappapis/atob/base64.html).

Compatibility: Node.js version 3+ and all major browsers.

Install with `npm`:

```sh
npm install abab
```

## API

### `btoa` (base64 encode)

```js
const { btoa } = require('abab');
btoa('Hello, world!'); // 'SGVsbG8sIHdvcmxkIQ=='
```

### `atob` (base64 decode)

```js 
const { atob } = require('abab');
atob('SGVsbG8sIHdvcmxkIQ=='); // 'Hello, world!'
```

#### Valid characters

[Per the spec](https://html.spec.whatwg.org/multipage/webappapis.html#atob:dom-windowbase64-btoa-3), `btoa` will accept strings "containing only characters in the range `U+0000` to `U+00FF`." If passed a string with characters above `U+00FF`, `btoa` will return `null`. If `atob` is passed a string that is not base64-valid, it will also return `null`. In both cases when `null` is returned, the spec calls for throwing a `DOMException` of type `InvalidCharacterError`.

## Browsers

If you want to include just one of the methods to save bytes in your client-side code, you can `require` the desired module directly.

```js
const atob = require('abab/lib/atob');
const btoa = require('abab/lib/btoa');
```

## Development

If you're **submitting a PR** or **deploying to npm**, please use the [checklists in CONTRIBUTING.md](CONTRIBUTING.md#checklists).

## Remembering what `atob` and `btoa` stand for

Base64 comes from IETF [RFC 4648](https://tools.ietf.org/html/rfc4648#section-4) (2006). 

- **`btoa`**, the encoder function, stands for **binary** to **ASCII**, meaning it converts any binary input into a subset of **ASCII** (Base64).
- **`atob`**, the decoder function, converts **ASCII** (or Base64) to its original **binary** format. 
