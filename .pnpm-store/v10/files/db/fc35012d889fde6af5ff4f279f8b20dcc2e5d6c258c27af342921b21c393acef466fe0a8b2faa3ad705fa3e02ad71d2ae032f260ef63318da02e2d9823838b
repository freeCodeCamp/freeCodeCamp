# defaults

> A simple one level options merge utility

## Install

```sh
npm install defaults
```

## Usage

```js
const defaults = require('defaults');

const handle = (options, fn) => {
	options = defaults(options, {
		timeout: 100
	});

	setTimeout(() => {
		fn(options);
	}, options.timeout);
}

handle({timeout: 1000}, () => {
	// We're here 1000 ms later
});

handle({timeout: 10000}, () => {
	// We're here 10s later
});
```

## Summary

this module exports a function that takes 2 arguments: `options` and `defaults`.  When called, it overrides all of `undefined` properties in `options` with the clones of properties defined in `defaults`

Sidecases: if called with a falsy `options` value, options will be initialized to a new object before being merged onto.
