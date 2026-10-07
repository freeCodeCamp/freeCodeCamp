# fs.realpath

A backwards-compatible fs.realpath for Node v6 and above

In Node v6, the JavaScript implementation of fs.realpath was replaced
with a faster (but less resilient) native implementation.  That raises
new and platform-specific errors and cannot handle long or excessively
symlink-looping paths.

This module handles those cases by detecting the new errors and
falling back to the JavaScript implementation.  On versions of Node
prior to v6, it has no effect.

## USAGE

```js
var rp = require('fs.realpath')

// async version
rp.realpath(someLongAndLoopingPath, function (er, real) {
  // the ELOOP was handled, but it was a bit slower
})

// sync version
var real = rp.realpathSync(someLongAndLoopingPath)

// monkeypatch at your own risk!
// This replaces the fs.realpath/fs.realpathSync builtins
rp.monkeypatch()

// un-do the monkeypatching
rp.unmonkeypatch()
```
