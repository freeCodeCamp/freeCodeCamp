"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectSubFields = exports.collectFields = void 0;
const memoize_js_1 = require("./memoize.js");
const graphql_1 = require("graphql");
// Taken from GraphQL-JS v16 for backwards compat
function collectFields(schema, fragments, variableValues, runtimeType, selectionSet, fields = new Map(), visitedFragmentNames = new Set()) {
    for (const selection of selectionSet.selections) {
        switch (selection.kind) {
            case graphql_1.Kind.FIELD: {
                if (!shouldIncludeNode(variableValues, selection)) {
                    continue;
                }
                const name = getFieldEntryKey(selection);
                const fieldList = fields.get(name);
                if (fieldList !== undefined) {
                    fieldList.push(selection);
                }
                else {
                    fields.set(name, [selection]);
                }
                break;
            }
            case graphql_1.Kind.INLINE_FRAGMENT: {
                if (!shouldIncludeNode(variableValues, selection) ||
                    !doesFragmentConditionMatch(schema, selection, runtimeType)) {
                    continue;
                }
                collectFields(schema, fragments, variableValues, runtimeType, selection.selectionSet, fields, visitedFragmentNames);
                break;
            }
            case graphql_1.Kind.FRAGMENT_SPREAD: {
                const fragName = selection.name.value;
                if (visitedFragmentNames.has(fragName) || !shouldIncludeNode(variableValues, selection)) {
                    continue;
                }
                visitedFragmentNames.add(fragName);
                const fragment = fragments[fragName];
                if (!fragment || !doesFragmentConditionMatch(schema, fragment, runtimeType)) {
                    continue;
                }
                collectFields(schema, fragments, variableValues, runtimeType, fragment.selectionSet, fields, visitedFragmentNames);
                break;
            }
        }
    }
    return fields;
}
exports.collectFields = collectFields;
/**
 * Determines if a field should be included based on the `@include` and `@skip`
 * directives, where `@skip` has higher precedence than `@include`.
 */
function shouldIncludeNode(variableValues, node) {
    const skip = (0, graphql_1.getDirectiveValues)(graphql_1.GraphQLSkipDirective, node, variableValues);
    if ((skip === null || skip === void 0 ? void 0 : skip['if']) === true) {
        return false;
    }
    const include = (0, graphql_1.getDirectiveValues)(graphql_1.GraphQLIncludeDirective, node, variableValues);
    if ((include === null || include === void 0 ? void 0 : include['if']) === false) {
        return false;
    }
    return true;
}
/**
 * Determines if a fragment is applicable to the given type.
 */
function doesFragmentConditionMatch(schema, fragment, type) {
    const typeConditionNode = fragment.typeCondition;
    if (!typeConditionNode) {
        return true;
    }
    const conditionalType = (0, graphql_1.typeFromAST)(schema, typeConditionNode);
    if (conditionalType === type) {
        return true;
    }
    if ((0, graphql_1.isAbstractType)(conditionalType)) {
        const possibleTypes = schema.getPossibleTypes(conditionalType);
        return possibleTypes.includes(type);
    }
    return false;
}
/**
 * Implements the logic to compute the key of a given field's entry
 */
function getFieldEntryKey(node) {
    return node.alias ? node.alias.value : node.name.value;
}
exports.collectSubFields = (0, memoize_js_1.memoize5)(function collectSubFields(schema, fragments, variableValues, type, fieldNodes) {
    const subFieldNodes = new Map();
    const visitedFragmentNames = new Set();
    for (const fieldNode of fieldNodes) {
        if (fieldNode.selectionSet) {
            collectFields(schema, fragments, variableValues, type, fieldNode.selectionSet, subFieldNodes, visitedFragmentNames);
        }
    }
    return subFieldNodes;
});
