/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

/**
 * Basic types used throughout Relay.
 */

/**
 * Represents any resource that must be explicitly disposed of. The most common
 * use-case is as a return value for subscriptions, where calling `dispose()`
 * would cancel the subscription.
 */
export type Disposable = interface {dispose(): void};

export type DataID = string;

// Variables
export type Variables = {+[string]: $FlowFixMe};

/**
 * Generated operation flow types are subtypes of this.
 */
export type OperationType = {|
  // TODO(T33395812) Make this an open object type
  +variables: Variables,
  +response: mixed,
  +rawResponse?: {...},
|};

export type VariablesOf<T: OperationType> = $ElementType<T, 'variables'>;

/**
 * Settings for how a query response may be cached.
 *
 * - `force`: causes a query to be issued unconditionally, irrespective of the
 *   state of any configured response cache.
 * - `poll`: causes a query to live update by polling at the specified interval
 *   in milliseconds. (This value will be passed to setTimeout.)
 * - `liveConfigId`: causes a query to live update by calling GraphQLLiveQuery,
 *   it represents a configuration of gateway when doing live query
 * - `onSubscribe`: Not in use.
 * - `metadata`: user-supplied metadata.
 * - `transactionId`: a user-supplied value, intended for use as a unique id for
 *   a given instance of executing an operation.
 */
export type CacheConfig = {|
  force?: ?boolean,
  poll?: ?number,
  liveConfigId?: ?string,
  onSubscribe?: () => void,
  metadata?: {[key: string]: mixed, ...},
  transactionId?: ?string,
|};

export type FetchQueryFetchPolicy = 'store-or-network' | 'network-only';
export type FetchPolicy =
  | FetchQueryFetchPolicy
  | 'store-and-network'
  | 'store-only';
export type RenderPolicy = 'full' | 'partial';
