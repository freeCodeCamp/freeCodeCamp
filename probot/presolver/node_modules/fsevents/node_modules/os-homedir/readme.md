# os-homedir [![Build Status](https://travis-ci.org/sindresorhus/os-homedir.svg?branch=master)](https://travis-ci.org/sindresorhus/os-homedir)

> Node.js 4 [`os.homedir()`](https://nodejs.org/api/os.html#os_os_homedir) [ponyfill](https://ponyfill.com)


## Install

```
$ npm install --save os-homedir
```


## Usage

```js
const osHomedir = require('os-homedir');

console.log(osHomedir());
//=> '/Users/sindresorhus'
```


## Related

- [user-home](https://github.com/sindresorhus/user-home) - Same as this module but caches the result
- [home-or-tmp](https://github.com/sindresorhus/home-or-tmp) - Get the user home directory with fallback to the system temp directory


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
