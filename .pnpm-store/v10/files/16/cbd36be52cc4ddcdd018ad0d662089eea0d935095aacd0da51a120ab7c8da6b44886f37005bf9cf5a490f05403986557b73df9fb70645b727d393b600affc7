# globby

> User-friendly glob matching

Based on [`fast-glob`](https://github.com/mrmlnc/fast-glob) but adds a bunch of useful features.

## Features

- Promise API
- Multiple patterns
- Negated patterns: `['foo*', '!foobar']`
- Expands directories: `foo` → `foo/**/*`
- Supports `.gitignore`

## Install

```
$ npm install globby
```

## Usage

```
├── unicorn
├── cake
└── rainbow
```

```js
const globby = require('globby');

(async () => {
	const paths = await globby(['*', '!cake']);

	console.log(paths);
	//=> ['unicorn', 'rainbow']
})();
```

## API

Note that glob patterns can only contain forward-slashes, not backward-slashes, so if you want to construct a glob pattern from path components, you need to use `path.posix.join()` instead of `path.join()`.

### globby(patterns, options?)

Returns a `Promise<string[]>` of matching paths.

#### patterns

Type: `string | string[]`

See supported `minimatch` [patterns](https://github.com/isaacs/minimatch#usage).

#### options

Type: `object`

See the [`fast-glob` options](https://github.com/mrmlnc/fast-glob#options-3) in addition to the ones below.

##### expandDirectories

Type: `boolean | string[] | object`\
Default: `true`

If set to `true`, `globby` will automatically glob directories for you. If you define an `Array` it will only glob files that matches the patterns inside the `Array`. You can also define an `object` with `files` and `extensions` like below:

```js
const globby = require('globby');

(async () => {
	const paths = await globby('images', {
		expandDirectories: {
			files: ['cat', 'unicorn', '*.jpg'],
			extensions: ['png']
		}
	});

	console.log(paths);
	//=> ['cat.png', 'unicorn.png', 'cow.jpg', 'rainbow.jpg']
})();
```

Note that if you set this option to `false`, you won't get back matched directories unless you set `onlyFiles: false`.

##### gitignore

Type: `boolean`\
Default: `false`

Respect ignore patterns in `.gitignore` files that apply to the globbed files.

### globby.sync(patterns, options?)

Returns `string[]` of matching paths.

### globby.stream(patterns, options?)

Returns a [`stream.Readable`](https://nodejs.org/api/stream.html#stream_readable_streams) of matching paths.

Since Node.js 10, [readable streams are iterable](https://nodejs.org/api/stream.html#stream_readable_symbol_asynciterator), so you can loop over glob matches in a [`for await...of` loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of) like this:

```js
const globby = require('globby');

(async () => {
	for await (const path of globby.stream('*.tmp')) {
		console.log(path);
	}
})();
```

### globby.generateGlobTasks(patterns, options?)

Returns an `object[]` in the format `{pattern: string, options: Object}`, which can be passed as arguments to [`fast-glob`](https://github.com/mrmlnc/fast-glob). This is useful for other globbing-related packages.

Note that you should avoid running the same tasks multiple times as they contain a file system cache. Instead, run this method each time to ensure file system changes are taken into consideration.

### globby.hasMagic(patterns, options?)

Returns a `boolean` of whether there are any special glob characters in the `patterns`.

Note that the options affect the results.

This function is backed by [`fast-glob`](https://github.com/mrmlnc/fast-glob#isdynamicpatternpattern-options).

### globby.gitignore(options?)

Returns a `Promise<(path: string) => boolean>` indicating whether a given path is ignored via a `.gitignore` file.

Takes `cwd?: string` and `ignore?: string[]` as options. `.gitignore` files matched by the ignore config are not used for the resulting filter function.

```js
const {gitignore} = require('globby');

(async () => {
	const isIgnored = await gitignore();
	console.log(isIgnored('some/file'));
})();
```

### globby.gitignore.sync(options?)

Returns a `(path: string) => boolean` indicating whether a given path is ignored via a `.gitignore` file.

Takes the same options as `globby.gitignore`.

## Globbing patterns

Just a quick overview.

- `*` matches any number of characters, but not `/`
- `?` matches a single character, but not `/`
- `**` matches any number of characters, including `/`, as long as it's the only thing in a path part
- `{}` allows for a comma-separated list of "or" expressions
- `!` at the beginning of a pattern will negate the match

[Various patterns and expected matches.](https://github.com/sindresorhus/multimatch/blob/main/test/test.js)

## globby for enterprise

Available as part of the Tidelift Subscription.

The maintainers of globby and thousands of other packages are working with Tidelift to deliver commercial support and maintenance for the open source dependencies you use to build your applications. Save time, reduce risk, and improve code health, while paying the maintainers of the exact dependencies you use. [Learn more.](https://tidelift.com/subscription/pkg/npm-globby?utm_source=npm-globby&utm_medium=referral&utm_campaign=enterprise&utm_term=repo)

## Related

- [multimatch](https://github.com/sindresorhus/multimatch) - Match against a list instead of the filesystem
- [matcher](https://github.com/sindresorhus/matcher) - Simple wildcard matching
- [del](https://github.com/sindresorhus/del) - Delete files and directories
- [make-dir](https://github.com/sindresorhus/make-dir) - Make a directory and its parents if needed
