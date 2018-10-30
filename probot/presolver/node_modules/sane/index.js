'use strict';

var NodeWatcher = require('./src/node_watcher');
var PollWatcher = require('./src/poll_watcher');
var WatchmanWatcher = require('./src/watchman_watcher');
var FSEventsWatcher = require('./src/fsevents_watcher');

function sane(dir, options) {
  options = options || {};
  if (options.watcher) {
    var WatcherClass = require(options.watcher);
    return new WatcherClass(dir, options);
  } else if (options.poll) {
    return new PollWatcher(dir, options);
  } else if (options.watchman) {
    return new WatchmanWatcher(dir, options);
  } else if (options.fsevents) {
    return new FSEventsWatcher(dir, options);
  } else {
    return new NodeWatcher(dir, options);
  }
}

module.exports = sane;
sane.NodeWatcher = NodeWatcher;
sane.PollWatcher = PollWatcher;
sane.WatchmanWatcher = WatchmanWatcher;
sane.FSEventsWatcher = FSEventsWatcher;
