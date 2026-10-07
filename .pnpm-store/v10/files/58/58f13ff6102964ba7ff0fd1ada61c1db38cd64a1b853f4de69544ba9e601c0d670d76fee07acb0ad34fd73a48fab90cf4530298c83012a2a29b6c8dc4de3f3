# safe-regex2

[![CI](https://github.com/fastify/safe-regex2/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/fastify/safe-regex2/actions/workflows/ci.yml)
[![NPM version](https://img.shields.io/npm/v/safe-regex2.svg?style=flat)](https://www.npmjs.com/package/safe-regex2)
[![neostandard javascript style](https://img.shields.io/badge/code_style-neostandard-brightgreen?style=flat)](https://github.com/neostandard/neostandard)

Detect potentially [catastrophic](http://regular-expressions.mobi/catastrophic.html) [exponential-time](http://perlgeek.de/blog-en/perl-tips/in-search-of-an-exponetial-regexp.html)
regular expressions by limiting the [star height](https://en.wikipedia.org/wiki/Star_height) to 1.

This is a fork of https://github.com/substack/safe-regex at 1.1.0.

WARNING: This module has both false positives and false negatives.
It is not meant as a full checker, but it detects basic cases.

## Install
```
npm i safe-regex2
```

## Example

``` js
const safe = require('safe-regex2');
const regex = process.argv.slice(2).join(' ');
console.log(safe(regex));
```

```
$ node safe.js '(x+x+)+y'
false
$ node safe.js '(beep|boop)*'
true
$ node safe.js '(a+){10}'
false
$ node safe.js '\blocation\s*:[^:\n]+\b(Oakland|San Francisco)\b'
true
```

## Methods

``` js
const safe = require('safe-regex')
```

### const ok = safe(re, opts={})

Returns a boolean indicating whether the regex `re` is safe
and not possibly catastrophic.

`re` can be a `RegExp` object or just a string.

If `re` is a string and is an invalid regex, it returns `false`.

* `opts.limit` - maximum number of allowed repetitions in the entire regex.
Default: `25`.

## License

Licensed under [MIT](./LICENSE).
