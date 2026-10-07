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

var invariant = require('invariant');

function getRefetchMetadata(fragmentNode, componentDisplayName) {
  var _fragmentNode$metadat, _fragmentNode$metadat2;

  !(((_fragmentNode$metadat = fragmentNode.metadata) === null || _fragmentNode$metadat === void 0 ? void 0 : _fragmentNode$metadat.plural) !== true) ? process.env.NODE_ENV !== "production" ? invariant(false, 'Relay: getRefetchMetadata(): Expected fragment `%s` not to be plural when using ' + '`%s`. Remove `@relay(plural: true)` from fragment `%s` ' + 'in order to use it with `%s`.', fragmentNode.name, componentDisplayName, fragmentNode.name, componentDisplayName) : invariant(false) : void 0;
  var refetchMetadata = (_fragmentNode$metadat2 = fragmentNode.metadata) === null || _fragmentNode$metadat2 === void 0 ? void 0 : _fragmentNode$metadat2.refetch;
  !(refetchMetadata != null) ? process.env.NODE_ENV !== "production" ? invariant(false, 'Relay: getRefetchMetadata(): Expected fragment `%s` to be refetchable when using `%s`. ' + 'Did you forget to add a @refetchable directive to the fragment?', componentDisplayName, fragmentNode.name) : invariant(false) : void 0; // handle both commonjs and es modules

  var refetchableRequest = refetchMetadata.operation["default"] ? refetchMetadata.operation["default"] : refetchMetadata.operation;
  var fragmentRefPathInResponse = refetchMetadata.fragmentPathInResult;
  !(typeof refetchableRequest !== 'string') ? process.env.NODE_ENV !== "production" ? invariant(false, 'Relay: getRefetchMetadata(): Expected refetch query to be an ' + "operation and not a string when using `%s`. If you're seeing this, " + 'this is likely a bug in Relay.', componentDisplayName) : invariant(false) : void 0;
  var identifierField = refetchMetadata.identifierField;
  !(identifierField == null || typeof identifierField === 'string') ? process.env.NODE_ENV !== "production" ? invariant(false, 'Relay: getRefetchMetadata(): Expected `identifierField` to be a string.') : invariant(false) : void 0;
  return {
    fragmentRefPathInResponse: fragmentRefPathInResponse,
    identifierField: identifierField,
    refetchableRequest: refetchableRequest,
    refetchMetadata: refetchMetadata
  };
}

module.exports = getRefetchMetadata;