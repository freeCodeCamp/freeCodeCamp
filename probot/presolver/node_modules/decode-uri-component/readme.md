# decode-uri-component

[![Build Status](https://travis-ci.org/SamVerschueren/decode-uri-component.svg?branch=master)](https://travis-ci.org/SamVerschueren/decode-uri-component) [![Coverage Status](https://coveralls.io/repos/SamVerschueren/decode-uri-component/badge.svg?branch=master&service=github)](https://coveralls.io/github/SamVerschueren/decode-uri-component?branch=master)

> A better [decodeURIComponent](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent)


## Why?

- Decodes `+` to a space.
- Converts the [BOM](https://en.wikipedia.org/wiki/Byte_order_mark) to a [replacement character](https://en.wikipedia.org/wiki/Specials_(Unicode_block)#Replacement_character) `�`.
- Does not throw with invalid encoded input.
- Decodes as much of the string as possible.


## Install

```
$ npm install --save decode-uri-component
```


## Usage

```js
const decodeUriComponent = require('decode-uri-component');

decodeUriComponent('%25');
//=> '%'

decodeUriComponent('%');
//=> '%'

decodeUriComponent('st%C3%A5le');
//=> 'ståle'

decodeUriComponent('%st%C3%A5le%');
//=> '%ståle%'

decodeUriComponent('%%7Bst%C3%A5le%7D%');
//=> '%{ståle}%'

decodeUriComponent('%7B%ab%%7C%de%%7D');
//=> '{%ab%|%de%}'

decodeUriComponent('%FE%FF');
//=> '\uFFFD\uFFFD'

decodeUriComponent('%C2');
//=> '\uFFFD'

decodeUriComponent('%C2%B5');
//=> 'µ'
```


## API

### decodeUriComponent(encodedURI)

#### encodedURI

Type: `string`

An encoded component of a Uniform Resource Identifier.


## License

MIT © [Sam Verschueren](https://github.com/SamVerschueren)
