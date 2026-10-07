import { parse, Kind, isSchema, isDefinitionNode, } from 'graphql';
import { defaultStringComparator, isSourceTypes, isStringTypes } from './utils.js';
import { mergeGraphQLNodes, schemaDefSymbol } from './merge-nodes.js';
import { getDocumentNodeFromSchema, isDocumentNode, resetComments, printWithComments, } from '@graphql-tools/utils';
import { DEFAULT_OPERATION_TYPE_NAME_MAP } from './schema-def.js';
export function mergeTypeDefs(typeSource, config) {
    resetComments();
    const doc = {
        kind: Kind.DOCUMENT,
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
        result = printWithComments(doc);
    }
    else {
        result = doc;
    }
    resetComments();
    return result;
}
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
        else if (isSchema(typeSource)) {
            const documentNode = getDocumentNodeFromSchema(typeSource, options);
            visitTypeSources(documentNode.definitions, options, allDirectives, allNodes, visitedTypeSources);
        }
        else if (isStringTypes(typeSource) || isSourceTypes(typeSource)) {
            const documentNode = parse(typeSource, options);
            visitTypeSources(documentNode.definitions, options, allDirectives, allNodes, visitedTypeSources);
        }
        else if (typeof typeSource === 'object' && isDefinitionNode(typeSource)) {
            if (typeSource.kind === Kind.DIRECTIVE_DEFINITION) {
                allDirectives.push(typeSource);
            }
            else {
                allNodes.push(typeSource);
            }
        }
        else if (isDocumentNode(typeSource)) {
            visitTypeSources(typeSource.definitions, options, allDirectives, allNodes, visitedTypeSources);
        }
        else {
            throw new Error(`typeDefs must contain only strings, documents, schemas, or functions, got ${typeof typeSource}`);
        }
    }
    return { allDirectives, allNodes };
}
export function mergeGraphQLTypes(typeSource, config) {
    var _a, _b, _c;
    resetComments();
    const { allDirectives, allNodes } = visitTypeSources(typeSource, config);
    const mergedDirectives = mergeGraphQLNodes(allDirectives, config);
    const mergedNodes = mergeGraphQLNodes(allNodes, config, mergedDirectives);
    if (config === null || config === void 0 ? void 0 : config.useSchemaDefinition) {
        // XXX: right now we don't handle multiple schema definitions
        const schemaDef = mergedNodes[schemaDefSymbol] || {
            kind: Kind.SCHEMA_DEFINITION,
            operationTypes: [],
        };
        const operationTypes = schemaDef.operationTypes;
        for (const opTypeDefNodeType in DEFAULT_OPERATION_TYPE_NAME_MAP) {
            const opTypeDefNode = operationTypes.find(operationType => operationType.operation === opTypeDefNodeType);
            if (!opTypeDefNode) {
                const possibleRootTypeName = DEFAULT_OPERATION_TYPE_NAME_MAP[opTypeDefNodeType];
                const existingPossibleRootType = mergedNodes[possibleRootTypeName];
                if (existingPossibleRootType != null && existingPossibleRootType.name != null) {
                    operationTypes.push({
                        kind: Kind.OPERATION_TYPE_DEFINITION,
                        type: {
                            kind: Kind.NAMED_TYPE,
                            name: existingPossibleRootType.name,
                        },
                        operation: opTypeDefNodeType,
                    });
                }
            }
        }
        if (((_a = schemaDef === null || schemaDef === void 0 ? void 0 : schemaDef.operationTypes) === null || _a === void 0 ? void 0 : _a.length) != null && schemaDef.operationTypes.length > 0) {
            mergedNodes[schemaDefSymbol] = schemaDef;
        }
    }
    if ((config === null || config === void 0 ? void 0 : config.forceSchemaDefinition) && !((_c = (_b = mergedNodes[schemaDefSymbol]) === null || _b === void 0 ? void 0 : _b.operationTypes) === null || _c === void 0 ? void 0 : _c.length)) {
        mergedNodes[schemaDefSymbol] = {
            kind: Kind.SCHEMA_DEFINITION,
            operationTypes: [
                {
                    kind: Kind.OPERATION_TYPE_DEFINITION,
                    operation: 'query',
                    type: {
                        kind: Kind.NAMED_TYPE,
                        name: {
                            kind: Kind.NAME,
                            value: 'Query',
                        },
                    },
                },
            ],
        };
    }
    const mergedNodeDefinitions = Object.values(mergedNodes);
    if (config === null || config === void 0 ? void 0 : config.sort) {
        const sortFn = typeof config.sort === 'function' ? config.sort : defaultStringComparator;
        mergedNodeDefinitions.sort((a, b) => { var _a, _b; return sortFn((_a = a.name) === null || _a === void 0 ? void 0 : _a.value, (_b = b.name) === null || _b === void 0 ? void 0 : _b.value); });
    }
    return mergedNodeDefinitions;
}
