# micromark-util-sanitize-uri

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][bundle-size-badge]][bundle-size]
[![Sponsors][sponsors-badge]][opencollective]
[![Backers][backers-badge]][opencollective]
[![Chat][chat-badge]][chat]

[micromark][] utility to sanitize urls.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`normalizeUri(value)`](#normalizeurivalue)
    *   [`sanitizeUri(url[, pattern])`](#sanitizeuriurl-pattern)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package exposes an algorithm to make URLs safe.

## When should I use this?

This package might be useful when you are making your own micromark extensions.

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install micromark-util-sanitize-uri
```

In Deno with [`esm.sh`][esmsh]:

```js
import {sanitizeUri} from 'https://esm.sh/micromark-util-sanitize-uri@1'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {sanitizeUri} from 'https://esm.sh/micromark-util-sanitize-uri@1?bundle'
</script>
```

## Use

```js
import {sanitizeUri} from 'micromark-util-sanitize-uri'

sanitizeUri('https://example.com/a&amp;b') // 'https://example.com/a&amp;amp;b'
sanitizeUri('https://example.com/a%b') // 'https://example.com/a%25b'
sanitizeUri('https://example.com/a%20b') // 'https://example.com/a%20b'
sanitizeUri('https://example.com/👍') // 'https://example.com/%F0%9F%91%8D'
sanitizeUri('https://example.com/', /^https?$/i) // 'https://example.com/'
sanitizeUri('javascript:alert(1)', /^https?$/i) // ''
sanitizeUri('./example.jpg', /^https?$/i) // './example.jpg'
sanitizeUri('#a', /^https?$/i) // '#a'
```

## API

This module exports the identifiers [`normalizeUri`][api-normalize-uri] and
[`sanitizeUri`][api-sanitize-uri].
There is no default export.

### `normalizeUri(value)`

Normalize a URL.

Encode unsafe characters with percent-encoding, skipping already encoded
sequences.

###### Parameters

*   `value` (`string`)
    — URI to normalize

###### Returns

Normalized URI (`string`).

### `sanitizeUri(url[, pattern])`

Make a value safe for injection as a URL.

This encodes unsafe characters with percent-encoding and skips already
encoded sequences (see [`normalizeUri`][api-normalize-uri]).
Further unsafe characters are encoded as character references (see
[`micromark-util-encode`][micromark-util-encode]).

A regex of allowed protocols can be given, in which case the URL is sanitized.
For example, `/^(https?|ircs?|mailto|xmpp)$/i` can be used for `a[href]`, or
`/^https?$/i` for `img[src]` (this is what `github.com` allows).
If the URL includes an unknown protocol (one not matched by `protocol`, such
as a dangerous example, `javascript:`), the value is ignored.

###### Parameters

*   `url` (`string`)
    — URI to sanitize
*   `pattern` (`RegExp`, optional)
    — allowed protocols

###### Returns

Sanitized URI (`string`).

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

Projects maintained by the unified collective are compatible with maintained
versions of Node.js.

When we cut a new major release, we drop support for unmaintained versions of
Node.
This means we try to keep the current release line,
`micromark-util-sanitize-uri@^2`, compatible with Node.js 16.
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

[downloads-badge]: https://img.shields.io/npm/dm/micromark-util-sanitize-uri.svg

[downloads]: https://www.npmjs.com/package/micromark-util-sanitize-uri

[bundle-size-badge]: https://img.shields.io/badge/dynamic/json?label=minzipped%20size&query=$.size.compressedSize&url=https://deno.bundlejs.com/?q=micromark-util-sanitize-uri

[bundle-size]: https://bundlejs.com/?q=micromark-util-sanitize-uri

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

[micromark-util-encode]: https://github.com/micromark/micromark/tree/main/packages/micromark-util-encode

[api-normalize-uri]: #normalizeurivalue

[api-sanitize-uri]: #sanitizeuriurl-pattern
