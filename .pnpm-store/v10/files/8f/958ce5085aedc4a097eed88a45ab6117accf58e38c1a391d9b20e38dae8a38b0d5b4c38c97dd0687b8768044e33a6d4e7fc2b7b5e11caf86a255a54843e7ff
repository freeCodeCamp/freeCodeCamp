# hast-util-to-parse5

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**hast**][hast] utility to transform to [Parse5’s AST][ast].

> **Q**: Why not use a Parse5 adapter?
> **A**: Because it’s more code weight to use adapters, and much more fragile.

## Install

[npm][]:

```sh
npm install hast-util-to-parse5
```

## Use

```js
var toParse5 = require('hast-util-to-parse5')

var ast = toParse5({
  type: 'element',
  tagName: 'h1',
  properties: {},
  children: [{type: 'text', value: 'World!'}]
})

console.log(ast)
```

Yields:

```js
{ nodeName: 'h1',
  tagName: 'h1',
  attrs: [],
  namespaceURI: 'http://www.w3.org/1999/xhtml',
  childNodes: [ { nodeName: '#text', value: 'World!', parentNode: [Circular] } ] }
```

## API

### `toParse5(tree[, space])`

Transform a [**hast**][hast] [*tree*][tree] to [Parse5’s AST][ast].

###### `space`

Whether the root of the given [*tree*][tree] is in the `'html'` or `'svg'` space
(enum, `'svg'` or `'html'`, default: `'html'`).

If an `svg` element is found in the HTML space, `toParse5` automatically
switches to the SVG space when entering the element, and switches back when
exiting.

## Security

Use of `hast-util-to-parse5` can open you up to a
[cross-site scripting (XSS)][xss] attack if the hast tree is unsafe.

## Related

*   [`hast-util-from-parse5`](https://github.com/syntax-tree/hast-util-from-parse5)
    — transform from Parse5’s AST to hast
*   [`hast-util-to-nlcst`](https://github.com/syntax-tree/hast-util-to-nlcst)
    — transform hast to nlcst
*   [`hast-util-to-mdast`](https://github.com/syntax-tree/hast-util-to-mdast)
    — transform hast to mdast
*   [`hast-util-to-xast`](https://github.com/syntax-tree/hast-util-to-xast)
    — transform hast to xast
*   [`mdast-util-to-hast`](https://github.com/syntax-tree/mdast-util-to-hast)
    — transform mdast to hast
*   [`mdast-util-to-nlcst`](https://github.com/syntax-tree/mdast-util-to-nlcst)
    — transform mdast to nlcst

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

[build-badge]: https://img.shields.io/travis/syntax-tree/hast-util-to-parse5.svg

[build]: https://travis-ci.org/syntax-tree/hast-util-to-parse5

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/hast-util-to-parse5.svg

[coverage]: https://codecov.io/github/syntax-tree/hast-util-to-parse5

[downloads-badge]: https://img.shields.io/npm/dm/hast-util-to-parse5.svg

[downloads]: https://www.npmjs.com/package/hast-util-to-parse5

[size-badge]: https://img.shields.io/bundlephobia/minzip/hast-util-to-parse5.svg

[size]: https://bundlephobia.com/result?p=hast-util-to-parse5

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/syntax-tree

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[contributing]: https://github.com/syntax-tree/.github/blob/HEAD/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/HEAD/support.md

[coc]: https://github.com/syntax-tree/.github/blob/HEAD/code-of-conduct.md

[ast]: https://github.com/inikulin/parse5/wiki/Documentation

[tree]: https://github.com/syntax-tree/unist#tree

[hast]: https://github.com/syntax-tree/hast

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting
