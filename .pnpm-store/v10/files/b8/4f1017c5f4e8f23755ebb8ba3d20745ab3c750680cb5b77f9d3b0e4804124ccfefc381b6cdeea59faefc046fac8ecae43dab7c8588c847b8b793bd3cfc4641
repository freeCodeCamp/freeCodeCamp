# is-alphabetical

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Check if a character is alphabetical.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`isAlphabetical(character|code)`](#isalphabeticalcharactercode)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This is a function that checks if a given character is ASCII alphabetical:
matching `[a-z]`, case insensitive.

## When should I use this?

Not often, as it’s relatively simple to do yourself.
This package exists because it’s needed in several related packages, at which
point it becomes useful to defer to one shared function.

## Install

This package is [ESM only][esm].
In Node.js (version 12.20+, 14.14+, or 16.0+), install with [npm][]:

```sh
npm install is-alphabetical
```

In Deno with [Skypack][]:

```js
import {isAlphabetical} from 'https://cdn.skypack.dev/is-alphabetical@2?dts'
```

In browsers with [Skypack][]:

```html
<script type="module">
  import {isAlphabetical} from 'https://cdn.skypack.dev/is-alphabetical@2?min'
</script>
```

## Use

```js
import {isAlphabetical} from 'is-alphabetical'

isAlphabetical('a') // => true
isAlphabetical('B') // => true
isAlphabetical('0') // => false
isAlphabetical('💩') // => false
```

## API

This package exports the following identifier: `isAlphabetical`.
There is no default export.

### `isAlphabetical(character|code)`

Check whether the given character code (`number`), or the character code at the
first position (`string`), is alphabetical.

## Types

This package is fully typed with [TypeScript][].

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 12.20+, 14.14+, and 16.0+.
It also works in Deno and modern browsers.

## Security

This package is safe.

## Related

*   [`wooorm/is-decimal`](https://github.com/wooorm/is-decimal)
*   [`wooorm/is-hexadecimal`](https://github.com/wooorm/is-hexadecimal)
*   [`wooorm/is-alphanumerical`](https://github.com/wooorm/is-alphanumerical)
*   [`wooorm/is-whitespace-character`](https://github.com/wooorm/is-whitespace-character)
*   [`wooorm/is-word-character`](https://github.com/wooorm/is-word-character)

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/wooorm/is-alphabetical/workflows/main/badge.svg

[build]: https://github.com/wooorm/is-alphabetical/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/is-alphabetical.svg

[coverage]: https://codecov.io/github/wooorm/is-alphabetical

[downloads-badge]: https://img.shields.io/npm/dm/is-alphabetical.svg

[downloads]: https://www.npmjs.com/package/is-alphabetical

[size-badge]: https://img.shields.io/bundlephobia/minzip/is-alphabetical.svg

[size]: https://bundlephobia.com/result?p=is-alphabetical

[npm]: https://docs.npmjs.com/cli/install

[skypack]: https://www.skypack.dev

[license]: license

[author]: https://wooorm.com

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/
