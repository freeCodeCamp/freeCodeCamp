# micromark-util-character

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][bundle-size-badge]][bundle-size]
[![Sponsors][sponsors-badge]][opencollective]
[![Backers][backers-badge]][opencollective]
[![Chat][chat-badge]][chat]

[micromark][] utility to handle [character codes][code].

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`asciiAlpha(code)`](#asciialphacode)
    *   [`asciiAlphanumeric(code)`](#asciialphanumericcode)
    *   [`asciiAtext(code)`](#asciiatextcode)
    *   [`asciiControl(code)`](#asciicontrolcode)
    *   [`asciiDigit(code)`](#asciidigitcode)
    *   [`asciiHexDigit(code)`](#asciihexdigitcode)
    *   [`asciiPunctuation(code)`](#asciipunctuationcode)
    *   [`markdownLineEnding(code)`](#markdownlineendingcode)
    *   [`markdownLineEndingOrSpace(code)`](#markdownlineendingorspacecode)
    *   [`markdownSpace(code)`](#markdownspacecode)
    *   [`unicodePunctuation(code)`](#unicodepunctuationcode)
    *   [`unicodeWhitespace(code)`](#unicodewhitespacecode)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package exposes algorithms to check whether characters match groups.

## When should I use this?

This package might be useful when you are making your own micromark extensions.

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install micromark-util-character
```

In Deno with [`esm.sh`][esmsh]:

```js
import * as character from 'https://esm.sh/micromark-util-character@1'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import * as character from 'https://esm.sh/micromark-util-character@1?bundle'
</script>
```

## Use

```js
import {asciiAlpha} from 'micromark-util-character'

console.log(asciiAlpha(64)) // false
console.log(asciiAlpha(65)) // true
```

## API

This module exports the identifiers
[`asciiAlpha`][api-ascii-alpha],
[`asciiAlphanumeric`][api-ascii-alphanumeric],
[`asciiAtext`][api-ascii-atext],
[`asciiControl`][api-ascii-control],
[`asciiDigit`][api-ascii-digit],
[`asciiHexDigit`][api-ascii-hex-digit],
[`asciiPunctuation`][api-ascii-punctuation],
[`markdownLineEnding`][api-markdown-line-ending],
[`markdownLineEndingOrSpace`][api-markdown-line-ending-or-space],
[`markdownSpace`][api-markdown-space],
[`unicodePunctuation`][api-unicode-punctuation],
[`unicodeWhitespace`][api-unicode-whitespace].
There is no default export.

### `asciiAlpha(code)`

Check whether the [character code][code] represents an ASCII alpha (`a` through
`z`, case insensitive).

An **ASCII alpha** is an ASCII upper alpha or ASCII lower alpha.

An **ASCII upper alpha** is a character in the inclusive range U+0041 (`A`)
to U+005A (`Z`).

An **ASCII lower alpha** is a character in the inclusive range U+0061 (`a`)
to U+007A (`z`).

###### Parameters

*   `code` (`Code`)
    — code

###### Returns

Whether it matches (`boolean`).

### `asciiAlphanumeric(code)`

Check whether the [character code][code] represents an ASCII alphanumeric (`a`
through `z`, case insensitive, or `0` through `9`).

An **ASCII alphanumeric** is an ASCII digit (see `asciiDigit`) or ASCII alpha
(see `asciiAlpha`).

###### Parameters

*   `code` (`Code`)
    — code

###### Returns

Whether it matches (`boolean`).

### `asciiAtext(code)`

Check whether the [character code][code] represents an ASCII atext.

atext is an ASCII alphanumeric (see `asciiAlphanumeric`), or a character in
the inclusive ranges U+0023 NUMBER SIGN (`#`) to U+0027 APOSTROPHE (`'`),
U+002A ASTERISK (`*`), U+002B PLUS SIGN (`+`), U+002D DASH (`-`), U+002F
SLASH (`/`), U+003D EQUALS TO (`=`), U+003F QUESTION MARK (`?`), U+005E
CARET (`^`) to U+0060 GRAVE ACCENT (`` ` ``), or U+007B LEFT CURLY BRACE
(`{`) to U+007E TILDE (`~`) (**\[RFC5322]**).

See **\[RFC5322]**:\
[Internet Message Format](https://tools.ietf.org/html/rfc5322).\
P. Resnick.\
IETF.

###### Parameters

*   `code` (`Code`)
    — code

###### Returns

Whether it matches (`boolean`).

### `asciiControl(code)`

Check whether a [character code][code] is an ASCII control character.

An **ASCII control** is a character in the inclusive range U+0000 NULL (NUL)
to U+001F (US), or U+007F (DEL).

###### Parameters

*   `code` (`Code`)
    — code

###### Returns

Whether it matches (`boolean`).

### `asciiDigit(code)`

Check whether the [character code][code] represents an ASCII digit (`0` through
`9`).

An **ASCII digit** is a character in the inclusive range U+0030 (`0`) to
U+0039 (`9`).

###### Parameters

*   `code` (`Code`)
    — code

###### Returns

Whether it matches (`boolean`).

### `asciiHexDigit(code)`

Check whether the [character code][code] represents an ASCII hex digit (`a`
through `f`, case insensitive, or `0` through `9`).

An **ASCII hex digit** is an ASCII digit (see `asciiDigit`), ASCII upper hex
digit, or an ASCII lower hex digit.

An **ASCII upper hex digit** is a character in the inclusive range U+0041
(`A`) to U+0046 (`F`).

An **ASCII lower hex digit** is a character in the inclusive range U+0061
(`a`) to U+0066 (`f`).

###### Parameters

*   `code` (`Code`)
    — code

###### Returns

Whether it matches (`boolean`).

### `asciiPunctuation(code)`

Check whether the [character code][code] represents ASCII punctuation.

An **ASCII punctuation** is a character in the inclusive ranges U+0021
EXCLAMATION MARK (`!`) to U+002F SLASH (`/`), U+003A COLON (`:`) to U+0040 AT
SIGN (`@`), U+005B LEFT SQUARE BRACKET (`[`) to U+0060 GRAVE ACCENT
(`` ` ``), or U+007B LEFT CURLY BRACE (`{`) to U+007E TILDE (`~`).

###### Parameters

*   `code` (`Code`)
    — code

###### Returns

Whether it matches (`boolean`).

### `markdownLineEnding(code)`

Check whether a [character code][code] is a markdown line ending.

A **markdown line ending** is the virtual characters M-0003 CARRIAGE RETURN
LINE FEED (CRLF), M-0004 LINE FEED (LF) and M-0005 CARRIAGE RETURN (CR).

In micromark, the actual character U+000A LINE FEED (LF) and U+000D CARRIAGE
RETURN (CR) are replaced by these virtual characters depending on whether
they occurred together.

###### Parameters

*   `code` (`Code`)
    — code

###### Returns

Whether it matches (`boolean`).

### `markdownLineEndingOrSpace(code)`

Check whether a [character code][code] is a markdown line ending (see
`markdownLineEnding`) or markdown space (see `markdownSpace`).

###### Parameters

*   `code` (`Code`)
    — code

###### Returns

Whether it matches (`boolean`).

### `markdownSpace(code)`

Check whether a [character code][code] is a markdown space.

A **markdown space** is the concrete character U+0020 SPACE (SP) and the
virtual characters M-0001 VIRTUAL SPACE (VS) and M-0002 HORIZONTAL TAB (HT).

In micromark, the actual character U+0009 CHARACTER TABULATION (HT) is
replaced by one M-0002 HORIZONTAL TAB (HT) and between 0 and 3 M-0001 VIRTUAL
SPACE (VS) characters, depending on the column at which the tab occurred.

###### Parameters

*   `code` (`Code`)
    — code

###### Returns

Whether it matches (`boolean`).

### `unicodePunctuation(code)`

Check whether the [character code][code] represents Unicode punctuation.

A **Unicode punctuation** is a character in the Unicode `Pc` (Punctuation,
Connector), `Pd` (Punctuation, Dash), `Pe` (Punctuation, Close), `Pf`
(Punctuation, Final quote), `Pi` (Punctuation, Initial quote), `Po`
(Punctuation, Other), or `Ps` (Punctuation, Open) categories, or an ASCII
punctuation (see `asciiPunctuation`) (**\[UNICODE]**).

See **\[UNICODE]**:\
[The Unicode Standard](https://www.unicode.org/versions/).\
Unicode Consortium.

###### Parameters

*   `code` (`Code`)
    — code

###### Returns

Whether it matches (`boolean`).

### `unicodeWhitespace(code)`

Check whether the [character code][code] represents Unicode whitespace.

Note that this does handle micromark specific markdown whitespace characters.
See `markdownLineEndingOrSpace` to check that.

A **Unicode whitespace** is a character in the Unicode `Zs` (Separator,
Space) category, or U+0009 CHARACTER TABULATION (HT), U+000A LINE FEED (LF),
U+000C (FF), or U+000D CARRIAGE RETURN (CR) (**\[UNICODE]**).

See **\[UNICODE]**:\
[The Unicode Standard](https://www.unicode.org/versions/).\
Unicode Consortium.

###### Parameters

*   `code` (`Code`)
    — code

###### Returns

Whether it matches (`boolean`).

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

Projects maintained by the unified collective are compatible with maintained
versions of Node.js.

When we cut a new major release, we drop support for unmaintained versions of
Node.
This means we try to keep the current release line,
`micromark-util-character@^2`, compatible with Node.js 16.
This package works with `micromark@^3`.

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

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/micromark/micromark/workflows/main/badge.svg

[build]: https://github.com/micromark/micromark/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/micromark/micromark.svg

[coverage]: https://codecov.io/github/micromark/micromark

[downloads-badge]: https://img.shields.io/npm/dm/micromark-util-character.svg

[downloads]: https://www.npmjs.com/package/micromark-util-character

[bundle-size-badge]: https://img.shields.io/badge/dynamic/json?label=minzipped%20size&query=$.size.compressedSize&url=https://deno.bundlejs.com/?q=micromark-util-character

[bundle-size]: https://bundlejs.com/?q=micromark-util-character

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[opencollective]: https://opencollective.com/unified

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/micromark/micromark/discussions

[license]: https://github.com/micromark/micromark/blob/main/license

[author]: https://wooorm.com

[health]: https://github.com/micromark/.github

[securitymd]: https://github.com/micromark/.github/blob/main/security.md

[contributing]: https://github.com/micromark/.github/blob/main/contributing.md

[support]: https://github.com/micromark/.github/blob/main/support.md

[coc]: https://github.com/micromark/.github/blob/main/code-of-conduct.md

[typescript]: https://www.typescriptlang.org

[micromark]: https://github.com/micromark/micromark

[code]: https://github.com/micromark/micromark#preprocess

[api-ascii-alpha]: #asciialphacode

[api-ascii-alphanumeric]: #asciialphanumericcode

[api-ascii-atext]: #asciiatextcode

[api-ascii-control]: #asciicontrolcode

[api-ascii-digit]: #asciidigitcode

[api-ascii-hex-digit]: #asciihexdigitcode

[api-ascii-punctuation]: #asciipunctuationcode

[api-markdown-line-ending]: #markdownlineendingcode

[api-markdown-line-ending-or-space]: #markdownlineendingorspacecode

[api-markdown-space]: #markdownspacecode

[api-unicode-punctuation]: #unicodepunctuationcode

[api-unicode-whitespace]: #unicodewhitespacecode
