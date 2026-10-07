# micromark-util-html-tag-name

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][bundle-size-badge]][bundle-size]
[![Sponsors][sponsors-badge]][opencollective]
[![Backers][backers-badge]][opencollective]
[![Chat][chat-badge]][chat]

[micromark][] utility with list of html tag names.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`htmlBlockNames`](#htmlblocknames)
    *   [`htmlRawNames`](#htmlrawnames)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package exposes a list of known tag names to markdown.

## When should I use this?

This package is only useful if you want to build an alternative to micromark.

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install micromark-util-html-tag-name
```

In Deno with [`esm.sh`][esmsh]:

```js
import {htmlBlockNames, htmlRawNames} from 'https://esm.sh/micromark-util-html-tag-name@1'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {htmlBlockNames, htmlRawNames} from 'https://esm.sh/micromark-util-html-tag-name@1?bundle'
</script>
```

## Use

```js
import {htmlBlockNames, htmlRawNames} from 'micromark-util-html-tag-name'

console.log(htmlBlockNames) // ['address', 'article', …]
console.log(htmlRawNames) // ['pre', 'script', …]
```

## API

This module exports the identifiers [`htmlBlockNames`][api-html-block-names]
and [`htmlRawNames`][api-html-raw-names].
There is no default export.

### `htmlBlockNames`

List of lowercase HTML “block” tag names (`Array<string>`).

The list, when parsing HTML (flow), results in more relaxed rules (condition
6\).
Because they are known blocks, the HTML-like syntax doesn’t have to be strictly
parsed.
For tag names not in this list, a more strict algorithm (condition 7) is used
to detect whether the HTML-like syntax is seen as HTML (flow) or not.

This is copied from:
<https://spec.commonmark.org/0.30/#html-blocks>.

> 👉 **Note**: `search` was added in `CommonMark@0.31`.

### `htmlRawNames`

List of lowercase HTML “raw” tag names (`Array<string>`).

The list, when parsing HTML (flow), results in HTML that can include lines
without exiting, until a closing tag also in this list is found (condition
1\).

This module is copied from:
<https://spec.commonmark.org/0.30/#html-blocks>.

> 👉 **Note**: `textarea` was added in `CommonMark@0.30`.

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

Projects maintained by the unified collective are compatible with maintained
versions of Node.js.

When we cut a new major release, we drop support for unmaintained versions of
Node.
This means we try to keep the current release line,
`micromark-util-html-tag-name@^2`, compatible with Node.js 16.
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

[downloads-badge]: https://img.shields.io/npm/dm/micromark-util-html-tag-name.svg

[downloads]: https://www.npmjs.com/package/micromark-util-html-tag-name

[bundle-size-badge]: https://img.shields.io/badge/dynamic/json?label=minzipped%20size&query=$.size.compressedSize&url=https://deno.bundlejs.com/?q=micromark-util-html-tag-name

[bundle-size]: https://bundlejs.com/?q=micromark-util-html-tag-name

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

[api-html-block-names]: #htmlblocknames

[api-html-raw-names]: #htmlrawnames
