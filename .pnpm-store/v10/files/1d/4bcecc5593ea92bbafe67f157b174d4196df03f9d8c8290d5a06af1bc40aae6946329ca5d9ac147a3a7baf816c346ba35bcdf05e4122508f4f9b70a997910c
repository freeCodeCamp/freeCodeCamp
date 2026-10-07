# yaml-loader for Webpack

YAML loader for [Webpack](https://webpack.js.org/). Allows importing YAML files as JS objects. Uses [`yaml`](https://www.npmjs.com/package/yaml) internally.

## Installation

```sh
npm install --save-dev yaml-loader
```

## Usage

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.ya?ml$/,
        use: 'yaml-loader'
      }
    ]
  }
}
```

```yaml
# file.yaml
---
config:
  js:
    key: test
hello: world
```

```js
// application.js
import file from './file.yaml'

file.hello === 'world'
```

## Options

In addition to all [`yaml` options](https://eemeli.org/yaml/#options) used by its parsing methods,
the loader supports the following additional options:

### `asJSON`

If enabled, the loader output is stringified JSON rather than stringified JavaScript. For Webpack v4, you'll need to set the rule to have `type: "json"`. Also useful for chaining with other loaders that expect JSON input.

### `asStream`

If enabled, parses the source file as a stream of YAML documents. With this, the output will always be an array, with entries for each document. If set, `namespace` is ignored.

To use this option for only some YAML files, it's probably easiest to use a query parameter and match that using [Rule.resourceQuery](https://webpack.js.org/configuration/module/#ruleresourcequery):

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.ya?ml$/,
        oneOf: [
          {
            resourceQuery: /stream/,
            options: { asStream: true },
            loader: 'yaml-loader'
          },
          { loader: 'yaml-loader' }
        ]
      }
    ]
  }
}
```

Then, importing `./foo.yaml` will expect it to contain only one document, but `./bar.yaml?stream` may contain multiple documents.

### `namespace`

Allows for exposing a sub-tree of the source document:

```js
import jsCfg from './file.yaml?namespace=config.js'

jsCfg.key === 'test'
```

The `namespace` should be a series of keys, dot separated. Note that any `options` object in your `webpack.config.js` rule will be superseded by a `?query`.

## License

[MIT](http://www.opensource.org/licenses/mit-license.php)
