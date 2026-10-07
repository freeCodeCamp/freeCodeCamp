# globjoin

Join paths and globs.

[![MIT](http://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/amobiz/globjoin/blob/master/LICENSE) [![npm version](https://badge.fury.io/js/globjoin.svg)](http://badge.fury.io/js/globjoin) [![David Dependency Badge](https://david-dm.org/amobiz/globjoin.svg)](https://david-dm.org/amobiz/globjoin)

[![NPM](https://nodei.co/npm/globjoin.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/globjoin.png?downloads=true&downloadRank=true&stars=true) [![NPM](https://nodei.co/npm-dl/globjoin.png?months=6&height=3)](https://nodei.co/npm/globjoin/)

## Install
``` bash
$ npm install globjoin
```

## API

### `globjoin(globs...)`
Join paths and globs.

Like Node's [path.join()](https://nodejs.org/api/path.html#path_path_join_path1_path2) that join all arguments together and normalize the resulting path, `globjoin` takes arbitrary number of paths and/or arrays of paths, join them together and take care of negative globs.
#### Context
Don't care.
#### Parameters
##### `paths/globs`
The paths/globs or arrays of paths/globs to join.
#### Returns
The result glob, or array of globs if any of paths/globs are array.
#### Example
``` javascript
var join = require('globjoin');
var globs1 = join(__dirname, ['**/*.js', '!**/test*.js']);
var globs2 = join('test', 'fixture', 'app', ['views', '!services'], ['**/*', '!*.{js,json,coffee,ts}']);
```

Check out test for more examples.

## Issues

[Issues](https://github.com/amobiz/globjoin/issues)

## Test

``` bash
$ npm test
```

## Changelog

[Changelog](./CHANGELOG.md)

## License
MIT

## Author
[Amobiz](https://github.com/amobiz)
