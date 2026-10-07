# mdast-util-gfm-table

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

Extension for [`mdast-util-from-markdown`][from-markdown] and/or
[`mdast-util-to-markdown`][to-markdown] to support GitHub flavored markdown
tables in **[mdast][]**.
When parsing (`from-markdown`), must be combined with
[`micromark-extension-gfm-table`][extension].

You probably shouldn’t use this package directly, but instead use
[`remark-gfm`][remark-gfm] with **[remark][]**.

## Install

[npm][]:

```sh
npm install mdast-util-gfm-table
```

## Use

Say we have the following file, `example.md`:

```markdown
| a | b | c | d |
| - | :- | -: | :-: |
| e | f |
| g | h | i | j | k |
```

And our script, `example.js`, looks as follows:

```js
var fs = require('fs')
var fromMarkdown = require('mdast-util-from-markdown')
var toMarkdown = require('mdast-util-to-markdown')
var syntax = require('micromark-extension-gfm-table')
var table = require('mdast-util-gfm-table')

var doc = fs.readFileSync('example.md')

var tree = fromMarkdown(doc, {
  extensions: [syntax],
  mdastExtensions: [table.fromMarkdown]
})

console.log(tree)

var out = toMarkdown(tree, {extensions: [table.toMarkdown()]})

console.log(out)
```

Now, running `node example` yields (positional info removed for the sake of
brevity):

```js
{
  type: 'root',
  children: [
    {
      type: 'table',
      align: [null, 'left', 'right', 'center'],
      children: [
        {
          type: 'tableRow',
          children: [
            {type: 'tableCell', children: [{type: 'text', value: 'a'}]},
            {type: 'tableCell', children: [{type: 'text', value: 'b'}]},
            {type: 'tableCell', children: [{type: 'text', value: 'c'}]},
            {type: 'tableCell', children: [{type: 'text', value: 'd'}]}
          ]
        },
        {
          type: 'tableRow',
          children: [
            {type: 'tableCell', children: [{type: 'text', value: 'e'}]},
            {type: 'tableCell', children: [{type: 'text', value: 'f'}]}
          ]
        },
        {
          type: 'tableRow',
          children: [
            {type: 'tableCell', children: [{type: 'text', value: 'g'}]},
            {type: 'tableCell', children: [{type: 'text', value: 'h'}]},
            {type: 'tableCell', children: [{type: 'text', value: 'i'}]},
            {type: 'tableCell', children: [{type: 'text', value: 'j'}]},
            {type: 'tableCell', children: [{type: 'text', value: 'k'}]}
          ]
        }
      ]
    }
  ]
}
```

```markdown
| a | b  |  c |  d  |   |
| - | :- | -: | :-: | - |
| e | f  |    |     |   |
| g | h  |  i |  j  | k |
```

## API

### `table.fromMarkdown`

### `table.toMarkdown(options?)`

> Note: the separate extensions are also available at
> `mdast-util-gfm-table/from-markdown` and
> `mdast-util-gfm-table/to-markdown`.

Support tables.
The exports of `fromMarkdown` is an extension for
[`mdast-util-from-markdown`][from-markdown].
The export of `toMarkdown` is a function that can be called with options and
returns an extension for [`mdast-util-to-markdown`][to-markdown].

##### `options`

###### `options.tableCellPadding`

Create tables with a space between cell delimiters (`|`) and content (`boolean`,
default: `true`).

###### `options.tablePipeAlign`

Align the delimiters (`|`) between table cells so that they all align nicely and
form a grid (`boolean`, default: `true`).

###### `options.stringLength`

Function passed to [`markdown-table`][markdown-table] to detect the length of a
table cell (`Function`, default: [`s => s.length`][string-length]).
Used to pad tables.

## Related

*   [`remarkjs/remark`][remark]
    — markdown processor powered by plugins
*   [`remarkjs/remark-gfm`][remark-gfm]
    — remark plugin to support GFM
*   [`micromark/micromark`][micromark]
    — the smallest commonmark-compliant markdown parser that exists
*   [`micromark/micromark-extension-gfm-table`][extension]
    — micromark extension to parse GFM tables
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

[build-badge]: https://github.com/syntax-tree/mdast-util-gfm-table/workflows/main/badge.svg

[build]: https://github.com/syntax-tree/mdast-util-gfm-table/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/mdast-util-gfm-table.svg

[coverage]: https://codecov.io/github/syntax-tree/mdast-util-gfm-table

[downloads-badge]: https://img.shields.io/npm/dm/mdast-util-gfm-table.svg

[downloads]: https://www.npmjs.com/package/mdast-util-gfm-table

[size-badge]: https://img.shields.io/bundlephobia/minzip/mdast-util-gfm-table.svg

[size]: https://bundlephobia.com/result?p=mdast-util-gfm-table

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

[extension]: https://github.com/micromark/micromark-extension-gfm-table

[markdown-table]: https://github.com/wooorm/markdown-table

[string-length]: https://github.com/wooorm/markdown-table#optionsstringlength
