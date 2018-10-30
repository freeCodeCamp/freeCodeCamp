# import-local [![Build Status](https://travis-ci.org/sindresorhus/import-local.svg?branch=master)](https://travis-ci.org/sindresorhus/import-local)

> Let a globally installed package use a locally installed version of itself if available

Useful for CLI tools that want to defer to the user's locally installed version when available, but still work if it's not installed locally. For example, [AVA](http://ava.li) and [XO](https://github.com/sindresorhus/xo) uses this method.


## Install

```
$ npm install import-local
```


## Usage

```js
const importLocal = require('import-local');

if (importLocal(__filename)) {
	console.log('Using local version of this package');
} else {
	// Code for both global and local version here…
}
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
