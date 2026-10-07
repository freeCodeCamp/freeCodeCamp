# abstract-logging

This module provides an interface for modules to include so that they can
support logging via an external logger that conforms to the standard Log4j
interface. One such logger is [Pino](https://npm.im/pino). This module
is intended for modules that are meant to be used by other modules.

Example:

```js
'use strict'

function AwesomeLibrary (options) {
  this.log = (options.logger) ? options.logger : require('abstract-logging')
}

AwesomeLibrary.prototype.coolMethod = function () {
  this.log.trace('AwesomeLibrary.coolMethod was invoked')
  return {}
}

module.exports = AwesomeLibrary
```

## Interface

Available methods:

+ `fatal`
+ `error`
+ `warn`
+ `info`
+ `debug`
+ `trace`

All methods are no operation functions.

Some loggers, like [Pino](https://getpino.io/), implement a `child()` method. This method can be easily added to an `abstract-logging` instance when stubbing out such loggers:

```js
const logger = require('abstract-logging')
logger.child = () => logger
```

## License

[MIT License](http://jsumners.mit-license.org/)
