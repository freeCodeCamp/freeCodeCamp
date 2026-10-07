# astral-regex [![Build Status](https://travis-ci.org/kevva/astral-regex.svg?branch=master)](https://travis-ci.org/kevva/astral-regex)

> Regular expression for matching [astral symbols](https://everything2.com/title/astral+plane)


## Install

```
$ npm install astral-regex
```


## Usage

```js
const astralRegex = require('astral-regex');

astralRegex({exact: true}).test('🦄');
//=> true

'foo 🦄 💩 bar'.match(astralRegex());
//=> ['🦄', '💩']
```


## API

### astralRegex([options])

Returns a `RegExp` for matching astral symbols.

#### options

Type: `Object`

##### exact

Type: `boolean`<br>
Default: `false` *(Matches any astral symbols in a string)*

Only match an exact string. Useful with `RegExp#test()` to check if a string is a astral symbol.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
