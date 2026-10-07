/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */
// flowlint ambiguous-object-type:error
'use strict';

var RelayFlowGenerator = require('./RelayFlowGenerator');

var _require = require('./FindGraphQLTags'),
    find = _require.find;

var _require2 = require('./formatGeneratedModule'),
    formatGeneratedCommonjsModule = _require2.formatGeneratedCommonjsModule,
    formatGeneratedESModule = _require2.formatGeneratedESModule;

module.exports = function (options) {
  return {
    inputExtensions: ['js', 'jsx'],
    outputExtension: 'js',
    typeGenerator: RelayFlowGenerator,
    formatModule: options && options.eagerESModules ? formatGeneratedESModule : formatGeneratedCommonjsModule,
    findGraphQLTags: find
  };
};