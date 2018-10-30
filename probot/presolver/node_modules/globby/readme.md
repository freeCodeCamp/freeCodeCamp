# globby [![Build Status](https://travis-ci.org/sindresorhus/globby.svg?branch=master)](https://travis-ci.org/sindresorhus/globby)

> Extends [glob](https://github.com/isaacs/node-glob) with support for multiple patterns and exposes a Promise API


## Install

```
$ npm install --save globby
```


## Usage

```
├── unicorn
├── cake
└── rainbow
```

```js
const globby = require('globby');

globby(['*', '!cake']).then(paths => {
	console.log(paths);
	//=> ['unicorn', 'rainbow']
});
```


## API

### globby(patterns, [options])

Returns a Promise for an array of matching paths.

### globby.sync(patterns, [options])

Returns an array of matching paths.

### globby.generateGlobTasks(patterns, [options])

Returns an array of objects in the format `{ pattern: string, opts: Object }`, which can be passed as arguments to [`node-glob`](https://github.com/isaacs/node-glob). This is useful for other globbing-related packages.

Note that you should avoid running the same tasks multiple times as they contain a file system cache. Instead, create a new tasks list to ensure that file system changes are taken in consideration.

#### patterns

Type: `string`, `Array`

See supported `minimatch` [patterns](https://github.com/isaacs/minimatch#usage).

#### options

Type: `Object`

See the `node-glob` [options](https://github.com/isaacs/node-glob#options).


## Globbing patterns

Just a quick overview.

- `*` matches any number of characters, but not `/`
- `?` matches a single character, but not `/`
- `**` matches any number of characters, including `/`, as long as it's the only thing in a path part
- `{}` allows for a comma-separated list of "or" expressions
- `!` at the beginning of a pattern will negate the match

[Various patterns and expected matches.](https://github.com/sindresorhus/multimatch/blob/master/test.js)


## Related

- [multimatch](https://github.com/sindresorhus/multimatch) - Match against a list instead of the filesystem
- [glob-stream](https://github.com/wearefractal/glob-stream) - Streaming alternative
- [matcher](https://github.com/sindresorhus/matcher) - Simple wildcard matching


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
