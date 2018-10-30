# Chokidar [![Mac/Linux Build Status](https://img.shields.io/travis/paulmillr/chokidar/master.svg?label=Mac%20OSX%20%26%20Linux)](https://travis-ci.org/paulmillr/chokidar) [![Windows Build status](https://img.shields.io/appveyor/ci/paulmillr/chokidar/master.svg?label=Windows)](https://ci.appveyor.com/project/paulmillr/chokidar/branch/master) [![Coverage Status](https://coveralls.io/repos/paulmillr/chokidar/badge.svg)](https://coveralls.io/r/paulmillr/chokidar) [![Join the chat at https://gitter.im/paulmillr/chokidar](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/paulmillr/chokidar?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> A neat wrapper around node.js fs.watch / fs.watchFile / fsevents.

[![NPM](https://nodei.co/npm-dl/chokidar.png)](https://nodei.co/npm/chokidar/)
[![NPM](https://nodei.co/npm/chokidar.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/chokidar/)

## Why?
Node.js `fs.watch`:

* Doesn't report filenames on OS X.
* Doesn't report events at all when using editors like Sublime on OS X.
* Often reports events twice.
* Emits most changes as `rename`.
* Has [a lot of other issues](https://github.com/nodejs/node/search?q=fs.watch&type=Issues)
* Does not provide an easy way to recursively watch file trees.

Node.js `fs.watchFile`:

* Almost as bad at event handling.
* Also does not provide any recursive watching.
* Results in high CPU utilization.

Chokidar resolves these problems.

Initially made for [brunch](http://brunch.io) (an ultra-swift web app build tool), it is now used in
[gulp](https://github.com/gulpjs/gulp/),
[karma](http://karma-runner.github.io),
[PM2](https://github.com/Unitech/PM2),
[browserify](http://browserify.org/),
[webpack](http://webpack.github.io/),
[BrowserSync](http://www.browsersync.io/),
[Microsoft's Visual Studio Code](https://github.com/microsoft/vscode),
and [many others](https://www.npmjs.org/browse/depended/chokidar/).
It has proven itself in production environments.

## How?
Chokidar does still rely on the Node.js core `fs` module, but when using
`fs.watch` and `fs.watchFile` for watching, it normalizes the events it
receives, often checking for truth by getting file stats and/or dir contents.

On Mac OS X, chokidar by default uses a native extension exposing the Darwin
`FSEvents` API. This provides very efficient recursive watching compared with
implementations like `kqueue` available on most \*nix platforms. Chokidar still
does have to do some work to normalize the events received that way as well.

On other platforms, the `fs.watch`-based implementation is the default, which
avoids polling and keeps CPU usage down. Be advised that chokidar will initiate
watchers recursively for everything within scope of the paths that have been
specified, so be judicious about not wasting system resources by watching much
more than needed.

## Getting started
Install with npm:

    npm install chokidar --save

Then `require` and use it in your code:

```javascript
var chokidar = require('chokidar');

// One-liner for current directory, ignores .dotfiles
chokidar.watch('.', {ignored: /(^|[\/\\])\../}).on('all', (event, path) => {
  console.log(event, path);
});
```

```javascript
// Example of a more typical implementation structure:

// Initialize watcher.
var watcher = chokidar.watch('file, dir, glob, or array', {
  ignored: /(^|[\/\\])\../,
  persistent: true
});

// Something to use when events are received.
var log = console.log.bind(console);
// Add event listeners.
watcher
  .on('add', path => log(`File ${path} has been added`))
  .on('change', path => log(`File ${path} has been changed`))
  .on('unlink', path => log(`File ${path} has been removed`));

// More possible events.
watcher
  .on('addDir', path => log(`Directory ${path} has been added`))
  .on('unlinkDir', path => log(`Directory ${path} has been removed`))
  .on('error', error => log(`Watcher error: ${error}`))
  .on('ready', () => log('Initial scan complete. Ready for changes'))
  .on('raw', (event, path, details) => {
    log('Raw event info:', event, path, details);
  });

// 'add', 'addDir' and 'change' events also receive stat() results as second
// argument when available: http://nodejs.org/api/fs.html#fs_class_fs_stats
watcher.on('change', (path, stats) => {
  if (stats) console.log(`File ${path} changed size to ${stats.size}`);
});

// Watch new files.
watcher.add('new-file');
watcher.add(['new-file-2', 'new-file-3', '**/other-file*']);

// Get list of actual paths being watched on the filesystem
var watchedPaths = watcher.getWatched();

// Un-watch some files.
watcher.unwatch('new-file*');

// Stop watching.
watcher.close();

// Full list of options. See below for descriptions. (do not use this example)
chokidar.watch('file', {
  persistent: true,

  ignored: '*.txt',
  ignoreInitial: false,
  followSymlinks: true,
  cwd: '.',
  disableGlobbing: false,

  usePolling: true,
  interval: 100,
  binaryInterval: 300,
  alwaysStat: false,
  depth: 99,
  awaitWriteFinish: {
    stabilityThreshold: 2000,
    pollInterval: 100
  },

  ignorePermissionErrors: false,
  atomic: true // or a custom 'atomicity delay', in milliseconds (default 100)
});

```

## API

`chokidar.watch(paths, [options])`

* `paths` (string or array of strings). Paths to files, dirs to be watched
recursively, or glob patterns.
* `options` (object) Options object as defined below:

#### Persistence

* `persistent` (default: `true`). Indicates whether the process
should continue to run as long as files are being watched. If set to
`false` when using `fsevents` to watch, no more events will be emitted
after `ready`, even if the process continues to run.

#### Path filtering

* `ignored` ([anymatch](https://github.com/es128/anymatch)-compatible definition)
Defines files/paths to be ignored. The whole relative or absolute path is
tested, not just filename. If a function with two arguments is provided, it
gets called twice per path - once with a single argument (the path), second
time with two arguments (the path and the
[`fs.Stats`](http://nodejs.org/api/fs.html#fs_class_fs_stats)
object of that path).
* `ignoreInitial` (default: `false`). If set to `false` then `add`/`addDir` events are also emitted for matching paths while
instantiating the watching as chokidar discovers these file paths (before the `ready` event).
* `followSymlinks` (default: `true`). When `false`, only the
symlinks themselves will be watched for changes instead of following
the link references and bubbling events through the link's path.
* `cwd` (no default). The base directory from which watch `paths` are to be
derived. Paths emitted with events will be relative to this.
* `disableGlobbing` (default: `false`). If set to `true` then the strings passed to `.watch()` and `.add()` are treated as
literal path names, even if they look like globs.

#### Performance

* `usePolling` (default: `false`).
Whether to use fs.watchFile (backed by polling), or fs.watch. If polling
leads to high CPU utilization, consider setting this to `false`. It is
typically necessary to **set this to `true` to successfully watch files over
a network**, and it may be necessary to successfully watch files in other
non-standard situations. Setting to `true` explicitly on OS X overrides the
`useFsEvents` default. You may also set the CHOKIDAR_USEPOLLING env variable
to true (1) or false (0) in order to override this option.
* _Polling-specific settings_ (effective when `usePolling: true`)
  * `interval` (default: `100`). Interval of file system polling. You may also 
    set the CHOKIDAR_INTERVAL env variable to override this option.
  * `binaryInterval` (default: `300`). Interval of file system
  polling for binary files.
  ([see list of binary extensions](https://github.com/sindresorhus/binary-extensions/blob/master/binary-extensions.json))
* `useFsEvents` (default: `true` on OS X). Whether to use the
`fsevents` watching interface if available. When set to `true` explicitly
and `fsevents` is available this supercedes the `usePolling` setting. When
set to `false` on OS X, `usePolling: true` becomes the default.
* `alwaysStat` (default: `false`). If relying upon the
[`fs.Stats`](http://nodejs.org/api/fs.html#fs_class_fs_stats)
object that may get passed with `add`, `addDir`, and `change` events, set
this to `true` to ensure it is provided even in cases where it wasn't
already available from the underlying watch events.
* `depth` (default: `undefined`). If set, limits how many levels of
subdirectories will be traversed.
* `awaitWriteFinish` (default: `false`).
By default, the `add` event will fire when a file first appears on disk, before
the entire file has been written. Furthermore, in some cases some `change`
events will be emitted while the file is being written. In some cases,
especially when watching for large files there will be a need to wait for the
write operation to finish before responding to a file creation or modification.
Setting `awaitWriteFinish` to `true` (or a truthy value) will poll file size,
holding its `add` and `change` events until the size does not change for a
configurable amount of time. The appropriate duration setting is heavily
dependent on the OS and hardware. For accurate detection this parameter should
be relatively high, making file watching much less responsive.
Use with caution.
  * *`options.awaitWriteFinish` can be set to an object in order to adjust
  timing params:*
  * `awaitWriteFinish.stabilityThreshold` (default: 2000). Amount of time in
  milliseconds for a file size to remain constant before emitting its event.
  * `awaitWriteFinish.pollInterval` (default: 100). File size polling interval.

#### Errors
* `ignorePermissionErrors` (default: `false`). Indicates whether to watch files
that don't have read permissions if possible. If watching fails due to `EPERM`
or `EACCES` with this set to `true`, the errors will be suppressed silently.
* `atomic` (default: `true` if `useFsEvents` and `usePolling` are `false`).
Automatically filters out artifacts that occur when using editors that use
"atomic writes" instead of writing directly to the source file. If a file is
re-added within 100 ms of being deleted, Chokidar emits a `change` event
rather than `unlink` then `add`. If the default of 100 ms does not work well
for you, you can override it by setting `atomic` to a custom value, in
milliseconds.

### Methods & Events

`chokidar.watch()` produces an instance of `FSWatcher`. Methods of `FSWatcher`:

* `.add(path / paths)`: Add files, directories, or glob patterns for tracking.
Takes an array of strings or just one string.
* `.on(event, callback)`: Listen for an FS event.
Available events: `add`, `addDir`, `change`, `unlink`, `unlinkDir`, `ready`,
`raw`, `error`.
Additionally `all` is available which gets emitted with the underlying event
name and path for every event other than `ready`, `raw`, and `error`.
* `.unwatch(path / paths)`: Stop watching files, directories, or glob patterns.
Takes an array of strings or just one string.
* `.close()`: Removes all listeners from watched files.
* `.getWatched()`: Returns an object representing all the paths on the file
system being watched by this `FSWatcher` instance. The object's keys are all the
directories (using absolute paths unless the `cwd` option was used), and the
values are arrays of the names of the items contained in each directory.

## CLI

If you need a CLI interface for your file watching, check out
[chokidar-cli](https://github.com/kimmobrunfeldt/chokidar-cli), allowing you to
execute a command on each change, or get a stdio stream of change events.

## Install Troubleshooting

* `npm WARN optional dep failed, continuing fsevents@n.n.n`
  * This message is normal part of how `npm` handles optional dependencies and is
    not indicative of a problem. Even if accompanied by other related error messages,
    Chokidar should function properly.

* `ERR! stack Error: Python executable "python" is v3.4.1, which is not supported by gyp.`
  * You should be able to resolve this by installing python 2.7 and running:
    `npm config set python python2.7`

* `gyp ERR! stack Error: not found: make`
  * On Mac, install the XCode command-line tools

## License

The MIT License (MIT)

Copyright (c) 2016 Paul Miller (http://paulmillr.com) & Elan Shanker

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
