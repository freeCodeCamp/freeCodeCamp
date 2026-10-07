import { GraphQLError } from '../../error/GraphQLError.mjs';

/**
 * Lone Schema definition
 *
 * A GraphQL document is only valid if it contains only one schema definition.
 */
export function LoneSchemaDefinitionRule(context) {
  var _ref, _ref2, _oldSchema$astNode;

  const oldSchema = context.getSchema();
  const alreadyDefined =
    (_ref =
      (_ref2 =
        (_oldSchema$astNode =
          oldSchema === null || oldSchema === void 0
            ? void 0
            : oldSchema.astNode) !== null && _oldSchema$astNode !== void 0
          ? _oldSchema$astNode
          : oldSchema === null || oldSchema === void 0
          ? void 0
          : oldSchema.getQueryType()) !== null && _ref2 !== void 0
        ? _ref2
        : oldSchema === null || oldSchema === void 0
        ? void 0
        : oldSchema.getMutationType()) !== null && _ref !== void 0
      ? _ref
      : oldSchema === null || oldSchema === void 0
      ? void 0
      : oldSchema.getSubscriptionType();
  let schemaDefinitionsCount = 0;
  return {
    SchemaDefinition(node) {
      if (alreadyDefined) {
        context.reportError(
          new GraphQLError(
            'Cannot define a new schema within a schema extension.',
            {
              nodes: node,
            },
          ),
        );
        return;
      }

      if (schemaDefinitionsCount > 0) {
        context.reportError(
          new GraphQLError('Must provide only one schema definition.', {
            nodes: node,
          }),
        );
      }

      ++schemaDefinitionsCount;
    },
  };
}
