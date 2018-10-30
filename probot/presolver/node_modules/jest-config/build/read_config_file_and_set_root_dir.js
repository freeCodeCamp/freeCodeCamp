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

var _jsonlint;

function _load_jsonlint() {
  return _jsonlint = _interopRequireDefault(require('./vendor/jsonlint'));
}

var _constants;

function _load_constants() {
  return _constants = require('./constants');
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Read the configuration and set its `rootDir`
// 1. If it's a `package.json` file, we look into its "jest" property
// 2. For any other file, we just require it.
exports.default = configPath => {
  const isJSON = configPath.endsWith('.json');
  let configObject;

  try {
    // $FlowFixMe dynamic require
    configObject = require(configPath);
  } catch (error) {
    if (isJSON) {
      throw new Error(`Jest: Failed to parse config file ${configPath}\n` + `  ${(_jsonlint || _load_jsonlint()).default.errors((_fs || _load_fs()).default.readFileSync(configPath, 'utf8'))}`);
    } else {
      throw error;
    }
  }

  if (configPath.endsWith((_constants || _load_constants()).PACKAGE_JSON)) {
    // Event if there's no "jest" property in package.json we will still use
    // an empty object.
    configObject = configObject.jest || {};
  }

  if (configObject.rootDir) {
    // We don't touch it if it has an absolute path specified
    if (!(_path || _load_path()).default.isAbsolute(configObject.rootDir)) {
      // otherwise, we'll resolve it relative to the file's __dirname
      configObject.rootDir = (_path || _load_path()).default.resolve((_path || _load_path()).default.dirname(configPath), configObject.rootDir);
    }
  } else {
    // If rootDir is not there, we'll set it to this file's __dirname
    configObject.rootDir = (_path || _load_path()).default.dirname(configPath);
  }

  return configObject;
}; /**
    * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE file in the root directory of this source tree.
    *
    * 
    */