import { hasOwnProperty } from './jsutils.js';
import { valueFromAST, isNonNullType, Kind, print, } from 'graphql';
import { createGraphQLError } from './errors.js';
import { inspect } from './inspect.js';
/**
 * Prepares an object map of argument values given a list of argument
 * definitions and list of argument AST nodes.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */
export function getArgumentValues(def, node, variableValues = {}) {
    var _a;
    const coercedValues = {};
    const argumentNodes = (_a = node.arguments) !== null && _a !== void 0 ? _a : [];
    const argNodeMap = argumentNodes.reduce((prev, arg) => ({
        ...prev,
        [arg.name.value]: arg,
    }), {});
    for (const { name, type: argType, defaultValue } of def.args) {
        const argumentNode = argNodeMap[name];
        if (!argumentNode) {
            if (defaultValue !== undefined) {
                coercedValues[name] = defaultValue;
            }
            else if (isNonNullType(argType)) {
                throw createGraphQLError(`Argument "${name}" of required type "${inspect(argType)}" ` + 'was not provided.', {
                    nodes: [node],
                });
            }
            continue;
        }
        const valueNode = argumentNode.value;
        let isNull = valueNode.kind === Kind.NULL;
        if (valueNode.kind === Kind.VARIABLE) {
            const variableName = valueNode.name.value;
            if (variableValues == null || !hasOwnProperty(variableValues, variableName)) {
                if (defaultValue !== undefined) {
                    coercedValues[name] = defaultValue;
                }
                else if (isNonNullType(argType)) {
                    throw createGraphQLError(`Argument "${name}" of required type "${inspect(argType)}" ` +
                        `was provided the variable "$${variableName}" which was not provided a runtime value.`, {
                        nodes: [valueNode],
                    });
                }
                continue;
            }
            isNull = variableValues[variableName] == null;
        }
        if (isNull && isNonNullType(argType)) {
            throw createGraphQLError(`Argument "${name}" of non-null type "${inspect(argType)}" ` + 'must not be null.', {
                nodes: [valueNode],
            });
        }
        const coercedValue = valueFromAST(valueNode, argType, variableValues);
        if (coercedValue === undefined) {
            // Note: ValuesOfCorrectTypeRule validation should catch this before
            // execution. This is a runtime check to ensure execution does not
            // continue with an invalid argument value.
            throw createGraphQLError(`Argument "${name}" has invalid value ${print(valueNode)}.`, {
                nodes: [valueNode],
            });
        }
        coercedValues[name] = coercedValue;
    }
    return coercedValues;
}
