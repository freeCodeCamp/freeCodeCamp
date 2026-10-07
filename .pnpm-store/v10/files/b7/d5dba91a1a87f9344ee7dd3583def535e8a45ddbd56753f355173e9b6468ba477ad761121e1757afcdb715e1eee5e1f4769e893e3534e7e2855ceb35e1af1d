# character-reference-invalid

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Map of invalid numeric character references to their replacements, according to
HTML.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`characterReferenceInvalid`](#characterreferenceinvalid)
*   [Source](#source)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This is a map from the [HTML spec][source] of C1 ASCII/Unicode control
characters (which are disallowed by HTML) to the characters those code points
would have in Windows 1252.
For example, U+0080 (Padding Character) maps to `€`, because that’s used for
0x80 in Windows 1252.

## When should I use this?

Probably never, unless you’re dealing with parsing HTML or similar XML-like
things, or in a place where Unicode is not the primary encoding (it is in most
places).

## Install

This package is [ESM only][esm].
In Node.js (version 12.20+, 14.14+, or 16.0+), install with [npm][]:

```sh
npm install character-reference-invalid
```

In Deno with [Skypack][]:

```js
import {characterReferenceInvalid} from 'https://cdn.skypack.dev/character-reference-invalid@2?dts'
```

In browsers with [Skypack][]:

```html
<script type="module">
  import {characterReferenceInvalid} from 'https://cdn.skypack.dev/character-reference-invalid@2?min'
</script>
```

## Use

```js
import {characterReferenceInvalid} from 'character-reference-invalid'

console.log(characterReferenceInvalid[0x80]) // => '€'
console.log(characterReferenceInvalid[0x89]) // => '‰'
console.log(characterReferenceInvalid[0x99]) // => '™'
```

## API

This package exports the following identifiers: `characterReferenceInvalid`.
There is no default export.

### `characterReferenceInvalid`

`Record<number, string>` — mapping between invalid numeric character reference
codes to replacements characters.

## Source

See [`html.spec.whatwg.org`][source].

## Types

This package is fully typed with [TypeScript][].

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 12.20+, 14.14+, and 16.0+.
It also works in Deno and modern browsers.

## Security

This package is safe.

## Related

*   [`wooorm/character-entities`](https://github.com/wooorm/character-entities)
    — HTML character entity info
*   [`wooorm/character-entities-html4`](https://github.com/wooorm/character-entities-html4)
    — HTML 4 character entity info
*   [`wooorm/character-entities-legacy`](https://github.com/wooorm/character-entities-legacy)
    — legacy character entity info
*   [`wooorm/parse-entities`](https://github.com/wooorm/parse-entities)
    — parse HTML character references
*   [`wooorm/stringify-entities`](https://github.com/wooorm/stringify-entities)
    — serialize HTML character references

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/wooorm/character-reference-invalid/workflows/main/badge.svg

[build]: https://github.com/wooorm/character-reference-invalid/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/character-reference-invalid.svg

[coverage]: https://codecov.io/github/wooorm/character-reference-invalid

[downloads-badge]: https://img.shields.io/npm/dm/character-reference-invalid.svg

[downloads]: https://www.npmjs.com/package/character-reference-invalid

[size-badge]: https://img.shields.io/bundlephobia/minzip/character-reference-invalid.svg

[size]: https://bundlephobia.com/result?p=character-reference-invalid

[npm]: https://docs.npmjs.com/cli/install

[skypack]: https://www.skypack.dev

[license]: license

[author]: https://wooorm.com

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[source]: https://html.spec.whatwg.org/multipage/parsing.html#table-charref-overrides
