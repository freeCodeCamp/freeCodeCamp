# micromark

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][bundle-size-badge]][bundle-size]
[![Sponsors][sponsors-badge]][opencollective]
[![Backers][backers-badge]][opencollective]
[![Chat][chat-badge]][chat]

Markdown parser.

> **Note**: this is the `micromark` package from the micromark monorepo.
> See the [monorepo readme][micromark] for more on the project.
> See this readme for how to use it.

## Feature highlights

<!-- Note: this section has to be in sync with the monorepo readme. -->

* [x] **[compliant][commonmark]** (100% to CommonMark)
* [x] **[extensions][]** (100% [GFM][], 100% [MDX.js][mdxjs], [directives][],
  [frontmatter][], [math][])
* [x] **[safe][security]** (by default)
* [x] **[robust][test]** (±2k tests, 100% coverage, fuzz testing)
* [x] **[small][size-debug]** (smallest CM parser at ±14kb)

## Contents

* [When should I use this?](#when-should-i-use-this)
* [What is this?](#what-is-this)
* [Install](#install)
* [Use](#use)
* [API](#api)
  * [`micromark(value[, encoding][, options])`](#micromarkvalue-encoding-options)
  * [`stream(options?)`](#streamoptions)
  * [`Options`](#options)
* [Types](#types)
* [Compatibility](#compatibility)
* [Security](#security)
* [Contribute](#contribute)
* [Sponsor](#sponsor)
* [License](#license)

## When should I use this?

<!-- Note: this section has to be in sync with the monorepo readme. -->

* If you *just* want to turn markdown into HTML (with maybe a few extensions)
* If you want to do *really complex things* with markdown

See [§ Comparison][comparison] for more info

## What is this?

<!-- Note: this section has to be in sync with the monorepo readme. -->

`micromark` is an open source markdown parser written in JavaScript.
It’s implemented as a state machine that emits concrete tokens, so that every
byte is accounted for, with positional info.
It then compiles those tokens directly to HTML, but other tools can take the
data and for example build an AST which is easier to work with
([`mdast-util-to-markdown`][mdast-util-to-markdown]).

While most markdown parsers work towards compliancy with CommonMark (or GFM),
this project goes further by following how the reference parsers (`cmark`,
`cmark-gfm`) work, which is confirmed with thousands of extra tests.

Other than CommonMark and GFM, micromark also supports common extensions to
markdown such as MDX, math, and frontmatter.

These npm packages have a sibling project in Rust:
[`markdown-rs`][markdown-rs].

* to learn markdown, see this [cheatsheet and tutorial][cheat]
* for more about us, see [`unifiedjs.com`][site]
* for questions, see [Discussions][chat]
* to help, see [contribute][] and [sponsor][] below

## Install

<!-- Note: this section has to be in sync with the monorepo readme. -->

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install micromark
```

In Deno with [`esm.sh`][esmsh]:

```js
import {micromark} from 'https://esm.sh/micromark@3'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {micromark} from 'https://esm.sh/micromark@3?bundle'
</script>
```

## Use

<!-- Note: this section has to be in sync with the `micromark` readme. -->

Typical use (buffering):

```js
import {micromark} from 'micromark'

console.log(micromark('## Hello, *world*!'))
```

Yields:

```html
<h2>Hello, <em>world</em>!</h2>
```

You can pass extensions (in this case [`micromark-extension-gfm`][gfm]):

```js
import {micromark} from 'micromark'
import {gfmHtml, gfm} from 'micromark-extension-gfm'

const value = '* [x] contact@example.com ~~strikethrough~~'

const result = micromark(value, {
  extensions: [gfm()],
  htmlExtensions: [gfmHtml()]
})

console.log(result)
```

Yields:

```html
<ul>
<li><input checked="" disabled="" type="checkbox"> <a href="mailto:contact@example.com">contact@example.com</a> <del>strikethrough</del></li>
</ul>
```

Streaming interface:

```js
import {createReadStream} from 'node:fs'
import {stream} from 'micromark/stream'

createReadStream('example.md')
  .on('error', handleError)
  .pipe(stream())
  .pipe(process.stdout)

function handleError(error) {
  // Handle your error here!
  throw error
}
```

## API

`micromark` core has two entries in its export map: `micromark` and
`micromark/stream`.

`micromark` exports the identifier [`micromark`][api-micromark].
`micromark/stream` exports the identifier [`stream`][api-stream].
There are no default exports.

The export map supports the [`development` condition][development].
Run `node --conditions development module.js` to get instrumented dev code.
Without this condition, production code is loaded.
See [§ Size & debug][size-debug] for more info.

### `micromark(value[, encoding][, options])`

Compile markdown to HTML.

> Note: which encodings are supported depends on the engine.
> For info on Node.js, see *[WHATWG supported encodings][encoding]*.

###### Parameters

* `value` (`string` or [`Uint8Array`][uint8-array])
  — markdown to parse
* `encoding` (`string`, default: `'utf8'`)
  — [character encoding][encoding] to understand `value` as when it’s a
  [`Uint8Array`][uint8-array]
* `options` ([`Options`][api-options], optional)
  — configuration

###### Returns

Compiled HTML (`string`).

### `stream(options?)`

Create a duplex (readable and writable) stream.

Some of the work to parse markdown can be done streaming, but in the
end buffering is required.

micromark does not handle errors for you, so you must handle errors on whatever
streams you pipe into it.
As markdown does not know errors, `micromark` itself does not emit errors.

###### Parameters

* `options` ([`Options`][api-options], optional)
  — configuration

###### Returns

Duplex stream.

### `Options`

Configuration (TypeScript type).

##### Fields

###### `allowDangerousHtml`

Whether to allow (dangerous) HTML (`boolean`, default: `false`).

The default is `false`, which still parses the HTML according to `CommonMark`
but shows the HTML as text instead of as elements.

Pass `true` for trusted content to get actual HTML elements.
See [§ Security][security].

###### `allowDangerousProtocol`

Whether to allow dangerous protocols in links and images (`boolean`, default:
`false`).

The default is `false`, which drops URLs in links and images that use dangerous
protocols.

Pass `true` for trusted content to support all protocols.

URLs that have no protocol (which means it’s relative to the current page, such
as `./some/page.html`) and URLs that have a safe protocol (for images: `http`,
`https`; for links: `http`, `https`, `irc`, `ircs`, `mailto`, `xmpp`), are
safe.
All other URLs are dangerous and dropped.
See [§ Security][security].

###### `defaultLineEnding`

Default line ending to use when compiling to HTML, for line endings not in
`value` (`'\r'`, `'\n'`, or `'\r\n'`; default: first line ending or `'\n'`).

Generally, `micromark` copies line endings (`\r`, `\n`, `\r\n`) in the markdown
document over to the compiled HTML.
In some cases, such as `> a`, CommonMark requires that extra line endings are
added: `<blockquote>\n<p>a</p>\n</blockquote>`.

To create that line ending, the document is checked for the first line ending
that is used.
If there is no line ending, `defaultLineEnding` is used.
If that isn’t configured, `\n` is used.

###### `extensions`

Array of syntax extensions (`Array<SyntaxExtension>`, default: `[]`).
See [§ Extensions][extensions].

###### `htmlExtensions`

Array of syntax extensions (`Array<HtmlExtension>`, default: `[]`).
See [§ Extensions][extensions].

## Types

This package is fully typed with [TypeScript][].
It exports the additional type [`Options`][api-options].

## Compatibility

Projects maintained by the unified collective are compatible with maintained
versions of Node.js.

When we cut a new major release, we drop support for unmaintained versions of
Node.
This means we try to keep the current release line, `micromark@4`, compatible
with Node.js 16.

## Security

This package is safe.
See [`security.md`][securitymd] in [`micromark/.github`][health] for how to
submit a security report.

## Contribute

See [`contributing.md`][contributing] in [`micromark/.github`][health] for ways
to get started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organisation, or community you agree to
abide by its terms.

## Sponsor

<!-- Note: this section has to be in sync with the monorepo readme. -->

Support this effort and give back by sponsoring on [OpenCollective][]!

<table>
<tr valign="middle">
<td width="100%" align="center" colspan="10">
  <br>
  <a href="https://www.salesforce.com">Salesforce</a> 🏅<br><br>
  <a href="https://www.salesforce.com"><img src="https://images.opencollective.com/salesforce/ca8f997/logo/512.png" width="256"></a>
</td>
</tr>
<tr valign="middle">
<td width="20%" align="center" rowspan="2" colspan="2">
  <a href="https://vercel.com">Vercel</a><br><br>
  <a href="https://vercel.com"><img src="https://avatars1.githubusercontent.com/u/14985020?s=256&v=4" width="128"></a>
</td>
<td width="20%" align="center" rowspan="2" colspan="2">
  <a href="https://motif.land">Motif</a><br><br>
  <a href="https://motif.land"><img src="https://avatars1.githubusercontent.com/u/74457950?s=256&v=4" width="128"></a>
</td>
<td width="20%" align="center" rowspan="2" colspan="2">
  <a href="https://www.hashicorp.com">HashiCorp</a><br><br>
  <a href="https://www.hashicorp.com"><img src="https://avatars1.githubusercontent.com/u/761456?s=256&v=4" width="128"></a>
</td>
<td width="20%" align="center" rowspan="2" colspan="2">
  <a href="https://www.gitbook.com">GitBook</a><br><br>
  <a href="https://www.gitbook.com"><img src="https://avatars1.githubusercontent.com/u/7111340?s=256&v=4" width="128"></a>
</td>
<td width="20%" align="center" rowspan="2" colspan="2">
  <a href="https://www.gatsbyjs.org">Gatsby</a><br><br>
  <a href="https://www.gatsbyjs.org"><img src="https://avatars1.githubusercontent.com/u/12551863?s=256&v=4" width="128"></a>
</td>
</tr>
<tr valign="middle">
</tr>
<tr valign="middle">
<td width="20%" align="center" rowspan="2" colspan="2">
  <a href="https://www.netlify.com">Netlify</a><br><br>
  <!--OC has a sharper image-->
  <a href="https://www.netlify.com"><img src="https://images.opencollective.com/netlify/4087de2/logo/256.png" width="128"></a>
</td>
<td width="10%" align="center">
  <a href="https://www.coinbase.com">Coinbase</a><br><br>
  <a href="https://www.coinbase.com"><img src="https://avatars1.githubusercontent.com/u/1885080?s=256&v=4" width="64"></a>
</td>
<td width="10%" align="center">
  <a href="https://themeisle.com">ThemeIsle</a><br><br>
  <a href="https://themeisle.com"><img src="https://avatars1.githubusercontent.com/u/58979018?s=128&v=4" width="64"></a>
</td>
<td width="10%" align="center">
  <a href="https://expo.io">Expo</a><br><br>
  <a href="https://expo.io"><img src="https://avatars1.githubusercontent.com/u/12504344?s=128&v=4" width="64"></a>
</td>
<td width="10%" align="center">
  <a href="https://boostnote.io">Boost Note</a><br><br>
  <a href="https://boostnote.io"><img src="https://images.opencollective.com/boosthub/6318083/logo/128.png" width="64"></a>
</td>
<td width="10%" align="center">
  <a href="https://markdown.space">Markdown Space</a><br><br>
  <a href="https://markdown.space"><img src="https://images.opencollective.com/markdown-space/e1038ed/logo/128.png" width="64"></a>
</td>
<td width="10%" align="center">
  <a href="https://www.holloway.com">Holloway</a><br><br>
  <a href="https://www.holloway.com"><img src="https://avatars1.githubusercontent.com/u/35904294?s=128&v=4" width="64"></a>
</td>
<td width="10%"></td>
<td width="10%"></td>
</tr>
<tr valign="middle">
<td width="100%" align="center" colspan="8">
  <br>
  <a href="https://opencollective.com/unified"><strong>You?</strong></a>
  <br><br>
</td>
</tr>
</table>

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[api-micromark]: #micromarkvalue-encoding-options

[api-options]: #options

[api-stream]: #streamoptions

[author]: https://wooorm.com

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[build]: https://github.com/micromark/micromark/actions

[build-badge]: https://github.com/micromark/micromark/workflows/main/badge.svg

[bundle-size]: https://bundlejs.com/?q=micromark

[bundle-size-badge]: https://img.shields.io/badge/dynamic/json?label=minzipped%20size&query=$.size.compressedSize&url=https://deno.bundlejs.com/?q=micromark

[chat]: https://github.com/micromark/micromark/discussions

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[cheat]: https://commonmark.org/help/

[coc]: https://github.com/micromark/.github/blob/main/code-of-conduct.md

[commonmark]: https://commonmark.org

[comparison]: https://github.com/micromark/micromark#comparison

[contribute]: #contribute

[contributing]: https://github.com/micromark/.github/blob/main/contributing.md

[coverage]: https://codecov.io/github/micromark/micromark

[coverage-badge]: https://img.shields.io/codecov/c/github/micromark/micromark.svg

[development]: https://nodejs.org/api/packages.html#packages_resolving_user_conditions

[directives]: https://github.com/micromark/micromark-extension-directive

[downloads]: https://www.npmjs.com/package/micromark

[downloads-badge]: https://img.shields.io/npm/dm/micromark.svg

[encoding]: https://nodejs.org/api/util.html#whatwg-supported-encodings

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[extensions]: https://github.com/micromark/micromark#extensions

[frontmatter]: https://github.com/micromark/micromark-extension-frontmatter

[gfm]: https://github.com/micromark/micromark-extension-gfm

[health]: https://github.com/micromark/.github

[license]: https://github.com/micromark/micromark/blob/main/license

[markdown-rs]: https://github.com/wooorm/markdown-rs

[math]: https://github.com/micromark/micromark-extension-math

[mdast-util-to-markdown]: https://github.com/syntax-tree/mdast-util-to-markdown

[mdxjs]: https://github.com/micromark/micromark-extension-mdxjs

[micromark]: https://github.com/micromark/micromark

[npm]: https://docs.npmjs.com/cli/install

[opencollective]: https://opencollective.com/unified

[security]: #security

[securitymd]: https://github.com/micromark/.github/blob/main/security.md

[site]: https://unifiedjs.com

[size-debug]: https://github.com/micromark/micromark#size--debug

[sponsor]: #sponsor

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[support]: https://github.com/micromark/.github/blob/main/support.md

[test]: https://github.com/micromark/micromark#test

[typescript]: https://www.typescriptlang.org

[uint8-array]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array
