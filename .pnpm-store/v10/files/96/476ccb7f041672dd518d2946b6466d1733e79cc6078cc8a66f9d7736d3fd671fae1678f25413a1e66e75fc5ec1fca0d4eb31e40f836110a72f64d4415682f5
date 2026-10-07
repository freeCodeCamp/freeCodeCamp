"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeGraphQLTypes = exports.mergeTypeDefs = void 0;
const graphql_1 = require("graphql");
const utils_js_1 = require("./utils.js");
const merge_nodes_js_1 = require("./merge-nodes.js");
const utils_1 = require("@graphql-tools/utils");
const schema_def_js_1 = require("./schema-def.js");
function mergeTypeDefs(typeSource, config) {
    (0, utils_1.resetComments)();
    const doc = {
        kind: graphql_1.Kind.DOCUMENT,
        definitions: mergeGraphQLTypes(typeSource, {
            useSchemaDefinition: true,
            forceSchemaDefinition: false,
            throwOnConflict: false,
            commentDescriptions: false,
            ...config,
        }),
    };
    let result;
    if (config === null || config === void 0 ? void 0 : config.commentDescriptions) {
        result = (0, utils_1.printWithComments)(doc);
    }
    else {
        result = doc;
    }
    (0, utils_1.resetComments)();
    return result;
}
exports.mergeTypeDefs = mergeTypeDefs;
function visitTypeSources(typeSource, options, allDirectives = [], allNodes = [], visitedTypeSources = new Set()) {
    if (typeSource && !visitedTypeSources.has(typeSource)) {
        visitedTypeSources.add(typeSource);
        if (typeof typeSource === 'function') {
            visitTypeSources(typeSource(), options, allDirectives, allNodes, visitedTypeSources);
        }
        else if (Array.isArray(typeSource)) {
            for (const type of typeSource) {
                visitTypeSources(type, options, allDirectives, allNodes, visitedTypeSources);
            }
        }
        else if ((0, graphql_1.isSchema)(typeSource)) {
            const documentNode = (0, utils_1.getDocumentNodeFromSchema)(typeSource, options);
            visitTypeSources(documentNode.definitions, options, allDirectives, allNodes, visitedTypeSources);
        }
        else if ((0, utils_js_1.isStringTypes)(typeSource) || (0, utils_js_1.isSourceTypes)(typeSource)) {
            const documentNode = (0, graphql_1.parse)(typeSource, options);
            visitTypeSources(documentNode.definitions, options, allDirectives, allNodes, visitedTypeSources);
        }
        else if (typeof typeSource === 'object' && (0, graphql_1.isDefinitionNode)(typeSource)) {
            if (typeSource.kind === graphql_1.Kind.DIRECTIVE_DEFINITION) {
                allDirectives.push(typeSource);
            }
            else {
                allNodes.push(typeSource);
            }
        }
        else if ((0, utils_1.isDocumentNode)(typeSource)) {
            visitTypeSources(typeSource.definitions, options, allDirectives, allNodes, visitedTypeSources);
        }
        else {
            throw new Error(`typeDefs must contain only strings, documents, schemas, or functions, got ${typeof typeSource}`);
        }
    }
    return { allDirectives, allNodes };
}
function mergeGraphQLTypes(typeSource, config) {
    var _a, _b, _c;
    (0, utils_1.resetComments)();
    const { allDirectives, allNodes } = visitTypeSources(typeSource, config);
    const mergedDirectives = (0, merge_nodes_js_1.mergeGraphQLNodes)(allDirectives, config);
    const mergedNodes = (0, merge_nodes_js_1.mergeGraphQLNodes)(allNodes, config, mergedDirectives);
    if (config === null || config === void 0 ? void 0 : config.useSchemaDefinition) {
        // XXX: right now we don't handle multiple schema definitions
        const schemaDef = mergedNodes[merge_nodes_js_1.schemaDefSymbol] || {
            kind: graphql_1.Kind.SCHEMA_DEFINITION,
            operationTypes: [],
        };
        const operationTypes = schemaDef.operationTypes;
        for (const opTypeDefNodeType in schema_def_js_1.DEFAULT_OPERATION_TYPE_NAME_MAP) {
            const opTypeDefNode = operationTypes.find(operationType => operationType.operation === opTypeDefNodeType);
            if (!opTypeDefNode) {
                const possibleRootTypeName = schema_def_js_1.DEFAULT_OPERATION_TYPE_NAME_MAP[opTypeDefNodeType];
                const existingPossibleRootType = mergedNodes[possibleRootTypeName];
                if (existingPossibleRootType != null && existingPossibleRootType.name != null) {
                    operationTypes.push({
                        kind: graphql_1.Kind.OPERATION_TYPE_DEFINITION,
                        type: {
                            kind: graphql_1.Kind.NAMED_TYPE,
                            name: existingPossibleRootType.name,
                        },
                        operation: opTypeDefNodeType,
                    });
                }
            }
        }
        if (((_a = schemaDef === null || schemaDef === void 0 ? void 0 : schemaDef.operationTypes) === null || _a === void 0 ? void 0 : _a.length) != null && schemaDef.operationTypes.length > 0) {
            mergedNodes[merge_nodes_js_1.schemaDefSymbol] = schemaDef;
        }
    }
    if ((config === null || config === void 0 ? void 0 : config.forceSchemaDefinition) && !((_c = (_b = mergedNodes[merge_nodes_js_1.schemaDefSymbol]) === null || _b === void 0 ? void 0 : _b.operationTypes) === null || _c === void 0 ? void 0 : _c.length)) {
        mergedNodes[merge_nodes_js_1.schemaDefSymbol] = {
            kind: graphql_1.Kind.SCHEMA_DEFINITION,
            operationTypes: [
                {
                    kind: graphql_1.Kind.OPERATION_TYPE_DEFINITION,
                    operation: 'query',
                    type: {
                        kind: graphql_1.Kind.NAMED_TYPE,
                        name: {
                            kind: graphql_1.Kind.NAME,
                            value: 'Query',
                        },
                    },
                },
            ],
        };
    }
    const mergedNodeDefinitions = Object.values(mergedNodes);
    if (config === null || config === void 0 ? void 0 : config.sort) {
        const sortFn = typeof config.sort === 'function' ? config.sort : utils_js_1.defaultStringComparator;
        mergedNodeDefinitions.sort((a, b) => { var _a, _b; return sortFn((_a = a.name) === null || _a === void 0 ? void 0 : _a.value, (_b = b.name) === null || _b === void 0 ? void 0 : _b.value); });
    }
    return mergedNodeDefinitions;
}
exports.mergeGraphQLTypes = mergeGraphQLTypes;
