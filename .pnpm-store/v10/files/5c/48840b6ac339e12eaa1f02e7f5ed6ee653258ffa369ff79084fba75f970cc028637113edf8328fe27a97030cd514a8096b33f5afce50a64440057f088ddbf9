import { didYouMean } from '../../jsutils/didYouMean.mjs';
import { inspect } from '../../jsutils/inspect.mjs';
import { keyMap } from '../../jsutils/keyMap.mjs';
import { suggestionList } from '../../jsutils/suggestionList.mjs';
import { GraphQLError } from '../../error/GraphQLError.mjs';
import { Kind } from '../../language/kinds.mjs';
import { print } from '../../language/printer.mjs';
import {
  getNamedType,
  getNullableType,
  isInputObjectType,
  isLeafType,
  isListType,
  isNonNullType,
  isRequiredInputField,
} from '../../type/definition.mjs';

/**
 * Value literals of correct type
 *
 * A GraphQL document is only valid if all value literals are of the type
 * expected at their position.
 *
 * See https://spec.graphql.org/draft/#sec-Values-of-Correct-Type
 */
export function ValuesOfCorrectTypeRule(context) {
  return {
    ListValue(node) {
      // Note: TypeInfo will traverse into a list's item type, so look to the
      // parent input type to check if it is a list.
      const type = getNullableType(context.getParentInputType());

      if (!isListType(type)) {
        isValidValueNode(context, node);
        return false; // Don't traverse further.
      }
    },

    ObjectValue(node) {
      const type = getNamedType(context.getInputType());

      if (!isInputObjectType(type)) {
        isValidValueNode(context, node);
        return false; // Don't traverse further.
      } // Ensure every required field exists.

      const fieldNodeMap = keyMap(node.fields, (field) => field.name.value);

      for (const fieldDef of Object.values(type.getFields())) {
        const fieldNode = fieldNodeMap[fieldDef.name];

        if (!fieldNode && isRequiredInputField(fieldDef)) {
          const typeStr = inspect(fieldDef.type);
          context.reportError(
            new GraphQLError(
              `Field "${type.name}.${fieldDef.name}" of required type "${typeStr}" was not provided.`,
              {
                nodes: node,
              },
            ),
          );
        }
      }

      if (type.isOneOf) {
        validateOneOfInputObject(context, node, type, fieldNodeMap);
      }
    },

    ObjectField(node) {
      const parentType = getNamedType(context.getParentInputType());
      const fieldType = context.getInputType();

      if (!fieldType && isInputObjectType(parentType)) {
        const suggestions = suggestionList(
          node.name.value,
          Object.keys(parentType.getFields()),
        );
        context.reportError(
          new GraphQLError(
            `Field "${node.name.value}" is not defined by type "${parentType.name}".` +
              didYouMean(suggestions),
            {
              nodes: node,
            },
          ),
        );
      }
    },

    NullValue(node) {
      const type = context.getInputType();

      if (isNonNullType(type)) {
        context.reportError(
          new GraphQLError(
            `Expected value of type "${inspect(type)}", found ${print(node)}.`,
            {
              nodes: node,
            },
          ),
        );
      }
    },

    EnumValue: (node) => isValidValueNode(context, node),
    IntValue: (node) => isValidValueNode(context, node),
    FloatValue: (node) => isValidValueNode(context, node),
    // Descriptions are string values that would not validate according
    // to the below logic, but since (per the specification) descriptions must
    // not affect validation, they are ignored entirely when visiting the AST
    // and do not require special handling.
    // See https://spec.graphql.org/draft/#sec-Descriptions
    StringValue: (node) => isValidValueNode(context, node),
    BooleanValue: (node) => isValidValueNode(context, node),
  };
}
/**
 * Any value literal may be a valid representation of a Scalar, depending on
 * that scalar type.
 */

function isValidValueNode(context, node) {
  // Report any error at the full type expected by the location.
  const locationType = context.getInputType();

  if (!locationType) {
    return;
  }

  const type = getNamedType(locationType);

  if (!isLeafType(type)) {
    const typeStr = inspect(locationType);
    context.reportError(
      new GraphQLError(
        `Expected value of type "${typeStr}", found ${print(node)}.`,
        {
          nodes: node,
        },
      ),
    );
    return;
  } // Scalars and Enums determine if a literal value is valid via parseLiteral(),
  // which may throw or return an invalid value to indicate failure.

  try {
    const parseResult = type.parseLiteral(
      node,
      undefined,
      /* variables */
    );

    if (parseResult === undefined) {
      const typeStr = inspect(locationType);
      context.reportError(
        new GraphQLError(
          `Expected value of type "${typeStr}", found ${print(node)}.`,
          {
            nodes: node,
          },
        ),
      );
    }
  } catch (error) {
    const typeStr = inspect(locationType);

    if (error instanceof GraphQLError) {
      context.reportError(error);
    } else {
      context.reportError(
        new GraphQLError(
          `Expected value of type "${typeStr}", found ${print(node)}; ` +
            error.message,
          {
            nodes: node,
            originalError: error,
          },
        ),
      );
    }
  }
}

function validateOneOfInputObject(context, node, type, fieldNodeMap) {
  var _fieldNodeMap$keys$;

  const keys = Object.keys(fieldNodeMap);
  const isNotExactlyOneField = keys.length !== 1;

  if (isNotExactlyOneField) {
    context.reportError(
      new GraphQLError(
        `OneOf Input Object "${type.name}" must specify exactly one key.`,
        {
          nodes: [node],
        },
      ),
    );
    return;
  }

  const value =
    (_fieldNodeMap$keys$ = fieldNodeMap[keys[0]]) === null ||
    _fieldNodeMap$keys$ === void 0
      ? void 0
      : _fieldNodeMap$keys$.value;
  const isNullLiteral = !value || value.kind === Kind.NULL;

  if (isNullLiteral) {
    context.reportError(
      new GraphQLError(`Field "${type.name}.${keys[0]}" must be non-null.`, {
        nodes: [node],
      }),
    );
  }
}
