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

import type {Record} from '../../store/RelayStoreTypes';

type Call = {name: string, ...};

export type EdgeRecord = Record & {
  cursor: mixed,
  node: Record,
  ...
};

export type PageInfo = {
  endCursor: ?string,
  hasNextPage: boolean,
  hasPreviousPage: boolean,
  startCursor: ?string,
  ...
};

type ConnectionConfig = {|
  CLIENT_MUTATION_ID: string,
  CURSOR: string,
  EDGES: string,
  END_CURSOR: string,
  HAS_NEXT_PAGE: string,
  HAS_PREV_PAGE: string,
  NODE: string,
  PAGE_INFO: string,
  PAGE_INFO_TYPE: string,
  START_CURSOR: string,
|};

const CONNECTION_CALLS = {
  after: true,
  before: true,
  find: true,
  first: true,
  last: true,
  surrounds: true,
};

let config: ConnectionConfig = {
  CLIENT_MUTATION_ID: 'clientMutationId',
  CURSOR: 'cursor',
  EDGES: 'edges',
  END_CURSOR: 'endCursor',
  HAS_NEXT_PAGE: 'hasNextPage',
  HAS_PREV_PAGE: 'hasPreviousPage',
  NODE: 'node',
  PAGE_INFO_TYPE: 'PageInfo',
  PAGE_INFO: 'pageInfo',
  START_CURSOR: 'startCursor',
};

/**
 * @internal
 *
 * Defines logic relevant to the informal "Connection" GraphQL interface.
 */
const ConnectionInterface = {
  inject(newConfig: ConnectionConfig) {
    config = newConfig;
  },

  get(): ConnectionConfig {
    return config;
  },

  /**
   * Checks whether a call exists strictly to encode which parts of a connection
   * to fetch. Fields that only differ by connection call values should have the
   * same identity.
   */
  isConnectionCall(call: Call): boolean {
    return CONNECTION_CALLS.hasOwnProperty(call.name);
  },
};

module.exports = ConnectionInterface;
