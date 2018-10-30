# latest-version [![Build Status](https://travis-ci.org/sindresorhus/latest-version.svg?branch=master)](https://travis-ci.org/sindresorhus/latest-version)

> Get the latest version of an npm package

Fetches the version directly from the registry instead of depending on the massive [npm](https://github.com/npm/npm/blob/8b5e7b6ae5b4cd2d7d62eaf93b1428638b387072/package.json#L37-L85) module like the [latest](https://github.com/bahamas10/node-latest) module does.


## Install

```
$ npm install --save latest-version
```


## Usage

```js
const latestVersion = require('latest-version');

latestVersion('ava').then(version => {
	console.log(version);
	//=> '0.18.0'
});

latestVersion('@sindresorhus/df').then(version => {
	console.log(version);
	//=> '1.0.1'
});
```


## Related

- [latest-version-cli](https://github.com/sindresorhus/latest-version-cli) - CLI for this module
- [package-json](https://github.com/sindresorhus/package-json) - Get the package.json of a package from the npm registry


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
