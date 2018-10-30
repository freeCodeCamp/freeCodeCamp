# mimic-fn [![Build Status](https://travis-ci.org/sindresorhus/mimic-fn.svg?branch=master)](https://travis-ci.org/sindresorhus/mimic-fn)

> Make a function mimic another one

Useful when you wrap a function in another function and like to preserve the original name and other properties.


## Install

```
$ npm install mimic-fn
```


## Usage

```js
const mimicFn = require('mimic-fn');

function foo() {}
foo.unicorn = '🦄';

function wrapper() {
	return foo() {};
}

console.log(wrapper.name);
//=> 'wrapper'

mimicFn(wrapper, foo);

console.log(wrapper.name);
//=> 'foo'

console.log(wrapper.unicorn);
//=> '🦄'
```


## API

It will copy over the properties `name`, `length`, `displayName`, and any custom properties you may have set.

### mimicFn(to, from)

It will modify `to` and return it.

#### to

Type: `Function`

Mimicking function.

#### from

Type: `Function`

Function to mimic.


## Related

- [rename-fn](https://github.com/sindresorhus/rename-fn) - Rename a function


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
