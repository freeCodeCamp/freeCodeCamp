# read-pkg [![Build Status](https://travis-ci.org/sindresorhus/read-pkg.svg?branch=master)](https://travis-ci.org/sindresorhus/read-pkg)

> Read a package.json file


## Why

- [Gracefully handles filesystem issues](https://github.com/isaacs/node-graceful-fs)
- [Throws more helpful JSON errors](https://github.com/sindresorhus/parse-json)
- [Normalizes the data](https://github.com/npm/normalize-package-data#what-normalization-currently-entails)


## Install

```
$ npm install read-pkg
```


## Usage

```js
const readPkg = require('read-pkg');

(async () => {
	console.log(await readPkg());
	//=> {name: 'read-pkg', …}

	console.log(await readPkg({cwd: 'some-other-directory'}));
	//=> {name: 'unicorn', …}
})();
```


## API

### readPkg(options?)

Returns a `Promise<object>` with the parsed JSON.

### readPkg.sync(options?)

Returns the parsed JSON.

#### options

Type: `object`

##### cwd

Type: `string`<br>
Default: `process.cwd()`

Current working directory.

##### normalize

Type: `boolean`<br>
Default: `true`

[Normalize](https://github.com/npm/normalize-package-data#what-normalization-currently-entails) the package data.


## Related

- [read-pkg-up](https://github.com/sindresorhus/read-pkg-up) - Read the closest package.json file
- [write-pkg](https://github.com/sindresorhus/write-pkg) - Write a `package.json` file
- [load-json-file](https://github.com/sindresorhus/load-json-file) - Read and parse a JSON file


---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-read-pkg?utm_source=npm-read-pkg&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
