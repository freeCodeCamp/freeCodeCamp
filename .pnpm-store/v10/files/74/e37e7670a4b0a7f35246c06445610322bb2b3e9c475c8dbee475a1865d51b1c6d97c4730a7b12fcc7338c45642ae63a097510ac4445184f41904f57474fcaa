# character-entities-legacy

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of legacy HTML named character references that don’t need a trailing
semicolon.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`characterEntitiesLegacy`](#characterentitieslegacy)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This is a list of certain named character references, that due to legacy
reasons, don’t need a trailing semicolon in HTML.
For example, `&copy` is perfectly fine for `©`!

## When should I use this?

Maybe when you’re writing an HTML parser or minifier, but otherwise probably
never!
Even then, it might be better to use [`parse-entities`][parse-entities] or
[`stringify-entities`][stringify-entities].

## Install

This package is [ESM only][esm].
In Node.js (version 12.20+, 14.14+, or 16.0+), install with [npm][]:

```sh
npm install character-entities-legacy
```

In Deno with [Skypack][]:

```js
import {characterEntitiesLegacy} from 'https://cdn.skypack.dev/character-entities-legacy@2?dts'
```

In browsers with [Skypack][]:

```html
<script type="module">
  import {characterEntitiesLegacy} from 'https://cdn.skypack.dev/character-entities-legacy@2?min'
</script>
```

## Use

```js
import {characterEntitiesLegacy} from 'character-entities-legacy'

console.log(characterEntitiesLegacy.includes('copy')) // => true
console.log(characterEntitiesLegacy.includes('frac34')) // => true
console.log(characterEntitiesLegacy.includes('sup1')) // => true
```

## API

This package exports the following identifiers: `characterEntitiesLegacy`.
There is no default export.

### `characterEntitiesLegacy`

List of (case sensitive) legacy character entity names.
[`wooorm/character-entities`][character-entities] holds their decoded values.
See [`whatwg/html`][html] for more info.

## Types

This package is fully typed with [TypeScript][].

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 12.20+, 14.14+, and 16.0+.
It also works in Deno and modern browsers.

## Security

This package is safe.

## Related

*   [`wooorm/parse-entities`](https://github.com/wooorm/parse-entities)
    — parse (decode) character references
*   [`wooorm/stringify-entities`](https://github.com/wooorm/stringify-entities)
    — serialize (encode) character references
*   [`wooorm/character-entities`](https://github.com/wooorm/character-entities)
    — info on character entities
*   [`wooorm/character-entities-html4`](https://github.com/wooorm/character-entities-html4)
    — info on HTML4 character entities
*   [`wooorm/character-reference-invalid`](https://github.com/wooorm/character-reference-invalid)
    — info on invalid numeric character references

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/wooorm/character-entities-legacy/workflows/main/badge.svg

[build]: https://github.com/wooorm/character-entities-legacy/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/character-entities-legacy.svg

[coverage]: https://codecov.io/github/wooorm/character-entities-legacy

[downloads-badge]: https://img.shields.io/npm/dm/character-entities-legacy.svg

[downloads]: https://www.npmjs.com/package/character-entities-legacy

[size-badge]: https://img.shields.io/bundlephobia/minzip/character-entities-legacy.svg

[size]: https://bundlephobia.com/result?p=character-entities-legacy

[npm]: https://docs.npmjs.com/cli/install

[skypack]: https://www.skypack.dev

[license]: license

[author]: https://wooorm.com

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[html]: https://github.com/whatwg/html-build/blob/HEAD/entities/json-entities-legacy.inc

[parse-entities]: https://github.com/wooorm/parse-entities

[stringify-entities]: https://github.com/wooorm/stringify-entities

[character-entities]: https://github.com/wooorm/character-entities
