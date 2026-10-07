# micromark-extension-gfm-autolink-literal

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[micromark][] extensions to support GFM [literal autolinks][spec].

## Contents

* [What is this?](#what-is-this)
* [When to use this](#when-to-use-this)
* [Install](#install)
* [Use](#use)
* [API](#api)
  * [`gfmAutolinkLiteral()`](#gfmautolinkliteral)
  * [`gfmAutolinkLiteralHtml()`](#gfmautolinkliteralhtml)
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

This package contains extensions that add support for the extra autolink syntax
enabled by GFM to [`micromark`][micromark].

GitHub employs different algorithms to autolink: one at parse time and one at
transform time (similar to how @mentions are done at transform time).
This difference can be observed because character references and escapes are
handled differently.
But also because issues/PRs/comments omit (perhaps by accident?) the second
algorithm for `www.`, `http://`, and `https://` links (but not for email links).

As this is a syntax extension, it focuses on the first algorithm.
The second algorithm is performed by
[`mdast-util-gfm-autolink-literal`][mdast-util-gfm-autolink-literal].
The `html` part of this micromark extension does not operate on an AST and hence
can’t perform the second algorithm.

The implementation of autolink literal on github.com is currently buggy.
The bugs have been reported on [`cmark-gfm`][cmark-gfm].
This micromark extension matches github.com except for its bugs.

## When to use this

This project is useful when you want to support autolink literals in markdown.

You can use these extensions when you are working with [`micromark`][micromark].
To support all GFM features, use
[`micromark-extension-gfm`][micromark-extension-gfm] instead.

When you need a syntax tree, combine this package with
[`mdast-util-gfm-autolink-literal`][mdast-util-gfm-autolink-literal].

All these packages are used in [`remark-gfm`][remark-gfm], which focusses on
making it easier to transform content by abstracting these internals away.

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install micromark-extension-gfm-autolink-literal
```

In Deno with [`esm.sh`][esmsh]:

```js
import {gfmAutolinkLiteral, gfmAutolinkLiteralHtml} from 'https://esm.sh/micromark-extension-gfm-autolink-literal@2'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {gfmAutolinkLiteral, gfmAutolinkLiteralHtml} from 'https://esm.sh/micromark-extension-gfm-autolink-literal@2?bundle'
</script>
```

## Use

```js
import {micromark} from 'micromark'
import {
  gfmAutolinkLiteral,
  gfmAutolinkLiteralHtml
} from 'micromark-extension-gfm-autolink-literal'

const output = micromark('Just a URL: www.example.com.', {
  extensions: [gfmAutolinkLiteral()],
  htmlExtensions: [gfmAutolinkLiteralHtml()]
})

console.log(output)
```

Yields:

```html
<p>Just a URL: <a href="http://www.example.com">www.example.com</a>.</p>
```

## API

This package exports the identifiers
[`gfmAutolinkLiteral`][api-gfm-autolink-literal] and
[`gfmAutolinkLiteralHtml`][api-gfm-autolink-literal-html].
There is no default export.

The export map supports the [`development` condition][development].
Run `node --conditions development module.js` to get instrumented dev code.
Without this condition, production code is loaded.

### `gfmAutolinkLiteral()`

Create an extension for `micromark` to support GitHub autolink literal
syntax.

###### Parameters

Extension for `micromark` that can be passed in `extensions` to enable GFM
autolink literal syntax ([`Extension`][micromark-extension]).

### `gfmAutolinkLiteralHtml()`

Create an HTML extension for `micromark` to support GitHub autolink literal
when serializing to HTML.

###### Parameters

Extension for `micromark` that can be passed in `htmlExtensions` to support
GitHub autolink literal when serializing to HTML
([`HtmlExtension`][micromark-html-extension]).

## Bugs

GitHub’s own algorithm to parse autolink literals contains three bugs.
A smaller bug is left unfixed in this project for consistency.
Two main bugs are not present in this project.
The issues relating to autolink literals are:

* [GFM autolink extension (`www.`, `https?://` parts): links don’t work when
  after bracket](https://github.com/github/cmark-gfm/issues/278)\
  fixed here ✅
* [GFM autolink extension (`www.` part): uppercase does not match on
  issues/PRs/comments](https://github.com/github/cmark-gfm/issues/280)\
  fixed here ✅
* [GFM autolink extension (`www.` part): the word `www`
  matches](https://github.com/github/cmark-gfm/issues/279)\
  present here for consistency

## Authoring

It is recommended to use labels, either with a resource or a definition,
instead of autolink literals, as those allow relative URLs and descriptive
text to explain the URL in prose.

## HTML

GFM autolink literals relate to the `<a>` element in HTML.
See [*§ 4.5.1 The `a` element*][html-a] in the HTML spec for more info.
When an email autolink is used, the string `mailto:` is prepended when
generating the `href` attribute of the hyperlink.
When a www autolink is used, the string `http://` is prepended.

## CSS

As hyperlinks are the fundamental thing that makes the web, you will most
definitely have CSS for `a` elements already.
The same CSS can be used for autolink literals, too.

GitHub itself does not apply interesting CSS to autolink literals.
For any link, it currently (June 2022) [uses][css]:

```css
a {
  background-color: transparent;
  color: #58a6ff;
  text-decoration: none;
}

a:active,
a:hover {
  outline-width: 0;
}

a:hover {
  text-decoration: underline;
}

a:not([href]) {
  color: inherit;
  text-decoration: none;
}
```

## Syntax

Autolink literals form with, roughly, the following BNF:

```bnf
gfm_autolink_literal ::= gfm_protocol_autolink | gfm_www_autolink | gfm_email_autolink

; Restriction: the code before must be `www_autolink_before`.
; Restriction: the code after `.` must not be eof.
www_autolink ::= 3('w' | 'W') '.' [domain [path]]
www_autolink_before ::= eof | eol | space_or_tab | '(' | '*' | '_' | '[' | ']' | '~'

; Restriction: the code before must be `http_autolink_before`.
; Restriction: the code after the protocol must be `http_autolink_protocol_after`.
http_autolink ::= ('h' | 'H') 2('t' | 'T') ('p' | 'P') ['s' | 'S'] ':' 2'/' domain [path]
http_autolink_before ::= byte - ascii_alpha
http_autolink_protocol_after ::= byte - eof - eol - ascii_control - unicode_whitespace - ode_punctuation

; Restriction: the code before must be `email_autolink_before`.
; Restriction: `ascii_digit` may not occur in the last label part of the label.
email_autolink ::= 1*('+' | '-' | '.' | '_' | ascii_alphanumeric) '@' 1*(1*label_segment l_dot_cont) 1*label_segment
email_autolink_before ::= byte - ascii_alpha - '/'

; Restriction: `_` may not occur in the last two domain parts.
domain ::= 1*(url_ampt_cont | domain_punct_cont | '-' | byte - eof - ascii_control - ode_whitespace - unicode_punctuation)
; Restriction: must not be followed by `punct`.
domain_punct_cont ::= '.' | '_'
; Restriction: must not be followed by `char-ref`.
url_ampt_cont ::= '&'

; Restriction: a counter `balance = 0` is increased for every `(`, and decreased for every `)`.
; Restriction: `)` must not be `paren_at_end`.
path ::= 1*(url_ampt_cont | path_punctuation_cont | '(' | ')' | byte - eof - eol - space_or_tab)
; Restriction: must not be followed by `punct`.
path_punctuation_cont ::= trailing_punctuation - '<'
; Restriction: must be followed by `punct` and `balance` must be less than `0`.
paren_at_end ::= ')'

label_segment ::= label_dash_underscore_cont | ascii_alpha | ascii_digit
; Restriction: if followed by `punct`, the whole email autolink is invalid.
label_dash_underscore_cont ::= '-' | '_'
; Restriction: must not be followed by `punct`.
label_dot_cont ::= '.'

punct ::= *trailing_punctuation ( byte - eof - eol - space_or_tab - '<' )
char_ref ::= *ascii_alpha ';' path_end
trailing_punctuation ::= '!' | '"' | '\'' | ')' | '*' | ',' | '.' | ':' | ';' | '<' | '?' | '_' | '~'
```

The grammar for GFM autolink literal is very relaxed: basically anything
except for whitespace is allowed after a prefix.
To use whitespace characters and otherwise impossible characters, in URLs,
you can use percent encoding:

```markdown
https://example.com/alpha%20bravo
```

Yields:

```html
<p><a href="https://example.com/alpha%20bravo">https://example.com/alpha%20bravo</a></p>
```

There are several cases where incorrect encoding of URLs would, in other
languages, result in a parse error.
In markdown, there are no errors, and URLs are normalized.
In addition, many characters are percent encoded
([`sanitizeUri`][micromark-util-sanitize-uri]).
For example:

```markdown
www.a👍b%
```

Yields:

```html
<p><a href="http://www.a%F0%9F%91%8Db%25">www.a👍b%</a></p>
```

There is a big difference between how www and protocol literals work
compared to how email literals work.
The first two are done when parsing, and work like anything else in
markdown.
But email literals are handled afterwards: when everything is parsed, we
look back at the events to figure out if there were email addresses.
This particularly affects how they interleave with character escapes and
character references.

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

Projects maintained by the unified collective are compatible with maintained
versions of Node.js.

When we cut a new major release, we drop support for unmaintained versions of
Node.
This means we try to keep the current release line,
`micromark-extension-gfm-autolink-literal@^2`, compatible with Node.js 16.

This package works with `micromark` version `3` and later.

## Security

This package is safe.
Unlike other links in CommonMark, which allow arbitrary protocols, this
construct always produces safe links.

## Related

* [`micromark-extension-gfm`][micromark-extension-gfm]
  — support all of GFM
* [`mdast-util-gfm-autolink-literal`][mdast-util-gfm-autolink-literal]
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

[build-badge]: https://github.com/micromark/micromark-extension-gfm-autolink-literal/workflows/main/badge.svg

[build]: https://github.com/micromark/micromark-extension-gfm-autolink-literal/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/micromark/micromark-extension-gfm-autolink-literal.svg

[coverage]: https://codecov.io/github/micromark/micromark-extension-gfm-autolink-literal

[downloads-badge]: https://img.shields.io/npm/dm/micromark-extension-gfm-autolink-literal.svg

[downloads]: https://www.npmjs.com/package/micromark-extension-gfm-autolink-literal

[size-badge]: https://img.shields.io/badge/dynamic/json?label=minzipped%20size&query=$.size.compressedSize&url=https://deno.bundlejs.com/?q=micromark-extension-gfm-autolink-literal

[size]: https://bundlejs.com/?q=micromark-extension-gfm-autolink-literal

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

[micromark-extension-gfm]: https://github.com/micromark/micromark-extension-gfm

[micromark-util-sanitize-uri]: https://github.com/micromark/micromark/tree/main/packages/micromark-util-sanitize-uri

[micromark-extension]: https://github.com/micromark/micromark#syntaxextension

[micromark-html-extension]: https://github.com/micromark/micromark#htmlextension

[mdast-util-gfm]: https://github.com/syntax-tree/mdast-util-gfm

[mdast-util-gfm-autolink-literal]: https://github.com/syntax-tree/mdast-util-gfm-autolink-literal

[remark-gfm]: https://github.com/remarkjs/remark-gfm

[spec]: https://github.github.com/gfm/#autolinks-extension-

[html-a]: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element

[css]: https://github.com/sindresorhus/github-markdown-css

[cmark-gfm]: https://github.com/github/cmark-gfm

[api-gfm-autolink-literal]: #gfmautolinkliteral

[api-gfm-autolink-literal-html]: #gfmautolinkliteralhtml
