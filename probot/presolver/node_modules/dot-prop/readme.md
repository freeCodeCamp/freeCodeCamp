# dot-prop [![Build Status](https://travis-ci.org/sindresorhus/dot-prop.svg?branch=master)](https://travis-ci.org/sindresorhus/dot-prop)

> Get, set, or delete a property from a nested object using a dot path


## Install

```
$ npm install --save dot-prop
```


## Usage

```js
const dotProp = require('dot-prop');

// getter
dotProp.get({foo: {bar: 'unicorn'}}, 'foo.bar');
//=> 'unicorn'

dotProp.get({foo: {bar: 'a'}}, 'foo.notDefined.deep');
//=> undefined

dotProp.get({foo: {bar: 'a'}}, 'foo.notDefined.deep', 'default value');
//=> 'default value'

dotProp.get({foo: {'dot.dot': 'unicorn'}}, 'foo.dot\\.dot');
//=> 'unicorn'

// setter
const obj = {foo: {bar: 'a'}};
dotProp.set(obj, 'foo.bar', 'b');
console.log(obj);
//=> {foo: {bar: 'b'}}

const foo = dotProp.set({}, 'foo.bar', 'c');
console.log(foo);
//=> {foo: {bar: 'c'}}

dotProp.set(obj, 'foo.baz', 'x');
console.log(obj);
//=> {foo: {bar: 'b', baz: 'x'}}

// has
dotProp.has({foo: {bar: 'unicorn'}}, 'foo.bar');
//=> true

// deleter
const obj = {foo: {bar: 'a'}};
dotProp.delete(obj, 'foo.bar');
console.log(obj);
//=> {foo: {}}

obj.foo.bar = {x: 'y', y: 'x'};
dotProp.delete(obj, 'foo.bar.x');
console.log(obj);
//=> {foo: {bar: {y: 'x'}}}
```


## API

### get(obj, path, [defaultValue])

### set(obj, path, value)

Returns the object.

### has(obj, path)

### delete(obj, path)

#### obj

Type: `Object`

Object to get, set, or delete the `path` value.

#### path

Type: `string`

Path of the property in the object, using `.` to separate each nested key.

Use `\\.` if you have a `.` in the key.

#### value

Type: `any`

Value to set at `path`.

#### defaultValue

Type: `any`

Default value.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
