'use strict';

var _fs;

function _load_fs() {
  return _fs = _interopRequireDefault(require('fs'));
}

var _path;

function _load_path() {
  return _path = _interopRequireDefault(require('path'));
}

var _child_process;

function _load_child_process() {
  return _child_process = require('child_process');
}

var _constants;

function _load_constants() {
  return _constants = _interopRequireDefault(require('../constants'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function find(roots, extensions, ignore, callback) {
  const result = [];
  let activeCalls = 0;

  function search(directory) {
    activeCalls++;
    (_fs || _load_fs()).default.readdir(directory, (err, names) => {
      activeCalls--;

      names.forEach(file => {
        file = (_path || _load_path()).default.join(directory, file);
        if (ignore(file)) {
          return;
        }
        activeCalls++;

        (_fs || _load_fs()).default.lstat(file, (err, stat) => {
          activeCalls--;

          if (!err && stat && !stat.isSymbolicLink()) {
            if (stat.isDirectory()) {
              search(file);
            } else {
              const ext = (_path || _load_path()).default.extname(file).substr(1);
              if (extensions.indexOf(ext) !== -1) {
                result.push([file, stat.mtime.getTime()]);
              }
            }
          }
          if (activeCalls === 0) {
            callback(result);
          }
        });
      });

      if (activeCalls === 0) {
        callback(result);
      }
    });
  }

  if (roots.length > 0) {
    roots.forEach(search);
  } else {
    callback(result);
  }
}

function findNative(roots, extensions, ignore, callback) {
  const args = [].concat(roots);
  args.push('-type', 'f');
  if (extensions.length) {
    args.push('(');
  }
  extensions.forEach((ext, index) => {
    if (index) {
      args.push('-o');
    }
    args.push('-iname');
    args.push('*.' + ext);
  });
  if (extensions.length) {
    args.push(')');
  }

  const child = (0, (_child_process || _load_child_process()).spawn)('find', args);
  let stdout = '';
  child.stdout.setEncoding('utf-8');
  child.stdout.on('data', data => stdout += data);

  child.stdout.on('close', () => {
    const lines = stdout.trim().split('\n').filter(x => !ignore(x));
    const result = [];
    let count = lines.length;
    if (!count) {
      callback([]);
    } else {
      lines.forEach(path => {
        (_fs || _load_fs()).default.stat(path, (err, stat) => {
          if (!err && stat) {
            result.push([path, stat.mtime.getTime()]);
          }
          if (--count === 0) {
            callback(result);
          }
        });
      });
    }
  });
}

module.exports = function nodeCrawl(options) {
  const data = options.data,
        extensions = options.extensions,
        forceNodeFilesystemAPI = options.forceNodeFilesystemAPI,
        ignore = options.ignore,
        roots = options.roots;


  return new Promise(resolve => {
    const callback = list => {
      const files = Object.create(null);
      list.forEach(fileData => {
        const name = fileData[0];
        const mtime = fileData[1];
        const existingFile = data.files[name];
        if (existingFile && existingFile[(_constants || _load_constants()).default.MTIME] === mtime) {
          files[name] = existingFile;
        } else {
          // See ../constants.js
          files[name] = ['', mtime, 0, []];
        }
      });
      data.files = files;
      resolve(data);
    };

    if (forceNodeFilesystemAPI || process.platform === 'win32') {
      find(roots, extensions, ignore, callback);
    } else {
      findNative(roots, extensions, ignore, callback);
    }
  });
};