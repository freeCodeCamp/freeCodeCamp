# babel-plugin-polyfill-corejs3

## Install

Using npm:

```sh
npm install --save-dev babel-plugin-polyfill-corejs3
```

or using yarn:

```sh
yarn add babel-plugin-polyfill-corejs3 --dev
```

## Usage

Add this plugin to your Babel configuration:

```json
{
  "plugins": [["polyfill-corejs3", { "method": "usage-global", "version": "3.20" }]]
}
```

This package supports the `usage-pure`, `usage-global`, and `entry-global` methods.
When `entry-global` is used, it replaces imports to `core-js`.

## Options

See [here](../../docs/usage.md#options) for a list of options supported by every polyfill provider.

### `version`

`string`, defaults to `"3.0"`.

This option only has an effect when used alongside `"method": "usage-global"` or `"method": "usage-pure"`. It is recommended to specify the minor version you are using as `core-js@3.0` may not include polyfills for the latest features. If you are bundling an app, you can provide the version directly from your node modules:

```js
{
  plugins: [
    ["polyfill-corejs3", {
      "method": "usage-pure",
      // use `core-js/package.json` if you are using `usage-global`
      "version": require("core-js-pure/package.json").version
    }]
  ]
}
```

If you are a library author, specify a reasonably modern `core-js` version in your
`package.json` and provide the plugin the minimal supported version.

```json
{
  "dependencies": {
    "core-js": "^3.20.0"
  }
}
```
```js
{
  plugins: [
    ["polyfill-corejs3", {
      "method": "usage-global",
      // improvise if you have more complicated version spec, e.g. > 3.1.4
      "version": require("./package.json").dependencies["core-js"]
    }]
  ]
}
```

### `proposals`

`boolean`, defaults to `false`.

This option only has an effect when used alongside `"method": "usage-global"` or `"method": "usage-pure"`. When `proposals` are `true`, any ES proposal supported by core-js will be polyfilled as well.