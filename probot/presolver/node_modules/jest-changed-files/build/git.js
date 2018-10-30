'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path;

function _load_path() {
  return _path = _interopRequireDefault(require('path'));
}

var _child_process;

function _load_child_process() {
  return _child_process = _interopRequireDefault(require('child_process'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

const findChangedFilesUsingCommand = (() => {
  var _ref = _asyncToGenerator(function* (args, cwd) {
    return new Promise(function (resolve, reject) {
      const child = (_child_process || _load_child_process()).default.spawn('git', args, { cwd });
      let stdout = '';
      let stderr = '';
      child.stdout.on('data', function (data) {
        return stdout += data;
      });
      child.stderr.on('data', function (data) {
        return stderr += data;
      });
      child.on('error', function (e) {
        return reject(e);
      });
      child.on('close', function (code) {
        if (code === 0) {
          stdout = stdout.trim();
          if (stdout === '') {
            resolve([]);
          } else {
            resolve(stdout.split('\n').filter(function (s) {
              return s !== '';
            }).map(function (changedPath) {
              return (_path || _load_path()).default.resolve(cwd, changedPath);
            }));
          }
        } else {
          reject(code + ': ' + stderr);
        }
      });
    });
  });

  return function findChangedFilesUsingCommand(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

const adapter = {
  findChangedFiles: (() => {
    var _ref2 = _asyncToGenerator(function* (cwd, options) {
      const changedSince = options && (options.withAncestor ? 'HEAD^' : options.changedSince);

      if (options && options.lastCommit) {
        return yield findChangedFilesUsingCommand(['show', '--name-only', '--pretty=%b', 'HEAD'], cwd);
      } else if (changedSince) {
        const committed = yield findChangedFilesUsingCommand(['log', '--name-only', '--pretty=%b', 'HEAD', `^${changedSince}`], cwd);
        const staged = yield findChangedFilesUsingCommand(['diff', '--cached', '--name-only'], cwd);
        const unstaged = yield findChangedFilesUsingCommand(['ls-files', '--other', '--modified', '--exclude-standard'], cwd);
        return [].concat(_toConsumableArray(committed), _toConsumableArray(staged), _toConsumableArray(unstaged));
      } else {
        return yield findChangedFilesUsingCommand(['ls-files', '--other', '--modified', '--exclude-standard'], cwd);
      }
    });

    return function findChangedFiles(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  })(),

  getRoot: (() => {
    var _ref3 = _asyncToGenerator(function* (cwd) {
      return new Promise(function (resolve) {
        try {
          let stdout = '';
          const options = ['rev-parse', '--show-toplevel'];
          const child = (_child_process || _load_child_process()).default.spawn('git', options, { cwd });
          child.stdout.on('data', function (data) {
            return stdout += data;
          });
          child.on('error', function () {
            return resolve(null);
          });
          child.on('close', function (code) {
            return resolve(code === 0 ? stdout.trim() : null);
          });
        } catch (e) {
          resolve(null);
        }
      });
    });

    return function getRoot(_x5) {
      return _ref3.apply(this, arguments);
    };
  })()
};

exports.default = adapter;