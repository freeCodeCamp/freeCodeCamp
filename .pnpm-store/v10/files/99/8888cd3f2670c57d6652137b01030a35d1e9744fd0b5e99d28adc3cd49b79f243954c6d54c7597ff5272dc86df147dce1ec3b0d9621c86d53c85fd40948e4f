import { inspect } from '../../jsutils/inspect.mjs';
import { invariant } from '../../jsutils/invariant.mjs';
import { GraphQLError } from '../../error/GraphQLError.mjs';
import { OperationTypeNode } from '../../language/ast.mjs';
import { DirectiveLocation } from '../../language/directiveLocation.mjs';
import { Kind } from '../../language/kinds.mjs';
import { specifiedDirectives } from '../../type/directives.mjs';

/**
 * Known directives
 *
 * A GraphQL document is only valid if all `@directives` are known by the
 * schema and legally positioned.
 *
 * See https://spec.graphql.org/draft/#sec-Directives-Are-Defined
 */
export function KnownDirectivesRule(context) {
  const locationsMap = Object.create(null);
  const schema = context.getSchema();
  const definedDirectives = schema
    ? schema.getDirectives()
    : specifiedDirectives;

  for (const directive of definedDirectives) {
    locationsMap[directive.name] = directive.locations;
  }

  const astDefinitions = context.getDocument().definitions;

  for (const def of astDefinitions) {
    if (def.kind === Kind.DIRECTIVE_DEFINITION) {
      locationsMap[def.name.value] = def.locations.map((name) => name.value);
    }
  }

  return {
    Directive(node, _key, _parent, _path, ancestors) {
      const name = node.name.value;
      const locations = locationsMap[name];

      if (!locations) {
        context.reportError(
          new GraphQLError(`Unknown directive "@${name}".`, {
            nodes: node,
          }),
        );
        return;
      }

      const candidateLocation = getDirectiveLocationForASTPath(ancestors);

      if (candidateLocation && !locations.includes(candidateLocation)) {
        context.reportError(
          new GraphQLError(
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
  'kind' in appliedTo || invariant(false);

  switch (appliedTo.kind) {
    case Kind.OPERATION_DEFINITION:
      return getDirectiveLocationForOperation(appliedTo.operation);

    case Kind.FIELD:
      return DirectiveLocation.FIELD;

    case Kind.FRAGMENT_SPREAD:
      return DirectiveLocation.FRAGMENT_SPREAD;

    case Kind.INLINE_FRAGMENT:
      return DirectiveLocation.INLINE_FRAGMENT;

    case Kind.FRAGMENT_DEFINITION:
      return DirectiveLocation.FRAGMENT_DEFINITION;

    case Kind.VARIABLE_DEFINITION:
      return DirectiveLocation.VARIABLE_DEFINITION;

    case Kind.SCHEMA_DEFINITION:
    case Kind.SCHEMA_EXTENSION:
      return DirectiveLocation.SCHEMA;

    case Kind.SCALAR_TYPE_DEFINITION:
    case Kind.SCALAR_TYPE_EXTENSION:
      return DirectiveLocation.SCALAR;

    case Kind.OBJECT_TYPE_DEFINITION:
    case Kind.OBJECT_TYPE_EXTENSION:
      return DirectiveLocation.OBJECT;

    case Kind.FIELD_DEFINITION:
      return DirectiveLocation.FIELD_DEFINITION;

    case Kind.INTERFACE_TYPE_DEFINITION:
    case Kind.INTERFACE_TYPE_EXTENSION:
      return DirectiveLocation.INTERFACE;

    case Kind.UNION_TYPE_DEFINITION:
    case Kind.UNION_TYPE_EXTENSION:
      return DirectiveLocation.UNION;

    case Kind.ENUM_TYPE_DEFINITION:
    case Kind.ENUM_TYPE_EXTENSION:
      return DirectiveLocation.ENUM;

    case Kind.ENUM_VALUE_DEFINITION:
      return DirectiveLocation.ENUM_VALUE;

    case Kind.INPUT_OBJECT_TYPE_DEFINITION:
    case Kind.INPUT_OBJECT_TYPE_EXTENSION:
      return DirectiveLocation.INPUT_OBJECT;

    case Kind.INPUT_VALUE_DEFINITION: {
      const parentNode = ancestors[ancestors.length - 3];
      'kind' in parentNode || invariant(false);
      return parentNode.kind === Kind.INPUT_OBJECT_TYPE_DEFINITION
        ? DirectiveLocation.INPUT_FIELD_DEFINITION
        : DirectiveLocation.ARGUMENT_DEFINITION;
    }
    // Not reachable, all possible types have been considered.

    /* c8 ignore next */

    default:
      false || invariant(false, 'Unexpected kind: ' + inspect(appliedTo.kind));
  }
}

function getDirectiveLocationForOperation(operation) {
  switch (operation) {
    case OperationTypeNode.QUERY:
      return DirectiveLocation.QUERY;

    case OperationTypeNode.MUTATION:
      return DirectiveLocation.MUTATION;

    case OperationTypeNode.SUBSCRIPTION:
      return DirectiveLocation.SUBSCRIPTION;
  }
}
