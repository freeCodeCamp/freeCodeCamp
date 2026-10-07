# micromark-util-resolve-all

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][bundle-size-badge]][bundle-size]
[![Sponsors][sponsors-badge]][opencollective]
[![Backers][backers-badge]][opencollective]
[![Chat][chat-badge]][chat]

[micromark][] utility to resolve subtokens.

[Resolvers][resolver] are functions that take events and manipulate them.
This is needed for example because media (links, images) and attention (strong,
italic) aren’t parsed left-to-right.
Instead, their openings and closings are parsed, and when done, their openings
and closings are matched, and left overs are turned into plain text.
Because media and attention can’t overlap, we need to perform that operation
when one closing matches an opening, too.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`resolveAll(constructs, events, context)`](#resolveallconstructs-events-context)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package exposes a micromark internal that you probably don’t need.

## When should I use this?

This package might be useful when you are making your own micromark extensions.

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install micromark-util-resolve-all
```

In Deno with [`esm.sh`][esmsh]:

```js
import {resolveAll} from 'https://esm.sh/micromark-util-resolve-all@1'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {resolveAll} from 'https://esm.sh/micromark-util-resolve-all@1?bundle'
</script>
```

## Use

```js
import {push} from 'micromark-util-chunked'
import {resolveAll} from 'micromark-util-resolve-all'

/**
 * @type {Resolver}
 */
function resolveAllAttention(events, context) {
  // …

  // Walk through all events.
  while (++index < events.length) {
    // Find a token that can close.
    if (
      events[index][0] === 'enter' &&
      events[index][1].type === 'attentionSequence' &&
      events[index][1]._close
    ) {
      open = index

      // Now walk back to find an opener.
      while (open--) {
        // Find a token that can open the closer.
        if (
          // …
        ) {
          // …

          // Opening.
          nextEvents = push(nextEvents, [
            // …
          ])

          // Between.
          nextEvents = push(
            nextEvents,
            resolveAll(
              context.parser.constructs.insideSpan.null,
              events.slice(open + 1, index),
              context
            )
          )

          // Closing.
          nextEvents = push(nextEvents, [
            // …
          ])

          // …
        }
      }
    }
  }

  // …
}
```

## API

This module exports the identifier [`resolveAll`][api-resolve-all].
There is no default export.

### `resolveAll(constructs, events, context)`

Call all `resolveAll`s in `constructs`.

###### Parameters

*   `constructs` (`Array<Construct>`)
    — list of constructs, optionally with `resolveAll`s
*   `events` (`Array<Event>`)
    — list of events
*   `context` (`TokenizeContext`)
    — context used by `tokenize`

###### Returns

Changed events (`Array<Events>`).

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

Projects maintained by the unified collective are compatible with maintained
versions of Node.js.

When we cut a new major release, we drop support for unmaintained versions of
Node.
This means we try to keep the current release line,
`micromark-util-resolve-all@^2`, compatible with Node.js 16.
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

[downloads-badge]: https://img.shields.io/npm/dm/micromark-util-resolve-all.svg

[downloads]: https://www.npmjs.com/package/micromark-util-resolve-all

[bundle-size-badge]: https://img.shields.io/badge/dynamic/json?label=minzipped%20size&query=$.size.compressedSize&url=https://deno.bundlejs.com/?q=micromark-util-resolve-all

[bundle-size]: https://bundlejs.com/?q=micromark-util-resolve-all

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

[resolver]: https://github.com/micromark/micromark/blob/a571c09/packages/micromark-util-types/index.js#L219

[typescript]: https://www.typescriptlang.org

[micromark]: https://github.com/micromark/micromark

[api-resolve-all]: #resolveallconstructs-events-context
