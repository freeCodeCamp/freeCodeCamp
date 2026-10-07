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

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var IRTransformer = require('../core/IRTransformer');

var generateAbstractTypeRefinementKey = require('../util/generateAbstractTypeRefinementKey');

var _require = require('./TransformUtils'),
    hasUnaliasedSelection = _require.hasUnaliasedSelection;

var TYPENAME_KEY = '__typename';
var cache = new Map();
/**
 * A transform that adds `__typename` field on any `LinkedField` of a union or
 * interface type where there is no unaliased `__typename` selection.
 */

function generateTypeNameTransform(context) {
  cache = new Map();
  var schema = context.getSchema();
  var typenameField = {
    kind: 'ScalarField',
    alias: TYPENAME_KEY,
    args: [],
    directives: [],
    handles: null,
    loc: {
      kind: 'Generated'
    },
    metadata: null,
    name: TYPENAME_KEY,
    type: schema.assertScalarFieldType(schema.getNonNullType(schema.expectStringType()))
  };
  return IRTransformer.transform(context, {
    Fragment: visitFragment,
    LinkedField: visitLinkedField,
    InlineFragment: visitInlineFragment
  }, function (node) {
    return {
      typenameField: typenameField
    };
  });
}

function visitFragment(fragment, state) {
  // $FlowFixMe[incompatible-use]
  var schema = this.getContext().getSchema();
  var rawType = schema.getRawType(fragment.type); // $FlowFixMe[incompatible-use]

  var transformedNode = this.traverse(fragment, state);
  var isClientType = !schema.isServerType(rawType);

  if (!isClientType && schema.isAbstractType(rawType)) {
    var abstractKey = generateAbstractTypeRefinementKey(schema, rawType);
    transformedNode = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, transformedNode), {}, {
      selections: [{
        kind: 'ScalarField',
        alias: abstractKey,
        args: [],
        directives: [],
        handles: null,
        loc: {
          kind: 'Generated'
        },
        metadata: {
          abstractKey: abstractKey
        },
        name: TYPENAME_KEY,
        type: schema.assertScalarFieldType(schema.getNonNullType(schema.expectStringType()))
      }].concat((0, _toConsumableArray2["default"])(transformedNode.selections))
    });
  }

  return transformedNode;
}

function visitInlineFragment(fragment, state) {
  // $FlowFixMe[incompatible-use]
  var schema = this.getContext().getSchema();
  var transformedNode = cache.get(fragment);

  if (transformedNode != null && transformedNode.kind === 'InlineFragment') {
    return transformedNode;
  }

  var rawType = schema.getRawType(fragment.typeCondition); // $FlowFixMe[incompatible-use]

  transformedNode = this.traverse(fragment, state);
  var isClientType = !schema.isServerType(rawType);

  if (!isClientType && schema.isAbstractType(rawType)) {
    var abstractKey = generateAbstractTypeRefinementKey(schema, rawType);
    transformedNode = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, transformedNode), {}, {
      selections: [{
        kind: 'ScalarField',
        alias: abstractKey,
        args: [],
        directives: [],
        handles: null,
        loc: {
          kind: 'Generated'
        },
        metadata: {
          abstractKey: abstractKey
        },
        name: TYPENAME_KEY,
        type: schema.assertScalarFieldType(schema.getNonNullType(schema.expectStringType()))
      }].concat((0, _toConsumableArray2["default"])(transformedNode.selections))
    });
  }

  cache.set(fragment, transformedNode);
  return transformedNode;
}

function visitLinkedField(field, state) {
  // $FlowFixMe[incompatible-use]
  var schema = this.getContext().getSchema();
  var transformedNode = cache.get(field);

  if (transformedNode != null && transformedNode.kind === 'LinkedField') {
    return transformedNode;
  } // $FlowFixMe[incompatible-use]


  transformedNode = this.traverse(field, state);

  if (schema.isAbstractType(schema.getRawType(transformedNode.type)) && !hasUnaliasedSelection(transformedNode, TYPENAME_KEY)) {
    transformedNode = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, transformedNode), {}, {
      selections: [state.typenameField].concat((0, _toConsumableArray2["default"])(transformedNode.selections))
    });
  }

  cache.set(field, transformedNode);
  return transformedNode;
}

module.exports = {
  transform: generateTypeNameTransform
};