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

var invariant = require('invariant');

var FAIL = 'fail';
var PASS = 'pass';
var VARIABLE = 'variable';
/**
 * A tranform that removes unreachable IR nodes from all documents in a corpus.
 * The following nodes are removed:
 * - Any node with `@include(if: false)`
 * - Any node with `@skip(if: true)`
 * - Any node with empty `selections`
 */

function skipUnreachableNodeTransform(context) {
  var fragments = new Map();
  var nextContext = IRTransformer.transform(context, {
    Root: function Root(node) {
      return transformNode(context, fragments, node);
    },
    SplitOperation: function SplitOperation(node) {
      return transformNode(context, fragments, node);
    },
    // Fragments are included below where referenced.
    // Unreferenced fragments are not included.
    Fragment: function Fragment(id) {
      return null;
    }
  });
  return Array.from(fragments.values()).reduce(function (ctx, fragment) {
    return fragment ? ctx.add(fragment) : ctx;
  }, nextContext);
}

function transformNode(context, fragments, node) {
  var queue = (0, _toConsumableArray2["default"])(node.selections);
  var selections;

  while (queue.length) {
    var selection = queue.shift();
    var nextSelection = void 0;

    switch (selection.kind) {
      case 'Condition':
        var match = testCondition(selection);

        if (match === PASS) {
          queue.unshift.apply(queue, (0, _toConsumableArray2["default"])(selection.selections));
        } else if (match === VARIABLE) {
          nextSelection = transformNode(context, fragments, selection);
        }

        break;

      case 'FragmentSpread':
        {
          // Skip fragment spreads if the referenced fragment is empty
          if (!fragments.has(selection.name)) {
            var fragment = context.getFragment(selection.name);
            var nextFragment = transformNode(context, fragments, fragment);
            fragments.set(selection.name, nextFragment);
          }

          if (fragments.get(selection.name)) {
            nextSelection = selection;
          }

          break;
        }

      case 'ClientExtension':
        nextSelection = transformNode(context, fragments, selection);
        break;

      case 'ModuleImport':
        nextSelection = transformNode(context, fragments, selection);
        break;

      case 'LinkedField':
        nextSelection = transformNode(context, fragments, selection);
        break;

      case 'InlineFragment':
        // TODO combine with the LinkedField case when flow supports this
        nextSelection = transformNode(context, fragments, selection);
        break;

      case 'Defer':
        nextSelection = transformNode(context, fragments, selection);
        break;

      case 'Stream':
        nextSelection = transformNode(context, fragments, selection);
        break;

      case 'ScalarField':
        nextSelection = selection;
        break;

      case 'InlineDataFragmentSpread':
        !false ? process.env.NODE_ENV !== "production" ? invariant(false, 'SkipUnreachableNodeTransform: Did not expect an ' + 'InlineDataFragmentSpread here. Only expecting ' + 'InlineDataFragmentSpread in reader ASTs and this transform to ' + 'run only on normalization ASTs.') : invariant(false) : void 0;
      // fallthrough

      default:
        selection.kind;
        !false ? process.env.NODE_ENV !== "production" ? invariant(false, 'SkipUnreachableNodeTransform: Unexpected selection kind `%s`.', selection.kind) : invariant(false) : void 0;
    }

    if (nextSelection) {
      selections = selections || [];
      selections.push(nextSelection);
    }
  }

  if (selections) {
    return (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, node), {}, {
      selections: selections
    });
  }

  return null;
}
/**
 * Determines whether a condition statically passes/fails or is unknown
 * (variable).
 */


function testCondition(condition) {
  if (condition.condition.kind === 'Variable') {
    return VARIABLE;
  }

  return condition.condition.value === condition.passingValue ? PASS : FAIL;
}

module.exports = {
  transform: skipUnreachableNodeTransform
};