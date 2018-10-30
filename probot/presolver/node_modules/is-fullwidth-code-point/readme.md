# is-fullwidth-code-point [![Build Status](https://travis-ci.org/sindresorhus/is-fullwidth-code-point.svg?branch=master)](https://travis-ci.org/sindresorhus/is-fullwidth-code-point)

> Check if the character represented by a given [Unicode code point](https://en.wikipedia.org/wiki/Code_point) is [fullwidth](https://en.wikipedia.org/wiki/Halfwidth_and_fullwidth_forms)


## Install

```
$ npm install --save is-fullwidth-code-point
```


## Usage

```js
const isFullwidthCodePoint = require('is-fullwidth-code-point');

isFullwidthCodePoint('谢'.codePointAt());
//=> true

isFullwidthCodePoint('a'.codePointAt());
//=> false
```


## API

### isFullwidthCodePoint(input)

#### input

Type: `number`

[Code point](https://en.wikipedia.org/wiki/Code_point) of a character.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
