# nlcst-to-string

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**nlcst**][nlcst] utility to serialize a node.

## Install

[npm][]:

```sh
npm install nlcst-to-string
```

## Use

```js
var toString = require('nlcst-to-string')

console.log(
  toString({
    type: 'WordNode',
    children: [
      {type: 'TextNode', value: 'AT'},
      {type: 'PunctuationNode', value: '&'},
      {type: 'TextNode', value: 'T'}
    ]
  })
) // => 'AT&T'
```

## API

### `toString(node[, separator])`

Stringify the given [nlcst][] node (or list of nodes).

###### Parameters

*   `node` ([`Node`][node] or `Array.<Node>`)
*   `separator` (`string`, default: `''`) — Value to delimit each item

###### Returns

`string`.

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

[build-badge]: https://img.shields.io/travis/syntax-tree/nlcst-to-string.svg

[build]: https://travis-ci.org/syntax-tree/nlcst-to-string

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/nlcst-to-string.svg

[coverage]: https://codecov.io/github/syntax-tree/nlcst-to-string

[downloads-badge]: https://img.shields.io/npm/dm/nlcst-to-string.svg

[downloads]: https://www.npmjs.com/package/nlcst-to-string

[size-badge]: https://img.shields.io/bundlephobia/minzip/nlcst-to-string.svg

[size]: https://bundlephobia.com/result?p=nlcst-to-string

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

[nlcst]: https://github.com/syntax-tree/nlcst

[node]: https://github.com/syntax-tree/nlcst#nodes
