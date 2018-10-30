'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path;

function _load_path() {
  return _path = _interopRequireDefault(require('path'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MOCKS_PATTERN = (_path || _load_path()).default.sep + '__mocks__' + (_path || _load_path()).default.sep; /**
                                                                                                                * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                                                                                                *
                                                                                                                * This source code is licensed under the MIT license found in the
                                                                                                                * LICENSE file in the root directory of this source tree.
                                                                                                                *
                                                                                                                * 
                                                                                                                */

const getMockName = filePath => {
  const mockPath = filePath.split(MOCKS_PATTERN)[1];
  return mockPath.substring(0, mockPath.lastIndexOf((_path || _load_path()).default.extname(mockPath))).replace(/\\/g, '/');
};

exports.default = getMockName;