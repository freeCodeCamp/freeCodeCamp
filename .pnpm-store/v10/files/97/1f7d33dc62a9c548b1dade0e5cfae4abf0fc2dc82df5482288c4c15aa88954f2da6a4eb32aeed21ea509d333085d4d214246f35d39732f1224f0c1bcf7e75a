<div align="center">
  <img 
    width="180" 
    height="180" 
    hspace="10"
    alt="PostCSS Logo"
    src="https://api.postcss.org/logo.svg">
  <a href="https://github.com/webpack/webpack">
    <img 
      width="200" 
      height="200" 
      hspace="10"
      src="https://cdn.rawgit.com/webpack/media/e7485eb2/logo/icon.svg">
  </a>
  <div align="center">
    <a href="https://evilmartians.com/?utm_source=postcss">
      <img 
        src="https://evilmartians.com/badges/sponsored-by-evil-martians.svg"
        alt="Sponsored by Evil Martians" 
        width="236" 
        height="54" 
        vspace="10">
    </a>
  </div>
</div>

[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]
[![tests][tests]][tests-url]
[![coverage][cover]][cover-url]
[![size][size]][size-url]

Webpack chat: [![chat][chat]][chat-url]

PostCSS chat: [![chat-postcss][chat-postcss]][chat-postcss-url]

# postcss-loader

Loader to process CSS with [`PostCSS`](https://github.com/postcss/postcss).

## Getting Started

To begin, you'll need to install `postcss-loader` and `postcss`:

```console
npm install --save-dev postcss-loader postcss
```

Then add the plugin to your `webpack` config. For example:

**file.js**

```js
import css from "file.css";
```

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
    ],
  },
};
```

Alternative use with [config files](#config):

**postcss.config.js**

```js
module.exports = {
  plugins: [
    [
      "postcss-preset-env",
      {
        // Options
      },
    ],
  ],
};
```

The loader **automatically** searches for configuration files.

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
};
```

And run `webpack` via your preferred method.

## Options

|                Name                 |         Type         |                Default                | Description                                  |
| :---------------------------------: | :------------------: | :-----------------------------------: | :------------------------------------------- |
|        [`execute`](#execute)        |     `{Boolean}`      |              `undefined`              | Enable PostCSS Parser support in `CSS-in-JS` |
| [`postcssOptions`](#postcssOptions) | `{Object\|Function}` | `defaults values for Postcss.process` | Set `PostCSS` options and plugins            |
|      [`sourceMap`](#sourcemap)      |     `{Boolean}`      |          `compiler.devtool`           | Enables/Disables generation of source maps   |

### `execute`

Type: `Boolean`
Default: `undefined`

If you use JS styles the [`postcss-js`](https://github.com/postcss/postcss-js) parser, add the `execute` option.

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.style.js$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                parser: "postcss-js",
              },
              execute: true,
            },
          },
        ],
      },
    ],
  },
};
```

### `postcssOptions`

Type: `Object|Function`
Default: `undefined`

Allows to set [`PostCSS options`](https://postcss.org/api/#processoptions) and plugins.

All `PostCSS` options are supported.
There is the special `config` option for config files. How it works and how it can be configured is described below.

We recommend do not specify `from`, `to` and `map` options, because this can lead to wrong path in source maps.
If you need source maps please use the [`sourcemap`](#sourcemap) option.

#### `Object`

Setup `plugins`:

**webpack.config.js** (**recommended**)

```js
const myOtherPostcssPlugin = require("postcss-my-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.sss$/i,
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            plugins: [
              "postcss-import",
              ["postcss-short", { prefix: "x" }],
              require.resolve("my-postcss-plugin"),
              myOtherPostcssPlugin({ myOption: true }),
              // Deprecated and will be removed in the next major release
              { "postcss-nested": { preserveEmpty: true } },
            ],
          },
        },
      },
    ],
  },
};
```

**webpack.config.js** (**deprecated**, will be removed in the next major release)

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.sss$/i,
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            plugins: {
              "postcss-import": {},
              "postcss-short": { prefix: "x" },
            },
          },
        },
      },
    ],
  },
};
```

Setup `syntax`:

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.sss$/i,
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            // Can be `String`
            syntax: "sugarss",
            // Can be `Object`
            syntax: require("sugarss"),
          },
        },
      },
    ],
  },
};
```

Setup `parser`:

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.sss$/i,
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            // Can be `String`
            parser: "sugarss",
            // Can be `Object`
            parser: require("sugarss"),
            // Can be `Function`
            parser: require("sugarss").parse,
          },
        },
      },
    ],
  },
};
```

Setup `stringifier`:

**webpack.config.js**

```js
const Midas = require("midas");
const midas = new Midas();

module.exports = {
  module: {
    rules: [
      {
        test: /\.sss$/i,
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            // Can be `String`
            stringifier: "sugarss",
            // Can be `Object`
            stringifier: require("sugarss"),
            // Can be `Function`
            stringifier: midas.stringifier,
          },
        },
      },
    ],
  },
};
```

#### `Function`

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(css|sss)$/i,
        loader: "postcss-loader",
        options: {
          postcssOptions: (loaderContext) => {
            if (/\.sss$/.test(loaderContext.resourcePath)) {
              return {
                parser: "sugarss",
                plugins: [
                  ["postcss-short", { prefix: "x" }],
                  "postcss-preset-env",
                ],
              };
            }

            return {
              plugins: [
                ["postcss-short", { prefix: "x" }],
                "postcss-preset-env",
              ],
            };
          },
        },
      },
    ],
  },
};
```

#### `config`

Type: `Boolean|String`
Default: `undefined`

Allows to set options using config files.
Options specified in the config file are combined with options passed to the loader, the loader options overwrite options from config.

##### Config Files

The loader will search up the directory tree for configuration in the following places:

- a `postcss` property in `package.json`
- a `.postcssrc` file in JSON or YAML format
- a `.postcssrc.json`, `.postcssrc.yaml`, `.postcssrc.yml`, `.postcssrc.js`, or `.postcssrc.cjs` file
- a `postcss.config.js` or `postcss.config.cjs` CommonJS module exporting an object (**recommended**)

##### Examples of Config Files

Using `Object` notation:

**postcss.config.js** (**recommend**)

```js
module.exports = {
  // You can specify any options from https://postcss.org/api/#processoptions here
  // parser: 'sugarss',
  plugins: [
    // Plugins for PostCSS
    ["postcss-short", { prefix: "x" }],
    "postcss-preset-env",
  ],
};
```

Using `Function` notation:

**postcss.config.js** (**recommend**)

```js
module.exports = (api) => {
  // `api.file` - path to the file
  // `api.mode` - `mode` value of webpack, please read https://webpack.js.org/configuration/mode/
  // `api.webpackLoaderContext` - loader context for complex use cases
  // `api.env` - alias `api.mode` for compatibility with `postcss-cli`
  // `api.options` - the `postcssOptions` options

  if (/\.sss$/.test(api.file)) {
    return {
      // You can specify any options from https://postcss.org/api/#processoptions here
      parser: "sugarss",
      plugins: [
        // Plugins for PostCSS
        ["postcss-short", { prefix: "x" }],
        "postcss-preset-env",
      ],
    };
  }

  return {
    // You can specify any options from https://postcss.org/api/#processoptions here
    plugins: [
      // Plugins for PostCSS
      ["postcss-short", { prefix: "x" }],
      "postcss-preset-env",
    ],
  };
};
```

**postcss.config.js** (**deprecated**, will be removed in the next major release)

```js
module.exports = {
  // You can specify any options from https://postcss.org/api/#processoptions here
  // parser: 'sugarss',
  plugins: {
    // Plugins for PostCSS
    "postcss-short": { prefix: "x" },
    "postcss-preset-env": {},
  },
};
```

##### Config Cascade

You can use different `postcss.config.js` files in different directories.
Config lookup starts from `path.dirname(file)` and walks the file tree upwards until a config file is found.

```
|– components
| |– component
| | |– index.js
| | |– index.png
| | |– style.css (1)
| | |– postcss.config.js (1)
| |– component
| | |– index.js
| | |– image.png
| | |– style.css (2)
|
|– postcss.config.js (1 && 2 (recommended))
|– webpack.config.js
|
|– package.json
```

After setting up your `postcss.config.js`, add `postcss-loader` to your `webpack.config.js`.
You can use it standalone or in conjunction with `css-loader` (recommended).

Use it **before** `css-loader` and `style-loader`, but **after** other preprocessor loaders like e.g `sass|less|stylus-loader`, if you use any (since [webpack loaders evaluate right to left/bottom to top](https://webpack.js.org/concepts/loaders/#configuration)).

**webpack.config.js** (**recommended**)

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },
};
```

#### Boolean

Enables/Disables autoloading config.

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            config: false,
          },
        },
      },
    ],
  },
};
```

#### String

Allows to specify the path to the config file.

**webpack.config.js**

```js
const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            config: path.resolve(__dirname, "custom.config.js"),
          },
        },
      },
    ],
  },
};
```

### `sourceMap`

Type: `Boolean`
Default: depends on the `compiler.devtool` value

By default generation of source maps depends on the [`devtool`](https://webpack.js.org/configuration/devtool/) option.
All values enable source map generation except `eval` and `false` value.

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { sourceMap: true } },
          { loader: "postcss-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
    ],
  },
};
```

Alternative setup:

**webpack.config.js**

```js
module.exports = {
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
};
```

### `implementation`

Type: `Function`

The special `implementation` option determines which implementation of PostCSS to use. Overrides the locally installed `peerDependency` version of `postcss`.

**This option is only really useful for downstream tooling authors to ease the PostCSS 7-to-8 transition.**

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: { implementation: require("postcss") },
          },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
};
```

## Examples

### SugarSS

You'll need to install `sugarss`:

```console
npm install --save-dev sugarss
```

Using [`SugarSS`](https://github.com/postcss/sugarss) syntax.

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.sss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                parser: "sugarss",
              },
            },
          },
        ],
      },
    ],
  },
};
```

### Autoprefixer

You'll need to install `autoprefixer`:

```console
npm install --save-dev autoprefixer
```

Add vendor prefixes to CSS rules using [`autoprefixer`](https://github.com/postcss/autoprefixer).

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "autoprefixer",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
    ],
  },
};
```

> :warning: [`postcss-preset-env`](https://github.com/csstools/postcss-preset-env) includes [`autoprefixer`](https://github.com/postcss/autoprefixer), so adding it separately is not necessary if you already use the preset. More [information](https://github.com/csstools/postcss-preset-env#autoprefixer)

### PostCSS Preset Env

You'll need to install `postcss-preset-env`:

```console
npm install --save-dev postcss-preset-env
```

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
    ],
  },
};
```

### CSS Modules

What is `CSS Modules`? Please [read](https://github.com/webpack-contrib/css-loader#modules).

No additional options required on the `postcss-loader` side.
To make them work properly, either add the `css-loader`’s `importLoaders` option.

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },
};
```

### CSS-in-JS and [`postcss-js`](https://github.com/postcss/postcss-js)

You'll need to install `postcss-js`:

```console
npm install --save-dev postcss-js
```

If you want to process styles written in JavaScript, use the [`postcss-js`](https://github.com/postcss/postcss-js) parser.

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.style.js$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                parser: "postcss-js",
              },
              execute: true,
            },
          },
          "babel-loader",
        ],
      },
    ],
  },
};
```

As result you will be able to write styles in the following way

```js
import colors from "./styles/colors";

export default {
  ".menu": {
    color: colors.main,
    height: 25,
    "&_link": {
      color: "white",
    },
  },
};
```

> :warning: If you are using Babel you need to do the following in order for the setup to work

> 1. Add [`babel-plugin-add-module-exports`](https://github.com/59naga/babel-plugin-add-module-exports) to your configuration.
> 2. You need to have only one **default** export per style module.

### Extract CSS

Using [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin).

**webpack.config.js**

```js
const isProductionMode = process.env.NODE_ENV === "production";

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: isProductionMode ? "production" : "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          isProductionMode ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isProductionMode ? "[name].[contenthash].css" : "[name].css",
    }),
  ],
};
```

### Emit assets

To write a asset from PostCSS plugin to the webpack, need to add a message in `result.messages`.

The message should contain the following fields:

- `type` = `asset` - Message type (require, should be equal `asset`)
- `file` - file name (require)
- `content` - file content (require)
- `sourceMap` - sourceMap
- `info` - asset info

**webpack.config.js**

```js
const customPlugin = () => (css, result) => {
  result.messages.push({
    type: "asset",
    file: "sprite.svg",
    content: "<svg>...</svg>",
  });
};

const postcssPlugin = postcss.plugin("postcss-assets", customPlugin);

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [postcssPlugin()],
              },
            },
          },
        ],
      },
    ],
  },
};
```

### Add dependencies, contextDependencies, buildDependencies, missingDependencies

The dependencies are necessary for webpack to understand when it needs to run recompilation on the changed files.

There are two way to add dependencies:

1. (Recommended). The plugin may emit messages in `result.messages`.

The message should contain the following fields:

- `type` = `dependency` - Message type (require, should be equal `dependency`, `context-dependency`, `build-dependency` or `missing-dependency`)
- `file` - absolute file path (require)

**webpack.config.js**

```js
const path = require("path");

const customPlugin = () => (css, result) => {
  result.messages.push({
    type: "dependency",
    file: path.resolve(__dirname, "path", "to", "file"),
  });
};

const postcssPlugin = postcss.plugin("postcss-assets", customPlugin);

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [postcssPlugin()],
              },
            },
          },
        ],
      },
    ],
  },
};
```

2. Pass `loaderContext` in plugin.

**webpack.config.js**

```js
const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, "path/to/postcss.config.js"),
              },
            },
          },
        ],
      },
    ],
  },
};
```

**postcss.config.js**

```js
module.exports = (api) => ({
  plugins: [
    require("path/to/customPlugin")({
      loaderContext: api.webpackLoaderContext,
    }),
  ],
});
```

**customPlugin.js**

```js
const path = require("path");

const customPlugin = (loaderContext) => (css, result) => {
  loaderContext.webpack.addDependency(
    path.resolve(__dirname, "path", "to", "file")
  );
};

module.exports = postcss.plugin("postcss-assets", customPlugin);
```

## Contributing

Please take a moment to read our contributing guidelines if you haven't yet done so.

[CONTRIBUTING](./.github/CONTRIBUTING.md)

## License

[MIT](./LICENSE)

[npm]: https://img.shields.io/npm/v/postcss-loader.svg
[npm-url]: https://npmjs.com/package/postcss-loader
[node]: https://img.shields.io/node/v/postcss-loader.svg
[node-url]: https://nodejs.org
[deps]: https://david-dm.org/webpack-contrib/postcss-loader.svg
[deps-url]: https://david-dm.org/webpack-contrib/postcss-loader
[tests]: https://github.com/webpack-contrib/postcss-loader/workflows/postcss-loader/badge.svg
[tests-url]: https://github.com/webpack-contrib/postcss-loader/actions
[cover]: https://codecov.io/gh/webpack-contrib/postcss-loader/branch/master/graph/badge.svg
[cover-url]: https://codecov.io/gh/webpack-contrib/postcss-loader
[chat]: https://badges.gitter.im/webpack/webpack.svg
[chat-url]: https://gitter.im/webpack/webpack
[chat-postcss]: https://badges.gitter.im/postcss/postcss.svg
[chat-postcss-url]: https://gitter.im/postcss/postcss
[size]: https://packagephobia.now.sh/badge?p=postcss-loader
[size-url]: https://packagephobia.now.sh/result?p=postcss-loader
