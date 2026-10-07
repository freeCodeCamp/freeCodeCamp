/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+relay
 * 
 * @format
 */
// flowlint ambiguous-object-type:error
'use strict';

var getRefetchMetadata = require('./getRefetchMetadata');

var invariant = require('invariant');

function getPaginationMetadata(fragmentNode, componentDisplayName) {
  var _fragmentNode$metadat, _fragmentNode$metadat2;

  var _getRefetchMetadata = getRefetchMetadata(fragmentNode, componentDisplayName),
      paginationRequest = _getRefetchMetadata.refetchableRequest,
      refetchMetadata = _getRefetchMetadata.refetchMetadata;

  var paginationMetadata = refetchMetadata.connection;
  !(paginationMetadata != null) ? process.env.NODE_ENV !== "production" ? invariant(false, 'Relay: getPaginationMetadata(): Expected fragment `%s` to include a ' + 'connection when using `%s`. Did you forget to add a @connection ' + 'directive to the connection field in the fragment?', componentDisplayName, fragmentNode.name) : invariant(false) : void 0;
  var connectionPathInFragmentData = paginationMetadata.path;
  var connectionMetadata = ((_fragmentNode$metadat = (_fragmentNode$metadat2 = fragmentNode.metadata) === null || _fragmentNode$metadat2 === void 0 ? void 0 : _fragmentNode$metadat2.connection) !== null && _fragmentNode$metadat !== void 0 ? _fragmentNode$metadat : [])[0];
  !(connectionMetadata != null) ? process.env.NODE_ENV !== "production" ? invariant(false, 'Relay: getPaginationMetadata(): Expected fragment `%s` to include a ' + 'connection when using `%s`. Did you forget to add a @connection ' + 'directive to the connection field in the fragment?', componentDisplayName, fragmentNode.name) : invariant(false) : void 0;
  var identifierField = refetchMetadata.identifierField;
  !(identifierField == null || typeof identifierField === 'string') ? process.env.NODE_ENV !== "production" ? invariant(false, 'Relay: getRefetchMetadata(): Expected `identifierField` to be a string.') : invariant(false) : void 0;
  return {
    connectionPathInFragmentData: connectionPathInFragmentData,
    identifierField: identifierField,
    paginationRequest: paginationRequest,
    paginationMetadata: paginationMetadata,
    stream: connectionMetadata.stream === true
  };
}

module.exports = getPaginationMetadata;