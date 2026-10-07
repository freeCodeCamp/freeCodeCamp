<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]
[![tests][tests]][tests-url]
[![cover][cover]][cover-url]
[![chat][chat]][chat-url]
[![size][size]][size-url]

# css-minimizer-webpack-plugin

This plugin uses [cssnano](https://cssnano.co) to optimize and minify your CSS.

Just like [optimize-css-assets-webpack-plugin](https://github.com/NMFR/optimize-css-assets-webpack-plugin) but more accurate with source maps and assets using query string, allows to cache and works in parallel mode.

## Getting Started

To begin, you'll need to install `css-minimizer-webpack-plugin`:

```console
$ npm install css-minimizer-webpack-plugin --save-dev
```

Then add the plugin to your `webpack` configuration. For example:

**webpack.config.js**

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  module: {
    loaders: [
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
};
```

This will enable CSS optimization only in production mode.
If you want to run it also in development set the `optimization.minimize` option to `true`.

And run `webpack` via your preferred method.

## Note about source maps

**Works only with `source-map`, `inline-source-map`, `hidden-source-map` and `nosources-source-map` values for the [`devtool`](https://webpack.js.org/configuration/devtool/) option.**

Why? Because CSS support only these source map types.

The plugin respect the [`devtool`](https://webpack.js.org/configuration/devtool/) and using the `SourceMapDevToolPlugin` plugin.
Using supported `devtool` values enable source map generation.
Using `SourceMapDevToolPlugin` with enabled the `columns` option enables source map generation.

Use source maps to map error message locations to modules (this slows down the compilation).
If you use your own `minify` function please read the `minify` section for handling source maps correctly.

## Options

### `test`

Type: `String|RegExp|Array<String|RegExp>` - default: `/\.css(\?.*)?$/i`

Test to match files against.

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        test: /\.foo\.css$/i,
      }),
    ],
  },
};
```

### `include`

Type: `String|RegExp|Array<String|RegExp>`
Default: `undefined`

Files to include.

**webpack.config.js**

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        include: /\/includes/,
      }),
    ],
  },
};
```

### `exclude`

Type: `String|RegExp|Array<String|RegExp>`
Default: `undefined`

Files to exclude.

**webpack.config.js**

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        exclude: /\/excludes/,
      }),
    ],
  },
};
```

### `parallel`

Type: `Boolean|Number`
Default: `true`

Use multi-process parallel running to improve the build speed.
Default number of concurrent runs: `os.cpus().length - 1`.

> ℹ️ Parallelization can speedup your build significantly and is therefore **highly recommended**.

#### `Boolean`

Enable/disable multi-process parallel running.

**webpack.config.js**

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        parallel: true,
      }),
    ],
  },
};
```

#### `Number`

Enable multi-process parallel running and set number of concurrent runs.

**webpack.config.js**

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        parallel: 4,
      }),
    ],
  },
};
```

### `minify`

Type: `Function|Array<Function>`
Default: `CssMinimizerPlugin.cssnanoMinify`

Allows to override default minify function.
By default plugin uses [cssnano](https://github.com/cssnano/cssnano) package.
Useful for using and testing unpublished versions or forks.

Possible options:

- CssMinimizerPlugin.cssnanoMinify
- CssMinimizerPlugin.cssoMinify
- CssMinimizerPlugin.cleanCssMinify
- async (data, inputMap, minimizerOptions) => {return {code: `a{color: red}`, map: `...`, warnings: []}}

> ⚠️ **Always use `require` inside `minify` function when `parallel` option enabled**.

#### `Function`

**webpack.config.js**

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          level: {
            1: {
              roundingPrecision: 'all=3,px=5',
            },
          },
        },
        minify: CssMinimizerPlugin.cleanCssMinify,
      }),
    ],
  },
};
```

#### `Array`

If an array of functions is passed to the `minify` option, the `minimizerOptions` must also be an array.
The function index in the `minify` array corresponds to the options object with the same index in the `minimizerOptions` array.

**webpack.config.js**

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: [
          {}, // Options for the first function (CssMinimizerPlugin.cssnanoMinify)
          {}, // Options for the second function (CssMinimizerPlugin.cleanCssMinify)
          {}, // Options for the third function
        ],
        minify: [
          CssMinimizerPlugin.cssnanoMinify,
          CssMinimizerPlugin.cleanCssMinify,
          async (data, inputMap, minimizerOptions) => {
            // To do something
            return {
              code: `a{color: red}`,
              map: `{"version": "3", ...}`,
              warnings: [],
            };
          },
        ],
      }),
    ],
  },
};
```

### `minimizerOptions`

Type: `Object|Array<Object>`
Default: `{ preset: 'default' }`

Cssnano optimisations [options](https://cssnano.co/docs/optimisations).

#### `Object`

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
  },
};
```

#### `Array`

The function index in the `minify` array corresponds to the options object with the same index in the `minimizerOptions` array.
If you use `minimizerOptions` like object, all `minify` function accept it.

#### `processorOptions`

Type: `Object`
Default: `{ to: assetName, from: assetName }`

Allows to specify options [`processoptions`](https://postcss.org/api/#processoptions) for the cssnano.
The `parser`,` stringifier` and `syntax` can be either a function or a string indicating the module that will be imported.

> ⚠️ **If a function is passed, the `parallel` option must be disabled.**.

```js
import sugarss from 'sugarss';

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        parallel: false,
        minimizerOptions: {
          processorOptions: {
            parser: sugarss,
          },
        },
      }),
    ],
  },
};
```

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          processorOptions: {
            parser: 'sugarss',
          },
        },
      }),
    ],
  },
};
```

### `warningsFilter`

Type: `Function<(warning, file, source) -> Boolean>`
Default: `() => true`

Allow to filter css-minimizer warnings (By default [cssnano](https://github.com/cssnano/cssnano)).
Return `true` to keep the warning, a falsy value (`false`/`null`/`undefined`) otherwise.

> ⚠️ The `source` argument will contain `undefined` if you don't use source maps.

**webpack.config.js**

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        warningsFilter: (warning, file, source) => {
          if (/Dropping unreachable code/i.test(warning)) {
            return true;
          }

          if (/file\.css/i.test(file)) {
            return true;
          }

          if (/source\.css/i.test(source)) {
            return true;
          }

          return false;
        },
      }),
    ],
  },
};
```

## Examples

### Use sourcemaps

Don't forget to enable `sourceMap` options for all loaders.

```js
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
};
```

### Remove all comments

Remove all comments (including comments starting with `/*!`).

```js
module.exports = {
  optimization: {
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
  },
};
```

### Using custom minifier [csso](https://github.com/css/csso)

By default plugin uses [cssnano](https://github.com/cssnano/cssnano) package.
It is possible to use another minify function.

> ⚠️ **Always use `require` inside `minify` function when `parallel` option enabled**.

**webpack.config.js**

```js
module.exports = {
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minify: async (data, inputMap) => {
          const csso = require('csso');
          const sourcemap = require('source-map');

          const [[filename, input]] = Object.entries(data);
          const minifiedCss = csso.minify(input, {
            filename: filename,
            sourceMap: true,
          });

          if (inputMap) {
            minifiedCss.map.applySourceMap(
              new sourcemap.SourceMapConsumer(inputMap),
              filename
            );
          }

          return {
            code: minifiedCss.css,
            map: minifiedCss.map.toJSON(),
          };
        },
      }),
    ],
  },
};
```

### Using custom minifier [clean-css](https://github.com/jakubpawlowicz/clean-css)

**webpack.config.js**

```js
module.exports = {
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minify: CssMinimizerPlugin.cleanCssMinify,
        // Uncomment this line for options
        // minimizerOptions: { compatibility: 'ie11,-properties.merging' },
      }),
    ],
  },
};
```

### Using custom minifier [csso](https://github.com/css/csso)

**webpack.config.js**

```js
module.exports = {
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minify: CssMinimizerPlugin.cssoMinify,
        // Uncomment this line for options
        // minimizerOptions: { restructure: false },
      }),
    ],
  },
};
```

## Contributing

Please take a moment to read our contributing guidelines if you haven't yet done so.

[CONTRIBUTING](./.github/CONTRIBUTING.md)

## License

[MIT](./LICENSE)

[npm]: https://img.shields.io/npm/v/css-minimizer-webpack-plugin.svg
[npm-url]: https://npmjs.com/package/css-minimizer-webpack-plugin
[node]: https://img.shields.io/node/v/css-minimizer-webpack-plugin.svg
[node-url]: https://nodejs.org
[deps]: https://david-dm.org/webpack-contrib/css-minimizer-webpack-plugin.svg
[deps-url]: https://david-dm.org/webpack-contrib/css-minimizer-webpack-plugin
[tests]: https://github.com/webpack-contrib/css-minimizer-webpack-plugin/workflows/css-minimizer-webpack-plugin/badge.svg
[tests-url]: https://github.com/webpack-contrib/css-minimizer-webpack-plugin/actions
[cover]: https://codecov.io/gh/webpack-contrib/css-minimizer-webpack-plugin/branch/master/graph/badge.svg
[cover-url]: https://codecov.io/gh/webpack-contrib/css-minimizer-webpack-plugin
[chat]: https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg
[chat-url]: https://gitter.im/webpack/webpack
[size]: https://packagephobia.now.sh/badge?p=css-minimizer-webpack-plugin
[size-url]: https://packagephobia.now.sh/result?p=css-minimizer-webpack-plugin
