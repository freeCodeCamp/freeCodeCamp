# babel-plugin-syntax-object-rest-spread

Allow parsing of object rest/spread.

## Installation

```sh
$ npm install babel-plugin-syntax-object-rest-spread
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["syntax-object-rest-spread"]
}
```

### Via CLI

```sh
$ babel --plugins syntax-object-rest-spread script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["syntax-object-rest-spread"]
});
```
