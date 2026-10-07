# require-from-string [![Build Status](https://travis-ci.org/floatdrop/require-from-string.svg?branch=master)](https://travis-ci.org/floatdrop/require-from-string)

Load module from string in Node.

## Install

```
$ npm install --save require-from-string
```


## Usage

```js
var requireFromString = require('require-from-string');

requireFromString('module.exports = 1');
//=> 1
```


## API

### requireFromString(code, [filename], [options])

#### code

*Required*  
Type: `string`

Module code.

#### filename
Type: `string`  
Default: `''`

Optional filename.


#### options
Type: `object`

##### appendPaths
Type: `Array`

List of `paths`, that will be appended to module `paths`. Useful, when you want
to be able require modules from these paths.

##### prependPaths
Type: `Array`

Same as `appendPaths`, but paths will be prepended.

## License

MIT © [Vsevolod Strukchinsky](http://github.com/floatdrop)
