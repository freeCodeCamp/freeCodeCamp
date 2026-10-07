# locate-path [![Build Status](https://travis-ci.com/sindresorhus/locate-path.svg?branch=master)](https://travis-ci.com/github/sindresorhus/locate-path)

> Get the first path that exists on disk of multiple paths

## Install

```
$ npm install locate-path
```

## Usage

Here we find the first file that exists on disk, in array order.

```js
const locatePath = require('locate-path');

const files = [
	'unicorn.png',
	'rainbow.png', // Only this one actually exists on disk
	'pony.png'
];

(async () => {
	console(await locatePath(files));
	//=> 'rainbow'
})();
```

## API

### locatePath(paths, options?)

Returns a `Promise<string>` for the first path that exists or `undefined` if none exists.

#### paths

Type: `Iterable<string>`

Paths to check.

#### options

Type: `object`

##### concurrency

Type: `number`\
Default: `Infinity`\
Minimum: `1`

Number of concurrently pending promises.

##### preserveOrder

Type: `boolean`\
Default: `true`

Preserve `paths` order when searching.

Disable this to improve performance if you don't care about the order.

##### cwd

Type: `string`\
Default: `process.cwd()`

Current working directory.

##### type

Type: `string`\
Default: `'file'`\
Values: `'file' | 'directory'`

The type of paths that can match.

##### allowSymlinks

Type: `boolean`\
Default: `true`

Allow symbolic links to match if they point to the chosen path type.

### locatePath.sync(paths, options?)

Returns the first path that exists or `undefined` if none exists.

#### paths

Type: `Iterable<string>`

Paths to check.

#### options

Type: `object`

##### cwd

Same as above.

##### type

Same as above.

##### allowSymlinks

Same as above.

## Related

- [path-exists](https://github.com/sindresorhus/path-exists) - Check if a path exists

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-locate-path?utm_source=npm-locate-path&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
