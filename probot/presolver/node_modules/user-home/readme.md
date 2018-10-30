# user-home [![Build Status](https://travis-ci.org/sindresorhus/user-home.svg?branch=master)](https://travis-ci.org/sindresorhus/user-home)

> Get the path to the user home directory


## Install

```
$ npm install --save user-home
```


## Usage

```js
var userHome = require('user-home');

console.log(userHome);
//=> '/Users/sindresorhus'
```

Returns `null` in the unlikely scenario that the home directory can't be found.


## Related

- [user-home-cli](https://github.com/sindresorhus/user-home-cli) - CLI for this module
- [home-or-tmp](https://github.com/sindresorhus/home-or-tmp) - Get the user home directory with fallback to the system temp directory


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
