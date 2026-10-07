[![Build status][nix-build-image]][nix-build-url]
[![Windows status][win-build-image]][win-build-url]
![Transpilation status][transpilation-image]
[![npm version][npm-image]][npm-url]

# timers-ext

## Timers extensions

### Installation

    $ npm install timers-ext

To port it to Browser or any other (non CJS) environment, use your favorite CJS bundler. No favorite yet? Try: [Browserify](http://browserify.org/), [Webmake](https://github.com/medikoo/modules-webmake) or [Webpack](http://webpack.github.io/)

### API

#### MAX*TIMEOUT *(timers-ext/max-timeout)\_

Maximum possible timeout value in milliseconds. It equals to maximum positive value for 32bit signed integer, so _2³¹ (2147483647)_, which makes it around 24.9 days

#### delay(fn[, timeout]) _(timers-ext/delay)_

Returns function which when invoked will call _fn_ function after specified
_timeout_. If _timeout_ is not provided [nextTick](https://github.com/medikoo/next-tick/#next-tick) propagation is used.

#### once(fn[, timeout]) _(timers-ext/once)_

Makes sure to execute _fn_ function only once after a defined interval of time (debounce). If _timeout_ is not provided [nextTick](https://github.com/medikoo/next-tick/#next-tick) propagation is used.

```javascript
var nextTick = require("next-tick");
var logFoo = function() {
	console.log("foo");
};
var logFooOnce = require("timers-ext/once")(logFoo);

logFooOnce();
logFooOnce(); // ignored, logFoo will be logged only once
logFooOnce(); // ignored

nextTick(function() {
	logFooOnce(); // Invokes another log (as tick passed)
	logFooOnce(); // ignored
	logFooOnce(); // ignored
});
```

#### validTimeout(timeout) _(timers-ext/valid-timeout)_

Validates timeout value.  
For `NaN` resolved _timeout_ `0` is returned.
If _timeout_ resolves to a number:

-   for _timeout < 0_ `0` is returned
-   for _0 >= timeout <= [MAX_TIMEOUT](#max_timeout-timers-extmax-timeout)_, `timeout` value is returned
-   for _timeout > [MAX_TIMEOUT](#max_timeout-timers-extmax-timeout)_ exception is thrown

### Tests

    $ npm test

[nix-build-image]: https://semaphoreci.com/api/v1/medikoo-org/timers-ext/branches/master/shields_badge.svg
[nix-build-url]: https://semaphoreci.com/medikoo-org/timers-ext
[win-build-image]: https://ci.appveyor.com/api/projects/status/2i5nerowov2ho3o9?svg=true
[win-build-url]: https://ci.appveyor.com/project/medikoo/timers-ext
[transpilation-image]: https://img.shields.io/badge/transpilation-free-brightgreen.svg
[npm-image]: https://img.shields.io/npm/v/timers-ext.svg
[npm-url]: https://www.npmjs.com/package/timers-ext
