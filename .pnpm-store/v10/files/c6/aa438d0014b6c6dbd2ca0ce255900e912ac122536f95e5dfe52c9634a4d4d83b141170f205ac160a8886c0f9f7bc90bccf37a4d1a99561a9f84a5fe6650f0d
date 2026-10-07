# split-on-first [![Build Status](https://travis-ci.com/sindresorhus/split-on-first.svg?branch=master)](https://travis-ci.com/sindresorhus/split-on-first)

> Split a string on the first occurrence of a given separator

This is similar to [`String#split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split), but that one splits on all the occurrences, not just the first one.


## Install

```
$ npm install split-on-first
```


## Usage

```js
const splitOnFirst = require('split-on-first');

splitOnFirst('a-b-c', '-');
//=> ['a', 'b-c']

splitOnFirst('key:value:value2', ':');
//=> ['key', 'value:value2']

splitOnFirst('a---b---c', '---');
//=> ['a', 'b---c']

splitOnFirst('a-b-c', '+');
//=> ['a-b-c']
```


## API

### splitOnFirst(string, separator)

#### string

Type: `string`

The string to split.

#### separator

Type: `string`

The separator to split on.


## Related

- [split-at](https://github.com/sindresorhus/split-at) - Split a string at one or more indices


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
