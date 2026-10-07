# unist-util-visit

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**unist**][unist] utility to visit nodes.

## Install

[npm][]:

```sh
npm install unist-util-visit
```

## Use

```js
var u = require('unist-builder')
var visit = require('unist-util-visit')

var tree = u('tree', [
  u('leaf', '1'),
  u('node', [u('leaf', '2')]),
  u('void'),
  u('leaf', '3')
])

visit(tree, 'leaf', function(node) {
  console.log(node)
})
```

Yields:

```js
{ type: 'leaf', value: '1' }
{ type: 'leaf', value: '2' }
{ type: 'leaf', value: '3' }
```

## API

### `visit(tree[, test], visitor[, reverse])`

This function works exactly the same as [`unist-util-visit-parents`][vp],
but `visitor` has a different signature.

#### `next? = visitor(node, index, parent)`

Instead of being passed an array of ancestors, `visitor` is invoked with the
node’s [`index`][index] and its [`parent`][parent].

Otherwise the same as [`unist-util-visit-parents`][vp].

## Related

*   [`unist-util-visit-parents`][vp]
    — Like `visit`, but with a stack of parents
*   [`unist-util-filter`](https://github.com/syntax-tree/unist-util-filter)
    — Create a new tree with all nodes that pass a test
*   [`unist-util-map`](https://github.com/syntax-tree/unist-util-map)
    — Create a new tree with all nodes mapped by a given function
*   [`unist-util-flatmap`](https://gitlab.com/staltz/unist-util-flatmap)
    — Create a new tree by mapping (to an array) with the given function
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

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/syntax-tree/unist-util-visit.svg

[build]: https://travis-ci.org/syntax-tree/unist-util-visit

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/unist-util-visit.svg

[coverage]: https://codecov.io/github/syntax-tree/unist-util-visit

[downloads-badge]: https://img.shields.io/npm/dm/unist-util-visit.svg

[downloads]: https://www.npmjs.com/package/unist-util-visit

[size-badge]: https://img.shields.io/bundlephobia/minzip/unist-util-visit.svg

[size]: https://bundlephobia.com/result?p=unist-util-visit

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/syntax-tree

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[contributing]: https://github.com/syntax-tree/.github/blob/HEAD/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/HEAD/support.md

[coc]: https://github.com/syntax-tree/.github/blob/HEAD/code-of-conduct.md

[unist]: https://github.com/syntax-tree/unist

[vp]: https://github.com/syntax-tree/unist-util-visit-parents

[index]: https://github.com/syntax-tree/unist#index

[parent]: https://github.com/syntax-tree/unist#parent-1
