# arch [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![javascript style guide][standard-image]][standard-url]

[travis-image]: https://img.shields.io/travis/feross/arch/master.svg
[travis-url]: https://travis-ci.org/feross/arch
[npm-image]: https://img.shields.io/npm/v/arch.svg
[npm-url]: https://npmjs.org/package/arch
[downloads-image]: https://img.shields.io/npm/dm/arch.svg
[downloads-url]: https://npmjs.org/package/arch
[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com

### Better `os.arch()` for node and the browser -- detect OS architecture

[![Sauce Test Status](https://saucelabs.com/browser-matrix/arch2.svg)](https://saucelabs.com/u/arch2)

This module is used by [WebTorrent Desktop](http://webtorrent.io/desktop) to
determine if the user is on a 32-bit vs. 64-bit operating system to offer the
right app installer.

In Node.js, the `os.arch()` method (and `process.arch` property) returns a string
identifying the operating system CPU architecture **for which the Node.js binary
was compiled**.

This is not the same as the **operating system CPU architecture**. For example,
you can run Node.js 32-bit on a 64-bit OS. In that situation, `os.arch()` will
return a misleading 'x86' (32-bit) value, instead of 'x64' (64-bit).

Use this package to get the actual operating system CPU architecture.

**BONUS: This package works in the browser too.**

## install

```
npm install arch
```

## usage

```js
var arch = require('arch')
console.log(arch()) // always returns 'x64' or 'x86'
```

In the browser, there is no spec that defines where this information lives, so we
check all known locations including `navigator.userAgent`, `navigator.platform`,
and `navigator.cpuClass` to make a best guess.

If there is no *affirmative indication* that the architecture is 64-bit, then
32-bit will be assumed. This makes this package perfect for determining what
installer executable to offer to desktop app users. If there is ambiguity, then
the user will get the 32-bit installer, which will work fine even for a user with
a 64-bit OS.

For reference, `x64` means 64-bit and `x86` means 32-bit.

Here is some history behind these naming conventions:

- https://en.wikipedia.org/wiki/X86
- https://en.wikipedia.org/wiki/IA-32
- https://en.wikipedia.org/wiki/X86-64

## Node.js proposal - `os.sysarch()`

Note: There is
[a proposal](https://github.com/nodejs/node-v0.x-archive/issues/2862#issuecomment-103942051)
to add this functionality to Node.js as `os.sysarch()`.

## license

MIT. Copyright (c) [Feross Aboukhadijeh](http://feross.org).
