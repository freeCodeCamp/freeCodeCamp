'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path;

function _load_path() {
  return _path = _interopRequireDefault(require('path'));
}

var _fs;

function _load_fs() {
  return _fs = _interopRequireDefault(require('fs'));
}

var _constants;

function _load_constants() {
  return _constants = require('./constants');
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

const isFile = filePath => (_fs || _load_fs()).default.existsSync(filePath) && !(_fs || _load_fs()).default.lstatSync(filePath).isDirectory();

exports.default = (pathToResolve, cwd) => {
  if (!(_path || _load_path()).default.isAbsolute(cwd)) {
    throw new Error(`"cwd" must be an absolute path. cwd: ${cwd}`);
  }
  const absolutePath = (_path || _load_path()).default.isAbsolute(pathToResolve) ? pathToResolve : (_path || _load_path()).default.resolve(cwd, pathToResolve);

  if (isFile(absolutePath)) {
    return absolutePath;
  }

  // This is a guard against passing non existing path as a project/config,
  // that will otherwise result in a very confusing situation.
  // e.g.
  // With a directory structure like this:
  //   my_project/
  //     packcage.json
  //
  // Passing a `my_project/some_directory_that_doesnt_exist` as a project
  // name will resolve into a (possibly empty) `my_project/package.json` and
  // try to run all tests it finds under `my_project` directory.
  if (!(_fs || _load_fs()).default.existsSync(absolutePath)) {
    throw new Error(`Can't find a root directory while resolving a config file path.\n` + `Provided path to resolve: ${pathToResolve}\n` + `cwd: ${cwd}`);
  }

  return resolveConfigPathByTraversing(absolutePath, pathToResolve, cwd);
};

const resolveConfigPathByTraversing = (pathToResolve, initialPath, cwd) => {
  const jestConfig = (_path || _load_path()).default.resolve(pathToResolve, (_constants || _load_constants()).JEST_CONFIG);
  if (isFile(jestConfig)) {
    return jestConfig;
  }

  const packageJson = (_path || _load_path()).default.resolve(pathToResolve, (_constants || _load_constants()).PACKAGE_JSON);
  if (isFile(packageJson)) {
    return packageJson;
  }

  // This is the system root.
  // We tried everything, config is nowhere to be found ¯\_(ツ)_/¯
  if (pathToResolve === (_path || _load_path()).default.dirname(pathToResolve)) {
    throw new Error(makeResolutionErrorMessage(initialPath, cwd));
  }

  // go up a level and try it again
  return resolveConfigPathByTraversing((_path || _load_path()).default.dirname(pathToResolve), initialPath, cwd);
};

const makeResolutionErrorMessage = (initialPath, cwd) => {
  return 'Could not find a config file based on provided values:\n' + `path: "${initialPath}"\n` + `cwd: "${cwd}"\n` + 'Config paths must be specified by either a direct path to a config\n' + 'file, or a path to a directory. If directory is given, Jest will try to\n' + `traverse directory tree up, until it finds either "${(_constants || _load_constants()).JEST_CONFIG}" or\n` + `"${(_constants || _load_constants()).PACKAGE_JSON}".`;
};