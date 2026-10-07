"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUsingTypes = exports.hasNullableTypeRecursively = exports.normalizeConfig = exports.normalizeInstanceOrArray = exports.normalizeOutputParam = exports.isConfiguredOutput = exports.isOutputConfigArray = void 0;
const graphql_1 = require("graphql");
const utils_js_1 = require("./utils.js");
function isOutputConfigArray(type) {
    return Array.isArray(type);
}
exports.isOutputConfigArray = isOutputConfigArray;
function isConfiguredOutput(type) {
    return (typeof type === 'object' && type.plugins) || type.preset;
}
exports.isConfiguredOutput = isConfiguredOutput;
function normalizeOutputParam(config) {
    // In case of direct array with a list of plugins
    if (isOutputConfigArray(config)) {
        return {
            documents: [],
            schema: [],
            plugins: isConfiguredOutput(config) ? config.plugins : config,
        };
    }
    if (isConfiguredOutput(config)) {
        return config;
    }
    throw new Error(`Invalid "generates" config!`);
}
exports.normalizeOutputParam = normalizeOutputParam;
function normalizeInstanceOrArray(type) {
    if (Array.isArray(type)) {
        return type;
    }
    if (!type) {
        return [];
    }
    return [type];
}
exports.normalizeInstanceOrArray = normalizeInstanceOrArray;
function normalizeConfig(config) {
    if (typeof config === 'string') {
        return [{ [config]: {} }];
    }
    if (Array.isArray(config)) {
        return config.map(plugin => (typeof plugin === 'string' ? { [plugin]: {} } : plugin));
    }
    if (typeof config === 'object') {
        return Object.keys(config).reduce((prev, pluginName) => [...prev, { [pluginName]: config[pluginName] }], []);
    }
    return [];
}
exports.normalizeConfig = normalizeConfig;
function hasNullableTypeRecursively(type) {
    if (!(0, graphql_1.isNonNullType)(type)) {
        return true;
    }
    if ((0, graphql_1.isListType)(type) || (0, graphql_1.isNonNullType)(type)) {
        return hasNullableTypeRecursively(type.ofType);
    }
    return false;
}
exports.hasNullableTypeRecursively = hasNullableTypeRecursively;
function isUsingTypes(document, externalFragments, schema) {
    let foundFields = 0;
    const typesStack = [];
    (0, graphql_1.visit)(document, {
        SelectionSet: {
            enter(node, key, parent, anscestors) {
                const insideIgnoredFragment = anscestors.find((f) => f.kind && f.kind === 'FragmentDefinition' && externalFragments.includes(f.name.value));
                if (insideIgnoredFragment) {
                    return;
                }
                const selections = node.selections || [];
                if (schema && selections.length > 0) {
                    const nextTypeName = (() => {
                        if (parent.kind === graphql_1.Kind.FRAGMENT_DEFINITION) {
                            return parent.typeCondition.name.value;
                        }
                        if (parent.kind === graphql_1.Kind.FIELD) {
                            const lastType = typesStack[typesStack.length - 1];
                            if (!lastType) {
                                throw new Error(`Unable to find parent type! Please make sure you operation passes validation`);
                            }
                            const field = lastType.getFields()[parent.name.value];
                            if (!field) {
                                throw new Error(`Unable to find field "${parent.name.value}" on type "${lastType}"!`);
                            }
                            return (0, utils_js_1.getBaseType)(field.type).name;
                        }
                        if (parent.kind === graphql_1.Kind.OPERATION_DEFINITION) {
                            if (parent.operation === 'query') {
                                return schema.getQueryType().name;
                            }
                            if (parent.operation === 'mutation') {
                                return schema.getMutationType().name;
                            }
                            if (parent.operation === 'subscription') {
                                return schema.getSubscriptionType().name;
                            }
                        }
                        else if (parent.kind === graphql_1.Kind.INLINE_FRAGMENT) {
                            if (parent.typeCondition) {
                                return parent.typeCondition.name.value;
                            }
                            return typesStack[typesStack.length - 1].name;
                        }
                        return null;
                    })();
                    typesStack.push(schema.getType(nextTypeName));
                }
            },
            leave(node) {
                const selections = node.selections || [];
                if (schema && selections.length > 0) {
                    typesStack.pop();
                }
            },
        },
        Field: {
            enter: (node, key, parent, path, anscestors) => {
                if (node.name.value.startsWith('__')) {
                    return;
                }
                const insideIgnoredFragment = anscestors.find((f) => f.kind && f.kind === 'FragmentDefinition' && externalFragments.includes(f.name.value));
                if (insideIgnoredFragment) {
                    return;
                }
                const selections = node.selectionSet ? node.selectionSet.selections || [] : [];
                const relevantFragmentSpreads = selections.filter(s => s.kind === graphql_1.Kind.FRAGMENT_SPREAD && !externalFragments.includes(s.name.value));
                if (selections.length === 0 || relevantFragmentSpreads.length > 0) {
                    foundFields++;
                }
                if (schema) {
                    const lastType = typesStack[typesStack.length - 1];
                    if (lastType && (0, graphql_1.isObjectType)(lastType)) {
                        const field = lastType.getFields()[node.name.value];
                        if (!field) {
                            throw new Error(`Unable to find field "${node.name.value}" on type "${lastType}"!`);
                        }
                        const currentType = field.type;
                        // To handle `Maybe` usage
                        if (hasNullableTypeRecursively(currentType)) {
                            foundFields++;
                        }
                    }
                }
            },
        },
        VariableDefinition: {
            enter: (node, key, parent, path, anscestors) => {
                const insideIgnoredFragment = anscestors.find((f) => f.kind && f.kind === 'FragmentDefinition' && externalFragments.includes(f.name.value));
                if (insideIgnoredFragment) {
                    return;
                }
                foundFields++;
            },
        },
        InputValueDefinition: {
            enter: (node, key, parent, path, anscestors) => {
                const insideIgnoredFragment = anscestors.find((f) => f.kind && f.kind === 'FragmentDefinition' && externalFragments.includes(f.name.value));
                if (insideIgnoredFragment) {
                    return;
                }
                foundFields++;
            },
        },
    });
    return foundFields > 0;
}
exports.isUsingTypes = isUsingTypes;
