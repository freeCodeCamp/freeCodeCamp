# micromark-extension-frontmatter

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

**[micromark][]** extension to support frontmatter (YAML, TOML, etc).

As there is no spec for frontmatter in markdown, this extension follows how YAML
frontmatter works on github.com.
For the HTML part, instead of rendering YAML, it is ignored.
Other types of frontmatter can be parsed, which will by default also work the
same as on github.com.

This package provides the low-level modules for integrating with the micromark
tokenizer and the micromark HTML compiler.

You probably shouldn’t use this package directly, but instead use
[`mdast-util-frontmatter`][mdast-util-frontmatter] with **[mdast][]** or
[`remark-frontmatter`][remark-frontmatter] with **[remark][]**.

## Install

[npm][]:

```sh
npm install micromark-extension-frontmatter
```

## API

### `html(options)`

### `syntax(options)`

> Note: `syntax` is the default export of this module, `html` is available at
> `micromark-extension-frontmatter/html`.

Support frontmatter (YAML, TOML, and more).

The exports are functions that can be called with options and return extensions
for the micromark parser (to tokenize frontmatter; can be passed in
`extensions`) and the default HTML compiler (to ignore frontmatter; can be
passed in `htmlExtensions`).

##### `options`

One [`preset`][preset] or [`Matter`][matter], or an array of them, defining all
the supported frontmatters (default: `'yaml'`).

##### `preset`

Either `'yaml'` or `'toml'`:

*   `'yaml'` — [`matter`][matter] defined as `{type: 'yaml', marker: '-'}`
*   `'toml'` — [`matter`][matter] defined as `{type: 'toml', marker: '+'}`

##### `Matter`

An object with a `type` and either a `marker` or a `fence`:

*   `type` (`string`)
    — Type to tokenize as
*   `marker` (`string` or `{open: string, close: string}`)
    — Character used to construct fences.
    By providing an object with `open` and `close`.
    different characters can be used for opening and closing fences.
    For example the character `'-'` will result in `'---'` being used as the
    fence
*   `fence` (`string` or `{open: string, close: string}`)
    — String used as the complete fence.
    By providing an object with `open` and `close` different values can be used
    for opening and closing fences.
    This can be used too if fences contain different characters or lengths other
    than 3
*   `anywhere` (`boolean`, default: `false`)
    – if `true`, matter can be found anywhere in the document.
    If `false` (default), only matter at the start of the document is recognized

###### Example

For `{type: 'yaml', marker: '-'}`:

```yaml
---
key: value
---
```

For `{type: 'custom', marker: {open: '<', close: '>'}}`:

```text
<<<
data
>>>
```

For `{type: 'custom', fence: '+=+=+=+'}`:

```text
+=+=+=+
data
+=+=+=+
```

For `{type: 'json', fence: {open: '{', close: '}'}}`:

```json
{
  "key": "value"
}
```

## Related

*   [`remarkjs/remark`][remark]
    — markdown processor powered by plugins
*   [`micromark/micromark`][micromark]
    — the smallest commonmark-compliant markdown parser that exists
*   [`remarkjs/remark-frontmatter`][remark-frontmatter]
    — remark plugin to support frontmatter
*   [`syntax-tree/mdast-util-frontmatter`][mdast-util-frontmatter]
    — mdast utility to support frontmatter
*   [`syntax-tree/mdast-util-from-markdown`][from-markdown]
    — mdast parser using `micromark` to create mdast from markdown
*   [`syntax-tree/mdast-util-to-markdown`][to-markdown]
    — mdast serializer to create markdown from mdast

## Contribute

See [`contributing.md` in `micromark/.github`][contributing] for ways to get
started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/micromark/micromark-extension-frontmatter.svg

[build]: https://travis-ci.org/micromark/micromark-extension-frontmatter

[coverage-badge]: https://img.shields.io/codecov/c/github/micromark/micromark-extension-frontmatter.svg

[coverage]: https://codecov.io/github/micromark/micromark-extension-frontmatter

[downloads-badge]: https://img.shields.io/npm/dm/micromark-extension-frontmatter.svg

[downloads]: https://www.npmjs.com/package/micromark-extension-frontmatter

[size-badge]: https://img.shields.io/bundlephobia/minzip/micromark-extension-frontmatter.svg

[size]: https://bundlephobia.com/result?p=micromark-extension-frontmatter

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/micromark/unist/discussions

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[contributing]: https://github.com/micromark/.github/blob/HEAD/contributing.md

[support]: https://github.com/micromark/.github/blob/HEAD/support.md

[coc]: https://github.com/micromark/.github/blob/HEAD/code-of-conduct.md

[micromark]: https://github.com/micromark/micromark

[from-markdown]: https://github.com/syntax-tree/mdast-util-from-markdown

[to-markdown]: https://github.com/syntax-tree/mdast-util-to-markdown

[remark]: https://github.com/remarkjs/remark

[mdast]: https://github.com/syntax-tree/mdast

[mdast-util-frontmatter]: https://github.com/syntax-tree/mdast-util-frontmatter

[remark-frontmatter]: https://github.com/remarkjs/remark-frontmatter

[preset]: #preset

[matter]: #matter
