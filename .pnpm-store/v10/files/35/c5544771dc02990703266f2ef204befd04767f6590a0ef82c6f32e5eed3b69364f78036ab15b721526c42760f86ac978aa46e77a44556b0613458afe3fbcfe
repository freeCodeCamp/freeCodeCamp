# globals [![Build Status](https://travis-ci.org/sindresorhus/globals.svg?branch=master)](https://travis-ci.org/sindresorhus/globals)

> Global identifiers from different JavaScript environments

Extracted from [JSHint](https://github.com/jshint/jshint/blob/3a8efa979dbb157bfb5c10b5826603a55a33b9ad/src/vars.js) and [ESLint](https://github.com/eslint/eslint/blob/b648406218f8a2d7302b98f5565e23199f44eb31/conf/environments.json) and merged.

It's just a [JSON file](globals.json), so use it in whatever environment you like.

**This module [no longer accepts](https://github.com/sindresorhus/globals/issues/82) new environments. If you need it for ESLint, just [create a plugin](http://eslint.org/docs/developer-guide/working-with-plugins#environments-in-plugins).**


## Install

```
$ npm install globals
```


## Usage

```js
const globals = require('globals');

console.log(globals.browser);
/*
{
	addEventListener: false,
	applicationCache: false,
	ArrayBuffer: false,
	atob: false,
	...
}
*/
```

Each global is given a value of `true` or `false`. A value of `true` indicates that the variable may be overwritten. A value of `false` indicates that the variable should be considered read-only. This information is used by static analysis tools to flag incorrect behavior. We assume all variables should be `false` unless we hear otherwise.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
