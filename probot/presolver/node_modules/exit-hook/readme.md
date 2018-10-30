# exit-hook [![Build Status](https://travis-ci.org/sindresorhus/exit-hook.svg?branch=master)](https://travis-ci.org/sindresorhus/exit-hook)

> Run some code when the process exits

The `process.on('exit')` event doesn't catch all the ways a process can exit.

Useful for cleaning up.


## Install

```sh
$ npm install --save exit-hook
```


## Usage

```js
var exitHook = require('exit-hook');

exitHook(function () {
	console.log('exiting');
});

// you can add multiple hooks, even across files
exitHook(function () {
	console.log('exiting 2');
});

throw new Error('unicorns');

//=> exiting
//=> exiting 2
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
