# remark-parse

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[Parser][] for [**unified**][unified].
Parses Markdown to [**mdast**][mdast] syntax trees.
Built on [`micromark`][micromark] and
[`mdast-util-from-markdown`][from-markdown].
Used in the [**remark** processor][remark] but can be used on its own as well.
Can be [extended][extend] to change how Markdown is parsed.

## Install

[npm][]:

```sh
npm install remark-parse
```

## Use

```js
var unified = require('unified')
var createStream = require('unified-stream')
var markdown = require('remark-parse')
var remark2rehype = require('remark-rehype')
var html = require('rehype-stringify')

var processor = unified().use(markdown).use(remark2rehype).use(html)

process.stdin.pipe(createStream(processor)).pipe(process.stdout)
```

[See **unified** for more examples »][unified]

## API

[See **unified** for API docs »][unified]

### `processor().use(parse)`

Configure the `processor` to read Markdown as input and process
[**mdast**][mdast] syntax trees.

## Extending the parser

See [`micromark`][micromark] and [`mdast-util-from-markdown`][from-markdown].
Then create a wrapper plugin such as [`remark-gfm`][gfm].

## Security

As Markdown is sometimes used for HTML, and improper use of HTML can open you up
to a [cross-site scripting (XSS)][xss] attack, use of remark can also be unsafe.
When going to HTML, use remark in combination with the [**rehype**][rehype]
ecosystem, and use [`rehype-sanitize`][sanitize] to make the tree safe.

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

[build-badge]: https://img.shields.io/travis/remarkjs/remark.svg

[build]: https://travis-ci.org/remarkjs/remark

[coverage-badge]: https://img.shields.io/codecov/c/github/remarkjs/remark.svg

[coverage]: https://codecov.io/github/remarkjs/remark

[downloads-badge]: https://img.shields.io/npm/dm/remark-parse.svg

[downloads]: https://www.npmjs.com/package/remark-parse

[size-badge]: https://img.shields.io/bundlephobia/minzip/remark-parse.svg

[size]: https://bundlephobia.com/result?p=remark-parse

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

[remark]: https://github.com/remarkjs/remark/tree/main/packages/remark

[mdast]: https://github.com/syntax-tree/mdast

[parser]: https://github.com/unifiedjs/unified#processorparser

[extend]: #extending-the-parser

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting

[rehype]: https://github.com/rehypejs/rehype

[sanitize]: https://github.com/rehypejs/rehype-sanitize

[micromark]: https://github.com/micromark/micromark

[from-markdown]: https://github.com/syntax-tree/mdast-util-from-markdown

[gfm]: https://github.com/remarkjs/remark-gfm
