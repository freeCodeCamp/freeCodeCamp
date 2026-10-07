# unist-util-visit-children

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**unist**][unist] utility to visit direct children of a parent.

## Install

[npm][]:

```sh
npm install unist-util-visit-children
```

## Use

```js
var u = require('unist-builder')
var visitChildren = require('unist-util-visit-children')

var visit = visitChildren(function(node) {
  console.log(node)
})

var tree = u('tree', [
  u('leaf', 'leaf 1'),
  u('node', [u('leaf', 'leaf 2'), u('leaf', 'leaf 3')]),
  u('leaf', 'leaf 4'),
  u('void')
])

visit(tree)
```

Yields:

```js
{type: 'leaf', value: 'leaf 1'}
{
  type: 'node',
  children: [
    {type: 'leaf', value: 'leaf 2'},
    {type: 'leaf', value: 'leaf 3'}
  ]
}
{type: 'leaf', value: 'leaf 4'}
{type: 'void'}
```

## API

### `visit = visitChildren(visitor)`

Wrap [`visitor`][visitor] to be invoked for each [child][] in the nodes later
given to [`visit`][visit].

#### `function visitor(child, index, parent)`

Invoked if [`visit`][visit] is called on a [parent][] node for each [child][].

#### `function visit(parent)`

Invoke [`visitor`][visitor] for each [child][] of the [parent][].

## Related

*   [`unist-util-visit`](https://github.com/syntax-tree/unist-util-visit)
    — Recursively walk over nodes
*   [`unist-util-visit-parents`](https://github.com/syntax-tree/unist-util-visit-parents)
    — Like `visit`, but with a stack of parents
*   [`unist-util-filter`](https://github.com/eush77/unist-util-filter)
    — Create a new tree with all nodes that pass a test
*   [`unist-util-map`](https://github.com/syntax-tree/unist-util-map)
    — Create a new tree with all nodes mapped by a given function
*   [`unist-util-flatmap`](https://gitlab.com/staltz/unist-util-flatmap)
    — Create a new tree by mapping (to an array) with the provided function and
    then flattening
*   [`unist-util-find-all-after`](https://github.com/syntax-tree/unist-util-find-all-after)
    — Find nodes after another node
*   [`unist-util-find-all-before`](https://github.com/syntax-tree/unist-util-find-all-before)
    — Find nodes before another node
*   [`unist-util-find-after`](https://github.com/syntax-tree/unist-util-find-after)
    — Find a node after another node
*   [`unist-util-find-before`](https://github.com/syntax-tree/unist-util-find-before)
    — Find a node before another node
*   [`unist-util-find-all-between`](https://github.com/mrzmmr/unist-util-find-all-between)
    — Find all nodes between two nodes
*   [`unist-util-remove`](https://github.com/eush77/unist-util-remove)
    — Remove nodes from a tree that pass a test
*   [`unist-util-select`](https://github.com/eush77/unist-util-select)
    — Select nodes with CSS-like selectors

## Contribute

See [`contributing.md` in `syntax-tree/.github`][contributing] for ways to get
started.
See [`support.md`][support] for ways to get help.

This project has a [Code of Conduct][coc].
By interacting with this repository, organisation, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/syntax-tree/unist-util-visit-children.svg

[build]: https://travis-ci.org/syntax-tree/unist-util-visit-children

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/unist-util-visit-children.svg

[coverage]: https://codecov.io/github/syntax-tree/unist-util-visit-children

[downloads-badge]: https://img.shields.io/npm/dm/unist-util-visit-children.svg

[downloads]: https://www.npmjs.com/package/unist-util-visit-children

[size-badge]: https://img.shields.io/bundlephobia/minzip/unist-util-visit-children.svg

[size]: https://bundlephobia.com/result?p=unist-util-visit-children

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/syntax-tree

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[unist]: https://github.com/syntax-tree/unist

[parent]: https://github.com/syntax-tree/unist#parent-1

[child]: https://github.com/syntax-tree/unist#child

[visit]: #function-visitparent

[visitor]: #function-visitorchild-index-parent

[contributing]: https://github.com/syntax-tree/.github/blob/master/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/master/support.md

[coc]: https://github.com/syntax-tree/.github/blob/master/code-of-conduct.md
