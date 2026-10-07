# character-entities

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Map of named character references.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [characterEntities](#characterentities)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This is a map of named character references in HTML (latest) to the characters
they represent.

## When should I use this?

Maybe when you’re writing an HTML parser or minifier, but otherwise probably
never!
Even then, it might be better to use [`parse-entities`][parse-entities] or
[`stringify-entities`][stringify-entities].

## Install

This package is [ESM only][esm].
In Node.js (version 12.20+, 14.14+, 16.0+, 18.0+), install with [npm][]:

```sh
npm install character-entities
```

In Deno with [`esm.sh`][esmsh]:

```js
import {characterEntities} from 'https://esm.sh/character-entities@2'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {characterEntities} from 'https://esm.sh/character-entities@2?bundle'
</script>
```

## Use

```js
import {characterEntities} from 'character-entities'

console.log(characterEntities.AElig) // => 'Æ'
console.log(characterEntities.aelig) // => 'æ'
console.log(characterEntities.amp) // => '&'
```

## API

This package exports the identifier `characterEntities`.
There is no default export.

### characterEntities

Mapping between (case-sensitive) character entity names to replacements.
See [`html.spec.whatwg.org`][html] for more info.

## Types

This package is fully typed with [TypeScript][].

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 12.20+, 14.14+, 16.0+, and 18.0+.
It also works in Deno and modern browsers.

## Security

This package is safe.

## Related

*   [`wooorm/parse-entities`](https://github.com/wooorm/parse-entities)
    — parse (decode) character references
*   [`wooorm/stringify-entities`](https://github.com/wooorm/stringify-entities)
    — serialize (encode) character references
*   [`wooorm/character-entities-html4`](https://github.com/wooorm/character-entities-html4)
    — info on named character references in HTML 4
*   [`character-reference-invalid`](https://github.com/wooorm/character-reference-invalid)
    — info on invalid numeric character references
*   [`character-entities-legacy`](https://github.com/wooorm/character-entities-legacy)
    — info on legacy named character references

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/wooorm/character-entities/workflows/main/badge.svg

[build]: https://github.com/wooorm/character-entities/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/character-entities.svg

[coverage]: https://codecov.io/github/wooorm/character-entities

[downloads-badge]: https://img.shields.io/npm/dm/character-entities.svg

[downloads]: https://www.npmjs.com/package/character-entities

[size-badge]: https://img.shields.io/bundlephobia/minzip/character-entities.svg

[size]: https://bundlephobia.com/result?p=character-entities

[npm]: https://docs.npmjs.com/cli/install

[esmsh]: https://esm.sh

[license]: license

[author]: https://wooorm.com

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[parse-entities]: https://github.com/wooorm/parse-entities

[stringify-entities]: https://github.com/wooorm/stringify-entities

[html]: https://html.spec.whatwg.org/multipage/syntax.html#named-character-references
