import { inspect } from '../jsutils/inspect.mjs';
import { keyMap } from '../jsutils/keyMap.mjs';
import { printPathArray } from '../jsutils/printPathArray.mjs';
import { GraphQLError } from '../error/GraphQLError.mjs';
import { Kind } from '../language/kinds.mjs';
import { print } from '../language/printer.mjs';
import { isInputType, isNonNullType } from '../type/definition.mjs';
import { coerceInputValue } from '../utilities/coerceInputValue.mjs';
import { typeFromAST } from '../utilities/typeFromAST.mjs';
import { valueFromAST } from '../utilities/valueFromAST.mjs';

/**
 * Prepares an object map of variableValues of the correct type based on the
 * provided variable definitions and arbitrary input. If the input cannot be
 * parsed to match the variable definitions, a GraphQLError will be thrown.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */
export function getVariableValues(schema, varDefNodes, inputs, options) {
  const errors = [];
  const maxErrors =
    options === null || options === void 0 ? void 0 : options.maxErrors;

  try {
    const coerced = coerceVariableValues(
      schema,
      varDefNodes,
      inputs,
      (error) => {
        if (maxErrors != null && errors.length >= maxErrors) {
          throw new GraphQLError(
            'Too many errors processing variables, error limit reached. Execution aborted.',
          );
        }

        errors.push(error);
      },
    );

    if (errors.length === 0) {
      return {
        coerced,
      };
    }
  } catch (error) {
    errors.push(error);
  }

  return {
    errors,
  };
}

function coerceVariableValues(schema, varDefNodes, inputs, onError) {
  const coercedValues = Object.create(null);

  for (const varDefNode of varDefNodes) {
    const varName = varDefNode.variable.name.value;
    const varType = typeFromAST(schema, varDefNode.type);

    if (!isInputType(varType)) {
      // Must use input types for variables. This should be caught during
      // validation, however is checked again here for safety.
      const varTypeStr = print(varDefNode.type);
      onError(
        new GraphQLError(
          `Variable "$${varName}" expected value of type "${varTypeStr}" which cannot be used as an input type.`,
          {
            nodes: varDefNode.type,
          },
        ),
      );
      continue;
    }

    if (!hasOwnProperty(inputs, varName)) {
      if (varDefNode.defaultValue) {
        coercedValues[varName] = valueFromAST(varDefNode.defaultValue, varType);
      } else if (isNonNullType(varType)) {
        const varTypeStr = inspect(varType);
        onError(
          new GraphQLError(
            `Variable "$${varName}" of required type "${varTypeStr}" was not provided.`,
            {
              nodes: varDefNode,
            },
          ),
        );
      }

      continue;
    }

    const value = inputs[varName];

    if (value === null && isNonNullType(varType)) {
      const varTypeStr = inspect(varType);
      onError(
        new GraphQLError(
          `Variable "$${varName}" of non-null type "${varTypeStr}" must not be null.`,
          {
            nodes: varDefNode,
          },
        ),
      );
      continue;
    }

    coercedValues[varName] = coerceInputValue(
      value,
      varType,
      (path, invalidValue, error) => {
        let prefix =
          `Variable "$${varName}" got invalid value ` + inspect(invalidValue);

        if (path.length > 0) {
          prefix += ` at "${varName}${printPathArray(path)}"`;
        }

        onError(
          new GraphQLError(prefix + '; ' + error.message, {
            nodes: varDefNode,
            originalError: error,
          }),
        );
      },
    );
  }

  return { ...coercedValues };
}
/**
 * Prepares an object map of argument values given a list of argument
 * definitions and list of argument AST nodes.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */

export function getArgumentValues(def, node, variableValues) {
  var _node$arguments;

  const coercedValues = Object.create(null); // FIXME: https://github.com/graphql/graphql-js/issues/2203

  /* c8 ignore next */

  const argumentNodes =
    (_node$arguments = node.arguments) !== null && _node$arguments !== void 0
      ? _node$arguments
      : [];
  const argNodeMap = keyMap(argumentNodes, (arg) => arg.name.value);

  for (const argDef of def.args) {
    const name = argDef.name;
    const argType = argDef.type;
    const argumentNode = argNodeMap[name];

    if (!argumentNode) {
      if (argDef.defaultValue !== undefined) {
        coercedValues[name] = argDef.defaultValue;
      } else if (isNonNullType(argType)) {
        throw new GraphQLError(
          `Argument "${name}" of required type "${inspect(argType)}" ` +
            'was not provided.',
          {
            nodes: node,
          },
        );
      }

      continue;
    }

    const valueNode = argumentNode.value;
    let isNull = valueNode.kind === Kind.NULL;

    if (valueNode.kind === Kind.VARIABLE) {
      const variableName = valueNode.name.value;

      if (
        variableValues == null ||
        !hasOwnProperty(variableValues, variableName)
      ) {
        if (argDef.defaultValue !== undefined) {
          coercedValues[name] = argDef.defaultValue;
        } else if (isNonNullType(argType)) {
          throw new GraphQLError(
            `Argument "${name}" of required type "${inspect(argType)}" ` +
              `was provided the variable "$${variableName}" which was not provided a runtime value.`,
            {
              nodes: valueNode,
            },
          );
        }

        continue;
      }

      isNull = variableValues[variableName] == null;
    }

    if (isNull && isNonNullType(argType)) {
      throw new GraphQLError(
        `Argument "${name}" of non-null type "${inspect(argType)}" ` +
          'must not be null.',
        {
          nodes: valueNode,
        },
      );
    }

    const coercedValue = valueFromAST(valueNode, argType, variableValues);

    if (coercedValue === undefined) {
      // Note: ValuesOfCorrectTypeRule validation should catch this before
      // execution. This is a runtime check to ensure execution does not
      // continue with an invalid argument value.
      throw new GraphQLError(
        `Argument "${name}" has invalid value ${print(valueNode)}.`,
        {
          nodes: valueNode,
        },
      );
    }

    coercedValues[name] = coercedValue;
  }

  return { ...coercedValues };
}
/**
 * Prepares an object map of argument values given a directive definition
 * and a AST node which may contain directives. Optionally also accepts a map
 * of variable values.
 *
 * If the directive does not exist on the node, returns undefined.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */

export function getDirectiveValues(directiveDef, node, variableValues) {
  var _node$directives;

  const directiveNode =
    (_node$directives = node.directives) === null || _node$directives === void 0
      ? void 0
      : _node$directives.find(
          (directive) => directive.name.value === directiveDef.name,
        );

  if (directiveNode) {
    return getArgumentValues(directiveDef, directiveNode, variableValues);
  }
}

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
