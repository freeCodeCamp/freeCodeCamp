<div align="center">
  <img width="200" height="200"
    src="https://cdn3.iconfinder.com/data/icons/lexter-flat-colorfull-file-formats/56/raw-256.png">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200"
      src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]
[![tests][tests]][tests-url]
[![coverage][cover]][cover-url]
[![chat][chat]][chat-url]
[![size][size]][size-url]

# raw-loader

A loader for webpack that allows importing files as a String.

## Getting Started

To begin, you'll need to install `raw-loader`:

```console
$ npm install raw-loader --save-dev
```

Then add the loader to your `webpack` config. For example:

**file.js**

```js
import txt from './file.txt';
```

**webpack.config.js**

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.txt$/i,
        use: 'raw-loader',
      },
    ],
  },
};
```

And run `webpack` via your preferred method.

## Options

|            Name             |    Type     | Default | Description            |
| :-------------------------: | :---------: | :-----: | :--------------------- |
| **[`esModule`](#esmodule)** | `{Boolean}` | `true`  | Uses ES modules syntax |

### `esModule`

Type: `Boolean`
Default: `true`

By default, `raw-loader` generates JS modules that use the ES modules syntax.
There are some cases in which using ES modules is beneficial, like in the case of [module concatenation](https://webpack.js.org/plugins/module-concatenation-plugin/) and [tree shaking](https://webpack.js.org/guides/tree-shaking/).

You can enable a CommonJS module syntax using:

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.txt$/i,
        use: [
          {
            loader: 'raw-loader',
            options: {
              esModule: false,
            },
          },
        ],
      },
    ],
  },
};
```

## Examples

### Inline

```js
import txt from 'raw-loader!./file.txt';
```

Beware, if you already define loader(s) for extension(s) in `webpack.config.js` you should use:

```js
import css from '!!raw-loader!./file.txt'; // Adding `!!` to a request will disable all loaders specified in the configuration
```

## Contributing

Please take a moment to read our contributing guidelines if you haven't yet done so.

[CONTRIBUTING](./.github/CONTRIBUTING.md)

## License

[MIT](./LICENSE)

[npm]: https://img.shields.io/npm/v/raw-loader.svg
[npm-url]: https://npmjs.com/package/raw-loader
[node]: https://img.shields.io/node/v/raw-loader.svg
[node-url]: https://nodejs.org
[deps]: https://david-dm.org/webpack-contrib/raw-loader.svg
[deps-url]: https://david-dm.org/webpack-contrib/raw-loader
[tests]: https://github.com/webpack-contrib/raw-loader/workflows/raw-loader/badge.svg
[tests-url]: https://github.com/webpack-contrib/raw-loader/actions
[cover]: https://codecov.io/gh/webpack-contrib/raw-loader/branch/master/graph/badge.svg
[cover-url]: https://codecov.io/gh/webpack-contrib/raw-loader
[chat]: https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg
[chat-url]: https://gitter.im/webpack/webpack
[size]: https://packagephobia.now.sh/badge?p=raw-loader
[size-url]: https://packagephobia.now.sh/result?p=raw-loader
