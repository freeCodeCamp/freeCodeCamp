# remark-html

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**remark**][remark] plugin to serialize Markdown as HTML.

> ⚠️ This package essentially packs [`remark-rehype`][remark2rehype] and
> [`rehype-stringify`][rehype-stringify], and although it does support some
> customisation, it isn’t very pluggable.
> It’s probably smarter to use `remark-rehype` directly and benefit from the
> [**rehype**][rehype] ecosystem.

## Note!

This plugin is ready for the new parser in remark
([`remarkjs/remark#536`](https://github.com/remarkjs/remark/pull/536)).
The current and previous version of the plugin works with the current and
previous version of remark.

## Install

[npm][]:

```sh
npm install remark-html
```

## Use

Say we have the following file, `example.md`:

```markdown
# Hello & World

> A block quote.

* Some _emphasis_, **importance**, and `code`.
```

And our script, `example.js`, looks as follows:

```js
var fs = require('fs')
var unified = require('unified')
var markdown = require('remark-parse')
var html = require('remark-html')

unified()
  .use(markdown)
  .use(html)
  .process(fs.readFileSync('example.md'), function (err, file) {
    if (err) throw err
    console.log(String(file))
  })
```

Now, running `node example` yields:

```html
<h1>Hello &#x26; World</h1>
<blockquote>
<p>A block quote.</p>
</blockquote>
<ul>
<li>Some <em>emphasis</em>, <strong>importance</strong>, and <code>code</code>.</li>
</ul>
```

## API

### `remark().use(html[, options])`

Serialize Markdown as HTML.

##### `options`

All options except for `sanitize` and `handlers` are passed to
[`hast-util-to-html`][to-html].

###### `options.handlers`

Object mapping [mdast][] [nodes][mdast-node] to functions handling them.
This option is passed to [`mdast-util-to-hast`][to-hast-handlers].

###### `options.sanitize`

How to sanitize the output (`Object` or `boolean`, default: `true`):

*   `false`
    — HTML is not sanitized, dangerous HTML persists
*   `true`
    — HTML is sanitized according to [GitHub’s sanitation rules][github],
    dangerous HTML is dropped
*   `Object`
    — the object is treated as a `schema` for how to sanitize with
    [`hast-util-sanitize`][sanitize], dangerous HTML is dropped

> Note that raw HTML in Markdown cannot be sanitized, so it’s removed.
> A schema can still be used to allow certain values from [integrations][]
> though.
> To support HTML in Markdown, use [`rehype-raw`][raw].

For example, to add strict sanitation but allowing `className`s, use something
like:

```js
// ...
var merge = require('deepmerge')
var github = require('hast-util-sanitize/lib/github')

var schema = merge(github, {attributes: {'*': ['className']}})

remark()
  .use(html, {sanitize: schema})
  .processSync(/* … */)
```

## Integrations

`remark-html` works great with:

*   [`remark-autolink-headings`](https://github.com/ben-eb/remark-autolink-headings)
    — Automatically add links to headings in Markdown
*   [`remark-github`](https://github.com/remarkjs/remark-github)
    — Generate references to GitHub issues, PRs, users, and more
*   [`remark-highlight.js`](https://github.com/ben-eb/remark-highlight.js)
    — Highlight code blocks
*   [`remark-html-emoji-image`](https://github.com/jackycute/remark-html-emoji-image)
    — Transform emoji unicodes into html images
*   [`remark-html-katex`](https://github.com/remark/remark-math/blob/HEAD/packages/remark-html-katex/readme.md)
    — Transform math to HTML with KaTeX
*   [`remark-math`](https://github.com/rokt33r/remark-math)
    — Math support for Markdown (inline and block)
*   [`remark-midas`](https://github.com/ben-eb/remark-midas)
    — Highlight CSS code with [midas](https://github.com/ben-eb/midas)
*   [`remark-toc`](https://github.com/remarkjs/remark-toc)
    — Generate a Tables of Contents
*   …and [more][remark-plugins]

All [**mdast** nodes][mdast] can be compiled to HTML.
Unknown **mdast** nodes are compiled to `div` nodes if they have `children` or
`text` nodes if they have `value`.

In addition, **remark-html** can be told how to compile nodes through
three `data` properties ([more information][to-hast]):

*   `hName` — Tag name to compile as
*   `hChildren` — HTML content to add (instead of `children` and `value`), in
    [`hast`][hast]
*   `hProperties` — Map of properties to add

For example, the following node:

```js
{
  type: 'emphasis',
  data: {
    hName: 'i',
    hProperties: {className: 'foo'},
    hChildren: [{type: 'text', value: 'bar'}]
  },
  children: [{type: 'text', value: 'baz'}]
}
```

…would yield:

```markdown
<i class="foo">bar</i>
```

## Security

Use of `remark-html` is *unsafe* by default and opens you up to a
[cross-site scripting (XSS)][xss] attack.
Pass `sanitize: true` to prevent attacks.
Settings `sanitize` to anything else may be unsafe.

## Contribute

See [`contributing.md`][contributing] in [`remarkjs/.github`][health] for ways
to get started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/remarkjs/remark-html/main.svg

[build]: https://travis-ci.org/remarkjs/remark-html

[coverage-badge]: https://img.shields.io/codecov/c/github/remarkjs/remark-html.svg

[coverage]: https://codecov.io/github/remarkjs/remark-html

[downloads-badge]: https://img.shields.io/npm/dm/remark-html.svg

[downloads]: https://www.npmjs.com/package/remark-html

[size-badge]: https://img.shields.io/bundlephobia/minzip/remark-html.svg

[size]: https://bundlephobia.com/result?p=remark-html

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/remarkjs/remark/discussions

[npm]: https://docs.npmjs.com/cli/install

[health]: https://github.com/remarkjs/.github

[contributing]: https://github.com/remarkjs/.github/blob/HEAD/contributing.md

[support]: https://github.com/remarkjs/.github/blob/HEAD/support.md

[coc]: https://github.com/remarkjs/.github/blob/HEAD/code-of-conduct.md

[license]: license

[author]: https://wooorm.com

[remark]: https://github.com/remarkjs/remark

[remark-plugins]: https://github.com/remarkjs/remark/blob/HEAD/doc/plugins.md#list-of-plugins

[remark2rehype]: https://github.com/remarkjs/remark-rehype

[rehype]: https://github.com/rehypejs/rehype

[rehype-stringify]: https://github.com/rehypejs/rehype/tree/HEAD/packages/rehype-stringify

[raw]: https://github.com/rehypejs/rehype-raw

[mdast]: https://github.com/syntax-tree/mdast

[mdast-node]: https://github.com/syntax-tree/mdast#nodes

[hast]: https://github.com/syntax-tree/hast

[to-html]: https://github.com/syntax-tree/hast-util-to-html

[to-hast-handlers]: https://github.com/syntax-tree/mdast-util-to-hast#optionshandlers

[sanitize]: https://github.com/syntax-tree/hast-util-sanitize

[github]: https://github.com/syntax-tree/hast-util-sanitize#schema

[to-hast]: https://github.com/syntax-tree/mdast-util-to-hast#note

[integrations]: #integrations

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting
