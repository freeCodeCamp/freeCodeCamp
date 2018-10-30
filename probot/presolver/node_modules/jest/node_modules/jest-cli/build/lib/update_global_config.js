'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

exports.default = (globalConfig, options) => {
  // $FlowFixMe Object.assign
  const newConfig = Object.assign({}, globalConfig);

  if (!options) {
    options = {};
  }

  if (options.updateSnapshot) {
    newConfig.updateSnapshot = options.updateSnapshot;
  }

  if (options.mode === 'watch') {
    newConfig.watch = true;
    newConfig.watchAll = false;
  } else if (options.mode === 'watchAll') {
    newConfig.watch = false;
    newConfig.watchAll = true;
  }

  if ('testPathPattern' in options) {
    newConfig.testPathPattern = options.testPathPattern || '';
  }

  if ('testNamePattern' in options) {
    newConfig.testNamePattern = options.testNamePattern || '';
  }

  newConfig.onlyChanged = false;
  newConfig.onlyChanged = !newConfig.watchAll && !newConfig.testNamePattern && !newConfig.testPathPattern;

  if (options.noSCM) {
    newConfig.noSCM = true;
  }

  if (options.passWithNoTests) {
    newConfig.passWithNoTests = true;
  }

  if ('onlyFailures' in options) {
    newConfig.onlyFailures = options.onlyFailures || false;
  }

  return Object.freeze(newConfig);
};