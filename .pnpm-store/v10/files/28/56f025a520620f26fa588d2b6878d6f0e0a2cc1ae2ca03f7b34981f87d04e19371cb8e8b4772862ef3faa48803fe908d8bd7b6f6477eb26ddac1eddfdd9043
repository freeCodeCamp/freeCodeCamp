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

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var IRTransformer = require('../core/IRTransformer');

var getLiteralArgumentValues = require('../core/getLiteralArgumentValues');

var invariant = require('invariant');

var RELAY = 'relay';
var SCHEMA_EXTENSION = "\ndirective @relay(\n  # Marks a fragment as being backed by a GraphQLList.\n  plural: Boolean,\n\n  # Marks a fragment spread which should be unmasked if provided false\n  mask: Boolean = true,\n) on FRAGMENT_DEFINITION | FRAGMENT_SPREAD\n";
/**
 * A transform that extracts `@relay(plural: Boolean)` directives and converts
 * them to metadata that can be accessed at runtime.
 */

function relayDirectiveTransform(context) {
  return IRTransformer.transform(context, {
    Fragment: visitRelayMetadata(fragmentMetadata),
    FragmentSpread: visitRelayMetadata(fragmentSpreadMetadata)
  });
}

function visitRelayMetadata(metadataFn) {
  return function (node) {
    var relayDirective = node.directives.find(function (_ref) {
      var name = _ref.name;
      return name === RELAY;
    });

    if (!relayDirective) {
      // $FlowFixMe[incompatible-use]
      return this.traverse(node);
    }

    var argValues = getLiteralArgumentValues(relayDirective.args);
    var metadata = metadataFn(argValues); // $FlowFixMe[incompatible-use]

    return this.traverse((0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, node), {}, {
      directives: node.directives.filter(function (directive) {
        return directive !== relayDirective;
      }),
      // $FlowFixMe[cannot-spread-indexer]
      metadata: (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, node.metadata || {}), metadata)
    }));
  };
}

function fragmentMetadata(_ref2) {
  var mask = _ref2.mask,
      plural = _ref2.plural;
  !(plural === undefined || typeof plural === 'boolean') ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayDirectiveTransform: Expected the "plural" argument to @relay ' + 'to be a boolean literal if specified.') : invariant(false) : void 0;
  !(mask === undefined || typeof mask === 'boolean') ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayDirectiveTransform: Expected the "mask" argument to @relay ' + 'to be a boolean literal if specified.') : invariant(false) : void 0;
  return {
    mask: mask,
    plural: plural
  };
}

function fragmentSpreadMetadata(_ref3) {
  var mask = _ref3.mask;
  !(mask === undefined || typeof mask === 'boolean') ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayDirectiveTransform: Expected the "mask" argument to @relay ' + 'to be a boolean literal if specified.') : invariant(false) : void 0;
  return {
    mask: mask
  };
}

module.exports = {
  RELAY: RELAY,
  SCHEMA_EXTENSION: SCHEMA_EXTENSION,
  transform: relayDirectiveTransform
};