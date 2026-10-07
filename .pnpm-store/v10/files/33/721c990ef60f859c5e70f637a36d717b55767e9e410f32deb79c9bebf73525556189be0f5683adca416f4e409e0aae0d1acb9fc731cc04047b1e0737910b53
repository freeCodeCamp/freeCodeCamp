# redent [![Build Status](https://travis-ci.org/sindresorhus/redent.svg?branch=master)](https://travis-ci.org/sindresorhus/redent)

> [Strip redundant indentation](https://github.com/sindresorhus/strip-indent) and [indent the string](https://github.com/sindresorhus/indent-string)


## Install

```
$ npm install redent
```


## Usage

```js
const redent = require('redent');

redent('\n  foo\n    bar\n', 1);
//=> '\n foo\n   bar\n'
```


## API

### redent(string, [count], [options])

#### string

Type: `string`

The string to normalize indentation.

#### count

Type: `number`<br>
Default: `0`

How many times you want `options.indent` repeated.

#### options

Type: `object`

##### indent

Type: `string`<br>
Default: `' '`

The string to use for the indent.

##### includeEmptyLines

Type: `boolean`<br>
Default: `false`

Also indent empty lines.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
