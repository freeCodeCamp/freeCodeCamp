# dir-glob [![Build Status](https://travis-ci.org/kevva/dir-glob.svg?branch=master)](https://travis-ci.org/kevva/dir-glob)

> Convert directories to glob compatible strings


## Install

```
$ npm install dir-glob
```


## Usage

```js
const dirGlob = require('dir-glob');

(async () => {
	console.log(await dirGlob(['index.js', 'test.js', 'fixtures']));
	//=> ['index.js', 'test.js', 'fixtures/**']

	console.log(await dirGlob(['index.js', 'inner_folder'], {cwd: 'fixtures'}));
	//=> ['index.js', 'inner_folder/**']

	console.log(await dirGlob(['lib/**', 'fixtures'], {
		files: ['test', 'unicorn']
		extensions: ['js']
	}));
	//=> ['lib/**', 'fixtures/**/test.js', 'fixtures/**/unicorn.js']

	console.log(await dirGlob(['lib/**', 'fixtures'], {
		files: ['test', 'unicorn', '*.jsx'],
		extensions: ['js', 'png']
	}));
	//=> ['lib/**', 'fixtures/**/test.{js,png}', 'fixtures/**/unicorn.{js,png}', 'fixtures/**/*.jsx']
})();
```


## API

### dirGlob(input, options?)

Returns a `Promise<string[]>` with globs.

### dirGlob.sync(input, options?)

Returns a `string[]` with globs.

#### input

Type: `string | string[]`

Paths.

#### options

Type: `object`

##### extensions

Type: `string[]`

Append extensions to the end of your globs.

##### files

Type: `string[]`

Only glob for certain files.

##### cwd

Type: `string[]`

Test in specific directory.
