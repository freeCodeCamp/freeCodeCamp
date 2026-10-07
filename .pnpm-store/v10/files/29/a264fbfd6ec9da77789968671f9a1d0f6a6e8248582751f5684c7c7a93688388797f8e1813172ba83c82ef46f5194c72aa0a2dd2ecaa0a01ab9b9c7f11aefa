# unist-util-generated

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**unist**][unist] utility to check if a [node][] is [*generated*][generated].

## Install

[npm][]:

```sh
npm install unist-util-generated
```

## Use

```js
var generated = require('unist-util-generated')

generated({}) // => true

generated({position: {start: {}, end: {}}}) // => true

generated({
  position: {start: {line: 1, column: 1}, end: {line: 1, column: 2}}
}) // => false
```

## API

### `generated(node)`

Check if [`node`][node] is [*generated*][generated].

###### Parameters

*   `node` ([`Node`][node]) — Node to check.

###### Returns

`boolean` — Whether `node` is generated.

## Related

*   [`unist-util-position`](https://github.com/syntax-tree/unist-util-position)
    — Get the position of nodes
*   [`unist-util-source`](https://github.com/syntax-tree/unist-util-source)
    — Get the source of a node or position
*   [`unist-util-remove-position`](https://github.com/syntax-tree/unist-util-remove-position)
    — Remove `position`s from a tree
*   [`unist-util-stringify-position`](https://github.com/syntax-tree/unist-util-stringify-position)
    — Stringify a node, position, or point

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

[build-badge]: https://img.shields.io/travis/syntax-tree/unist-util-generated.svg

[build]: https://travis-ci.org/syntax-tree/unist-util-generated

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/unist-util-generated.svg

[coverage]: https://codecov.io/github/syntax-tree/unist-util-generated

[downloads-badge]: https://img.shields.io/npm/dm/unist-util-generated.svg

[downloads]: https://www.npmjs.com/package/unist-util-generated

[size-badge]: https://img.shields.io/bundlephobia/minzip/unist-util-generated.svg

[size]: https://bundlephobia.com/result?p=unist-util-generated

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

[unist]: https://github.com/syntax-tree/unist

[node]: https://github.com/syntax-tree/unist#node

[generated]: https://github.com/syntax-tree/unist#generated
