# babel-plugin-dynamic-import-node

Babel plugin to transpile `import()` to a deferred `require()`, for node. Matches the [proposed spec](https://github.com/domenic/proposal-import-function).

**NOTE:** Babylon >= v6.12.0 is required to correctly parse dynamic imports.

## Installation

```sh
npm install babel-plugin-dynamic-import-node --save-dev
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["dynamic-import-node"]
}
```

#### Options

- *`noInterop`* - A boolean value, that if true will not interop the require calls. Useful to avoid using `require('module').default` on commonjs modules.

```json
{
  "plugins": [
    ["dynamic-import-node", { "noInterop": true }]
  ]
}
```

### Via CLI

```sh
$ babel --plugins dynamic-import-node script.js
```

### Via Node API

```javascript
require('babel-core').transform('code', {
  plugins: ['dynamic-import-node']
});
```

### Code Example
```javascript
Promise.all([
  import('./lib/import1'),
  import('./lib/import2')
 ]).then(([
   Import1,
   Import2
  ]) => {
   console.log(Import1);
   /* CODE HERE*/
  });
```
