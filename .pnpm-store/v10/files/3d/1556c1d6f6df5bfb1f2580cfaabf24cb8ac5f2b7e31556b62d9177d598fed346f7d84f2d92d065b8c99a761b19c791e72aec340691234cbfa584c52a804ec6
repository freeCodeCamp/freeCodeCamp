# micromark-factory-label

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][bundle-size-badge]][bundle-size]
[![Sponsors][sponsors-badge]][opencollective]
[![Backers][backers-badge]][opencollective]
[![Chat][chat-badge]][chat]

[micromark][] factory to parse labels (found in media, definitions).

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`factoryLabel(…)`](#factorylabel)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package exposes states to parse labels.

## When should I use this?

This package is useful when you are making your own micromark extensions.

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install micromark-factory-label
```

In Deno with [`esm.sh`][esmsh]:

```js
import {factoryLabel} from 'https://esm.sh/micromark-factory-label@1'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {factoryLabel} from 'https://esm.sh/micromark-factory-label@1?bundle'
</script>
```

## Use

```js
import {ok as assert} from 'devlop'
import {factoryLabel} from 'micromark-factory-label'
import {codes, types} from 'micromark-util-symbol'

// A micromark tokenizer that uses the factory:
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeDefinition(effects, ok, nok) {
  return start

  // …

  /** @type {State} */
  function start(code) {
    assert(code === codes.leftSquareBracket, 'expected `[`')
    effects.enter(types.definition)
    return factoryLabel.call(
      self,
      effects,
      labelAfter,
      nok,
      types.definitionLabel,
      types.definitionLabelMarker,
      types.definitionLabelString
    )(code)
  }

  // …
}
```

## API

This module exports the identifier [`factoryLabel`][api-factory-label].
There is no default export.

### `factoryLabel(…)`

Parse labels.

> 👉 **Note**: labels in markdown are capped at 999 characters in the string.

###### Examples

```markdown
[a]
[a
b]
[a\]b]
```

###### Parameters

*   `this` (`TokenizeContext`)
    — tokenize context
*   `effects` (`Effects`)
    — context
*   `ok` (`State`)
    — state switched to when successful
*   `nok` (`State`)
    — state switched to when unsuccessful
*   `type` (`string`)
    — type of the whole label (`[a]`)
*   `markerType` (`string`)
    — type for the markers (`[` and `]`)
*   `stringType` (`string`)
    — type for the identifier (`a`)

###### Returns

Start state (`State`).

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

Projects maintained by the unified collective are compatible with maintained
versions of Node.js.

When we cut a new major release, we drop support for unmaintained versions of
Node.
This means we try to keep the current release line,
`micromark-factory-label@^2`, compatible with Node.js 16.
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

[downloads-badge]: https://img.shields.io/npm/dm/micromark-factory-label.svg

[downloads]: https://www.npmjs.com/package/micromark-factory-label

[bundle-size-badge]: https://img.shields.io/badge/dynamic/json?label=minzipped%20size&query=$.size.compressedSize&url=https://deno.bundlejs.com/?q=micromark-factory-label

[bundle-size]: https://bundlejs.com/?q=micromark-factory-label

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

[api-factory-label]: #factorylabel
