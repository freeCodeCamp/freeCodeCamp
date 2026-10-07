'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.NoDeprecatedCustomRule = NoDeprecatedCustomRule;

var _invariant = require('../../../jsutils/invariant.js');

var _GraphQLError = require('../../../error/GraphQLError.js');

var _definition = require('../../../type/definition.js');

/**
 * No deprecated
 *
 * A GraphQL document is only valid if all selected fields and all used enum values have not been
 * deprecated.
 *
 * Note: This rule is optional and is not part of the Validation section of the GraphQL
 * Specification. The main purpose of this rule is detection of deprecated usages and not
 * necessarily to forbid their use when querying a service.
 */
function NoDeprecatedCustomRule(context) {
  return {
    Field(node) {
      const fieldDef = context.getFieldDef();
      const deprecationReason =
        fieldDef === null || fieldDef === void 0
          ? void 0
          : fieldDef.deprecationReason;

      if (fieldDef && deprecationReason != null) {
        const parentType = context.getParentType();
        parentType != null || (0, _invariant.invariant)(false);
        context.reportError(
          new _GraphQLError.GraphQLError(
            `The field ${parentType.name}.${fieldDef.name} is deprecated. ${deprecationReason}`,
            {
              nodes: node,
            },
          ),
        );
      }
    },

    Argument(node) {
      const argDef = context.getArgument();
      const deprecationReason =
        argDef === null || argDef === void 0
          ? void 0
          : argDef.deprecationReason;

      if (argDef && deprecationReason != null) {
        const directiveDef = context.getDirective();

        if (directiveDef != null) {
          context.reportError(
            new _GraphQLError.GraphQLError(
              `Directive "@${directiveDef.name}" argument "${argDef.name}" is deprecated. ${deprecationReason}`,
              {
                nodes: node,
              },
            ),
          );
        } else {
          const parentType = context.getParentType();
          const fieldDef = context.getFieldDef();
          (parentType != null && fieldDef != null) ||
            (0, _invariant.invariant)(false);
          context.reportError(
            new _GraphQLError.GraphQLError(
              `Field "${parentType.name}.${fieldDef.name}" argument "${argDef.name}" is deprecated. ${deprecationReason}`,
              {
                nodes: node,
              },
            ),
          );
        }
      }
    },

    ObjectField(node) {
      const inputObjectDef = (0, _definition.getNamedType)(
        context.getParentInputType(),
      );

      if ((0, _definition.isInputObjectType)(inputObjectDef)) {
        const inputFieldDef = inputObjectDef.getFields()[node.name.value];
        const deprecationReason =
          inputFieldDef === null || inputFieldDef === void 0
            ? void 0
            : inputFieldDef.deprecationReason;

        if (deprecationReason != null) {
          context.reportError(
            new _GraphQLError.GraphQLError(
              `The input field ${inputObjectDef.name}.${inputFieldDef.name} is deprecated. ${deprecationReason}`,
              {
                nodes: node,
              },
            ),
          );
        }
      }
    },

    EnumValue(node) {
      const enumValueDef = context.getEnumValue();
      const deprecationReason =
        enumValueDef === null || enumValueDef === void 0
          ? void 0
          : enumValueDef.deprecationReason;

      if (enumValueDef && deprecationReason != null) {
        const enumTypeDef = (0, _definition.getNamedType)(
          context.getInputType(),
        );
        enumTypeDef != null || (0, _invariant.invariant)(false);
        context.reportError(
          new _GraphQLError.GraphQLError(
            `The enum value "${enumTypeDef.name}.${enumValueDef.name}" is deprecated. ${deprecationReason}`,
            {
              nodes: node,
            },
          ),
        );
      }
    },
  };
}
