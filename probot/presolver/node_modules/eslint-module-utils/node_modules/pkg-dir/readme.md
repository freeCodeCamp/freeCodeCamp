# pkg-dir [![Build Status](https://travis-ci.org/sindresorhus/pkg-dir.svg?branch=master)](https://travis-ci.org/sindresorhus/pkg-dir)

> Find the root directory of a npm package


## Install

```
$ npm install --save pkg-dir
```


## Usage

```
/
└── Users
    └── sindresorhus
        └── foo
            ├── package.json
            └── bar
                ├── baz
                └── example.js
```

```js
// example.js
var pkgDir = require('pkg-dir');

pkgDir(__dirname).then(function (rootPath) {
	console.log(rootPath);
	//=> '/Users/sindresorhus/foo'
});
```


## API

### pkgDir([cwd])

Returns a promise that resolves to the package root path or `null`.

### pkgDir.sync([cwd])

Returns the package root path or `null`.

#### cwd

Type: `string`  
Default: `process.cwd()`

Directory to start from.


## Related

- [pkg-dir-cli](https://github.com/sindresorhus/pkg-dir-cli) - CLI for this module
- [find-up](https://github.com/sindresorhus/find-up) - Find a file by walking up parent directories


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
