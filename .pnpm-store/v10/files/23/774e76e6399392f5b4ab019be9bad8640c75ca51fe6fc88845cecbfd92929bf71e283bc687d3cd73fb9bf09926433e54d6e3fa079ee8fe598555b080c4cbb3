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

var _require2 = require('../core/getFieldDefinition'),
    getFieldDefinitionStrict = _require2.getFieldDefinitionStrict;

/*
 * Validate required arguments are provided after transforms filling in arguments
 */
function validateRequiredArguments(context) {
  IRValidator.validate(context, {
    Directive: visitDirective,
    InlineFragment: visitInlineFragment,
    LinkedField: visitField,
    ScalarField: visitField // FragmentSpread validation is done in ApplyFragmentArgumentTransform

  }, function (node) {
    return {
      rootNode: node,
      parentType: node.type
    };
  });
  return context;
}

function visitDirective(node, _ref) {
  var rootNode = _ref.rootNode;
  // $FlowFixMe[incompatible-use]
  var context = this.getContext();
  var directiveDef = context.getSchema().getDirective(node.name);

  if (directiveDef == null) {
    return;
  }

  validateRequiredArgumentsOnNode(context.getSchema(), node, directiveDef.args, rootNode);
}

function visitInlineFragment(fragment, _ref2) {
  var rootNode = _ref2.rootNode;
  // $FlowFixMe[incompatible-use]
  this.traverse(fragment, {
    rootNode: rootNode,
    parentType: fragment.typeCondition
  });
}

function visitField(node, _ref3) {
  var parentType = _ref3.parentType,
      rootNode = _ref3.rootNode;
  // $FlowFixMe[incompatible-use]
  var context = this.getContext();
  var schema = context.getSchema();
  var definition = getFieldDefinitionStrict(schema, parentType, node.name);

  if (definition == null) {
    var isLegacyFatInterface = node.directives.some(function (directive) {
      return directive.name === 'fixme_fat_interface';
    });

    if (!isLegacyFatInterface) {
      throw createUserError("Unknown field '".concat(node.name, "' on type ") + "'".concat(schema.getTypeString(parentType), "'."), [node.loc]);
    }
  } else {
    validateRequiredArgumentsOnNode(schema, node, schema.getFieldConfig(definition).args, rootNode);
  } // $FlowFixMe[incompatible-use]


  this.traverse(node, {
    rootNode: rootNode,
    parentType: node.type
  });
}

function validateRequiredArgumentsOnNode(schema, node, definitionArgs, rootNode) {
  var nodeArgsSet = new Set(node.args.map(function (arg) {
    return arg.name;
  }));

  var _iterator = (0, _createForOfIteratorHelper2["default"])(definitionArgs),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var arg = _step.value;

      if (arg.defaultValue == null && schema.isNonNull(arg.type) && !nodeArgsSet.has(arg.name)) {
        throw createUserError("Required argument '".concat(arg.name, ": ").concat(schema.getTypeString(arg.type), "' ") + "is missing on '".concat(node.name, "' in '").concat(rootNode.name, "'."), [node.loc, rootNode.loc]);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

module.exports = {
  transform: validateRequiredArguments
};