# semver-diff [![Build Status](https://travis-ci.org/sindresorhus/semver-diff.svg?branch=master)](https://travis-ci.org/sindresorhus/semver-diff)

> Get the diff type of two [semver](https://github.com/isaacs/node-semver) versions: `0.0.1 0.0.2` → `patch`


## Install

```sh
$ npm install --save semver-diff
```


## Usage

```js
var semverDiff = require('semver-diff');

semverDiff('1.1.1', '1.1.2');
//=> 'patch'

semverDiff('0.0.1', '1.0.0');
//=> 'major'

semverDiff('0.0.1', '0.1.0');
//=> 'minor'

semverDiff('0.0.1-foo', '0.0.1-foo.bar');
//=> 'prerelease'

semverDiff('0.1.0', '0.1.0+foo');
//=> 'build'

semverDiff('0.0.1', '0.0.1');
//=> null

semverDiff('0.0.2', '0.0.1');
//=> null
```


## API

### semverDiff(versionA, versionB)

Returns the difference type between two semver versions, or `null` if they're identical or the second one is lower than the first.

Possible values: `'major'`, `'minor'`, `'patch'`, `'prerelease'`, `'build'`, `null`.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
