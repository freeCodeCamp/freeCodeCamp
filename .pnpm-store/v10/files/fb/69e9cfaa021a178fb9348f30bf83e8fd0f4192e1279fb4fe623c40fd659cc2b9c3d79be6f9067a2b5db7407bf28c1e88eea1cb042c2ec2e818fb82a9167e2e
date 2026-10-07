# mdast-util-to-string

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

**[mdast][]** utility to get the plain text content of a node.

## Install

[npm][]:

```sh
npm install mdast-util-to-string
```

## Use

```js
var unified = require('unified')
var parse = require('remark-parse')
var toString = require('mdast-util-to-string')

var tree = unified()
  .use(parse)
  .parse('Some _emphasis_, **importance**, and `code`.')

console.log(toString(tree)) // => 'Some emphasis, importance, and code.'
```

## API

### `toString(node)`

Get the text content of a [node][] or list of nodes.

The algorithm checks `value` of `node`, then `alt`, and finally `title`.
If no value is found, the algorithm checks the children of `node` and joins them
(without spaces or newlines).

> This is not a markdown to plain-text library.
> Use [`strip-markdown`][strip-markdown] for that.

## Security

Use of `mdast-util-to-string` does not involve **[hast][]**, user content, or
change the tree, so there are no openings for [cross-site scripting (XSS)][xss]
attacks.

## Related

*   [`nlcst-to-string`](https://github.com/syntax-tree/nlcst-to-string)
    — Get text content in nlcst
*   [`hast-util-to-string`](https://github.com/wooorm/rehype-minify/tree/HEAD/packages/hast-util-to-string)
    — Get text content in hast
*   [`hast-util-to-text`](https://github.com/syntax-tree/hast-util-to-text)
    — Get text content in hast according to the `innerText` algorithm
*   [`hast-util-from-string`](https://github.com/wooorm/rehype-minify/tree/HEAD/packages/hast-util-from-string)
    — Set text content in hast

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

[build-badge]: https://github.com/syntax-tree/mdast-util-to-string/workflows/main/badge.svg

[build]: https://github.com/syntax-tree/mdast-util-to-string/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/mdast-util-to-string.svg

[coverage]: https://codecov.io/github/syntax-tree/mdast-util-to-string

[downloads-badge]: https://img.shields.io/npm/dm/mdast-util-to-string.svg

[downloads]: https://www.npmjs.com/package/mdast-util-to-string

[size-badge]: https://img.shields.io/bundlephobia/minzip/mdast-util-to-string.svg

[size]: https://bundlephobia.com/result?p=mdast-util-to-string

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

[mdast]: https://github.com/syntax-tree/mdast

[node]: https://github.com/syntax-tree/mdast#nodes

[strip-markdown]: https://github.com/remarkjs/strip-markdown

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting

[hast]: https://github.com/syntax-tree/hast
