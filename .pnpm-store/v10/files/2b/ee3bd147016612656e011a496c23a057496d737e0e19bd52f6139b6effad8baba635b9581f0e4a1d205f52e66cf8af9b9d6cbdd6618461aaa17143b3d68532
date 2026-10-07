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

var _createForOfIteratorHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/createForOfIteratorHelper"));

var IRValidator = require('../core/IRValidator');

var _require = require('../core/CompilerError'),
    createUserError = _require.createUserError;

var NODEKIND_DIRECTIVE_MAP = {
  Defer: 'defer',
  Stream: 'stream'
};
/*
 * Validate that server-only directives are not used inside client fields
 */

function validateServerOnlyDirectives(context) {
  IRValidator.validate(context, {
    ClientExtension: visitClientExtension,
    Defer: visitTransformedDirective,
    Stream: visitTransformedDirective,
    LinkedField: visitLinkedField,
    ScalarField: stopVisit
  }, function () {
    return {
      rootClientSelection: null
    };
  });
  return context;
} // If an empty visitor is defined, we no longer automatically visit child nodes
// such as arguments.


function stopVisit() {} // Only visits selections as an optimization to not look at arguments


function visitLinkedField(node, state) {
  var _iterator = (0, _createForOfIteratorHelper2["default"])(node.selections),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var selection = _step.value;
      // $FlowFixMe[incompatible-use]
      this.visit(selection, state);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function visitClientExtension(node, state) {
  var _iterator2 = (0, _createForOfIteratorHelper2["default"])(node.selections),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var selection = _step2.value;
      // $FlowFixMe[incompatible-use]
      this.visit(selection, {
        rootClientSelection: selection
      });
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

function visitTransformedDirective(node, state) {
  if (state.rootClientSelection) {
    throwError("@".concat(NODEKIND_DIRECTIVE_MAP[node.kind]), node.loc, state.rootClientSelection.loc);
  } // directive used only on client fields


  if (node.selections.every(function (sel) {
    return sel.kind === 'ClientExtension';
  })) {
    var _clientExtension$sele;

    var clientExtension = node.selections[0];
    throwError("@".concat(NODEKIND_DIRECTIVE_MAP[node.kind]), node.loc, clientExtension && clientExtension.kind === 'ClientExtension' ? (_clientExtension$sele = clientExtension.selections[0]) === null || _clientExtension$sele === void 0 ? void 0 : _clientExtension$sele.loc : null);
  } // $FlowFixMe[incompatible-use]


  this.traverse(node, state);
}

function throwError(directiveName, directiveLoc, clientExtensionLoc) {
  throw createUserError("Unexpected directive: ".concat(directiveName, ". ") + 'This directive can only be used on fields/fragments that are ' + 'fetched from the server schema, but it is used ' + 'inside a client-only selection.', clientExtensionLoc == null || directiveLoc === clientExtensionLoc ? [directiveLoc] : [directiveLoc, clientExtensionLoc]);
}

module.exports = {
  transform: validateServerOnlyDirectives
};