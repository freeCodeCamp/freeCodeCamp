# unist-util-stringify-position

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[unist][] utility to pretty print the positional info of a node.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`stringifyPosition(node|position|point)`](#stringifypositionnodepositionpoint)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package is a utility that takes any [unist][] (whether mdast, hast, etc)
node, position, or point, and serializes its positional info.

## When should I use this?

This utility is useful to display where something occurred in the original
document, in one standard way, for humans.
For example, when throwing errors or warning messages about something.

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install unist-util-stringify-position
```

In Deno with [`esm.sh`][esmsh]:

```js
import {stringifyPosition} from 'https://esm.sh/unist-util-stringify-position@4'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {stringifyPosition} from 'https://esm.sh/unist-util-stringify-position@4?bundle'
</script>
```

## Use

```js
import {stringifyPosition} from 'unist-util-stringify-position'

stringifyPosition({line: 2, column: 3}) // => '2:3' (point)
stringifyPosition({start: {line: 2}, end: {line: 3}}) // => '2:1-3:1' (position)
stringifyPosition({
  type: 'text',
  value: '!',
  position: {
    start: {line: 5, column: 11},
    end: {line: 5, column: 12}
  }
}) // => '5:11-5:12' (node)
```

## API

This package exports the identifier [`stringifyPosition`][stringifyposition].
There is no default export.

### `stringifyPosition(node|position|point)`

Serialize the positional info of a point, position (start and end points), or
node.

###### Parameters

*   `node` ([`Node`][node])
    — node whose `position` fields to serialize
*   `position` ([`Position`][position])
    — position whose `start` and `end` points to serialize
*   `point` ([`Point`][point])
    — point whose `line` and `column` fields to serialize

###### Returns

Pretty printed positional info of a node (`string`).

In the format of a range `ls:cs-le:ce` (when given `node` or `position`) or a
point `l:c` (when given `point`), where `l` stands for line, `c` for column, `s`
for `start`, and `e` for end.
An empty string (`''`) is returned if the given value is neither `node`,
`position`, nor `point`.

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

Projects maintained by the unified collective are compatible with maintained
versions of Node.js.

When we cut a new major release, we drop support for unmaintained versions of
Node.
This means we try to keep the current release line,
`unist-util-stringify-position@^4`, compatible with Node.js 16.

## Security

This project is safe.

## Related

*   [`unist-util-generated`](https://github.com/syntax-tree/unist-util-generated)
    — check if a node is generated
*   [`unist-util-position`](https://github.com/syntax-tree/unist-util-position)
    — get positional info of nodes
*   [`unist-util-remove-position`](https://github.com/syntax-tree/unist-util-remove-position)
    — remove positional info from trees
*   [`unist-util-source`](https://github.com/syntax-tree/unist-util-source)
    — get the source of a value (node or position) in a file

## Contribute

See [`contributing.md` in `syntax-tree/.github`][contributing] for ways to get
started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://github.com/syntax-tree/unist-util-stringify-position/workflows/main/badge.svg

[build]: https://github.com/syntax-tree/unist-util-stringify-position/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/unist-util-stringify-position.svg

[coverage]: https://codecov.io/github/syntax-tree/unist-util-stringify-position

[downloads-badge]: https://img.shields.io/npm/dm/unist-util-stringify-position.svg

[downloads]: https://www.npmjs.com/package/unist-util-stringify-position

[size-badge]: https://img.shields.io/badge/dynamic/json?label=minzipped%20size&query=$.size.compressedSize&url=https://deno.bundlejs.com/?q=unist-util-stringify-position

[size]: https://bundlejs.com/?q=unist-util-stringify-position

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/syntax-tree/unist/discussions

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[contributing]: https://github.com/syntax-tree/.github/blob/main/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/main/support.md

[coc]: https://github.com/syntax-tree/.github/blob/main/code-of-conduct.md

[unist]: https://github.com/syntax-tree/unist

[node]: https://github.com/syntax-tree/unist#node

[position]: https://github.com/syntax-tree/unist#position

[point]: https://github.com/syntax-tree/unist#point

[stringifyposition]: #stringifypositionnodepositionpoint
