# is-retry-allowed [![Build Status](https://travis-ci.org/floatdrop/is-retry-allowed.svg?branch=master)](https://travis-ci.org/floatdrop/is-retry-allowed)

Is retry allowed for Error?


## Install

```
$ npm install --save is-retry-allowed
```


## Usage

```js
const isRetryAllowed = require('is-retry-allowed');

isRetryAllowed({code: 'ETIMEDOUT'});
//=> true

isRetryAllowed({code: 'ENOTFOUND'});
//=> false

isRetryAllowed({});
//=> true
```


## API

### isRetryAllowed(error)

#### error

Type: `object`

Object with `code` property, which will be used to determine retry.


## License

MIT © [Vsevolod Strukchinsky](http://github.com/floatdrop)
