/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

const crypto = require('crypto');

const macroCheck = new RegExp('[./]macro');

module.exports = function () {
  return {
    // This function transforms the Babel configuration on a per-file basis
    config(config, { source }) {
      // Babel Macros are notoriously hard to cache, so they shouldn't be
      // https://github.com/babel/babel/issues/8497
      // We naively detect macros using their package suffix and add a random token
      // to the caller, a valid option accepted by Babel, to compose a one-time
      // cacheIdentifier for the file. We cannot tune the loader options on a per
      // file basis.
      if (macroCheck.test(source)) {
        return Object.assign({}, config.options, {
          caller: Object.assign({}, config.options.caller, {
            craInvalidationToken: crypto.randomBytes(32).toString('hex'),
          }),
        });
      }
      return config.options;
    },
  };
};
