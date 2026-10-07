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

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var IRTransformer = require('../core/IRTransformer');

// The purpose of this directive is to add GraphQL type inform for fields in
// the operation selection in order to use in in RelayMockPayloadGenerator
// to generate better mock values, and expand the API of MockResolvers
var SCHEMA_EXTENSION = 'directive @relay_test_operation on QUERY | MUTATION | SUBSCRIPTION';

function testOperationDirective(context) {
  return IRTransformer.transform(context, {
    Fragment: function Fragment(node) {
      return node;
    },
    Root: visitRoot,
    SplitOperation: function SplitOperation(node) {
      return node;
    }
  });
}

function getTypeDetails(schema, fieldType) {
  var nullableType = schema.getNullableType(fieldType);
  var isNullable = !schema.isNonNull(fieldType);
  var isPlural = schema.isList(nullableType);
  var type = schema.getRawType(nullableType);
  return {
    enumValues: schema.isEnum(type) ? schema.getEnumValues(schema.assertEnumType(type)) : null,
    nullable: isNullable,
    plural: isPlural,
    type: schema.getTypeString(type)
  };
}

function visitRoot(node) {
  // $FlowFixMe[incompatible-use]
  var schema = this.getContext().getSchema();
  var testDirective = node.directives.find(function (directive) {
    return directive.name === 'relay_test_operation';
  });

  if (testDirective == null) {
    return node;
  }

  var queue = [{
    selections: node.selections,
    path: null
  }];
  var selectionsTypeInfo = {};

  var _loop = function _loop() {
    var _queue$pop = queue.pop(),
        currentSelections = _queue$pop.selections,
        path = _queue$pop.path;

    currentSelections.forEach(function (selection) {
      switch (selection.kind) {
        case 'FragmentSpread':
          // We don't expect to have fragment spreads at this point (it's operations only transform step)
          break;

        case 'ScalarField':
          {
            var nextPath = path === null ? selection.alias : "".concat(path, ".").concat(selection.alias);
            selectionsTypeInfo[nextPath] = getTypeDetails(schema, selection.type);
            break;
          }

        case 'LinkedField':
          {
            var _nextPath = path === null ? selection.alias : "".concat(path, ".").concat(selection.alias);

            selectionsTypeInfo[_nextPath] = getTypeDetails(schema, selection.type);
            queue.push({
              selections: selection.selections,
              path: _nextPath
            });
            break;
          }

        case 'Condition':
        case 'Defer':
        case 'InlineDataFragmentSpread':
        case 'InlineFragment':
        case 'ModuleImport':
        case 'Stream':
          queue.push({
            selections: selection.selections,
            path: path
          });
          break;

        case 'ClientExtension':
          // Clinet extensions are not part of the schema. We should not generate type info.
          break;

        default:
          selection;
          break;
      }
    });
  };

  while (queue.length > 0) {
    _loop();
  } // Sort selectionsTypeInfo


  var keys = Object.keys(selectionsTypeInfo).sort(function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  });
  var sortedSelectionsTypeInfo = {};
  keys.forEach(function (key) {
    sortedSelectionsTypeInfo[key] = selectionsTypeInfo[key];
  });
  return (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, node), {}, {
    directives: node.directives.filter(function (directive) {
      return directive !== testDirective;
    }),
    metadata: (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, node.metadata || {}), {}, {
      relayTestingSelectionTypeInfo: sortedSelectionsTypeInfo
    })
  });
}

module.exports = {
  SCHEMA_EXTENSION: SCHEMA_EXTENSION,
  transform: testOperationDirective
};