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

const {getRequest} = require('../query/GraphQLTag');
const {
  createOperationDescriptor,
} = require('../store/RelayModernOperationDescriptor');

import type {GraphQLTaggedNode} from '../query/GraphQLTag';
import type {
  IEnvironment,
  SelectorStoreUpdater,
} from '../store/RelayStoreTypes';
import type {Disposable, Variables} from '../util/RelayRuntimeTypes';
import type {DeclarativeMutationConfig} from './RelayDeclarativeMutationConfig';

export type OptimisticMutationConfig = {|
  configs?: ?Array<DeclarativeMutationConfig>,
  mutation: GraphQLTaggedNode,
  variables: Variables,
  optimisticUpdater?: ?SelectorStoreUpdater,
  optimisticResponse?: Object,
|};

/**
 * Higher-level helper function to execute a mutation against a specific
 * environment.
 */
function applyOptimisticMutation(
  environment: IEnvironment,
  config: OptimisticMutationConfig,
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
  let {optimisticUpdater} = config;
  const {configs, optimisticResponse, variables} = config;
  const operation = createOperationDescriptor(mutation, variables);
  if (configs) {
    ({optimisticUpdater} = RelayDeclarativeMutationConfig.convert(
      configs,
      mutation,
      optimisticUpdater,
    ));
  }

  return environment.applyMutation({
    operation,
    response: optimisticResponse,
    updater: optimisticUpdater,
  });
}

module.exports = applyOptimisticMutation;
