# mdast-util-to-nlcst

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**mdast**][mdast] utility to transform to [**nlcst**][nlcst].

> **Note**: You probably want to use [`remark-retext`][remark-retext].

## Install

[npm][]:

```sh
npm install mdast-util-to-nlcst
```

## Use

```js
var toNlcst = require('mdast-util-to-nlcst')
var inspect = require('unist-util-inspect')
var English = require('parse-english')
var remark = require('remark')
var vfile = require('vfile')

var file = vfile('Some *foo*sball.')
var mdast = remark().parse(file)

var nlcst = toNlcst(mdast, file, English)

console.log(inspect(nlcst))
```

Yields:

```txt
RootNode[1] (1:1-1:17, 0-16)
└─0 ParagraphNode[1] (1:1-1:17, 0-16)
    └─0 SentenceNode[4] (1:1-1:17, 0-16)
        ├─0 WordNode[1] (1:1-1:5, 0-4)
        │   └─0 TextNode "Some" (1:1-1:5, 0-4)
        ├─1 WhiteSpaceNode " " (1:5-1:6, 4-5)
        ├─2 WordNode[2] (1:7-1:16, 6-15)
        │   ├─0 TextNode "foo" (1:7-1:10, 6-9)
        │   └─1 TextNode "sball" (1:11-1:16, 10-15)
        └─3 PunctuationNode "." (1:16-1:17, 15-16)
```

## API

### `toNlcst(tree, file, Parser[, options])`

Transform a [tree][] in [mdast][], with a corresponding [virtual file][vfile],
into [nlcst][].

##### Parameters

###### `node`

Tree in [mdast][] with positional information ([`MdastNode`][mdastnode]).

###### `file`

Virtual file ([`VFile`][vfile]).

###### `parser`

[nlcst][] parser (`Function`).
For example, [`parse-english`][english], [`parse-dutch`][dutch], or
[`parse-latin`][latin].

###### `options.ignore`

List of [types][type] to ignore (`Array.<string>`).

`'table'`, `'tableRow'`, and `'tableCell'` are always ignored.

###### `options.source`

List of [types][type] to mark as [source][] (`Array.<string>`).

`'inlineCode'` is always marked as source.

##### Returns

[`NlcstNode`][nlcstnode].

##### Examples

###### `ignore`

Say we have the following file `example.md`:

```md
A paragraph.

> A paragraph in a block quote.
```

…and if we now transform with `ignore: ['blockquote']`, we get:

```txt
RootNode[2] (1:1-3:1, 0-14)
├─0 ParagraphNode[1] (1:1-1:13, 0-12)
│   └─0 SentenceNode[4] (1:1-1:13, 0-12)
│       ├─0 WordNode[1] (1:1-1:2, 0-1)
│       │   └─0 TextNode "A" (1:1-1:2, 0-1)
│       ├─1 WhiteSpaceNode " " (1:2-1:3, 1-2)
│       ├─2 WordNode[1] (1:3-1:12, 2-11)
│       │   └─0 TextNode "paragraph" (1:3-1:12, 2-11)
│       └─3 PunctuationNode "." (1:12-1:13, 11-12)
└─1 WhiteSpaceNode "\n\n" (1:13-3:1, 12-14)
```

###### `source`

Say we have the following file `example.md`:

```md
A paragraph.

> A paragraph in a block quote.
```

…and if we now transform with `source: ['blockquote']`, we get:

```txt
RootNode[3] (1:1-3:32, 0-45)
├─0 ParagraphNode[1] (1:1-1:13, 0-12)
│   └─0 SentenceNode[4] (1:1-1:13, 0-12)
│       ├─0 WordNode[1] (1:1-1:2, 0-1)
│       │   └─0 TextNode "A" (1:1-1:2, 0-1)
│       ├─1 WhiteSpaceNode " " (1:2-1:3, 1-2)
│       ├─2 WordNode[1] (1:3-1:12, 2-11)
│       │   └─0 TextNode "paragraph" (1:3-1:12, 2-11)
│       └─3 PunctuationNode "." (1:12-1:13, 11-12)
├─1 WhiteSpaceNode "\n\n" (1:13-3:1, 12-14)
└─2 ParagraphNode[1] (3:1-3:32, 14-45)
    └─0 SentenceNode[1] (3:1-3:32, 14-45)
        └─0 SourceNode "> A paragraph in a block quote." (3:1-3:32, 14-45)
```

## Security

Use of `mdast-util-to-nlcst` does not involve [**hast**][hast] so there are no
openings for [cross-site scripting (XSS)][xss] attacks.

## Related

*   [`remark-retext`][remark-retext]
    — **retext** support for **remark**
*   [`hast-util-to-nlcst`](https://github.com/syntax-tree/hast-util-to-nlcst)
    — Transform [hast][] to [nlcst][]
*   [`hast-util-to-mdast`](https://github.com/syntax-tree/hast-util-to-mdast)
    — Transform [hast][] to [mdast][]
*   [`hast-util-to-xast`](https://github.com/syntax-tree/hast-util-to-xast)
    — Transform [hast][] to [xast][]
*   [`mdast-util-to-hast`](https://github.com/syntax-tree/mdast-util-to-hast)
    — Transform [mdast][] to [hast][]

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

[build-badge]: https://img.shields.io/travis/syntax-tree/mdast-util-to-nlcst.svg

[build]: https://travis-ci.org/syntax-tree/mdast-util-to-nlcst

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/mdast-util-to-nlcst.svg

[coverage]: https://codecov.io/github/syntax-tree/mdast-util-to-nlcst

[downloads-badge]: https://img.shields.io/npm/dm/mdast-util-to-nlcst.svg

[downloads]: https://www.npmjs.com/package/mdast-util-to-nlcst

[size-badge]: https://img.shields.io/bundlephobia/minzip/mdast-util-to-nlcst.svg

[size]: https://bundlephobia.com/result?p=mdast-util-to-nlcst

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

[nlcst]: https://github.com/syntax-tree/nlcst

[hast]: https://github.com/syntax-tree/hast

[xast]: https://github.com/syntax-tree/xast

[remark-retext]: https://github.com/remarkjs/remark-retext

[vfile]: https://github.com/vfile/vfile

[english]: https://github.com/wooorm/parse-english

[latin]: https://github.com/wooorm/parse-latin

[dutch]: https://github.com/wooorm/parse-dutch

[type]: https://github.com/syntax-tree/mdast#ast

[source]: https://github.com/syntax-tree/nlcst#source

[tree]: https://github.com/syntax-tree/unist#tree

[mdastnode]: https://github.com/syntax-tree/mdast#nodes

[nlcstnode]: https://github.com/syntax-tree/nlcst#nodes

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting
