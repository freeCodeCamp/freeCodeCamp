# micromark-factory-title

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][bundle-size-badge]][bundle-size]
[![Sponsors][sponsors-badge]][opencollective]
[![Backers][backers-badge]][opencollective]
[![Chat][chat-badge]][chat]

[micromark][] factory to parse markdown titles (found in resources,
definitions).

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`factoryTitle(…)`](#factorytitle)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package exposes states to parse titles.

## When should I use this?

This package is useful when you are making your own micromark extensions.

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install micromark-factory-title
```

In Deno with [`esm.sh`][esmsh]:

```js
import {factorySpace} from 'https://esm.sh/micromark-factory-title@1'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {factorySpace} from 'https://esm.sh/micromark-factory-title@1?bundle'
</script>
```

## Use

```js
import {factoryTitle} from 'micromark-factory-title'
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
  function before(code) {
    if (
      code === codes.quotationMark ||
      code === codes.apostrophe ||
      code === codes.leftParenthesis
    ) {
      return factoryTitle(
        effects,
        factorySpace(effects, after, types.whitespace),
        nok,
        types.definitionTitle,
        types.definitionTitleMarker,
        types.definitionTitleString
      )(code)
    }

    return nok(code)
  }

  // …
}
```

## API

This module exports the identifier [`factoryTitle`][api-factory-title].
There is no default export.

### `factoryTitle(…)`

Parse titles.

###### Examples

```markdown
"a"
'b'
(c)
"a
b"
'a
    b'
(a\)b)
```

###### Parameters

*   `effects` (`Effects`)
    — context
*   `ok` (`State`)
    — state switched to when successful
*   `nok` (`State`)
    — state switched to when unsuccessful
*   `type` (`string`)
    — type of the whole title (`"a"`, `'b'`, `(c)`)
*   `markerType` (`string`)
    — type for the markers (`"`, `'`, `(`, and `)`)
*   `stringType` (`string`)
    — type for the value (`a`)

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
`micromark-factory-title@^2`, compatible with Node.js 16.
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

[downloads-badge]: https://img.shields.io/npm/dm/micromark-factory-title.svg

[downloads]: https://www.npmjs.com/package/micromark-factory-title

[bundle-size-badge]: https://img.shields.io/badge/dynamic/json?label=minzipped%20size&query=$.size.compressedSize&url=https://deno.bundlejs.com/?q=micromark-factory-title

[bundle-size]: https://bundlejs.com/?q=micromark-factory-title

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

[api-factory-title]: #factorytitle
