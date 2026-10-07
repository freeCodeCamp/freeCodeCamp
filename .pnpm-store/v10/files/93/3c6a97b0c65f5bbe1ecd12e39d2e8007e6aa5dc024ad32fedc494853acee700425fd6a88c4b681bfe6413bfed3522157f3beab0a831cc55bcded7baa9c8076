# mdast-util-to-markdown

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
npm install mdast-util-to-markdown
```

## Use

Say we have the following script, `example.js`:

```js
var toMarkdown = require('mdast-util-to-markdown')

var tree = {
  type: 'root',
  children: [
    {
      type: 'blockquote',
      children: [
        {type: 'thematicBreak'},
        {
          type: 'paragraph',
          children: [
            {type: 'text', value: '- a\nb !'},
            {
              type: 'link',
              url: 'example.com',
              children: [{type: 'text', value: 'd'}]
            }
          ]
        }
      ]
    }
  ]
}

console.log(toMarkdown(tree))
```

Now, running `node example` yields (note the properly escaped characters which
would otherwise turn into a list and image respectively):

```markdown
> ***
>
> \- a
> b \![d](example.com)
```

## API

### `toMarkdown(tree[, options])`

Serialize **[mdast][]** to markdown.

##### Formatting options

###### `options.bullet`

Marker to use to for bullets of items in unordered lists (`'*'`, `'+'`, or `'-'`,
default: `'*'`).

###### `options.closeAtx`

Whether to add the same number of number signs (`#`) at the end of an ATX
heading as the opening sequence (`boolean`, default: `false`).

###### `options.emphasis`

Marker to use to serialize emphasis (`'*'` or `'_'`, default: `'*'`).

###### `options.fence`

Marker to use to serialize fenced code (``'`'`` or `'~'`, default: ``'`'``).

###### `options.fences`

Whether to use fenced code always (`boolean`, default: `false`).
The default is to fenced code if there is a language defined, if the code is
empty, or if it starts or ends in empty lines.

###### `options.incrementListMarker`

Whether to increment the value of bullets of items in ordered lists (`boolean`,
default: `true`).

###### `options.listItemIndent`

Whether to indent the content of list items with the size of the bullet plus one
space (when `'one'`) or a tab stop (`'tab'`), or depending on the item and its
parent list (`'mixed'`, uses `'one'` if the item and list are tight and `'tab'`
otherwise) (`'one'`, `'tab'`, or `'mixed'`, default: `'tab'`).

###### `options.quote`

Marker to use to serialize titles (`'"'` or `"'"`, default: `'"'`).

###### `options.resourceLink`

Whether to use reference links always (`boolean`, default: `false`).
The default is to use autolinks (`<https://example.com>`) when possible.

###### `options.rule`

Marker to use for thematic breaks (`'*'`, `'-'`, or `'_'`, default: `'*'`).

###### `options.ruleRepetition`

Number of markers to use for thematic breaks (`number`, default:
`3`, min: `3`).

###### `options.ruleSpaces`

Whether to add spaces between markers in thematic breaks (`boolean`, default:
`false`).

###### `options.setext`

Whether to use setext headings when possible (`boolean`, default: `false`).
Setext headings are not possible for headings with a rank more than 2 or when
they’re empty.

###### `options.strong`

Marker to use to serialize strong (`'*'` or `'_'`, default: `'*'`).

###### `options.tightDefinitions`

Whether to join definitions w/o a blank line (`boolean`, default: `false`).
Shortcut for a join function like so:

```js
function (left, right) {
  if (left.type === 'definition' && right.type === 'definition') {
    return 0
  }
}
```

###### `options.handlers`

Object mapping node types to custom handlers.
Useful for syntax extensions.
Take a look at [`lib/handle`][handlers] for examples.

###### `options.join`

List of functions used to determine what to place between two flow nodes.
Often, they are joined by one blank line.
In certain cases, it’s nicer to have them next to each other.
Or, they can’t occur together.
These functions receive two adjacent nodes and their parent and can return
`number` or `boolean`, referring to how many blank lines to use between them.
A return value of `true` is as passing `1`.
A return value of `false` means the nodes cannot be joined by a blank line, such
as two adjacent block quotes or indented code after a list, in which case a
comment will be injected to break them up:

```markdown
> Quote 1

<!---->

> Quote 2
```

###### `options.unsafe`

List of patterns to escape.
Useful for syntax extensions.
Take a look at [`lib/unsafe.js`][unsafe] for examples.

##### Extension options

###### `options.extensions`

List of extensions (`Array.<ToMarkdownExtension>`).
Each `ToMarkdownExtension` is an object with the same interface as `options`
here.

##### Returns

`string` — Serialized markdown.

## List of extensions

*   [`syntax-tree/mdast-util-directive`](https://github.com/syntax-tree/mdast-util-directive)
    — serialize directives
*   [`syntax-tree/mdast-util-footnote`](https://github.com/syntax-tree/mdast-util-footnote)
    — serialize footnotes
*   [`syntax-tree/mdast-util-frontmatter`](https://github.com/syntax-tree/mdast-util-frontmatter)
    — serialize frontmatter (YAML, TOML, more)
*   [`syntax-tree/mdast-util-gfm`](https://github.com/syntax-tree/mdast-util-gfm)
    — serialize GFM
*   [`syntax-tree/mdast-util-gfm-autolink-literal`](https://github.com/syntax-tree/mdast-util-gfm-autolink-literal)
    — serialize GFM autolink literals
*   [`syntax-tree/mdast-util-gfm-strikethrough`](https://github.com/syntax-tree/mdast-util-gfm-strikethrough)
    — serialize GFM strikethrough
*   [`syntax-tree/mdast-util-gfm-table`](https://github.com/syntax-tree/mdast-util-gfm-table)
    — serialize GFM tables
*   [`syntax-tree/mdast-util-gfm-task-list-item`](https://github.com/syntax-tree/mdast-util-gfm-task-list-item)
    — serialize GFM task list items
*   [`syntax-tree/mdast-util-math`](https://github.com/syntax-tree/mdast-util-math)
    — serialize math
*   [`syntax-tree/mdast-util-mdx`](https://github.com/syntax-tree/mdast-util-mdx)
    — serialize MDX or MDX.js
*   [`syntax-tree/mdast-util-mdx-expression`](https://github.com/syntax-tree/mdast-util-mdx-expression)
    — serialize MDX or MDX.js expressions
*   [`syntax-tree/mdast-util-mdx-jsx`](https://github.com/syntax-tree/mdast-util-mdx-jsx)
    — serialize MDX or MDX.js JSX
*   [`syntax-tree/mdast-util-mdxjs-esm`](https://github.com/syntax-tree/mdast-util-mdxjs-esm)
    — serialize MDX.js ESM

## Security

`mdast-util-to-markdown` will do its best to serialize markdown to match the
syntax tree, but there are several cases where that is impossible.
It’ll do its best, but complete roundtripping is impossible given that any value
could be injected into the tree.

As Markdown is sometimes used for HTML, and improper use of HTML can open you up
to a [cross-site scripting (XSS)][xss] attack, use of `mdast-util-to-markdown`
and parsing it again later could potentially be unsafe.
When parsing markdown afterwards and then going to HTML, use something like
[`hast-util-sanitize`][sanitize] to make the tree safe.

## Related

*   [`micromark/micromark`](https://github.com/micromark/micromark)
    — the smallest commonmark-compliant markdown parser that exists
*   [`remarkjs/remark`](https://github.com/remarkjs/remark)
    — markdown processor powered by plugins
*   [`syntax-tree/mdast-util-from-markdown`](https://github.com/syntax-tree/mdast-util-from-markdown)
    — parse markdown to mdast

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

[build-badge]: https://github.com/syntax-tree/mdast-util-to-markdown/workflows/main/badge.svg

[build]: https://github.com/syntax-tree/mdast-util-to-markdown/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/mdast-util-to-markdown.svg

[coverage]: https://codecov.io/github/syntax-tree/mdast-util-to-markdown

[downloads-badge]: https://img.shields.io/npm/dm/mdast-util-to-markdown.svg

[downloads]: https://www.npmjs.com/package/mdast-util-to-markdown

[size-badge]: https://img.shields.io/bundlephobia/minzip/mdast-util-to-markdown.svg

[size]: https://bundlephobia.com/result?p=mdast-util-to-markdown

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

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting

[sanitize]: https://github.com/syntax-tree/hast-util-sanitize

[handlers]: lib/handle

[unsafe]: lib/unsafe.js
