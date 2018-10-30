# home-or-tmp [![Build Status](https://travis-ci.org/sindresorhus/home-or-tmp.svg?branch=master)](https://travis-ci.org/sindresorhus/home-or-tmp)

> Get the user home directory with fallback to the system temp directory

Useful in cases where the home directory either isn't set or doesn't exist.


## Install

```
$ npm install --save home-or-tmp
```


## Usage

```js
var homeOrTmp = require('home-or-tmp');

console.log(homeOrTmp);
//=> '/Users/sindresorhus'

// and if there's no home directory:

console.log(homeOrTmp);
//=> '/var/folders/m3/5574nnhn0yj488ccryqr7tc80000gn/T'
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
