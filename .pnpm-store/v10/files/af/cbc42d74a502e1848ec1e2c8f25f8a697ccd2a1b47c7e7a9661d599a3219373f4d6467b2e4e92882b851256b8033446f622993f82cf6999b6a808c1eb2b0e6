# micromark-extension-gfm-strikethrough

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

**[micromark][]** extension to support GitHub flavored markdown
[strikethrough][] (~~like this~~).
This syntax extension matches either the GFM spec (only two tildes work) or
github.com (both one or two tildes, when they match, work).

This package provides the low-level modules for integrating with the micromark
tokenizer and the micromark HTML compiler.

You probably shouldn’t use this package directly, but instead use
[`mdast-util-gfm-strikethrough`][mdast-util-gfm-strikethrough] with
**[mdast][]**.

## Install

[npm][]:

```sh
npm install micromark-extension-gfm-strikethrough
```

## API

### `html`

### `syntax(options?)`

> Note: `syntax` is the default export of this module, `html` is available at
> `micromark-extension-gfm-strikethrough/html`.

Support strikethrough (~~like this~~).
The export of `syntax` is a function that can be called with options and returns
an extension for the micromark parser (to tokenize strikethrough; can be passed
in `extensions`).
The export of `html` is an extension for the default HTML compiler (to compile
as `<del>` elements; can be passed in `htmlExtensions`).

##### `options`

###### `options.singleTilde`

Whether to support strikethrough with a single tilde (`boolean`, default:
`true`).
Single tildes work on github.com, but are technically prohibited by the GFM
spec.

## Related

*   [`remarkjs/remark`][remark]
    — markdown processor powered by plugins
*   [`micromark/micromark`][micromark]
    — the smallest commonmark-compliant markdown parser that exists
*   [`syntax-tree/mdast-util-gfm-strikethrough`][mdast-util-gfm-strikethrough]
    — mdast utility to support strikethrough
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

[build-badge]: https://github.com/micromark/micromark-extension-gfm-strikethrough/workflows/main/badge.svg

[build]: https://github.com/micromark/micromark-extension-gfm-strikethrough/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/micromark/micromark-extension-gfm-strikethrough.svg

[coverage]: https://codecov.io/github/micromark/micromark-extension-gfm-strikethrough

[downloads-badge]: https://img.shields.io/npm/dm/micromark-extension-gfm-strikethrough.svg

[downloads]: https://www.npmjs.com/package/micromark-extension-gfm-strikethrough

[size-badge]: https://img.shields.io/bundlephobia/minzip/micromark-extension-gfm-strikethrough.svg

[size]: https://bundlephobia.com/result?p=micromark-extension-gfm-strikethrough

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/micromark/micromark/discussions

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

[mdast-util-gfm-strikethrough]: https://github.com/syntax-tree/mdast-util-gfm-strikethrough

[strikethrough]: https://github.github.com/gfm/#strikethrough-extension-
