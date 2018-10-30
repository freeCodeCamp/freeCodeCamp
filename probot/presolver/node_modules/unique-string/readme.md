# unique-string [![Build Status](https://travis-ci.org/sindresorhus/unique-string.svg?branch=master)](https://travis-ci.org/sindresorhus/unique-string)

> Generate a unique random string


## Install

```
$ npm install --save unique-string
```


## Usage

```js
const uniqueString = require('unique-string');

uniqueString();
//=> 'b4de2a49c8ffa3fbee04446f045483b2'
```


## API

### uniqueString()

Returns a 32 character unique string. Matches the length of MD5, which is [unique enough](http://stackoverflow.com/a/2444336/64949) for non-crypto purposes.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
