# unist-util-stringify-position [![Build Status][build-badge]][build-page] [![Coverage Status][coverage-badge]][coverage-page]

Stringify a [**Unist**][unist] [`Position`][position] or [`Point`][point].

## Installation

[npm][]:

```bash
npm install unist-util-stringify-position
```

## Usage

```javascript
var stringify = require('unist-util-stringify-position')

// Point
stringify({line: 2, column: 3}) // => '2:3'

// Position
stringify({
  start: {line: 2},
  end: {line: 3}
}) // => '2:1-3:1'

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

Stringify one point, a position (start and end points), or
a node’s position.

###### Parameters

*   `node` ([`Node`][node])
    — Node whose `'position'` property to stringify
*   `position` ([`Position`][position])
    — Position whose `'start'` and `'end'` points to stringify
*   `point` ([`Point`][point])
    — Point whose `'line'` and `'column'` to stringify

###### Returns

`string?` — A range `ls:cs-le:ce` (when given `node` or
`position`) or a point `l:c` (when given `point`), where `l` stands
for line, `c` for column, `s` for `start`, and `e` for
end.  `null` is returned if the given value is neither `node`,
`position`, nor `point`.

## Contribute

See [`contributing.md` in `syntax-tree/unist`][contributing] for ways to get
started.

This organisation has a [Code of Conduct][coc].  By interacting with this
repository, organisation, or community you agree to abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/syntax-tree/unist-util-stringify-position.svg

[build-page]: https://travis-ci.org/syntax-tree/unist-util-stringify-position

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/unist-util-stringify-position.svg

[coverage-page]: https://codecov.io/github/syntax-tree/unist-util-stringify-position?branch=master

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[unist]: https://github.com/syntax-tree/unist

[node]: https://github.com/syntax-tree/unist#node

[position]: https://github.com/syntax-tree/unist#position

[point]: https://github.com/syntax-tree/unist#point

[contributing]: https://github.com/syntax-tree/unist/blob/master/contributing.md

[coc]: https://github.com/syntax-tree/unist/blob/master/code-of-conduct.md
