'use strict';

const fs = require('fs');
const promisify = require('util.promisify');

const promisiedFsRealpath = promisify(fs.realpath);

function realpath(filepath) {
  if (typeof fs.realpath.native === 'function') {
    return promisify(fs.realpath.native)(filepath);
  }
  const fsBinding = process.binding('fs');

  if (fsBinding.realpath) {
    return new Promise((resolve, reject) => {
      try {
        resolve(fsBinding.realpath(filepath, 'utf8'));
      } catch (e) {
        reject(e);
      }
    });
  }

  return promisiedFsRealpath(filepath);
}

function realpathSync(filepath) {
  if (typeof fs.realpathSync.native === 'function') {
    return fs.realpathSync.native(filepath);
  }

  const fsBinding = process.binding('fs');

  if (fsBinding.realpath) {
    try {
      return fsBinding.realpath(filepath, 'utf8');
    } catch (err) {
      /* Probably RAM-disk on windows. */
    }
  }

  return fs.realpathSync(filepath);
}

module.exports = realpath;
module.exports.sync = realpathSync;
