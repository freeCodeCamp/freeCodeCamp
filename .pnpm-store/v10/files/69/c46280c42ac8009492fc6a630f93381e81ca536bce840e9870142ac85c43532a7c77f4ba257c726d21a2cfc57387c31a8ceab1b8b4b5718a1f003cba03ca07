'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.VariablesAreInputTypesRule = VariablesAreInputTypesRule;

var _GraphQLError = require('../../error/GraphQLError.js');

var _printer = require('../../language/printer.js');

var _definition = require('../../type/definition.js');

var _typeFromAST = require('../../utilities/typeFromAST.js');

/**
 * Variables are input types
 *
 * A GraphQL operation is only valid if all the variables it defines are of
 * input types (scalar, enum, or input object).
 *
 * See https://spec.graphql.org/draft/#sec-Variables-Are-Input-Types
 */
function VariablesAreInputTypesRule(context) {
  return {
    VariableDefinition(node) {
      const type = (0, _typeFromAST.typeFromAST)(
        context.getSchema(),
        node.type,
      );

      if (type !== undefined && !(0, _definition.isInputType)(type)) {
        const variableName = node.variable.name.value;
        const typeName = (0, _printer.print)(node.type);
        context.reportError(
          new _GraphQLError.GraphQLError(
            `Variable "$${variableName}" cannot be non-input type "${typeName}".`,
            {
              nodes: node.type,
            },
          ),
        );
      }
    },
  };
}
