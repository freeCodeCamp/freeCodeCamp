import { memoize5 } from './memoize.js';
import { Kind, getDirectiveValues, GraphQLSkipDirective, GraphQLIncludeDirective, isAbstractType, typeFromAST, } from 'graphql';
import { GraphQLDeferDirective } from './directives.js';
import { AccumulatorMap } from './AccumulatorMap.js';
function collectFieldsImpl(schema, fragments, variableValues, runtimeType, selectionSet, fields, patches, visitedFragmentNames) {
    for (const selection of selectionSet.selections) {
        switch (selection.kind) {
            case Kind.FIELD: {
                if (!shouldIncludeNode(variableValues, selection)) {
                    continue;
                }
                fields.add(getFieldEntryKey(selection), selection);
                break;
            }
            case Kind.INLINE_FRAGMENT: {
                if (!shouldIncludeNode(variableValues, selection) ||
                    !doesFragmentConditionMatch(schema, selection, runtimeType)) {
                    continue;
                }
                const defer = getDeferValues(variableValues, selection);
                if (defer) {
                    const patchFields = new AccumulatorMap();
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
            case Kind.FRAGMENT_SPREAD: {
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
                    const patchFields = new AccumulatorMap();
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
export function collectFields(schema, fragments, variableValues, runtimeType, selectionSet) {
    const fields = new AccumulatorMap();
    const patches = [];
    collectFieldsImpl(schema, fragments, variableValues, runtimeType, selectionSet, fields, patches, new Set());
    return { fields, patches };
}
/**
 * Determines if a field should be included based on the `@include` and `@skip`
 * directives, where `@skip` has higher precedence than `@include`.
 */
export function shouldIncludeNode(variableValues, node) {
    const skip = getDirectiveValues(GraphQLSkipDirective, node, variableValues);
    if ((skip === null || skip === void 0 ? void 0 : skip['if']) === true) {
        return false;
    }
    const include = getDirectiveValues(GraphQLIncludeDirective, node, variableValues);
    if ((include === null || include === void 0 ? void 0 : include['if']) === false) {
        return false;
    }
    return true;
}
/**
 * Determines if a fragment is applicable to the given type.
 */
export function doesFragmentConditionMatch(schema, fragment, type) {
    const typeConditionNode = fragment.typeCondition;
    if (!typeConditionNode) {
        return true;
    }
    const conditionalType = typeFromAST(schema, typeConditionNode);
    if (conditionalType === type) {
        return true;
    }
    if (isAbstractType(conditionalType)) {
        const possibleTypes = schema.getPossibleTypes(conditionalType);
        return possibleTypes.includes(type);
    }
    return false;
}
/**
 * Implements the logic to compute the key of a given field's entry
 */
export function getFieldEntryKey(node) {
    return node.alias ? node.alias.value : node.name.value;
}
/**
 * Returns an object containing the `@defer` arguments if a field should be
 * deferred based on the experimental flag, defer directive present and
 * not disabled by the "if" argument.
 */
export function getDeferValues(variableValues, node) {
    const defer = getDirectiveValues(GraphQLDeferDirective, node, variableValues);
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
/**
 * Given an array of field nodes, collects all of the subfields of the passed
 * in fields, and returns them at the end.
 *
 * CollectSubFields requires the "return type" of an object. For a field that
 * returns an Interface or Union type, the "return type" will be the actual
 * object type returned by that field.
 *
 */
export const collectSubFields = memoize5(function collectSubfields(schema, fragments, variableValues, returnType, fieldNodes) {
    const subFieldNodes = new AccumulatorMap();
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
