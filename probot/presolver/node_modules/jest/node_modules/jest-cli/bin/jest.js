#!/usr/bin/env node
/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const importLocal = require('import-local');

if (!importLocal(__filename)) {
  if (process.env.NODE_ENV == null) {
    process.env.NODE_ENV = 'test';
  }

  require('../build/cli').run();
}
