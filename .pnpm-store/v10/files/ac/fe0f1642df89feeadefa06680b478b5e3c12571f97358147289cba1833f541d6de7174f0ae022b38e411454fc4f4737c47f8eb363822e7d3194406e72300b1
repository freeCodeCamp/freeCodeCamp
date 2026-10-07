'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.FragmentsOnCompositeTypesRule = FragmentsOnCompositeTypesRule;

var _GraphQLError = require('../../error/GraphQLError.js');

var _printer = require('../../language/printer.js');

var _definition = require('../../type/definition.js');

var _typeFromAST = require('../../utilities/typeFromAST.js');

/**
 * Fragments on composite type
 *
 * Fragments use a type condition to determine if they apply, since fragments
 * can only be spread into a composite type (object, interface, or union), the
 * type condition must also be a composite type.
 *
 * See https://spec.graphql.org/draft/#sec-Fragments-On-Composite-Types
 */
function FragmentsOnCompositeTypesRule(context) {
  return {
    InlineFragment(node) {
      const typeCondition = node.typeCondition;

      if (typeCondition) {
        const type = (0, _typeFromAST.typeFromAST)(
          context.getSchema(),
          typeCondition,
        );

        if (type && !(0, _definition.isCompositeType)(type)) {
          const typeStr = (0, _printer.print)(typeCondition);
          context.reportError(
            new _GraphQLError.GraphQLError(
              `Fragment cannot condition on non composite type "${typeStr}".`,
              {
                nodes: typeCondition,
              },
            ),
          );
        }
      }
    },

    FragmentDefinition(node) {
      const type = (0, _typeFromAST.typeFromAST)(
        context.getSchema(),
        node.typeCondition,
      );

      if (type && !(0, _definition.isCompositeType)(type)) {
        const typeStr = (0, _printer.print)(node.typeCondition);
        context.reportError(
          new _GraphQLError.GraphQLError(
            `Fragment "${node.name.value}" cannot condition on non composite type "${typeStr}".`,
            {
              nodes: node.typeCondition,
            },
          ),
        );
      }
    },
  };
}
