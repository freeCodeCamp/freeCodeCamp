# callsites [![Build Status](https://travis-ci.org/sindresorhus/callsites.svg?branch=master)](https://travis-ci.org/sindresorhus/callsites)

> Get callsites from the [V8 stack trace API](https://v8.dev/docs/stack-trace-api)


## Install

```
$ npm install callsites
```


## Usage

```js
const callsites = require('callsites');

function unicorn() {
	console.log(callsites()[0].getFileName());
	//=> '/Users/sindresorhus/dev/callsites/test.js'
}

unicorn();
```


## API

Returns an array of callsite objects with the following methods:

- `getThis`: returns the value of `this`.
- `getTypeName`: returns the type of `this` as a string. This is the name of the function stored in the constructor field of `this`, if available, otherwise the object's `[[Class]]` internal property.
- `getFunction`: returns the current function.
- `getFunctionName`: returns the name of the current function, typically its `name` property. If a name property is not available an attempt will be made to try to infer a name from the function's context.
- `getMethodName`: returns the name of the property of `this` or one of its prototypes that holds the current function.
- `getFileName`: if this function was defined in a script returns the name of the script.
- `getLineNumber`: if this function was defined in a script returns the current line number.
- `getColumnNumber`: if this function was defined in a script returns the current column number
- `getEvalOrigin`: if this function was created using a call to `eval` returns a string representing the location where `eval` was called.
- `isToplevel`: is this a top-level invocation, that is, is this the global object?
- `isEval`: does this call take place in code defined by a call to `eval`?
- `isNative`: is this call in native V8 code?
- `isConstructor`: is this a constructor call?


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
