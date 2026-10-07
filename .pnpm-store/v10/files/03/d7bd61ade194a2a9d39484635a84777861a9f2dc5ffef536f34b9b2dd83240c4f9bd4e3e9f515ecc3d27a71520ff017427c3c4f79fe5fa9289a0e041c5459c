[![Webpack Stats Plugin — Formidable, We build the modern web](https://raw.githubusercontent.com/FormidableLabs/webpack-stats-plugin/master/webpack-stats-plugin-Hero.png)](https://formidable.com/open-source/)

[![npm version][npm_img]][npm_site]
[![Actions Status][actions_img]][actions_site]
[![MIT license][lic_img]][lic_site]
[![Maintenance Status][maintenance_image]](#maintenance-status)

This plugin will ingest the webpack [stats](https://webpack.js.org/configuration/stats/#stats) object, process / transform the object and write out to a file for further consumption.

The most common use case is building a hashed bundle and wanting to programmatically refer to the correct bundle path in your Node.js server.

## Installation

The plugin is available via [npm](https://www.npmjs.com/package/webpack-stats-plugin):

```sh
$ npm install --save-dev webpack-stats-plugin
$ yarn add --dev webpack-stats-plugin
```

## Examples

We have example webpack configurations for all versions of webpack. See., e.g. [`test/scenarios/webpack5/webpack.config.js`](test/scenarios/webpack5/webpack.config.js).

### CLI

If you are using `webpack-cli`, you can enable with:

```sh
$ webpack-cli --plugin webpack-stats-plugin/lib/stats-writer-plugin
```

### Basic

A basic `webpack.config.js`-based integration:

```js
const { StatsWriterPlugin } = require("webpack-stats-plugin");

module.exports = {
  plugins: [
    // Everything else **first**.

    // Write out stats file to build directory.
    new StatsWriterPlugin({
      filename: "stats.json", // Default
    }),
  ],
};
```

### Custom `stats` Configuration

This option is passed to the webpack compiler's [`getStats().toJson()`](https://webpack.js.org/api/node/#statstojsonoptions) method.

```js
const { StatsWriterPlugin } = require("webpack-stats-plugin");

module.exports = {
  plugins: [
    new StatsWriterPlugin({
      stats: {
        all: false,
        assets: true,
      },
    }),
  ],
};
```

### Custom Transform Function

The transform function has a signature of:

```js
/**
 * Transform skeleton.
 *
 * @param {Object} data           Stats object
 * @param {Object} opts           Options
 * @param {Object} opts.compiler  Current compiler instance
 * @returns {String}              String to emit to file
 */
function (data, opts) {}
```

which you can use like:

```js
const { StatsWriterPlugin } = require("webpack-stats-plugin");

module.exports = {
  plugins: [
    new StatsWriterPlugin({
      transform(data, opts) {
        return JSON.stringify(
          {
            main: data.assetsByChunkName.main[0],
            css: data.assetsByChunkName.main[1],
          },
          null,
          2
        );
      },
    }),
  ],
};
```

### Promise transform

You can use an asynchronous promise to transform as well:

```js
const { StatsWriterPlugin } = require("webpack-stats-plugin");

module.exports = {
  plugins: [
    new StatsWriterPlugin({
      filename: "stats-transform-promise.json",
      transform(data) {
        return Promise.resolve().then(() =>
          JSON.stringify(
            {
              main: data.assetsByChunkName.main,
            },
            null,
            INDENT
          )
        );
      },
    }),
  ],
};
```

## Plugins

- [`StatsWriterPlugin(opts)`](#statswriterplugin-opts-)

### `StatsWriterPlugin(opts)`

- **opts** (`Object`) options
- **opts.filename** (`String|Function`) output file name (Default: `"stats.json"`)
- **opts.fields** (`Array`) fields of stats obj to keep (Default: `["assetsByChunkName"]`)
- **opts.stats** (`Object|String`) stats config object or string preset (Default: `{}`)
- **opts.transform** (`Function|Promise`) transform stats obj (Default: `JSON.stringify()`)
- **opts.emit** (`Boolean`) add stats file to webpack output? (Default: `true`)

Stats writer module.

Stats can be a string or array (we'll have an array due to source maps):

```js
"assetsByChunkName": {
  "main": [
    "cd6371d4131fbfbefaa7.bundle.js",
    "../js-map/cd6371d4131fbfbefaa7.bundle.js.map"
  ]
},
```

**`fields`, `stats`**

The stats object is **big**. It includes the entire source included in a bundle. Thus, we default `opts.fields` to `["assetsByChunkName"]` to only include those. However, if you want the _whole thing_ (maybe doing an `opts.transform` function), then you can set `fields: null` in options to get **all** of the stats object.

You may also pass a custom stats config object (or string preset) via `opts.stats` in order to select exactly what you want added to the data passed to the transform. When `opts.stats` is passed, `opts.fields` will default to `null`.

See:

- https://webpack.js.org/configuration/stats/#stats
- https://webpack.js.org/api/node/#stats-object

**`filename`**

The `opts.filename` option can be a file name or path relative to `output.path` in webpack configuration. It should not be absolute. It may also be a function, in which case it will be passed the current compiler instance and expected to return a filename to use.

**`transform`**

By default, the retrieved stats object is `JSON.stringify`'ed:

```javascript
new StatsWriterPlugin({
  transform(data) {
    return JSON.stringify(data, null, 2);
  },
});
```

By supplying an alternate transform you can target _any_ output format. See [`test/scenarios/webpack5/webpack.config.js`](test/scenarios/webpack5/webpack.config.js) for various examples including Markdown output.

- **Warning**: The output of `transform` should be a `String`, not an object. On Node `v4.x` if you return a real object in `transform`, then webpack will break with a `TypeError` (See [#8](https://github.com/FormidableLabs/webpack-stats-plugin/issues/8)). Just adding a simple `JSON.stringify()` around your object is usually what you need to solve any problems.

**Internal notes**

In modern webpack, the plugin uses the [`processAssets`](https://webpack.js.org/api/compilation-hooks/#processassets) compilation hook if available when adding the stats object file to the overall compilation to write out along with all the other webpack-built assets. This is the [last possible place](https://github.com/webpack/webpack/blob/f2f998b58362d5edc9945a48f8245a3347ad007c/lib/Compilation.js#L2000-L2007) to hook in before the compilation is frozen in future webpack releases.

In earlier webpack, the plugin uses the much later [`emit`](https://webpack.js.org/api/compiler-hooks/#emit) compiler hook. There are technically some assets/stats data that could be added after `processAssets` and before `emit`, but for most practical uses of this plugin users shouldn't see any differences in the usable data produced by different versions of webpack.

## Maintenance Status

**Active:** Formidable is actively working on this project, and we expect to continue for work for the foreseeable future. Bug reports, feature requests and pull requests are welcome.

[npm_img]: https://badge.fury.io/js/webpack-stats-plugin.svg
[npm_site]: http://badge.fury.io/js/webpack-stats-plugin
[actions_img]: https://github.com/FormidableLabs/webpack-stats-plugin/workflows/CI/badge.svg
[actions_site]: https://github.com/FormidableLabs/webpack-stats-plugin/actions
[lic_img]: https://img.shields.io/npm/l/webpack-stats-plugin.svg?color=brightgreen&style=flat
[lic_site]: https://github.com/FormidableLabs/webpack-stats-plugin/blob/main/LICENSE.txt
[maintenance_image]: https://img.shields.io/badge/maintenance-active-green.svg?color=brightgreen&style=flat
