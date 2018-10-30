'use strict';

var fs = require('fs');
var path = require('path');
var common = require('./common');
var watchmanClient = require('./watchman_client');
var EventEmitter = require('events').EventEmitter;
var RecrawlWarning = require('./utils/recrawl-warning-dedupe');

/**
 * Constants
 */

var CHANGE_EVENT = common.CHANGE_EVENT;
var DELETE_EVENT = common.DELETE_EVENT;
var ADD_EVENT = common.ADD_EVENT;
var ALL_EVENT = common.ALL_EVENT;

/**
 * Export `WatchmanWatcher` class.
 */

module.exports = WatchmanWatcher;

/**
 * Watches `dir`.
 *
 * @class WatchmanWatcher
 * @param String dir
 * @param {Object} opts
 * @public
 */

function WatchmanWatcher(dir, opts) {
  common.assignOptions(this, opts);
  this.root = path.resolve(dir);
  this._init();
}

WatchmanWatcher.prototype.__proto__ = EventEmitter.prototype;

/**
 * Run the watchman `watch` command on the root and subscribe to changes.
 *
 * @private
 */
WatchmanWatcher.prototype._init = function() {
  if (this._client) {
    this._client = null;
  }

  // Get the WatchmanClient instance corresponding to our watchmanPath (or nothing).
  // Then subscribe, which will do the appropriate setup so that we will receive
  // calls to handleChangeEvent when files change.
  this._client = watchmanClient.getInstance(this.watchmanPath);

  return this._client.subscribe(this, this.root).then(
    resp => {
      this._handleWarning(resp);
      this.emit('ready');
    },
    error => {
      this._handleError(error);
    }
  );
};

/**
 * Called by WatchmanClient to create the options, either during initial 'subscribe'
 * or to resubscribe after a disconnect+reconnect. Note that we are leaving out
 * the watchman 'since' and 'relative_root' options, which are handled inside the
 * WatchmanClient.
 */
WatchmanWatcher.prototype.createOptions = function() {
  let options = {
    fields: ['name', 'exists', 'new'],
  };

  // If the server has the wildmatch capability available it supports
  // the recursive **/*.foo style match and we can offload our globs
  // to the watchman server.  This saves both on data size to be
  // communicated back to us and compute for evaluating the globs
  // in our node process.
  if (this._client.wildmatch) {
    if (this.globs.length === 0) {
      if (!this.dot) {
        // Make sure we honor the dot option if even we're not using globs.
        options.expression = [
          'match',
          '**',
          'wholename',
          {
            includedotfiles: false,
          },
        ];
      }
    } else {
      options.expression = ['anyof'];
      for (var i in this.globs) {
        options.expression.push([
          'match',
          this.globs[i],
          'wholename',
          {
            includedotfiles: this.dot,
          },
        ]);
      }
    }
  }

  return options;
};

/**
 * Called by WatchmanClient when it receives an error from the watchman daemon.
 *
 * @param {Object} resp
 */
WatchmanWatcher.prototype.handleErrorEvent = function(error) {
  this.emit('error', error);
};

/**
 * Called by the WatchmanClient when it is notified about a file change in
 * the tree for this particular watcher's root.
 *
 * @param {Object} resp
 * @private
 */

WatchmanWatcher.prototype.handleChangeEvent = function(resp) {
  if (Array.isArray(resp.files)) {
    resp.files.forEach(this.handleFileChange, this);
  }
};

/**
 * Handles a single change event record.
 *
 * @param {Object} changeDescriptor
 * @private
 */

WatchmanWatcher.prototype.handleFileChange = function(changeDescriptor) {
  var absPath;
  var relativePath;

  relativePath = changeDescriptor.name;
  absPath = path.join(this.root, relativePath);

  if (
    !(this._client.wildmatch && !this.hasIgnore) &&
    !common.isFileIncluded(this.globs, this.dot, this.doIgnore, relativePath)
  ) {
    return;
  }

  if (!changeDescriptor.exists) {
    this.emitEvent(DELETE_EVENT, relativePath, this.root);
  } else {
    fs.lstat(absPath, (error, stat) => {
      // Files can be deleted between the event and the lstat call
      // the most reliable thing to do here is to ignore the event.
      if (error && error.code === 'ENOENT') {
        return;
      }

      if (this._handleError(error)) {
        return;
      }

      var eventType = changeDescriptor.new ? ADD_EVENT : CHANGE_EVENT;

      // Change event on dirs are mostly useless.
      if (!(eventType === CHANGE_EVENT && stat.isDirectory())) {
        this.emitEvent(eventType, relativePath, this.root, stat);
      }
    });
  }
};

/**
 * Dispatches an event.
 *
 * @param {string} eventType
 * @param {string} filepath
 * @param {string} root
 * @param {fs.Stat} stat
 * @private
 */

WatchmanWatcher.prototype.emitEvent = function(
  eventType,
  filepath,
  root,
  stat
) {
  this.emit(eventType, filepath, root, stat);
  this.emit(ALL_EVENT, eventType, filepath, root, stat);
};

/**
 * Closes the watcher.
 *
 * @param {function} callback
 * @private
 */

WatchmanWatcher.prototype.close = function(callback) {
  this._client.closeWatcher(this);
  callback && callback(null, true);
};

/**
 * Handles an error and returns true if exists.
 *
 * @param {WatchmanWatcher} self
 * @param {Error} error
 * @private
 */

WatchmanWatcher.prototype._handleError = function(error) {
  if (error != null) {
    this.emit('error', error);
    return true;
  } else {
    return false;
  }
};

/**
 * Handles a warning in the watchman resp object.
 *
 * @param {object} resp
 * @private
 */

WatchmanWatcher.prototype._handleWarning = function(resp) {
  if ('warning' in resp) {
    if (RecrawlWarning.isRecrawlWarningDupe(resp.warning)) {
      return true;
    }
    console.warn(resp.warning);
    return true;
  } else {
    return false;
  }
};
