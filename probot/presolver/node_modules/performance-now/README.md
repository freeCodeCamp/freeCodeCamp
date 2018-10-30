# performance-now [![Build Status](https://travis-ci.org/braveg1rl/performance-now.png?branch=master)](https://travis-ci.org/braveg1rl/performance-now) [![Dependency Status](https://david-dm.org/braveg1rl/performance-now.png)](https://david-dm.org/braveg1rl/performance-now)

Implements a function similar to `performance.now` (based on `process.hrtime`).

Modern browsers have a `window.performance` object with - among others - a `now` method which gives time in milliseconds, but with sub-millisecond precision. This module offers the same function based on the Node.js native `process.hrtime` function.

Using `process.hrtime` means that the reported time will be monotonically increasing, and not subject to clock-drift.

According to the [High Resolution Time specification](http://www.w3.org/TR/hr-time/), the number of milliseconds reported by `performance.now` should be relative to the value of `performance.timing.navigationStart`.

In the current version of the module (2.0) the reported time is relative to the time the current Node process has started (inferred from `process.uptime()`).

Version 1.0 reported a different time. The reported time was relative to the time the module was loaded (i.e. the time it was first `require`d). If you need this functionality, version 1.0 is still available on NPM.

## Example usage

```javascript
var now = require("performance-now")
var start = now()
var end = now()
console.log(start.toFixed(3)) // the number of milliseconds the current node process is running
console.log((start-end).toFixed(3)) // ~ 0.002 on my system
```

Running the now function two times right after each other yields a time difference of a few microseconds. Given this overhead, I think it's best to assume that the precision of intervals computed with this method is not higher than 10 microseconds, if you don't know the exact overhead on your own system.

## License

performance-now is released under the [MIT License](http://opensource.org/licenses/MIT).
Copyright (c) 2017 Braveg1rl
