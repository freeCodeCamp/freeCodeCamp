# babel-plugin-jest-hoist

Babel plugin to hoist `jest.disableAutomock`, `jest.enableAutomock`,
`jest.unmock`, `jest.mock`, calls above `import` statements. This plugin is
automatically included when using
[babel-jest](https://github.com/facebook/jest/tree/master/packages/babel-jest).

## Installation

```sh
$ yarn add --dev babel-plugin-jest-hoist
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["jest-hoist"]
}
```

### Via CLI

```sh
$ babel --plugins jest-hoist script.js
```

### Via Node API

```javascript
require('babel-core').transform('code', {
  plugins: ['jest-hoist'],
});
```
