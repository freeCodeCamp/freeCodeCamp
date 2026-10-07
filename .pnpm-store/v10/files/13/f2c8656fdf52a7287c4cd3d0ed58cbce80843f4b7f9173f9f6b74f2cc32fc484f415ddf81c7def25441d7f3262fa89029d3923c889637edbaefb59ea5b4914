"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArgumentValues = void 0;
const jsutils_js_1 = require("./jsutils.js");
const graphql_1 = require("graphql");
const errors_js_1 = require("./errors.js");
const inspect_js_1 = require("./inspect.js");
/**
 * Prepares an object map of argument values given a list of argument
 * definitions and list of argument AST nodes.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */
function getArgumentValues(def, node, variableValues = {}) {
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
            else if ((0, graphql_1.isNonNullType)(argType)) {
                throw (0, errors_js_1.createGraphQLError)(`Argument "${name}" of required type "${(0, inspect_js_1.inspect)(argType)}" ` + 'was not provided.', {
                    nodes: [node],
                });
            }
            continue;
        }
        const valueNode = argumentNode.value;
        let isNull = valueNode.kind === graphql_1.Kind.NULL;
        if (valueNode.kind === graphql_1.Kind.VARIABLE) {
            const variableName = valueNode.name.value;
            if (variableValues == null || !(0, jsutils_js_1.hasOwnProperty)(variableValues, variableName)) {
                if (defaultValue !== undefined) {
                    coercedValues[name] = defaultValue;
                }
                else if ((0, graphql_1.isNonNullType)(argType)) {
                    throw (0, errors_js_1.createGraphQLError)(`Argument "${name}" of required type "${(0, inspect_js_1.inspect)(argType)}" ` +
                        `was provided the variable "$${variableName}" which was not provided a runtime value.`, {
                        nodes: [valueNode],
                    });
                }
                continue;
            }
            isNull = variableValues[variableName] == null;
        }
        if (isNull && (0, graphql_1.isNonNullType)(argType)) {
            throw (0, errors_js_1.createGraphQLError)(`Argument "${name}" of non-null type "${(0, inspect_js_1.inspect)(argType)}" ` + 'must not be null.', {
                nodes: [valueNode],
            });
        }
        const coercedValue = (0, graphql_1.valueFromAST)(valueNode, argType, variableValues);
        if (coercedValue === undefined) {
            // Note: ValuesOfCorrectTypeRule validation should catch this before
            // execution. This is a runtime check to ensure execution does not
            // continue with an invalid argument value.
            throw (0, errors_js_1.createGraphQLError)(`Argument "${name}" has invalid value ${(0, graphql_1.print)(valueNode)}.`, {
                nodes: [valueNode],
            });
        }
        coercedValues[name] = coercedValue;
    }
    return coercedValues;
}
exports.getArgumentValues = getArgumentValues;
