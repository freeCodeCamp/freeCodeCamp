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

var _require = require('../core/SchemaUtils'),
    generateIDField = _require.generateIDField;

var _require2 = require('./TransformUtils'),
    hasUnaliasedSelection = _require2.hasUnaliasedSelection;

var ID = 'id';
var NODE_TYPE = 'Node';

/**
 * A transform that adds an `id` field on any type that has an id field but
 * where there is no unaliased `id` selection.
 */
function generateIDFieldTransform(context) {
  var schema = context.getSchema();
  var typeToIDField = new Map();

  function idFieldForType(type) {
    var idField = typeToIDField.get(type);

    if (idField == null) {
      idField = generateIDField(schema, type);
      typeToIDField.set(type, idField);
    }

    return idField;
  }

  var typeToIDFragment = new Map();

  function idFragmentForType(type) {
    var fragment = typeToIDFragment.get(type);

    if (fragment == null) {
      fragment = {
        kind: 'InlineFragment',
        directives: [],
        loc: {
          kind: 'Generated'
        },
        metadata: null,
        selections: [idFieldForType(type)],
        typeCondition: type
      };
      typeToIDFragment.set(type, fragment);
    }

    return fragment;
  }

  var state = {
    idFieldForType: idFieldForType,
    idFragmentForType: idFragmentForType
  };
  return IRTransformer.transform(context, {
    LinkedField: visitLinkedField
  }, function () {
    return state;
  });
}

function visitLinkedField(field, state) {
  // $FlowFixMe[incompatible-use]
  var transformedNode = this.traverse(field, state); // If the field already has an unaliased `id` field, do nothing

  if (hasUnaliasedSelection(field, ID)) {
    return transformedNode;
  } // $FlowFixMe[incompatible-use]


  var context = this.getContext();
  var schema = context.getSchema();
  var unmodifiedType = schema.assertCompositeType(schema.getRawType(field.type)); // If the field type has an `id` subfield add an `id` selection

  if (schema.canHaveSelections(unmodifiedType) && schema.hasId(unmodifiedType)) {
    return (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, transformedNode), {}, {
      selections: [].concat((0, _toConsumableArray2["default"])(transformedNode.selections), [state.idFieldForType(unmodifiedType)])
    });
  } // If the field type is abstract, then generate a `... on Node { id }`
  // fragment if *any* concrete type implements Node. Then generate a
  // `... on PossibleType { id }` for every concrete type that does *not*
  // implement `Node`


  var nodeType = schema.getTypeFromString(NODE_TYPE);

  if (!nodeType) {
    return transformedNode;
  }

  var nodeInterface = schema.assertInterfaceType(nodeType);

  if (schema.isAbstractType(unmodifiedType)) {
    var selections = (0, _toConsumableArray2["default"])(transformedNode.selections);

    if (schema.mayImplement(unmodifiedType, nodeInterface)) {
      selections.push(state.idFragmentForType(nodeInterface));
    }

    Array.from(schema.getPossibleTypes(schema.assertAbstractType(unmodifiedType)).values()).filter(function (concreteType) {
      return !schema.implementsInterface(schema.assertCompositeType(concreteType), nodeInterface) && schema.hasId(concreteType);
    }).sort(function (a, b) {
      return schema.getTypeString(a) < schema.getTypeString(b) ? -1 : 1;
    }).forEach(function (concreteType) {
      selections.push(state.idFragmentForType(concreteType));
    });
    return (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, transformedNode), {}, {
      selections: selections
    });
  }

  return transformedNode;
}

module.exports = {
  transform: generateIDFieldTransform
};