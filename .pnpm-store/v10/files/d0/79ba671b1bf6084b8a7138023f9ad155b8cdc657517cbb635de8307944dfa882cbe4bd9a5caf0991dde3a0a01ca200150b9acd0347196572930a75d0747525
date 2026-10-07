# unist-util-stringify-position

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**unist**][unist] utility to pretty print the positional information of a node.

## Install

[npm][]:

```sh
npm install unist-util-stringify-position
```

## Use

```js
var stringify = require('unist-util-stringify-position')

// Point
stringify({line: 2, column: 3}) // => '2:3'

// Position
stringify({start: {line: 2}, end: {line: 3}}) // => '2:1-3:1'

// Node
stringify({
  type: 'text',
  value: '!',
  position: {
    start: {line: 5, column: 11},
    end: {line: 5, column: 12}
  }
}) // => '5:11-5:12'
```

## API

### `stringifyPosition(node|position|point)`

Stringify one [point][], a [position][] (start and end [point][]s), or a node’s
[positional information][positional-information].

###### Parameters

*   `node` ([`Node`][node])
    — Node whose `'position'` property to stringify
*   `position` ([`Position`][position])
    — Position whose `'start'` and `'end'` points to stringify
*   `point` ([`Point`][point])
    — Point whose `'line'` and `'column'` to stringify

###### Returns

`string?` — A range `ls:cs-le:ce` (when given `node` or `position`) or a point
`l:c` (when given `point`), where `l` stands for line, `c` for column, `s` for
`start`, and `e` for end.
An empty string (`''`) is returned if the given value is neither `node`,
`position`, nor `point`.

## Related

*   [`unist-util-generated`](https://github.com/syntax-tree/unist-util-generated)
    — Check if a node is generated
*   [`unist-util-position`](https://github.com/syntax-tree/unist-util-position)
    — Get positional info of nodes
*   [`unist-util-remove-position`](https://github.com/syntax-tree/unist-util-remove-position)
    — Remove positional info from trees
*   [`unist-util-source`](https://github.com/syntax-tree/unist-util-source)
    — Get the source of a value (node or position) in a file

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

[build-badge]: https://img.shields.io/travis/syntax-tree/unist-util-stringify-position.svg

[build]: https://travis-ci.org/syntax-tree/unist-util-stringify-position

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/unist-util-stringify-position.svg

[coverage]: https://codecov.io/github/syntax-tree/unist-util-stringify-position

[downloads-badge]: https://img.shields.io/npm/dm/unist-util-stringify-position.svg

[downloads]: https://www.npmjs.com/package/unist-util-stringify-position

[size-badge]: https://img.shields.io/bundlephobia/minzip/unist-util-stringify-position.svg

[size]: https://bundlephobia.com/result?p=unist-util-stringify-position

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/syntax-tree

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[contributing]: https://github.com/syntax-tree/.github/blob/master/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/master/support.md

[coc]: https://github.com/syntax-tree/.github/blob/master/code-of-conduct.md

[unist]: https://github.com/syntax-tree/unist

[node]: https://github.com/syntax-tree/unist#node

[position]: https://github.com/syntax-tree/unist#position

[point]: https://github.com/syntax-tree/unist#point

[positional-information]: https://github.com/syntax-tree/unist#positional-information
