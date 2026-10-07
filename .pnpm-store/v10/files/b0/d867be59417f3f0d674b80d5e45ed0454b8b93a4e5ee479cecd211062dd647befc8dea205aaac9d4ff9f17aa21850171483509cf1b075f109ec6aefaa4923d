'use strict';

var os = require('os');

var platformToMethod = {
  darwin: 'ps',
  sunos: 'ps',
  freebsd: 'ps',
  netbsd: 'ps',
  win: 'wmic',
  linux: 'ps',
  aix: 'ps'
};

var platform = os.platform();
if (platform.startsWith('win')) {
  platform = 'win';
}

var file = platformToMethod[platform];

/**
 * Gets the list of all the pids of the system.
 * @param  {Function} callback Called when the list is ready.
 */
function get(callback) {
  if (file === undefined) {
    callback(
      new Error(
        os.platform() +
          ' is not supported yet, please open an issue (https://github.com/simonepri/pidtree)'
      )
    );
  }

  var list = require('./' + file);
  list(callback);
}

module.exports = get;
