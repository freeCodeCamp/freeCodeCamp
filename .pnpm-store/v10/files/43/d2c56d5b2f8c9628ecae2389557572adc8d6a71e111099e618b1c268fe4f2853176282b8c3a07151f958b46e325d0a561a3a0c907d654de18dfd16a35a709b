# graceful-fs

graceful-fs functions as a drop-in replacement for the fs module,
making various improvements.

The improvements are meant to normalize behavior across different
platforms and environments, and to make filesystem access more
resilient to errors.

## Improvements over [fs module](https://nodejs.org/api/fs.html)

* Queues up `open` and `readdir` calls, and retries them once
  something closes if there is an EMFILE error from too many file
  descriptors.
* fixes `lchmod` for Node versions prior to 0.6.2.
* implements `fs.lutimes` if possible. Otherwise it becomes a noop.
* ignores `EINVAL` and `EPERM` errors in `chown`, `fchown` or
  `lchown` if the user isn't root.
* makes `lchmod` and `lchown` become noops, if not available.
* retries reading a file if `read` results in EAGAIN error.

On Windows, it retries renaming a file for up to one second if `EACCESS`
or `EPERM` error occurs, likely because antivirus software has locked
the directory.

## USAGE

```javascript
// use just like fs
var fs = require('graceful-fs')

// now go and do stuff with it...
fs.readFile('some-file-or-whatever', (err, data) => {
  // Do stuff here.
})
```

## Sync methods

This module cannot intercept or handle `EMFILE` or `ENFILE` errors from sync
methods.  If you use sync methods which open file descriptors then you are
responsible for dealing with any errors.

This is a known limitation, not a bug.

## Global Patching

If you want to patch the global fs module (or any other fs-like
module) you can do this:

```javascript
// Make sure to read the caveat below.
var realFs = require('fs')
var gracefulFs = require('graceful-fs')
gracefulFs.gracefulify(realFs)
```

This should only ever be done at the top-level application layer, in
order to delay on EMFILE errors from any fs-using dependencies.  You
should **not** do this in a library, because it can cause unexpected
delays in other parts of the program.

## Changes

This module is fairly stable at this point, and used by a lot of
things.  That being said, because it implements a subtle behavior
change in a core part of the node API, even modest changes can be
extremely breaking, and the versioning is thus biased towards
bumping the major when in doubt.

The main change between major versions has been switching between
providing a fully-patched `fs` module vs monkey-patching the node core
builtin, and the approach by which a non-monkey-patched `fs` was
created.

The goal is to trade `EMFILE` errors for slower fs operations.  So, if
you try to open a zillion files, rather than crashing, `open`
operations will be queued up and wait for something else to `close`.

There are advantages to each approach.  Monkey-patching the fs means
that no `EMFILE` errors can possibly occur anywhere in your
application, because everything is using the same core `fs` module,
which is patched.  However, it can also obviously cause undesirable
side-effects, especially if the module is loaded multiple times.

Implementing a separate-but-identical patched `fs` module is more
surgical (and doesn't run the risk of patching multiple times), but
also imposes the challenge of keeping in sync with the core module.

The current approach loads the `fs` module, and then creates a
lookalike object that has all the same methods, except a few that are
patched.  It is safe to use in all versions of Node from 0.8 through
7.0.

### v4

* Do not monkey-patch the fs module.  This module may now be used as a
  drop-in dep, and users can opt into monkey-patching the fs builtin
  if their app requires it.

### v3

* Monkey-patch fs, because the eval approach no longer works on recent
  node.
* fixed possible type-error throw if rename fails on windows
* verify that we *never* get EMFILE errors
* Ignore ENOSYS from chmod/chown
* clarify that graceful-fs must be used as a drop-in

### v2.1.0

* Use eval rather than monkey-patching fs.
* readdir: Always sort the results
* win32: requeue a file if error has an OK status

### v2.0

* A return to monkey patching
* wrap process.cwd

### v1.1

* wrap readFile
* Wrap fs.writeFile.
* readdir protection
* Don't clobber the fs builtin
* Handle fs.read EAGAIN errors by trying again
* Expose the curOpen counter
* No-op lchown/lchmod if not implemented
* fs.rename patch only for win32
* Patch fs.rename to handle AV software on Windows
* Close #4 Chown should not fail on einval or eperm if non-root
* Fix isaacs/fstream#1 Only wrap fs one time
* Fix #3 Start at 1024 max files, then back off on EMFILE
* lutimes that doens't blow up on Linux
* A full on-rewrite using a queue instead of just swallowing the EMFILE error
* Wrap Read/Write streams as well

### 1.0

* Update engines for node 0.6
* Be lstat-graceful on Windows
* first
