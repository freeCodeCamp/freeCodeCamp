# unist-util-modify-children

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

Modify direct children of a parent.

## Install

[npm][]:

```sh
npm install unist-util-modify-children
```

## Use

```js
var u = require('unist-builder')
var modifyChildren = require('unist-util-modify-children')

var modify = modifyChildren(modifier)

var tree = u('root', [
  u('leaf', '1'),
  u('node', [u('leaf', '2')]),
  u('leaf', '3')
])

modify(tree)

console.dir(tree, {depth: null})

function modifier(node, index, parent) {
  if (node.type === 'node') {
    parent.children.splice(index, 1, {type: 'subtree', children: node.children})
    return index + 1
  }
}
```

Yields:

```js
{
  type: 'root',
  children: [
    {type: 'leaf', value: '1'},
    {type: 'subtree', children: [{type: 'leaf', value: '2'}]},
    {type: 'leaf', value: '3'}
  ]
}
```

## API

### `modify = modifyChildren(modifier)`

Wrap [`modifier`][modifier] to be invoked for each child in the node given to
[`modify`][modify].

#### `next? = modifier(child, index, parent)`

Invoked if [`modify`][modify] is called on a parent node for each `child`
in `parent`.

###### Returns

`number` (optional) — Next position to iterate.

#### `function modify(parent)`

Invoke the bound [`modifier`][modifier] for each child in `parent`
([`Node`][node]).

## Related

*   [`unist-util-visit`](https://github.com/syntax-tree/unist-util-visit)
    — Recursively walk over nodes
*   [`unist-util-visit-parents`](https://github.com/syntax-tree/unist-util-visit-parents)
    — Like `visit`, but with a stack of parents
*   [`unist-util-filter`](https://github.com/syntax-tree/unist-util-filter)
    — Create a new tree with all nodes that pass a test
*   [`unist-util-map`](https://github.com/syntax-tree/unist-util-map)
    — Create a new tree with all nodes mapped by a given function
*   [`unist-util-flatmap`](https://gitlab.com/staltz/unist-util-flatmap)
    — Create a new tree by mapping (to an array) with the provided function and
    then flattening
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
*   [`unist-util-remove`](https://github.com/syntax-tree/unist-util-remove)
    — Remove nodes from a tree that pass a test
*   [`unist-util-select`](https://github.com/syntax-tree/unist-util-select)
    — Select nodes with CSS-like selectors

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

[build-badge]: https://img.shields.io/travis/syntax-tree/unist-util-modify-children.svg

[build]: https://travis-ci.org/syntax-tree/unist-util-modify-children

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/unist-util-modify-children.svg

[coverage]: https://codecov.io/github/syntax-tree/unist-util-modify-children

[downloads-badge]: https://img.shields.io/npm/dm/unist-util-modify-children.svg

[downloads]: https://www.npmjs.com/package/unist-util-modify-children

[size-badge]: https://img.shields.io/bundlephobia/minzip/unist-util-modify-children.svg

[size]: https://bundlephobia.com/result?p=unist-util-modify-children

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/syntax-tree

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[contributing]: https://github.com/syntax-tree/.github/blob/master/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/master/support.md

[coc]: https://github.com/syntax-tree/.github/blob/master/code-of-conduct.md

[node]: https://github.com/syntax-tree/unist#node

[modifier]: #next--modifierchild-index-parent

[modify]: #function-modifyparent
