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

var invariant = require('invariant');

var _require = require('./RelayModernRecord'),
    getType = _require.getType;

// Reachable (client) executable definitions encountered while server component
// rendering
var REACT_FLIGHT_EXECUTABLE_DEFINITIONS_STORAGE_KEY = 'executableDefinitions';
var REACT_FLIGHT_TREE_STORAGE_KEY = 'tree';
var REACT_FLIGHT_TYPE_NAME = 'ReactFlightComponent';

function refineToReactFlightPayloadData(payload) {
  if (payload == null || typeof payload !== 'object' || typeof payload.status !== 'string' || !Array.isArray(payload.tree) && payload.tree !== null || !Array.isArray(payload.queries) || !Array.isArray(payload.fragments) || !Array.isArray(payload.errors)) {
    return null;
  }

  return payload;
}

function getReactFlightClientResponse(record) {
  !(getType(record) === REACT_FLIGHT_TYPE_NAME) ? process.env.NODE_ENV !== "production" ? invariant(false, 'getReactFlightClientResponse(): Expected a ReactFlightComponentRecord, ' + 'got %s.', record) : invariant(false) : void 0;
  return record[REACT_FLIGHT_TREE_STORAGE_KEY];
}

module.exports = {
  REACT_FLIGHT_EXECUTABLE_DEFINITIONS_STORAGE_KEY: REACT_FLIGHT_EXECUTABLE_DEFINITIONS_STORAGE_KEY,
  REACT_FLIGHT_TREE_STORAGE_KEY: REACT_FLIGHT_TREE_STORAGE_KEY,
  REACT_FLIGHT_TYPE_NAME: REACT_FLIGHT_TYPE_NAME,
  getReactFlightClientResponse: getReactFlightClientResponse,
  refineToReactFlightPayloadData: refineToReactFlightPayloadData
};