"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApolloFederation = exports.removeFederation = exports.addFederationReferencesToSchema = exports.federationSpec = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("graphql");
const merge_js_1 = tslib_1.__importDefault(require("lodash/merge.js"));
const utils_js_1 = require("./utils.js");
const utils_1 = require("@graphql-tools/utils");
const index_js_1 = require("./index.js");
/**
 * Federation Spec
 */
exports.federationSpec = (0, graphql_1.parse)(/* GraphQL */ `
  scalar _FieldSet

  directive @external on FIELD_DEFINITION
  directive @requires(fields: _FieldSet!) on FIELD_DEFINITION
  directive @provides(fields: _FieldSet!) on FIELD_DEFINITION
  directive @key(fields: _FieldSet!) on OBJECT | INTERFACE
`);
/**
 * Adds `__resolveReference` in each ObjectType involved in Federation.
 * @param schema
 */
function addFederationReferencesToSchema(schema) {
    return (0, utils_1.mapSchema)(schema, {
        [utils_1.MapperKind.OBJECT_TYPE]: type => {
            if (isFederationObjectType(type, schema)) {
                const typeConfig = type.toConfig();
                typeConfig.fields = {
                    [resolveReferenceFieldName]: {
                        type,
                    },
                    ...typeConfig.fields,
                };
                return new graphql_1.GraphQLObjectType(typeConfig);
            }
            return type;
        },
    });
}
exports.addFederationReferencesToSchema = addFederationReferencesToSchema;
/**
 * Removes Federation Spec from GraphQL Schema
 * @param schema
 * @param config
 */
function removeFederation(schema) {
    return (0, utils_1.mapSchema)(schema, {
        [utils_1.MapperKind.QUERY]: queryType => {
            const queryTypeConfig = queryType.toConfig();
            delete queryTypeConfig.fields._entities;
            delete queryTypeConfig.fields._service;
            return new graphql_1.GraphQLObjectType(queryTypeConfig);
        },
        [utils_1.MapperKind.UNION_TYPE]: unionType => {
            const unionTypeName = unionType.name;
            if (unionTypeName === '_Entity' || unionTypeName === '_Any') {
                return null;
            }
            return unionType;
        },
        [utils_1.MapperKind.OBJECT_TYPE]: objectType => {
            if (objectType.name === '_Service') {
                return null;
            }
            return objectType;
        },
    });
}
exports.removeFederation = removeFederation;
const resolveReferenceFieldName = '__resolveReference';
class ApolloFederation {
    constructor({ enabled, schema }) {
        this.enabled = false;
        this.enabled = enabled;
        this.schema = schema;
        this.providesMap = this.createMapOfProvides();
    }
    /**
     * Excludes types definde by Federation
     * @param typeNames List of type names
     */
    filterTypeNames(typeNames) {
        return this.enabled ? typeNames.filter(t => t !== '_FieldSet') : typeNames;
    }
    /**
     * Excludes `__resolveReference` fields
     * @param fieldNames List of field names
     */
    filterFieldNames(fieldNames) {
        return this.enabled ? fieldNames.filter(t => t !== resolveReferenceFieldName) : fieldNames;
    }
    /**
     * Decides if directive should not be generated
     * @param name directive's name
     */
    skipDirective(name) {
        return this.enabled && ['external', 'requires', 'provides', 'key'].includes(name);
    }
    /**
     * Decides if scalar should not be generated
     * @param name directive's name
     */
    skipScalar(name) {
        return this.enabled && name === '_FieldSet';
    }
    /**
     * Decides if field should not be generated
     * @param data
     */
    skipField({ fieldNode, parentType }) {
        if (!this.enabled || !(0, graphql_1.isObjectType)(parentType) || !isFederationObjectType(parentType, this.schema)) {
            return false;
        }
        return this.isExternalAndNotProvided(fieldNode, parentType);
    }
    isResolveReferenceField(fieldNode) {
        const name = typeof fieldNode.name === 'string' ? fieldNode.name : fieldNode.name.value;
        return this.enabled && name === resolveReferenceFieldName;
    }
    /**
     * Transforms ParentType signature in ObjectTypes involved in Federation
     * @param data
     */
    transformParentType({ fieldNode, parentType, parentTypeSignature, }) {
        if (this.enabled &&
            (0, graphql_1.isObjectType)(parentType) &&
            isFederationObjectType(parentType, this.schema) &&
            (isTypeExtension(parentType, this.schema) || fieldNode.name.value === resolveReferenceFieldName)) {
            const keys = getDirectivesByName('key', parentType);
            if (keys.length) {
                const outputs = [`{ __typename: '${parentType.name}' } &`];
                // Look for @requires and see what the service needs and gets
                const requires = getDirectivesByName('requires', fieldNode).map(this.extractKeyOrRequiresFieldSet);
                const requiredFields = this.translateFieldSet((0, merge_js_1.default)({}, ...requires), parentTypeSignature);
                // @key() @key() - "primary keys" in Federation
                const primaryKeys = keys.map(def => {
                    const fields = this.extractKeyOrRequiresFieldSet(def);
                    return this.translateFieldSet(fields, parentTypeSignature);
                });
                const [open, close] = primaryKeys.length > 1 ? ['(', ')'] : ['', ''];
                outputs.push([open, primaryKeys.join(' | '), close].join(''));
                // include required fields
                if (requires.length) {
                    outputs.push(`& ${requiredFields}`);
                }
                return outputs.join(' ');
            }
        }
        return parentTypeSignature;
    }
    isExternalAndNotProvided(fieldNode, objectType) {
        return this.isExternal(fieldNode) && !this.hasProvides(objectType, fieldNode);
    }
    isExternal(node) {
        return getDirectivesByName('external', node).length > 0;
    }
    hasProvides(objectType, node) {
        const fields = this.providesMap[(0, graphql_1.isObjectType)(objectType) ? objectType.name : objectType.name.value];
        if (fields && fields.length) {
            return fields.includes(node.name.value);
        }
        return false;
    }
    translateFieldSet(fields, parentTypeRef) {
        return `GraphQLRecursivePick<${parentTypeRef}, ${JSON.stringify(fields)}>`;
    }
    extractKeyOrRequiresFieldSet(directive) {
        const arg = directive.arguments.find(arg => arg.name.value === 'fields');
        const { value } = arg.value;
        return (0, index_js_1.oldVisit)((0, graphql_1.parse)(`{${value}}`), {
            leave: {
                SelectionSet(node) {
                    return node.selections.reduce((accum, field) => {
                        accum[field.name] = field.selection;
                        return accum;
                    }, {});
                },
                Field(node) {
                    return {
                        name: node.name.value,
                        selection: node.selectionSet ? node.selectionSet : true,
                    };
                },
                Document(node) {
                    return node.definitions.find((def) => def.kind === 'OperationDefinition' && def.operation === 'query').selectionSet;
                },
            },
        });
    }
    extractProvidesFieldSet(directive) {
        const arg = directive.arguments.find(arg => arg.name.value === 'fields');
        const { value } = arg.value;
        if (/[{}]/gi.test(value)) {
            throw new Error('Nested fields in _FieldSet is not supported in the @provides directive');
        }
        return value.split(/\s+/g);
    }
    createMapOfProvides() {
        const providesMap = {};
        Object.keys(this.schema.getTypeMap()).forEach(typename => {
            const objectType = this.schema.getType(typename);
            if ((0, graphql_1.isObjectType)(objectType)) {
                Object.values(objectType.getFields()).forEach(field => {
                    const provides = getDirectivesByName('provides', field.astNode)
                        .map(this.extractProvidesFieldSet)
                        .reduce((prev, curr) => [...prev, ...curr], []);
                    const ofType = (0, utils_js_1.getBaseType)(field.type);
                    if (!providesMap[ofType.name]) {
                        providesMap[ofType.name] = [];
                    }
                    providesMap[ofType.name].push(...provides);
                });
            }
        });
        return providesMap;
    }
}
exports.ApolloFederation = ApolloFederation;
/**
 * Checks if Object Type is involved in Federation. Based on `@key` directive
 * @param node Type
 */
function isFederationObjectType(node, schema) {
    const { name: { value: name }, directives, } = (0, graphql_1.isObjectType)(node) ? (0, utils_1.astFromObjectType)(node, schema) : node;
    const rootTypeNames = (0, utils_1.getRootTypeNames)(schema);
    const isNotRoot = !rootTypeNames.has(name);
    const isNotIntrospection = !name.startsWith('__');
    const hasKeyDirective = directives.some(d => d.name.value === 'key');
    return isNotRoot && isNotIntrospection && hasKeyDirective;
}
/**
 * Extracts directives from a node based on directive's name
 * @param name directive name
 * @param node ObjectType or Field
 */
function getDirectivesByName(name, node) {
    var _a;
    let astNode;
    if ((0, graphql_1.isObjectType)(node)) {
        astNode = node.astNode;
    }
    else {
        astNode = node;
    }
    return ((_a = astNode === null || astNode === void 0 ? void 0 : astNode.directives) === null || _a === void 0 ? void 0 : _a.filter(d => d.name.value === name)) || [];
}
/**
 * Checks if the Object Type extends a federated type from a remote schema.
 * Based on if any of its fields contain the `@external` directive
 * @param node Type
 */
function isTypeExtension(node, schema) {
    var _a;
    const definition = (0, graphql_1.isObjectType)(node) ? node.astNode || (0, utils_1.astFromObjectType)(node, schema) : node;
    return (_a = definition.fields) === null || _a === void 0 ? void 0 : _a.some(field => getDirectivesByName('external', field).length);
}
