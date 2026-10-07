# path-key [![Build Status](https://travis-ci.org/sindresorhus/path-key.svg?branch=master)](https://travis-ci.org/sindresorhus/path-key)

> Get the [PATH](https://en.wikipedia.org/wiki/PATH_(variable)) environment variable key cross-platform

It's usually `PATH`, but on Windows it can be any casing like `Path`...


## Install

```
$ npm install --save path-key
```


## Usage

```js
const pathKey = require('path-key');

const key = pathKey();
//=> 'PATH'

const PATH = process.env[key];
//=> '/usr/local/bin:/usr/bin:/bin'
```


## API

### pathKey([options])

#### options

##### env

Type: `Object`<br>
Default: [`process.env`](https://nodejs.org/api/process.html#process_process_env)

Use a custom environment variables object.

#### platform

Type: `string`<br>
Default: [`process.platform`](https://nodejs.org/api/process.html#process_process_platform)

Get the PATH key for a specific platform.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
