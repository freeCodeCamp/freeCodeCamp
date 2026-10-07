# mdast-util-toc

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**mdast**][mdast] utility to generate table of contents.

## Install

[npm][]:

```sh
npm install mdast-util-toc
```

## Use

Dependencies:

```javascript
var u = require('unist-builder')
var toc = require('mdast-util-toc')
```

Given a mdast tree:

```javascript
var tree = u('root', [
  u('heading', {depth: 1}, [u('text', 'Alpha')]),
  u('heading', {depth: 2}, [u('text', 'Bravo')]),
  u('heading', {depth: 3}, [u('text', 'Charlie')]),
  u('heading', {depth: 2}, [u('text', 'Delta')])
])

var table = toc(tree)
```

Yields:

```javascript
{
  index: null,
  endIndex: null,
  map: {
    type: 'list',
    ordered: false,
    spread: true,
    children: [ { type: 'listItem', spread: true, children: [Array] } ]
  }
}
```

## API

### `toc(tree[, options])`

Generate a Table of Contents from a [tree][].

Looks for the first [heading][] matching `options.heading` (case insensitive,
supports alt/title attributes for links and images too), and returns a table
of contents ([list][]) for all following headings.
If no `heading` is specified, creates a table of contents for all headings in
`tree`.
`tree` is not changed.

Links to headings are based on GitHub’s style.
Only top-level headings (those not in [blockquote][]s or [list][]s), are used.
This default behavior can be changed by passing [`parents`][parents].

##### `options`

###### `options.heading`

[Heading][] to look for (`string`), wrapped in `new RegExp('^(' + value + ')$',
'i')`.

###### `options.maxDepth`

Maximum heading depth to include in the table of contents (`number`, default:
`6`),
This is inclusive: when set to `3`, level three headings are included (those
with three hashes, `###`).

###### `options.skip`

Headings to skip (`string`, optional), wrapped in
`new RegExp('^(' + value + ')$', 'i')`.
Any heading matching this expression will not be present in the table of
contents.

###### `options.tight`

Whether to compile list-items tightly (`boolean?`, default: `false`).

###### `options.ordered`

Whether to compile list-items as an ordered list (`boolean?`, default: `false`).

###### `options.prefix`

Add a prefix to links to headings in the table of contents (`string?`,
default: `null`).
Useful for example when later going from [mdast][] to [hast][] and sanitizing
with [`hast-util-sanitize`][sanitize].

###### `options.parents`

Allows headings to be children of certain node [type][]s (default: the to `toc`
given `tree`, to only allow top-level headings).
Internally, uses [unist-util-is][is] to check, so `parents` can be any
[`is`-compatible][is] test.

For example, this would allow headings under either `root` or `blockquote` to be
used:

```js
toc(tree, {parents: ['root', 'blockquote']})
```

##### Returns

An object representing the table of contents.

###### Properties

*   `index` (`number?`)
    — [Index][] of the node right after the  table of contents [heading][].
    `-1` if no heading was found, `null` if no `heading` was given
*   `endIndex` (`number?`)
    — [Index][] of the first node after `heading` that is not part of its
    section.
    `-1` if no heading was found, `null` if no `heading` was given,
    same as `index` if there are no nodes between `heading` and the
    first heading in the TOC
*   `map` (`Node?`)
    — [List][] representing the generated table of contents.
    `null` if no table of contents could be created, either because
    no heading was found or because no following headings were found

## Security

Use of `mdast-util-toc` does not involve [**hast**][hast], user content, or
change the tree, so there are no openings for [cross-site scripting (XSS)][xss]
attacks.

Injecting `map` into the syntax tree may open you up to XSS attacks as existing
nodes are copied into the table of contents.
The following example shows how an existing script is copied into the table of
contents.

For the following Markdown:

```markdown
# Alpha

## Bravo<script>alert(1)</script>

## Charlie
```

Yields in `map`:

```markdown
-   [Alpha](#alpha)

    -   [Bravo<script>alert(1)</script>](#bravoscriptalert1script)
    -   [Charlie](#charlie)
```

Always use [`hast-util-santize`][sanitize] when transforming to
[**hast**][hast].

## Related

*   [`github-slugger`](https://github.com/Flet/github-slugger)
    — Generate a slug just like GitHub does
*   [`unist-util-visit`](https://github.com/syntax-tree/unist-util-visit)
    — visit nodes
*   [`unist-util-visit-parents`](https://github.com/syntax-tree/unist-util-visit-parents)
    — like `visit`, but with a stack of parents

## Contribute

See [`contributing.md` in `syntax-tree/.github`][contributing] for ways to get
started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Jonathan Haines][author]

<!-- Definitions -->

[build-badge]: https://github.com/syntax-tree/mdast-util-toc/workflows/main/badge.svg

[build]: https://github.com/syntax-tree/mdast-util-toc/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/mdast-util-toc.svg

[coverage]: https://codecov.io/github/syntax-tree/mdast-util-toc

[downloads-badge]: https://img.shields.io/npm/dm/mdast-util-toc.svg

[downloads]: https://www.npmjs.com/package/mdast-util-toc

[size-badge]: https://img.shields.io/bundlephobia/minzip/mdast-util-toc.svg

[size]: https://bundlephobia.com/result?p=mdast-util-toc

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/syntax-tree/unist/discussions

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://barrythepenguin.github.io

[contributing]: https://github.com/syntax-tree/.github/blob/HEAD/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/HEAD/support.md

[coc]: https://github.com/syntax-tree/.github/blob/HEAD/code-of-conduct.md

[mdast]: https://github.com/syntax-tree/mdast

[hast]: https://github.com/syntax-tree/hast

[sanitize]: https://github.com/syntax-tree/hast-util-sanitize

[is]: https://github.com/syntax-tree/unist-util-is

[tree]: https://github.com/syntax-tree/unist#tree

[type]: https://github.com/syntax-tree/unist#type

[index]: https://github.com/syntax-tree/unist#index

[heading]: https://github.com/syntax-tree/mdast#heading

[list]: https://github.com/syntax-tree/mdast#list

[blockquote]: https://github.com/syntax-tree/mdast#blockquote

[parents]: #optionsparents

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting
