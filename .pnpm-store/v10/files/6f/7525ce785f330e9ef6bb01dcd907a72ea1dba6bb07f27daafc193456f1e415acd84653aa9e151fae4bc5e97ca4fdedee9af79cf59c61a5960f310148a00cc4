# babel-eslint [![npm](https://img.shields.io/npm/v/babel-eslint.svg)](https://www.npmjs.com/package/babel-eslint) [![travis](https://img.shields.io/travis/babel/babel-eslint/master.svg)](https://travis-ci.org/babel/babel-eslint) [![npm-downloads](https://img.shields.io/npm/dm/babel-eslint.svg)](https://www.npmjs.com/package/babel-eslint)

**babel-eslint** allows you to lint **ALL** valid Babel code with the fantastic
[ESLint](https://github.com/eslint/eslint).

### Why Use babel-eslint

You only need to use babel-eslint if you are using types (Flow) or experimental features not supported in ESLint itself yet. Otherwise try the default parser (you don't have to use it just because you are using Babel).

---

> If there is an issue, first check if it can be reproduced with the regular parser or with the latest versions of `eslint` and `babel-eslint`!

For questions and support please visit the [`#discussion`](https://babeljs.slack.com/messages/discussion/) babel slack channel (sign up [here](https://github.com/babel/notes/issues/38)) or eslint [gitter](https://gitter.im/eslint/eslint)!

> Note that the `ecmaFeatures` config property may still be required for ESLint to work properly with features not in ECMAScript 5 by default. Examples are `globalReturn` and `modules`).

## Known Issues

Flow:
> Check out [eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype): An `eslint` plugin that makes flow type annotations global variables and marks declarations as used. Solves the problem of false positives with `no-undef` and `no-unused-vars`.
- `no-undef` for global flow types: `ReactElement`, `ReactClass` [#130](https://github.com/babel/babel-eslint/issues/130#issuecomment-111215076)
  - Workaround: define types as globals in `.eslintrc` or define types and import them `import type ReactElement from './types'`
- `no-unused-vars/no-undef` with Flow declarations (`declare module A {}`) [#132](https://github.com/babel/babel-eslint/issues/132#issuecomment-112815926)

Modules/strict mode
- `no-unused-vars: [2, {vars: local}]` [#136](https://github.com/babel/babel-eslint/issues/136)

Please check out [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) for React/JSX issues
- `no-unused-vars` with jsx

Please check out [eslint-plugin-babel](https://github.com/babel/eslint-plugin-babel) for other issues

## How does it work?

ESLint allows custom parsers. This is great but some of the syntax nodes that Babel supports
aren't supported by ESLint. When using this plugin, ESLint is monkeypatched and your code is
transformed into code that ESLint can understand. All location info such as line numbers,
columns is also retained so you can track down errors with ease.

Basically `babel-eslint` exports an [`index.js`](/index.js) that a linter can use.
It just needs to export a `parse` method that takes in a string of code and outputs an AST.

## Usage

### Supported ESLint versions

ESLint | babel-eslint
------------ | -------------
4.x | >= 6.x
3.x | >= 6.x
2.x | >= 6.x
1.x | >= 5.x

### Install

Ensure that you have substituted the correct version lock for `eslint` and `babel-eslint` into this command:

```sh
$ npm install eslint@4.x babel-eslint@8 --save-dev
# or
$ yarn add eslint@4.x babel-eslint@8 -D
```

### Setup

**.eslintrc**

```json
{
  "parser": "babel-eslint",
  "rules": {
    "strict": 0
  }
}
```

Check out the [ESLint docs](http://eslint.org/docs/rules/) for all possible rules.

### Configuration

- `sourceType` can be set to `'module'`(default) or `'script'` if your code isn't using ECMAScript modules.
- `allowImportExportEverywhere` (default `false`) can be set to `true` to allow import and export declarations to appear anywhere a statement is allowed if your build environment supports that. Otherwise import and export declarations can only appear at a program's top level.
- `codeFrame` (default `true`) can be set to `false` to disable the code frame in the reporter. This is useful since some eslint formatters don't play well with it.

**.eslintrc**

```json
{
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": false,
    "codeFrame": true
  }
}
```

### Run

```sh
$ eslint your-files-here
```
