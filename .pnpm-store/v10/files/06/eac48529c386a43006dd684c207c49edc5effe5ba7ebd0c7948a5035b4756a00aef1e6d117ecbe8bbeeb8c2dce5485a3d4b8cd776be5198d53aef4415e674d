/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 * @format
 */

const Yoga = require('./entry-common');
const nbind = require('../build/Release/nbind.js');

let ran = false;
let ret = null;

nbind({}, function(err, result) {
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
  throw new Error(
    "Failed to load the yoga module - it needed to be loaded synchronously, but didn't",
  );
}

// $FlowFixMe ret will not be null here
module.exports = Yoga(ret.bind, ret.lib);

export type {
  Yoga$JustifyContent,
  Yoga$Align,
  Yoga$FlexDirection,
  Yoga$Direction,
  Yoga$FlexWrap,
  Yoga$Edge,
  Yoga$Display,
  Yoga$Unit,
  Yoga$Overflow,
  Yoga$PositionType,
  Yoga$ExperimentalFeature,
} from './YGEnums.js';

export type {Yoga$Node, Yoga$Config} from './entry-common';
