# read-pkg [![Build Status](https://travis-ci.org/sindresorhus/read-pkg.svg?branch=master)](https://travis-ci.org/sindresorhus/read-pkg)

> Read a package.json file


## Why

- [Gracefully handles filesystem issues](https://github.com/isaacs/node-graceful-fs)
- [Strips UTF-8 BOM](https://github.com/sindresorhus/strip-bom)
- [Throws more helpful JSON errors](https://github.com/sindresorhus/parse-json)
- [Normalizes the data](https://github.com/npm/normalize-package-data#what-normalization-currently-entails)


## Install

```
$ npm install --save read-pkg
```


## Usage

```js
var readPkg = require('read-pkg');

readPkg().then(function (pkg) {
	console.log(pkg);
	//=> {name: 'read-pkg', ...}
});

readPkg(__dirname).then(function (pkg) {
	console.log(pkg);
	//=> {name: 'read-pkg', ...}
});

readPkg(path.join('unicorn', 'package.json')).then(function (pkg) {
	console.log(pkg);
	//=> {name: 'read-pkg', ...}
});
```


## API

### readPkg([path], [options])

Returns a promise that resolves to the parsed JSON.

### readPkg.sync([path], [options])

Returns the parsed JSON.

#### path

Type: `string`  
Default: `.`

Path to a `package.json` file or its directory.

#### options

##### normalize

Type: `boolean`  
Default: `true`

[Normalize](https://github.com/npm/normalize-package-data#what-normalization-currently-entails) the package data.


## Related

- [read-pkg-up](https://github.com/sindresorhus/read-pkg-up) - Read the closest package.json file
- [write-pkg](https://github.com/sindresorhus/write-pkg) - Write a `package.json` file
- [load-json-file](https://github.com/sindresorhus/load-json-file) - Read and parse a JSON file


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
