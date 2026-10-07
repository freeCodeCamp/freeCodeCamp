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

const RelayDeclarativeMutationConfig = require('./RelayDeclarativeMutationConfig');

const invariant = require('invariant');
const isRelayModernEnvironment = require('../store/isRelayModernEnvironment');
const validateMutation = require('./validateMutation');
const warning = require('warning');

const {getRequest} = require('../query/GraphQLTag');
const {generateUniqueClientID} = require('../store/ClientID');
const {
  createOperationDescriptor,
} = require('../store/RelayModernOperationDescriptor');

import type {PayloadError, UploadableMap} from '../network/RelayNetworkTypes';
import type {GraphQLTaggedNode} from '../query/GraphQLTag';
import type {
  IEnvironment,
  SelectorStoreUpdater,
} from '../store/RelayStoreTypes';
import type {
  CacheConfig,
  Disposable,
  Variables,
} from '../util/RelayRuntimeTypes';
import type {DeclarativeMutationConfig} from './RelayDeclarativeMutationConfig';

export type DEPRECATED_MutationConfig<T> = {|
  configs?: Array<DeclarativeMutationConfig>,
  cacheConfig?: CacheConfig,
  mutation: GraphQLTaggedNode,
  variables: Variables,
  uploadables?: UploadableMap,
  onCompleted?: ?(response: T, errors: ?Array<PayloadError>) => void,
  onError?: ?(error: Error) => void,
  onUnsubscribe?: ?() => void,
  optimisticUpdater?: ?SelectorStoreUpdater,
  optimisticResponse?: Object,
  updater?: ?SelectorStoreUpdater,
|};

export type MutationParameters = {|
  +response: {...},
  +variables: interface {},
  +rawResponse?: {...},
|};

export type MutationConfig<T: MutationParameters> = {|
  configs?: Array<DeclarativeMutationConfig>,
  cacheConfig?: CacheConfig,
  mutation: GraphQLTaggedNode,
  onError?: ?(error: Error) => void,
  onCompleted?: ?(
    response: $ElementType<T, 'response'>,
    errors: ?Array<PayloadError>,
  ) => void,
  onUnsubscribe?: ?() => void,
  optimisticResponse?: $ElementType<
    {
      +rawResponse?: {...},
      ...T,
      ...
    },
    'rawResponse',
  >,
  optimisticUpdater?: ?SelectorStoreUpdater,
  updater?: ?SelectorStoreUpdater,
  uploadables?: UploadableMap,
  variables: $ElementType<T, 'variables'>,
|};

/**
 * Higher-level helper function to execute a mutation against a specific
 * environment.
 */
function commitMutation<T: MutationParameters>(
  environment: IEnvironment,
  config: MutationConfig<T>,
): Disposable {
  invariant(
    isRelayModernEnvironment(environment),
    'commitMutation: expected `environment` to be an instance of ' +
      '`RelayModernEnvironment`.',
  );
  const mutation = getRequest(config.mutation);
  if (mutation.params.operationKind !== 'mutation') {
    throw new Error('commitMutation: Expected mutation operation');
  }
  if (mutation.kind !== 'Request') {
    throw new Error('commitMutation: Expected mutation to be of type request');
  }
  let {optimisticResponse, optimisticUpdater, updater} = config;
  const {
    configs,
    cacheConfig,
    onError,
    onUnsubscribe,
    variables,
    uploadables,
  } = config;
  const operation = createOperationDescriptor(
    mutation,
    /* $FlowFixMe[class-object-subtyping] added when improving typing for this
     * parameters */
    variables,
    cacheConfig,
    generateUniqueClientID(),
  );
  // TODO: remove this check after we fix flow.
  if (typeof optimisticResponse === 'function') {
    optimisticResponse = optimisticResponse();
    warning(
      false,
      'commitMutation: Expected `optimisticResponse` to be an object, ' +
        'received a function.',
    );
  }
  if (__DEV__) {
    if (optimisticResponse instanceof Object) {
      validateMutation(optimisticResponse, mutation, variables);
    }
  }
  if (configs) {
    ({optimisticUpdater, updater} = RelayDeclarativeMutationConfig.convert(
      configs,
      mutation,
      optimisticUpdater,
      updater,
    ));
  }
  const errors = [];
  const subscription = environment
    .executeMutation({
      operation,
      optimisticResponse,
      optimisticUpdater,
      updater,
      uploadables,
    })
    .subscribe({
      next: payload => {
        if (Array.isArray(payload)) {
          payload.forEach(item => {
            if (item.errors) {
              errors.push(...item.errors);
            }
          });
        } else {
          if (payload.errors) {
            errors.push(...payload.errors);
          }
        }
      },
      complete: () => {
        const {onCompleted} = config;
        if (onCompleted) {
          const snapshot = environment.lookup(operation.fragment);
          onCompleted(
            (snapshot.data: $FlowFixMe),
            errors.length !== 0 ? errors : null,
          );
        }
      },
      error: onError,
      unsubscribe: onUnsubscribe,
    });
  return {dispose: subscription.unsubscribe};
}

module.exports = commitMutation;
