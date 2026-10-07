# type-of

  Type assertions aka less-broken `typeof`.


[![Build Status](https://travis-ci.org/ForbesLindesay/type-of.png?branch=master)](https://travis-ci.org/ForbesLindesay/type-of)
[![Dependency Status](https://gemnasium.com/ForbesLindesay/type-of.png)](https://gemnasium.com/ForbesLindesay/type-of)
[![NPM version](https://badge.fury.io/js/type-of.png)](http://badge.fury.io/js/type-of)

[![browser support](https://ci.testling.com/ForbesLindesay/type-of.png)](https://ci.testling.com/ForbesLindesay/type-of)

## Example

```js
var type = require('type-of')

var obj = new Date
if (type(obj) == 'date') ...
```

## API

```js
type(new Date) == 'date'
type({}) == 'object'
type(null) == 'null'
type(undefined) == 'undefined'
type("hey") == 'string'
type(true) == 'boolean'
type(false) == 'boolean'
type(12) == 'number'
type(type) == 'function'
type(/asdf/) == 'regexp'
type((function(){ return arguments })()) == 'arguments'
type([]) == 'array'
type(document.createElement('div')) == 'element'
```

## License

  MIT
