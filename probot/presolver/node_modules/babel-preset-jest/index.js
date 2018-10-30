/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  plugins: [
    // Cannot be `import` as this file is not compiled
    require('babel-plugin-jest-hoist'),
    require('babel-plugin-syntax-object-rest-spread'),
  ],
};
