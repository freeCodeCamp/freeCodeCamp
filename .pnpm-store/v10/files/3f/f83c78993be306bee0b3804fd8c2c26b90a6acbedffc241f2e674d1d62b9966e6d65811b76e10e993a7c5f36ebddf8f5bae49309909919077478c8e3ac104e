'use strict';

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 * @format
 */

var Yoga = require('./entry-common');
var nbind = require('../build/Release/nbind.js');

var ran = false;
var ret = null;

nbind({}, function (err, result) {
  if (ran) {
    return;
  }

  ran = true;

  if (err) {
    throw err;
  }

  ret = result;
});

if (!ran) {
  throw new Error("Failed to load the yoga module - it needed to be loaded synchronously, but didn't");
}

// $FlowFixMe ret will not be null here
module.exports = Yoga(ret.bind, ret.lib);