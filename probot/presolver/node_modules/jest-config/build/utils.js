'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isJSONString = exports.getTestEnvironment = exports._replaceRootDirTags = exports._replaceRootDirInPath = exports.escapeGlobCharacters = exports.resolve = exports.DOCUMENTATION_NOTE = exports.BULLET = undefined;

var _path;

function _load_path() {
  return _path = _interopRequireDefault(require('path'));
}

var _jestValidate;

function _load_jestValidate() {
  return _jestValidate = require('jest-validate');
}

var _jestResolve;

function _load_jestResolve() {
  return _jestResolve = _interopRequireDefault(require('jest-resolve'));
}

var _chalk;

function _load_chalk() {
  return _chalk = _interopRequireDefault(require('chalk'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BULLET = exports.BULLET = (_chalk || _load_chalk()).default.bold('\u25cf '); /**
                                                                                    * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                                                                    *
                                                                                    * This source code is licensed under the MIT license found in the
                                                                                    * LICENSE file in the root directory of this source tree.
                                                                                    *
                                                                                    * 
                                                                                    */

const DOCUMENTATION_NOTE = exports.DOCUMENTATION_NOTE = `  ${(_chalk || _load_chalk()).default.bold('Configuration Documentation:')}
  https://facebook.github.io/jest/docs/configuration.html
`;

const createValidationError = message => {
  return new (_jestValidate || _load_jestValidate()).ValidationError(`${BULLET}Validation Error`, message, DOCUMENTATION_NOTE);
};

const resolve = exports.resolve = (rootDir, key, filePath) => {
  const module = (_jestResolve || _load_jestResolve()).default.findNodeModule(_replaceRootDirInPath(rootDir, filePath), {
    basedir: rootDir
  });

  if (!module) {
    throw createValidationError(`  Module ${(_chalk || _load_chalk()).default.bold(filePath)} in the ${(_chalk || _load_chalk()).default.bold(key)} option was not found.`);
  }

  return module;
};

const escapeGlobCharacters = exports.escapeGlobCharacters = path => {
  return path.replace(/([()*{}\[\]!?\\])/g, '\\$1');
};

const _replaceRootDirInPath = exports._replaceRootDirInPath = (rootDir, filePath) => {
  if (!/^<rootDir>/.test(filePath)) {
    return filePath;
  }

  return (_path || _load_path()).default.resolve(rootDir, (_path || _load_path()).default.normalize('./' + filePath.substr('<rootDir>'.length)));
};

const _replaceRootDirInObject = (rootDir, config) => {
  if (config !== null) {
    const newConfig = {};
    for (const configKey in config) {
      newConfig[configKey] = configKey === 'rootDir' ? config[configKey] : _replaceRootDirTags(rootDir, config[configKey]);
    }
    return newConfig;
  }
  return config;
};

const _replaceRootDirTags = exports._replaceRootDirTags = (rootDir, config) => {
  switch (typeof config) {
    case 'object':
      if (Array.isArray(config)) {
        return config.map(item => _replaceRootDirTags(rootDir, item));
      }
      if (config instanceof RegExp) {
        return config;
      }
      return _replaceRootDirInObject(rootDir, config);
    case 'string':
      return _replaceRootDirInPath(rootDir, config);
  }
  return config;
};

/**
 * Finds the test environment to use:
 *
 * 1. looks for jest-environment-<name> relative to project.
 * 1. looks for jest-environment-<name> relative to Jest.
 * 1. looks for <name> relative to project.
 * 1. looks for <name> relative to Jest.
 */
const getTestEnvironment = exports.getTestEnvironment = config => {
  const env = _replaceRootDirInPath(config.rootDir, config.testEnvironment);
  let module = (_jestResolve || _load_jestResolve()).default.findNodeModule(`jest-environment-${env}`, {
    basedir: config.rootDir
  });
  if (module) {
    return module;
  }

  try {
    return require.resolve(`jest-environment-${env}`);
  } catch (e) {}

  module = (_jestResolve || _load_jestResolve()).default.findNodeModule(env, { basedir: config.rootDir });
  if (module) {
    return module;
  }

  try {
    return require.resolve(env);
  } catch (e) {}

  throw createValidationError(`  Test environment ${(_chalk || _load_chalk()).default.bold(env)} cannot be found. Make sure the ${(_chalk || _load_chalk()).default.bold('testEnvironment')} configuration option points to an existing node module.`);
};

const isJSONString = exports.isJSONString = text => text && typeof text === 'string' && text.startsWith('{') && text.endsWith('}');