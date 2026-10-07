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

import type {
  NormalizationOperation,
  NormalizationSplitOperation,
} from './NormalizationNode';
import type {ReaderFragment, ReaderInlineDataFragment} from './ReaderNode';

/**
 * Represents a common GraphQL request that can be executed, an `operation`
 * containing information to normalize the results, and a `fragment` derived
 * from that operation to read the response data (masking data from child
 * fragments).
 */
export type ConcreteRequest = {|
  +kind: 'Request',
  +fragment: ReaderFragment,
  +operation: NormalizationOperation,
  +params: RequestParameters,
|};

export type NormalizationRootNode =
  | ConcreteRequest
  | NormalizationSplitOperation;

/**
 * Contains the parameters required for executing a GraphQL request.
 * The operation can either be provided as a persisted `id` or `text`. If given
 * in `text` format, a `cacheID` as a hash of the text should be set to be used
 * for local caching.
 */
export type RequestParameters =
  | {|
      +id: string,
      +text: null,
      // common fields
      +name: string,
      +operationKind: 'mutation' | 'query' | 'subscription',
      +metadata: {[key: string]: mixed, ...},
    |}
  | {|
      +cacheID: string,
      +id: null,
      +text: string,
      // common fields
      +name: string,
      +operationKind: 'mutation' | 'query' | 'subscription',
      +metadata: {[key: string]: mixed, ...},
    |};

export type GeneratedNode =
  | ConcreteRequest
  | ReaderFragment
  | ReaderInlineDataFragment
  | NormalizationSplitOperation;

const RelayConcreteNode = {
  ACTOR_CHANGE: 'ActorChange',
  CONDITION: 'Condition',
  CLIENT_COMPONENT: 'ClientComponent',
  CLIENT_EXTENSION: 'ClientExtension',
  DEFER: 'Defer',
  CONNECTION: 'Connection',
  FLIGHT_FIELD: 'FlightField',
  FRAGMENT: 'Fragment',
  FRAGMENT_SPREAD: 'FragmentSpread',
  INLINE_DATA_FRAGMENT_SPREAD: 'InlineDataFragmentSpread',
  INLINE_DATA_FRAGMENT: 'InlineDataFragment',
  INLINE_FRAGMENT: 'InlineFragment',
  LINKED_FIELD: 'LinkedField',
  LINKED_HANDLE: 'LinkedHandle',
  LITERAL: 'Literal',
  LIST_VALUE: 'ListValue',
  LOCAL_ARGUMENT: 'LocalArgument',
  MODULE_IMPORT: 'ModuleImport',
  RELAY_RESOLVER: 'RelayResolver',
  REQUIRED_FIELD: 'RequiredField',
  OBJECT_VALUE: 'ObjectValue',
  OPERATION: 'Operation',
  REQUEST: 'Request',
  ROOT_ARGUMENT: 'RootArgument',
  SCALAR_FIELD: 'ScalarField',
  SCALAR_HANDLE: 'ScalarHandle',
  SPLIT_OPERATION: 'SplitOperation',
  STREAM: 'Stream',
  TYPE_DISCRIMINATOR: 'TypeDiscriminator',
  VARIABLE: 'Variable',
};

module.exports = RelayConcreteNode;
