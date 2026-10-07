# module-details-from-path

Resolve npm package details, like name and base path, given an absolute path to a file inside a package.

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Installation

```
npm install module-details-from-path --save
```

## Usage

```js
const assert = require('assert')
const parse = require('module-details-from-path')

const path = '/Users/watson/code/node_modules/blackjack/node_modules/picture-tube/bin/tube.js'

assert.deepStrictEqual(parse(path), {
  name: 'picture-tube',
  basedir: '/Users/watson/code/node_modules/blackjack/node_modules/picture-tube',
  path: 'bin/tube.js'
})
```

Returns `undefined` if module details cannot be found.

## License

MIT
