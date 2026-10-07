/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const invariant = require('invariant');

const {getType} = require('./RelayModernRecord');

import type {ReactFlightPayloadData} from '../network/RelayNetworkTypes';
import type {ReactFlightClientResponse, Record} from './RelayStoreTypes';

// Reachable (client) executable definitions encountered while server component
// rendering
const REACT_FLIGHT_EXECUTABLE_DEFINITIONS_STORAGE_KEY = 'executableDefinitions';
const REACT_FLIGHT_TREE_STORAGE_KEY = 'tree';
const REACT_FLIGHT_TYPE_NAME = 'ReactFlightComponent';

function refineToReactFlightPayloadData(
  payload: mixed,
): ?ReactFlightPayloadData {
  if (
    payload == null ||
    typeof payload !== 'object' ||
    typeof payload.status !== 'string' ||
    (!Array.isArray(payload.tree) && payload.tree !== null) ||
    !Array.isArray(payload.queries) ||
    !Array.isArray(payload.fragments) ||
    !Array.isArray(payload.errors)
  ) {
    return null;
  }
  return (payload: $FlowFixMe);
}

function getReactFlightClientResponse(
  record: Record,
): ?ReactFlightClientResponse {
  invariant(
    getType(record) === REACT_FLIGHT_TYPE_NAME,
    'getReactFlightClientResponse(): Expected a ReactFlightComponentRecord, ' +
      'got %s.',
    record,
  );
  return (record[REACT_FLIGHT_TREE_STORAGE_KEY]: $FlowFixMe);
}

module.exports = {
  REACT_FLIGHT_EXECUTABLE_DEFINITIONS_STORAGE_KEY,
  REACT_FLIGHT_TREE_STORAGE_KEY,
  REACT_FLIGHT_TYPE_NAME,
  getReactFlightClientResponse,
  refineToReactFlightPayloadData,
};
