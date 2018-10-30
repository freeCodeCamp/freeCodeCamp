# binary-extensions [![Build Status](https://travis-ci.org/sindresorhus/binary-extensions.svg?branch=master)](https://travis-ci.org/sindresorhus/binary-extensions)

> List of binary file extensions

The list is just a [JSON file](binary-extensions.json) and can be used wherever.


## Install

```
$ npm install binary-extensions
```


## Usage

```js
const binaryExtensions = require('binary-extensions');

console.log(binaryExtensions);
//=> ['3ds', '3g2', …]
```


## Related

- [is-binary-path](https://github.com/sindresorhus/is-binary-path) - Check if a filepath is a binary file
- [text-extensions](https://github.com/sindresorhus/text-extensions) - List of text file extensions


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
