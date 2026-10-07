<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]
[![tests][tests]][tests-url]
[![chat][chat]][chat-url]
[![size][size]][size-url]

# url-loader

A loader for webpack which transforms files into base64 URIs.

## Getting Started

To begin, you'll need to install `url-loader`:

```console
$ npm install url-loader --save-dev
```

`url-loader` works like
[`file-loader`](https://github.com/webpack-contrib/file-loader), but can return
a DataURL if the file is smaller than a byte limit.

**index.js**

```js
import img from './image.png';
```

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
};
```

And run `webpack` via your preferred method.

## Options

|             Name              |            Type             |                            Default                            | Description                                                                         |
| :---------------------------: | :-------------------------: | :-----------------------------------------------------------: | :---------------------------------------------------------------------------------- |
|     **[`limit`](#limit)**     | `{Boolean\|Number\|String}` |                            `true`                             | Specifying the maximum size of a file in bytes.                                     |
|  **[`mimetype`](#mimetype)**  |     `{Boolean\|String}`     | based from [mime-types](https://github.com/jshttp/mime-types) | Sets the MIME type for the file to be transformed.                                  |
|  **[`encoding`](#encoding)**  |     `{Boolean\|String}`     |                           `base64`                            | Specify the encoding which the file will be inlined with.                           |
| **[`generator`](#generator)** |        `{Function}`         |           `() => type/subtype;encoding,base64_data`           | You can create you own custom implementation for encoding data.                     |
|  **[`fallback`](#fallback)**  |         `{String}`          |                         `file-loader`                         | Specifies an alternative loader to use when a target file's size exceeds the limit. |
|  **[`esModule`](#esmodule)**  |         `{Boolean}`         |                            `true`                             | Use ES modules syntax.                                                              |

### `limit`

Type: `Boolean|Number|String`
Default: `undefined`

The limit can be specified via loader options and defaults to no limit.

#### `Boolean`

Enable or disable transform files into base64.

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: false,
            },
          },
        ],
      },
    ],
  },
};
```

#### `Number|String`

A `Number` or `String` specifying the maximum size of a file in bytes.
If the file size is **equal** or **greater** than the limit [`file-loader`](https://github.com/webpack-contrib/file-loader) will be used (by default) and all query parameters are passed to it.

Using an alternative to `file-loader` is enabled via the `fallback` option.

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
};
```

### `mimetype`

Type: `Boolean|String`
Default: based from [mime-types](https://github.com/jshttp/mime-types)

Specify the `mimetype` which the file will be inlined with.
If unspecified the `mimetype` value will be used from [mime-types](https://github.com/jshttp/mime-types).

#### `Boolean`

The `true` value allows to generation the `mimetype` part from [mime-types](https://github.com/jshttp/mime-types).
The `false` value removes the `mediatype` part from a Data URL (if omitted, defaults to `text/plain;charset=US-ASCII`).

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: false,
            },
          },
        ],
      },
    ],
  },
};
```

#### `String`

Sets the MIME type for the file to be transformed.

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png',
            },
          },
        ],
      },
    ],
  },
};
```

### `encoding`

Type: `Boolean|String`
Default: `base64`

Specify the `encoding` which the file will be inlined with.
If unspecified the `encoding` will be `base64`.

#### `Boolean`

If you don't want to use any encoding you can set `encoding` to `false` however if you set it to `true` it will use the default encoding `base64`.

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              encoding: false,
            },
          },
        ],
      },
    ],
  },
};
```

#### `String`

It supports [Node.js Buffers and Character Encodings](https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings) which are `["utf8","utf16le","latin1","base64","hex","ascii","binary","ucs2"]`.

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              encoding: 'utf8',
            },
          },
        ],
      },
    ],
  },
};
```

### `generator`

Type: `Function`
Default: `(mimetype, encoding, content, resourcePath) => mimetype;encoding,base64_content`

You can create you own custom implementation for encoding data.

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|html)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              // The `mimetype` and `encoding` arguments will be obtained from your options
              // The `resourcePath` argument is path to file.
              generator: (content, mimetype, encoding, resourcePath) => {
                if (/\.html$/i.test(resourcePath)) {
                  return `data:${mimetype},${content.toString()}`;
                }

                return `data:${mimetype}${
                  encoding ? `;${encoding}` : ''
                },${content.toString(encoding)}`;
              },
            },
          },
        ],
      },
    ],
  },
};
```

### `fallback`

Type: `String`
Default: `'file-loader'`

Specifies an alternative loader to use when a target file's size exceeds the limit set in the `limit` option.

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              fallback: require.resolve('responsive-loader'),
            },
          },
        ],
      },
    ],
  },
};
```

The fallback loader will receive the same configuration options as url-loader.

For example, to set the quality option of a responsive-loader above use:

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              fallback: require.resolve('responsive-loader'),
              quality: 85,
            },
          },
        ],
      },
    ],
  },
};
```

### `esModule`

Type: `Boolean`
Default: `true`

By default, `file-loader` generates JS modules that use the ES modules syntax.
There are some cases in which using ES modules is beneficial, like in the case of [module concatenation](https://webpack.js.org/plugins/module-concatenation-plugin/) and [tree shaking](https://webpack.js.org/guides/tree-shaking/).

You can enable a CommonJS module syntax using:

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'url-loader',
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

### SVG

SVG can be compressed into a more compact output, avoiding `base64`.
You can read about it more [here](https://css-tricks.com/probably-dont-base64-svg/).
You can do it using [mini-svg-data-uri](https://github.com/tigt/mini-svg-data-uri) package.

**webpack.config.js**

```js
const svgToMiniDataURI = require('mini-svg-data-uri');

module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              generator: (content) => svgToMiniDataURI(content.toString()),
            },
          },
        ],
      },
    ],
  },
};
```

## Contributing

Please take a moment to read our contributing guidelines if you haven't yet done so.

[CONTRIBUTING](./.github/CONTRIBUTING.md)

## License

[MIT](./LICENSE)

[npm]: https://img.shields.io/npm/v/url-loader.svg
[npm-url]: https://npmjs.com/package/url-loader
[node]: https://img.shields.io/node/v/url-loader.svg
[node-url]: https://nodejs.org
[deps]: https://david-dm.org/webpack-contrib/url-loader.svg
[deps-url]: https://david-dm.org/webpack-contrib/url-loader
[tests]: https://github.com/webpack-contrib/url-loader/workflows/url-loader/badge.svg
[tests-url]: https://github.com/webpack-contrib/url-loader/actions
[cover]: https://codecov.io/gh/webpack-contrib/url-loader/branch/master/graph/badge.svg
[cover-url]: https://codecov.io/gh/webpack-contrib/url-loader
[chat]: https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg
[chat-url]: https://gitter.im/webpack/webpack
[size]: https://packagephobia.now.sh/badge?p=url-loader
[size-url]: https://packagephobia.now.sh/result?p=url-loader

```

```
