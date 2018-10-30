# has

> Object.prototype.hasOwnProperty.call shortcut

## Installation

```sh
npm install --save has
```

## Usage

```js
var has = require('has');

has({}, 'hasOwnProperty'); // false
has(Object.prototype, 'hasOwnProperty'); // true
```
