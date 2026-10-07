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

const invariant = require('invariant');
const stableCopy = require('../util/stableCopy');

import type {Variables} from '../util/RelayRuntimeTypes';
import type {
  GraphQLResponse,
  GraphQLSingularResponse,
} from './RelayNetworkTypes';

type Response = {
  fetchTime: number,
  payload: GraphQLResponse,
  ...
};

/**
 * A cache for storing query responses, featuring:
 * - `get` with TTL
 * - cache size limiting, with least-recently *updated* entries purged first
 */
class RelayQueryResponseCache {
  _responses: Map<string, Response>;
  _size: number;
  _ttl: number;

  constructor({size, ttl}: {size: number, ttl: number, ...}) {
    invariant(
      size > 0,
      'RelayQueryResponseCache: Expected the max cache size to be > 0, got ' +
        '`%s`.',
      size,
    );
    invariant(
      ttl > 0,
      'RelayQueryResponseCache: Expected the max ttl to be > 0, got `%s`.',
      ttl,
    );
    this._responses = new Map();
    this._size = size;
    this._ttl = ttl;
  }

  clear(): void {
    this._responses.clear();
  }

  get(queryID: string, variables: Variables): ?GraphQLResponse {
    const cacheKey = getCacheKey(queryID, variables);
    this._responses.forEach((response, key) => {
      if (!isCurrent(response.fetchTime, this._ttl)) {
        this._responses.delete(key);
      }
    });
    const response = this._responses.get(cacheKey);
    if (response == null) {
      return null;
    }
    if (Array.isArray(response.payload)) {
      return response.payload.map(
        payload =>
          // $FlowFixMe[incompatible-cast]
          ({
            ...payload,
            extensions: {
              ...payload.extensions,
              cacheTimestamp: response.fetchTime,
            },
          }: GraphQLSingularResponse),
      );
    }
    // $FlowFixMe[incompatible-cast]
    return ({
      ...response.payload,
      extensions: {
        ...response.payload.extensions,
        cacheTimestamp: response.fetchTime,
      },
    }: GraphQLSingularResponse);
  }

  set(queryID: string, variables: Variables, payload: GraphQLResponse): void {
    const fetchTime = Date.now();
    const cacheKey = getCacheKey(queryID, variables);
    this._responses.delete(cacheKey); // deletion resets key ordering
    this._responses.set(cacheKey, {
      fetchTime,
      payload,
    });
    // Purge least-recently updated key when max size reached
    if (this._responses.size > this._size) {
      const firstKey = this._responses.keys().next();
      if (!firstKey.done) {
        this._responses.delete(firstKey.value);
      }
    }
  }
}

function getCacheKey(queryID: string, variables: Variables): string {
  return JSON.stringify(stableCopy({queryID, variables}));
}

/**
 * Determine whether a response fetched at `fetchTime` is still valid given
 * some `ttl`.
 */
function isCurrent(fetchTime: number, ttl: number): boolean {
  return fetchTime + ttl >= Date.now();
}

module.exports = RelayQueryResponseCache;
