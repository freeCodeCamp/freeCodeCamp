# micromark-extension-gfm-table

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[micromark][] extensions to support GFM [tables][].

## Contents

* [What is this?](#what-is-this)
* [When to use this](#when-to-use-this)
* [Install](#install)
* [Use](#use)
* [API](#api)
  * [`gfmTable()`](#gfmtable)
  * [`gfmTableHtml()`](#gfmtablehtml)
* [Bugs](#bugs)
* [Authoring](#authoring)
* [HTML](#html)
* [CSS](#css)
* [Syntax](#syntax)
* [Types](#types)
* [Compatibility](#compatibility)
* [Security](#security)
* [Related](#related)
* [Contribute](#contribute)
* [License](#license)

## What is this?

This package contains extensions that add support for the table syntax enabled
by GFM to [`micromark`][micromark].
These extensions match github.com.

## When to use this

This project is useful when you want to support tables in markdown.

You can use these extensions when you are working with [`micromark`][micromark].
To support all GFM features, use
[`micromark-extension-gfm`][micromark-extension-gfm] instead.

When you need a syntax tree, combine this package with
[`mdast-util-gfm-table`][mdast-util-gfm-table].

All these packages are used in [`remark-gfm`][remark-gfm], which focusses on
making it easier to transform content by abstracting these internals away.

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install micromark-extension-gfm-table
```

In Deno with [`esm.sh`][esmsh]:

```js
import {gfmTable, gfmTableHtml} from 'https://esm.sh/micromark-extension-gfm-table@2'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {gfmTable, gfmTableHtml} from 'https://esm.sh/micromark-extension-gfm-table@2?bundle'
</script>
```

## Use

```js
import {micromark} from 'micromark'
import {gfmTable, gfmTableHtml} from 'micromark-extension-gfm-table'

const output = micromark('| a |\n| - |', {
  extensions: [gfmTable()],
  htmlExtensions: [gfmTableHtml()]
})

console.log(output)
```

Yields:

```html
<table>
<thead>
<tr>
<th>a</th>
</tr>
</thead>
</table>
```

## API

This package exports the identifiers [`gfmTable`][api-gfm-table] and
[`gfmTableHtml`][api-gfm-table-html].
There is no default export.

The export map supports the [`development` condition][development].
Run `node --conditions development module.js` to get instrumented dev code.
Without this condition, production code is loaded.

### `gfmTable()`

Create an HTML extension for `micromark` to support GitHub tables syntax.

###### Returns

Extension for `micromark` that can be passed in `extensions` to enable GFM
table syntax ([`Extension`][micromark-extension]).

### `gfmTableHtml()`

Create an HTML extension for `micromark` to support GitHub tables when
serializing to HTML.

###### Returns

Extension for `micromark` that can be passed in `htmlExtensions` to support
GFM tables when serializing to HTML
([`HtmlExtension`][micromark-html-extension]).

## Bugs

GitHub’s own algorithm to parse tables contains a bug.
This bug is not present in this project.
The issue relating to tables is:

* [GFM tables: escaped escapes are incorrectly treated as
  escapes](https://github.com/github/cmark-gfm/issues/277)

## Authoring

When authoring markdown with GFM tables, it’s recommended to *always* put
pipes around cells.
Without them, it can be hard to infer whether the table will work, how many
columns there are, and which column you are currently editing.

It is recommended to not use many columns, as it results in very long lines,
making it hard to infer which column you are currently editing.

For larger tables, particularly when cells vary in size, it is recommended
*not* to manually “pad” cell text.
While it can look better, it results in a lot of time spent realigning
everything when a new, longer cell is added or the longest cell removed, as
every row then must be changed.
Other than costing time, it also causes large diffs in Git.

To illustrate, when authoring large tables, it is discouraged to pad cells
like this:

```markdown
| Alpha bravo charlie |              delta |
| ------------------- | -----------------: |
| Echo                | Foxtrot golf hotel |
```

Instead, use single spaces (and single filler dashes):

```markdown
| Alpha bravo charlie | delta |
| - | -: |
| Echo | Foxtrot golf hotel |
```

## HTML

GFM tables relate to several HTML elements: `<table>`, `<tbody>`, `<td>`,
`<th>`, `<thead>`, and `<tr>`.
See
[*§ 4.9.1 The `table` element*][html-table],
[*§ 4.9.5 The `tbody` element*][html-tbody],
[*§ 4.9.9 The `td` element*][html-td],
[*§ 4.9.10 The `th` element*][html-th],
[*§ 4.9.6 The `thead` element*][html-thead], and
[*§ 4.9.8 The `tr` element*][html-tr]
in the HTML spec for more info.

If the alignment of a column is left, right, or center, a deprecated
`align` attribute is added to each `<th>` and `<td>` element belonging to
that column.
That attribute is interpreted by browsers as if a CSS `text-align` property
was included, with its value set to that same keyword.

## CSS

The following CSS is needed to make tables look a bit like GitHub.
For the complete actual CSS see
[`sindresorhus/github-markdown-css`][github-markdown-css]

```css
/* Light theme. */
:root {
  --color-canvas-default: #ffffff;
  --color-canvas-subtle: #f6f8fa;
  --color-border-default: #d0d7de;
  --color-border-muted: hsla(210, 18%, 87%, 1);
}

/* Dark theme. */
@media (prefers-color-scheme: dark) {
  :root {
    --color-canvas-default: #0d1117;
    --color-canvas-subtle: #161b22;
    --color-border-default: #30363d;
    --color-border-muted: #21262d;
  }
}

table {
  border-spacing: 0;
  border-collapse: collapse;
  display: block;
  margin-top: 0;
  margin-bottom: 16px;
  width: max-content;
  max-width: 100%;
  overflow: auto;
}

tr {
  background-color: var(--color-canvas-default);
  border-top: 1px solid var(--color-border-muted);
}

tr:nth-child(2n) {
  background-color: var(--color-canvas-subtle);
}

td,
th {
  padding: 6px 13px;
  border: 1px solid var(--color-border-default);
}

th {
  font-weight: 600;
}

table img {
  background-color: transparent;
}
```

## Syntax

Tables form with the following BNF:

```abnf
gfmTable ::= gfmTableHead 0*(eol gfmTableBodyRow)

; Restriction: both rows must have the same number of cells.
gfmTableHead ::= gfmTableRow eol gfmTableDelimiterRow

gfmTableRow ::= ["|"] gfmTableCell 0*("|" gfmTableCell) ["|"] *spaceOrTab
gfmTableCell ::= *spaceOrTab gfmTableText *spaceOrTab
gfmTableText ::= 0*(line - "\\" - "|" / "\\" ["\\" / "|"])

gfmTableDelimiterRow ::= ["|"] gfmTableDelimiterCell 0*("|" gfmTableDelimiterCell) ["|"] *spaceOrTab
gfmTableDelimiterCell ::= *spaceOrTab gfmTableDelimiterValue *spaceOrTab
gfmTableDelimiterValue ::= [":"] 1*"-" [":"]
```

As this construct occurs in flow, like all flow constructs, it must be
followed by an eol (line ending) or eof (end of file).

The above grammar shows that basically anything can be a cell or a row.
The main thing that makes something a row, is that it occurs directly before
or after a delimiter row, or after another row.

It is not required for a table to have a body: it can end right after the
delimiter row.

Each column can be marked with an alignment.
The alignment marker is a colon (`:`) used before and/or after delimiter row
filler.
To illustrate:

```markdown
| none | left | right | center |
| ---- | :--- | ----: | :----: |
```

The number of cells in the delimiter row, is the number of columns of the
table.
Only the head row is required to have the same number of cells.
Body rows are not required to have a certain number of cells.
For body rows that have less cells than the number of columns of the table,
empty cells are injected.
When a row has more cells than the number of columns of the table, the
superfluous cells are dropped.
To illustrate:

```markdown
| a | b |
| - | - |
| c |
| d | e | f |
```

Yields:

```html
<table>
<thead>
<tr>
<th>a</th>
<th>b</th>
</tr>
</thead>
<tbody>
<tr>
<td>c</td>
<td></td>
</tr>
<tr>
<td>d</td>
<td>e</td>
</tr>
</tbody>
</table>
```

Each cell’s text is interpreted as the [text][micromark-content-type] content
type.
That means that it can include constructs such as attention (emphasis, strong).

The grammar for cells prohibits the use of `|` in them.
To use pipes in cells, encode them as a character reference or character
escape: `&vert;` (or `&VerticalLine;`, `&verbar;`, `&#124;`, `&#x7c;`) or
`\|`.

Escapes will typically work, but they are not supported in
code (text) (and the math (text) extension).
To work around this, GitHub came up with a rather weird “trick”.
When inside a table cell *and* inside code, escaped pipes *are* decoded.
To illustrate:

```markdown
| Name | Character |
| - | - |
| Left curly brace | `{` |
| Pipe | `\|` |
| Right curly brace | `}` |
```

Yields:

```html
<table>
<thead>
<tr>
<th>Name</th>
<th>Character</th>
</tr>
</thead>
<tbody>
<tr>
<td>Left curly brace</td>
<td><code>{</code></td>
</tr>
<tr>
<td>Pipe</td>
<td><code>|</code></td>
</tr>
<tr>
<td>Right curly brace</td>
<td><code>}</code></td>
</tr>
</tbody>
</table>
```

> 👉 **Note**: no other character can be escaped like this.
> Escaping pipes in code does not work when not inside a table, either.

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

Projects maintained by the unified collective are compatible with maintained
versions of Node.js.

When we cut a new major release, we drop support for unmaintained versions of
Node.
This means we try to keep the current release line,
`micromark-extension-gfm-table@^2`, compatible with Node.js 16.

This package works with `micromark` version `3` and later.

## Security

This package is safe.

## Related

* [`micromark-extension-gfm`][micromark-extension-gfm]
  — support all of GFM
* [`mdast-util-gfm-table`][mdast-util-gfm-table]
  — support all of GFM in mdast
* [`mdast-util-gfm`][mdast-util-gfm]
  — support all of GFM in mdast
* [`remark-gfm`][remark-gfm]
  — support all of GFM in remark

## Contribute

See [`contributing.md` in `micromark/.github`][contributing] for ways to get
started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/micromark/micromark-extension-gfm-table/workflows/main/badge.svg

[build]: https://github.com/micromark/micromark-extension-gfm-table/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/micromark/micromark-extension-gfm-table.svg

[coverage]: https://codecov.io/github/micromark/micromark-extension-gfm-table

[downloads-badge]: https://img.shields.io/npm/dm/micromark-extension-gfm-table.svg

[downloads]: https://www.npmjs.com/package/micromark-extension-gfm-table

[size-badge]: https://img.shields.io/badge/dynamic/json?label=minzipped%20size&query=$.size.compressedSize&url=https://deno.bundlejs.com/?q=micromark-extension-gfm-table

[size]: https://bundlejs.com/?q=micromark-extension-gfm-table

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/micromark/micromark/discussions

[npm]: https://docs.npmjs.com/cli/install

[esmsh]: https://esm.sh

[license]: license

[author]: https://wooorm.com

[contributing]: https://github.com/micromark/.github/blob/main/contributing.md

[support]: https://github.com/micromark/.github/blob/main/support.md

[coc]: https://github.com/micromark/.github/blob/main/code-of-conduct.md

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[development]: https://nodejs.org/api/packages.html#packages_resolving_user_conditions

[micromark]: https://github.com/micromark/micromark

[micromark-extension]: https://github.com/micromark/micromark#syntaxextension

[micromark-html-extension]: https://github.com/micromark/micromark#htmlextension

[micromark-content-type]: https://github.com/micromark/micromark#content-types

[micromark-extension-gfm]: https://github.com/micromark/micromark-extension-gfm

[mdast-util-gfm]: https://github.com/syntax-tree/mdast-util-gfm

[mdast-util-gfm-table]: https://github.com/syntax-tree/mdast-util-gfm-table

[remark-gfm]: https://github.com/remarkjs/remark-gfm

[tables]: https://github.github.com/gfm/#tables-extension-

[html-table]: https://html.spec.whatwg.org/multipage/tables.html#the-table-element

[html-tbody]: https://html.spec.whatwg.org/multipage/tables.html#the-tbody-element

[html-thead]: https://html.spec.whatwg.org/multipage/tables.html#the-thead-element

[html-tr]: https://html.spec.whatwg.org/multipage/tables.html#the-tr-element

[html-td]: https://html.spec.whatwg.org/multipage/tables.html#the-td-element

[html-th]: https://html.spec.whatwg.org/multipage/tables.html#the-th-element

[github-markdown-css]: https://github.com/sindresorhus/github-markdown-css

[api-gfm-table]: #gfmtable

[api-gfm-table-html]: #gfmtablehtml
