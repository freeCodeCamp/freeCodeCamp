[![npm version](https://img.shields.io/npm/v/espree.svg)](https://www.npmjs.com/package/espree)
[![npm downloads](https://img.shields.io/npm/dm/espree.svg)](https://www.npmjs.com/package/espree)
[![Build Status](https://github.com/eslint/js/workflows/CI/badge.svg)](https://github.com/js/espree/actions)
[![Bountysource](https://www.bountysource.com/badge/tracker?tracker_id=9348450)](https://www.bountysource.com/trackers/9348450-eslint?utm_source=9348450&utm_medium=shield&utm_campaign=TRACKER_BADGE)

# Espree

Espree started out as a fork of [Esprima](http://esprima.org) v1.2.2, the last stable published released of Esprima before work on ECMAScript 6 began. Espree is now built on top of [Acorn](https://github.com/ternjs/acorn), which has a modular architecture that allows extension of core functionality. The goal of Espree is to produce output that is similar to Esprima with a similar API so that it can be used in place of Esprima.

## Usage

Install:

```
npm i espree
```

To use in an ESM file:

```js
import * as espree from "espree";

const ast = espree.parse(code);
```

To use in a Common JS file:

```js
const espree = require("espree");

const ast = espree.parse(code);
```

## API

### `parse()`

`parse` parses the given code and returns a abstract syntax tree (AST). It takes two parameters.

- `code` [string]() - the code which needs to be parsed.
- `options (Optional)` [Object]() - read more about this [here](#options).

```js
import * as espree from "espree";

const ast = espree.parse(code);
```

**Example :**

```js
const ast = espree.parse('let foo = "bar"', { ecmaVersion: 6 });
console.log(ast);
```

<details><summary>Output</summary>
<p>

```
Node {
  type: 'Program',
  start: 0,
  end: 15,
  body: [
    Node {
      type: 'VariableDeclaration',
      start: 0,
      end: 15,
      declarations: [Array],
      kind: 'let'
    }
  ],
  sourceType: 'script'
}
```

</p>
</details>

### `tokenize()`

`tokenize` returns the tokens of a given code. It takes two parameters.

- `code` [string]() - the code which needs to be parsed.
- `options (Optional)` [Object]() - read more about this [here](#options).

Even if `options` is empty or undefined or `options.tokens` is `false`, it assigns it to `true` in order to get the `tokens` array

**Example :**

```js
import * as espree from "espree";

const tokens = espree.tokenize('let foo = "bar"', { ecmaVersion: 6 });
console.log(tokens);
```

<details><summary>Output</summary>
<p>

```
Token { type: 'Keyword', value: 'let', start: 0, end: 3 },
Token { type: 'Identifier', value: 'foo', start: 4, end: 7 },
Token { type: 'Punctuator', value: '=', start: 8, end: 9 },
Token { type: 'String', value: '"bar"', start: 10, end: 15 }
```

</p>
</details>

### `version`

Returns the current `espree` version

### `VisitorKeys`

Returns all visitor keys for traversing the AST from [eslint-visitor-keys](https://github.com/eslint/js/tree/main/packages/eslint-visitor-keys)

### `latestEcmaVersion`

Returns the latest ECMAScript supported by `espree`

### `supportedEcmaVersions`

Returns an array of all supported ECMAScript versions

## Options

```js
const options = {
    // attach range information to each node
    range: false,

    // attach line/column location information to each node
    loc: false,

    // create a top-level comments array containing all comments
    comment: false,

    // create a top-level tokens array containing all tokens
    tokens: false,

    // Set to 3, 5 (the default), 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 or 17 to specify the version of ECMAScript syntax you want to use.
    // You can also set to 2015 (same as 6), 2016 (same as 7), 2017 (same as 8), 2018 (same as 9), 2019 (same as 10), 2020 (same as 11), 2021 (same as 12), 2022 (same as 13), 2023 (same as 14), 2024 (same as 15), 2025 (same as 16) or 2026 (same as 17) to use the year-based naming.
    // You can also set "latest" to use the most recently supported version.
    ecmaVersion: 3,

    allowReserved: true, // only allowed when ecmaVersion is 3

    // specify which type of script you're parsing ("script", "module", or "commonjs")
    sourceType: "script",

    // specify additional language features
    ecmaFeatures: {

        // enable JSX parsing
        jsx: false,

        // enable return in global scope (set to true automatically when sourceType is "commonjs")
        globalReturn: false,

        // enable implied strict mode (if ecmaVersion >= 5)
        impliedStrict: false
    }
}
```

## Esprima Compatibility Going Forward

The primary goal is to produce the exact same AST structure and tokens as Esprima, and that takes precedence over anything else. (The AST structure being the [ESTree](https://github.com/estree/estree) API with JSX extensions.) Separate from that, Espree may deviate from what Esprima outputs in terms of where and how comments are attached, as well as what additional information is available on AST nodes. That is to say, Espree may add more things to the AST nodes than Esprima does but the overall AST structure produced will be the same.

Espree may also deviate from Esprima in the interface it exposes.

## Contributing

Issues and pull requests will be triaged and responded to as quickly as possible. We operate under the [ESLint Contributor Guidelines](http://eslint.org/docs/developer-guide/contributing), so please be sure to read them before contributing. If you're not sure where to dig in, check out the [issues](https://github.com/eslint/js/issues).

Espree is licensed under a permissive BSD 2-clause license.

## Security Policy

We work hard to ensure that Espree is safe for everyone and that security issues are addressed quickly and responsibly. Read the full [security policy](https://github.com/eslint/.github/blob/master/SECURITY.md).

## Build Commands

* `npm test` - run all tests
* `npm run lint` - run all linting

## Differences from Espree 2.x

* The `tokenize()` method does not use `ecmaFeatures`. Any string will be tokenized completely based on ECMAScript 6 semantics.
* Trailing whitespace no longer is counted as part of a node.
* `let` and `const` declarations are no longer parsed by default. You must opt-in by using an `ecmaVersion` newer than `5` or setting `sourceType` to `module`.
* The `esparse` and `esvalidate` binary scripts have been removed.
* There is no `tolerant` option. We will investigate adding this back in the future.

## Known Incompatibilities

In an effort to help those wanting to transition from other parsers to Espree, the following is a list of noteworthy incompatibilities with other parsers. These are known differences that we do not intend to change.

### Esprima 1.2.2

* Esprima counts trailing whitespace as part of each AST node while Espree does not. In Espree, the end of a node is where the last token occurs.
* Espree does not parse `let` and `const` declarations by default.
* Error messages returned for parsing errors are different.
* There are two addition properties on every node and token: `start` and `end`. These represent the same data as `range` and are used internally by Acorn.

### Esprima 2.x

* Esprima 2.x uses a different comment attachment algorithm that results in some comments being added in different places than Espree. The algorithm Espree uses is the same one used in Esprima 1.2.2.

## Frequently Asked Questions

### Why another parser

[ESLint](http://eslint.org) had been relying on Esprima as its parser from the beginning. While that was fine when the JavaScript language was evolving slowly, the pace of development increased dramatically and Esprima had fallen behind. ESLint, like many other tools reliant on Esprima, has been stuck in using new JavaScript language features until Esprima updates, and that caused our users frustration.

We decided the only way for us to move forward was to create our own parser, bringing us inline with JSHint and JSLint, and allowing us to keep implementing new features as we need them. We chose to fork Esprima instead of starting from scratch in order to move as quickly as possible with a compatible API.

With Espree 2.0.0, we are no longer a fork of Esprima but rather a translation layer between Acorn and Esprima syntax. This allows us to put work back into a community-supported parser (Acorn) that is continuing to grow and evolve while maintaining an Esprima-compatible parser for those utilities still built on Esprima.

### Have you tried working with Esprima?

Yes. Since the start of ESLint, we've regularly filed bugs and feature requests with Esprima and will continue to do so. However, there are some different philosophies around how the projects work that need to be worked through. The initial goal was to have Espree track Esprima and eventually merge the two back together, but we ultimately decided that building on top of Acorn was a better choice due to Acorn's plugin support.

### Why don't you just use Acorn?

Acorn is a great JavaScript parser that produces an AST that is compatible with Esprima. Unfortunately, ESLint relies on more than just the AST to do its job. It relies on Esprima's tokens and comment attachment features to get a complete picture of the source code. We investigated switching to Acorn, but the inconsistencies between Esprima and Acorn created too much work for a project like ESLint.

We are building on top of Acorn, however, so that we can contribute back and help make Acorn even better.

### What ECMAScript features do you support?

Espree supports all ECMAScript 2025 features and partially supports ECMAScript 2026 features.

Because ECMAScript 2026 is still under development, we are implementing features as they are finalized. Currently, Espree supports:

* [Explicit Resource Management](https://github.com/tc39/proposal-explicit-resource-management)

See [finished-proposals.md](https://github.com/tc39/proposals/blob/master/finished-proposals.md) to know what features are finalized.

### How do you determine which experimental features to support?

In general, we do not support experimental JavaScript features. We may make exceptions from time to time depending on the maturity of the features.

<!-- NOTE: This section is autogenerated. Do not manually edit.-->
<!--sponsorsstart-->
## Sponsors

The following companies, organizations, and individuals support ESLint's ongoing maintenance and development. [Become a Sponsor](https://eslint.org/donate)
to get your logo on our READMEs and [website](https://eslint.org/sponsors).

<h3>Diamond Sponsors</h3>
<p><a href="https://www.ag-grid.com/"><img src="https://images.opencollective.com/ag-grid/bec0580/logo.png" alt="AG Grid" height="128"></a></p><h3>Platinum Sponsors</h3>
<p><a href="https://automattic.com"><img src="https://images.opencollective.com/automattic/d0ef3e1/logo.png" alt="Automattic" height="128"></a> <a href="https://www.airbnb.com/"><img src="https://images.opencollective.com/airbnb/d327d66/logo.png" alt="Airbnb" height="128"></a></p><h3>Gold Sponsors</h3>
<p><a href="https://qlty.sh/"><img src="https://images.opencollective.com/qltysh/33d157d/logo.png" alt="Qlty Software" height="96"></a> <a href="https://trunk.io/"><img src="https://images.opencollective.com/trunkio/fb92d60/avatar.png" alt="trunk.io" height="96"></a> <a href="https://shopify.engineering/"><img src="https://avatars.githubusercontent.com/u/8085" alt="Shopify" height="96"></a></p><h3>Silver Sponsors</h3>
<p><a href="https://vite.dev/"><img src="https://images.opencollective.com/vite/e6d15e1/logo.png" alt="Vite" height="64"></a> <a href="https://liftoff.io/"><img src="https://images.opencollective.com/liftoff/5c4fa84/logo.png" alt="Liftoff" height="64"></a> <a href="https://americanexpress.io"><img src="https://avatars.githubusercontent.com/u/3853301" alt="American Express" height="64"></a> <a href="https://stackblitz.com"><img src="https://avatars.githubusercontent.com/u/28635252" alt="StackBlitz" height="64"></a></p><h3>Bronze Sponsors</h3>
<p><a href="https://sentry.io"><img src="https://github.com/getsentry.png" alt="Sentry" height="32"></a> <a href="https://syntax.fm"><img src="https://github.com/syntaxfm.png" alt="Syntax" height="32"></a> <a href="https://cybozu.co.jp/"><img src="https://images.opencollective.com/cybozu/933e46d/logo.png" alt="Cybozu" height="32"></a> <a href="https://www.crosswordsolver.org/anagram-solver/"><img src="https://images.opencollective.com/anagram-solver/2666271/logo.png" alt="Anagram Solver" height="32"></a> <a href="https://icons8.com/"><img src="https://images.opencollective.com/icons8/7fa1641/logo.png" alt="Icons8" height="32"></a> <a href="https://discord.com"><img src="https://images.opencollective.com/discordapp/f9645d9/logo.png" alt="Discord" height="32"></a> <a href="https://www.gitbook.com"><img src="https://avatars.githubusercontent.com/u/7111340" alt="GitBook" height="32"></a> <a href="https://nolebase.ayaka.io"><img src="https://avatars.githubusercontent.com/u/11081491" alt="Neko" height="32"></a> <a href="https://nx.dev"><img src="https://avatars.githubusercontent.com/u/23692104" alt="Nx" height="32"></a> <a href="https://opensource.mercedes-benz.com/"><img src="https://avatars.githubusercontent.com/u/34240465" alt="Mercedes-Benz Group" height="32"></a> <a href="https://herocoders.com"><img src="https://avatars.githubusercontent.com/u/37549774" alt="HeroCoders" height="32"></a> <a href="https://www.lambdatest.com"><img src="https://avatars.githubusercontent.com/u/171592363" alt="LambdaTest" height="32"></a></p>
<h3>Technology Sponsors</h3>
Technology sponsors allow us to use their products and services for free as part of a contribution to the open source ecosystem and our work.
<p><a href="https://netlify.com"><img src="https://raw.githubusercontent.com/eslint/eslint.org/main/src/assets/images/techsponsors/netlify-icon.svg" alt="Netlify" height="32"></a> <a href="https://algolia.com"><img src="https://raw.githubusercontent.com/eslint/eslint.org/main/src/assets/images/techsponsors/algolia-icon.svg" alt="Algolia" height="32"></a> <a href="https://1password.com"><img src="https://raw.githubusercontent.com/eslint/eslint.org/main/src/assets/images/techsponsors/1password-icon.svg" alt="1Password" height="32"></a></p>
<!--sponsorsend-->
