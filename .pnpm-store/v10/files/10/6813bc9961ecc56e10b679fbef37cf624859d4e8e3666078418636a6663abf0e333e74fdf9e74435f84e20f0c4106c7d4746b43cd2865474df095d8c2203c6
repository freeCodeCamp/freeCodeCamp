# is-plain-obj [![Build Status](https://travis-ci.org/sindresorhus/is-plain-obj.svg?branch=master)](https://travis-ci.org/sindresorhus/is-plain-obj)

> Check if a value is a plain object

An object is plain if it's created by either `{}`, `new Object()`, or `Object.create(null)`.


## Install

```
$ npm install is-plain-obj
```


## Usage

```js
const isPlainObject = require('is-plain-obj');

isPlainObject({foo: 'bar'});
//=> true

isPlainObject(new Object());
//=> true

isPlainObject(Object.create(null));
//=> true

isPlainObject([1, 2, 3]);
//=> false

class Unicorn {}
isPlainObject(new Unicorn());
//=> false
```


## Related

- [is-obj](https://github.com/sindresorhus/is-obj) - Check if a value is an object
- [is](https://github.com/sindresorhus/is) - Type check values


---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-is-plain-obj?utm_source=npm-is-plain-obj&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
