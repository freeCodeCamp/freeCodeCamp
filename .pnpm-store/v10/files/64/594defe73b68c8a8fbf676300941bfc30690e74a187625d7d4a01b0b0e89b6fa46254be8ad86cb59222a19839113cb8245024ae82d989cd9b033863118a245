'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.KnownArgumentNamesOnDirectivesRule = KnownArgumentNamesOnDirectivesRule;
exports.KnownArgumentNamesRule = KnownArgumentNamesRule;

var _didYouMean = require('../../jsutils/didYouMean.js');

var _suggestionList = require('../../jsutils/suggestionList.js');

var _GraphQLError = require('../../error/GraphQLError.js');

var _kinds = require('../../language/kinds.js');

var _directives = require('../../type/directives.js');

/**
 * Known argument names
 *
 * A GraphQL field is only valid if all supplied arguments are defined by
 * that field.
 *
 * See https://spec.graphql.org/draft/#sec-Argument-Names
 * See https://spec.graphql.org/draft/#sec-Directives-Are-In-Valid-Locations
 */
function KnownArgumentNamesRule(context) {
  return {
    // eslint-disable-next-line new-cap
    ...KnownArgumentNamesOnDirectivesRule(context),

    Argument(argNode) {
      const argDef = context.getArgument();
      const fieldDef = context.getFieldDef();
      const parentType = context.getParentType();

      if (!argDef && fieldDef && parentType) {
        const argName = argNode.name.value;
        const knownArgsNames = fieldDef.args.map((arg) => arg.name);
        const suggestions = (0, _suggestionList.suggestionList)(
          argName,
          knownArgsNames,
        );
        context.reportError(
          new _GraphQLError.GraphQLError(
            `Unknown argument "${argName}" on field "${parentType.name}.${fieldDef.name}".` +
              (0, _didYouMean.didYouMean)(suggestions),
            {
              nodes: argNode,
            },
          ),
        );
      }
    },
  };
}
/**
 * @internal
 */

function KnownArgumentNamesOnDirectivesRule(context) {
  const directiveArgs = Object.create(null);
  const schema = context.getSchema();
  const definedDirectives = schema
    ? schema.getDirectives()
    : _directives.specifiedDirectives;

  for (const directive of definedDirectives) {
    directiveArgs[directive.name] = directive.args.map((arg) => arg.name);
  }

  const astDefinitions = context.getDocument().definitions;

  for (const def of astDefinitions) {
    if (def.kind === _kinds.Kind.DIRECTIVE_DEFINITION) {
      var _def$arguments;

      // FIXME: https://github.com/graphql/graphql-js/issues/2203

      /* c8 ignore next */
      const argsNodes =
        (_def$arguments = def.arguments) !== null && _def$arguments !== void 0
          ? _def$arguments
          : [];
      directiveArgs[def.name.value] = argsNodes.map((arg) => arg.name.value);
    }
  }

  return {
    Directive(directiveNode) {
      const directiveName = directiveNode.name.value;
      const knownArgs = directiveArgs[directiveName];

      if (directiveNode.arguments && knownArgs) {
        for (const argNode of directiveNode.arguments) {
          const argName = argNode.name.value;

          if (!knownArgs.includes(argName)) {
            const suggestions = (0, _suggestionList.suggestionList)(
              argName,
              knownArgs,
            );
            context.reportError(
              new _GraphQLError.GraphQLError(
                `Unknown argument "${argName}" on directive "@${directiveName}".` +
                  (0, _didYouMean.didYouMean)(suggestions),
                {
                  nodes: argNode,
                },
              ),
            );
          }
        }
      }

      return false;
    },
  };
}
