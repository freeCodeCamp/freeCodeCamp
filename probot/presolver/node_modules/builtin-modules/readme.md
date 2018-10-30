# builtin-modules [![Build Status](https://travis-ci.org/sindresorhus/builtin-modules.svg?branch=master)](https://travis-ci.org/sindresorhus/builtin-modules)

> List of the Node.js builtin modules

The list is just a [JSON file](builtin-modules.json) and can be used wherever.


## Install

```
$ npm install --save builtin-modules
```


## Usage

```js
var builtinModules = require('builtin-modules');

console.log(builinModules);
//=> ['assert', 'buffer', ...]
```


## API

Returns an array of builtin modules fetched from the running Node.js version.

### Static list

This module also comes bundled with a static array of builtin modules generated from the latest Node.js version. You can get it with `require('builtin-modules/static');`


## Related

- [is-builtin-module](https://github.com/sindresorhus/is-builtin-module) - Check if a string matches the name of a Node.js builtin module


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
