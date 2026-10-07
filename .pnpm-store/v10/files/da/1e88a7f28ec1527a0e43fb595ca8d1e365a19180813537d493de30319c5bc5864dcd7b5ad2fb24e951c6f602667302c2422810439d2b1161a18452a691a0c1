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

import type {Disposable} from '../util/RelayRuntimeTypes';

type FeatureFlags = {|
  ENABLE_VARIABLE_CONNECTION_KEY: boolean,
  ENABLE_PARTIAL_RENDERING_DEFAULT: boolean,
  ENABLE_REACT_FLIGHT_COMPONENT_FIELD: boolean,
  ENABLE_REQUIRED_DIRECTIVES: boolean | string,
  ENABLE_RELAY_RESOLVERS: boolean,
  ENABLE_GETFRAGMENTIDENTIFIER_OPTIMIZATION: boolean,
  ENABLE_FRIENDLY_QUERY_NAME_GQL_URL: boolean,
  ENABLE_LOAD_QUERY_REQUEST_DEDUPING: boolean,
  ENABLE_DO_NOT_WRAP_LIVE_QUERY: boolean,
  ENABLE_NOTIFY_SUBSCRIPTION: boolean,
  BATCH_ASYNC_MODULE_UPDATES_FN: ?(() => void) => Disposable,
  ENABLE_CONTAINERS_SUBSCRIBE_ON_COMMIT: boolean,
  ENABLE_QUERY_RENDERER_OFFSCREEN_SUPPORT: boolean,
|};

const RelayFeatureFlags: FeatureFlags = {
  ENABLE_VARIABLE_CONNECTION_KEY: false,
  ENABLE_PARTIAL_RENDERING_DEFAULT: true,
  ENABLE_REACT_FLIGHT_COMPONENT_FIELD: false,
  ENABLE_REQUIRED_DIRECTIVES: false,
  ENABLE_RELAY_RESOLVERS: false,
  ENABLE_GETFRAGMENTIDENTIFIER_OPTIMIZATION: false,
  ENABLE_FRIENDLY_QUERY_NAME_GQL_URL: false,
  ENABLE_LOAD_QUERY_REQUEST_DEDUPING: true,
  ENABLE_DO_NOT_WRAP_LIVE_QUERY: false,
  ENABLE_NOTIFY_SUBSCRIPTION: false,
  BATCH_ASYNC_MODULE_UPDATES_FN: null,
  ENABLE_CONTAINERS_SUBSCRIBE_ON_COMMIT: false,
  ENABLE_QUERY_RENDERER_OFFSCREEN_SUPPORT: false,
};

module.exports = RelayFeatureFlags;
