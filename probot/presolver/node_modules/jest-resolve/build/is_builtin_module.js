'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBuiltinModule;

var _module;

function _load_module() {
  return _module = require('module');
}

// https://github.com/facebook/flow/pull/5160
const BUILTIN_MODULES = (_module || _load_module()).builtinModules || Object.keys(process.binding('natives')).filter(module => !/^internal\//.test(module)); /**
                                                                                                                                                              * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                                                                                                                                              *
                                                                                                                                                              * This source code is licensed under the MIT license found in the
                                                                                                                                                              * LICENSE file in the root directory of this source tree.
                                                                                                                                                              *
                                                                                                                                                              * 
                                                                                                                                                              */

// $FlowFixMe: Flow doesn't know about the `module` module
function isBuiltinModule(module) {
  return BUILTIN_MODULES.indexOf(module) !== -1;
}