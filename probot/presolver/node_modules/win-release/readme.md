# win-release [![Build Status](https://travis-ci.org/sindresorhus/win-release.svg?branch=master)](https://travis-ci.org/sindresorhus/win-release)

> Get the name of a Windows version from the release number: `5.1.2600` → `XP`


## Install

```
$ npm install --save win-release
```


## Usage

```js
var os = require('os');
var winRelease = require('win-release');

// on a Windows XP system

winRelease();
//=> 'XP'

os.release();
//=> '5.1.2600'

winRelease(os.release());
//=> 'XP'

winRelease('4.9.3000');
//=> 'ME'
```


## API

### winRelease([release])

#### release

Type: `string`

By default the current OS is used, but you can supply a custom release number, which is the output of [`os.release()`](http://nodejs.org/api/os.html#os_os_release).


## Related

- [os-name](https://github.com/sindresorhus/os-name) - Get the name of the current operating system
- [osx-release](https://github.com/sindresorhus/osx-release) - Get the name and version of a OS X release from the Darwin version


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
