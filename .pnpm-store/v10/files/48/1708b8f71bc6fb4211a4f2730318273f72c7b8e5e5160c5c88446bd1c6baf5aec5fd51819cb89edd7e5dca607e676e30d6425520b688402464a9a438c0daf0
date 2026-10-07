# mdast-util-gfm-autolink-literal

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

Extension for [`mdast-util-from-markdown`][from-markdown] and/or
[`mdast-util-to-markdown`][to-markdown] to support GitHub flavored markdown
autolink literals in **[mdast][]**.
When parsing (`from-markdown`), must be combined with
[`micromark-extension-gfm-autolink-literal`][extension].

You might want to use this package through [`remark-gfm`][remark-gfm] with
**[remark][]**.

## Install

[npm][]:

```sh
npm install mdast-util-gfm-autolink-literal
```

## Use

Say our script, `example.js`, looks as follows:

```js
var fromMarkdown = require('mdast-util-from-markdown')
var toMarkdown = require('mdast-util-to-markdown')
var syntax = require('micromark-extension-gfm-autolink-literal')
var autolinkLiteral = require('mdast-util-gfm-autolink-literal')

var doc = 'www.example.com, https://example.com, and contact@example.com.'

var tree = fromMarkdown(doc, {
  extensions: [syntax],
  mdastExtensions: [autolinkLiteral.fromMarkdown]
})

console.log(tree)

var out = toMarkdown(tree, {extensions: [autolinkLiteral.toMarkdown]})

console.log(out)
```

Now, running `node example` yields:

```js
{
  type: 'root',
  children: [
    {
      type: 'paragraph',
      children: [
        {
          type: 'link',
          title: null,
          url: 'http://www.example.com',
          children: [{type: 'text', value: 'www.example.com'}]
        },
        {type: 'text', value: ', '},
        {
          type: 'link',
          title: null,
          url: 'https://example.com',
          children: [{type: 'text', value: 'https://example.com'}]
        },
        {type: 'text', value: ', and '},
        {
          type: 'link',
          title: null,
          url: 'mailto:contact@example.com',
          children: [{type: 'text', value: 'contact@example.com'}]
        },
        {type: 'text', value: '.'}
      ]
    }
  ]
}
```

```markdown
[www.example.com](http://www.example.com), <https://example.com>, and <contact@example.com>.
```

## API

### `autolinkLiteral.fromMarkdown`

### `autolinkLiteral.toMarkdown`

> Note: the separate extensions are also available at
> `mdast-util-gfm-autolink-literal/from-markdown` and
> `mdast-util-gfm-autolink-literal/to-markdown`.

Support literal autolinks.
The exports are extensions, respectively
for [`mdast-util-from-markdown`][from-markdown] and
[`mdast-util-to-markdown`][to-markdown].

## Related

*   [`remarkjs/remark`][remark]
    — markdown processor powered by plugins
*   [`remarkjs/remark-gfm`][remark-gfm]
    — remark plugin to support GFM
*   [`micromark/micromark`][micromark]
    — the smallest commonmark-compliant markdown parser that exists
*   [`micromark/micromark-extension-gfm-autolink-literal`][extension]
    — micromark extension to parse GFM autolink literals
*   [`syntax-tree/mdast-util-from-markdown`][from-markdown]
    — mdast parser using `micromark` to create mdast from markdown
*   [`syntax-tree/mdast-util-to-markdown`][to-markdown]
    — mdast serializer to create markdown from mdast

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

[build-badge]: https://github.com/syntax-tree/mdast-util-gfm-autolink-literal/workflows/main/badge.svg

[build]: https://github.com/syntax-tree/mdast-util-gfm-autolink-literal/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/mdast-util-gfm-autolink-literal.svg

[coverage]: https://codecov.io/github/syntax-tree/mdast-util-gfm-autolink-literal

[downloads-badge]: https://img.shields.io/npm/dm/mdast-util-gfm-autolink-literal.svg

[downloads]: https://www.npmjs.com/package/mdast-util-gfm-autolink-literal

[size-badge]: https://img.shields.io/bundlephobia/minzip/mdast-util-gfm-autolink-literal.svg

[size]: https://bundlephobia.com/result?p=mdast-util-gfm-autolink-literal

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

[remark]: https://github.com/remarkjs/remark

[remark-gfm]: https://github.com/remarkjs/remark-gfm

[from-markdown]: https://github.com/syntax-tree/mdast-util-from-markdown

[to-markdown]: https://github.com/syntax-tree/mdast-util-to-markdown

[micromark]: https://github.com/micromark/micromark

[extension]: https://github.com/micromark/micromark-extension-gfm-autolink-literal
