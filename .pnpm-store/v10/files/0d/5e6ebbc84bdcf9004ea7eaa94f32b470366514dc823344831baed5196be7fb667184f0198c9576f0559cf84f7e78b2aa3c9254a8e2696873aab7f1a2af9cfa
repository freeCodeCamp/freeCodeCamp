/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+relay
 * @flow strict-local
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const {getPromiseForActiveRequest} = require('../query/fetchQueryInternal');

import type {IEnvironment, RequestDescriptor} from '../store/RelayStoreTypes';
import type {ReaderFragment} from './ReaderNode';

function getPendingOperationsForFragment(
  environment: IEnvironment,
  fragmentNode: ReaderFragment,
  fragmentOwner: RequestDescriptor,
): {|
  promise: Promise<void>,
  pendingOperations: $ReadOnlyArray<RequestDescriptor>,
|} | null {
  let pendingOperations: $ReadOnlyArray<RequestDescriptor> = [];
  let promise = getPromiseForActiveRequest(environment, fragmentOwner);

  if (promise != null) {
    pendingOperations = [fragmentOwner];
  } else {
    const result = environment
      .getOperationTracker()
      .getPendingOperationsAffectingOwner(fragmentOwner);

    pendingOperations = result?.pendingOperations ?? [];
    promise = result?.promise ?? null;
  }

  if (!promise) {
    return null;
  }

  let pendingOperationName =
    pendingOperations?.map(op => op.node.params.name).join(',') ?? null;
  if (pendingOperationName == null || pendingOperationName.length === 0) {
    pendingOperationName = 'Unknown pending operation';
  }
  const fragmentName = fragmentNode.name;
  const promiseDisplayName =
    pendingOperationName === fragmentName
      ? `Relay(${pendingOperationName})`
      : `Relay(${pendingOperationName}:${fragmentName})`;
  // $FlowExpectedError[prop-missing] Expando to annotate Promises.
  promise.displayName = promiseDisplayName;
  return {promise, pendingOperations};
}

module.exports = getPendingOperationsForFragment;
