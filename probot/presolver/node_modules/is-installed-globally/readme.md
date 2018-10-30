# is-installed-globally [![Build Status](https://travis-ci.org/sindresorhus/is-installed-globally.svg?branch=master)](https://travis-ci.org/sindresorhus/is-installed-globally)

> Check if your package was installed globally

Can be useful if your CLI needs different behavior when installed globally and locally.


## Install

```
$ npm install is-installed-globally
```


## Usage

```js
const isInstalledGlobally = require('is-installed-globally');

// With `npm install your-package`
console.log(isInstalledGlobally);
//=> false

// With `npm install --global your-package`
console.log(isInstalledGlobally);
//=> true
```


## Related

- [import-global](https://github.com/sindresorhus/import-global) - Import a globally installed module
- [resolve-global](https://github.com/sindresorhus/resolve-global) - Resolve the path of a globally installed module
- [global-dirs](https://github.com/sindresorhus/global-dirs) - Get the directory of globally installed packages and binaries


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
