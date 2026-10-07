[![npm][npm]][npm-url]
[![node][node]][node-url]
[![tests][tests]][tests-url]
[![downloads][downloads]][downloads-url]

<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200"
      src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
  <h1>Webpack Bundle Analyzer</h1>
  <p>Visualize size of webpack output files with an interactive zoomable treemap.</p>
</div>

<h2 align="center">Install</h2>

```bash
# NPM
npm install --save-dev webpack-bundle-analyzer
# Yarn
yarn add -D webpack-bundle-analyzer
```

<h2 align="center">Usage (as a plugin)</h2>

```js
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
}
```

It will create an interactive treemap visualization of the contents of all your bundles.

![webpack bundle analyzer zoomable treemap](https://cloud.githubusercontent.com/assets/302213/20628702/93f72404-b338-11e6-92d4-9a365550a701.gif)

This module will help you:

1. Realize what's *really* inside your bundle
2. Find out what modules make up the most of its size
3. Find modules that got there by mistake
4. Optimize it!

And the best thing is it supports minified bundles! It parses them to get real size of bundled modules.
And it also shows their gzipped sizes!

<h2 align="center">Options (for plugin)</h2>

```js
new BundleAnalyzerPlugin(options?: object)
```

|Name|Type|Description|
|:--:|:--:|:----------|
|**`analyzerMode`**|One of: `server`, `static`, `json`, `disabled`|Default: `server`. In `server` mode analyzer will start HTTP server to show bundle report. In `static` mode single HTML file with bundle report will be generated. In `json` mode single JSON file with bundle report will be generated. In `disabled` mode you can use this plugin to just generate Webpack Stats JSON file by setting `generateStatsFile` to `true`. |
|**`analyzerHost`**|`{String}`|Default: `127.0.0.1`. Host that will be used in `server` mode to start HTTP server.|
|**`analyzerPort`**|`{Number}` or `auto`|Default: `8888`. Port that will be used in `server` mode to start HTTP server. If `analyzerPort` is `auto`, the operating system will assign an arbitrary unused port |
|**`analyzerUrl`**|`{Function}` called with `{ listenHost: string, listenHost: string, boundAddress: server.address}`. [server.address comes from Node.js](https://nodejs.org/api/net.html#serveraddress)| Default: `http://${listenHost}:${boundAddress.port}`. The URL printed to console with server mode.|
|**`reportFilename`**|`{String}`|Default: `report.html`. Path to bundle report file that will be generated in `static` mode. It can be either an absolute path or a path relative to a bundle output directory (which is output.path in webpack config).|
|**`reportTitle`**|`{String\|function}`|Default: function that returns pretty printed current date and time. Content of the HTML `title` element; or a function of the form `() => string` that provides the content.|
|**`defaultSizes`**|One of: `stat`, `parsed`, `gzip`|Default: `parsed`. Module sizes to show in report by default. [Size definitions](#size-definitions) section describes what these values mean.|
|**`openAnalyzer`**|`{Boolean}`|Default: `true`. Automatically open report in default browser.|
|**`generateStatsFile`**|`{Boolean}`|Default: `false`. If `true`, webpack stats JSON file will be generated in bundle output directory|
|**`statsFilename`**|`{String}`|Default: `stats.json`. Name of webpack stats JSON file that will be generated if `generateStatsFile` is `true`. It can be either an absolute path or a path relative to a bundle output directory (which is output.path in webpack config).|
|**`statsOptions`**|`null` or `{Object}`|Default: `null`. Options for `stats.toJson()` method. For example you can exclude sources of your modules from stats file with `source: false` option. [See more options here](https://webpack.js.org/configuration/stats/). |
|**`excludeAssets`**|`{null\|pattern\|pattern[]}` where `pattern` equals to `{String\|RegExp\|function}`|Default: `null`. Patterns that will be used to match against asset names to exclude them from the report. If pattern is a string it will be converted to RegExp via `new RegExp(str)`. If pattern is a function it should have the following signature `(assetName: string) => boolean` and should return `true` to *exclude* matching asset. If multiple patterns are provided asset should match at least one of them to be excluded. |
|**`logLevel`**|One of: `info`, `warn`, `error`, `silent`|Default: `info`. Used to control how much details the plugin outputs.|

<h2 align="center">Usage (as a CLI utility)</h2>

You can analyze an existing bundle if you have a webpack stats JSON file.

You can generate it using `BundleAnalyzerPlugin` with `generateStatsFile` option set to `true` or with this simple
command:

```bash
webpack --profile --json > stats.json
```

If you're on Windows and using PowerShell, you can generate the stats file with this command to [avoid BOM issues](https://github.com/webpack-contrib/webpack-bundle-analyzer/issues/47):

```
webpack --profile --json | Out-file 'stats.json' -Encoding OEM
```

Then you can run the CLI tool.

```
webpack-bundle-analyzer bundle/output/path/stats.json
```

<h2 align="center">Options (for CLI)</h2>

```bash
webpack-bundle-analyzer <bundleStatsFile> [bundleDir] [options]
```

Arguments are documented below:

### `bundleStatsFile`

Path to webpack stats JSON file

### `bundleDir`

Directory containing all generated bundles.

### `options`

```
  -V, --version               output the version number
  -m, --mode <mode>           Analyzer mode. Should be `server`, `static` or `json`.
                              In `server` mode analyzer will start HTTP server to show bundle report.
                              In `static` mode single HTML file with bundle report will be generated.
                              In `json` mode single JSON file with bundle report will be generated. (default: server)
  -h, --host <host>           Host that will be used in `server` mode to start HTTP server. (default: 127.0.0.1)
  -p, --port <n>              Port that will be used in `server` mode to start HTTP server. Should be a number or `auto` (default: 8888)
  -r, --report <file>         Path to bundle report file that will be generated in `static` mode. (default: report.html)
  -t, --title <title>         String to use in title element of html report. (default: pretty printed current date)
  -s, --default-sizes <type>  Module sizes to show in treemap by default.
                              Possible values: stat, parsed, gzip (default: parsed)
  -O, --no-open               Don't open report in default browser automatically.
  -e, --exclude <regexp>      Assets that should be excluded from the report.
                              Can be specified multiple times.
  -l, --log-level <level>     Log level.
                              Possible values: debug, info, warn, error, silent (default: info)
  -h, --help                  output usage information
```

<h2 align="center" id="size-definitions">Size definitions</h2>

webpack-bundle-analyzer reports three values for sizes. `defaultSizes` can be used to control which of these is shown by default. The different reported sizes are:

### `stat`

This is the "input" size of your files, before any transformations like
minification.

It is called "stat size" because it's obtained from Webpack's
[stats object](https://webpack.js.org/configuration/stats/).

### `parsed`

This is the "output" size of your files. If you're using a Webpack plugin such
as Uglify, then this value will reflect the minified size of your code.

### `gzip`

This is the size of running the parsed bundles/modules through gzip compression.

<h2 align="center">Selecting Which Chunks to Display</h2>

When opened, the report displays all of the Webpack chunks for your project. It's possible to filter to a more specific list of chunks by using the sidebar or the chunk context menu.

### Sidebar

The Sidebar Menu can be opened by clicking the `>` button at the top left of the report. You can select or deselect chunks to display under the "Show chunks" heading there.

### Chunk Context Menu

The Chunk Context Menu can be opened by right-clicking or `Ctrl`-clicking on a specific chunk in the report. It provides the following options:

 * **Hide chunk:** Hides the selected chunk
 * **Hide all other chunks:** Hides all chunks besides the selected one
 * **Show all chunks:** Un-hides any hidden chunks, returning the report to its initial, unfiltered view

<h2 align="center">Troubleshooting</h2>

### I don't see `gzip` or `parsed` sizes, it only shows `stat` size

It happens when `webpack-bundle-analyzer` analyzes files that don't actually exist in your file system, for example when you work with `webpack-dev-server` that keeps all the files in RAM. If you use `webpack-bundle-analyzer` as a plugin you won't get any errors, however if you run it via CLI you get the error message in terminal:
```
Error parsing bundle asset "your_bundle_name.bundle.js": no such file
No bundles were parsed. Analyzer will show only original module sizes from stats file.
```
To get more information about it you can read [issue #147](https://github.com/webpack-contrib/webpack-bundle-analyzer/issues/147).

<h2 align="center">Other tools</h2>

- [Statoscope](https://github.com/smelukov/statoscope/blob/master/packages/ui-webpack/README.md) - Webpack bundle analyzing tool to find out why a certain module was bundled (and more features, including interactive treemap)

<h2 align="center">Maintainers</h2>

<table>
  <tbody>
    <tr>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars3.githubusercontent.com/u/302213?v=4&s=150">
        </br>
        <a href="https://github.com/th0r">Yuriy Grunin</a>
      </td>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars3.githubusercontent.com/u/482561?v=4&s=150">
        </br>
        <a href="https://github.com/valscion">Vesa Laakso</a>
      </td>
    </tr>
  <tbody>
</table>


[npm]: https://img.shields.io/npm/v/webpack-bundle-analyzer.svg
[npm-url]: https://npmjs.com/package/webpack-bundle-analyzer

[node]: https://img.shields.io/node/v/webpack-bundle-analyzer.svg
[node-url]: https://nodejs.org

[tests]: http://img.shields.io/travis/webpack-contrib/webpack-bundle-analyzer.svg
[tests-url]: https://travis-ci.org/webpack-contrib/webpack-bundle-analyzer

[downloads]: https://img.shields.io/npm/dt/webpack-bundle-analyzer.svg
[downloads-url]: https://npmjs.com/package/webpack-bundle-analyzer

<h2 align="center">Contributing</h2>

Check out [CONTRIBUTING.md](./CONTRIBUTING.md) for instructions on contributing :tada:
