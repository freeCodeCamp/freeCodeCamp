# micromark-util-chunked

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][bundle-size-badge]][bundle-size]
[![Sponsors][sponsors-badge]][opencollective]
[![Backers][backers-badge]][opencollective]
[![Chat][chat-badge]][chat]

[micromark][] utility to splice and push with giant arrays.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`push(list, items)`](#pushlist-items)
    *   [`splice(list, start, remove, items)`](#splicelist-start-remove-items)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package exposes an algorithm to splice for giant arrays, which V8 bugs
out on.

## When should I use this?

This package might be useful when you are making your own micromark extensions.

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install micromark-util-chunked
```

In Deno with [`esm.sh`][esmsh]:

```js
import {push, splice} from 'https://esm.sh/micromark-util-chunked@1'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {push, splice} from 'https://esm.sh/micromark-util-chunked@1?bundle'
</script>
```

## Use

```js
import {push, splice} from 'micromark-util-chunked'

// …

nextEvents = push(nextEvents, [
  ['enter', events[open][1], context],
  ['exit', events[open][1], context]
])

// …

splice(events, open - 1, index - open + 3, nextEvents)

// …
```

## API

This module exports the identifiers [`push`][api-push]
and [`splice`][api-splice].
There is no default export.

### `push(list, items)`

Append `items` (an array) at the end of `list` (another array).
When `list` was empty, returns `items` instead.

This prevents a potentially expensive operation when `list` is empty,
and adds items in batches to prevent V8 from hanging.

###### Parameters

*   `list` (`Array<unknown>`)
    — list to operate on
*   `items` (`Array<unknown>`)
    — items to add to `list`

###### Returns

Either `list` or `items` (`Array<unknown>`).

### `splice(list, start, remove, items)`

Like `Array#splice`, but smarter for giant arrays.

`Array#splice` takes all items to be inserted as individual argument which
causes a stack overflow in V8 when trying to insert 100k items for instance.

Otherwise, this does not return the removed items, and takes `items` as an
array instead of rest parameters.

###### Parameters

*   `list` (`Array<unknown>`)
    — list to operate on
*   `start` (`number`)
    — index to remove/insert at (can be negative)
*   `remove` (`number`)
    — number of items to remove
*   `items` (`Array<unknown>`)
    — items to inject into `list`

###### Returns

Nothing (`undefined`).

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

Projects maintained by the unified collective are compatible with maintained
versions of Node.js.

When we cut a new major release, we drop support for unmaintained versions of
Node.
This means we try to keep the current release line,
`micromark-util-chunked@^2`, compatible with Node.js 16.
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

[downloads-badge]: https://img.shields.io/npm/dm/micromark-util-chunked.svg

[downloads]: https://www.npmjs.com/package/micromark-util-chunked

[bundle-size-badge]: https://img.shields.io/badge/dynamic/json?label=minzipped%20size&query=$.size.compressedSize&url=https://deno.bundlejs.com/?q=micromark-util-chunked

[bundle-size]: https://bundlejs.com/?q=micromark-util-chunked

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

[typescript]: https://www.typescriptlang.org

[micromark]: https://github.com/micromark/micromark

[api-push]: #pushlist-items

[api-splice]: #splicelist-start-remove-items
