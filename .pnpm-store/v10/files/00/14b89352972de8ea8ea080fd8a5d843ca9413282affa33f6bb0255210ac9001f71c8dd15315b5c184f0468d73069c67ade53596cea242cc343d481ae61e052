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

const ConnectionHandler = require('./connection/ConnectionHandler');
const MutationHandlers = require('./connection/MutationHandlers');

const invariant = require('invariant');

import type {Handler} from '../store/RelayStoreTypes';
export type HandlerProvider = (name: string) => ?Handler;

function RelayDefaultHandlerProvider(handle: string): Handler {
  switch (handle) {
    case 'connection':
      return ConnectionHandler;
    case 'deleteRecord':
      return MutationHandlers.DeleteRecordHandler;
    case 'deleteEdge':
      return MutationHandlers.DeleteEdgeHandler;
    case 'appendEdge':
      return MutationHandlers.AppendEdgeHandler;
    case 'prependEdge':
      return MutationHandlers.PrependEdgeHandler;
    case 'appendNode':
      return MutationHandlers.AppendNodeHandler;
    case 'prependNode':
      return MutationHandlers.PrependNodeHandler;
  }
  invariant(
    false,
    'RelayDefaultHandlerProvider: No handler provided for `%s`.',
    handle,
  );
}

module.exports = RelayDefaultHandlerProvider;
