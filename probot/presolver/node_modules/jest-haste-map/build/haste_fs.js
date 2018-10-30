'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path;

function _load_path() {
  return _path = _interopRequireDefault(require('path'));
}

var _micromatch;

function _load_micromatch() {
  return _micromatch = _interopRequireDefault(require('micromatch'));
}

var _constants;

function _load_constants() {
  return _constants = _interopRequireDefault(require('./constants'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HasteFS {

  constructor(files) {
    this._files = files;
  }

  getModuleName(file) {
    return this._files[file] && this._files[file][(_constants || _load_constants()).default.ID] || null;
  }

  getDependencies(file) {
    return this._files[file] && this._files[file][(_constants || _load_constants()).default.DEPENDENCIES] || null;
  }

  exists(file) {
    return !!this._files[file];
  }

  getAllFiles() {
    return Object.keys(this._files);
  }

  matchFiles(pattern) {
    if (!(pattern instanceof RegExp)) {
      pattern = new RegExp(pattern);
    }
    const files = [];
    for (const file in this._files) {
      if (pattern.test(file)) {
        files.push(file);
      }
    }
    return files;
  }

  matchFilesWithGlob(globs, root) {
    const files = new Set();
    for (const file in this._files) {
      const filePath = root ? (_path || _load_path()).default.relative(root, file) : file;
      if ((0, (_micromatch || _load_micromatch()).default)([filePath], globs).length) {
        files.add(file);
      }
    }
    return files;
  }
}
exports.default = HasteFS; /**
                            * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                            *
                            * This source code is licensed under the MIT license found in the
                            * LICENSE file in the root directory of this source tree.
                            *
                            * 
                            */