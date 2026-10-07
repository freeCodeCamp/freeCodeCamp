import { didYouMean } from '../../jsutils/didYouMean.mjs';
import { suggestionList } from '../../jsutils/suggestionList.mjs';
import { GraphQLError } from '../../error/GraphQLError.mjs';
import {
  isTypeDefinitionNode,
  isTypeSystemDefinitionNode,
  isTypeSystemExtensionNode,
} from '../../language/predicates.mjs';
import { introspectionTypes } from '../../type/introspection.mjs';
import { specifiedScalarTypes } from '../../type/scalars.mjs';

/**
 * Known type names
 *
 * A GraphQL document is only valid if referenced types (specifically
 * variable definitions and fragment conditions) are defined by the type schema.
 *
 * See https://spec.graphql.org/draft/#sec-Fragment-Spread-Type-Existence
 */
export function KnownTypeNamesRule(context) {
  const schema = context.getSchema();
  const existingTypesMap = schema ? schema.getTypeMap() : Object.create(null);
  const definedTypes = Object.create(null);

  for (const def of context.getDocument().definitions) {
    if (isTypeDefinitionNode(def)) {
      definedTypes[def.name.value] = true;
    }
  }

  const typeNames = [
    ...Object.keys(existingTypesMap),
    ...Object.keys(definedTypes),
  ];
  return {
    NamedType(node, _1, parent, _2, ancestors) {
      const typeName = node.name.value;

      if (!existingTypesMap[typeName] && !definedTypes[typeName]) {
        var _ancestors$;

        const definitionNode =
          (_ancestors$ = ancestors[2]) !== null && _ancestors$ !== void 0
            ? _ancestors$
            : parent;
        const isSDL = definitionNode != null && isSDLNode(definitionNode);

        if (isSDL && standardTypeNames.includes(typeName)) {
          return;
        }

        const suggestedTypes = suggestionList(
          typeName,
          isSDL ? standardTypeNames.concat(typeNames) : typeNames,
        );
        context.reportError(
          new GraphQLError(
            `Unknown type "${typeName}".` + didYouMean(suggestedTypes),
            {
              nodes: node,
            },
          ),
        );
      }
    },
  };
}
const standardTypeNames = [...specifiedScalarTypes, ...introspectionTypes].map(
  (type) => type.name,
);

function isSDLNode(value) {
  return (
    'kind' in value &&
    (isTypeSystemDefinitionNode(value) || isTypeSystemExtensionNode(value))
  );
}
