# 3.0.0

* Implement options.tmpfileCreated callback.
* Drop Node.js 6, modernize code, return Promise from async function.
* Support write TypedArray's like in node fs.writeFile.
* Remove graceful-fs dependency.

# 2.4.3

* Ignore errors raised by `fs.closeSync` when cleaning up after a write
  error.

# 2.4.2

* A pair of patches to fix some fd leaks.  We would leak fds with sync use
  when errors occured and with async use any time fsync was not in use. (#34)

# 2.4.1

* Fix a bug where `signal-exit` instances would be leaked. This was fixed when addressing #35.

# 2.4.0

## Features

* Allow chown and mode options to be set to false to disable the defaulting behavior. (#20)
* Support passing encoding strings in options slot for compat with Node.js API. (#31)
* Add support for running inside of worker threads (#37)

## Fixes

* Remove unneeded call when returning success (#36)
