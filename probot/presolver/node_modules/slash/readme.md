# slash [![Build Status](https://travis-ci.org/sindresorhus/slash.svg?branch=master)](https://travis-ci.org/sindresorhus/slash)

> Convert Windows backslash paths to slash paths: `foo\\bar` ➔ `foo/bar`

[Forward-slash paths can be used in Windows](http://superuser.com/a/176395/6877) as long as they're not extended-length paths and don't contain any non-ascii characters.

This was created since the `path` methods in Node outputs `\\` paths on Windows.


## Install

```sh
$ npm install --save slash
```


## Usage

```js
var path = require('path');
var slash = require('slash');

var str = path.join('foo', 'bar');
// Unix    => foo/bar
// Windows => foo\\bar

slash(str);
// Unix    => foo/bar
// Windows => foo/bar
```


## API

### slash(path)

Type: `string`

Accepts a Windows backslash path and returns a slash path.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
