'use strict';

var os = require('os');
var bin = require('./bin');

/**
 * Gets the list of all the pids of the system through the wmic command.
 * @param  {Function} callback(err, list)
 */
function wmic(callback) {
  var args = ['PROCESS', 'get', 'ParentProcessId,ProcessId'];
  var options = {windowsHide: true, windowsVerbatimArguments: true};
  bin('wmic', args, options, function(err, stdout, code) {
    if (err) {
      callback(err);
      return;
    }

    if (code !== 0) {
      callback(new Error('pidtree wmic command exited with code ' + code));
      return;
    }

    // Example of stdout
    //
    // ParentProcessId  ProcessId
    // 0                777

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

module.exports = wmic;
