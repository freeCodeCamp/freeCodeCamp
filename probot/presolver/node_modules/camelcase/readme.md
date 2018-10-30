# camelcase [![Build Status](https://travis-ci.org/sindresorhus/camelcase.svg?branch=master)](https://travis-ci.org/sindresorhus/camelcase)

> Convert a dash/dot/underscore/space separated string to camelCase: `foo-bar` → `fooBar`


## Install

```sh
$ npm install --save camelcase
```


## Usage

```js
var camelCase = require('camelcase');

camelCase('foo-bar');
//=> fooBar

camelCase('foo_bar');
//=> fooBar

camelCase('Foo-Bar');
//=> fooBar

camelCase('--foo.bar');
//=> fooBar

camelCase('__foo__bar__');
//=> fooBar

camelCase('foo bar');
//=> fooBar

console.log(process.argv[3]);
//=> --foo-bar
camelCase(process.argv[3]);
//=> fooBar

camelCase('foo', 'bar');
//=> fooBar

camelCase('__foo__', '--bar');
//=> fooBar
```


## Related

See [`decamelize`](https://github.com/sindresorhus/decamelize) for the inverse.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
