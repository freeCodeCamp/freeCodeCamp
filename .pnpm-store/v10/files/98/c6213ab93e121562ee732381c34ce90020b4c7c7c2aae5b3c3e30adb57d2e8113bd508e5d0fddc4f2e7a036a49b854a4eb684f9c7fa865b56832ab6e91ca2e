# make-dir [![Build Status](https://travis-ci.org/sindresorhus/make-dir.svg?branch=master)](https://travis-ci.org/sindresorhus/make-dir) [![codecov](https://codecov.io/gh/sindresorhus/make-dir/branch/master/graph/badge.svg)](https://codecov.io/gh/sindresorhus/make-dir)

> Make a directory and its parents if needed - Think `mkdir -p`


## Advantages over [`mkdirp`](https://github.com/substack/node-mkdirp)

- Promise API *(Async/await ready!)*
- Fixes many `mkdirp` issues: [#96](https://github.com/substack/node-mkdirp/pull/96) [#70](https://github.com/substack/node-mkdirp/issues/70) [#66](https://github.com/substack/node-mkdirp/issues/66)
- 100% test coverage
- CI-tested on macOS, Linux, and Windows
- Actively maintained
- Doesn't bundle a CLI
- Uses native the `fs.mkdir/mkdirSync` [`recursive` option](https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_mkdir_path_options_callback) in Node.js >=10.12.0 unless [overridden](#fs)


## Install

```
$ npm install make-dir
```


## Usage

```
$ pwd
/Users/sindresorhus/fun
$ tree
.
```

```js
const makeDir = require('make-dir');

(async () => {
	const path = await makeDir('unicorn/rainbow/cake');

	console.log(path);
	//=> '/Users/sindresorhus/fun/unicorn/rainbow/cake'
})();
```

```
$ tree
.
└── unicorn
    └── rainbow
        └── cake
```

Multiple directories:

```js
const makeDir = require('make-dir');

(async () => {
	const paths = await Promise.all([
		makeDir('unicorn/rainbow'),
		makeDir('foo/bar')
	]);

	console.log(paths);
	/*
	[
		'/Users/sindresorhus/fun/unicorn/rainbow',
		'/Users/sindresorhus/fun/foo/bar'
	]
	*/
})();
```


## API

### makeDir(path, [options])

Returns a `Promise` for the path to the created directory.

### makeDir.sync(path, [options])

Returns the path to the created directory.

#### path

Type: `string`

Directory to create.

#### options

Type: `Object`

##### mode

Type: `integer`<br>
Default: `0o777 & (~process.umask())`

Directory [permissions](https://x-team.com/blog/file-system-permissions-umask-node-js/).

##### fs

Type: `Object`<br>
Default: `require('fs')`

Use a custom `fs` implementation. For example [`graceful-fs`](https://github.com/isaacs/node-graceful-fs).

Using a custom `fs` implementation will block the use of the native `recursive` option if `fs.mkdir` or `fs.mkdirSync` is not the native function.


## Related

- [make-dir-cli](https://github.com/sindresorhus/make-dir-cli) - CLI for this module
- [del](https://github.com/sindresorhus/del) - Delete files and directories
- [globby](https://github.com/sindresorhus/globby) - User-friendly glob matching
- [cpy](https://github.com/sindresorhus/cpy) - Copy files
- [cpy-cli](https://github.com/sindresorhus/cpy-cli) - Copy files on the command-line
- [move-file](https://github.com/sindresorhus/move-file) - Move a file


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
