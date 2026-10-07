# unist-util-remove

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**unist**][unist] utility to modify the given tree by removing all nodes that
pass the given test.

## Install

[npm][]:

```sh
npm install unist-util-remove
```

## Use

```js
var u = require('unist-builder')
var remove = require('unist-util-remove')

var tree = u('root', [
  u('leaf', '1'),
  u('node', [
    u('leaf', '2'),
    u('node', [u('leaf', '3'), u('other', '4')]),
    u('node', [u('leaf', '5')])
  ]),
  u('leaf', '6')
])

// Remove all nodes of type `leaf`.
remove(tree, 'leaf')

console.dir(tree, {depth: null})
```

Yields: (note the parent of `5` is also removed, due to `options.cascade`)

```js
{
  type: 'root',
  children: [
    {
      type: 'node',
      children: [
        { type: 'node', children: [ { type: 'other', value: '4' } ] }
      ]
    }
  ]
}
```

## API

### `remove(tree[, options][, test])`

Mutate the given [tree][] by removing all nodes that pass `test`.
The tree is walked in [preorder][] (NLR), visiting the node itself, then its
[head][], etc.

###### Parameters

*   `tree` ([`Node?`][node])
    — [Tree][] to filter
*   `options.cascade` (`boolean`, default: `true`)
    — Whether to drop parent nodes if they had children, but all their children
    were filtered out
*   `test` ([`Test`][is], optional) — [`is`][is]-compatible test (such as a
    [type][])

###### Returns

[`Node?`][node] — The given `tree` with nodes for which `test` passed removed.
`null` is returned if `tree` itself didn’t pass the test, or is cascaded away.

## Related

*   [`unist-util-filter`](https://github.com/syntax-tree/unist-util-filter)
    — Create a new tree with all nodes that pass the given function
*   [`unist-util-flatmap`](https://gitlab.com/staltz/unist-util-flatmap)
    — Create a new tree by expanding a node into many
*   [`unist-util-map`](https://github.com/syntax-tree/unist-util-map)
    — Create a new tree by mapping nodes
*   [`unist-util-select`](https://github.com/syntax-tree/unist-util-select)
    — Select nodes with CSS-like selectors
*   [`unist-util-visit`](https://github.com/syntax-tree/unist-util-visit)
    — Recursively walk over nodes
*   [`unist-builder`](https://github.com/syntax-tree/unist-builder)
    — Creating trees

## Contribute

See [`contributing.md` in `syntax-tree/.github`][contributing] for ways to get
started.
See [`support.md`][support] for ways to get help.

This project has a [Code of Conduct][coc].
By interacting with this repository, organisation, or community you agree to
abide by its terms.

## License

[MIT][license] © Eugene Sharygin

<!-- Definitions -->

[build-badge]: https://github.com/syntax-tree/unist-util-filter/workflows/main/badge.svg

[build]: https://github.com/syntax-tree/unist-util-filter/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/unist-util-filter.svg

[coverage]: https://codecov.io/github/syntax-tree/unist-util-filter

[downloads-badge]: https://img.shields.io/npm/dm/unist-util-filter.svg

[downloads]: https://www.npmjs.com/package/unist-util-filter

[size-badge]: https://img.shields.io/bundlephobia/minzip/unist-util-filter.svg

[size]: https://bundlephobia.com/result?p=unist-util-filter

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/syntax-tree/unist/discussions

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[unist]: https://github.com/syntax-tree/unist

[node]: https://github.com/syntax-tree/unist#node

[tree]: https://github.com/syntax-tree/unist#tree

[preorder]: https://github.com/syntax-tree/unist#preorder

[head]: https://github.com/syntax-tree/unist#head

[type]: https://github.com/syntax-tree/unist#type

[is]: https://github.com/syntax-tree/unist-util-is

[contributing]: https://github.com/syntax-tree/.github/blob/HEAD/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/HEAD/support.md

[coc]: https://github.com/syntax-tree/.github/blob/HEAD/code-of-conduct.md
