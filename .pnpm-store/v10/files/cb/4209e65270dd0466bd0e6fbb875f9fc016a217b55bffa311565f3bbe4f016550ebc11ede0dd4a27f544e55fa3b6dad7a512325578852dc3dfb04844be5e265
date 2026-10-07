"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectSubFields = exports.getDeferValues = exports.getFieldEntryKey = exports.doesFragmentConditionMatch = exports.shouldIncludeNode = exports.collectFields = void 0;
const memoize_js_1 = require("./memoize.js");
const graphql_1 = require("graphql");
const directives_js_1 = require("./directives.js");
const AccumulatorMap_js_1 = require("./AccumulatorMap.js");
function collectFieldsImpl(schema, fragments, variableValues, runtimeType, selectionSet, fields, patches, visitedFragmentNames) {
    for (const selection of selectionSet.selections) {
        switch (selection.kind) {
            case graphql_1.Kind.FIELD: {
                if (!shouldIncludeNode(variableValues, selection)) {
                    continue;
                }
                fields.add(getFieldEntryKey(selection), selection);
                break;
            }
            case graphql_1.Kind.INLINE_FRAGMENT: {
                if (!shouldIncludeNode(variableValues, selection) ||
                    !doesFragmentConditionMatch(schema, selection, runtimeType)) {
                    continue;
                }
                const defer = getDeferValues(variableValues, selection);
                if (defer) {
                    const patchFields = new AccumulatorMap_js_1.AccumulatorMap();
                    collectFieldsImpl(schema, fragments, variableValues, runtimeType, selection.selectionSet, patchFields, patches, visitedFragmentNames);
                    patches.push({
                        label: defer.label,
                        fields: patchFields,
                    });
                }
                else {
                    collectFieldsImpl(schema, fragments, variableValues, runtimeType, selection.selectionSet, fields, patches, visitedFragmentNames);
                }
                break;
            }
            case graphql_1.Kind.FRAGMENT_SPREAD: {
                const fragName = selection.name.value;
                if (!shouldIncludeNode(variableValues, selection)) {
                    continue;
                }
                const defer = getDeferValues(variableValues, selection);
                if (visitedFragmentNames.has(fragName) && !defer) {
                    continue;
                }
                const fragment = fragments[fragName];
                if (!fragment || !doesFragmentConditionMatch(schema, fragment, runtimeType)) {
                    continue;
                }
                if (!defer) {
                    visitedFragmentNames.add(fragName);
                }
                if (defer) {
                    const patchFields = new AccumulatorMap_js_1.AccumulatorMap();
                    collectFieldsImpl(schema, fragments, variableValues, runtimeType, fragment.selectionSet, patchFields, patches, visitedFragmentNames);
                    patches.push({
                        label: defer.label,
                        fields: patchFields,
                    });
                }
                else {
                    collectFieldsImpl(schema, fragments, variableValues, runtimeType, fragment.selectionSet, fields, patches, visitedFragmentNames);
                }
                break;
            }
        }
    }
}
/**
 * Given a selectionSet, collects all of the fields and returns them.
 *
 * CollectFields requires the "runtime type" of an object. For a field that
 * returns an Interface or Union type, the "runtime type" will be the actual
 * object type returned by that field.
 *
 */
function collectFields(schema, fragments, variableValues, runtimeType, selectionSet) {
    const fields = new AccumulatorMap_js_1.AccumulatorMap();
    const patches = [];
    collectFieldsImpl(schema, fragments, variableValues, runtimeType, selectionSet, fields, patches, new Set());
    return { fields, patches };
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
exports.shouldIncludeNode = shouldIncludeNode;
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
exports.doesFragmentConditionMatch = doesFragmentConditionMatch;
/**
 * Implements the logic to compute the key of a given field's entry
 */
function getFieldEntryKey(node) {
    return node.alias ? node.alias.value : node.name.value;
}
exports.getFieldEntryKey = getFieldEntryKey;
/**
 * Returns an object containing the `@defer` arguments if a field should be
 * deferred based on the experimental flag, defer directive present and
 * not disabled by the "if" argument.
 */
function getDeferValues(variableValues, node) {
    const defer = (0, graphql_1.getDirectiveValues)(directives_js_1.GraphQLDeferDirective, node, variableValues);
    if (!defer) {
        return;
    }
    if (defer['if'] === false) {
        return;
    }
    return {
        label: typeof defer['label'] === 'string' ? defer['label'] : undefined,
    };
}
exports.getDeferValues = getDeferValues;
/**
 * Given an array of field nodes, collects all of the subfields of the passed
 * in fields, and returns them at the end.
 *
 * CollectSubFields requires the "return type" of an object. For a field that
 * returns an Interface or Union type, the "return type" will be the actual
 * object type returned by that field.
 *
 */
exports.collectSubFields = (0, memoize_js_1.memoize5)(function collectSubfields(schema, fragments, variableValues, returnType, fieldNodes) {
    const subFieldNodes = new AccumulatorMap_js_1.AccumulatorMap();
    const visitedFragmentNames = new Set();
    const subPatches = [];
    const subFieldsAndPatches = {
        fields: subFieldNodes,
        patches: subPatches,
    };
    for (const node of fieldNodes) {
        if (node.selectionSet) {
            collectFieldsImpl(schema, fragments, variableValues, returnType, node.selectionSet, subFieldNodes, subPatches, visitedFragmentNames);
        }
    }
    return subFieldsAndPatches;
});
