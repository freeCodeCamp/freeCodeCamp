[![npm version](https://img.shields.io/npm/v/espree.svg)](https://www.npmjs.com/package/espree)
[![Build Status](https://travis-ci.org/eslint/espree.svg?branch=master)](https://travis-ci.org/eslint/espree)
[![npm downloads](https://img.shields.io/npm/dm/espree.svg)](https://www.npmjs.com/package/espree)
[![Bountysource](https://www.bountysource.com/badge/tracker?tracker_id=9348450)](https://www.bountysource.com/trackers/9348450-eslint?utm_source=9348450&utm_medium=shield&utm_campaign=TRACKER_BADGE)

# Espree

Espree started out as a fork of [Esprima](http://esprima.org) v1.2.2, the last stable published released of Esprima before work on ECMAScript 6 began. Espree is now built on top of [Acorn](https://github.com/ternjs/acorn), which has a modular architecture that allows extension of core functionality. The goal of Espree is to produce output that is similar to Esprima with a similar API so that it can be used in place of Esprima.

## Usage

Install:

```
npm i espree
```

And in your Node.js code:

```javascript
const espree = require("espree");

const ast = espree.parse(code);
```

## API

### `parse()`

`parse` parses the given code and returns a abstract syntax tree (AST). It takes two parameters.

- `code` [string]() - the code which needs to be parsed. 
- `options (Optional)` [Object]() - read more about this [here](#options).

```javascript
const espree = require("espree");

const ast = espree.parse(code, options);
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

Returns all visitor keys for traversing the AST from [eslint-visitor-keys](https://github.com/eslint/eslint-visitor-keys)

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

    // Set to 3, 5 (default), 6, 7, 8, 9, 10, 11, or 12 to specify the version of ECMAScript syntax you want to use.
    // You can also set to 2015 (same as 6), 2016 (same as 7), 2017 (same as 8), 2018 (same as 9), 2019 (same as 10), 2020 (same as 11), or 2021 (same as 12) to use the year-based naming.
    ecmaVersion: 5,

    // specify which type of script you're parsing ("script" or "module")
    sourceType: "script",

    // specify additional language features
    ecmaFeatures: {

        // enable JSX parsing
        jsx: false,

        // enable return in global scope
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

Issues and pull requests will be triaged and responded to as quickly as possible. We operate under the [ESLint Contributor Guidelines](http://eslint.org/docs/developer-guide/contributing), so please be sure to read them before contributing. If you're not sure where to dig in, check out the [issues](https://github.com/eslint/espree/issues).

Espree is licensed under a permissive BSD 2-clause license.

## Security Policy

We work hard to ensure that Espree is safe for everyone and that security issues are addressed quickly and responsibly. Read the full [security policy](https://github.com/eslint/.github/blob/master/SECURITY.md).

## Build Commands

* `npm test` - run all linting and tests
* `npm run lint` - run all linting
* `npm run browserify` - creates a version of Espree that is usable in a browser

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

Espree supports all ECMAScript 2020 features and partially supports ECMAScript 2021 features.

Because ECMAScript 2021 is still under development, we are implementing features as they are finalized. Currently, Espree supports:

* [Logical Assignment Operators](https://github.com/tc39/proposal-logical-assignment)
* [Numeric Separators](https://github.com/tc39/proposal-numeric-separator)

See [finished-proposals.md](https://github.com/tc39/proposals/blob/master/finished-proposals.md) to know what features are finalized.

### How do you determine which experimental features to support?

In general, we do not support experimental JavaScript features. We may make exceptions from time to time depending on the maturity of the features.
