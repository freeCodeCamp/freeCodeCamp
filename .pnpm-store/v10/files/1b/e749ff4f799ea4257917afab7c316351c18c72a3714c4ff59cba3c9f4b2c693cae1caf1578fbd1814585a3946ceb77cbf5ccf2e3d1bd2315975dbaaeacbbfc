# proper-lockfile

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/proper-lockfile
[downloads-image]:https://img.shields.io/npm/dm/proper-lockfile.svg
[npm-image]:https://img.shields.io/npm/v/proper-lockfile.svg
[travis-url]:https://travis-ci.org/moxystudio/node-proper-lockfile
[travis-image]:https://img.shields.io/travis/moxystudio/node-proper-lockfile/master.svg
[codecov-url]:https://codecov.io/gh/moxystudio/node-proper-lockfile
[codecov-image]:https://img.shields.io/codecov/c/github/moxystudio/node-proper-lockfile/master.svg
[david-dm-url]:https://david-dm.org/moxystudio/node-proper-lockfile
[david-dm-image]:https://img.shields.io/david/moxystudio/node-proper-lockfile.svg
[david-dm-dev-url]:https://david-dm.org/moxystudio/node-proper-lockfile?type=dev
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/node-proper-lockfile.svg

An inter-process and inter-machine lockfile utility that works on a local or network file system.


## Installation

`$ npm install proper-lockfile`


## Design

There are various ways to achieve [file locking](http://en.wikipedia.org/wiki/File_locking).

This library utilizes the `mkdir` strategy which works atomically on any kind of file system, even network based ones.
The lockfile path is based on the file path you are trying to lock by suffixing it with `.lock`.

When a lock is successfully acquired, the lockfile's `mtime` (modified time) is periodically updated to prevent staleness. This allows to effectively check if a lock is stale by checking its `mtime` against a stale threshold. If the update of the mtime fails several times, the lock might be compromised. The `mtime` is [supported](http://en.wikipedia.org/wiki/Comparison_of_file_systems) in almost every `filesystem`.


### Comparison

This library is similar to [lockfile](https://github.com/isaacs/lockfile) but the latter has some drawbacks:

- It relies on `open` with `O_EXCL` flag which has problems in network file systems. `proper-lockfile` uses `mkdir` which doesn't have this issue.

> O_EXCL is broken on NFS file systems; programs which rely on it for performing locking tasks will contain a race condition.

- The lockfile staleness check is done via `ctime` (creation time) which is unsuitable for long running processes. `proper-lockfile` constantly updates lockfiles `mtime` to do proper staleness check.

- It does not check if the lockfile was compromised which can lead to undesirable situations. `proper-lockfile` checks the lockfile when updating the `mtime`.

- It has a default value of `0` for the stale option which isn't good because any crash or process kill that the package can't handle gracefully will leave the lock active forever.


### Compromised

`proper-lockfile` does not detect cases in which:

- A `lockfile` is manually removed and someone else acquires the lock right after
- Different `stale`/`update` values are being used for the same file, possibly causing two locks to be acquired on the same file

`proper-lockfile` detects cases in which:

- Updates to the `lockfile` fail
- Updates take longer than expected, possibly causing the lock to become stale for a certain amount of time


As you see, the first two are a consequence of bad usage. Technically, it was possible to detect the first two but it would introduce complexity and eventual race conditions.


## Usage

### .lock(file, [options])

Tries to acquire a lock on `file` or rejects the promise on error.

If the lock succeeds, a `release` function is provided that should be called when you want to release the lock. The `release` function also rejects the promise on error (e.g. when the lock was already compromised).

Available options:

- `stale`: Duration in milliseconds in which the lock is considered stale, defaults to `10000` (minimum value is `5000`)
- `update`: The interval in milliseconds in which the lockfile's `mtime` will be updated, defaults to `stale/2` (minimum value is `1000`, maximum value is `stale/2`)
- `retries`: The number of retries or a [retry](https://www.npmjs.org/package/retry) options object, defaults to `0`
- `realpath`: Resolve symlinks using realpath, defaults to `true` (note that if `true`, the `file` must exist previously)
- `fs`: A custom fs to use, defaults to `graceful-fs`
- `onCompromised`: Called if the lock gets compromised, defaults to a function that simply throws the error which will probably cause the process to die
- `lockfilePath`: Custom lockfile path. e.g.: If you want to lock a directory and create the lock file inside it, you can pass `file` as `<dir path>` and `options.lockfilePath` as `<dir path>/dir.lock`


```js
const lockfile = require('proper-lockfile');

lockfile.lock('some/file')
.then((release) => {
    // Do something while the file is locked

    // Call the provided release function when you're done,
    // which will also return a promise
    return release();
})
.catch((e) => {
    // either lock could not be acquired
    // or releasing it failed
    console.error(e)
});

// Alternatively, you may use lockfile('some/file') directly.
```


### .unlock(file, [options])

Releases a previously acquired lock on `file` or rejects the promise on error.

Whenever possible you should use the `release` function instead (as exemplified above). Still there are cases in which it's hard to keep a reference to it around code. In those cases `unlock()` might be handy.

Available options:

- `realpath`: Resolve symlinks using realpath, defaults to `true` (note that if `true`, the `file` must exist previously)
- `fs`: A custom fs to use, defaults to `graceful-fs`
- `lockfilePath`: Custom lockfile path. e.g.: If you want to lock a directory and create the lock file inside it, you can pass `file` as `<dir path>` and `options.lockfilePath` as `<dir path>/dir.lock`


```js
const lockfile = require('proper-lockfile');

lockfile.lock('some/file')
.then(() => {
    // Do something while the file is locked

    // Later..
    return lockfile.unlock('some/file');
});
```

### .check(file, [options])

Check if the file is locked and its lockfile is not stale, rejects the promise on error.

Available options:

- `stale`: Duration in milliseconds in which the lock is considered stale, defaults to `10000` (minimum value is `5000`)
- `realpath`: Resolve symlinks using realpath, defaults to `true` (note that if `true`, the `file` must exist previously)
- `fs`: A custom fs to use, defaults to `graceful-fs`
- `lockfilePath`: Custom lockfile path. e.g.: If you want to lock a directory and create the lock file inside it, you can pass `file` as `<dir path>` and `options.lockfilePath` as `<dir path>/dir.lock`


```js
const lockfile = require('proper-lockfile');

lockfile.check('some/file')
.then((isLocked) => {
    // isLocked will be true if 'some/file' is locked, false otherwise
});
```

### .lockSync(file, [options])

Sync version of `.lock()`.   
Returns the `release` function or throws on error.

### .unlockSync(file, [options])

Sync version of `.unlock()`.   
Throws on error.

### .checkSync(file, [options])

Sync version of `.check()`.
Returns a boolean or throws on error.


## Graceful exit

`proper-lockfile` automatically removes locks if the process exits, except if the process is killed with SIGKILL or it crashes due to a VM fatal error (e.g.: out of memory).


## Tests

`$ npm test`   
`$ npm test -- --watch` during development

The test suite is very extensive. There's even a stress test to guarantee exclusiveness of locks.


## License

Released under the [MIT License](https://www.opensource.org/licenses/mit-license.php).
