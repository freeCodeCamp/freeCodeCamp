'use strict';

var os = require('os');
var bin = require('./bin');

/**
 * Gets the list of all the pids of the system through the ps command.
 * @param  {Function} callback(err, list)
 */
function ps(callback) {
  var args = ['-A', '-o', 'ppid,pid'];

  bin('ps', args, function(err, stdout, code) {
    if (err) return callback(err);
    if (code !== 0) {
      return callback(new Error('pidtree ps command exited with code ' + code));
    }

    // Example of stdout
    //
    // PPID   PID
    //    1   430
    //  430   432
    //    1   727
    //    1  7166

    try {
      stdout = stdout.split(os.EOL);

      var list = [];
      for (var i = 1; i < stdout.length; i++) {
        stdout[i] = stdout[i].trim();
        if (!stdout[i]) continue;
        stdout[i] = stdout[i].split(/\s+/);
        stdout[i][0] = parseInt(stdout[i][0], 10); // PPID
        stdout[i][1] = parseInt(stdout[i][1], 10); // PID
        list.push(stdout[i]);
      }

      callback(null, list);
    } catch (error) {
      callback(error);
    }
  });
}

module.exports = ps;
