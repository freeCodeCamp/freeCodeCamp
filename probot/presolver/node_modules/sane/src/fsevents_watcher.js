'use strict';

var fs = require('fs');
var path = require('path');
var common = require('./common');
var EventEmitter = require('events').EventEmitter;
var fsevents;

try {
  fsevents = require('fsevents');
} catch (e) {
  // Ignore.
}

/**
 * Constants
 */

var CHANGE_EVENT = common.CHANGE_EVENT;
var DELETE_EVENT = common.DELETE_EVENT;
var ADD_EVENT = common.ADD_EVENT;
var ALL_EVENT = common.ALL_EVENT;

/**
 * Export `FSEventsWatcher` class.
 */

module.exports = FSEventsWatcher;

/**
 * Watches `dir`.
 *
 * @class FSEventsWatcher
 * @param String dir
 * @param {Object} opts
 * @public
 */

function FSEventsWatcher(dir, opts) {
  if (!fsevents) {
    throw new Error(
      '`fsevents` unavailable (this watcher can only be used on Darwin)'
    );
  }

  common.assignOptions(this, opts);

  this.root = path.resolve(dir);
  this.watcher = fsevents(this.root);

  this.watcher.start().on('change', this.handleEvent.bind(this));
  this._tracked = Object.create(null);

  common.recReaddir(
    this.root,
    filepath => (this._tracked[filepath] = true),
    filepath => (this._tracked[filepath] = true),
    this.emit.bind(this, 'ready'),
    this.emit.bind(this, 'error'),
    this.ignored
  );
}

FSEventsWatcher.prototype.__proto__ = EventEmitter.prototype;

FSEventsWatcher.prototype.handleEvent = function(filepath) {
  var relativePath = path.relative(this.root, filepath);
  if (
    !common.isFileIncluded(this.globs, this.dot, this.doIgnore, relativePath)
  ) {
    return;
  }

  fs.lstat(
    filepath,
    function(error, stat) {
      if (error && error.code !== 'ENOENT') {
        this.emit('error', error);
        return;
      }

      if (error) {
        // Ignore files that aren't tracked and don't exist.
        if (!this._tracked[filepath]) {
          return;
        }

        this._emit(DELETE_EVENT, relativePath);
        delete this._tracked[filepath];
        return;
      }

      if (this._tracked[filepath]) {
        this._emit(CHANGE_EVENT, relativePath, stat);
      } else {
        this._tracked[filepath] = true;
        this._emit(ADD_EVENT, relativePath, stat);
      }
    }.bind(this)
  );
};

/**
 * End watching.
 *
 * @public
 */

FSEventsWatcher.prototype.close = function(callback) {
  this.watcher.stop();
  this.removeAllListeners();
  if (typeof callback === 'function') {
    process.nextTick(callback.bind(null, null, true));
  }
};

/**
 * Emit events.
 *
 * @private
 */

FSEventsWatcher.prototype._emit = function(type, file, stat) {
  this.emit(type, file, this.root, stat);
  this.emit(ALL_EVENT, type, file, this.root, stat);
};
