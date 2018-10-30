'use strict';

var fs = require('fs');
var sysPath = require('path');
var readdirp = require('readdirp');
var fsevents;
try { fsevents = require('fsevents'); } catch (error) {
  if (process.env.CHOKIDAR_PRINT_FSEVENTS_REQUIRE_ERROR) console.error(error)
}

// fsevents instance helper functions

// object to hold per-process fsevents instances
// (may be shared across chokidar FSWatcher instances)
var FSEventsWatchers = Object.create(null);

// Threshold of duplicate path prefixes at which to start
// consolidating going forward
var consolidateThreshhold = 10;

// Private function: Instantiates the fsevents interface

// * path       - string, path to be watched
// * callback   - function, called when fsevents is bound and ready

// Returns new fsevents instance
function createFSEventsInstance(path, callback) {
  return (new fsevents(path)).on('fsevent', callback).start();
}

// Private function: Instantiates the fsevents interface or binds listeners
// to an existing one covering the same file tree

// * path       - string, path to be watched
// * realPath   - string, real path (in case of symlinks)
// * listener   - function, called when fsevents emits events
// * rawEmitter - function, passes data to listeners of the 'raw' event

// Returns close function
function setFSEventsListener(path, realPath, listener, rawEmitter) {
  var watchPath = sysPath.extname(path) ? sysPath.dirname(path) : path;
  var watchContainer;
  var parentPath = sysPath.dirname(watchPath);

  // If we've accumulated a substantial number of paths that
  // could have been consolidated by watching one directory
  // above the current one, create a watcher on the parent
  // path instead, so that we do consolidate going forward.
  if (couldConsolidate(parentPath)) {
    watchPath = parentPath;
  }

  var resolvedPath = sysPath.resolve(path);
  var hasSymlink = resolvedPath !== realPath;
  function filteredListener(fullPath, flags, info) {
    if (hasSymlink) fullPath = fullPath.replace(realPath, resolvedPath);
    if (
      fullPath === resolvedPath ||
      !fullPath.indexOf(resolvedPath + sysPath.sep)
    ) listener(fullPath, flags, info);
  }

  // check if there is already a watcher on a parent path
  // modifies `watchPath` to the parent path when it finds a match
  function watchedParent() {
    return Object.keys(FSEventsWatchers).some(function(watchedPath) {
      // condition is met when indexOf returns 0
      if (!realPath.indexOf(sysPath.resolve(watchedPath) + sysPath.sep)) {
        watchPath = watchedPath;
        return true;
      }
    });
  }

  if (watchPath in FSEventsWatchers || watchedParent()) {
    watchContainer = FSEventsWatchers[watchPath];
    watchContainer.listeners.push(filteredListener);
  } else {
    watchContainer = FSEventsWatchers[watchPath] = {
      listeners: [filteredListener],
      rawEmitters: [rawEmitter],
      watcher: createFSEventsInstance(watchPath, function(fullPath, flags) {
        var info = fsevents.getInfo(fullPath, flags);
        watchContainer.listeners.forEach(function(listener) {
          listener(fullPath, flags, info);
        });
        watchContainer.rawEmitters.forEach(function(emitter) {
          emitter(info.event, fullPath, info);
        });
      })
    };
  }
  var listenerIndex = watchContainer.listeners.length - 1;

  // removes this instance's listeners and closes the underlying fsevents
  // instance if there are no more listeners left
  return function close() {
    delete watchContainer.listeners[listenerIndex];
    delete watchContainer.rawEmitters[listenerIndex];
    if (!Object.keys(watchContainer.listeners).length) {
      watchContainer.watcher.stop();
      delete FSEventsWatchers[watchPath];
    }
  };
}

// Decide whether or not we should start a new higher-level
// parent watcher
function couldConsolidate(path) {
  var keys = Object.keys(FSEventsWatchers);
  var count = 0;

  for (var i = 0, len = keys.length; i < len; ++i) {
    var watchPath = keys[i];
    if (watchPath.indexOf(path) === 0) {
      count++;
      if (count >= consolidateThreshhold) {
        return true;
      }
    }
  }

  return false;
}

// returns boolean indicating whether fsevents can be used
function canUse() {
  return fsevents && Object.keys(FSEventsWatchers).length < 128;
}

// determines subdirectory traversal levels from root to path
function depth(path, root) {
  var i = 0;
  while (!path.indexOf(root) && (path = sysPath.dirname(path)) !== root) i++;
  return i;
}

// fake constructor for attaching fsevents-specific prototype methods that
// will be copied to FSWatcher's prototype
function FsEventsHandler() {}

// Private method: Handle symlinks encountered during directory scan

// * watchPath  - string, file/dir path to be watched with fsevents
// * realPath   - string, real path (in case of symlinks)
// * transform  - function, path transformer
// * globFilter - function, path filter in case a glob pattern was provided

// Returns close function for the watcher instance
FsEventsHandler.prototype._watchWithFsEvents =
function(watchPath, realPath, transform, globFilter) {
  if (this._isIgnored(watchPath)) return;
  var watchCallback = function(fullPath, flags, info) {
    if (
      this.options.depth !== undefined &&
      depth(fullPath, realPath) > this.options.depth
    ) return;
    var path = transform(sysPath.join(
      watchPath, sysPath.relative(watchPath, fullPath)
    ));
    if (globFilter && !globFilter(path)) return;
    // ensure directories are tracked
    var parent = sysPath.dirname(path);
    var item = sysPath.basename(path);
    var watchedDir = this._getWatchedDir(
      info.type === 'directory' ? path : parent
    );
    var checkIgnored = function(stats) {
      if (this._isIgnored(path, stats)) {
        this._ignoredPaths[path] = true;
        if (stats && stats.isDirectory()) {
          this._ignoredPaths[path + '/**/*'] = true;
        }
        return true;
      } else {
        delete this._ignoredPaths[path];
        delete this._ignoredPaths[path + '/**/*'];
      }
    }.bind(this);

    var handleEvent = function(event) {
      if (checkIgnored()) return;

      if (event === 'unlink') {
        // suppress unlink events on never before seen files
        if (info.type === 'directory' || watchedDir.has(item)) {
          this._remove(parent, item);
        }
      } else {
        if (event === 'add') {
          // track new directories
          if (info.type === 'directory') this._getWatchedDir(path);

          if (info.type === 'symlink' && this.options.followSymlinks) {
            // push symlinks back to the top of the stack to get handled
            var curDepth = this.options.depth === undefined ?
              undefined : depth(fullPath, realPath) + 1;
            return this._addToFsEvents(path, false, true, curDepth);
          } else {
            // track new paths
            // (other than symlinks being followed, which will be tracked soon)
            this._getWatchedDir(parent).add(item);
          }
        }
        var eventName = info.type === 'directory' ? event + 'Dir' : event;
        this._emit(eventName, path);
        if (eventName === 'addDir') this._addToFsEvents(path, false, true);
      }
    }.bind(this);

    function addOrChange() {
      handleEvent(watchedDir.has(item) ? 'change' : 'add');
    }
    function checkFd() {
      fs.open(path, 'r', function(error, fd) {
        if (error) {
          error.code !== 'EACCES' ?
            handleEvent('unlink') : addOrChange();
        } else {
          fs.close(fd, function(err) {
            err && err.code !== 'EACCES' ?
              handleEvent('unlink') : addOrChange();
          });
        }
      });
    }
    // correct for wrong events emitted
    var wrongEventFlags = [
      69888, 70400, 71424, 72704, 73472, 131328, 131840, 262912
    ];
    if (wrongEventFlags.indexOf(flags) !== -1 || info.event === 'unknown') {
      if (typeof this.options.ignored === 'function') {
        fs.stat(path, function(error, stats) {
          if (checkIgnored(stats)) return;
          stats ? addOrChange() : handleEvent('unlink');
        });
      } else {
        checkFd();
      }
    } else {
      switch (info.event) {
      case 'created':
      case 'modified':
        return addOrChange();
      case 'deleted':
      case 'moved':
        return checkFd();
      }
    }
  }.bind(this);

  var closer = setFSEventsListener(
    watchPath,
    realPath,
    watchCallback,
    this.emit.bind(this, 'raw')
  );

  this._emitReady();
  return closer;
};

// Private method: Handle symlinks encountered during directory scan

// * linkPath   - string, path to symlink
// * fullPath   - string, absolute path to the symlink
// * transform  - function, pre-existing path transformer
// * curDepth   - int, level of subdirectories traversed to where symlink is

// Returns nothing
FsEventsHandler.prototype._handleFsEventsSymlink =
function(linkPath, fullPath, transform, curDepth) {
  // don't follow the same symlink more than once
  if (this._symlinkPaths[fullPath]) return;
  else this._symlinkPaths[fullPath] = true;

  this._readyCount++;

  fs.realpath(linkPath, function(error, linkTarget) {
    if (this._handleError(error) || this._isIgnored(linkTarget)) {
      return this._emitReady();
    }

    this._readyCount++;

    // add the linkTarget for watching with a wrapper for transform
    // that causes emitted paths to incorporate the link's path
    this._addToFsEvents(linkTarget || linkPath, function(path) {
      var dotSlash = '.' + sysPath.sep;
      var aliasedPath = linkPath;
      if (linkTarget && linkTarget !== dotSlash) {
        aliasedPath = path.replace(linkTarget, linkPath);
      } else if (path !== dotSlash) {
        aliasedPath = sysPath.join(linkPath, path);
      }
      return transform(aliasedPath);
    }, false, curDepth);
  }.bind(this));
};

// Private method: Handle added path with fsevents

// * path       - string, file/directory path or glob pattern
// * transform  - function, converts working path to what the user expects
// * forceAdd   - boolean, ensure add is emitted
// * priorDepth - int, level of subdirectories already traversed

// Returns nothing
FsEventsHandler.prototype._addToFsEvents =
function(path, transform, forceAdd, priorDepth) {

  // applies transform if provided, otherwise returns same value
  var processPath = typeof transform === 'function' ?
    transform : function(val) { return val; };

  var emitAdd = function(newPath, stats) {
    var pp = processPath(newPath);
    var isDir = stats.isDirectory();
    var dirObj = this._getWatchedDir(sysPath.dirname(pp));
    var base = sysPath.basename(pp);

    // ensure empty dirs get tracked
    if (isDir) this._getWatchedDir(pp);

    if (dirObj.has(base)) return;
    dirObj.add(base);

    if (!this.options.ignoreInitial || forceAdd === true) {
      this._emit(isDir ? 'addDir' : 'add', pp, stats);
    }
  }.bind(this);

  var wh = this._getWatchHelpers(path);

  // evaluate what is at the path we're being asked to watch
  fs[wh.statMethod](wh.watchPath, function(error, stats) {
    if (this._handleError(error) || this._isIgnored(wh.watchPath, stats)) {
      this._emitReady();
      return this._emitReady();
    }

    if (stats.isDirectory()) {
      // emit addDir unless this is a glob parent
      if (!wh.globFilter) emitAdd(processPath(path), stats);

      // don't recurse further if it would exceed depth setting
      if (priorDepth && priorDepth > this.options.depth) return;

      // scan the contents of the dir
      readdirp({
        root: wh.watchPath,
        entryType: 'all',
        fileFilter: wh.filterPath,
        directoryFilter: wh.filterDir,
        lstat: true,
        depth: this.options.depth - (priorDepth || 0)
      }).on('data', function(entry) {
        // need to check filterPath on dirs b/c filterDir is less restrictive
        if (entry.stat.isDirectory() && !wh.filterPath(entry)) return;

        var joinedPath = sysPath.join(wh.watchPath, entry.path);
        var fullPath = entry.fullPath;

        if (wh.followSymlinks && entry.stat.isSymbolicLink()) {
          // preserve the current depth here since it can't be derived from
          // real paths past the symlink
          var curDepth = this.options.depth === undefined ?
            undefined : depth(joinedPath, sysPath.resolve(wh.watchPath)) + 1;

          this._handleFsEventsSymlink(joinedPath, fullPath, processPath, curDepth);
        } else {
          emitAdd(joinedPath, entry.stat);
        }
      }.bind(this)).on('error', function() {
        // Ignore readdirp errors
      }).on('end', this._emitReady);
    } else {
      emitAdd(wh.watchPath, stats);
      this._emitReady();
    }
  }.bind(this));

  if (this.options.persistent && forceAdd !== true) {
    var initWatch = function(error, realPath) {
      if (this.closed) return;
      var closer = this._watchWithFsEvents(
        wh.watchPath,
        sysPath.resolve(realPath || wh.watchPath),
        processPath,
        wh.globFilter
      );
      if (closer) this._closers[path] = closer;
    }.bind(this);

    if (typeof transform === 'function') {
      // realpath has already been resolved
      initWatch();
    } else {
      fs.realpath(wh.watchPath, initWatch);
    }
  }
};

module.exports = FsEventsHandler;
module.exports.canUse = canUse;
