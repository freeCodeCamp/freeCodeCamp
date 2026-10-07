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

var invariant = require('invariant');

var _require = require('./CompilerError'),
    eachWithCombinedError = _require.eachWithCombinedError;

/**
 * @public
 *
 * Helper for writing compiler transforms that apply "map" and/or "filter"-style
 * operations to compiler contexts. The `visitor` argument accepts a map of IR
 * kinds to user-defined functions that can map nodes of that kind to new values
 * (of the same kind).
 *
 * If a visitor function is defined for a kind, the visitor function is
 * responsible for traversing its children (by calling `this.traverse(node)`)
 * and returning either the input (to indicate no changes), a new node (to
 * indicate changes), or null/undefined (to indicate the removal of that node
 * from the output).
 *
 * If a visitor function is *not* defined for a kind, a default traversal is
 * used to evaluate its children.
 *
 * The `stateInitializer` argument accepts an optional function to construct the
 * state for each document (fragment or root) in the context. Any documents for
 * which the initializer returns null/undefined is deleted from the context
 * without being traversed.
 *
 * Example: Alias all scalar fields with the reverse of their name:
 *
 * ```
 * transform(context, {
 *   ScalarField: visitScalarField,
 * });
 *
 * function visitScalarField(field: ScalarField, state: State): ?ScalarField {
 *   // Traverse child nodes - for a scalar field these are the arguments &
 *   // directives.
 *   const nextField = this.traverse(field, state);
 *   // Return a new node with a different alias.
 *   return {
 *     ...nextField,
 *     alias: nextField.name.split('').reverse().join(''),
 *   };
 * }
 * ```
 */
function transform(context, visitor, stateInitializer) {
  var transformer = new Transformer(context, visitor);
  return context.withMutations(function (ctx) {
    var nextContext = ctx;
    eachWithCombinedError(context.documents(), function (prevNode) {
      var nextNode;

      if (stateInitializer === undefined) {
        nextNode = transformer.visit(prevNode, undefined);
      } else {
        var _state = stateInitializer(prevNode);

        if (_state != null) {
          nextNode = transformer.visit(prevNode, _state);
        }
      }

      if (!nextNode) {
        nextContext = nextContext.remove(prevNode.name);
      } else if (nextNode !== prevNode) {
        nextContext = nextContext.replace(nextNode);
      }
    });
    return nextContext;
  });
}
/**
 * @internal
 */


var Transformer = /*#__PURE__*/function () {
  function Transformer(context, visitor) {
    this._context = context;
    this._states = [];
    this._visitor = visitor;
  }
  /**
   * @public
   *
   * Returns the original compiler context that is being transformed. This can
   * be used to look up fragments by name, for example.
   */


  var _proto = Transformer.prototype;

  _proto.getContext = function getContext() {
    return this._context;
  }
  /**
   * @public
   *
   * Transforms the node, calling a user-defined visitor function if defined for
   * the node's kind. Uses the given state for this portion of the traversal.
   *
   * Note: This differs from `traverse` in that it calls a visitor function for
   * the node itself.
   */
  ;

  _proto.visit = function visit(node, state) {
    this._states.push(state);

    var nextNode = this._visit(node);

    this._states.pop();

    return nextNode;
  }
  /**
   * @public
   *
   * Transforms the children of the given node, skipping the user-defined
   * visitor function for the node itself. Uses the given state for this portion
   * of the traversal.
   *
   * Note: This differs from `visit` in that it does not call a visitor function
   * for the node itself.
   */
  ;

  _proto.traverse = function traverse(node, state) {
    this._states.push(state);

    var nextNode = this._traverse(node);

    this._states.pop();

    return nextNode;
  };

  _proto._visit = function _visit(node) {
    var nodeVisitor = this._visitor[node.kind];

    if (nodeVisitor) {
      // If a handler for the kind is defined, it is responsible for calling
      // `traverse` to transform children as necessary.
      var _state2 = this._getState();

      var nextNode = nodeVisitor.call(this, node, _state2);
      return nextNode;
    } // Otherwise traverse is called automatically.


    return this._traverse(node);
  };

  _proto._traverse = function _traverse(prevNode) {
    var nextNode;

    switch (prevNode.kind) {
      case 'Argument':
        nextNode = this._traverseChildren(prevNode, null, ['value']);
        break;

      case 'Literal':
      case 'LocalArgumentDefinition':
      case 'RootArgumentDefinition':
      case 'Variable':
        nextNode = prevNode;
        break;

      case 'Defer':
        nextNode = this._traverseChildren(prevNode, ['selections'], ['if']);
        break;

      case 'Stream':
        nextNode = this._traverseChildren(prevNode, ['selections'], ['if', 'initialCount']);
        break;

      case 'ClientExtension':
        nextNode = this._traverseChildren(prevNode, ['selections']);
        break;

      case 'Directive':
        nextNode = this._traverseChildren(prevNode, ['args']);
        break;

      case 'ModuleImport':
        nextNode = this._traverseChildren(prevNode, ['selections']);

        if (!nextNode.selections.length) {
          nextNode = null;
        }

        break;

      case 'FragmentSpread':
      case 'ScalarField':
        nextNode = this._traverseChildren(prevNode, ['args', 'directives']);
        break;

      case 'InlineDataFragmentSpread':
        nextNode = this._traverseChildren(prevNode, ['selections']);
        break;

      case 'LinkedField':
        nextNode = this._traverseChildren(prevNode, ['args', 'directives', 'selections']);

        if (!nextNode.selections.length) {
          nextNode = null;
        }

        break;

      case 'ListValue':
        nextNode = this._traverseChildren(prevNode, ['items']);
        break;

      case 'ObjectFieldValue':
        nextNode = this._traverseChildren(prevNode, null, ['value']);
        break;

      case 'ObjectValue':
        nextNode = this._traverseChildren(prevNode, ['fields']);
        break;

      case 'Condition':
        nextNode = this._traverseChildren(prevNode, ['directives', 'selections'], ['condition']);

        if (!nextNode.selections.length) {
          nextNode = null;
        }

        break;

      case 'InlineFragment':
        nextNode = this._traverseChildren(prevNode, ['directives', 'selections']);

        if (!nextNode.selections.length) {
          nextNode = null;
        }

        break;

      case 'Fragment':
      case 'Root':
        nextNode = this._traverseChildren(prevNode, ['argumentDefinitions', 'directives', 'selections']);
        break;

      case 'Request':
        nextNode = this._traverseChildren(prevNode, null, ['fragment', 'root']);
        break;

      case 'SplitOperation':
        nextNode = this._traverseChildren(prevNode, ['selections']);
        break;

      default:
        prevNode;
        !false ? process.env.NODE_ENV !== "production" ? invariant(false, 'IRTransformer: Unknown kind `%s`.', prevNode.kind) : invariant(false) : void 0;
    }

    return nextNode;
  };

  _proto._traverseChildren = function _traverseChildren(prevNode, pluralKeys, singularKeys) {
    var _this = this;

    var nextNode;
    pluralKeys && pluralKeys.forEach(function (key) {
      var prevItems = prevNode[key];

      if (!prevItems) {
        return;
      }

      !Array.isArray(prevItems) ? process.env.NODE_ENV !== "production" ? invariant(false, 'IRTransformer: Expected data for `%s` to be an array, got `%s`.', key, prevItems) : invariant(false) : void 0;

      var nextItems = _this._map(prevItems);

      if (nextNode || nextItems !== prevItems) {
        nextNode = nextNode || (0, _objectSpread2["default"])({}, prevNode);
        nextNode[key] = nextItems;
      }
    });
    singularKeys && singularKeys.forEach(function (key) {
      var prevItem = prevNode[key];

      if (!prevItem) {
        return;
      }

      var nextItem = _this._visit(prevItem);

      if (nextNode || nextItem !== prevItem) {
        nextNode = nextNode || (0, _objectSpread2["default"])({}, prevNode);
        nextNode[key] = nextItem;
      }
    });
    return nextNode || prevNode;
  };

  _proto._map = function _map(prevItems) {
    var _this2 = this;

    var nextItems;
    prevItems.forEach(function (prevItem, index) {
      var nextItem = _this2._visit(prevItem);

      if (nextItems || nextItem !== prevItem) {
        nextItems = nextItems || prevItems.slice(0, index);

        if (nextItem) {
          nextItems.push(nextItem);
        }
      }
    });
    return nextItems || prevItems;
  };

  _proto._getState = function _getState() {
    !this._states.length ? process.env.NODE_ENV !== "production" ? invariant(false, 'IRTransformer: Expected a current state to be set but found none. ' + 'This is usually the result of mismatched number of pushState()/popState() ' + 'calls.') : invariant(false) : void 0;
    return this._states[this._states.length - 1];
  };

  return Transformer;
}();

module.exports = {
  transform: transform
};