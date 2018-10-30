# generate-object-property

Generate safe JS code that can used to reference a object property

	npm install generate-object-property

[![build status](http://img.shields.io/travis/mafintosh/generate-object-property.svg?style=flat)](http://travis-ci.org/mafintosh/generate-object-property)

## Usage

``` js
var gen = require('generate-object-property');
console.log(gen('a','b')); // prints a.b
console.log(gen('a', 'foo-bar')); // prints a["foo-bar"]
```

## License

MIT