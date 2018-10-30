# is-path-inside [![Build Status](https://travis-ci.org/sindresorhus/is-path-inside.svg?branch=master)](https://travis-ci.org/sindresorhus/is-path-inside)

> Check if a path is inside another path


## Install

```
$ npm install --save is-path-inside
```


## Usage

```js
var isPathInside = require('is-path-inside');

isPathInside('a/b/c', 'a/b');
//=> true

isPathInside('a/b/c', 'x/y');
//=> false

isPathInside('a/b/c', 'a/b/c');
//=> false

isPathInside('/Users/sindresorhus/dev/unicorn', '/Users/sindresorhus');
//=> true
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
