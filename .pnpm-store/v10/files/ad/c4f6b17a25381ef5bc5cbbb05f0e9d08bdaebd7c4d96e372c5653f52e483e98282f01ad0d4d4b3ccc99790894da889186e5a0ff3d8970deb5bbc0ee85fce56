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

const RelayConcreteNode = require('../util/RelayConcreteNode');

const invariant = require('invariant');
const warning = require('warning');

import type {
  ReaderFragment,
  ReaderRefetchableFragment,
  ReaderPaginationFragment,
  ReaderInlineDataFragment,
} from '../util/ReaderNode';
import type {ConcreteRequest} from '../util/RelayConcreteNode';

// The type of a graphql`...` tagged template expression.
export type GraphQLTaggedNode =
  | ReaderFragment
  | ConcreteRequest
  | {
      // This is this case when we `require()` a generated ES6 module
      default: ReaderFragment | ConcreteRequest,
      ...
    };

/**
 * Runtime function to correspond to the `graphql` tagged template function.
 * All calls to this function should be transformed by the plugin.
 */
function graphql(strings: Array<string>): GraphQLTaggedNode {
  invariant(
    false,
    'graphql: Unexpected invocation at runtime. Either the Babel transform ' +
      'was not set up, or it failed to identify this call site. Make sure it ' +
      'is being used verbatim as `graphql`. Note also that there cannot be ' +
      'a space between graphql and the backtick that follows.',
  );
}

function getNode(
  taggedNode: GraphQLTaggedNode,
): ReaderFragment | ConcreteRequest {
  let node = taggedNode;
  if (typeof node === 'function') {
    node = (node(): ReaderFragment | ConcreteRequest);
    warning(
      false,
      'RelayGraphQLTag: node `%s` unexpectedly wrapped in a function.',
      node.kind === 'Fragment' ? node.name : node.operation.name,
    );
  } else if (node.default) {
    // Support for languages that work (best) with ES6 modules, such as TypeScript.
    node = node.default;
  }
  return node;
}

function isFragment(node: GraphQLTaggedNode): boolean {
  const fragment = getNode(node);
  return (
    typeof fragment === 'object' &&
    fragment !== null &&
    fragment.kind === RelayConcreteNode.FRAGMENT
  );
}

function isRequest(node: GraphQLTaggedNode): boolean {
  const request = getNode(node);
  return (
    typeof request === 'object' &&
    request !== null &&
    request.kind === RelayConcreteNode.REQUEST
  );
}

function isInlineDataFragment(node: GraphQLTaggedNode): boolean {
  const fragment = getNode(node);
  return (
    typeof fragment === 'object' &&
    fragment !== null &&
    fragment.kind === RelayConcreteNode.INLINE_DATA_FRAGMENT
  );
}

function getFragment(taggedNode: GraphQLTaggedNode): ReaderFragment {
  const fragment = getNode(taggedNode);
  invariant(
    isFragment(fragment),
    'GraphQLTag: Expected a fragment, got `%s`.',
    JSON.stringify(fragment),
  );
  return (fragment: any);
}

function getPaginationFragment(
  taggedNode: GraphQLTaggedNode,
): ReaderPaginationFragment | null {
  const fragment = getFragment(taggedNode);
  const refetch = fragment.metadata?.refetch;
  const connection = refetch?.connection;
  if (
    refetch === null ||
    typeof refetch !== 'object' ||
    connection === null ||
    typeof connection !== 'object'
  ) {
    return null;
  }
  return (fragment: any);
}

function getRefetchableFragment(
  taggedNode: GraphQLTaggedNode,
): ReaderRefetchableFragment | null {
  const fragment = getFragment(taggedNode);
  const refetch = fragment.metadata?.refetch;
  if (refetch === null || typeof refetch !== 'object') {
    return null;
  }
  return (fragment: any);
}

function getRequest(taggedNode: GraphQLTaggedNode): ConcreteRequest {
  const request = getNode(taggedNode);
  invariant(
    isRequest(request),
    'GraphQLTag: Expected a request, got `%s`.',
    JSON.stringify(request),
  );
  return (request: any);
}

function getInlineDataFragment(
  taggedNode: GraphQLTaggedNode,
): ReaderInlineDataFragment {
  const fragment = getNode(taggedNode);
  invariant(
    isInlineDataFragment(fragment),
    'GraphQLTag: Expected an inline data fragment, got `%s`.',
    JSON.stringify(fragment),
  );
  return (fragment: any);
}

module.exports = {
  getFragment,
  getNode,
  getPaginationFragment,
  getRefetchableFragment,
  getRequest,
  getInlineDataFragment,
  graphql,
  isFragment,
  isRequest,
  isInlineDataFragment,
};
