# micromark-factory-destination

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][bundle-size-badge]][bundle-size]
[![Sponsors][sponsors-badge]][opencollective]
[![Backers][backers-badge]][opencollective]
[![Chat][chat-badge]][chat]

[micromark][] factory to parse destinations (found in resources, definitions).

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`factoryDestination(…)`](#factorydestination)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package exposes states to parse destinations.

## When should I use this?

This package is useful when you are making your own micromark extensions.

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install micromark-factory-destination
```

In Deno with [`esm.sh`][esmsh]:

```js
import {factoryDestination} from 'https://esm.sh/micromark-factory-destination@1'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {factoryDestination} from 'https://esm.sh/micromark-factory-destination@1?bundle'
</script>
```

## Use

```js
import {factoryDestination} from 'micromark-factory-destination'
import {codes, types} from 'micromark-util-symbol'

// A micromark tokenizer that uses the factory:
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeResource(effects, ok, nok) {
  return start

  // …

  /** @type {State} */
  function open(code) {
    if (code === codes.rightParenthesis) {
      return end(code)
    }

    return factoryDestination(
      effects,
      destinationAfter,
      nok,
      types.resourceDestination,
      types.resourceDestinationLiteral,
      types.resourceDestinationLiteralMarker,
      types.resourceDestinationRaw,
      types.resourceDestinationString,
      constants.linkResourceDestinationBalanceMax
    )(code)
  }

  // …
}
```

## API

This module exports the identifier
[`factoryDestination`][api-factory-destination].
There is no default export.

### `factoryDestination(…)`

Parse destinations.

###### Examples

```markdown
<a>
<a\>b>
<a b>
<a)>
a
a\)b
a(b)c
a(b)
```

###### Parameters

*   `effects` (`Effects`)
    — context
*   `ok` (`State`)
    — state switched to when successful
*   `nok` (`State`)
    — state switched to when unsuccessful
*   `type` (`string`)
    — type for whole (`<a>` or `b`)
*   `literalType` (`string`)
    — type when enclosed (`<a>`)
*   `literalMarkerType` (`string`)
    — type for enclosing (`<` and `>`)
*   `rawType` (`string`)
    — type when not enclosed (`b`)
*   `stringType` (`string`)
    — type for the value (`a` or `b`)
*   `max` (`number`, default: `Infinity`)
    — depth of nested parens (inclusive)

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
`micromark-factory-destination@^2`, compatible with Node.js 16.
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

[downloads-badge]: https://img.shields.io/npm/dm/micromark-factory-destination.svg

[downloads]: https://www.npmjs.com/package/micromark-factory-destination

[bundle-size-badge]: https://img.shields.io/badge/dynamic/json?label=minzipped%20size&query=$.size.compressedSize&url=https://deno.bundlejs.com/?q=micromark-factory-destination

[bundle-size]: https://bundlejs.com/?q=micromark-factory-destination

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

[api-factory-destination]: #factorydestination
