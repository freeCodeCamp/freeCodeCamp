# babel-preset-jest

> Babel preset for all Jest plugins. This preset is automatically included when
> using
> [babel-jest](https://github.com/facebook/jest/tree/master/packages/babel-jest).

## Install

```sh
$ npm install --save-dev babel-preset-jest
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["jest"]
}
```

### Via CLI

```sh
$ babel script.js --presets jest
```

### Via Node API

```javascript
require('babel-core').transform('code', {
  presets: ['jest'],
});
```
