'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.UniqueDirectivesPerLocationRule = UniqueDirectivesPerLocationRule;

var _GraphQLError = require('../../error/GraphQLError.js');

var _kinds = require('../../language/kinds.js');

var _predicates = require('../../language/predicates.js');

var _directives = require('../../type/directives.js');

/**
 * Unique directive names per location
 *
 * A GraphQL document is only valid if all non-repeatable directives at
 * a given location are uniquely named.
 *
 * See https://spec.graphql.org/draft/#sec-Directives-Are-Unique-Per-Location
 */
function UniqueDirectivesPerLocationRule(context) {
  const uniqueDirectiveMap = Object.create(null);
  const schema = context.getSchema();
  const definedDirectives = schema
    ? schema.getDirectives()
    : _directives.specifiedDirectives;

  for (const directive of definedDirectives) {
    uniqueDirectiveMap[directive.name] = !directive.isRepeatable;
  }

  const astDefinitions = context.getDocument().definitions;

  for (const def of astDefinitions) {
    if (def.kind === _kinds.Kind.DIRECTIVE_DEFINITION) {
      uniqueDirectiveMap[def.name.value] = !def.repeatable;
    }
  }

  const schemaDirectives = Object.create(null);
  const typeDirectivesMap = Object.create(null);
  return {
    // Many different AST nodes may contain directives. Rather than listing
    // them all, just listen for entering any node, and check to see if it
    // defines any directives.
    enter(node) {
      if (!('directives' in node) || !node.directives) {
        return;
      }

      let seenDirectives;

      if (
        node.kind === _kinds.Kind.SCHEMA_DEFINITION ||
        node.kind === _kinds.Kind.SCHEMA_EXTENSION
      ) {
        seenDirectives = schemaDirectives;
      } else if (
        (0, _predicates.isTypeDefinitionNode)(node) ||
        (0, _predicates.isTypeExtensionNode)(node)
      ) {
        const typeName = node.name.value;
        seenDirectives = typeDirectivesMap[typeName];

        if (seenDirectives === undefined) {
          typeDirectivesMap[typeName] = seenDirectives = Object.create(null);
        }
      } else {
        seenDirectives = Object.create(null);
      }

      for (const directive of node.directives) {
        const directiveName = directive.name.value;

        if (uniqueDirectiveMap[directiveName]) {
          if (seenDirectives[directiveName]) {
            context.reportError(
              new _GraphQLError.GraphQLError(
                `The directive "@${directiveName}" can only be used once at this location.`,
                {
                  nodes: [seenDirectives[directiveName], directive],
                },
              ),
            );
          } else {
            seenDirectives[directiveName] = directive;
          }
        }
      }
    },
  };
}
