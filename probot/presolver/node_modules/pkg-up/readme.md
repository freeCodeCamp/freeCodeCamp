# pkg-up [![Build Status](https://travis-ci.org/sindresorhus/pkg-up.svg?branch=master)](https://travis-ci.org/sindresorhus/pkg-up)

> Find the closest package.json file


## Install

```
$ npm install --save pkg-up
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
var pkgUp = require('pkg-up');

pkgUp().then(function (filepath) {
	console.log(filepath);
	//=> '/Users/sindresorhus/foo/package.json'
});
```


## API

### pkgUp([cwd])

Returns a promise that resolves to a filepath or `null`.

### pkgUp.sync([cwd])

Returns a filepath or `null`.

#### cwd

Type: `string`  
Default: `'.'`

Directory to start from.


## Related

- [read-pkg-up](https://github.com/sindresorhus/read-pkg-up) - Read the closest package.json file
- [pkg-dir](https://github.com/sindresorhus/pkg-dir) - Find the root directory of a npm package
- [find-up](https://github.com/sindresorhus/find-up) - Find a file by walking up parent directories


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
