# micromark-util-classify-character

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][bundle-size-badge]][bundle-size]
[![Sponsors][sponsors-badge]][opencollective]
[![Backers][backers-badge]][opencollective]
[![Chat][chat-badge]][chat]

[micromark][] utility to classify whether a character is whitespace or
punctuation.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`classifyCharacter(code)`](#classifycharactercode)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package exposes an algorithm to classify characters into 3 categories.

## When should I use this?

This package might be useful when you are making your own micromark extensions.

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install micromark-util-classify-character
```

In Deno with [`esm.sh`][esmsh]:

```js
import {classifyCharacter} from 'https://esm.sh/micromark-util-classify-character@1'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {classifyCharacter} from 'https://esm.sh/micromark-util-classify-character@1?bundle'
</script>
```

## Use

```js
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeAttention(effects, ok) {
  return start

  // …

  /** @type {State} */
  function sequence(code) {
    if (code === marker) {
      // …
    }

    const token = effects.exit('attentionSequence')
    const after = classifyCharacter(code)
    const open =
      !after || (after === constants.characterGroupPunctuation && before)
    const close =
      !before || (before === constants.characterGroupPunctuation && after)
    // …
  }

  // …
}
```

## API

This module exports the identifier
[`classifyCharacter`][api-classify-character].
There is no default export.

### `classifyCharacter(code)`

Classify whether a code represents whitespace, punctuation, or something
else.

Used for attention (emphasis, strong), whose sequences can open or close
based on the class of surrounding characters.

> 👉 **Note**: eof (`null`) is seen as whitespace.

###### Parameters

*   `code` (`Code`)
    — code

###### Returns

Group (`constants.characterGroupWhitespace`,
`constants.characterGroupPunctuation`, or `undefined`).

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

Projects maintained by the unified collective are compatible with maintained
versions of Node.js.

When we cut a new major release, we drop support for unmaintained versions of
Node.
This means we try to keep the current release line,
`micromark-util-classify-character@^2`, compatible with Node.js 16.
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

[downloads-badge]: https://img.shields.io/npm/dm/micromark-util-classify-character.svg

[downloads]: https://www.npmjs.com/package/micromark-util-classify-character

[bundle-size-badge]: https://img.shields.io/badge/dynamic/json?label=minzipped%20size&query=$.size.compressedSize&url=https://deno.bundlejs.com/?q=micromark-util-classify-character

[bundle-size]: https://bundlejs.com/?q=micromark-util-classify-character

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

[api-classify-character]: #classifycharactercode
