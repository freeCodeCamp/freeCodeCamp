# micromark-extension-gfm

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

**[micromark][]** extension to support GitHub flavored markdown.
This extension matches either the [GFM][] spec or github.com (default).

This package provides the low-level modules for integrating with the micromark
tokenizer and the micromark HTML compiler.

You probably shouldn’t use this package directly, but instead use
[`mdast-util-gfm`][mdast-util-gfm] with **[mdast][]** or `remark-gfm` with
**[remark][]**.

Alternatively, the extensions can be used separately:

*   [`micromark/micromark-extension-gfm-autolink-literal`](https://github.com/micromark/micromark-extension-gfm-autolink-literal)
    — support GFM [autolink literals][]
*   [`micromark/micromark-extension-gfm-strikethrough`](https://github.com/micromark/micromark-extension-gfm-strikethrough)
    — support GFM [strikethrough][]
*   [`micromark/micromark-extension-gfm-table`](https://github.com/micromark/micromark-extension-gfm-table)
    — support GFM [tables][]
*   [`micromark/micromark-extension-gfm-tagfilter`](https://github.com/micromark/micromark-extension-gfm-tagfilter)
    — support GFM [tagfilter][]
*   [`micromark/micromark-extension-gfm-task-list-item`](https://github.com/micromark/micromark-extension-gfm-task-list-item)
    — support GFM [tasklists][]

## Install

[npm][]:

```sh
npm install micromark-extension-gfm
```

## Use

Say we have the following file, `example.md`:

```markdown
# GFM

## Autolink literals

www.example.com, https://example.com, and contact@example.com.

## Strikethrough

~one~ or ~~two~~ tildes.

## Table

| a | b  |  c |  d  |
| - | :- | -: | :-: |

## Tag filter

<plaintext>

## Tasklist

* [ ] to do
* [x] done
```

And our script, `example.js`, looks as follows:

```js
var fs = require('fs')
var micromark = require('micromark')
var gfmSyntax = require('micromark-extension-gfm')
var gfmHtml = require('micromark-extension-gfm/html')

var doc = fs.readFileSync('example.md')

var result = micromark(doc, {
  allowDangerousHtml: true,
  extensions: [gfmSyntax()],
  htmlExtensions: [gfmHtml]
})

console.log(result)
```

Now, running `node example` yields:

```html
<h1>GFM</h1>
<h2>Autolink literals</h2>
<p><a href="http://www.example.com">www.example.com</a>, <a href="https://example.com">https://example.com</a>, and <a href="mailto:contact@example.com">contact@example.com</a>.</p>
<h2>Strikethrough</h2>
<p><del>one</del> or <del>two</del> tildes.</p>
<h2>Table</h2>
<table>
<thead>
<tr>
<th>a</th>
<th align="left">b</th>
<th align="right">c</th>
<th align="center">d</th>
</tr>
</thead>
</table>
<h2>Tag filter</h2>
&lt;plaintext>
<h2>Tasklist</h2>
<ul>
<li><input disabled="" type="checkbox"> to do</li>
<li><input checked="" disabled="" type="checkbox"> done</li>
</ul>
```

## API

### `html`

### `syntax(options?)`

> Note: `syntax` is the default export of this module, `html` is available at
> `micromark-extension-gfm/html`.

Support [GFM][] or markdown on github.com.

The export of `syntax` is a function that can be called with options and returns
extension for the micromark parser (to tokenize GFM; can be passed in
`extensions`).
The export of html is an extension for the default HTML compiler (can be passed
in `htmlExtensions`).

##### `options`

###### `options.singleTilde`

Passed as [`singleTilde`][single-tilde] in
[`micromark-extension-gfm-strikethrough`][mm-strikethrough].

## Related

*   [`remarkjs/remark`][remark]
    — markdown processor powered by plugins
*   [`syntax-tree/mdast-util-gfm`](https://github.com/syntax-tree/mdast-util-gfm)
    — mdast utility to support GFM
*   [`syntax-tree/mdast-util-from-markdown`][from-markdown]
    — mdast parser using `micromark` to create mdast from markdown
*   [`syntax-tree/mdast-util-to-markdown`][to-markdown]
    — mdast serializer to create markdown from mdast
*   [`micromark/micromark`][micromark]
    — the smallest commonmark-compliant markdown parser that exists
*   [`micromark/micromark-extension-gfm-autolink-literal`](https://github.com/micromark/micromark-extension-gfm-autolink-literal)
    — support GFM [autolink literals][]
*   [`micromark/micromark-extension-gfm-strikethrough`](https://github.com/micromark/micromark-extension-gfm-strikethrough)
    — support GFM [strikethrough][]
*   [`micromark/micromark-extension-gfm-table`](https://github.com/micromark/micromark-extension-gfm-table)
    — support GFM [tables][]
*   [`micromark/micromark-extension-gfm-tagfilter`](https://github.com/micromark/micromark-extension-gfm-tagfilter)
    — support GFM [tagfilter][]
*   [`micromark/micromark-extension-gfm-task-list-item`](https://github.com/micromark/micromark-extension-gfm-task-list-item)
    — support GFM [tasklists][]

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

[build-badge]: https://github.com/micromark/micromark-extension-gfm/workflows/main/badge.svg

[build]: https://github.com/micromark/micromark-extension-gfm/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/micromark/micromark-extension-gfm.svg

[coverage]: https://codecov.io/github/micromark/micromark-extension-gfm

[downloads-badge]: https://img.shields.io/npm/dm/micromark-extension-gfm.svg

[downloads]: https://www.npmjs.com/package/micromark-extension-gfm

[size-badge]: https://img.shields.io/bundlephobia/minzip/micromark-extension-gfm.svg

[size]: https://bundlephobia.com/result?p=micromark-extension-gfm

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/micromark/micromark/discussions

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[contributing]: https://github.com/micromark/.github/blob/HEAD/contributing.md

[support]: https://github.com/micromark/.github/blob/HEAD/support.md

[coc]: https://github.com/micromark/.github/blob/HEAD/code-of-conduct.md

[micromark]: https://github.com/micromark/micromark

[from-markdown]: https://github.com/syntax-tree/mdast-util-from-markdown

[to-markdown]: https://github.com/syntax-tree/mdast-util-to-markdown

[remark]: https://github.com/remarkjs/remark

[mdast]: https://github.com/syntax-tree/mdast

[gfm]: https://github.github.com/gfm/

[mdast-util-gfm]: https://github.com/syntax-tree/mdast-util-gfm

[strikethrough]: https://github.github.com/gfm/#strikethrough-extension-

[tables]: https://github.github.com/gfm/#tables-extension-

[tasklists]: https://github.github.com/gfm/#task-list-items-extension-

[autolink literals]: https://github.github.com/gfm/#autolinks-extension-

[tagfilter]: https://github.github.com/gfm/#disallowed-raw-html-extension-

[single-tilde]: https://github.com/micromark/micromark-extension-gfm-strikethrough#optionssingletilde

[mm-strikethrough]: https://github.com/micromark/micromark-extension-gfm-strikethrough
