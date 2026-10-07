# pkg-dir [![Build Status](https://travis-ci.org/sindresorhus/pkg-dir.svg?branch=master)](https://travis-ci.org/sindresorhus/pkg-dir)

> Find the root directory of a Node.js project or npm package


## Install

```
$ npm install pkg-dir
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
const pkgDir = require('pkg-dir');

(async () => {
	const rootDir = await pkgDir(__dirname);

	console.log(rootDir);
	//=> '/Users/sindresorhus/foo'
})();
```


## API

### pkgDir([cwd])

Returns a `Promise` for either the project root path or `null` if it couldn't be found.

### pkgDir.sync([cwd])

Returns the project root path or `null`.

#### cwd

Type: `string`<br>
Default: `process.cwd()`

Directory to start from.


## Related

- [pkg-dir-cli](https://github.com/sindresorhus/pkg-dir-cli) - CLI for this module
- [pkg-up](https://github.com/sindresorhus/pkg-up) - Find the closest package.json file
- [find-up](https://github.com/sindresorhus/find-up) - Find a file by walking up parent directories


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
