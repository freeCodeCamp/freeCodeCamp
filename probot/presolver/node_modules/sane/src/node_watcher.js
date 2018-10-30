'use strict';

var fs = require('fs');
var path = require('path');
var common = require('./common');
var platform = require('os').platform();
var EventEmitter = require('events').EventEmitter;

/**
 * Constants
 */

var DEFAULT_DELAY = common.DEFAULT_DELAY;
var CHANGE_EVENT = common.CHANGE_EVENT;
var DELETE_EVENT = common.DELETE_EVENT;
var ADD_EVENT = common.ADD_EVENT;
var ALL_EVENT = common.ALL_EVENT;

/**
 * Export `NodeWatcher` class.
 */

module.exports = NodeWatcher;

/**
 * Watches `dir`.
 *
 * @class NodeWatcher
 * @param {String} dir
 * @param {Object} opts
 * @public
 */

function NodeWatcher(dir, opts) {
  common.assignOptions(this, opts);

  this.watched = Object.create(null);
  this.changeTimers = Object.create(null);
  this.dirRegistery = Object.create(null);
  this.root = path.resolve(dir);
  this.watchdir = this.watchdir.bind(this);
  this.register = this.register.bind(this);
  this.checkedEmitError = this.checkedEmitError.bind(this);

  this.watchdir(this.root);
  common.recReaddir(
    this.root,
    this.watchdir,
    this.register,
    this.emit.bind(this, 'ready'),
    this.checkedEmitError,
    this.ignored
  );
}

NodeWatcher.prototype.__proto__ = EventEmitter.prototype;

/**
 * Register files that matches our globs to know what to type of event to
 * emit in the future.
 *
 * Registery looks like the following:
 *
 *  dirRegister => Map {
 *    dirpath => Map {
 *       filename => true
 *    }
 *  }
 *
 * @param {string} filepath
 * @return {boolean} whether or not we have registered the file.
 * @private
 */

NodeWatcher.prototype.register = function(filepath) {
  var relativePath = path.relative(this.root, filepath);
  if (
    !common.isFileIncluded(this.globs, this.dot, this.doIgnore, relativePath)
  ) {
    return false;
  }

  var dir = path.dirname(filepath);
  if (!this.dirRegistery[dir]) {
    this.dirRegistery[dir] = Object.create(null);
  }

  var filename = path.basename(filepath);
  this.dirRegistery[dir][filename] = true;

  return true;
};

/**
 * Removes a file from the registery.
 *
 * @param {string} filepath
 * @private
 */

NodeWatcher.prototype.unregister = function(filepath) {
  var dir = path.dirname(filepath);
  if (this.dirRegistery[dir]) {
    var filename = path.basename(filepath);
    delete this.dirRegistery[dir][filename];
  }
};

/**
 * Removes a dir from the registery.
 *
 * @param {string} dirpath
 * @private
 */

NodeWatcher.prototype.unregisterDir = function(dirpath) {
  if (this.dirRegistery[dirpath]) {
    delete this.dirRegistery[dirpath];
  }
};

/**
 * Checks if a file or directory exists in the registery.
 *
 * @param {string} fullpath
 * @return {boolean}
 * @private
 */

NodeWatcher.prototype.registered = function(fullpath) {
  var dir = path.dirname(fullpath);
  return (
    this.dirRegistery[fullpath] ||
    (this.dirRegistery[dir] && this.dirRegistery[dir][path.basename(fullpath)])
  );
};

/**
 * Determine if a given FS error can be ignored
 *
 * @private
 */
function isIgnorableFileError(error) {
  return (
    error.code === 'ENOENT' ||
    // Workaround Windows node issue #4337.
    (error.code === 'EPERM' && platform === 'win32')
  );
}

/**
 * Emit "error" event if it's not an ignorable event
 *
 * @param error
 * @private
 */
NodeWatcher.prototype.checkedEmitError = function(error) {
  if (!isIgnorableFileError(error)) {
    this.emit('error', error);
  }
};

/**
 * Watch a directory.
 *
 * @param {string} dir
 * @private
 */

NodeWatcher.prototype.watchdir = function(dir) {
  if (this.watched[dir]) {
    return;
  }

  var watcher = fs.watch(
    dir,
    { persistent: true },
    this.normalizeChange.bind(this, dir)
  );
  this.watched[dir] = watcher;

  watcher.on('error', this.checkedEmitError);

  if (this.root !== dir) {
    this.register(dir);
  }
};

/**
 * Stop watching a directory.
 *
 * @param {string} dir
 * @private
 */

NodeWatcher.prototype.stopWatching = function(dir) {
  if (this.watched[dir]) {
    this.watched[dir].close();
    delete this.watched[dir];
  }
};

/**
 * End watching.
 *
 * @public
 */

NodeWatcher.prototype.close = function(callback) {
  Object.keys(this.watched).forEach(this.stopWatching, this);
  this.removeAllListeners();
  if (typeof callback === 'function') {
    setImmediate(callback.bind(null, null, true));
  }
};

/**
 * On some platforms, as pointed out on the fs docs (most likely just win32)
 * the file argument might be missing from the fs event. Try to detect what
 * change by detecting if something was deleted or the most recent file change.
 *
 * @param {string} dir
 * @param {string} event
 * @param {string} file
 * @public
 */

NodeWatcher.prototype.detectChangedFile = function(dir, event, callback) {
  if (!this.dirRegistery[dir]) {
    return;
  }

  var found = false;
  var closest = { mtime: 0 };
  var c = 0;
  Object.keys(this.dirRegistery[dir]).forEach(function(file, i, arr) {
    fs.lstat(
      path.join(dir, file),
      function(error, stat) {
        if (found) {
          return;
        }

        if (error) {
          if (isIgnorableFileError(error)) {
            found = true;
            callback(file);
          } else {
            this.emit('error', error);
          }
        } else {
          if (stat.mtime > closest.mtime) {
            stat.file = file;
            closest = stat;
          }
          if (arr.length === ++c) {
            callback(closest.file);
          }
        }
      }.bind(this)
    );
  }, this);
};

/**
 * Normalize fs events and pass it on to be processed.
 *
 * @param {string} dir
 * @param {string} event
 * @param {string} file
 * @public
 */

NodeWatcher.prototype.normalizeChange = function(dir, event, file) {
  if (!file) {
    this.detectChangedFile(
      dir,
      event,
      function(actualFile) {
        if (actualFile) {
          this.processChange(dir, event, actualFile);
        }
      }.bind(this)
    );
  } else {
    this.processChange(dir, event, path.normalize(file));
  }
};

/**
 * Process changes.
 *
 * @param {string} dir
 * @param {string} event
 * @param {string} file
 * @public
 */

NodeWatcher.prototype.processChange = function(dir, event, file) {
  var fullPath = path.join(dir, file);
  var relativePath = path.join(path.relative(this.root, dir), file);
  fs.lstat(
    fullPath,
    function(error, stat) {
      if (error && error.code !== 'ENOENT') {
        this.emit('error', error);
      } else if (!error && stat.isDirectory()) {
        // win32 emits usless change events on dirs.
        if (event !== 'change') {
          this.watchdir(fullPath);
          if (
            common.isFileIncluded(
              this.globs,
              this.dot,
              this.doIgnore,
              relativePath
            )
          ) {
            this.emitEvent(ADD_EVENT, relativePath, stat);
          }
        }
      } else {
        var registered = this.registered(fullPath);
        if (error && error.code === 'ENOENT') {
          this.unregister(fullPath);
          this.stopWatching(fullPath);
          this.unregisterDir(fullPath);
          if (registered) {
            this.emitEvent(DELETE_EVENT, relativePath);
          }
        } else if (registered) {
          this.emitEvent(CHANGE_EVENT, relativePath, stat);
        } else {
          if (this.register(fullPath)) {
            this.emitEvent(ADD_EVENT, relativePath, stat);
          }
        }
      }
    }.bind(this)
  );
};

/**
 * Triggers a 'change' event after debounding it to take care of duplicate
 * events on os x.
 *
 * @private
 */

NodeWatcher.prototype.emitEvent = function(type, file, stat) {
  var key = type + '-' + file;
  var addKey = ADD_EVENT + '-' + file;
  if (type === CHANGE_EVENT && this.changeTimers[addKey]) {
    // Ignore the change event that is immediately fired after an add event.
    // (This happens on Linux).
    return;
  }
  clearTimeout(this.changeTimers[key]);
  this.changeTimers[key] = setTimeout(
    function() {
      delete this.changeTimers[key];
      if (type === ADD_EVENT && stat.isDirectory()) {
        // Recursively emit add events and watch for sub-files/folders
        common.recReaddir(
          path.resolve(this.root, file),
          function emitAddDir(dir, stats) {
            this.watchdir(dir);
            this.rawEmitEvent(ADD_EVENT, path.relative(this.root, dir), stats);
          }.bind(this),
          function emitAddFile(file, stats) {
            this.register(file);
            this.rawEmitEvent(ADD_EVENT, path.relative(this.root, file), stats);
          }.bind(this),
          function endCallback() {},
          this.checkedEmitError,
          this.ignored
        );
      } else {
        this.rawEmitEvent(type, file, stat);
      }
    }.bind(this),
    DEFAULT_DELAY
  );
};

/**
 * Actually emit the events
 */
NodeWatcher.prototype.rawEmitEvent = function(type, file, stat) {
  this.emit(type, file, this.root, stat);
  this.emit(ALL_EVENT, type, file, this.root, stat);
};
