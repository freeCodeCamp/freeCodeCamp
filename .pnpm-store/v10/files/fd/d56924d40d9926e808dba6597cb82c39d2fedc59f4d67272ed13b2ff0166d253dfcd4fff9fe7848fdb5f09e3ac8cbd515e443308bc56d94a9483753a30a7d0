'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.KnownTypeNamesRule = KnownTypeNamesRule;

var _didYouMean = require('../../jsutils/didYouMean.js');

var _suggestionList = require('../../jsutils/suggestionList.js');

var _GraphQLError = require('../../error/GraphQLError.js');

var _predicates = require('../../language/predicates.js');

var _introspection = require('../../type/introspection.js');

var _scalars = require('../../type/scalars.js');

/**
 * Known type names
 *
 * A GraphQL document is only valid if referenced types (specifically
 * variable definitions and fragment conditions) are defined by the type schema.
 *
 * See https://spec.graphql.org/draft/#sec-Fragment-Spread-Type-Existence
 */
function KnownTypeNamesRule(context) {
  const schema = context.getSchema();
  const existingTypesMap = schema ? schema.getTypeMap() : Object.create(null);
  const definedTypes = Object.create(null);

  for (const def of context.getDocument().definitions) {
    if ((0, _predicates.isTypeDefinitionNode)(def)) {
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

        const suggestedTypes = (0, _suggestionList.suggestionList)(
          typeName,
          isSDL ? standardTypeNames.concat(typeNames) : typeNames,
        );
        context.reportError(
          new _GraphQLError.GraphQLError(
            `Unknown type "${typeName}".` +
              (0, _didYouMean.didYouMean)(suggestedTypes),
            {
              nodes: node,
            },
          ),
        );
      }
    },
  };
}

const standardTypeNames = [
  ..._scalars.specifiedScalarTypes,
  ..._introspection.introspectionTypes,
].map((type) => type.name);

function isSDLNode(value) {
  return (
    'kind' in value &&
    ((0, _predicates.isTypeSystemDefinitionNode)(value) ||
      (0, _predicates.isTypeSystemExtensionNode)(value))
  );
}
