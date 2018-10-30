'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jestChangedFiles;

function _load_jestChangedFiles() {
  return _jestChangedFiles = require('jest-changed-files');
}

exports.default = (globalConfig, configs) => {
  if (globalConfig.onlyChanged) {
    const allRootsForAllProjects = configs.reduce((roots, config) => roots.concat(config.roots || []), []);
    return (0, (_jestChangedFiles || _load_jestChangedFiles()).getChangedFilesForRoots)(allRootsForAllProjects, {
      changedSince: globalConfig.changedSince,
      lastCommit: globalConfig.lastCommit,
      withAncestor: globalConfig.changedFilesWithAncestor
    });
  }

  return undefined;
}; /**
    * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE file in the root directory of this source tree.
    *
    * 
    */