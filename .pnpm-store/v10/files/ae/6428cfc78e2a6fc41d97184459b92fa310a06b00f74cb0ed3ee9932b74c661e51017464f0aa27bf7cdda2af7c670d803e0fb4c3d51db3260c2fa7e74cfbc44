# unist-util-find-all-between

[![Travis](https://img.shields.io/travis/mrzmmr/unist-util-find-all-between.svg)](https://travis-ci.org/mrzmmr/unist-util-find-all-between)
[![Coverage
Status](https://coveralls.io/repos/github/mrzmmr/unist-util-find-all-between/badge.svg?branch=master)](https://coveralls.io/github/mrzmmr/unist-util-find-all-between?branch=master)


[unist](https://github.com/syntax-tree/unist) utility to find nodes between two nodes.

## Install

```sh
npm i -S unist-util-find-all-between
```

## Usage

```js
const between = require('unist-util-find-all-between')
const u = require('unist-builder')

const parent = u('tree', [
  u('leaf', 'leaf 1'),
  u('node', [u('leaf', 'leaf 2'), u('leaf', 'leaf 3')]),
  u('leaf', 'leaf 4'),
  u('node', [u('leaf', 'leaf 5')]),
  u('leaf', 'leaf 6'),
  u('void'),
  u('leaf', 'leaf 7')
])

const result = between(parent, 0, 4, 'leaf')

console.log(result)
```

Yields:

```js
[ { type: 'leaf', value: 'leaf 4' } ]
```

You can also pass a node in as `start` and/or `end`. For example given the tree above,

```js
// ...

const start = {
  type: 'leaf',
  value: 'leaf 4'
}

const end = {
  type: 'leaf',
  value: 'leaf 6'
}

const result = between(parent, start, end, 'node')

console.dir(result, {depth: null})
```

Yields:

```js
[ { type: 'node',
    children: [ { type: 'leaf', value: 'leaf 5' } ] } ]
```

## API

### `between(parent, start, end[, test])`

Find all child nodes of `parent`, that pass `test` between but not including `start` and `end`.

#### `parent`
Type: `Node`

Parent node to search through.

#### `start`
Type: `Node` | `index`

Child of `parent` node. Can be an actual node or the index of a child node. If a node is given, [unist-util-find](https://github.com/blahah/unist-util-find#api) is used to find the node.

#### `end`
Type: `Node` | `index`

Child of `parent` node. Can be an actual node or the index of a child node. If a node is given, [unist-util-find](https://github.com/blahah/unist-util-find#api) is used to find the node.

#### `test`?
Type: `Function` | `String` | `Object` | `Array`

Test to find nodes. Uses [unist-util-is](https://github.com/syntax-tree/unist-util-is#api) to check.

## Related

- [`unist-util-find-all-before`](https://github.com/syntax-tree/unist-util-find-all-before)
- [`unist-util-find-all-after`](https://github.com/syntax-tree/unist-util-find-all-after)
- [`unist-util-find`](https://github.com/blahah/unist-util-find)
- [`unist-util-is`](https://github.com/syntax-tree/unist-util-is)

## Contribute

PRs accepted and greatly appreciated.

## License

MIT © Paul Zimmer