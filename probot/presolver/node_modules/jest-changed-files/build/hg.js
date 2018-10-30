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

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

const env = Object.assign({}, process.env, {
  HGPLAIN: 1
});

const ANCESTORS = [
// Parent commit to this one.
'.^',

// The first commit of my branch, only if we are not on the default branch.
'min(branch(.)) and not min(branch(default))',

// Latest public commit.
'max(public())'];

const adapter = {
  findChangedFiles: (() => {
    var _ref = _asyncToGenerator(function* (cwd, options) {
      return new Promise(function (resolve, reject) {
        let args = ['status', '-amnu'];
        if (options && options.withAncestor) {
          args.push('--rev', `ancestor(${ANCESTORS.join(', ')})`);
        } else if (options && options.changedSince) {
          args.push('--rev', `ancestor(., ${options.changedSince})`);
        } else if (options && options.lastCommit === true) {
          args = ['tip', '--template', '{files%"{file}\n"}'];
        }
        const child = (_child_process || _load_child_process()).default.spawn('hg', args, { cwd, env });
        let stdout = '';
        let stderr = '';
        child.stdout.on('data', function (data) {
          return stdout += data;
        });
        child.stderr.on('data', function (data) {
          return stderr += data;
        });
        child.on('error', function (error) {
          return reject(error);
        });
        child.on('close', function (code) {
          if (code === 0) {
            stdout = stdout.trim();
            if (stdout === '') {
              resolve([]);
            } else {
              resolve(stdout.split('\n').map(function (changedPath) {
                return (_path || _load_path()).default.resolve(cwd, changedPath);
              }));
            }
          } else {
            reject(new Error(code + ': ' + stderr));
          }
        });
      });
    });

    return function findChangedFiles(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  })(),

  getRoot: (() => {
    var _ref2 = _asyncToGenerator(function* (cwd) {
      return new Promise(function (resolve) {
        try {
          let stdout = '';
          const child = (_child_process || _load_child_process()).default.spawn('hg', ['root'], { cwd, env });
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

    return function getRoot(_x3) {
      return _ref2.apply(this, arguments);
    };
  })()
};

exports.default = adapter;