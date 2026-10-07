/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const {generateClientID} = require('./ClientID');
const {ROOT_ID} = require('./RelayStoreUtils');

import type {DataID} from 'relay-runtime/util/RelayRuntimeTypes';

const VIEWER_ID: DataID = generateClientID(ROOT_ID, 'viewer');
const VIEWER_TYPE = 'Viewer';

module.exports = {
  VIEWER_ID,
  VIEWER_TYPE,
};
