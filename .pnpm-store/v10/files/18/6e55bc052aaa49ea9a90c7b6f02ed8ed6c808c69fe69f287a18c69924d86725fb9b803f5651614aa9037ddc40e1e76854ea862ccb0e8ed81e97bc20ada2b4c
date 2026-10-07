<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

[![npm][npm]][npm-url]
[![node][node]][node-url]
[![tests][tests]][tests-url]
[![cover][cover]][cover-url]
[![discussion][discussion]][discussion-url]
[![size][size]][size-url]

# terser-webpack-plugin

This plugin uses [terser](https://github.com/terser/terser) to minify/minimize your JavaScript.

## Getting Started

Webpack v5 comes with the latest `terser-webpack-plugin` out of the box.
If you are using Webpack v5 or above and wish to customize the options, you will still need to install `terser-webpack-plugin`.
Using Webpack v4, you have to install `terser-webpack-plugin` v4.

To begin, you'll need to install `terser-webpack-plugin`:

```console
npm install terser-webpack-plugin --save-dev
```

or

```console
yarn add -D terser-webpack-plugin
```

or

```console
pnpm add -D terser-webpack-plugin
```

Then add the plugin to your `webpack` configuration. For example:

**webpack.config.js**

```js
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
```

Finally, run `webpack` using the method you normally use (e.g., via CLI or an npm script).

## Note about source maps

**Works only with `source-map`, `inline-source-map`, `hidden-source-map` and `nosources-source-map` values for the [`devtool`](https://webpack.js.org/configuration/devtool/) option.**

Why?

- `eval` wraps modules in `eval("string")` and the minimizer does not handle strings.
- `cheap` has no column information and the minimizer generates only a single line, which leaves only a single mapping.

Using supported `devtool` values enable source map generation.

## Options

- **[`test`](#test)**
- **[`include`](#include)**
- **[`exclude`](#exclude)**
- **[`parallel`](#parallel)**
- **[`minify`](#minify)**
- **[`terserOptions`](#terseroptions)**
- **[`extractComments`](#extractcomments)**

### `test`

Type:

```ts
type test = string | RegExp | (string | RegExp)[];
```

Default: `/\.m?js(\?.*)?$/i`

Test to match files against.

**webpack.config.js**

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
  },
};
```

### `include`

Type:

```ts
type include = string | RegExp | (string | RegExp)[];
```

Default: `undefined`

Files to include.

**webpack.config.js**

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\/includes/,
      }),
    ],
  },
};
```

### `exclude`

Type:

```ts
type exclude = string | RegExp | (string | RegExp)[];
```

Default: `undefined`

Files to exclude.

**webpack.config.js**

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        exclude: /\/excludes/,
      }),
    ],
  },
};
```

### `parallel`

Type:

```ts
type parallel = boolean | number;
```

Default: `true`

Use multi-process parallel running to improve the build speed.

Default number of concurrent runs: `os.cpus().length - 1` or `os.availableParallelism() - 1` (if this function is supported).

> **Note**
>
> Parallelization can speedup your build significantly and is therefore **highly recommended**.

> **Warning**
>
> If you use **Circle CI** or any other environment that doesn't provide the real available count of CPUs then you need to explicitly set up the number of CPUs to avoid `Error: Call retries were exceeded` (see [#143](https://github.com/webpack/terser-webpack-plugin/issues/143), [#202](https://github.com/webpack/terser-webpack-plugin/issues/202)).

#### `boolean`

Enable/disable multi-process parallel running.

**webpack.config.js**

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
    ],
  },
};
```

#### `number`

Enable multi-process parallel running and set number of concurrent runs.

**webpack.config.js**

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: 4,
      }),
    ],
  },
};
```

### `minify`

Type:

```ts
type minify = (
  input: Record<string, string>,
  sourceMap: import("@jridgewell/trace-mapping").SourceMapInput | undefined,
  minifyOptions: {
    module?: boolean | undefined;
    ecma?: import("terser").ECMA | undefined;
  },
  extractComments:
    | boolean
    | "all"
    | "some"
    | RegExp
    | ((
        astNode: any,
        comment: {
          value: string;
          type: "comment1" | "comment2" | "comment3" | "comment4";
          pos: number;
          line: number;
          col: number;
        },
      ) => boolean)
    | {
        condition?:
          | boolean
          | "all"
          | "some"
          | RegExp
          | ((
              astNode: any,
              comment: {
                value: string;
                type: "comment1" | "comment2" | "comment3" | "comment4";
                pos: number;
                line: number;
                col: number;
              },
            ) => boolean)
          | undefined;
        filename?: string | ((fileData: any) => string) | undefined;
        banner?:
          | string
          | boolean
          | ((commentsFile: string) => string)
          | undefined;
      }
    | undefined,
) => Promise<{
  code: string;
  map?: import("@jridgewell/trace-mapping").SourceMapInput | undefined;
  errors?: (string | Error)[] | undefined;
  warnings?: (string | Error)[] | undefined;
  extractedComments?: string[] | undefined;
}>;
```

Default: `TerserPlugin.terserMinify`

Allows you to override the default minify function.
By default plugin uses [terser](https://github.com/terser/terser) package.
Useful for using and testing unpublished versions or forks.

> **Warning**
>
> **Always use `require` inside `minify` function when `parallel` option enabled**.

**webpack.config.js**

```js
// Can be async
const minify = (input, sourceMap, minimizerOptions, extractsComments) => {
  // The `minimizerOptions` option contains option from the `terserOptions` option
  // You can use `minimizerOptions.myCustomOption`

  // Custom logic for extract comments
  const { map, code } = require("uglify-module") // Or require('./path/to/uglify-module')
    .minify(input, {
      /* Your options for minification */
    });

  return { map, code, warnings: [], errors: [], extractedComments: [] };
};

// Used to regenerate `fullhash`/`chunkhash` between different implementation
// Example: you fix a bug in custom minimizer/custom function, but unfortunately webpack doesn't know about it, so you will get the same fullhash/chunkhash
// to avoid this you can provide version of your custom minimizer
// You don't need if you use only `contenthash`
minify.getMinimizerVersion = () => {
  let packageJson;

  try {
    packageJson = require("uglify-module/package.json");
  } catch (error) {
    // Ignore
  }

  return packageJson && packageJson.version;
};

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          myCustomOption: true,
        },
        minify,
      }),
    ],
  },
};
```

### `terserOptions`

Type:

```ts
interface terserOptions {
  compress?: boolean | CompressOptions;
  ecma?: ECMA;
  enclose?: boolean | string;
  ie8?: boolean;
  keep_classnames?: boolean | RegExp;
  keep_fnames?: boolean | RegExp;
  mangle?: boolean | MangleOptions;
  module?: boolean;
  nameCache?: object;
  format?: FormatOptions;
  /** @deprecated */
  output?: FormatOptions;
  parse?: ParseOptions;
  safari10?: boolean;
  sourceMap?: boolean | SourceMapOptions;
  toplevel?: boolean;
}
```

Default: [default](https://github.com/terser/terser#minify-options)

Terser [options](https://github.com/terser/terser#minify-options).

**webpack.config.js**

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: undefined,
          parse: {},
          compress: {},
          mangle: true, // Note `mangle.properties` is `false` by default.
          module: false,
          // Deprecated
          output: null,
          format: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_classnames: undefined,
          keep_fnames: false,
          safari10: false,
        },
      }),
    ],
  },
};
```

### `extractComments`

Type:

```ts
type extractComments =
  | boolean
  | string
  | RegExp
  | ((
      astNode: any,
      comment: {
        value: string;
        type: "comment1" | "comment2" | "comment3" | "comment4";
        pos: number;
        line: number;
        col: number;
      },
    ) => boolean)
  | {
      condition?:
        | boolean
        | "all"
        | "some"
        | RegExp
        | ((
            astNode: any,
            comment: {
              value: string;
              type: "comment1" | "comment2" | "comment3" | "comment4";
              pos: number;
              line: number;
              col: number;
            },
          ) => boolean)
        | undefined;
      filename?: string | ((fileData: any) => string) | undefined;
      banner?:
        | string
        | boolean
        | ((commentsFile: string) => string)
        | undefined;
    };
```

Default: `true`

Whether comments shall be extracted to a separate file, (see [details](https://github.com/webpack/webpack/commit/71933e979e51c533b432658d5e37917f9e71595a)).

By default, extract only comments using `/^\**!|@preserve|@license|@cc_on/i` RegExp condition and remove remaining comments.

If the original file is named `foo.js`, then the comments will be stored to `foo.js.LICENSE.txt`.

The `terserOptions.format.comments` option specifies whether the comment will be preserved - i.e., it is possible to preserve some comments (e.g. annotations) while extracting others, or even preserve comments that have already been extracted.

#### `boolean`

Enable/disable extracting comments.

**webpack.config.js**

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: true,
      }),
    ],
  },
};
```

#### `string`

Extract `all` or `some` (use the `/^\**!|@preserve|@license|@cc_on/i` RegExp) comments.

**webpack.config.js**

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: "all",
      }),
    ],
  },
};
```

#### `RegExp`

All comments that match the given expression will be extracted to a separate file.

**webpack.config.js**

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: /@extract/i,
      }),
    ],
  },
};
```

#### `function`

All comments that match the given expression will be extracted to a separate file.

**webpack.config.js**

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: (astNode, comment) => {
          if (/@extract/i.test(comment.value)) {
            return true;
          }

          return false;
        },
      }),
    ],
  },
};
```

#### `object`

Allows you to customize condition for extracting comments, and specify the extracted file name and banner.

**webpack.config.js**

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: {
          condition: /^\**!|@preserve|@license|@cc_on/i,
          filename: (fileData) =>
            // The "fileData" argument contains object with "filename", "basename", "query" and "hash"
            `${fileData.filename}.LICENSE.txt${fileData.query}`,
          banner: (licenseFile) =>
            `License information can be found in ${licenseFile}`,
        },
      }),
    ],
  },
};
```

##### `condition`

Type:

```ts
type condition =
  | boolean
  | "all"
  | "some"
  | RegExp
  | ((
      astNode: any,
      comment: {
        value: string;
        type: "comment1" | "comment2" | "comment3" | "comment4";
        pos: number;
        line: number;
        col: number;
      },
    ) => boolean)
  | undefined;
```

The condition that determines which comments should be extracted.

**webpack.config.js**

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: {
          condition: "some",
          filename: (fileData) =>
            // The "fileData" argument contains object with "filename", "basename", "query" and "hash"
            `${fileData.filename}.LICENSE.txt${fileData.query}`,
          banner: (licenseFile) =>
            `License information can be found in ${licenseFile}`,
        },
      }),
    ],
  },
};
```

##### `filename`

Type:

```ts
type filename = string | ((fileData: any) => string) | undefined;
```

Default: `[file].LICENSE.txt[query]`

Available placeholders: `[file]`, `[query]` and `[filebase]` (`[base]` for webpack 5).

The file where the extracted comments will be stored.

Default is to append the suffix `.LICENSE.txt` to the original filename.

> **Warning**
>
> We highly recommend using the `.txt` extension. Using `.js`/`.cjs`/`.mjs` extensions may conflict with existing assets, which leads to broken code.

**webpack.config.js**

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: {
          condition: /^\**!|@preserve|@license|@cc_on/i,
          filename: "extracted-comments.js",
          banner: (licenseFile) =>
            `License information can be found in ${licenseFile}`,
        },
      }),
    ],
  },
};
```

##### `banner`

Type:

```ts
type banner = string | boolean | ((commentsFile: string) => string) | undefined;
```

Default: `/*! For license information please see ${commentsFile} */`

The banner text that points to the extracted file and will be added at the top of the original file.

It can be `false` (no banner), a `String`, or a `function<(string) -> String>` that will be called with the filename where the extracted comments have been stored.

The banner will be wrapped in a comment.

**webpack.config.js**

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: {
          condition: true,
          filename: (fileData) =>
            // The "fileData" argument contains object with "filename", "basename", "query" and "hash"
            `${fileData.filename}.LICENSE.txt${fileData.query}`,
          banner: (commentsFile) =>
            `My custom banner about license information ${commentsFile}`,
        },
      }),
    ],
  },
};
```

## Examples

### Preserve Comments

Extract all legal comments (i.e. `/^\**!|@preserve|@license|@cc_on/i`) and preserve `/@license/i` comments.

**webpack.config.js**

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: /@license/i,
          },
        },
        extractComments: true,
      }),
    ],
  },
};
```

### Remove Comments

If you want to build without comments, use this config:

**webpack.config.js**

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
};
```

### [`uglify-js`](https://github.com/mishoo/UglifyJS)

[`UglifyJS`](https://github.com/mishoo/UglifyJS) is a JavaScript parser, minifier, compressor and beautifier toolkit.

**webpack.config.js**

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        minify: TerserPlugin.uglifyJsMinify,
        // `terserOptions` options will be passed to `uglify-js`
        // Link to options - https://github.com/mishoo/UglifyJS#minify-options
        terserOptions: {},
      }),
    ],
  },
};
```

### [`swc`](https://github.com/swc-project/swc)

[`swc`](https://github.com/swc-project/swc) is a super-fast compiler written in `Rust`, producing widely supported JavaScript from modern standards and TypeScript.

> **Warning**
>
> The `extractComments` option is not supported, and all comments will be removed by default. This will be fixed in future

**webpack.config.js**

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        minify: TerserPlugin.swcMinify,
        // `terserOptions` options will be passed to `swc` (`@swc/core`)
        // Link to options - https://swc.rs/docs/config-js-minify
        terserOptions: {},
      }),
    ],
  },
};
```

### [`esbuild`](https://github.com/evanw/esbuild)

[`esbuild`](https://github.com/evanw/esbuild) is an extremely fast JavaScript bundler and minifier.

> **Warning**
>
> The `extractComments` option is not supported, and all legal comments (i.e. copyright, licenses and etc) will be preserved.

**webpack.config.js**

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        minify: TerserPlugin.esbuildMinify,
        // `terserOptions` options will be passed to `esbuild`
        // Link to options - https://esbuild.github.io/api/#minify
        // Note: the `minify` options is true by default (and override other `minify*` options), so if you want to disable the `minifyIdentifiers` option (or other `minify*` options) please use:
        // terserOptions: {
        //   minify: false,
        //   minifyWhitespace: true,
        //   minifyIdentifiers: false,
        //   minifySyntax: true,
        // },
        terserOptions: {},
      }),
    ],
  },
};
```

### JSON

Uses `JSON.stringify()` to minify your JSON files during the build process.

**webpack.config.js**

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      // Keeps original terser plugin to minify JS files
      "...",
      // Will minify JSON files (they can come from copy-webpack-plugin or when you are using asset modules)
      new TerserPlugin({
        test: /\.json$/,
        minify: TerserPlugin.jsonMinify,
        // We are supporting `space` and `replacer` options, you can set them below
        terserOptions: {},
      }),
    ],
  },
};
```

### Custom Minify Function

Override the default minify function - use `uglify-js` for minification.

**webpack.config.js**

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        minify: (file, sourceMap) => {
          // https://github.com/mishoo/UglifyJS2#minify-options
          const uglifyJsOptions = {
            /* your `uglify-js` package options */
          };

          if (sourceMap) {
            uglifyJsOptions.sourceMap = {
              content: sourceMap,
            };
          }

          return require("uglify-js").minify(file, uglifyJsOptions);
        },
      }),
    ],
  },
};
```

### Typescript

With default Terser minify function:

```ts
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: true,
        },
      }),
    ],
  },
};
```

With built-in minify functions:

```ts
import { type JsMinifyOptions as SwcOptions } from "@swc/core";
import { type TransformOptions as EsbuildOptions } from "esbuild";
import { type MinifyOptions as TerserOptions } from "terser";
import { type MinifyOptions as UglifyJSOptions } from "uglify-js";

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin<SwcOptions>({
        minify: TerserPlugin.swcMinify,
        terserOptions: {
          // `swc` options
        },
      }),
      new TerserPlugin<UglifyJSOptions>({
        minify: TerserPlugin.uglifyJsMinify,
        terserOptions: {
          // `uglif-js` options
        },
      }),
      new TerserPlugin<EsbuildOptions>({
        minify: TerserPlugin.esbuildMinify,
        terserOptions: {
          // `esbuild` options
        },
      }),

      // Alternative usage:
      new TerserPlugin<TerserOptions>({
        minify: TerserPlugin.terserMinify,
        terserOptions: {
          // `terser` options
        },
      }),
    ],
  },
};
```

## Contributing

We welcome all contributions!
If you're new here, please take a moment to review our contributing guidelines before submitting issues or pull requests.

[CONTRIBUTING](https://github.com/webpack/terser-webpack-plugin?tab=contributing-ov-file#contributing)

## License

[MIT](./LICENSE)

[npm]: https://img.shields.io/npm/v/terser-webpack-plugin.svg
[npm-url]: https://npmjs.com/package/terser-webpack-plugin
[node]: https://img.shields.io/node/v/terser-webpack-plugin.svg
[node-url]: https://nodejs.org
[tests]: https://github.com/webpack/terser-webpack-plugin/workflows/terser-webpack-plugin/badge.svg
[tests-url]: https://github.com/webpack/terser-webpack-plugin/actions
[cover]: https://codecov.io/gh/webpack/terser-webpack-plugin/branch/main/graph/badge.svg
[cover-url]: https://codecov.io/gh/webpack/terser-webpack-plugin
[discussion]: https://img.shields.io/github/discussions/webpack/webpack
[discussion-url]: https://github.com/webpack/webpack/discussions
[size]: https://packagephobia.now.sh/badge?p=terser-webpack-plugin
[size-url]: https://packagephobia.now.sh/result?p=terser-webpack-plugin
