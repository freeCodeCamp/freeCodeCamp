'use strict';

var getAll = require('./get');

/**
 * Get the list of children and grandchildren pids of the given PID.
 * @param  {Number|String} PID A PID. If -1 will return all the pids.
 * @param  {Object} [options] Optional options object.
 * @param  {Boolean} [options.root=false] Include the provided PID in the list.
 * @param  {Boolean} [options.advanced=false] Returns a list of objects in the
 * format {pid: X, ppid: Y}.
 * @param  {Function} callback(err, list) Called when the list is ready.
 */
function list(PID, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }

  if (typeof options !== 'object') {
    options = {};
  }

  PID = parseInt(PID, 10);
  if (isNaN(PID) || PID < -1) {
    callback(new TypeError('The pid provided is invalid'));
    return;
  }

  getAll(function(err, list) {
    if (err) {
      callback(err);
      return;
    }

    // If the user wants the whole list just return it
    if (PID === -1) {
      for (var i = 0; i < list.length; i++) {
        list[i] = options.advanced
          ? {ppid: list[i][0], pid: list[i][1]}
          : (list[i] = list[i][1]);
      }

      callback(null, list);
      return;
    }

    var root;
    for (var l = 0; l < list.length; l++) {
      if (list[l][1] === PID) {
        root = options.advanced ? {ppid: list[l][0], pid: PID} : PID;
        break;
      }

      if (list[l][0] === PID) {
        root = options.advanced ? {pid: PID} : PID; // Special pids like 0 on *nix
      }
    }

    if (!root) {
      callback(new Error('No matching pid found'));
      return;
    }

    // Build the adiacency Hash Map (pid -> [children of pid])
    var tree = {};
    while (list.length > 0) {
      var element = list.pop();
      if (tree[element[0]]) {
        tree[element[0]].push(element[1]);
      } else {
        tree[element[0]] = [element[1]];
      }
    }

    // Starting by the PID provided by the user, traverse the tree using the
    // adiacency Hash Map until the whole subtree is visited.
    // Each pid encountered while visiting is added to the pids array.
    var idx = 0;
    var pids = [root];
    while (idx < pids.length) {
      var curpid = options.advanced ? pids[idx++].pid : pids[idx++];
      if (!tree[curpid]) continue;
      var length = tree[curpid].length;
      for (var j = 0; j < length; j++) {
        pids.push(
          options.advanced
            ? {ppid: curpid, pid: tree[curpid][j]}
            : tree[curpid][j]
        );
      }

      delete tree[curpid];
    }

    if (!options.root) {
      pids.shift(); // Remove root
    }

    callback(null, pids);
  });
}

module.exports = list;
