# expand-template

> Expand placeholders in a template string.

[![npm](https://img.shields.io/npm/v/expand-template.svg)](https://www.npmjs.com/package/expand-template)
![Node version](https://img.shields.io/node/v/expand-template.svg)
[![Build Status](https://travis-ci.org/ralphtheninja/expand-template.svg?branch=master)](https://travis-ci.org/ralphtheninja/expand-template)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```
$ npm i expand-template -S
```

## Usage

Default functionality expands templates using `{}` as separators for string placeholders.

```js
var expand = require('expand-template')()
var template = '{foo}/{foo}/{bar}/{bar}'
console.log(expand(template, {
  foo: 'BAR',
  bar: 'FOO'
}))
// -> BAR/BAR/FOO/FOO
```

Custom separators:

```js
var expand = require('expand-template')({ sep: '[]' })
var template = '[foo]/[foo]/[bar]/[bar]'
console.log(expand(template, {
  foo: 'BAR',
  bar: 'FOO'
}))
// -> BAR/BAR/FOO/FOO
```

## License
All code, unless stated otherwise, is dual-licensed under [`WTFPL`](http://www.wtfpl.net/txt/copying/) and [`MIT`](https://opensource.org/licenses/MIT).
