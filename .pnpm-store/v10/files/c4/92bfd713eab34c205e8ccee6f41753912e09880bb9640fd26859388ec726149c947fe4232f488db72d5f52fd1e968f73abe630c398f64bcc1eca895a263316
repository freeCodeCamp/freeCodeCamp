# hast-util-raw

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**hast**][hast] utility to parse the [*tree*][tree] again, now supporting
embedded `raw` nodes.

One of the reasons to do this is for “malformed” syntax trees: for example, say
there’s an `h1` element in a `p` element, this utility will make them siblings.

Another reason to do this is if raw HTML/XML is embedded in a syntax tree, which
can occur when coming from Markdown using [`mdast-util-to-hast`][to-hast].

If you’re working with [**remark**][remark] and/or
[`remark-rehype`][remark-rehype], use [`rehype-raw`][rehype-raw] instead.

## Install

[npm][]:

```sh
npm install hast-util-raw
```

## Use

```js
var h = require('hastscript')
var raw = require('hast-util-raw')

var tree = h('div', [h('h1', ['Foo ', h('h2', 'Bar'), ' Baz'])])

var clean = raw(tree)

console.log(clean)
```

Yields:

```js
{ type: 'element',
  tagName: 'div',
  properties: {},
  children:
   [ { type: 'element',
       tagName: 'h1',
       properties: {},
       children: [Object] },
     { type: 'element',
       tagName: 'h2',
       properties: {},
       children: [Object] },
     { type: 'text', value: ' Baz' } ] }
```

## API

### `raw(tree[, file][, options])`

Given a [**hast**][hast] [*tree*][tree] and an optional [vfile][] (for
[positional info][position-information]), return a new parsed-again
[**hast**][hast] [*tree*][tree].

###### `options.passThrough`

List of custom hast node types to pass through (keep) in hast
(`Array.<string>`, default: `[]`).
If the passed through nodes have children, those children are expected to be
hast and will be handled.

## Security

Use of `hast-util-raw` can open you up to a [cross-site scripting (XSS)][xss]
attack as `raw` nodes are unsafe.
The following example shows how a raw node is used to inject a script that runs
when loaded in a browser.

```js
raw(u('root', [u('raw', '<script>alert(1)</script>')]))
```

Yields:

```html
<script>alert(1)</script>
```

Do not use this utility in combination with user input or use
[`hast-util-santize`][sanitize].

## Related

*   [`mdast-util-to-hast`](https://github.com/syntax-tree/mdast-util-to-hast)
    — transform mdast to hast
*   [`rehype-raw`](https://github.com/rehypejs/rehype-raw)
    — wrapper plugin for [rehype](https://github.com/rehypejs/rehype)

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

[build-badge]: https://github.com/syntax-tree/hast-util-raw/workflows/main/badge.svg

[build]: https://github.com/syntax-tree/hast-util-raw/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/hast-util-raw.svg

[coverage]: https://codecov.io/github/syntax-tree/hast-util-raw

[downloads-badge]: https://img.shields.io/npm/dm/hast-util-raw.svg

[downloads]: https://www.npmjs.com/package/hast-util-raw

[size-badge]: https://img.shields.io/bundlephobia/minzip/hast-util-raw.svg

[size]: https://bundlephobia.com/result?p=hast-util-raw

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

[tree]: https://github.com/syntax-tree/unist#tree

[position-information]: https://github.com/syntax-tree/unist#positional-information

[hast]: https://github.com/syntax-tree/hast

[to-hast]: https://github.com/syntax-tree/mdast-util-to-hast

[vfile]: https://github.com/vfile/vfile

[remark]: https://github.com/remarkjs/remark

[remark-rehype]: https://github.com/remarkjs/remark-rehype

[rehype-raw]: https://github.com/rehypejs/rehype-raw

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting

[sanitize]: https://github.com/syntax-tree/hast-util-sanitize
