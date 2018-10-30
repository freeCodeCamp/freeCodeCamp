# macos-release [![Build Status](https://travis-ci.org/sindresorhus/macos-release.svg?branch=master)](https://travis-ci.org/sindresorhus/macos-release)

> Get the name and version of a macOS release from the Darwin version<br>
> Example: `13.2.0` → `{name: 'Mavericks', version: '10.9'}`


## Install

```
$ npm install --save macos-release
```


## Usage

```js
const os = require('os');
const macosRelease = require('macos-release');

// on a macOS Sierra system

macosRelease();
//=> {name: 'Sierra', version: '10.12'}

os.release();
//=> 13.2.0
// this is the Darwin kernel version

macosRelease(os.release());
//=> {name: 'Sierra', version: '10.12'}

macosRelease('14.0.0');
//=> {name: 'Yosemite', version: '10.10'}
```


## API

### macosRelease([release])

#### release

Type: `string`

By default the current operating system is used, but you can supply a custom [Darwin kernel version](http://en.wikipedia.org/wiki/Darwin_%28operating_system%29#Release_history), which is the output of [`os.release()`](http://nodejs.org/api/os.html#os_os_release).


## Related

- [os-name](https://github.com/sindresorhus/os-name) - Get the name of the current operating system. Example: `macOS Sierra`
- [macos-version](https://github.com/sindresorhus/macos-version) - Get the macOS version of the current system. Example: `10.9.3`
- [win-release](https://github.com/sindresorhus/win-release) - Get the name of a Windows version from the release number: `5.1.2600` → `XP`


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
