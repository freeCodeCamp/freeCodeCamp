# remark-stringify

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Chat][chat-badge]][chat]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]

[Compiler][] for [**unified**][unified].
Serializes [**mdast**][mdast] syntax trees to Markdown.
Used in the [**remark** processor][remark] but can be used on its own as well.
Can be [extended][extend] to change how Markdown is serialized.

## Install

[npm][]:

```sh
npm install remark-stringify
```

## Use

```js
var unified = require('unified')
var createStream = require('unified-stream')
var html = require('rehype-parse')
var rehype2remark = require('rehype-remark')
var stringify = require('remark-stringify')

var processor = unified().use(html).use(rehype2remark).use(stringify, {
  bullet: '*',
  fence: '~',
  fences: true,
  incrementListMarker: false
})

process.stdin.pipe(createStream(processor)).pipe(process.stdout)
```

[See **unified** for more examples »][unified]

## API

[See **unified** for API docs »][unified]

### `processor().use(stringify[, options])`

Configure the `processor` to serialize [**mdast**][mdast] syntax trees to
Markdown.

###### `options`

Options can be passed directly, or passed later through
[`processor.data()`][data].

All the formatting options of [`mdast-util-to-markdown`][to-markdown-options]
are supported and will be passed through.

## Extending the compiler

See [`mdast-util-to-markdown`][to-markdown].
Then create a wrapper plugin such as [`remark-gfm`][remark-gfm].

## Security

`remark-stringify` will do its best to serialize markdown to match the syntax
tree, but there are several cases where that is impossible.
It’ll do its best, but complete roundtripping is impossible given that any
value could be injected into the tree.

As Markdown is sometimes used for HTML, and improper use of HTML can open you up
to a [cross-site scripting (XSS)][xss] attack, use of `remark-stringify` and
parsing it again later can potentially be unsafe.
When parsing Markdown afterwards, use remark in combination with the
[**rehype**][rehype] ecosystem, and use [`rehype-sanitize`][sanitize] to make
the tree safe.

Use of remark plugins could also open you up to other attacks.
Carefully assess each plugin and the risks involved in using them.

## Contribute

See [`contributing.md`][contributing] in [`remarkjs/.github`][health] for ways
to get started.
See [`support.md`][support] for ways to get help.
Ideas for new plugins and tools can be posted in [`remarkjs/ideas`][ideas].

A curated list of awesome remark resources can be found in [**awesome
remark**][awesome].

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## Sponsor

Support this effort and give back by sponsoring on [OpenCollective][collective]!

<!--lint ignore no-html-->

<table>
<tr valign="middle">
<td width="20%" align="center" colspan="2">
  <a href="https://www.gatsbyjs.org">Gatsby</a> 🥇<br><br>
  <a href="https://www.gatsbyjs.org"><img src="https://avatars1.githubusercontent.com/u/12551863?s=256&v=4" width="128"></a>
</td>
<td width="20%" align="center" colspan="2">
  <a href="https://vercel.com">Vercel</a> 🥇<br><br>
  <a href="https://vercel.com"><img src="https://avatars1.githubusercontent.com/u/14985020?s=256&v=4" width="128"></a>
</td>
<td width="20%" align="center" colspan="2">
  <a href="https://www.netlify.com">Netlify</a><br><br>
  <!--OC has a sharper image-->
  <a href="https://www.netlify.com"><img src="https://images.opencollective.com/netlify/4087de2/logo/256.png" width="128"></a>
</td>
<td width="10%" align="center">
  <a href="https://www.holloway.com">Holloway</a><br><br>
  <a href="https://www.holloway.com"><img src="https://avatars1.githubusercontent.com/u/35904294?s=128&v=4" width="64"></a>
</td>
<td width="10%" align="center">
  <a href="https://themeisle.com">ThemeIsle</a><br><br>
  <a href="https://themeisle.com"><img src="https://avatars1.githubusercontent.com/u/58979018?s=128&v=4" width="64"></a>
</td>
<td width="10%" align="center">
  <a href="https://boosthub.io">Boost Hub</a><br><br>
  <a href="https://boosthub.io"><img src="https://images.opencollective.com/boosthub/6318083/logo/128.png" width="64"></a>
</td>
<td width="10%" align="center">
  <a href="https://expo.io">Expo</a><br><br>
  <a href="https://expo.io"><img src="https://avatars1.githubusercontent.com/u/12504344?s=128&v=4" width="64"></a>
</td>
</tr>
<tr valign="middle">
<td width="100%" align="center" colspan="10">
  <br>
  <a href="https://opencollective.com/unified"><strong>You?</strong></a>
  <br><br>
</td>
</tr>
</table>

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/remarkjs/remark/workflows/main/badge.svg

[build]: https://github.com/remarkjs/remark/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/remarkjs/remark.svg

[coverage]: https://codecov.io/github/remarkjs/remark

[downloads-badge]: https://img.shields.io/npm/dm/remark-stringify.svg

[downloads]: https://www.npmjs.com/package/remark-stringify

[size-badge]: https://img.shields.io/bundlephobia/minzip/remark-stringify.svg

[size]: https://bundlephobia.com/result?p=remark-stringify

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/remarkjs/remark/discussions

[health]: https://github.com/remarkjs/.github

[contributing]: https://github.com/remarkjs/.github/blob/HEAD/contributing.md

[support]: https://github.com/remarkjs/.github/blob/HEAD/support.md

[coc]: https://github.com/remarkjs/.github/blob/HEAD/code-of-conduct.md

[ideas]: https://github.com/remarkjs/ideas

[awesome]: https://github.com/remarkjs/awesome-remark

[license]: https://github.com/remarkjs/remark/blob/main/license

[author]: https://wooorm.com

[npm]: https://docs.npmjs.com/cli/install

[unified]: https://github.com/unifiedjs/unified

[data]: https://github.com/unifiedjs/unified#processordatakey-value

[remark]: https://github.com/remarkjs/remark/tree/main/packages/remark

[compiler]: https://github.com/unifiedjs/unified#processorcompiler

[mdast]: https://github.com/syntax-tree/mdast

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting

[rehype]: https://github.com/rehypejs/rehype

[sanitize]: https://github.com/rehypejs/rehype-sanitize

[to-markdown]: https://github.com/syntax-tree/mdast-util-to-markdown

[to-markdown-options]: https://github.com/syntax-tree/mdast-util-to-markdown#formatting-options

[extend]: #extending-the-compiler

[remark-gfm]: https://github.com/remarkjs/remark-gfm
