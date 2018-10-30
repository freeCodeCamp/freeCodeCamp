# find-up [![Build Status](https://travis-ci.org/sindresorhus/find-up.svg?branch=master)](https://travis-ci.org/sindresorhus/find-up)

> Find a file by walking up parent directories


## Install

```
$ npm install --save find-up
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

```js
// example.js
const findUp = require('find-up');

findUp('unicorn.png').then(filepath => {
	console.log(filepath);
	//=> '/Users/sindresorhus/unicorn.png'
});
```


## API

### findUp(filename, [options])

Returns a promise for the filepath or `null`.

### findUp.sync(filename, [options])

Returns a filepath or `null`.

#### filename

Type: `string`

Filename of the file to find.

#### options

##### cwd

Type: `string`  
Default: `process.cwd()`

Directory to start from.


## Related

- [find-up-cli](https://github.com/sindresorhus/find-up-cli) - CLI for this module
- [pkg-up](https://github.com/sindresorhus/pkg-up) - Find the closest package.json file
- [pkg-dir](https://github.com/sindresorhus/pkg-dir) - Find the root directory of an npm package


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
