# micromark-util-normalize-identifier

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][bundle-size-badge]][bundle-size]
[![Sponsors][sponsors-badge]][opencollective]
[![Backers][backers-badge]][opencollective]
[![Chat][chat-badge]][chat]

[micromark][] utility normalize identifiers.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`normalizeIdentifier(value)`](#normalizeidentifiervalue)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package exposes an algorithm to normalize identifiers found in markdown.

## When should I use this?

This package might be useful when you are making your own micromark extensions.

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install micromark-util-normalize-identifier
```

In Deno with [`esm.sh`][esmsh]:

```js
import {normalizeIdentifier} from 'https://esm.sh/micromark-util-normalize-identifier@1'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {normalizeIdentifier} from 'https://esm.sh/micromark-util-normalize-identifier@1?bundle'
</script>
```

## Use

```js
import {normalizeIdentifier} from 'micromark-util-normalize-identifier'

normalizeIdentifier(' a ') // 'A'
normalizeIdentifier('a\t\r\nb') // 'A B'
normalizeIdentifier('ТОЛПОЙ') // 'ТОЛПОЙ'
normalizeIdentifier('Толпой') // 'ТОЛПОЙ'
```

## API

This module exports the identifier
[`normalizeIdentifier`][api-normalize-identifier].
There is no default export.

### `normalizeIdentifier(value)`

Normalize an identifier (as found in references, definitions).

Collapses markdown whitespace, trim, and then lower- and uppercase.

Some characters are considered “uppercase”, such as U+03F4 (`ϴ`), but if their
lowercase counterpart (U+03B8 (`θ`)) is uppercased will result in a different
uppercase character (U+0398 (`Θ`)).
So, to get a canonical form, we perform both lower- and uppercase.

Using uppercase last makes sure keys will never interact with default
prototypal values (such as `constructor`): nothing in the prototype of `Object`
is uppercase.

###### Parameters

*   `value` (`string`)
    — identifier to normalize

###### Returns

Normalized identifier (`string`).

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

Projects maintained by the unified collective are compatible with maintained
versions of Node.js.

When we cut a new major release, we drop support for unmaintained versions of
Node.
This means we try to keep the current release line,
`micromark-util-normalize-identifier@^2`, compatible with Node.js 16.
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

[downloads-badge]: https://img.shields.io/npm/dm/micromark-util-normalize-identifier.svg

[downloads]: https://www.npmjs.com/package/micromark-util-normalize-identifier

[bundle-size-badge]: https://img.shields.io/badge/dynamic/json?label=minzipped%20size&query=$.size.compressedSize&url=https://deno.bundlejs.com/?q=micromark-util-normalize-identifier

[bundle-size]: https://bundlejs.com/?q=micromark-util-normalize-identifier

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

[api-normalize-identifier]: #normalizeidentifiervalue
