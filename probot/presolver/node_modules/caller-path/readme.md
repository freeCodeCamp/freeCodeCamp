# caller-path [![Build Status](https://travis-ci.org/sindresorhus/caller-path.svg?branch=master)](https://travis-ci.org/sindresorhus/caller-path)

> Get the path of the caller module

You can't use [`module.parent`](http://nodejs.org/api/modules.html#modules_module_parent) as modules are cached and it will return the first caller module, not necessarily the current one.


## Install

```
$ npm install --save caller-path
```


## Usage

```js
// foo.js
var callerPath = require('caller-path');

module.exports = function () {
	console.log(callerPath());
	//=> /Users/sindresorhus/dev/unicorn/bar.js
}
```

```js
// bar.js
var foo = require('./foo');
foo();
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
