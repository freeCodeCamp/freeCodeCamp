'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isValidPath;


const SNAPSHOT_EXTENSION = 'snap'; /**
                                    * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                    *
                                    * This source code is licensed under the MIT license found in the
                                    * LICENSE file in the root directory of this source tree.
                                    *
                                    * 
                                    */

function isValidPath(globalConfig, config, filePath) {
  return !filePath.includes(globalConfig.coverageDirectory) && !config.watchPathIgnorePatterns.some(pattern => filePath.match(pattern)) && !filePath.endsWith(`.${SNAPSHOT_EXTENSION}`);
}