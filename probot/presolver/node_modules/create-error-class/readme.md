# create-error-class [![Build Status](https://travis-ci.org/floatdrop/create-error-class.svg?branch=master)](https://travis-ci.org/floatdrop/create-error-class)

> Create error class


## Install

```
$ npm install --save create-error-class
```


## Usage

```js
var createErrorClass = require('create-error-class');

var HTTPError = createErrorClass('HTTPError', function (props) {
	this.message = 'Status code is ' + props.statusCode;
});

throw new HTTPError({statusCode: 404});
```


## API

### createErrorClass(className, [setup])

Return constructor of Errors with `className`.

#### className

*Required*  
Type: `string`

Class name of Error Object. Should contain characters from `[0-9a-zA-Z_$]` range.

#### setup
Type: `function`

Setup function, that will be called after each Error object is created from constructor with context of Error object.

By default `setup` function sets `this.message` as first argument:

```js
var MyError = createErrorClass('MyError');

new MyError('Something gone wrong!').message; // => 'Something gone wrong!'
```

## License

MIT © [Vsevolod Strukchinsky](http://github.com/floatdrop)
