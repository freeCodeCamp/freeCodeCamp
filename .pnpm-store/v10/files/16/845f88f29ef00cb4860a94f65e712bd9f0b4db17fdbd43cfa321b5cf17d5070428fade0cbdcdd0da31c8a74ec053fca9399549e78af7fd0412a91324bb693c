'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.KnownDirectivesRule = KnownDirectivesRule;

var _inspect = require('../../jsutils/inspect.js');

var _invariant = require('../../jsutils/invariant.js');

var _GraphQLError = require('../../error/GraphQLError.js');

var _ast = require('../../language/ast.js');

var _directiveLocation = require('../../language/directiveLocation.js');

var _kinds = require('../../language/kinds.js');

var _directives = require('../../type/directives.js');

/**
 * Known directives
 *
 * A GraphQL document is only valid if all `@directives` are known by the
 * schema and legally positioned.
 *
 * See https://spec.graphql.org/draft/#sec-Directives-Are-Defined
 */
function KnownDirectivesRule(context) {
  const locationsMap = Object.create(null);
  const schema = context.getSchema();
  const definedDirectives = schema
    ? schema.getDirectives()
    : _directives.specifiedDirectives;

  for (const directive of definedDirectives) {
    locationsMap[directive.name] = directive.locations;
  }

  const astDefinitions = context.getDocument().definitions;

  for (const def of astDefinitions) {
    if (def.kind === _kinds.Kind.DIRECTIVE_DEFINITION) {
      locationsMap[def.name.value] = def.locations.map((name) => name.value);
    }
  }

  return {
    Directive(node, _key, _parent, _path, ancestors) {
      const name = node.name.value;
      const locations = locationsMap[name];

      if (!locations) {
        context.reportError(
          new _GraphQLError.GraphQLError(`Unknown directive "@${name}".`, {
            nodes: node,
          }),
        );
        return;
      }

      const candidateLocation = getDirectiveLocationForASTPath(ancestors);

      if (candidateLocation && !locations.includes(candidateLocation)) {
        context.reportError(
          new _GraphQLError.GraphQLError(
            `Directive "@${name}" may not be used on ${candidateLocation}.`,
            {
              nodes: node,
            },
          ),
        );
      }
    },
  };
}

function getDirectiveLocationForASTPath(ancestors) {
  const appliedTo = ancestors[ancestors.length - 1];
  'kind' in appliedTo || (0, _invariant.invariant)(false);

  switch (appliedTo.kind) {
    case _kinds.Kind.OPERATION_DEFINITION:
      return getDirectiveLocationForOperation(appliedTo.operation);

    case _kinds.Kind.FIELD:
      return _directiveLocation.DirectiveLocation.FIELD;

    case _kinds.Kind.FRAGMENT_SPREAD:
      return _directiveLocation.DirectiveLocation.FRAGMENT_SPREAD;

    case _kinds.Kind.INLINE_FRAGMENT:
      return _directiveLocation.DirectiveLocation.INLINE_FRAGMENT;

    case _kinds.Kind.FRAGMENT_DEFINITION:
      return _directiveLocation.DirectiveLocation.FRAGMENT_DEFINITION;

    case _kinds.Kind.VARIABLE_DEFINITION:
      return _directiveLocation.DirectiveLocation.VARIABLE_DEFINITION;

    case _kinds.Kind.SCHEMA_DEFINITION:
    case _kinds.Kind.SCHEMA_EXTENSION:
      return _directiveLocation.DirectiveLocation.SCHEMA;

    case _kinds.Kind.SCALAR_TYPE_DEFINITION:
    case _kinds.Kind.SCALAR_TYPE_EXTENSION:
      return _directiveLocation.DirectiveLocation.SCALAR;

    case _kinds.Kind.OBJECT_TYPE_DEFINITION:
    case _kinds.Kind.OBJECT_TYPE_EXTENSION:
      return _directiveLocation.DirectiveLocation.OBJECT;

    case _kinds.Kind.FIELD_DEFINITION:
      return _directiveLocation.DirectiveLocation.FIELD_DEFINITION;

    case _kinds.Kind.INTERFACE_TYPE_DEFINITION:
    case _kinds.Kind.INTERFACE_TYPE_EXTENSION:
      return _directiveLocation.DirectiveLocation.INTERFACE;

    case _kinds.Kind.UNION_TYPE_DEFINITION:
    case _kinds.Kind.UNION_TYPE_EXTENSION:
      return _directiveLocation.DirectiveLocation.UNION;

    case _kinds.Kind.ENUM_TYPE_DEFINITION:
    case _kinds.Kind.ENUM_TYPE_EXTENSION:
      return _directiveLocation.DirectiveLocation.ENUM;

    case _kinds.Kind.ENUM_VALUE_DEFINITION:
      return _directiveLocation.DirectiveLocation.ENUM_VALUE;

    case _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION:
    case _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION:
      return _directiveLocation.DirectiveLocation.INPUT_OBJECT;

    case _kinds.Kind.INPUT_VALUE_DEFINITION: {
      const parentNode = ancestors[ancestors.length - 3];
      'kind' in parentNode || (0, _invariant.invariant)(false);
      return parentNode.kind === _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION
        ? _directiveLocation.DirectiveLocation.INPUT_FIELD_DEFINITION
        : _directiveLocation.DirectiveLocation.ARGUMENT_DEFINITION;
    }
    // Not reachable, all possible types have been considered.

    /* c8 ignore next */

    default:
      false ||
        (0, _invariant.invariant)(
          false,
          'Unexpected kind: ' + (0, _inspect.inspect)(appliedTo.kind),
        );
  }
}

function getDirectiveLocationForOperation(operation) {
  switch (operation) {
    case _ast.OperationTypeNode.QUERY:
      return _directiveLocation.DirectiveLocation.QUERY;

    case _ast.OperationTypeNode.MUTATION:
      return _directiveLocation.DirectiveLocation.MUTATION;

    case _ast.OperationTypeNode.SUBSCRIPTION:
      return _directiveLocation.DirectiveLocation.SUBSCRIPTION;
  }
}
