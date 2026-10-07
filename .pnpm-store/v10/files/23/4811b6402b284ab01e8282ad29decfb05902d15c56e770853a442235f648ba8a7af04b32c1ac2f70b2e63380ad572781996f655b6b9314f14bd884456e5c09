# find-up [![Build Status](https://travis-ci.com/sindresorhus/find-up.svg?branch=master)](https://travis-ci.com/github/sindresorhus/find-up)

> Find a file or directory by walking up parent directories

## Install

```
$ npm install find-up
```

## Usage

```
/
└── Users
    └── sindresorhus
        ├── unicorn.png
        └── foo
            └── bar
                ├── baz
                └── example.js
```

`example.js`

```js
const path = require('path');
const findUp = require('find-up');

(async () => {
	console.log(await findUp('unicorn.png'));
	//=> '/Users/sindresorhus/unicorn.png'

	console.log(await findUp(['rainbow.png', 'unicorn.png']));
	//=> '/Users/sindresorhus/unicorn.png'

	console.log(await findUp(async directory => {
		const hasUnicorns = await findUp.exists(path.join(directory, 'unicorn.png'));
		return hasUnicorns && directory;
	}, {type: 'directory'}));
	//=> '/Users/sindresorhus'
})();
```

## API

### findUp(name, options?)
### findUp(matcher, options?)

Returns a `Promise` for either the path or `undefined` if it couldn't be found.

### findUp([...name], options?)

Returns a `Promise` for either the first path found (by respecting the order of the array) or `undefined` if none could be found.

### findUp.sync(name, options?)
### findUp.sync(matcher, options?)

Returns a path or `undefined` if it couldn't be found.

### findUp.sync([...name], options?)

Returns the first path found (by respecting the order of the array) or `undefined` if none could be found.

#### name

Type: `string`

Name of the file or directory to find.

#### matcher

Type: `Function`

A function that will be called with each directory until it returns a `string` with the path, which stops the search, or the root directory has been reached and nothing was found. Useful if you want to match files with certain patterns, set of permissions, or other advanced use-cases.

When using async mode, the `matcher` may optionally be an async or promise-returning function that returns the path.

#### options

Type: `object`

##### cwd

Type: `string`\
Default: `process.cwd()`

Directory to start from.

##### type

Type: `string`\
Default: `'file'`\
Values: `'file'` `'directory'`

The type of paths that can match.

##### allowSymlinks

Type: `boolean`\
Default: `true`

Allow symbolic links to match if they point to the chosen path type.

### findUp.exists(path)

Returns a `Promise<boolean>` of whether the path exists.

### findUp.sync.exists(path)

Returns a `boolean` of whether the path exists.

#### path

Type: `string`

Path to a file or directory.

### findUp.stop

A [`Symbol`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) that can be returned by a `matcher` function to stop the search and cause `findUp` to immediately return `undefined`. Useful as a performance optimization in case the current working directory is deeply nested in the filesystem.

```js
const path = require('path');
const findUp = require('find-up');

(async () => {
	await findUp(directory => {
		return path.basename(directory) === 'work' ? findUp.stop : 'logo.png';
	});
})();
```

## Related

- [find-up-cli](https://github.com/sindresorhus/find-up-cli) - CLI for this module
- [pkg-up](https://github.com/sindresorhus/pkg-up) - Find the closest package.json file
- [pkg-dir](https://github.com/sindresorhus/pkg-dir) - Find the root directory of an npm package
- [resolve-from](https://github.com/sindresorhus/resolve-from) - Resolve the path of a module like `require.resolve()` but from a given path

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-find-up?utm_source=npm-find-up&utm_medium=referral&utm_campaign=readme">Get professional support for 'find-up' with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
