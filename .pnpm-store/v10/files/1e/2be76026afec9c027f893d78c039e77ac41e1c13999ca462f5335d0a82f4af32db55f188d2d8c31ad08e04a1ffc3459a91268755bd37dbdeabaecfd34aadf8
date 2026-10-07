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

var invariant = require('invariant');

var _require = require('./CompilerError'),
    eachWithCombinedError = _require.eachWithCombinedError;

/**
 * @public
 *
 * Helper for writing AST validators that shares the same logic with
 * the transfomer
 *
 */
function validate(context, visitor, stateInitializer) {
  var validator = new Validator(context, visitor);
  eachWithCombinedError(context.documents(), function (prevNode) {
    if (stateInitializer === undefined) {
      validator.visit(prevNode, undefined);
    } else {
      var _state = stateInitializer(prevNode);

      if (_state != null) {
        validator.visit(prevNode, _state);
      }
    }
  });
}
/**
 * @internal
 */


var Validator = /*#__PURE__*/function () {
  function Validator(context, visitor) {
    this._context = context;
    this._states = [];
    this._visitor = visitor;
  }

  var _proto = Validator.prototype;

  _proto.getContext = function getContext() {
    return this._context;
  };

  _proto.visit = function visit(node, state) {
    this._states.push(state);

    this._visit(node);

    this._states.pop();
  };

  _proto.traverse = function traverse(node, state) {
    this._states.push(state);

    this._traverse(node);

    this._states.pop();
  };

  _proto._visit = function _visit(node) {
    var nodeVisitor = this._visitor[node.kind];

    if (nodeVisitor) {
      // If a handler for the kind is defined, it is responsible for calling
      // `traverse` to transform children as necessary.
      var _state2 = this._getState();

      nodeVisitor.call(this, node, _state2);
      return;
    } // Otherwise traverse is called automatically.


    this._traverse(node);
  };

  _proto._traverse = function _traverse(prevNode) {
    switch (prevNode.kind) {
      case 'Argument':
        this._traverseChildren(prevNode, null, ['value']);

        break;

      case 'Literal':
      case 'LocalArgumentDefinition':
      case 'RootArgumentDefinition':
      case 'Variable':
        break;

      case 'Defer':
        this._traverseChildren(prevNode, ['selections'], ['if']);

        break;

      case 'Stream':
        this._traverseChildren(prevNode, ['selections'], ['if', 'initialCount']);

        break;

      case 'ClientExtension':
        this._traverseChildren(prevNode, ['selections']);

        break;

      case 'Directive':
        this._traverseChildren(prevNode, ['args']);

        break;

      case 'ModuleImport':
        this._traverseChildren(prevNode, ['selections']);

        break;

      case 'FragmentSpread':
      case 'ScalarField':
        this._traverseChildren(prevNode, ['args', 'directives']);

        break;

      case 'InlineDataFragmentSpread':
        this._traverseChildren(prevNode, ['selections']);

        break;

      case 'LinkedField':
        this._traverseChildren(prevNode, ['args', 'directives', 'selections']);

        break;

      case 'ListValue':
        this._traverseChildren(prevNode, ['items']);

        break;

      case 'ObjectFieldValue':
        this._traverseChildren(prevNode, null, ['value']);

        break;

      case 'ObjectValue':
        this._traverseChildren(prevNode, ['fields']);

        break;

      case 'Condition':
        this._traverseChildren(prevNode, ['directives', 'selections'], ['condition']);

        break;

      case 'InlineFragment':
        this._traverseChildren(prevNode, ['directives', 'selections']);

        break;

      case 'Fragment':
      case 'Root':
        this._traverseChildren(prevNode, ['argumentDefinitions', 'directives', 'selections']);

        break;

      case 'Request':
        this._traverseChildren(prevNode, null, ['fragment', 'root']);

        break;

      case 'SplitOperation':
        this._traverseChildren(prevNode, ['selections']);

        break;

      default:
        prevNode;
        !false ? process.env.NODE_ENV !== "production" ? invariant(false, 'IRValidator: Unknown kind `%s`.', prevNode.kind) : invariant(false) : void 0;
    }
  };

  _proto._traverseChildren = function _traverseChildren(prevNode, pluralKeys, singularKeys) {
    var _this = this;

    pluralKeys && pluralKeys.forEach(function (key) {
      var prevItems = prevNode[key];

      if (!prevItems) {
        return;
      }

      !Array.isArray(prevItems) ? process.env.NODE_ENV !== "production" ? invariant(false, 'IRValidator: Expected data for `%s` to be an array, got `%s`.', key, prevItems) : invariant(false) : void 0;
      prevItems.forEach(function (prevItem) {
        return _this._visit(prevItem);
      });
    });
    singularKeys && singularKeys.forEach(function (key) {
      var prevItem = prevNode[key];

      if (!prevItem) {
        return;
      }

      _this._visit(prevItem);
    });
  };

  _proto._getState = function _getState() {
    !this._states.length ? process.env.NODE_ENV !== "production" ? invariant(false, 'IRValidator: Expected a current state to be set but found none. ' + 'This is usually the result of mismatched number of pushState()/popState() ' + 'calls.') : invariant(false) : void 0;
    return this._states[this._states.length - 1];
  };

  return Validator;
}();

module.exports = {
  validate: validate
};