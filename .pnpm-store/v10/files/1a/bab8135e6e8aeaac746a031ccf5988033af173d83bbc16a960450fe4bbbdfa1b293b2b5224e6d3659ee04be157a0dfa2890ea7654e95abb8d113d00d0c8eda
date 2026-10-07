# hast-util-parse-selector

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**hast**][hast] utility to create an [*element*][element] from a simple CSS
selector.

## Install

[npm][]:

```sh
npm install hast-util-parse-selector
```

## Use

```js
var parseSelector = require('hast-util-parse-selector')

console.log(parseSelector('.quux#bar.baz.qux'))
```

Yields:

```js
{ type: 'element',
  tagName: 'div',
  properties: { id: 'bar', className: [ 'quux', 'baz', 'qux' ] },
  children: [] }
```

## API

### `parseSelector([selector][, defaultTagName])`

Create an [*element*][element] [*node*][node] from a simple CSS selector.

###### `selector`

`string`, optional — Can contain a tag-name (`foo`), classes (`.bar`),
and an ID (`#baz`).
Multiple classes are allowed.
Uses the last ID if multiple IDs are found.

###### `defaultTagName`

`string`, optional, defaults to `div` — Tag name to use if `selector` does not
specify one.

###### Returns

[`Element`][element].

## Security

Improper use of the `selector` or `defaultTagName` can open you up to a
[cross-site scripting (XSS)][xss] attack as the value of `tagName`, when
resolving to `script`, injects a `script` element into the syntax tree.

Do not use user input in `selector` or use [`hast-util-santize`][sanitize].

## Related

*   [`hast-util-from-selector`](https://github.com/syntax-tree/hast-util-from-selector)
    — parse complex CSS selectors to nodes

## Contribute

See [`contributing.md` in `syntax-tree/.github`][contributing] for ways to get
started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/syntax-tree/hast-util-parse-selector.svg

[build]: https://travis-ci.org/syntax-tree/hast-util-parse-selector

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/hast-util-parse-selector.svg

[coverage]: https://codecov.io/github/syntax-tree/hast-util-parse-selector

[downloads-badge]: https://img.shields.io/npm/dm/hast-util-parse-selector.svg

[downloads]: https://www.npmjs.com/package/hast-util-parse-selector

[size-badge]: https://img.shields.io/bundlephobia/minzip/hast-util-parse-selector.svg

[size]: https://bundlephobia.com/result?p=hast-util-parse-selector

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/syntax-tree/unist/discussions

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[contributing]: https://github.com/syntax-tree/.github/blob/HEAD/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/HEAD/support.md

[coc]: https://github.com/syntax-tree/.github/blob/HEAD/code-of-conduct.md

[hast]: https://github.com/syntax-tree/hast

[node]: https://github.com/syntax-tree/hast#nodes

[element]: https://github.com/syntax-tree/hast#element

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting

[sanitize]: https://github.com/syntax-tree/hast-util-sanitize
