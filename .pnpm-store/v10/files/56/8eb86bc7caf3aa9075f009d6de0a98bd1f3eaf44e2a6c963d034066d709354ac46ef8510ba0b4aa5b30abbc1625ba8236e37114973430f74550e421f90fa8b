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

var whitelistsByProject = null;
/**
 * This module helps gradually rolling out changes to the code generation by
 * gradually enabling more buckets representing randomly distributed artifacts.
 */

function set(newWhitelistsByProject) {
  whitelistsByProject = newWhitelistsByProject;
}

function check(project, key) {
  if (whitelistsByProject == null) {
    return true;
  }

  var whitelist = whitelistsByProject.get(project);

  if (whitelist == null) {
    return true;
  }

  return whitelist.has(key);
}

module.exports = {
  set: set,
  check: check
};