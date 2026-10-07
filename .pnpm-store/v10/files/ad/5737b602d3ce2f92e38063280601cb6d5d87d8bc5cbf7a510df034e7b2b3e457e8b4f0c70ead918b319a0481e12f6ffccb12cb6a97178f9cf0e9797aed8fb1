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

var CONNECTION_CALLS = {
  after: true,
  before: true,
  find: true,
  first: true,
  last: true,
  surrounds: true
};
var config = {
  CLIENT_MUTATION_ID: 'clientMutationId',
  CURSOR: 'cursor',
  EDGES: 'edges',
  END_CURSOR: 'endCursor',
  HAS_NEXT_PAGE: 'hasNextPage',
  HAS_PREV_PAGE: 'hasPreviousPage',
  NODE: 'node',
  PAGE_INFO_TYPE: 'PageInfo',
  PAGE_INFO: 'pageInfo',
  START_CURSOR: 'startCursor'
};
/**
 * @internal
 *
 * Defines logic relevant to the informal "Connection" GraphQL interface.
 */

var ConnectionInterface = {
  inject: function inject(newConfig) {
    config = newConfig;
  },
  get: function get() {
    return config;
  },

  /**
   * Checks whether a call exists strictly to encode which parts of a connection
   * to fetch. Fields that only differ by connection call values should have the
   * same identity.
   */
  isConnectionCall: function isConnectionCall(call) {
    return CONNECTION_CALLS.hasOwnProperty(call.name);
  }
};
module.exports = ConnectionInterface;