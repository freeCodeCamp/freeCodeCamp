# is-npm [![Build Status](https://travis-ci.org/sindresorhus/is-npm.svg?branch=master)](https://travis-ci.org/sindresorhus/is-npm)

> Check if your code is running as an [npm script](https://www.npmjs.org/doc/misc/npm-scripts.html)


## Install

```sh
$ npm install --save is-npm
```


## Usage

```js
var isNpm = require('is-npm');
console.log(isNpm);
```

```sh
$ node foo.js
#=> false
$ npm run foo
#=> true
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
