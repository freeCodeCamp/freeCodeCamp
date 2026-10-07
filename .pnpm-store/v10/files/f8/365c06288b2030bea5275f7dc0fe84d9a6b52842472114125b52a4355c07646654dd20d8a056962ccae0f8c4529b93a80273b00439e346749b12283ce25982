# devlop

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Some tools to make developing easier while not including code in production.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`deprecate(fn, message[, code])`](#deprecatefn-message-code)
    *   [`equal(actual, expected[, message])`](#equalactual-expected-message)
    *   [`ok(value[, message])`](#okvalue-message)
    *   [`unreachable(message?)`](#unreachablemessage)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package lets you do things in development that are free in production.
It contains useful `assert` functions and a `deprecate` function that are
useful when developing JavaScript packages while being small in production.

If you know Rust, you might know how nice having a
[`debug_assert!`][rust-debug-assert] is.
This is that, and a bit more.
For more on why they’re nice, see
[“Rust’s Two Kinds of ‘Assert’ Make for Better Code”][rust-two-kinds]

## When should I use this?

Many JavaScript programs do not use assertions at all (perhaps because they’re
typed and so assume type safety) or include lots of code to throw errors when
users do weird things (weighing down production code).
This package hopes to improve the sitation by making assertions free and
deprecations cheap.

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install devlop
```

In Deno with [`esm.sh`][esmsh]:

```js
import {deprecate, equal, ok, unreachable} from 'https://esm.sh/devlop@1'
// For development code:
// import {deprecate, equal, ok} from 'https://esm.sh/devlop@1?conditions=development'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {deprecate, equal, ok, unreachable} from 'https://esm.sh/devlop@1?bundle'
  // For development code:
  // import {deprecate, equal, ok} from 'https://esm.sh/devlop@1?bundle&conditions=development'
</script>
```

## Use

Say we have a small ponyfill for the ES5 `String#includes` function.
It’s deprecated, because folks can use `String#includes` nowadays.
It’s nicely typed so users should be able to figure out what to pass but we
include assertions to show nicer errors when they get it wrong.

`example/string-includes.js`:

```js
import {deprecate, ok} from 'devlop'

export const stringIncludes = deprecate(
  includes,
  'Since ES5, please use `String#includes` itself.'
)

/**
 * @deprecated
 *   Since ES5, please use `String#includes` itself.
 * @param {string} value
 *   Value to search in.
 * @param {string} search
 *   Value to search for.
 * @param {number | undefined} [position=0]
 *   Position to search from (default: `0`).
 * @returns {boolean}
 *   Whether the searched for value exists in the searched value after position.
 */
function includes(value, search, position) {
  ok(typeof value === 'string', 'expected string for `value`')
  ok(typeof search === 'string', 'expected string for `search`')
  ok(position === undefined || typeof position === 'number', 'expected number')
  ok(
    position === undefined ||
      (typeof position === 'number' &&
        !(/* #__PURE__ */ Number.isNaN(position))),
    'expected number'
  )
  // eslint-disable-next-line unicorn/prefer-includes
  return value.indexOf(search, position || 0) !== -1
}
```

`example/index.js`:

```js
import {stringIncludes} from './example-includes.js'

console.log(stringIncludes('blue whale', 'dolphin')) //=> false
console.log(stringIncludes('blue whale', 'whale')) //=> true
```

Say we’d bundle that in development with [`esbuild`][esbuild] and check the
gzip size ([`gzip-size-cli`][gzip-size-cli]), we’d get 1.02 kB of code:

```sh
$ esbuild example/index.js --bundle --conditions=development --format=esm --minify --target=es2022 | gzip-size
1.02 kB
```

But because `devlop` is light in production we’d get:

```sh
$ esbuild example/index.js --bundle --format=esm --minify --target=es2022 | gzip-size
169 B
```

The bundle looks as follows:

```js
function u(n){return n}var r=u(c,"Since ES5, please use `String#includes` itself.");function c(n,t,e){return n.indexOf(t,e||0)!==-1}console.log(r("blue whale","dolphin"));console.log(r("blue whale","whale"));
```

It depends a bit on which bundler and minifier you use how small the code is:
esbuild keeps the unused message parameter to the `deprecate` function around
and does not know `Number.isNaN` can be dropped without a `/* #__PURE__ */`
annotation.

[`rollup`][rollup] with [`@rollup/plugin-node-resolve`][node-resolve]
and [`@rollup/plugin-terser`][terser] performs even better:

```sh
$ rollup example/index.js -p node-resolve -p terser | gzip-size
118 B
```

The bundle looks as follows:

```js
const l=function(l,e,o){return-1!==l.indexOf(e,o||0)};console.log(l("blue whale","dolphin")),console.log(l("blue whale","whale"));
```

Rollup doesn’t need the `/* #__PURE__ */` comment either!

## API

This package exports the identifiers [`deprecate`][api-deprecate],
[`equal`][api-equal], [`ok`][api-ok], and [`unreachable`][api-unreachable].
There is no default export.

The export map supports the [`development` condition][node-condition].
Run `node --conditions development module.js` to get dev code.
Without this condition, no-ops are loaded.

### `deprecate(fn, message[, code])`

Wrap a function or class to show a deprecation message when first called.

> 👉 **Important**: only shows a message when the `development` condition is
> used, does nothing in production.

When the resulting wrapped `fn` is called, emits a warning once to
`console.error` (`stderr`).
If a code is given, one warning message will be emitted in total per code.

###### Parameters

*   `fn` (`Function`)
    — function or class
*   `message` (`string`)
    — message explaining deprecation
*   `code` (`string`, optional)
    — deprecation identifier (optional); deprecation messages will be generated
    only once per code

###### Returns

Wrapped `fn`.

### `equal(actual, expected[, message])`

Assert deep strict equivalence.

> 👉 **Important**: only asserts when the `development` condition is used, does
> nothing in production.

###### Parameters

*   `actual` (`unknown`)
    — value
*   `expected` (`unknown`)
    — baseline
*   `message` (`Error` or `string`, default: `'Expected values to be deeply
    equal'`)
    — message for assertion error

###### Returns

Nothing (`undefined`).

###### Throws

Throws (`AssertionError`) when `actual` is not deep strict equal to `expected`.

### `ok(value[, message])`

Assert if `value` is truthy.

> 👉 **Important**: only asserts when the `development` condition is used, does
> nothing in production.

###### Parameters

*   `actual` (`unknown`)
    — value to assert
*   `message` (`Error` or `string`, default: `'Expected value to be truthy'`)
    — message for assertion error

###### Returns

Nothing (`undefined`).

###### Throws

Throws (`AssertionError`) when `value` is falsey.

### `unreachable(message?)`

Assert that a code path never happens.

> 👉 **Important**: only asserts when the `development` condition is used,
> does nothing in production.

###### Parameters

*   `message` (`Error` or `string`, default: `'Unreachable'`)
    — message for assertion error

###### Returns

Never (`never`).

###### Throws

Throws (`AssertionError`), always.

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

This project is compatible with maintained versions of Node.js.

When we cut a new major release, we drop support for unmaintained versions of
Node.
This means we try to keep the current release line, `devlop@^1`,
compatible with Node.js 16.

## Security

This package is safe.

## Related

*   [`babel-plugin-unassert`](https://github.com/unassert-js/babel-plugin-unassert)
    — encourage reliable programming with assertions while compiling them away
    in production (can remove arbitrary `assert` modules, works regardless of
    conditions, so has to be configured by the end user)

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://github.com/wooorm/devlop/workflows/main/badge.svg

[build]: https://github.com/wooorm/devlop/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/devlop.svg

[coverage]: https://codecov.io/github/wooorm/devlop

[downloads-badge]: https://img.shields.io/npm/dm/devlop.svg

[downloads]: https://www.npmjs.com/package/devlop

[size-badge]: https://img.shields.io/badge/dynamic/json?label=minzipped%20size&query=$.size.compressedSize&url=https://deno.bundlejs.com/?q=devlop

[size]: https://bundlejs.com/?q=devlop

[npm]: https://docs.npmjs.com/cli/install

[esmsh]: https://esm.sh

[license]: license

[author]: https://wooorm.com

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[node-condition]: https://nodejs.org/api/packages.html#packages_resolving_user_conditions

[rust-debug-assert]: https://doc.rust-lang.org/std/macro.debug_assert.html

[rust-two-kinds]: https://tratt.net/laurie/blog/2023/rusts_two_kinds_of_assert_make_for_better_code.html

[esbuild]: https://esbuild.github.io

[gzip-size-cli]: https://github.com/sindresorhus/gzip-size-cli/tree/main

[rollup]: https://rollupjs.org

[node-resolve]: https://github.com/rollup/plugins/tree/master/packages/node-resolve

[terser]: https://github.com/rollup/plugins/tree/master/packages/terser#readme

[api-deprecate]: #deprecatefn-message-code

[api-equal]: #equalactual-expected-message

[api-ok]: #okvalue-message

[api-unreachable]: #unreachablemessage
