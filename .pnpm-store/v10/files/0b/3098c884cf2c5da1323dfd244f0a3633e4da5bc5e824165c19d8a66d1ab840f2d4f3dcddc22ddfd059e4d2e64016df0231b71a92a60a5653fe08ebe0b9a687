# filter-obj [![Build Status](https://travis-ci.org/sindresorhus/filter-obj.svg?branch=master)](https://travis-ci.org/sindresorhus/filter-obj)

> Filter object keys and values into a new object


## Install

```
$ npm install --save filter-obj
```


## Usage

```js
var filterObj = require('filter-obj');

var obj = {
	foo: true,
	bar: false
};

var newObject = filterObj(obj, function (key, value, object) {
	return value === true;
});
//=> {foo: true}

var newObject2 = filterObj(obj, ['bar']);
//=> {bar: true}
```


## Related

- [map-obj](https://github.com/sindresorhus/map-obj) - Map object keys and values into a new object
- [object-assign](https://github.com/sindresorhus/object-assign) - Copy enumerable own properties from one or more source objects to a target object


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
