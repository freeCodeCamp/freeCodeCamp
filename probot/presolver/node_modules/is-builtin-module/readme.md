# is-builtin-module [![Build Status](https://travis-ci.org/sindresorhus/is-builtin-module.svg?branch=master)](https://travis-ci.org/sindresorhus/is-builtin-module)

> Check if a string matches the name of a Node.js builtin module


## Install

```
$ npm install --save is-builtin-module
```


## Usage

```js
var isBuiltinModule = require('is-builtin-module');

isBuiltinModule('fs');
//=> true

isBuiltinModule('unicorn');
//=> false :(
```


## Related

- [builtin-modules](https://github.com/sindresorhus/builtin-modules) - List of the Node.js builtin modules


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
