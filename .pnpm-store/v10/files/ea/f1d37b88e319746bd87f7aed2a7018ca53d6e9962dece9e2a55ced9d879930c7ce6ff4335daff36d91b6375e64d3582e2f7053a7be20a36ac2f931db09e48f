# micromark-util-combine-extensions

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][bundle-size-badge]][bundle-size]
[![Sponsors][sponsors-badge]][opencollective]
[![Backers][backers-badge]][opencollective]
[![Chat][chat-badge]][chat]

[micromark][] utility to combine [syntax][] or [html][] extensions.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`combineExtensions(extensions)`](#combineextensionsextensions)
    *   [`combineHtmlExtensions(htmlExtensions)`](#combinehtmlextensionshtmlextensions)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package can merge multiple extensions into one.

## When should I use this?

This package might be useful when you are making “presets”, such as
[`micromark-extension-gfm`][micromark-extension-gfm].

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install micromark-util-combine-extensions
```

In Deno with [`esm.sh`][esmsh]:

```js
import {combineExtensions} from 'https://esm.sh/micromark-util-combine-extensions@1'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {combineExtensions} from 'https://esm.sh/micromark-util-combine-extensions@1?bundle'
</script>
```

## Use

```js
import {gfmAutolinkLiteral} from 'micromark-extension-gfm-autolink-literal'
import {gfmStrikethrough} from 'micromark-extension-gfm-strikethrough'
import {gfmTable} from 'micromark-extension-gfm-table'
import {gfmTaskListItem} from 'micromark-extension-gfm-task-list-item'
import {combineExtensions} from 'micromark-util-combine-extensions'

const gfm = combineExtensions([gfmAutolinkLiteral, gfmStrikethrough(), gfmTable, gfmTaskListItem])
```

## API

This module exports the identifiers
[`combineExtensions`][api-combine-extensions] and
[`combineHtmlExtensions`][api-combine-html-extensions].
There is no default export.

### `combineExtensions(extensions)`

Combine multiple syntax extensions into one.

###### Parameters

*   `extensions` (`Array<Extension>`)
    — list of syntax extensions

###### Returns

A single combined extension (`Extension`).

### `combineHtmlExtensions(htmlExtensions)`

Combine multiple html extensions into one.

###### Parameters

*   `htmlExtensions` (`Array<HtmlExtension>`)
    — list of HTML extensions

###### Returns

A single combined HTML extension (`HtmlExtension`).

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

Projects maintained by the unified collective are compatible with maintained
versions of Node.js.

When we cut a new major release, we drop support for unmaintained versions of
Node.
This means we try to keep the current release line,
`micromark-util-combine-extensions@^2`, compatible with Node.js 16.
This package works with `micromark@^3`.

## Security

This package is safe.
See [`security.md`][securitymd] in [`micromark/.github`][health] for how to
submit a security report.

## Contribute

See [`contributing.md`][contributing] in [`micromark/.github`][health] for ways
to get started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organisation, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/micromark/micromark/workflows/main/badge.svg

[build]: https://github.com/micromark/micromark/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/micromark/micromark.svg

[coverage]: https://codecov.io/github/micromark/micromark

[downloads-badge]: https://img.shields.io/npm/dm/micromark-util-combine-extensions.svg

[downloads]: https://www.npmjs.com/package/micromark-util-combine-extensions

[bundle-size-badge]: https://img.shields.io/badge/dynamic/json?label=minzipped%20size&query=$.size.compressedSize&url=https://deno.bundlejs.com/?q=micromark-util-combine-extensions

[bundle-size]: https://bundlejs.com/?q=micromark-util-combine-extensions

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[opencollective]: https://opencollective.com/unified

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/micromark/micromark/discussions

[license]: https://github.com/micromark/micromark/blob/main/license

[author]: https://wooorm.com

[health]: https://github.com/micromark/.github

[securitymd]: https://github.com/micromark/.github/blob/main/security.md

[contributing]: https://github.com/micromark/.github/blob/main/contributing.md

[support]: https://github.com/micromark/.github/blob/main/support.md

[coc]: https://github.com/micromark/.github/blob/main/code-of-conduct.md

[syntax]: https://github.com/micromark/micromark#syntaxextension

[html]: https://github.com/micromark/micromark#htmlextension

[typescript]: https://www.typescriptlang.org

[micromark]: https://github.com/micromark/micromark

[micromark-extension-gfm]: https://github.com/micromark/micromark-extension-gfm

[api-combine-extensions]: #combineextensionsextensions

[api-combine-html-extensions]: #combinehtmlextensionshtmlextensions
