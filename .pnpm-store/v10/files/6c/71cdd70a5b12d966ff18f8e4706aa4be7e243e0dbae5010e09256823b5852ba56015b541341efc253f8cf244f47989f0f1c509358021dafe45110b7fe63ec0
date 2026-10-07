# parse-entities

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Parse HTML character references: fast, spec-compliant, positional
information.

## Install

[npm][]:

```sh
npm install parse-entities
```

## Use

```js
var decode = require('parse-entities')

decode('alpha &amp bravo')
// => alpha & bravo

decode('charlie &copycat; delta')
// => charlie ©cat; delta

decode('echo &copy; foxtrot &#8800; golf &#x1D306; hotel')
// => echo © foxtrot ≠ golf 𝌆 hotel
```

## API

## `parseEntities(value[, options])`

##### `options`

###### `options.additional`

Additional character to accept (`string?`, default: `''`).
This allows other characters, without error, when following an ampersand.

###### `options.attribute`

Whether to parse `value` as an attribute value (`boolean?`, default:
`false`).

###### `options.nonTerminated`

Whether to allow non-terminated entities (`boolean`, default: `true`).
For example, `&copycat` for `©cat`.  This behaviour is spec-compliant but
can lead to unexpected results.

###### `options.warning`

Error handler ([`Function?`][warning]).

###### `options.text`

Text handler ([`Function?`][text]).

###### `options.reference`

Reference handler ([`Function?`][reference]).

###### `options.warningContext`

Context used when invoking `warning` (`'*'`, optional).

###### `options.textContext`

Context used when invoking `text` (`'*'`, optional).

###### `options.referenceContext`

Context used when invoking `reference` (`'*'`, optional)

###### `options.position`

Starting `position` of `value` (`Location` or `Position`, optional).  Useful
when dealing with values nested in some sort of syntax tree.  The default is:

```js
{
  start: {line: 1, column: 1, offset: 0},
  indent: []
}
```

##### Returns

`string` — Decoded `value`.

### `function warning(reason, position, code)`

Error handler.

##### Context

`this` refers to `warningContext` when given to `parseEntities`.

##### Parameters

###### `reason`

Human-readable reason for triggering a parse error (`string`).

###### `position`

Place at which the parse error occurred (`Position`).

###### `code`

Identifier of reason for triggering a parse error (`number`).

The following codes are used:

| Code | Example            | Note                                          |
| ---- | ------------------ | --------------------------------------------- |
| `1`  | `foo &amp bar`     | Missing semicolon (named)                     |
| `2`  | `foo &#123 bar`    | Missing semicolon (numeric)                   |
| `3`  | `Foo &bar baz`     | Ampersand did not start a reference           |
| `4`  | `Foo &#`           | Empty reference                               |
| `5`  | `Foo &bar; baz`    | Unknown entity                                |
| `6`  | `Foo &#128; baz`   | [Disallowed reference][invalid]               |
| `7`  | `Foo &#xD800; baz` | Prohibited: outside permissible unicode range |

### `function text(value, location)`

Text handler.

##### Context

`this` refers to `textContext` when given to `parseEntities`.

##### Parameters

###### `value`

String of content (`string`).

###### `location`

Location at which `value` starts and ends (`Location`).

### `function reference(value, location, source)`

Character reference handler.

##### Context

`this` refers to `referenceContext` when given to `parseEntities`.

##### Parameters

###### `value`

Encoded character reference (`string`).

###### `location`

Location at which `value` starts and ends (`Location`).

###### `source`

Source of character reference (`Location`).

## Related

*   [`stringify-entities`](https://github.com/wooorm/stringify-entities)
    — Encode HTML character references
*   [`character-entities`](https://github.com/wooorm/character-entities)
    — Info on character entities
*   [`character-entities-html4`](https://github.com/wooorm/character-entities-html4)
    — Info on HTML4 character entities
*   [`character-entities-legacy`](https://github.com/wooorm/character-entities-legacy)
    — Info on legacy character entities
*   [`character-reference-invalid`](https://github.com/wooorm/character-reference-invalid)
    — Info on invalid numeric character references

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/wooorm/parse-entities.svg

[build]: https://travis-ci.org/wooorm/parse-entities

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/parse-entities.svg

[coverage]: https://codecov.io/github/wooorm/parse-entities

[downloads-badge]: https://img.shields.io/npm/dm/parse-entities.svg

[downloads]: https://www.npmjs.com/package/parse-entities

[size-badge]: https://img.shields.io/bundlephobia/minzip/parse-entities.svg

[size]: https://bundlephobia.com/result?p=parse-entities

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[warning]: #function-warningreason-position-code

[text]: #function-textvalue-location

[reference]: #function-referencevalue-location-source

[invalid]: https://github.com/wooorm/character-reference-invalid
