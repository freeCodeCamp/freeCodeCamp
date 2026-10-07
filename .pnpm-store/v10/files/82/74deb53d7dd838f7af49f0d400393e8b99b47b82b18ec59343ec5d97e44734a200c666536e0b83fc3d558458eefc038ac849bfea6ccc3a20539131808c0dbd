# parent-module [![Build Status](https://travis-ci.org/sindresorhus/parent-module.svg?branch=master)](https://travis-ci.org/sindresorhus/parent-module)

> Get the path of the parent module

Node.js exposes `module.parent`, but it only gives you the first cached parent, which is not necessarily the actual parent.


## Install

```
$ npm install parent-module
```


## Usage

```js
// bar.js
const parentModule = require('parent-module');

module.exports = () => {
	console.log(parentModule());
	//=> '/Users/sindresorhus/dev/unicorn/foo.js'
};
```

```js
// foo.js
const bar = require('./bar');

bar();
```


## API

### parentModule([filepath])

By default, it will return the path of the immediate parent.

#### filepath

Type: `string`<br>
Default: [`__filename`](https://nodejs.org/api/globals.html#globals_filename)

Filepath of the module of which to get the parent path.

Useful if you want it to work [multiple module levels down](https://github.com/sindresorhus/parent-module/tree/master/fixtures/filepath).


## Tip

Combine it with [`read-pkg-up`](https://github.com/sindresorhus/read-pkg-up) to read the package.json of the parent module.

```js
const path = require('path');
const readPkgUp = require('read-pkg-up');
const parentModule = require('parent-module');

console.log(readPkgUp.sync({cwd: path.dirname(parentModule())}).pkg);
//=> {name: 'chalk', version: '1.0.0', …}
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
