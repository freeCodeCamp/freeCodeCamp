# module-details-from-path

Extract the Node.js module details like name and base path given an
absolute path to a file inside the module.

[![Build status](https://travis-ci.org/watson/module-details-from-path.svg?branch=master)](https://travis-ci.org/watson/module-details-from-path)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Installation

```
npm install module-details-from-path --save
```

## Usage

```js
var assert = require('assert')
var parse = require('module-details-from-path')

var path = '/Users/watson/code/node_modules/blackjack/node_modules/picture-tube/bin/tube.js'

assert.deepStrictEqual(parse(path), {
  name: 'picture-tube',
  basedir: '/Users/watson/code/node_modules/blackjack/node_modules/picture-tube',
  path: 'bin/tube.js'
})
```

Returns `undefined` if module details cannot be found.

## License

MIT
