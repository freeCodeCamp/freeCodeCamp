# require-main-filename

[![Build Status](https://travis-ci.org/yargs/require-main-filename.png)](https://travis-ci.org/yargs/require-main-filename)
[![Coverage Status](https://coveralls.io/repos/yargs/require-main-filename/badge.svg?branch=master)](https://coveralls.io/r/yargs/require-main-filename?branch=master)
[![NPM version](https://img.shields.io/npm/v/require-main-filename.svg)](https://www.npmjs.com/package/require-main-filename)

`require.main.filename` is great for figuring out the entry
point for the current application. This can be combined with a module like
[pkg-conf](https://www.npmjs.com/package/pkg-conf) to, _as if by magic_, load
top-level configuration.

Unfortunately, `require.main.filename` sometimes fails when an application is
executed with an alternative process manager, e.g., [iisnode](https://github.com/tjanczuk/iisnode).

`require-main-filename` is a shim that addresses this problem.

## Usage

```js
var main = require('require-main-filename')()
// use main as an alternative to require.main.filename.
```

## License

ISC
