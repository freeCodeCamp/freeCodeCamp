<div align="center">
  <a href="https://github.com/eslint/eslint"><img width="200" height="200" src="https://cdn.worldvectorlogo.com/logos/eslint.svg"></a>
  <a href="https://github.com/webpack/webpack"><img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg"></a>
</div>

[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]
[![tests][tests]][tests-url]
[![coverage][cover]][cover-url]
[![chat][chat]][chat-url]
[![size][size]][size-url]

# eslint-webpack-plugin

This plugin uses [`eslint`](https://eslint.org/) to find and fix problems in your JavaScript code

## Getting Started

To begin, you'll need to install `eslint-webpack-plugin`:

```bash
npm install eslint-webpack-plugin@2 --save-dev
```

**Note**: You also need to install `eslint >= 7` from npm, if you haven't already:

```bash
npm install eslint --save-dev
```

Then add the plugin to your webpack config. For example:

```js
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  // ...
  plugins: [new ESLintPlugin(options)],
  // ...
};
```

## Options

You can pass [eslint options](https://eslint.org/docs/developer-guide/nodejs-api#-new-eslintoptions).

Note that the config option you provide will be passed to the `ESLint` class.
This is a different set of options than what you'd specify in `package.json` or `.eslintrc`.
See the [eslint docs](https://eslint.org/docs/developer-guide/nodejs-api#-new-eslintoptions) for more details.

**Warning**: In eslint-webpack-plugin version 1 the options were passed to the now deprecated [CLIEngine](https://eslint.org/docs/developer-guide/nodejs-api#cliengine).

### `context`

- Type: `String`
- Default: `compiler.context`

A string indicating the root of your files.

### `eslintPath`

- Type: `String`
- Default: `eslint`

Path to `eslint` instance that will be used for linting. If the `eslintPath` is a folder like a official eslint, or specify a `formatter` option. now you don't have to install `eslint`.

### `extensions`

- Type: `String|Array[String]`
- Default: `'js'`

Specify extensions that should be checked.

### `exclude`

- Type: `String|Array[String]`
- Default: `'node_modules'`

Specify the files and/or directories to exclude. Must be relative to `options.context`.

### `files`

- Type: `String|Array[String]`
- Default: `null`

Specify directories, files, or globs. Must be relative to `options.context`.
Directories are traversed recursively looking for files matching `options.extensions`.
File and glob patterns ignore `options.extensions`.

### `fix`

- Type: `Boolean`
- Default: `false`

Will enable [ESLint autofix feature](https://eslint.org/docs/developer-guide/nodejs-api#-eslintoutputfixesresults).

**Be careful: this option will change source files.**

### `formatter`

- Type: `String|Function`
- Default: `'stylish'`

Accepts a function that will have one argument: an array of eslint messages (object). The function must return the output as a string. You can use official [eslint formatters](https://eslint.org/docs/user-guide/formatters/).

### `lintDirtyModulesOnly`

- Type: `Boolean`
- Default: `false`

Lint only changed files, skip lint on start.

### `threads`

- Type: `Boolean | Number`
- Default: `false`

Will run lint tasks across a thread pool. The pool size is automatic unless you specify a number.

### Errors and Warning

**By default the plugin will auto adjust error reporting depending on eslint errors/warnings counts.**
You can still force this behavior by using `emitError` **or** `emitWarning` options:

#### `emitError`

- Type: `Boolean`
- Default: `true`

The errors found will always be emitted, to disable set to `false`.

#### `emitWarning`

- Type: `Boolean`
- Default: `true`

The warnings found will always be emitted, to disable set to `false`.

#### `failOnError`

- Type: `Boolean`
- Default: `true`

Will cause the module build to fail if there are any errors, to disable set to `false`.

#### `failOnWarning`

- Type: `Boolean`
- Default: `false`

Will cause the module build to fail if there are any warnings, if set to `true`.

#### `quiet`

- Type: `Boolean`
- Default: `false`

Will process and report errors only and ignore warnings, if set to `true`.

#### `outputReport`

- Type: `Boolean|Object`
- Default: `false`

Write the output of the errors to a file, for example a checkstyle xml file for use for reporting on Jenkins CI.

The `filePath` is an absolute path or relative to the webpack config: `output.path`.
You can pass in a different `formatter` for the output file,
if none is passed in the default/configured formatter will be used.

## Changelog

[Changelog](CHANGELOG.md)

## License

[MIT](./LICENSE)

[npm]: https://img.shields.io/npm/v/eslint-webpack-plugin/2x.svg
[npm-url]: https://npmjs.com/package/eslint-webpack-plugin/v/2x
[node]: https://img.shields.io/node/v/eslint-webpack-plugin/2x.svg
[node-url]: https://nodejs.org
[deps]: https://david-dm.org/webpack-contrib/eslint-webpack-plugin.svg
[deps-url]: https://david-dm.org/webpack-contrib/eslint-webpack-plugin
[tests]: https://github.com/webpack-contrib/eslint-webpack-plugin/workflows/eslint-webpack-plugin/badge.svg?branch=2.x
[tests-url]: https://github.com/webpack-contrib/eslint-webpack-plugin/actions
[cover]: https://codecov.io/gh/webpack-contrib/eslint-webpack-plugin/branch/2.x/graph/badge.svg
[cover-url]: https://codecov.io/gh/webpack-contrib/eslint-webpack-plugin/branch/2.x
[chat]: https://badges.gitter.im/webpack/webpack.svg
[chat-url]: https://gitter.im/webpack/webpack
[size]: https://packagephobia.now.sh/badge?p=eslint-webpack-plugin
[size-url]: https://packagephobia.now.sh/result?p=eslint-webpack-plugin
