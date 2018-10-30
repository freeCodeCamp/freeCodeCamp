'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = nodeModulesPaths;

var _path;

function _load_path() {
  return _path = _interopRequireDefault(require('path'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Adapted from: https://github.com/substack/node-resolve
 *
 * 
 */

function nodeModulesPaths(basedir, options) {
  const modules = options && options.moduleDirectory ? [].concat(options.moduleDirectory) : ['node_modules'];

  // ensure that `basedir` is an absolute path at this point,
  // resolving against the process' current working directory
  const basedirAbs = (_path || _load_path()).default.resolve(basedir);

  let prefix = '/';
  if (/^([A-Za-z]:)/.test(basedirAbs)) {
    prefix = '';
  } else if (/^\\\\/.test(basedirAbs)) {
    prefix = '\\\\';
  }

  const paths = [basedirAbs];
  let parsed = (_path || _load_path()).default.parse(basedirAbs);
  while (parsed.dir !== paths[paths.length - 1]) {
    paths.push(parsed.dir);
    parsed = (_path || _load_path()).default.parse(parsed.dir);
  }

  const dirs = paths.reduce((dirs, aPath) => {
    return dirs.concat(modules.map(moduleDir => {
      return (_path || _load_path()).default.isAbsolute(moduleDir) ? aPath === basedirAbs ? moduleDir : '' : (_path || _load_path()).default.join(prefix, aPath, moduleDir);
    }));
  }, []).filter(dir => dir !== '');

  return options.paths ? dirs.concat(options.paths) : dirs;
}