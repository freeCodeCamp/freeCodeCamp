# signal-exit

[![Build Status](https://travis-ci.org/tapjs/signal-exit.png)](https://travis-ci.org/tapjs/signal-exit)
[![Coverage](https://coveralls.io/repos/tapjs/signal-exit/badge.svg?branch=master)](https://coveralls.io/r/tapjs/signal-exit?branch=master)
[![NPM version](https://img.shields.io/npm/v/signal-exit.svg)](https://www.npmjs.com/package/signal-exit)
[![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)](https://github.com/conventional-changelog/standard-version)

When you want to fire an event no matter how a process exits:

* reaching the end of execution.
* explicitly having `process.exit(code)` called.
* having `process.kill(pid, sig)` called.
* receiving a fatal signal from outside the process

Use `signal-exit`.

```js
var onExit = require('signal-exit')

onExit(function (code, signal) {
  console.log('process exited!')
})
```

## API

`var remove = onExit(function (code, signal) {}, options)`

The return value of the function is a function that will remove the
handler.

Note that the function *only* fires for signals if the signal would
cause the process to exit.  That is, there are no other listeners, and
it is a fatal signal.

## Options

* `alwaysLast`: Run this handler after any other signal or exit
  handlers.  This causes `process.emit` to be monkeypatched.
