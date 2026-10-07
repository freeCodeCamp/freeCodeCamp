# auto-bind [![Build Status](https://travis-ci.org/sindresorhus/auto-bind.svg?branch=master)](https://travis-ci.org/sindresorhus/auto-bind)

> Automatically bind methods to their class instance

It also correctly binds inherited properties.

## Install

```
$ npm install auto-bind
```

## Usage

```js
const autoBind = require('auto-bind');

class Unicorn {
	constructor(name) {
		this.name = name;
		autoBind(this);
	}

	message() {
		return `${this.name} is awesome!`;
	}
}

const unicorn = new Unicorn('Rainbow');

// Grab the method off the class instance
const message = unicorn.message;

// Still bound to the class instance
message();
//=> 'Rainbow is awesome!'

// Without `autoBind(this)`, the above would have resulted in
message();
//=> Error: Cannot read property 'name' of undefined
```

## API

### autoBind(self, options?)

Bind methods in `self` to their class instance.

Returns the `self` object.

#### self

Type: `object`

Object with methods to bind.

#### options

Type: `object`

##### include

Type: `Array<string | RegExp>`

Bind only the given methods.

##### exclude

Type: `Array<string | RegExp>`

Bind methods except for the given methods.

### React

Same as `autoBind`, but excludes the default [React component methods](https://reactjs.org/docs/react-component.html).

```js
const autoBindReact = require('auto-bind/react');

class Foo extends React.Component {
	constructor(props) {
		super(props);
		autoBindReact(this);
	}

	// …
}
```

## Related

- [bind-methods](https://github.com/sindresorhus/bind-methods) - Bind all methods in an object to itself or a specified context
