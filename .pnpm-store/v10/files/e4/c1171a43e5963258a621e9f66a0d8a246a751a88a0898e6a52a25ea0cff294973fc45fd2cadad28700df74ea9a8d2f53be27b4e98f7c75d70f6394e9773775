# regenerator-transform

Transform async/generator functions with [regenerator](https://github.com/facebook/regenerator)

## Installation

```sh
$ npm install regenerator-transform
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```js
// without options
{
  "plugins": ["regenerator-transform"]
}
// with options
{
  "plugins": [
    ["regenerator-transform", {
      asyncGenerators: false, // true by default
      generators: false, // true by default
      async: false // true by default
    }]
  ]
}
```

### Via CLI

```sh
$ babel --plugins regenerator-transform script.js
```

### Via Node API

```javascript
require("@babel/core").transformSync("code", {
  plugins: ["regenerator-transform"]
});
```
