# hast-util-whitespace

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**hast**][hast] utility to check if a `node` is [*inter-element
whitespace*][spec].

## Install

[npm][]:

```sh
npm install hast-util-whitespace
```

## Use

```js
var whitespace = require('hast-util-whitespace')

whitespace({
  type: 'element',
  tagName: 'div',
  children: []
}) // => false

whitespace({
  type: 'text',
  value: '\t  \n'
}) // => true

whitespace({
  type: 'text',
  value: '  text\f'
}) // => false
```

## API

### `whitespace(node|value)`

Check if the given value is [*inter-element whitespace*][spec].

###### Parameters

*   `node` ([`Node`][node], optional) — Node to check
*   `value` (`string`, optional) — Value to check

###### Returns

`boolean` — Whether the `value` is inter-element white-space: consisting of zero
or more of space, tab (`\t`), line feed (`\n`), carriage return (`\r`), or form
feed (`\f`).
If `node` is passed it must be a [*text*][text] node.

## Security

`hast-util-whitespace` does not change the syntax tree so there are no openings
for [cross-site scripting (XSS)][xss] attacks.

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

[build-badge]: https://img.shields.io/travis/syntax-tree/hast-util-whitespace.svg

[build]: https://travis-ci.org/syntax-tree/hast-util-whitespace

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/hast-util-whitespace.svg

[coverage]: https://codecov.io/github/syntax-tree/hast-util-whitespace

[downloads-badge]: https://img.shields.io/npm/dm/hast-util-whitespace.svg

[downloads]: https://www.npmjs.com/package/hast-util-whitespace

[size-badge]: https://img.shields.io/bundlephobia/minzip/hast-util-whitespace.svg

[size]: https://bundlephobia.com/result?p=hast-util-whitespace

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

[hast]: https://github.com/syntax-tree/hast

[spec]: https://html.spec.whatwg.org/#inter-element-whitespace

[node]: https://github.com/syntax-tree/hast#nodes

[text]: https://github.com/syntax-tree/hast#text

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting
