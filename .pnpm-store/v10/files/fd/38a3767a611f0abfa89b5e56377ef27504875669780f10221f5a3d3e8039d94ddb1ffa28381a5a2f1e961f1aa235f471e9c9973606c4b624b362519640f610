/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */
// flowlint ambiguous-object-type:error
'use strict';

var RelayConcreteNode = require('../util/RelayConcreteNode');

var invariant = require('invariant');

var warning = require("fbjs/lib/warning");

/**
 * Runtime function to correspond to the `graphql` tagged template function.
 * All calls to this function should be transformed by the plugin.
 */
function graphql(strings) {
  !false ? process.env.NODE_ENV !== "production" ? invariant(false, 'graphql: Unexpected invocation at runtime. Either the Babel transform ' + 'was not set up, or it failed to identify this call site. Make sure it ' + 'is being used verbatim as `graphql`. Note also that there cannot be ' + 'a space between graphql and the backtick that follows.') : invariant(false) : void 0;
}

function getNode(taggedNode) {
  var node = taggedNode;

  if (typeof node === 'function') {
    node = node();
    process.env.NODE_ENV !== "production" ? warning(false, 'RelayGraphQLTag: node `%s` unexpectedly wrapped in a function.', node.kind === 'Fragment' ? node.name : node.operation.name) : void 0;
  } else if (node["default"]) {
    // Support for languages that work (best) with ES6 modules, such as TypeScript.
    node = node["default"];
  }

  return node;
}

function isFragment(node) {
  var fragment = getNode(node);
  return typeof fragment === 'object' && fragment !== null && fragment.kind === RelayConcreteNode.FRAGMENT;
}

function isRequest(node) {
  var request = getNode(node);
  return typeof request === 'object' && request !== null && request.kind === RelayConcreteNode.REQUEST;
}

function isInlineDataFragment(node) {
  var fragment = getNode(node);
  return typeof fragment === 'object' && fragment !== null && fragment.kind === RelayConcreteNode.INLINE_DATA_FRAGMENT;
}

function getFragment(taggedNode) {
  var fragment = getNode(taggedNode);
  !isFragment(fragment) ? process.env.NODE_ENV !== "production" ? invariant(false, 'GraphQLTag: Expected a fragment, got `%s`.', JSON.stringify(fragment)) : invariant(false) : void 0;
  return fragment;
}

function getPaginationFragment(taggedNode) {
  var _fragment$metadata;

  var fragment = getFragment(taggedNode);
  var refetch = (_fragment$metadata = fragment.metadata) === null || _fragment$metadata === void 0 ? void 0 : _fragment$metadata.refetch;
  var connection = refetch === null || refetch === void 0 ? void 0 : refetch.connection;

  if (refetch === null || typeof refetch !== 'object' || connection === null || typeof connection !== 'object') {
    return null;
  }

  return fragment;
}

function getRefetchableFragment(taggedNode) {
  var _fragment$metadata2;

  var fragment = getFragment(taggedNode);
  var refetch = (_fragment$metadata2 = fragment.metadata) === null || _fragment$metadata2 === void 0 ? void 0 : _fragment$metadata2.refetch;

  if (refetch === null || typeof refetch !== 'object') {
    return null;
  }

  return fragment;
}

function getRequest(taggedNode) {
  var request = getNode(taggedNode);
  !isRequest(request) ? process.env.NODE_ENV !== "production" ? invariant(false, 'GraphQLTag: Expected a request, got `%s`.', JSON.stringify(request)) : invariant(false) : void 0;
  return request;
}

function getInlineDataFragment(taggedNode) {
  var fragment = getNode(taggedNode);
  !isInlineDataFragment(fragment) ? process.env.NODE_ENV !== "production" ? invariant(false, 'GraphQLTag: Expected an inline data fragment, got `%s`.', JSON.stringify(fragment)) : invariant(false) : void 0;
  return fragment;
}

module.exports = {
  getFragment: getFragment,
  getNode: getNode,
  getPaginationFragment: getPaginationFragment,
  getRefetchableFragment: getRefetchableFragment,
  getRequest: getRequest,
  getInlineDataFragment: getInlineDataFragment,
  graphql: graphql,
  isFragment: isFragment,
  isRequest: isRequest,
  isInlineDataFragment: isInlineDataFragment
};