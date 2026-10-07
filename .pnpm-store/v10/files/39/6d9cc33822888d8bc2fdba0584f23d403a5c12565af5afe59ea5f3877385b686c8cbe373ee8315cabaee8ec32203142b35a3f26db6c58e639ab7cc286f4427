# is-decimal

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Check if a character is a decimal.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`isDecimal(character|code)`](#isdecimalcharactercode)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This is a function that checks if a given character is an ASCII decimal.

## When should I use this?

Not often, as it’s relatively simple to do yourself.
This package exists because it’s needed in several related packages, at which
point it becomes useful to defer to one shared function.

## Install

This package is [ESM only][esm].
In Node.js (version 12.20+, 14.14+, or 16.0+), install with [npm][]:

```sh
npm install is-decimal
```

In Deno with [Skypack][]:

```js
import {isDecimal} from 'https://cdn.skypack.dev/is-decimal@2?dts'
```

In browsers with [Skypack][]:

```html
<script type="module">
  import {isDecimal} from 'https://cdn.skypack.dev/is-decimal@2?min'
</script>
```

## Use

```js
import {isDecimal} from 'is-decimal'

isDecimal('0') // => true
isDecimal('9') // => true
isDecimal('a') // => false
isDecimal('💩') // => false
```

## API

This package exports the following identifiers: `isDecimal`.
There is no default export.

### `isDecimal(character|code)`

Check whether the given character code (`number`), or the character code at the
first position (`string`), is decimal.

## Types

This package is fully typed with [TypeScript][].

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 12.20+, 14.14+, and 16.0+.
It also works in Deno and modern browsers.

## Security

This package is safe.

## Related

*   [`wooorm/is-alphabetical`](https://github.com/wooorm/is-alphabetical)
*   [`wooorm/is-hexadecimal`](https://github.com/wooorm/is-hexadecimal)
*   [`wooorm/is-whitespace-character`](https://github.com/wooorm/is-whitespace-character)
*   [`wooorm/is-word-character`](https://github.com/wooorm/is-word-character)

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/wooorm/is-decimal/workflows/main/badge.svg

[build]: https://github.com/wooorm/is-decimal/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/is-decimal.svg

[coverage]: https://codecov.io/github/wooorm/is-decimal

[downloads-badge]: https://img.shields.io/npm/dm/is-decimal.svg

[downloads]: https://www.npmjs.com/package/is-decimal

[size-badge]: https://img.shields.io/bundlephobia/minzip/is-decimal.svg

[size]: https://bundlephobia.com/result?p=is-decimal

[npm]: https://docs.npmjs.com/cli/install

[skypack]: https://www.skypack.dev

[license]: license

[author]: https://wooorm.com

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/
