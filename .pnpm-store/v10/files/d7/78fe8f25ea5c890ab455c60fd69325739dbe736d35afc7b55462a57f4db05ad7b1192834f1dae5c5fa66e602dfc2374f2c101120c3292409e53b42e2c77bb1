# parse-entities

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Parse HTML character references.

## Contents

* [What is this?](#what-is-this)
* [When should I use this?](#when-should-i-use-this)
* [Install](#install)
* [Use](#use)
* [API](#api)
  * [`parseEntities(value[, options])`](#parseentitiesvalue-options)
* [Types](#types)
* [Compatibility](#compatibility)
* [Security](#security)
* [Related](#related)
* [Contribute](#contribute)
* [License](#license)

## What is this?

This is a small and powerful decoder of HTML character references (often called
entities).

## When should I use this?

You can use this for spec-compliant decoding of character references.
It’s small and fast enough to do that well.
You can also use this when making a linter, because there are different warnings
emitted with reasons for why and positional info on where they happened.

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+, 16.0+), install with [npm][]:

```sh
npm install parse-entities
```

In Deno with [`esm.sh`][esmsh]:

```js
import {parseEntities} from 'https://esm.sh/parse-entities@3'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {parseEntities} from 'https://esm.sh/parse-entities@3?bundle'
</script>
```

## Use

```js
import {parseEntities} from 'parse-entities'

console.log(parseEntities('alpha &amp bravo')))
// => alpha & bravo

console.log(parseEntities('charlie &copycat; delta'))
// => charlie ©cat; delta

console.log(parseEntities('echo &copy; foxtrot &#8800; golf &#x1D306; hotel'))
// => echo © foxtrot ≠ golf 𝌆 hotel
```

## API

This package exports the identifier `parseEntities`.
There is no default export.

### `parseEntities(value[, options])`

Parse HTML character references.

##### `options`

Configuration (optional).

###### `options.additional`

Additional character to accept (`string?`, default: `''`).
This allows other characters, without error, when following an ampersand.

###### `options.attribute`

Whether to parse `value` as an attribute value (`boolean?`, default: `false`).
This results in slightly different behavior.

###### `options.nonTerminated`

Whether to allow nonterminated references (`boolean`, default: `true`).
For example, `&copycat` for `©cat`.
This behavior is compliant to the spec but can lead to unexpected results.

###### `options.position`

Starting `position` of `value` (`Position` or `Point`, optional).
Useful when dealing with values nested in some sort of syntax tree.
The default is:

```js
{line: 1, column: 1, offset: 0}
```

###### `options.warning`

Error handler ([`Function?`][warning]).

###### `options.text`

Text handler ([`Function?`][text]).

###### `options.reference`

Reference handler ([`Function?`][reference]).

###### `options.warningContext`

Context used when calling `warning` (`'*'`, optional).

###### `options.textContext`

Context used when calling `text` (`'*'`, optional).

###### `options.referenceContext`

Context used when calling `reference` (`'*'`, optional)

##### Returns

`string` — decoded `value`.

#### `function warning(reason, point, code)`

Error handler.

###### Parameters

* `this` (`*`) — refers to `warningContext` when given to `parseEntities`
* `reason` (`string`) — human readable reason for emitting a parse error
* `point` ([`Point`][point]) — place where the error occurred
* `code` (`number`) — machine readable code the error

The following codes are used:

| Code | Example            | Note                                          |
| ---- | ------------------ | --------------------------------------------- |
| `1`  | `foo &amp bar`     | Missing semicolon (named)                     |
| `2`  | `foo &#123 bar`    | Missing semicolon (numeric)                   |
| `3`  | `Foo &bar baz`     | Empty (named)                                 |
| `4`  | `Foo &#`           | Empty (numeric)                               |
| `5`  | `Foo &bar; baz`    | Unknown (named)                               |
| `6`  | `Foo &#128; baz`   | [Disallowed reference][invalid]               |
| `7`  | `Foo &#xD800; baz` | Prohibited: outside permissible unicode range |

#### `function text(value, position)`

Text handler.

###### Parameters

* `this` (`*`) — refers to `textContext` when given to `parseEntities`
* `value` (`string`) — string of content
* `position` ([`Position`][position]) — place where `value` starts and ends

#### `function reference(value, position, source)`

Character reference handler.

###### Parameters

* `this` (`*`) — refers to `referenceContext` when given to `parseEntities`
* `value` (`string`) — decoded character reference
* `position` ([`Position`][position]) — place where `source` starts and ends
* `source` (`string`) — raw source of character reference

## Types

This package is fully typed with [TypeScript][].
It exports the additional types `Options`, `WarningHandler`,
`ReferenceHandler`, and `TextHandler`.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
It also works in Deno and modern browsers.

## Security

This package is safe: it matches the HTML spec to parse character references.

## Related

* [`wooorm/stringify-entities`](https://github.com/wooorm/stringify-entities)
  — encode HTML character references
* [`wooorm/character-entities`](https://github.com/wooorm/character-entities)
  — info on character references
* [`wooorm/character-entities-html4`](https://github.com/wooorm/character-entities-html4)
  — info on HTML4 character references
* [`wooorm/character-entities-legacy`](https://github.com/wooorm/character-entities-legacy)
  — info on legacy character references
* [`wooorm/character-reference-invalid`](https://github.com/wooorm/character-reference-invalid)
  — info on invalid numeric character references

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/wooorm/parse-entities/workflows/main/badge.svg

[build]: https://github.com/wooorm/parse-entities/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/parse-entities.svg

[coverage]: https://codecov.io/github/wooorm/parse-entities

[downloads-badge]: https://img.shields.io/npm/dm/parse-entities.svg

[downloads]: https://www.npmjs.com/package/parse-entities

[size-badge]: https://img.shields.io/bundlephobia/minzip/parse-entities.svg

[size]: https://bundlephobia.com/result?p=parse-entities

[npm]: https://docs.npmjs.com/cli/install

[esmsh]: https://esm.sh

[license]: license

[author]: https://wooorm.com

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[warning]: #function-warningreason-point-code

[text]: #function-textvalue-position

[reference]: #function-referencevalue-position-source

[invalid]: https://github.com/wooorm/character-reference-invalid

[point]: https://github.com/syntax-tree/unist#point

[position]: https://github.com/syntax-tree/unist#position

[contribute]: https://opensource.guide/how-to-contribute/
