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

var _require = require('../core/CompilerError'),
    createCompilerError = _require.createCompilerError,
    createUserError = _require.createUserError;

var cachesByNode = new Map();

function clientExtensionTransform(context) {
  cachesByNode = new Map();
  return IRTransformer.transform(context, {
    Fragment: traverseDefinition,
    Root: traverseDefinition,
    SplitOperation: traverseDefinition
  });
}

function traverseDefinition(node) {
  // $FlowFixMe[incompatible-use]
  var compilerContext = this.getContext();
  var schema = compilerContext.getSchema();
  var rootType;

  switch (node.kind) {
    case 'Root':
      switch (node.operation) {
        case 'query':
          rootType = schema.getQueryType();
          break;

        case 'mutation':
          rootType = schema.getMutationType();
          break;

        case 'subscription':
          rootType = schema.getSubscriptionType();
          break;

        default:
          node.operation;
      }

      break;

    case 'SplitOperation':
      if (!schema.isServerType(node.type)) {
        throw createUserError('ClientExtensionTransform: SplitOperation (@module) can be created ' + 'only for fragments that defined on a server type', [node.loc]);
      }

      rootType = node.type;
      break;

    case 'Fragment':
      rootType = node.type;
      break;

    default:
      node;
  }

  if (rootType == null) {
    throw createUserError("ClientExtensionTransform: Expected the type of `".concat(node.name, "` to have been defined in the schema. Make sure both server and ") + 'client schema are up to date.', [node.loc]);
  }

  return traverseSelections(node, compilerContext, rootType);
}

function traverseSelections(node, compilerContext, parentType) {
  // $FlowFixMe[escaped-generic]
  var nodeCache = cachesByNode.get(node);

  if (nodeCache == null) {
    nodeCache = new Map(); // $FlowFixMe[escaped-generic]

    cachesByNode.set(node, nodeCache);
  }

  var result = nodeCache.get(parentType);

  if (result != null) {
    /* $FlowFixMe[incompatible-return] - TODO: type IRTransformer to allow
     * changing result type */
    return result;
  }

  var schema = compilerContext.getSchema();
  var clientSelections = [];
  var serverSelections = cowMap(node.selections, function (selection) {
    switch (selection.kind) {
      case 'ClientExtension':
        throw createCompilerError('Unexpected ClientExtension node before ClientExtensionTransform', [selection.loc]);

      case 'Condition':
      case 'Defer':
      case 'InlineDataFragmentSpread':
      case 'ModuleImport':
      case 'Stream':
        return traverseSelections(selection, compilerContext, parentType);

      case 'ScalarField':
        if (schema.isClientDefinedField(schema.assertCompositeType(schema.getRawType(parentType)), selection)) {
          clientSelections.push(selection);
          return null;
        } else {
          return selection;
        }

      case 'LinkedField':
        {
          if (schema.isClientDefinedField(schema.assertCompositeType(schema.getRawType(parentType)), selection)) {
            clientSelections.push(selection);
            return null;
          }

          return traverseSelections(selection, compilerContext, selection.type);
        }

      case 'InlineFragment':
        {
          var isClientType = !schema.isServerType(selection.typeCondition);

          if (isClientType) {
            clientSelections.push(selection);
            return null;
          }

          return traverseSelections(selection, compilerContext, selection.typeCondition);
        }

      case 'FragmentSpread':
        {
          return selection;
        }

      default:
        selection;
        throw createCompilerError("ClientExtensionTransform: Unexpected selection of kind `".concat(selection.kind, "`."), [selection.loc]);
    }
  });

  if (clientSelections.length === 0) {
    if (serverSelections === node.selections) {
      result = node;
    } else {
      result = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, node), {}, {
        selections: serverSelections
      });
    }
  } else {
    result = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, node), {}, {
      selections: [].concat((0, _toConsumableArray2["default"])(serverSelections), [// Group client fields under a single ClientExtension node
      {
        kind: 'ClientExtension',
        loc: node.loc,
        metadata: null,
        selections: clientSelections
      }])
    });
  } // $FlowFixMe[escaped-generic]


  nodeCache.set(parentType, result);
  /* $FlowFixMe[incompatible-return] - TODO: type IRTransformer to allow
   * changing result type */

  return result;
}
/**
 * Maps an array with copy-on-write semantics.
 * `null` return values from the map function are removals.
 */


function cowMap(selections, f) {
  for (var i = 0; i < selections.length; i++) {
    var prevSelection = selections[i];
    var nextSelection = f(prevSelection);

    if (prevSelection !== nextSelection) {
      var result = selections.slice(0, i);

      if (nextSelection != null) {
        result.push(nextSelection);
      }

      for (var j = i + 1; j < selections.length; j++) {
        var innerNextSelection = f(selections[j]);

        if (innerNextSelection != null) {
          result.push(innerNextSelection);
        }
      }

      return result;
    }
  } // nothing changed, return original


  return selections;
}

module.exports = {
  transform: clientExtensionTransform
};