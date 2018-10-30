'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defaultResolver;

var _browserResolve;

function _load_browserResolve() {
  return _browserResolve = _interopRequireDefault(require('browser-resolve'));
}

var _fs;

function _load_fs() {
  return _fs = _interopRequireDefault(require('fs'));
}

var _path;

function _load_path() {
  return _path = _interopRequireDefault(require('path'));
}

var _is_builtin_module;

function _load_is_builtin_module() {
  return _is_builtin_module = _interopRequireDefault(require('./is_builtin_module'));
}

var _node_modules_paths;

function _load_node_modules_paths() {
  return _node_modules_paths = _interopRequireDefault(require('./node_modules_paths'));
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

function defaultResolver(path, options) {
  const resolve = options.browser ? (_browserResolve || _load_browserResolve()).default.sync : resolveSync;

  return resolve(path, {
    basedir: options.basedir,
    extensions: options.extensions,
    moduleDirectory: options.moduleDirectory,
    paths: options.paths,
    rootDir: options.rootDir
  });
}

/*
 * Adapted from: https://github.com/substack/node-resolve
 */


const REGEX_RELATIVE_IMPORT = /^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[\\\/])/;

function resolveSync(target, options) {
  const basedir = options.basedir;
  const extensions = options.extensions || ['.js'];
  const paths = options.paths || [];

  if (REGEX_RELATIVE_IMPORT.test(target)) {
    // resolve relative import
    const resolveTarget = (_path || _load_path()).default.resolve(basedir, target);
    const result = tryResolve(resolveTarget);
    if (result) {
      return result;
    }
  } else {
    // otherwise search for node_modules
    const dirs = (0, (_node_modules_paths || _load_node_modules_paths()).default)(basedir, {
      moduleDirectory: options.moduleDirectory,
      paths
    });
    for (let i = 0; i < dirs.length; i++) {
      const resolveTarget = (_path || _load_path()).default.join(dirs[i], target);
      const result = tryResolve(resolveTarget);
      if (result) {
        return result;
      }
    }
  }

  if ((0, (_is_builtin_module || _load_is_builtin_module()).default)(target)) {
    return target;
  }

  const err = new Error("Cannot find module '" + target + "' from '" + basedir + "'");
  err.code = 'MODULE_NOT_FOUND';
  throw err;

  /*
   * contextual helper functions
   */
  function tryResolve(name) {
    const dir = (_path || _load_path()).default.dirname(name);
    let result;
    if (isDirectory(dir)) {
      result = resolveAsFile(name) || resolveAsDirectory(name);
    }
    if (result) {
      // Dereference symlinks to ensure we don't create a separate
      // module instance depending on how it was referenced.
      result = (_fs || _load_fs()).default.realpathSync(result);
    }
    return result;
  }

  function resolveAsFile(name) {
    if (isFile(name)) {
      return name;
    }

    for (let i = 0; i < extensions.length; i++) {
      const file = name + extensions[i];
      if (isFile(file)) {
        return file;
      }
    }

    return undefined;
  }

  function resolveAsDirectory(name) {
    if (!isDirectory(name)) {
      return undefined;
    }

    const pkgfile = (_path || _load_path()).default.join(name, 'package.json');
    let pkgmain;
    try {
      const body = (_fs || _load_fs()).default.readFileSync(pkgfile, 'utf8');
      pkgmain = JSON.parse(body).main;
    } catch (e) {}

    if (pkgmain && pkgmain !== '.') {
      const resolveTarget = (_path || _load_path()).default.resolve(name, pkgmain);
      const result = tryResolve(resolveTarget);
      if (result) {
        return result;
      }
    }

    return resolveAsFile((_path || _load_path()).default.join(name, 'index'));
  }
}

/*
 * helper functions
 */
function isFile(file) {
  let result;

  try {
    const stat = (_fs || _load_fs()).default.statSync(file);
    result = stat.isFile() || stat.isFIFO();
  } catch (e) {
    if (!(e && e.code === 'ENOENT')) {
      throw e;
    }
    result = false;
  }

  return result;
}

function isDirectory(dir) {
  let result;

  try {
    const stat = (_fs || _load_fs()).default.statSync(dir);
    result = stat.isDirectory();
  } catch (e) {
    if (!(e && (e.code === 'ENOENT' || e.code === 'ENOTDIR'))) {
      throw e;
    }
    result = false;
  }

  return result;
}