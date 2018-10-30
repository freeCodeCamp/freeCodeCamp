'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findRepos = exports.getChangedFilesForRoots = undefined;

var _git;

function _load_git() {
  return _git = _interopRequireDefault(require('./git'));
}

var _hg;

function _load_hg() {
  return _hg = _interopRequireDefault(require('./hg'));
}

var _throat;

function _load_throat() {
  return _throat = _interopRequireDefault(require('throat'));
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

// This is an arbitrary number. The main goal is to prevent projects with
// many roots (50+) from spawning too many processes at once.
const mutex = (0, (_throat || _load_throat()).default)(5);

const findGitRoot = dir => mutex(() => (_git || _load_git()).default.getRoot(dir));
const findHgRoot = dir => mutex(() => (_hg || _load_hg()).default.getRoot(dir));

const getChangedFilesForRoots = exports.getChangedFilesForRoots = (() => {
  var _ref = _asyncToGenerator(function* (roots, options) {
    const repos = yield findRepos(roots);

    const gitPromises = Array.from(repos.git).map(function (repo) {
      return (_git || _load_git()).default.findChangedFiles(repo, options);
    });

    const hgPromises = Array.from(repos.hg).map(function (repo) {
      return (_hg || _load_hg()).default.findChangedFiles(repo, options);
    });

    const changedFiles = (yield Promise.all(gitPromises.concat(hgPromises))).reduce(function (allFiles, changedFilesInTheRepo) {
      for (const file of changedFilesInTheRepo) {
        allFiles.add(file);
      }

      return allFiles;
    }, new Set());

    return { changedFiles, repos };
  });

  return function getChangedFilesForRoots(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

const findRepos = exports.findRepos = (() => {
  var _ref2 = _asyncToGenerator(function* (roots) {
    const gitRepos = yield Promise.all(roots.reduce(function (promises, root) {
      return promises.concat(findGitRoot(root));
    }, []));
    const hgRepos = yield Promise.all(roots.reduce(function (promises, root) {
      return promises.concat(findHgRoot(root));
    }, []));

    return {
      git: new Set(gitRepos.filter(Boolean)),
      hg: new Set(hgRepos.filter(Boolean))
    };
  });

  return function findRepos(_x3) {
    return _ref2.apply(this, arguments);
  };
})();