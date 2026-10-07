<center>
<h1>THIS IS A FORK TO BE COMPATIBLE WITH WEBPACK 5 & FAST REFRESH</h1>
</center>

# Webpack Hot Middleware

Webpack hot reloading using only [webpack-dev-middleware](https://webpack.js.org/guides/development/#webpack-dev-middleware). This allows you to add hot reloading into an existing server without [webpack-dev-server](https://webpack.js.org/configuration/dev-server/).

This module is **only** concerned with the mechanisms to connect a browser client to a webpack server & receive updates. It will subscribe to changes from the server and execute those changes using [webpack's HMR API](https://webpack.js.org/concepts/hot-module-replacement/). Actually making your application capable of using hot reloading to make seamless changes is out of scope, and usually handled by another library.

If you're using React then some common options are [react-transform-hmr](https://github.com/gaearon/react-transform-hmr/) and [react-hot-loader](https://github.com/gaearon/react-hot-loader).

[![npm version](https://img.shields.io/npm/v/webpack-hot-middleware.svg)](https://www.npmjs.com/package/webpack-hot-middleware) [![CircleCI](https://circleci.com/gh/webpack-contrib/webpack-hot-middleware/tree/master.svg?style=svg)](https://circleci.com/gh/webpack-contrib/webpack-hot-middleware/tree/master)[![codecov](https://codecov.io/gh/webpack-contrib/webpack-hot-middleware/branch/master/graph/badge.svg)](https://codecov.io/gh/webpack-contrib/webpack-hot-middleware)![MIT Licensed](https://img.shields.io/npm/l/webpack-hot-middleware.svg)

## Installation & Usage

See [example/](./example/) for an example of usage.

First, install the npm module.

```sh
npm install --save-dev webpack-hot-middleware
```

Next, enable hot reloading in your webpack config:

 1. Add the following plugins to the `plugins` array:
    ```js
    plugins: [
        // OccurrenceOrderPlugin is needed for webpack 1.x only
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // Use NoErrorsPlugin for webpack 1.x
        new webpack.NoEmitOnErrorsPlugin()
    ]
    ```

    Occurence ensures consistent build hashes, hot module replacement is
    somewhat self-explanatory, no errors is used to handle errors more cleanly.

 3. Add `'webpack-hot-middleware/client'` into the `entry` array.
    This connects to the server to receive notifications when the bundle
    rebuilds and then updates your client bundle accordingly.

Now add the middleware into your server:

 1. Add `webpack-dev-middleware` the usual way
    ```js
    var webpack = require('webpack');
    var webpackConfig = require('./webpack.config');
    var compiler = webpack(webpackConfig);

    app.use(require("webpack-dev-middleware")(compiler, {
        noInfo: true, publicPath: webpackConfig.output.publicPath
    }));
    ```

 2. Add `webpack-hot-middleware` attached to the same compiler instance
    ```js
    app.use(require("webpack-hot-middleware")(compiler));
    ```

And you're all set!

## Changelog

### 2.0.0

**Breaking Change**

As of version 2.0.0, all client functionality has been rolled into this module. This means that you should remove any reference to `webpack/hot/dev-server` or `webpack/hot/only-dev-server` from your webpack config. Instead, use the `reload` config option to control this behaviour.

This was done to allow full control over the client receiving updates, which is now able to output full module names in the console when applying changes.

## Documentation

More to come soon, you'll have to mostly rely on the example for now.

### Config

#### Client

Configuration options can be passed to the client by adding querystring parameters to the path in the webpack config.

```js
'webpack-hot-middleware/client?path=/__what&timeout=2000&overlay=false'
```

* **path** - The path which the middleware is serving the event stream on
* **name** - Bundle name, specifically for multi-compiler mode
* **timeout** - The time to wait after a disconnection before attempting to reconnect
* **overlay** - Set to `false` to disable the DOM-based client-side overlay.
* **reload** - Set to `true` to auto-reload the page when webpack gets stuck.
* **noInfo** - Set to `true` to disable informational console logging.
* **quiet** - Set to `true` to disable all console logging.
* **dynamicPublicPath** - Set to `true` to use webpack `publicPath` as prefix of `path`. (We can set `__webpack_public_path__` dynamically at runtime in the entry point, see note of [output.publicPath](https://webpack.js.org/configuration/output/#output-publicpath))
* **autoConnect** - Set to `false` to use to prevent a connection being automatically opened from the client to the webpack back-end - ideal if you need to modify the options using the `setOptionsAndConnect` function
* **ansiColors** - An object to customize the client overlay colors as mentioned in the [ansi-html](https://github.com/Tjatse/ansi-html/blob/99ec49e431c70af6275b3c4e00c7be34be51753c/README.md#set-colors) package.
* **overlayStyles** - An object to let you override or add new inline styles to the client overlay div.
* **overlayWarnings** - Set to `true` to enable client overlay on warnings in addition to errors.

> Note:
> Since the `ansiColors` and `overlayStyles` options are passed via query string, you'll need to uri encode your stringified options like below:

```js
var ansiColors = {
  red: '00FF00' // note the lack of "#"
};
var overlayStyles = {
  color: '#FF0000' // note the inclusion of "#" (these options would be the equivalent of div.style[option] = value)
};
var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true&ansiColors=' + encodeURIComponent(JSON.stringify(ansiColors)) + '&overlayStyles=' + encodeURIComponent(JSON.stringify(overlayStyles));
```

#### Middleware

Configuration options can be passed to the middleware by passing a second argument.

```js
app.use(require("webpack-hot-middleware")(compiler, {
    log: false,
    path: "/__what",
    heartbeat: 2000
}));
```

* **log** - A function used to log lines, pass `false` to disable. Defaults to `console.log`
* **path** - The path which the middleware will serve the event stream on, must match the client setting
* **heartbeat** - How often to send heartbeat updates to the client to keep the connection alive. Should be less than the client's `timeout` setting - usually set to half its value.

## How it Works

The middleware installs itself as a webpack plugin, and listens for compiler events.

Each connected client gets a [Server Sent Events](http://www.html5rocks.com/en/tutorials/eventsource/basics/) connection, the server will publish notifications to connected clients on compiler events.

When the client receives a message, it will check to see if the local code is up to date. If it isn't up to date, it will trigger webpack hot module reloading.

### Multi-compiler mode

If you're using multi-compiler mode (exporting an array of config in `webpack.config.js`), set `name` parameters to make sure bundles don't process each other's updates. For example:

```
// webpack.config.js
module.exports = [
    {
        name: 'mobile',
        entry: {
            vendor: 'vendor.js',
            main: ['webpack-hot-middleware/client?name=mobile', 'mobile.js']
        }
    },
    {
        name: 'desktop',
        entry: {
            vendor: 'vendor.js',
            main: ['webpack-hot-middleware/client?name=desktop', 'desktop.js']
        }
    }
]
```

## Other Frameworks

### Hapi

Use the [hapi-webpack-plugin](https://www.npmjs.com/package/hapi-webpack-plugin).

### Koa

[koa-webpack-middleware](https://www.npmjs.com/package/koa-webpack-middleware)
wraps this module for use with Koa 1.x

[koa-webpack](https://www.npmjs.com/package/koa-webpack)
can be used for Koa 2.x

## Troubleshooting

### Use on browsers without EventSource

If you want to use this module with browsers that don't support eventsource, you'll need to use a [polyfill](https://libraries.io/search?platforms=NPM&q=eventsource+polyfill). See [issue #11](https://github.com/webpack-contrib/webpack-hot-middleware/issues/11)

### Not receiving updates in client when using Gzip

This is because gzip generally buffers the response, but the Server Sent Events event-stream expects to be able to send data to the client immediately. You should make sure gzipping isn't being applied to the event-stream. See [issue #10](https://github.com/webpack-contrib/webpack-hot-middleware/issues/10).

### Use with auto-restarting servers

This module expects to remain running while you make changes to your webpack bundle, if you use a process manager like nodemon then you will likely see very slow changes on the client side. If you want to reload the server component, either use a separate process, or find a way to reload your server routes without restarting the whole process. See https://github.com/glenjamin/ultimate-hot-reloading-example for an example of one way to do this.

### Use with multiple entry points in webpack

If you want to use [multiple entry points in your webpack config](https://webpack.js.org/concepts/output/#multiple-entry-points) you need to include the hot middleware client in each entry point. This ensures that each entry point file knows how to handle hot updates. See the [examples folder README](example/README.md) for an example.

```js
entry: {
    vendor: ['jquery', 'webpack-hot-middleware/client'],
    index: ['./src/index', 'webpack-hot-middleware/client']
}
```

## License

See [LICENSE file](LICENSE).
