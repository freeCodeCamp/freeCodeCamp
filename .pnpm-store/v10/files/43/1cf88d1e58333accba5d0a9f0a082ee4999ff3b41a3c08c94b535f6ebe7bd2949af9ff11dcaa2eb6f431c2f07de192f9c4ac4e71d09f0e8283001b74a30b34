# unist-util-is

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**unist**][unist] utility to check if a node passes a test.

## Install

[npm][]:

```sh
npm install unist-util-is
```

## Use

```js
var is = require('unist-util-is')

var node = {type: 'strong'}
var parent = {type: 'paragraph', children: [node]}

function test(node, n) {
  return n === 5
}

is() // => false
is({children: []}) // => false
is(node) // => true
is(node, 'strong') // => true
is(node, 'emphasis') // => false

is(node, node) // => true
is(parent, {type: 'paragraph'}) // => true
is(parent, {type: 'strong'}) // => false

is(node, test) // => false
is(node, test, 4, parent) // => false
is(node, test, 5, parent) // => true
```

## API

### `is(node[, test[, index, parent[, context]]])`

###### Parameters

*   `node` ([`Node`][node]) — Node to check.
*   `test` ([`Function`][test], `string`, `Object`, or `Array.<Test>`, optional)
    —  When nullish, checks if `node` is a [`Node`][node].
    When `string`, works like passing `node => node.type === test`.
    When `array`, checks if any one of the subtests pass.
    When `object`, checks that all keys in `test` are in `node`,
    and that they have strictly equal values
*   `index` (`number`, optional) — [Index][] of `node` in `parent`
*   `parent` ([`Node`][node], optional) — [Parent][] of `node`
*   `context` (`*`, optional) — Context object to invoke `test` with

###### Returns

`boolean` — Whether `test` passed *and* `node` is a [`Node`][node] (object with
`type` set to a non-empty `string`).

#### `function test(node[, index, parent])`

###### Parameters

*   `node` ([`Node`][node]) — Node to check
*   `index` (`number?`) — [Index][] of `node` in `parent`
*   `parent` ([`Node?`][node]) — [Parent][] of `node`

###### Context

`*` — The to `is` given `context`.

###### Returns

`boolean?` — Whether `node` matches.

### `is.convert(test)`

Create a test function from `test`, that can later be called with a `node`,
`index`, and `parent`.
Useful if you’re going to test many nodes, for example when creating a utility
where something else passes an is-compatible test.

The created function is slightly faster because it expects valid input only.
Therefore, passing invalid input, yields unexpected results.

Can also be accessed with `require('unist-util-is/convert')`.

For example:

```js
var u = require('unist-builder')
var convert = require('unist-util-is/convert')

var test = convert('leaf')

var tree = u('tree', [
  u('node', [u('leaf', '1')]),
  u('leaf', '2'),
  u('node', [u('leaf', '3'), u('leaf', '4')]),
  u('leaf', '5')
])

var leafs = tree.children.filter((child, index) => test(child, index, tree))

console.log(leafs)
```

Yields:

```js
[{type: 'leaf', value: '2'}, {type: 'leaf', value: '5'}]
```

## Related

*   [`unist-util-find-after`](https://github.com/syntax-tree/unist-util-find-after)
    — Find a node after another node
*   [`unist-util-find-before`](https://github.com/syntax-tree/unist-util-find-before)
    — Find a node before another node
*   [`unist-util-find-all-after`](https://github.com/syntax-tree/unist-util-find-all-after)
    — Find all nodes after another node
*   [`unist-util-find-all-before`](https://github.com/syntax-tree/unist-util-find-all-before)
    — Find all nodes before another node
*   [`unist-util-find-all-between`](https://github.com/mrzmmr/unist-util-find-all-between)
    — Find all nodes between two nodes
*   [`unist-util-filter`](https://github.com/syntax-tree/unist-util-filter)
    — Create a new tree with nodes that pass a check
*   [`unist-util-remove`](https://github.com/syntax-tree/unist-util-remove)
    — Remove nodes from tree

## Contribute

See [`contributing.md` in `syntax-tree/.github`][contributing] for ways to get
started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/syntax-tree/unist-util-is/workflows/main/badge.svg

[build]: https://github.com/syntax-tree/unist-util-is/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/unist-util-is.svg

[coverage]: https://codecov.io/github/syntax-tree/unist-util-is

[downloads-badge]: https://img.shields.io/npm/dm/unist-util-is.svg

[downloads]: https://www.npmjs.com/package/unist-util-is

[size-badge]: https://img.shields.io/bundlephobia/minzip/unist-util-is.svg

[size]: https://bundlephobia.com/result?p=unist-util-is

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/syntax-tree/unist/discussions

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[contributing]: https://github.com/syntax-tree/.github/blob/HEAD/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/HEAD/support.md

[coc]: https://github.com/syntax-tree/.github/blob/HEAD/code-of-conduct.md

[unist]: https://github.com/syntax-tree/unist

[node]: https://github.com/syntax-tree/unist#node

[parent]: https://github.com/syntax-tree/unist#parent-1

[index]: https://github.com/syntax-tree/unist#index

[test]: #function-testnode-index-parent
