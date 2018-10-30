[![Build Status](https://travis-ci.org/isaacs/rimraf.svg?branch=master)](https://travis-ci.org/isaacs/rimraf) [![Dependency Status](https://david-dm.org/isaacs/rimraf.svg)](https://david-dm.org/isaacs/rimraf) [![devDependency Status](https://david-dm.org/isaacs/rimraf/dev-status.svg)](https://david-dm.org/isaacs/rimraf#info=devDependencies)

The [UNIX command](http://en.wikipedia.org/wiki/Rm_(Unix)) `rm -rf` for node.

Install with `npm install rimraf`, or just drop rimraf.js somewhere.

## API

`rimraf(f, [opts], callback)`

The first parameter will be interpreted as a globbing pattern for files. If you
want to disable globbing you can do so with `opts.disableGlob` (defaults to
`false`). This might be handy, for instance, if you have filenames that contain
globbing wildcard characters.

The callback will be called with an error if there is one.  Certain
errors are handled for you:

* Windows: `EBUSY` and `ENOTEMPTY` - rimraf will back off a maximum of
  `opts.maxBusyTries` times before giving up, adding 100ms of wait
  between each attempt.  The default `maxBusyTries` is 3.
* `ENOENT` - If the file doesn't exist, rimraf will return
  successfully, since your desired outcome is already the case.
* `EMFILE` - Since `readdir` requires opening a file descriptor, it's
  possible to hit `EMFILE` if too many file descriptors are in use.
  In the sync case, there's nothing to be done for this.  But in the
  async case, rimraf will gradually back off with timeouts up to
  `opts.emfileWait` ms, which defaults to 1000.

## rimraf.sync

It can remove stuff synchronously, too.  But that's not so good.  Use
the async API.  It's better.

## CLI

If installed with `npm install rimraf -g` it can be used as a global
command `rimraf <path> [<path> ...]` which is useful for cross platform support.

## mkdirp

If you need to create a directory recursively, check out
[mkdirp](https://github.com/substack/node-mkdirp).
