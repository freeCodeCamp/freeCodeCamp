# load-json-file [![Build Status](https://travis-ci.org/sindresorhus/load-json-file.svg?branch=master)](https://travis-ci.org/sindresorhus/load-json-file)

> Read and parse a JSON file

[Strips UTF-8 BOM](https://github.com/sindresorhus/strip-bom), uses [`graceful-fs`](https://github.com/isaacs/node-graceful-fs), and throws more [helpful JSON errors](https://github.com/sindresorhus/parse-json).


## Install

```
$ npm install --save load-json-file
```


## Usage

```js
const loadJsonFile = require('load-json-file');

loadJsonFile('foo.json').then(json => {
	console.log(json);
	//=> {foo: true}
});
```


## API

### loadJsonFile(filepath)

Returns a promise that resolves to the parsed JSON.

### loadJsonFile.sync(filepath)

Returns the parsed JSON.


## Related

- [write-json-file](https://github.com/sindresorhus/write-json-file) - Stringify and write JSON to a file atomically


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
