# del [![Build Status](https://travis-ci.org/sindresorhus/del.svg?branch=master)](https://travis-ci.org/sindresorhus/del)

> Delete files and folders using [globs](https://github.com/isaacs/minimatch#usage)

Pretty much [rimraf](https://github.com/isaacs/rimraf) with a Promise API and support for multiple files and globbing. It also protects you against deleting the current working directory and above.

---

<p align="center"><b>🔥 Want to strengthen your core JavaScript skills and master ES6?</b><br>I would personally recommend this awesome <a href="https://ES6.io/friend/AWESOME">ES6 course</a> by Wes Bos.</p>

---


## Install

```
$ npm install --save del
```


## Usage

```js
const del = require('del');

del(['tmp/*.js', '!tmp/unicorn.js']).then(paths => {
	console.log('Deleted files and folders:\n', paths.join('\n'));
});
```


## Beware

The glob pattern `**` matches all children and *the parent*.

So this won't work:

```js
del.sync(['public/assets/**', '!public/assets/goat.png']);
```

You have to explicitly ignore the parent directories too:

```js
del.sync(['public/assets/**', '!public/assets', '!public/assets/goat.png']);
```

Suggestions on how to improve this welcome!


## API

### del(patterns, [options])

Returns a promise for an array of deleted paths.

### del.sync(patterns, [options])

Returns an array of deleted paths.

#### patterns

Type: `string`, `array`

See supported minimatch [patterns](https://github.com/isaacs/minimatch#usage).

- [Pattern examples with expected matches](https://github.com/sindresorhus/multimatch/blob/master/test.js)
- [Quick globbing pattern overview](https://github.com/sindresorhus/multimatch#globbing-patterns)

#### options

Type: `object`

See the `node-glob` [options](https://github.com/isaacs/node-glob#options).

##### force

Type: `boolean`  
Default: `false`

Allow deleting the current working directory and outside.

##### dryRun

Type: `boolean`  
Default: `false`

See what would be deleted.

```js
const del = require('del');

del(['tmp/*.js'], {dryRun: true}).then(paths => {
	console.log('Files and folders that would be deleted:\n', paths.join('\n'));
});
```


## CLI

See [del-cli](https://github.com/sindresorhus/del-cli) for a CLI for this module and [trash-cli](https://github.com/sindresorhus/trash-cli) for a safe version that is suitable for running by hand.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
