/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 * @emails oncall+relay
 */
// flowlint ambiguous-object-type:error
'use strict';

var RelayFeatureFlags = require('./RelayFeatureFlags');

var isEmptyObject = require('./isEmptyObject');

var stableCopy = require('./stableCopy');

var _require = require('../store/RelayModernSelector'),
    getDataIDsFromFragment = _require.getDataIDsFromFragment,
    getVariablesFromFragment = _require.getVariablesFromFragment,
    getSelector = _require.getSelector;

function getFragmentIdentifier(fragmentNode, fragmentRef) {
  var selector = getSelector(fragmentNode, fragmentRef);
  var fragmentOwnerIdentifier = selector == null ? 'null' : selector.kind === 'SingularReaderSelector' ? selector.owner.identifier : '[' + selector.selectors.map(function (sel) {
    return sel.owner.identifier;
  }).join(',') + ']';
  var fragmentVariables = getVariablesFromFragment(fragmentNode, fragmentRef);
  var dataIDs = getDataIDsFromFragment(fragmentNode, fragmentRef);

  if (RelayFeatureFlags.ENABLE_GETFRAGMENTIDENTIFIER_OPTIMIZATION) {
    return fragmentOwnerIdentifier + '/' + fragmentNode.name + '/' + (fragmentVariables == null || isEmptyObject(fragmentVariables) ? '{}' : JSON.stringify(stableCopy(fragmentVariables))) + '/' + (typeof dataIDs === 'undefined' ? 'missing' : dataIDs == null ? 'null' : Array.isArray(dataIDs) ? '[' + dataIDs.join(',') + ']' : dataIDs);
  } else {
    var _JSON$stringify;

    return fragmentOwnerIdentifier + '/' + fragmentNode.name + '/' + JSON.stringify(stableCopy(fragmentVariables)) + '/' + ((_JSON$stringify = JSON.stringify(dataIDs)) !== null && _JSON$stringify !== void 0 ? _JSON$stringify : 'missing');
  }
}

module.exports = getFragmentIdentifier;