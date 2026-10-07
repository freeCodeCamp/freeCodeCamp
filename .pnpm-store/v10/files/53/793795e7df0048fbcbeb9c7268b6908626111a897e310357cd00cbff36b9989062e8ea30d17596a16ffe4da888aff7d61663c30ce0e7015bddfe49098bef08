/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * 
 */
// flowlint ambiguous-object-type:error
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var IRTransformer = require('../core/IRTransformer');

var areEqualArgValues = require('../util/areEqualArgValues');

var getIdentifierForSelection = require('../core/getIdentifierForSelection');

var _require = require('../core/CompilerError'),
    createCompilerError = _require.createCompilerError,
    createUserError = _require.createUserError;

/**
 * Transform that flattens inline fragments, fragment spreads, and conditionals.
 *
 * Inline fragments are inlined (replaced with their selections) when:
 * - The fragment type matches the type of its parent, and its `isForCodegen`,
 *   or if it's for printing, there is no directive on the inline fragment.
 */
function flattenTransformImpl(context, options) {
  var state = {
    isForCodegen: !!(options && options.isForCodegen),
    parentType: null
  };
  var visitorFn = memoizedFlattenSelection(new Map());
  return IRTransformer.transform(context, {
    Condition: visitorFn,
    Defer: visitorFn,
    Fragment: visitorFn,
    InlineDataFragmentSpread: visitorFn,
    InlineFragment: visitorFn,
    LinkedField: visitorFn,
    ModuleImport: visitorFn,
    Root: visitorFn,
    SplitOperation: visitorFn
  }, function () {
    return state;
  });
}

function memoizedFlattenSelection(cache) {
  return function flattenSelectionsFn(node, state) {
    // $FlowFixMe[incompatible-use]
    var context = this.getContext();
    var nodeCache = cache.get(node);

    if (nodeCache == null) {
      nodeCache = new Map();
      cache.set(node, nodeCache);
    } // Determine the current type.


    var parentType = state.parentType;
    var result = nodeCache.get(parentType);

    if (result != null) {
      return result;
    }

    var type = node.kind === 'LinkedField' || node.kind === 'Fragment' || node.kind === 'Root' || node.kind === 'SplitOperation' ? node.type : node.kind === 'InlineFragment' ? node.typeCondition : parentType;

    if (type == null) {
      throw createCompilerError('FlattenTransform: Expected a parent type.', [node.loc]);
    } // Flatten the selections in this node, creating a new node with flattened
    // selections if possible, then deeply traverse the flattened node, while
    // keeping track of the parent type.


    var nextSelections = new Map();
    var hasFlattened = flattenSelectionsInto(context.getSchema(), nextSelections, node, state, type);
    var flattenedNode = hasFlattened ? (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, node), {}, {
      selections: Array.from(nextSelections.values())
    }) : node;
    state.parentType = type; // $FlowFixMe[incompatible-use]

    var deeplyFlattenedNode = this.traverse(flattenedNode, state);
    state.parentType = parentType;
    nodeCache.set(parentType, deeplyFlattenedNode);
    return deeplyFlattenedNode;
  };
}
/**
 * @private
 */


function flattenSelectionsInto(schema, flattenedSelections, node, state, type) {
  var hasFlattened = false;
  node.selections.forEach(function (selection) {
    if (selection.kind === 'InlineFragment' && shouldFlattenInlineFragment(schema, selection, state, type)) {
      hasFlattened = true;
      flattenSelectionsInto(schema, flattenedSelections, selection, state, type);
      return;
    }

    var nodeIdentifier = getIdentifierForSelection(schema, selection);
    var flattenedSelection = flattenedSelections.get(nodeIdentifier); // If this selection hasn't been seen before, keep track of it.

    if (!flattenedSelection) {
      flattenedSelections.set(nodeIdentifier, selection);
      return;
    } // Otherwise a similar selection exists which should be merged.


    hasFlattened = true;

    if (flattenedSelection.kind === 'InlineFragment') {
      if (selection.kind !== 'InlineFragment') {
        throw createCompilerError("FlattenTransform: Expected an InlineFragment, got a '".concat(selection.kind, "'"), [selection.loc]);
      }

      flattenedSelections.set(nodeIdentifier, (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, flattenedSelection), {}, {
        selections: mergeSelections(schema, flattenedSelection, selection, state, selection.typeCondition)
      }));
    } else if (flattenedSelection.kind === 'Condition') {
      if (selection.kind !== 'Condition') {
        throw createCompilerError("FlattenTransform: Expected a Condition, got a '".concat(selection.kind, "'"), [selection.loc]);
      }

      flattenedSelections.set(nodeIdentifier, (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, flattenedSelection), {}, {
        selections: mergeSelections(schema, flattenedSelection, selection, state, type)
      }));
    } else if (flattenedSelection.kind === 'ClientExtension') {
      if (selection.kind !== 'ClientExtension') {
        throw createCompilerError("FlattenTransform: Expected a ClientExtension, got a '".concat(selection.kind, "'"), [selection.loc]);
      }

      flattenedSelections.set(nodeIdentifier, (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, flattenedSelection), {}, {
        selections: mergeSelections(schema, flattenedSelection, selection, state, type)
      }));
    } else if (flattenedSelection.kind === 'FragmentSpread') {// Ignore duplicate fragment spreads.
    } else if (flattenedSelection.kind === 'ModuleImport') {
      if (selection.kind !== 'ModuleImport') {
        throw createCompilerError("FlattenTransform: Expected a ModuleImport, got a '".concat(selection.kind, "'"), [selection.loc]);
      }

      if (selection.name !== flattenedSelection.name || selection.module !== flattenedSelection.module || selection.key !== flattenedSelection.key) {
        throw createUserError('Found conflicting @module selections: use a unique alias on the ' + 'parent fields.', [selection.loc, flattenedSelection.loc]);
      }

      flattenedSelections.set(nodeIdentifier, (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, flattenedSelection), {}, {
        selections: mergeSelections(schema, flattenedSelection, selection, state, type)
      }));
    } else if (flattenedSelection.kind === 'Defer') {
      if (selection.kind !== 'Defer') {
        throw createCompilerError("FlattenTransform: Expected a Defer, got a '".concat(selection.kind, "'"), [selection.loc]);
      }

      flattenedSelections.set(nodeIdentifier, (0, _objectSpread2["default"])((0, _objectSpread2["default"])({
        kind: 'Defer'
      }, flattenedSelection), {}, {
        selections: mergeSelections(schema, flattenedSelection, selection, state, type)
      }));
    } else if (flattenedSelection.kind === 'Stream') {
      if (selection.kind !== 'Stream') {
        throw createCompilerError("FlattenTransform: Expected a Stream, got a '".concat(selection.kind, "'"), [selection.loc]);
      }

      flattenedSelections.set(nodeIdentifier, (0, _objectSpread2["default"])((0, _objectSpread2["default"])({
        kind: 'Stream'
      }, flattenedSelection), {}, {
        selections: mergeSelections(schema, flattenedSelection, selection, state, type)
      }));
    } else if (flattenedSelection.kind === 'LinkedField') {
      if (selection.kind !== 'LinkedField') {
        throw createCompilerError("FlattenTransform: Expected a LinkedField, got a '".concat(selection.kind, "'"), [selection.loc]);
      }

      assertUniqueArgsForAlias(selection, flattenedSelection); // NOTE: not using object spread here as this code is pretty hot

      flattenedSelections.set(nodeIdentifier, {
        kind: 'LinkedField',
        alias: flattenedSelection.alias,
        args: flattenedSelection.args,
        connection: flattenedSelection.connection || selection.connection,
        directives: flattenedSelection.directives,
        handles: mergeHandles(flattenedSelection, selection),
        loc: flattenedSelection.loc,
        metadata: flattenedSelection.metadata,
        name: flattenedSelection.name,
        selections: mergeSelections(schema, flattenedSelection, selection, state, selection.type),
        type: flattenedSelection.type
      });
    } else if (flattenedSelection.kind === 'ScalarField') {
      if (selection.kind !== 'ScalarField') {
        throw createCompilerError("FlattenTransform: Expected a ScalarField, got a '".concat(selection.kind, "'"), [selection.loc]);
      }

      assertUniqueArgsForAlias(selection, flattenedSelection);

      if (selection.handles && selection.handles.length > 0) {
        flattenedSelections.set(nodeIdentifier, (0, _objectSpread2["default"])((0, _objectSpread2["default"])({
          kind: 'ScalarField'
        }, flattenedSelection), {}, {
          handles: mergeHandles(selection, flattenedSelection)
        }));
      }
    } else if (flattenedSelection.kind === 'InlineDataFragmentSpread') {
      throw createCompilerError('FlattenTransform: did not expect an InlineDataFragmentSpread node. ' + 'Only expecting InlineDataFragmentSpread in reader ASTs and this ' + 'transform to run only on normalization ASTs.', [selection.loc]);
    } else {
      flattenedSelection.kind;
      throw createCompilerError("FlattenTransform: Unknown kind '".concat(flattenedSelection.kind, "'"));
    }
  });
  return hasFlattened;
}
/**
 * @private
 */


function mergeSelections(schema, nodeA, nodeB, state, type) {
  var flattenedSelections = new Map();
  flattenSelectionsInto(schema, flattenedSelections, nodeA, state, type);
  flattenSelectionsInto(schema, flattenedSelections, nodeB, state, type);
  return Array.from(flattenedSelections.values());
}
/**
 * @private
 * TODO(T19327202) This is redundant with OverlappingFieldsCanBeMergedRule once
 * it can be enabled.
 */


function assertUniqueArgsForAlias(field, otherField) {
  if (!areEqualFields(field, otherField)) {
    throw createUserError('Expected all fields on the same parent with the name or alias ' + "'".concat(field.alias, "' to have the same name and arguments."), [field.loc, otherField.loc]);
  }
}
/**
 * @private
 */


function shouldFlattenInlineFragment(schema, fragment, state, type) {
  return schema.areEqualTypes(fragment.typeCondition, schema.getRawType(type)) && (state.isForCodegen || fragment.directives.length === 0);
}
/**
 * @private
 *
 * Verify that two fields are equal in all properties other than their
 * selections.
 */


function areEqualFields(thisField, thatField) {
  return thisField.kind === thatField.kind && thisField.name === thatField.name && thisField.alias === thatField.alias && areEqualArgs(thisField.args, thatField.args);
}
/**
 * Verify that two sets of arguments are equivalent - same argument names
 * and values. Notably this ignores the types of arguments and values, which
 * may not always be inferred identically.
 */


function areEqualArgs(thisArgs, thatArgs) {
  return thisArgs.length === thatArgs.length && thisArgs.every(function (thisArg, index) {
    var thatArg = thatArgs[index];
    return thisArg.name === thatArg.name && thisArg.value.kind === thatArg.value.kind && thisArg.value.variableName === thatArg.value.variableName && areEqualArgValues(thisArg.value.value, thatArg.value.value);
  });
}
/**
 * @private
 */


function mergeHandles(nodeA, nodeB) {
  if (!nodeA.handles) {
    return nodeB.handles;
  }

  if (!nodeB.handles) {
    return nodeA.handles;
  }

  var uniqueItems = new Map();
  nodeA.handles // $FlowFixMe[incompatible-use]
  .concat(nodeB.handles) // $FlowFixMe[incompatible-use]
  .forEach(function (item) {
    return uniqueItems.set(item.name + item.key, item);
  }); // $FlowFixMe[incompatible-return]

  return Array.from(uniqueItems.values());
}

function transformWithOptions(options) {
  return function flattenTransform(context) {
    return flattenTransformImpl(context, options);
  };
}

module.exports = {
  transformWithOptions: transformWithOptions
};