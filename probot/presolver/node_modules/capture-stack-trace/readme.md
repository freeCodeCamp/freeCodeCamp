# capture-stack-trace [![Build Status](https://travis-ci.org/floatdrop/capture-stack-trace.svg?branch=master)](https://travis-ci.org/floatdrop/capture-stack-trace)

> Ponyfill for Error.captureStackTrace


## Install

```
$ npm install --save capture-stack-trace
```


## Usage

```js
var captureStackTrace = require('capture-stack-trace');

captureStackTrace({});
// => {stack: ...}
```


## API

### captureStackTrace(error)

#### error

*Required*  
Type: `Object`

Target Object, that will recieve stack property.

## License

MIT © [Vsevolod Strukchinsky](http://github.com/floatdrop)
