# mdast-util-find-and-replace

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**mdast**][mdast] utility to find and replace text in a [*tree*][tree].

## Install

[npm][]:

```sh
npm install mdast-util-find-and-replace
```

## Use

```js
var u = require('unist-builder')
var inspect = require('unist-util-inspect')
var findAndReplace = require('mdast-util-find-and-replace')

var tree = u('paragraph', [
  u('text', 'Some '),
  u('emphasis', [u('text', 'emphasis')]),
  u('text', ' and '),
  u('strong', [u('text', 'importance')]),
  u('text', '.')
])

findAndReplace(tree, 'and', 'or')

findAndReplace(tree, {emphasis: 'em', importance: 'strong'})

findAndReplace(tree, {
  Some: function ($0) {
    return u('link', {url: '//example.com#' + $0}, [u('text', $0)])
  }
})

console.log(inspect(tree))
```

Yields:

```txt
paragraph[8]
├─ link[1] [url="//example.com#Some"]
│  └─ text: "Some"
├─ text: " "
├─ emphasis[1]
│  └─ text: "em"
├─ text: " "
├─ text: "or"
├─ text: " "
├─ strong[1]
│  └─ text: "strong"
└─ text: "."
```

## API

### `findAndReplace(tree, find[, replace][, options])`

Find and replace text in [**mdast**][mdast] [*tree*][tree]s.
The algorithm searches the tree in [*preorder*][preorder] for complete values
in [`Text`][text] nodes.
Partial matches are not supported.

###### Signatures

*   `findAndReplace(tree, find, replace?[, options])`
*   `findAndReplace(tree, search[, options])`

###### Parameters

*   `tree` ([`Node`][node])
    — [**mdast**][mdast] [*tree*][tree]
*   `find` (`string` or `RegExp`)
    — Value to find and remove.
    When `string`, escaped and made into a global `RegExp`
*   `replace` (`string` or `Function`)
    — Value to insert.
    When `string`, turned into a [`Text`][text] node.
    When `Function`, invoked with the results of calling `RegExp.exec` as
    arguments, in which case it can return a single or a list of [`Node`][node],
    a `string` (which is wrapped in a [`Text`][text] node), or `false` to not
    replace
*   `search` (`Object` or `Array`)
    — Perform multiple find-and-replaces.
    When `Array`, each entry is a tuple (`Array`) of a `find` (at `0`) and
    `replace` (at `1`).
    When `Object`, each key is a `find` (in string form) and each value is a
    `replace`
*   `options.ignore` (`Test`, default: `[]`)
    — Any [`unist-util-is`][test] compatible test.

###### Returns

The given, modified, `tree`.

## Security

Use of `mdast-util-find-and-replace` does not involve [**hast**][hast] or user
content so there are no openings for [cross-site scripting (XSS)][xss] attacks.

## Related

*   [`hast-util-find-and-replace`](https://github.com/syntax-tree/hast-util-find-and-replace)
    — hast utility to find and replace text
*   [`unist-util-select`](https://github.com/syntax-tree/unist-util-select)
    — select unist nodes with CSS-like selectors

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

[build-badge]: https://github.com/syntax-tree/mdast-util-find-and-replace/workflows/main/badge.svg

[build]: https://github.com/syntax-tree/mdast-util-find-and-replace/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/mdast-util-find-and-replace.svg

[coverage]: https://codecov.io/github/syntax-tree/mdast-util-find-and-replace

[downloads-badge]: https://img.shields.io/npm/dm/mdast-util-find-and-replace.svg

[downloads]: https://www.npmjs.com/package/mdast-util-find-and-replace

[size-badge]: https://img.shields.io/bundlephobia/minzip/mdast-util-find-and-replace.svg

[size]: https://bundlephobia.com/result?p=mdast-util-find-and-replace

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

[mdast]: https://github.com/syntax-tree/mdast

[node]: https://github.com/syntax-tree/mdast#ndoes

[tree]: https://github.com/syntax-tree/unist#tree

[preorder]: https://github.com/syntax-tree/unist#preorder

[text]: https://github.com/syntax-tree/mdast#text

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting

[test]: https://github.com/syntax-tree/unist-util-is#api
