# mdast-util-frontmatter

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

Extension for [`mdast-util-from-markdown`][from-markdown] and/or
[`mdast-util-to-markdown`][to-markdown] to support frontmatter in **[mdast][]**.
When parsing (`from-markdown`), must be combined with
[`micromark-extension-frontmatter`][extension].

You probably shouldn’t use this package directly, but instead use
[`remark-frontmatter`][remark-frontmatter] with **[remark][]**.

## Install

[npm][]:

```sh
npm install mdast-util-frontmatter
```

## Use

Say we have the following file, `example.md`:

```markdown
+++
title = "New Website"
+++

# Other markdown
```

And our script, `example.js`, looks as follows:

```js
var fs = require('fs')
var fromMarkdown = require('mdast-util-from-markdown')
var toMarkdown = require('mdast-util-to-markdown')
var syntax = require('micromark-extension-frontmatter')
var frontmatter = require('mdast-util-frontmatter')

var doc = fs.readFileSync('example.md')

var tree = fromMarkdown(doc, {
  extensions: [syntax(['yaml', 'toml'])],
  mdastExtensions: [frontmatter.fromMarkdown(['yaml', 'toml'])]
})

console.log(tree)

var out = toMarkdown({extensions: [frontmatter.toMarkdown(['yaml', 'toml'])]})

console.log(out)
```

Now, running `node example` yields:

```js
{
  type: 'root',
  children: [
    {type: 'toml', value: 'title = "New Website"'},
    {
      type: 'heading',
      depth: 1,
      children: [{type: 'text', value: 'Other markdown'}]
    }
  ]
}
```

```markdown
+++
title = "New Website"
+++

# Other markdown
```

## API

### `frontmatter.fromMarkdown([options])`

### `frontmatter.toMarkdown([options])`

> Note: the separate extensions are also available at
> `mdast-util-frontmatter/from-markdown` and
> `mdast-util-frontmatter/to-markdown`.

Support frontmatter (YAML, TOML, and more).
These functions can be called with options and return extensions, respectively
for [`mdast-util-from-markdown`][from-markdown] and
[`mdast-util-to-markdown`][to-markdown].

Options are the same as [`micromark-extension-frontmatter`][options].

## Related

*   [`remarkjs/remark`][remark]
    — markdown processor powered by plugins
*   [`remarkjs/remark-frontmatter`][remark-frontmatter]
    — remark plugin to support frontmatter
*   [`micromark/micromark`][micromark]
    — the smallest commonmark-compliant markdown parser that exists
*   [`micromark/micromark-extension-frontmatter`][extension]
    — micromark extension to parse frontmatter
*   [`syntax-tree/mdast-util-from-markdown`][from-markdown]
    — mdast parser using `micromark` to create mdast from markdown
*   [`syntax-tree/mdast-util-to-markdown`][to-markdown]
    — mdast serializer to create markdown from mdast

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

[build-badge]: https://img.shields.io/travis/syntax-tree/mdast-util-frontmatter.svg

[build]: https://travis-ci.org/syntax-tree/mdast-util-frontmatter

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/mdast-util-frontmatter.svg

[coverage]: https://codecov.io/github/syntax-tree/mdast-util-frontmatter

[downloads-badge]: https://img.shields.io/npm/dm/mdast-util-frontmatter.svg

[downloads]: https://www.npmjs.com/package/mdast-util-frontmatter

[size-badge]: https://img.shields.io/bundlephobia/minzip/mdast-util-frontmatter.svg

[size]: https://bundlephobia.com/result?p=mdast-util-frontmatter

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

[mdast]: https://github.com/syntax-tree/mdast

[remark]: https://github.com/remarkjs/remark

[remark-frontmatter]: https://github.com/remarkjs/remark-frontmatter

[from-markdown]: https://github.com/syntax-tree/mdast-util-from-markdown

[to-markdown]: https://github.com/syntax-tree/mdast-util-to-markdown

[micromark]: https://github.com/micromark/micromark

[extension]: https://github.com/micromark/micromark-extension-frontmatter

[options]: https://github.com/micromark/micromark-extension-frontmatter#options
