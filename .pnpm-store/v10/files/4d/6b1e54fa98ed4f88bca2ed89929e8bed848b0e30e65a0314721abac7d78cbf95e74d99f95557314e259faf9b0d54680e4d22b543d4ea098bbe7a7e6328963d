# babel-preset-fbjs

> Babel preset for Facebook projects.

## Install

```sh
$ npm install --save-dev babel-preset-fbjs
```

## Basic Usage

### Via `.babelrc`

**.babelrc**

```json
{
  "presets": ["fbjs"]
}
```

### Via CLI

```sh
$ babel script.js --presets fbjs
```

### Via Node API

```javascript
require('@babel/core').transform('code', {
  presets: ['fbjs']
});
```

## Advanced Usage

```javascript
require('@babel/core').transform('code', {
  presets: [
    require('babel-preset-fbjs/configure')({
      autoImport: true,
      inlineRequires: false,
      rewriteModules: {},
      stripDEV: false
    }
  ]
});
```
