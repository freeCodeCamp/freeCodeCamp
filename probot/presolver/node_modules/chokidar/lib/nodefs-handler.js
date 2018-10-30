'use strict';

var fs = require('fs');
var sysPath = require('path');
var readdirp = require('readdirp');
var isBinaryPath = require('is-binary-path');

// fs.watch helpers

// object to hold per-process fs.watch instances
// (may be shared across chokidar FSWatcher instances)
var FsWatchInstances = Object.create(null);

// Private function: Instantiates the fs.watch interface

// * path       - string, path to be watched
// * options    - object, options to be passed to fs.watch
// * listener   - function, main event handler
// * errHandler - function, handler which emits info about errors
// * emitRaw    - function, handler which emits raw event data

// Returns new fsevents instance
function createFsWatchInstance(path, options, listener, errHandler, emitRaw) {
  var handleEvent = function(rawEvent, evPath) {
    listener(path);
    emitRaw(rawEvent, evPath, {watchedPath: path});

    // emit based on events occuring for files from a directory's watcher in
    // case the file's watcher misses it (and rely on throttling to de-dupe)
    if (evPath && path !== evPath) {
      fsWatchBroadcast(
        sysPath.resolve(path, evPath), 'listeners', sysPath.join(path, evPath)
      );
    }
  };
  try {
    return fs.watch(path, options, handleEvent);
  } catch (error) {
    errHandler(error);
  }
}

// Private function: Helper for passing fs.watch event data to a
// collection of listeners

// * fullPath   - string, absolute path bound to the fs.watch instance
// * type       - string, listener type
// * val[1..3]  - arguments to be passed to listeners

// Returns nothing
function fsWatchBroadcast(fullPath, type, val1, val2, val3) {
  if (!FsWatchInstances[fullPath]) return;
  FsWatchInstances[fullPath][type].forEach(function(listener) {
    listener(val1, val2, val3);
  });
}

// Private function: Instantiates the fs.watch interface or binds listeners
// to an existing one covering the same file system entry

// * path       - string, path to be watched
// * fullPath   - string, absolute path
// * options    - object, options to be passed to fs.watch
// * handlers   - object, container for event listener functions

// Returns close function
function setFsWatchListener(path, fullPath, options, handlers) {
  var listener = handlers.listener;
  var errHandler = handlers.errHandler;
  var rawEmitter = handlers.rawEmitter;
  var container = FsWatchInstances[fullPath];
  var watcher;
  if (!options.persistent) {
    watcher = createFsWatchInstance(
      path, options, listener, errHandler, rawEmitter
    );
    return watcher.close.bind(watcher);
  }
  if (!container) {
    watcher = createFsWatchInstance(
      path,
      options,
      fsWatchBroadcast.bind(null, fullPath, 'listeners'),
      errHandler, // no need to use broadcast here
      fsWatchBroadcast.bind(null, fullPath, 'rawEmitters')
    );
    if (!watcher) return;
    var broadcastErr = fsWatchBroadcast.bind(null, fullPath, 'errHandlers');
    watcher.on('error', function(error) {
      container.watcherUnusable = true; // documented since Node 10.4.1
      // Workaround for https://github.com/joyent/node/issues/4337
      if (process.platform === 'win32' && error.code === 'EPERM') {
        fs.open(path, 'r', function(err, fd) {
          if (!err) fs.close(fd, function(err) {
            if (!err) broadcastErr(error);
          });
        });
      } else {
        broadcastErr(error);
      }
    });
    container = FsWatchInstances[fullPath] = {
      listeners: [listener],
      errHandlers: [errHandler],
      rawEmitters: [rawEmitter],
      watcher: watcher
    };
  } else {
    container.listeners.push(listener);
    container.errHandlers.push(errHandler);
    container.rawEmitters.push(rawEmitter);
  }
  var listenerIndex = container.listeners.length - 1;

  // removes this instance's listeners and closes the underlying fs.watch
  // instance if there are no more listeners left
  return function close() {
    delete container.listeners[listenerIndex];
    delete container.errHandlers[listenerIndex];
    delete container.rawEmitters[listenerIndex];
    if (!Object.keys(container.listeners).length) {
      if (!container.watcherUnusable) { // check to protect against issue #730
        container.watcher.close();
      }
      delete FsWatchInstances[fullPath];
    }
  };
}

// fs.watchFile helpers

// object to hold per-process fs.watchFile instances
// (may be shared across chokidar FSWatcher instances)
var FsWatchFileInstances = Object.create(null);

// Private function: Instantiates the fs.watchFile interface or binds listeners
// to an existing one covering the same file system entry

// * path       - string, path to be watched
// * fullPath   - string, absolute path
// * options    - object, options to be passed to fs.watchFile
// * handlers   - object, container for event listener functions

// Returns close function
function setFsWatchFileListener(path, fullPath, options, handlers) {
  var listener = handlers.listener;
  var rawEmitter = handlers.rawEmitter;
  var container = FsWatchFileInstances[fullPath];
  var listeners = [];
  var rawEmitters = [];
  if (
    container && (
      container.options.persistent < options.persistent ||
      container.options.interval > options.interval
    )
  ) {
    // "Upgrade" the watcher to persistence or a quicker interval.
    // This creates some unlikely edge case issues if the user mixes
    // settings in a very weird way, but solving for those cases
    // doesn't seem worthwhile for the added complexity.
    listeners = container.listeners;
    rawEmitters = container.rawEmitters;
    fs.unwatchFile(fullPath);
    container = false;
  }
  if (!container) {
    listeners.push(listener);
    rawEmitters.push(rawEmitter);
    container = FsWatchFileInstances[fullPath] = {
      listeners: listeners,
      rawEmitters: rawEmitters,
      options: options,
      watcher: fs.watchFile(fullPath, options, function(curr, prev) {
        container.rawEmitters.forEach(function(rawEmitter) {
          rawEmitter('change', fullPath, {curr: curr, prev: prev});
        });
        var currmtime = curr.mtime.getTime();
        if (curr.size !== prev.size || currmtime > prev.mtime.getTime() || currmtime === 0) {
          container.listeners.forEach(function(listener) {
            listener(path, curr);
          });
        }
      })
    };
  } else {
    container.listeners.push(listener);
    container.rawEmitters.push(rawEmitter);
  }
  var listenerIndex = container.listeners.length - 1;

  // removes this instance's listeners and closes the underlying fs.watchFile
  // instance if there are no more listeners left
  return function close() {
    delete container.listeners[listenerIndex];
    delete container.rawEmitters[listenerIndex];
    if (!Object.keys(container.listeners).length) {
      fs.unwatchFile(fullPath);
      delete FsWatchFileInstances[fullPath];
    }
  };
}

// fake constructor for attaching nodefs-specific prototype methods that
// will be copied to FSWatcher's prototype
function NodeFsHandler() {}

// Private method: Watch file for changes with fs.watchFile or fs.watch.

// * path     - string, path to file or directory.
// * listener - function, to be executed on fs change.

// Returns close function for the watcher instance
NodeFsHandler.prototype._watchWithNodeFs =
function(path, listener) {
  var directory = sysPath.dirname(path);
  var basename = sysPath.basename(path);
  var parent = this._getWatchedDir(directory);
  parent.add(basename);
  var absolutePath = sysPath.resolve(path);
  var options = {persistent: this.options.persistent};
  if (!listener) listener = Function.prototype; // empty function

  var closer;
  if (this.options.usePolling) {
    options.interval = this.enableBinaryInterval && isBinaryPath(basename) ?
      this.options.binaryInterval : this.options.interval;
    closer = setFsWatchFileListener(path, absolutePath, options, {
      listener: listener,
      rawEmitter: this.emit.bind(this, 'raw')
    });
  } else {
    closer = setFsWatchListener(path, absolutePath, options, {
      listener: listener,
      errHandler: this._handleError.bind(this),
      rawEmitter: this.emit.bind(this, 'raw')
    });
  }
  return closer;
};

// Private method: Watch a file and emit add event if warranted

// * file       - string, the file's path
// * stats      - object, result of fs.stat
// * initialAdd - boolean, was the file added at watch instantiation?
// * callback   - function, called when done processing as a newly seen file

// Returns close function for the watcher instance
NodeFsHandler.prototype._handleFile =
function(file, stats, initialAdd, callback) {
  var dirname = sysPath.dirname(file);
  var basename = sysPath.basename(file);
  var parent = this._getWatchedDir(dirname);

  // if the file is already being watched, do nothing
  if (parent.has(basename)) return callback();

  // kick off the watcher
  var closer = this._watchWithNodeFs(file, function(path, newStats) {
    if (!this._throttle('watch', file, 5)) return;
    if (!newStats || newStats && newStats.mtime.getTime() === 0) {
      fs.stat(file, function(error, newStats) {
        // Fix issues where mtime is null but file is still present
        if (error) {
          this._remove(dirname, basename);
        } else {
          this._emit('change', file, newStats);
        }
      }.bind(this));
    // add is about to be emitted if file not already tracked in parent
    } else if (parent.has(basename)) {
      this._emit('change', file, newStats);
    }
  }.bind(this));

  // emit an add event if we're supposed to
  if (!(initialAdd && this.options.ignoreInitial)) {
    if (!this._throttle('add', file, 0)) return;
    this._emit('add', file, stats);
  }

  if (callback) callback();
  return closer;
};

// Private method: Handle symlinks encountered while reading a dir

// * entry      - object, entry object returned by readdirp
// * directory  - string, path of the directory being read
// * path       - string, path of this item
// * item       - string, basename of this item

// Returns true if no more processing is needed for this entry.
NodeFsHandler.prototype._handleSymlink =
function(entry, directory, path, item) {
  var full = entry.fullPath;
  var dir = this._getWatchedDir(directory);

  if (!this.options.followSymlinks) {
    // watch symlink directly (don't follow) and detect changes
    this._readyCount++;
    fs.realpath(path, function(error, linkPath) {
      if (dir.has(item)) {
        if (this._symlinkPaths[full] !== linkPath) {
          this._symlinkPaths[full] = linkPath;
          this._emit('change', path, entry.stat);
        }
      } else {
        dir.add(item);
        this._symlinkPaths[full] = linkPath;
        this._emit('add', path, entry.stat);
      }
      this._emitReady();
    }.bind(this));
    return true;
  }

  // don't follow the same symlink more than once
  if (this._symlinkPaths[full]) return true;
  else this._symlinkPaths[full] = true;
};

// Private method: Read directory to add / remove files from `@watched` list
// and re-read it on change.

// * dir        - string, fs path.
// * stats      - object, result of fs.stat
// * initialAdd - boolean, was the file added at watch instantiation?
// * depth      - int, depth relative to user-supplied path
// * target     - string, child path actually targeted for watch
// * wh         - object, common watch helpers for this path
// * callback   - function, called when dir scan is complete

// Returns close function for the watcher instance
NodeFsHandler.prototype._handleDir =
function(dir, stats, initialAdd, depth, target, wh, callback) {
  var parentDir = this._getWatchedDir(sysPath.dirname(dir));
  var tracked = parentDir.has(sysPath.basename(dir));
  if (!(initialAdd && this.options.ignoreInitial) && !target && !tracked) {
    if (!wh.hasGlob || wh.globFilter(dir)) this._emit('addDir', dir, stats);
  }

  // ensure dir is tracked (harmless if redundant)
  parentDir.add(sysPath.basename(dir));
  this._getWatchedDir(dir);

  var read = function(directory, initialAdd, done) {
    // Normalize the directory name on Windows
    directory = sysPath.join(directory, '');

    if (!wh.hasGlob) {
      var throttler = this._throttle('readdir', directory, 1000);
      if (!throttler) return;
    }

    var previous = this._getWatchedDir(wh.path);
    var current = [];

    readdirp({
      root: directory,
      entryType: 'all',
      fileFilter: wh.filterPath,
      directoryFilter: wh.filterDir,
      depth: 0,
      lstat: true
    }).on('data', function(entry) {
      var item = entry.path;
      var path = sysPath.join(directory, item);
      current.push(item);

      if (entry.stat.isSymbolicLink() &&
        this._handleSymlink(entry, directory, path, item)) return;

      // Files that present in current directory snapshot
      // but absent in previous are added to watch list and
      // emit `add` event.
      if (item === target || !target && !previous.has(item)) {
        this._readyCount++;

        // ensure relativeness of path is preserved in case of watcher reuse
        path = sysPath.join(dir, sysPath.relative(dir, path));

        this._addToNodeFs(path, initialAdd, wh, depth + 1);
      }
    }.bind(this)).on('end', function() {
      var wasThrottled = throttler ? throttler.clear() : false;
      if (done) done();

      // Files that absent in current directory snapshot
      // but present in previous emit `remove` event
      // and are removed from @watched[directory].
      previous.children().filter(function(item) {
        return item !== directory &&
          current.indexOf(item) === -1 &&
          // in case of intersecting globs;
          // a path may have been filtered out of this readdir, but
          // shouldn't be removed because it matches a different glob
          (!wh.hasGlob || wh.filterPath({
            fullPath: sysPath.resolve(directory, item)
          }));
      }).forEach(function(item) {
        this._remove(directory, item);
      }, this);

      // one more time for any missed in case changes came in extremely quickly
      if (wasThrottled) read(directory, false);
    }.bind(this)).on('error', this._handleError.bind(this));
  }.bind(this);

  var closer;

  if (this.options.depth == null || depth <= this.options.depth) {
    if (!target) read(dir, initialAdd, callback);
    closer = this._watchWithNodeFs(dir, function(dirPath, stats) {
      // if current directory is removed, do nothing
      if (stats && stats.mtime.getTime() === 0) return;

      read(dirPath, false);
    });
  } else {
    callback();
  }
  return closer;
};

// Private method: Handle added file, directory, or glob pattern.
// Delegates call to _handleFile / _handleDir after checks.

// * path       - string, path to file or directory.
// * initialAdd - boolean, was the file added at watch instantiation?
// * depth      - int, depth relative to user-supplied path
// * target     - string, child path actually targeted for watch
// * callback   - function, indicates whether the path was found or not

// Returns nothing
NodeFsHandler.prototype._addToNodeFs =
function(path, initialAdd, priorWh, depth, target, callback) {
  if (!callback) callback = Function.prototype;
  var ready = this._emitReady;
  if (this._isIgnored(path) || this.closed) {
    ready();
    return callback(null, false);
  }

  var wh = this._getWatchHelpers(path, depth);
  if (!wh.hasGlob && priorWh) {
    wh.hasGlob = priorWh.hasGlob;
    wh.globFilter = priorWh.globFilter;
    wh.filterPath = priorWh.filterPath;
    wh.filterDir = priorWh.filterDir;
  }

  // evaluate what is at the path we're being asked to watch
  fs[wh.statMethod](wh.watchPath, function(error, stats) {
    if (this._handleError(error)) return callback(null, path);
    if (this._isIgnored(wh.watchPath, stats)) {
      ready();
      return callback(null, false);
    }

    var initDir = function(dir, target) {
      return this._handleDir(dir, stats, initialAdd, depth, target, wh, ready);
    }.bind(this);

    var closer;
    if (stats.isDirectory()) {
      closer = initDir(wh.watchPath, target);
    } else if (stats.isSymbolicLink()) {
      var parent = sysPath.dirname(wh.watchPath);
      this._getWatchedDir(parent).add(wh.watchPath);
      this._emit('add', wh.watchPath, stats);
      closer = initDir(parent, path);

      // preserve this symlink's target path
      fs.realpath(path, function(error, targetPath) {
        this._symlinkPaths[sysPath.resolve(path)] = targetPath;
        ready();
      }.bind(this));
    } else {
      closer = this._handleFile(wh.watchPath, stats, initialAdd, ready);
    }

    if (closer) this._closers[path] = closer;
    callback(null, false);
  }.bind(this));
};

module.exports = NodeFsHandler;
