# @babel/eslint-parser [![npm](https://img.shields.io/npm/v/@babel/eslint-parser.svg)](https://www.npmjs.com/package/@babel/eslint-parser) [![travis](https://img.shields.io/travis/babel/@babel/eslint-parser/main.svg)](https://travis-ci.org/babel/@babel/eslint-parser) [![npm-downloads](https://img.shields.io/npm/dm/@babel/eslint-parser.svg)](https://www.npmjs.com/package/@babel/eslint-parser)

**@babel/eslint-parser** allows you to lint **ALL** valid Babel code with the fantastic
[ESLint](https://github.com/eslint/eslint).

## When should I use @babel/eslint-parser?

ESLint's default parser and core rules [only support the latest final ECMAScript standard](https://github.com/eslint/eslint/blob/a675c89573836adaf108a932696b061946abf1e6/README.md#what-about-experimental-features) and do not support experimental (such as new features) and non-standard (such as Flow or TypeScript types) syntax provided by Babel. @babel/eslint-parser is a parser that allows ESLint to run on source code that is transformed by Babel.

**Note:** You only need to use @babel/eslint-parser if you are using Babel to transform your code. If this is not the case, please use the relevant parser for your chosen flavor of ECMAScript (note that the default parser supports all non-experimental syntax as well as JSX).

## How does it work?

ESLint allows for the use of [custom parsers](https://eslint.org/docs/developer-guide/working-with-custom-parsers). When using this plugin, your code is parsed by Babel's parser (using the configuration specified in your [Babel configuration file](https://babeljs.io/docs/en/configuration)) and the resulting AST is
transformed into an [ESTree](https://github.com/estree/estree)-compliant structure that ESLint can understand. All location info such as line numbers,
columns is also retained so you can track down errors with ease.

**Note:** ESLint's core rules do not support experimental syntax and may therefore not work as expected when using `@babel/eslint-parser`. Please use the companion [`@babel/eslint-plugin`](https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin) plugin for core rules that you have issues with.

## Usage

### Installation

```sh
$ npm install eslint @babel/core @babel/eslint-parser --save-dev
# or
$ yarn add eslint @babel/core @babel/eslint-parser -D
```

**Note:** @babel/eslint-parser requires `@babel/core@>=7.2.0` and a valid Babel configuration file to run. If you do not have this already set up, please see the [Babel Usage Guide](https://babeljs.io/docs/en/usage).

### Setup

To use @babel/eslint-parser, `"@babel/eslint-parser"` must be specified as the `parser` in your ESLint configuration file (see [here](https://eslint.org/docs/latest/use/configure/parser) for more detailed information).

**.eslintrc.js**

```js
module.exports = {
  parser: "@babel/eslint-parser",
};
```

With the parser set, your configuration can be configured as described in the [Configuring ESLint](https://eslint.org/docs/user-guide/configuring) documentation.

**Note:** The `parserOptions` described in the [official documentation](https://eslint.org/docs/user-guide/configuring/language-options#specifying-parser-options) are for the default parser and are not necessarily supported by @babel/eslint-parser. Please see the section directly below for supported `parserOptions`.

### Additional parser configuration

Additional configuration options can be set in your ESLint configuration under the `parserOptions` key. Please note that the `ecmaFeatures` config property may still be required for ESLint to work properly with features not in ECMAScript 5 by default.

- `requireConfigFile` (default `true`) can be set to `false` to allow @babel/eslint-parser to run on files that do not have a Babel configuration associated with them. This can be useful for linting files that are not transformed by Babel (such as tooling configuration files), though we recommend using the default parser via [glob-based configuration](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-based-on-glob-patterns).
  Note: When `requireConfigFile` is `false`, @babel/eslint-parser will still try to load the root babel config. If no configuration file is found, @babel/eslint-parser will not parse any experimental syntax. Though not recommended, if you have a babel config, but would like to prevent @babel/eslint-parser from loading Babel config, please specify
  **.eslintrc.js**

```js
module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      // your babel options
      presets: ["@babel/preset-env"],
    },
  },
};
```

- `sourceType` can be set to `"module"`(default) or `"script"` if your code isn't using ECMAScript modules.
<!-- TODO(Babel 8): Remove this -->
- `allowImportExportEverywhere` (default `false`) can be set to `true` to allow import and export declarations to appear anywhere a statement is allowed if your build environment supports that. Otherwise import and export declarations can only appear at a program's top level.
- `ecmaFeatures.globalReturn` (default `false`) allow return statements in the global scope when used with `sourceType: "script"`.
- `babelOptions` is an object containing Babel configuration [options](https://babeljs.io/docs/en/options) that are passed to Babel's parser at runtime. For cases where users might not want to use a Babel configuration file or are running Babel through another tool (such as Webpack with `babel-loader`).

**.eslintrc.js**

```js
module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      globalReturn: false,
    },
    babelOptions: {
      configFile: "path/to/config.js",
    },
  },
};
```

**.eslintrc.js using glob-based configuration**

This configuration would use the default parser for all files except for those found by the `"files/transformed/by/babel/*.js"` glob.

```js
module.exports = {
  rules: {
    indent: "error",
  },
  overrides: [
    {
      files: ["files/transformed/by/babel/*.js"],
      parser: "@babel/eslint-parser",
    },
  ],
};
```

**Monorepo configuration**

This configuration is useful for monorepo, when you are running ESLint on every package and not from the monorepo root folder, as it avoids to repeat the Babel and ESLint configuration on every package.

```js
module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    babelOptions: {
      rootMode: "upward",
    },
  },
};
```

### Run

```sh
$ ./node_modules/.bin/eslint yourfile.js
```

## TypeScript

While [`@babel/eslint-parser`](https://github.com/babel/babel/tree/main/eslint/babel-eslint-parser) can parse TypeScript, we don't currently support linting TypeScript using the rules in [`@babel/eslint-plugin`](https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin). This is because the TypeScript community has centered around [`@typescript-eslint`](https://github.com/typescript-eslint/typescript-eslint) and we want to avoid duplicate work. Additionally, since [`@typescript-eslint`](https://github.com/typescript-eslint/typescript-eslint) uses TypeScript under the hood, its rules can be made type-aware, which is something Babel doesn't have the ability to do.

## Questions and support

If you have an issue, please first check if it can be reproduced with the default parser and with the latest versions of `eslint` and `@babel/eslint-parser`. If it is not reproducible with the default parser, it is most likely an issue with `@babel/eslint-parser`.

For questions and support please visit the [`#discussion`](https://babeljs.slack.com/messages/discussion/) Babel Slack channel (sign up [here](https://slack.babeljs.io/)) or the [ESLint Discord server](https://eslint.org/chat).
