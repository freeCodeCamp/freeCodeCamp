Tree Kill
=========

Kill all processes in the process tree, including the root process.

Examples
=======

Kill all the descendent processes of the process with pid `1`, including the process with pid `1` itself:
```js
var kill = require('tree-kill');
kill(1);
```

Send a signal other than SIGTERM.:
```js
var kill = require('tree-kill');
kill(1, 'SIGKILL');
```

Run a callback when done killing the processes. Passes an error argument if there was an error.
```js
var kill = require('tree-kill');
kill(1, 'SIGKILL', function(err) {
    // Do things
});
```

You can also install tree-kill globally and use it as a command:
```sh
tree-kill 1          # sends SIGTERM to process 1 and its descendents
tree-kill 1 SIGTERM  # same
tree-kill 1 SIGKILL  # sends KILL instead of TERMINATE
```

Methods
=======

## require('tree-kill')(pid, [signal], [callback]);

Sends signal `signal` to all children processes of the process with pid `pid`, including `pid`. Signal defaults to `SIGTERM`.

For Linux, this uses `ps -o pid --no-headers --ppid PID` to find the parent pids of `PID`.

For Darwin/OSX, this uses `pgrep -P PID` to find the parent pids of `PID`.

For Windows, this uses `'taskkill /pid PID /T /F'` to kill the process tree. Note that on Windows, sending the different kinds of POSIX signals is not possible.

Install
=======

With [npm](https://npmjs.org) do:

```
npm install tree-kill
```

License
=======

MIT

Changelog
=========


## [1.2.2] - 2019-12-11
### Changed
- security fix: sanitize `pid` parameter to fix arbitrary code execution vulnerability

## [1.2.1] - 2018-11-05
### Changed
- added missing LICENSE file
- updated TypeScript definitions

## [1.2.0] - 2017-09-19
### Added
- TypeScript definitions
### Changed
- `kill(pid, callback)` works. Before you had to use `kill(pid, signal, callback)`

## [1.1.0] - 2016-05-13
### Added
- A `tree-kill` CLI

## [1.0.0] - 2015-09-17
### Added
- optional callback
- Darwin support
