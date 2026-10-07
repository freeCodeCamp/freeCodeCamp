# mdast-util-from-markdown

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

**[mdast][]** utility to parse markdown.

## Install

[npm][]:

```sh
npm install mdast-util-from-markdown
```

## Use

Say we have the following markdown file, `example.md`:

```markdown
## Hello, *World*!
```

And our script, `example.js`, looks as follows:

```js
var fs = require('fs')
var fromMarkdown = require('mdast-util-from-markdown')

var doc = fs.readFileSync('example.md')

var tree = fromMarkdown(doc)

console.log(tree)
```

Now, running `node example` yields (positional info removed for brevity):

```js
{
  type: 'root',
  children: [
    {
      type: 'heading',
      depth: 2,
      children: [
        {type: 'text', value: 'Hello, '},
        {
          type: 'emphasis',
          children: [{type: 'text', value: 'World'}]
        },
        {type: 'text', value: '!'}
      ]
    }
  ]
}
```

## API

### `fromMarkdown(doc[, encoding][, options])`

Parse markdown to a **[mdast][]** tree.

##### Parameters

###### `doc`

Value to parse (`string` or [`Buffer`][buffer]).

###### `encoding`

[Character encoding][encoding] to understand `doc` as when it’s a
[`Buffer`][buffer] (`string`, default: `'utf8'`).

###### `options.extensions`

Array of syntax extensions (`Array.<MicromarkSyntaxExtension>`, default: `[]`).
Passed to [`micromark` as `extensions`][micromark-extensions].

###### `options.mdastExtensions`

Array of mdast extensions (`Array.<MdastExtension>`, default: `[]`).

##### Returns

[`Root`][root].

## List of extensions

*   [`syntax-tree/mdast-util-directive`](https://github.com/syntax-tree/mdast-util-directive)
    — parse directives
*   [`syntax-tree/mdast-util-footnote`](https://github.com/syntax-tree/mdast-util-footnote)
    — parse footnotes
*   [`syntax-tree/mdast-util-frontmatter`](https://github.com/syntax-tree/mdast-util-frontmatter)
    — parse frontmatter (YAML, TOML, more)
*   [`syntax-tree/mdast-util-gfm`](https://github.com/syntax-tree/mdast-util-gfm)
    — parse GFM
*   [`syntax-tree/mdast-util-gfm-autolink-literal`](https://github.com/syntax-tree/mdast-util-gfm-autolink-literal)
    — parse GFM autolink literals
*   [`syntax-tree/mdast-util-gfm-strikethrough`](https://github.com/syntax-tree/mdast-util-gfm-strikethrough)
    — parse GFM strikethrough
*   [`syntax-tree/mdast-util-gfm-table`](https://github.com/syntax-tree/mdast-util-gfm-table)
    — parse GFM tables
*   [`syntax-tree/mdast-util-gfm-task-list-item`](https://github.com/syntax-tree/mdast-util-gfm-task-list-item)
    — parse GFM task list items
*   [`syntax-tree/mdast-util-math`](https://github.com/syntax-tree/mdast-util-math)
    — parse math
*   [`syntax-tree/mdast-util-mdx`](https://github.com/syntax-tree/mdast-util-mdx)
    — parse MDX or MDX.js
*   [`syntax-tree/mdast-util-mdx-expression`](https://github.com/syntax-tree/mdast-util-mdx-expression)
    — parse MDX or MDX.js expressions
*   [`syntax-tree/mdast-util-mdx-jsx`](https://github.com/syntax-tree/mdast-util-mdx-jsx)
    — parse MDX or MDX.js JSX
*   [`syntax-tree/mdast-util-mdxjs-esm`](https://github.com/syntax-tree/mdast-util-mdxjs-esm)
    — parse MDX.js ESM

## Security

As Markdown is sometimes used for HTML, and improper use of HTML can open you up
to a [cross-site scripting (XSS)][xss] attack, use of `mdast-util-from-markdown`
can also be unsafe.
When going to HTML, use this utility in combination with
[`hast-util-sanitize`][sanitize] to make the tree safe.

## Related

*   [`micromark/micromark`](https://github.com/micromark/micromark)
    — the smallest commonmark-compliant markdown parser that exists
*   [`remarkjs/remark`](https://github.com/remarkjs/remark)
    — markdown processor powered by plugins
*   [`syntax-tree/mdast-util-to-markdown`](https://github.com/syntax-tree/mdast-util-to-markdown)
    — serialize mdast to markdown

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

[build-badge]: https://github.com/syntax-tree/mdast-util-from-markdown/workflows/main/badge.svg

[build]: https://github.com/syntax-tree/mdast-util-from-markdown/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/mdast-util-from-markdown.svg

[coverage]: https://codecov.io/github/syntax-tree/mdast-util-from-markdown

[downloads-badge]: https://img.shields.io/npm/dm/mdast-util-from-markdown.svg

[downloads]: https://www.npmjs.com/package/mdast-util-from-markdown

[size-badge]: https://img.shields.io/bundlephobia/minzip/mdast-util-from-markdown.svg

[size]: https://bundlephobia.com/result?p=mdast-util-from-markdown

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

[root]: https://github.com/syntax-tree/mdast#root

[encoding]: https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings

[buffer]: https://nodejs.org/api/buffer.html

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting

[sanitize]: https://github.com/syntax-tree/hast-util-sanitize

[micromark-extensions]: https://github.com/micromark/micromark#optionsextensions
