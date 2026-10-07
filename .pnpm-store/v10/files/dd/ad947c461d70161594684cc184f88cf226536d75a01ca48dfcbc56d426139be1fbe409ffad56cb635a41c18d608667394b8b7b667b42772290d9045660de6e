# unist-util-remove-position

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**unist**][unist] utility to remove [`position`][position]s from tree.

## Install

[npm][]:

```sh
npm install unist-util-remove-position
```

## Use

```js
var remark = require('remark')
var removePosition = require('unist-util-remove-position')

var tree = remark().parse('Some _emphasis_, **importance**, and `code`.')

removePosition(tree, true)

console.dir(tree, {depth: null})
```

Yields:

```js
{
  type: 'root',
  children: [
    {
      type: 'paragraph',
      children: [
        {type: 'text', value: 'Some '},
        {type: 'emphasis', children: [{type: 'text', value: 'emphasis'}]},
        {type: 'text', value: ', '},
        {type: 'strong', children: [{type: 'text', value: 'importance'}]},
        {type: 'text', value: ', and '},
        {type: 'inlineCode', value: 'code'},
        {type: 'text', value: '.'}
      ]
    }
  ]
}
```

## API

### `removePosition(node[, force])`

Remove [`position`][position] fields from [`node`][node].
If `force` is given, uses `delete`, otherwise, sets `position`s to `undefined`.

###### Returns

The given `node`.

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

[build-badge]: https://img.shields.io/travis/syntax-tree/unist-util-remove-position.svg

[build]: https://travis-ci.org/syntax-tree/unist-util-remove-position

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/unist-util-remove-position.svg

[coverage]: https://codecov.io/github/syntax-tree/unist-util-remove-position

[downloads-badge]: https://img.shields.io/npm/dm/unist-util-remove-position.svg

[downloads]: https://www.npmjs.com/package/unist-util-remove-position

[size-badge]: https://img.shields.io/bundlephobia/minzip/unist-util-remove-position.svg

[size]: https://bundlephobia.com/result?p=unist-util-remove-position

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

[position]: https://github.com/syntax-tree/unist#position

[node]: https://github.com/syntax-tree/unist#node
