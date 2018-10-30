# require-uncached [![Build Status](https://travis-ci.org/sindresorhus/require-uncached.svg?branch=master)](https://travis-ci.org/sindresorhus/require-uncached)

> Require a module bypassing the [cache](https://nodejs.org/api/modules.html#modules_caching)

Useful for testing purposes when you need to freshly require a module.


## Install

```
$ npm install --save require-uncached
```


## Usage

```js
// foo.js
let i = 0;
module.exports = () => ++i;
```

```js
const requireUncached = require('require-uncached');

require('./foo')();
//=> 1

require('./foo')();
//=> 2

requireUncached('./foo')();
//=> 1

requireUncached('./foo')();
//=> 1
```


## Related

- [clear-require](https://github.com/sindresorhus/clear-require) - Clear a module from the require cache


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
