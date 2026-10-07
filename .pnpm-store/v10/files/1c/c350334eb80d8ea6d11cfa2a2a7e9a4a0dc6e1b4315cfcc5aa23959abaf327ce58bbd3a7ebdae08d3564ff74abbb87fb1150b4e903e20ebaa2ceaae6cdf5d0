# micromark-extension-gfm-autolink-literal

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

**[micromark][]** extension to support GitHub flavored markdown [literal
autolinks][].

This syntax extension matches the GFM spec and how literal autolinks work
in several places on github.com.
Do note that GH employs two algorithms to autolink: one at parse time,
one at compile time (similar to how @mentions are done at compile time).
This difference can be observed because character references and escapes
are handled differently.
But also because issues/PRs/comments omit (perhaps by accident?) the second
algorithm for `www.`, `http://`, and `https://` links (but not for email links).

As this is a syntax extension, it focuses on the first algorithm.
The `html` part of this extension does not operate on an AST and hence can’t
perform the second algorithm.
`mdast-util-gfm-autolink-literal` adds support for the second.

This package provides the low-level modules for integrating with the micromark
tokenizer and the micromark HTML compiler.

You probably should use this package with
[`mdast-util-gfm-autolink-literal`][mdast-util-gfm-autolink-literal].

## Install

[npm][]:

```sh
npm install micromark-extension-gfm-autolink-literal
```

## API

### `html`

### `syntax`

> Note: `syntax` is the default export of this module, `html` is available at
> `micromark-extension-gfm-autolink-literal/html`.

Support [literal autolinks][].
The exports are extensions for the micromark parser (to tokenize; can be passed
in `extensions`) and the default HTML compiler (to compile as `<a>` elements;
can be passed in `htmlExtensions`).

## Related

*   [`remarkjs/remark`][remark]
    — markdown processor powered by plugins
*   [`micromark/micromark`][micromark]
    — the smallest commonmark-compliant markdown parser that exists
*   [`syntax-tree/mdast-util-gfm-autolink-literal`](https://github.com/syntax-tree/mdast-util-gfm-autolink-literal)
    — mdast utility to support autolink literals
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

[build-badge]: https://github.com/micromark/micromark-extension-gfm-autolink-literal/workflows/main/badge.svg

[build]: https://github.com/micromark/micromark-extension-gfm-autolink-literal/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/micromark/micromark-extension-gfm-autolink-literal.svg

[coverage]: https://codecov.io/github/micromark/micromark-extension-gfm-autolink-literal

[downloads-badge]: https://img.shields.io/npm/dm/micromark-extension-gfm-autolink-literal.svg

[downloads]: https://www.npmjs.com/package/micromark-extension-gfm-autolink-literal

[size-badge]: https://img.shields.io/bundlephobia/minzip/micromark-extension-gfm-autolink-literal.svg

[size]: https://bundlephobia.com/result?p=micromark-extension-gfm-autolink-literal

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

[mdast-util-gfm-autolink-literal]: https://github.com/syntax-tree/mdast-util-gfm-autolink-literal

[literal autolinks]: https://github.github.com/gfm/#autolinks-extension-
