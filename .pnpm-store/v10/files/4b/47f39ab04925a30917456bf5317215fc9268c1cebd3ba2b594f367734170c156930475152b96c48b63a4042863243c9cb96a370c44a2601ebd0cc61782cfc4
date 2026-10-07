"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDirectiveNodes = exports.makeDirectiveNode = exports.makeDeprecatedDirective = exports.astFromEnumValue = exports.astFromInputField = exports.astFromField = exports.astFromScalarType = exports.astFromEnumType = exports.astFromInputObjectType = exports.astFromUnionType = exports.astFromInterfaceType = exports.astFromObjectType = exports.astFromArg = exports.getDeprecatableDirectiveNodes = exports.getDirectiveNodes = exports.astFromDirective = exports.astFromSchema = exports.printSchemaWithDirectives = exports.getDocumentNodeFromSchema = void 0;
const graphql_1 = require("graphql");
const astFromType_js_1 = require("./astFromType.js");
const get_directives_js_1 = require("./get-directives.js");
const astFromValueUntyped_js_1 = require("./astFromValueUntyped.js");
const helpers_js_1 = require("./helpers.js");
const rootTypes_js_1 = require("./rootTypes.js");
function getDocumentNodeFromSchema(schema, options = {}) {
    const pathToDirectivesInExtensions = options.pathToDirectivesInExtensions;
    const typesMap = schema.getTypeMap();
    const schemaNode = astFromSchema(schema, pathToDirectivesInExtensions);
    const definitions = schemaNode != null ? [schemaNode] : [];
    const directives = schema.getDirectives();
    for (const directive of directives) {
        if ((0, graphql_1.isSpecifiedDirective)(directive)) {
            continue;
        }
        definitions.push(astFromDirective(directive, schema, pathToDirectivesInExtensions));
    }
    for (const typeName in typesMap) {
        const type = typesMap[typeName];
        const isPredefinedScalar = (0, graphql_1.isSpecifiedScalarType)(type);
        const isIntrospection = (0, graphql_1.isIntrospectionType)(type);
        if (isPredefinedScalar || isIntrospection) {
            continue;
        }
        if ((0, graphql_1.isObjectType)(type)) {
            definitions.push(astFromObjectType(type, schema, pathToDirectivesInExtensions));
        }
        else if ((0, graphql_1.isInterfaceType)(type)) {
            definitions.push(astFromInterfaceType(type, schema, pathToDirectivesInExtensions));
        }
        else if ((0, graphql_1.isUnionType)(type)) {
            definitions.push(astFromUnionType(type, schema, pathToDirectivesInExtensions));
        }
        else if ((0, graphql_1.isInputObjectType)(type)) {
            definitions.push(astFromInputObjectType(type, schema, pathToDirectivesInExtensions));
        }
        else if ((0, graphql_1.isEnumType)(type)) {
            definitions.push(astFromEnumType(type, schema, pathToDirectivesInExtensions));
        }
        else if ((0, graphql_1.isScalarType)(type)) {
            definitions.push(astFromScalarType(type, schema, pathToDirectivesInExtensions));
        }
        else {
            throw new Error(`Unknown type ${type}.`);
        }
    }
    return {
        kind: graphql_1.Kind.DOCUMENT,
        definitions,
    };
}
exports.getDocumentNodeFromSchema = getDocumentNodeFromSchema;
// this approach uses the default schema printer rather than a custom solution, so may be more backwards compatible
// currently does not allow customization of printSchema options having to do with comments.
function printSchemaWithDirectives(schema, options = {}) {
    const documentNode = getDocumentNodeFromSchema(schema, options);
    return (0, graphql_1.print)(documentNode);
}
exports.printSchemaWithDirectives = printSchemaWithDirectives;
function astFromSchema(schema, pathToDirectivesInExtensions) {
    var _a, _b;
    const operationTypeMap = new Map([
        ['query', undefined],
        ['mutation', undefined],
        ['subscription', undefined],
    ]);
    const nodes = [];
    if (schema.astNode != null) {
        nodes.push(schema.astNode);
    }
    if (schema.extensionASTNodes != null) {
        for (const extensionASTNode of schema.extensionASTNodes) {
            nodes.push(extensionASTNode);
        }
    }
    for (const node of nodes) {
        if (node.operationTypes) {
            for (const operationTypeDefinitionNode of node.operationTypes) {
                operationTypeMap.set(operationTypeDefinitionNode.operation, operationTypeDefinitionNode);
            }
        }
    }
    const rootTypeMap = (0, rootTypes_js_1.getRootTypeMap)(schema);
    for (const [operationTypeNode, operationTypeDefinitionNode] of operationTypeMap) {
        const rootType = rootTypeMap.get(operationTypeNode);
        if (rootType != null) {
            const rootTypeAST = (0, astFromType_js_1.astFromType)(rootType);
            if (operationTypeDefinitionNode != null) {
                operationTypeDefinitionNode.type = rootTypeAST;
            }
            else {
                operationTypeMap.set(operationTypeNode, {
                    kind: graphql_1.Kind.OPERATION_TYPE_DEFINITION,
                    operation: operationTypeNode,
                    type: rootTypeAST,
                });
            }
        }
    }
    const operationTypes = [...operationTypeMap.values()].filter(helpers_js_1.isSome);
    const directives = getDirectiveNodes(schema, schema, pathToDirectivesInExtensions);
    if (!operationTypes.length && !directives.length) {
        return null;
    }
    const schemaNode = {
        kind: operationTypes != null ? graphql_1.Kind.SCHEMA_DEFINITION : graphql_1.Kind.SCHEMA_EXTENSION,
        operationTypes,
        // ConstXNode has been introduced in v16 but it is not compatible with XNode so we do `as any` for backwards compatibility
        directives: directives,
    };
    // This code is so weird because it needs to support GraphQL.js 14
    // In GraphQL.js 14 there is no `description` value on schemaNode
    schemaNode.description =
        ((_b = (_a = schema.astNode) === null || _a === void 0 ? void 0 : _a.description) !== null && _b !== void 0 ? _b : schema.description != null)
            ? {
                kind: graphql_1.Kind.STRING,
                value: schema.description,
                block: true,
            }
            : undefined;
    return schemaNode;
}
exports.astFromSchema = astFromSchema;
function astFromDirective(directive, schema, pathToDirectivesInExtensions) {
    var _a, _b, _c, _d;
    return {
        kind: graphql_1.Kind.DIRECTIVE_DEFINITION,
        description: (_b = (_a = directive.astNode) === null || _a === void 0 ? void 0 : _a.description) !== null && _b !== void 0 ? _b : (directive.description
            ? {
                kind: graphql_1.Kind.STRING,
                value: directive.description,
            }
            : undefined),
        name: {
            kind: graphql_1.Kind.NAME,
            value: directive.name,
        },
        arguments: (_c = directive.args) === null || _c === void 0 ? void 0 : _c.map(arg => astFromArg(arg, schema, pathToDirectivesInExtensions)),
        repeatable: directive.isRepeatable,
        locations: ((_d = directive.locations) === null || _d === void 0 ? void 0 : _d.map(location => ({
            kind: graphql_1.Kind.NAME,
            value: location,
        }))) || [],
    };
}
exports.astFromDirective = astFromDirective;
function getDirectiveNodes(entity, schema, pathToDirectivesInExtensions) {
    const directivesInExtensions = (0, get_directives_js_1.getDirectivesInExtensions)(entity, pathToDirectivesInExtensions);
    let nodes = [];
    if (entity.astNode != null) {
        nodes.push(entity.astNode);
    }
    if ('extensionASTNodes' in entity && entity.extensionASTNodes != null) {
        nodes = nodes.concat(entity.extensionASTNodes);
    }
    let directives;
    if (directivesInExtensions != null) {
        directives = makeDirectiveNodes(schema, directivesInExtensions);
    }
    else {
        directives = [];
        for (const node of nodes) {
            if (node.directives) {
                directives.push(...node.directives);
            }
        }
    }
    return directives;
}
exports.getDirectiveNodes = getDirectiveNodes;
function getDeprecatableDirectiveNodes(entity, schema, pathToDirectivesInExtensions) {
    var _a, _b;
    let directiveNodesBesidesDeprecated = [];
    let deprecatedDirectiveNode = null;
    const directivesInExtensions = (0, get_directives_js_1.getDirectivesInExtensions)(entity, pathToDirectivesInExtensions);
    let directives;
    if (directivesInExtensions != null) {
        directives = makeDirectiveNodes(schema, directivesInExtensions);
    }
    else {
        directives = (_a = entity.astNode) === null || _a === void 0 ? void 0 : _a.directives;
    }
    if (directives != null) {
        directiveNodesBesidesDeprecated = directives.filter(directive => directive.name.value !== 'deprecated');
        if (entity.deprecationReason != null) {
            deprecatedDirectiveNode = (_b = directives.filter(directive => directive.name.value === 'deprecated')) === null || _b === void 0 ? void 0 : _b[0];
        }
    }
    if (entity.deprecationReason != null &&
        deprecatedDirectiveNode == null) {
        deprecatedDirectiveNode = makeDeprecatedDirective(entity.deprecationReason);
    }
    return deprecatedDirectiveNode == null
        ? directiveNodesBesidesDeprecated
        : [deprecatedDirectiveNode].concat(directiveNodesBesidesDeprecated);
}
exports.getDeprecatableDirectiveNodes = getDeprecatableDirectiveNodes;
function astFromArg(arg, schema, pathToDirectivesInExtensions) {
    var _a, _b, _c;
    return {
        kind: graphql_1.Kind.INPUT_VALUE_DEFINITION,
        description: (_b = (_a = arg.astNode) === null || _a === void 0 ? void 0 : _a.description) !== null && _b !== void 0 ? _b : (arg.description
            ? {
                kind: graphql_1.Kind.STRING,
                value: arg.description,
                block: true,
            }
            : undefined),
        name: {
            kind: graphql_1.Kind.NAME,
            value: arg.name,
        },
        type: (0, astFromType_js_1.astFromType)(arg.type),
        // ConstXNode has been introduced in v16 but it is not compatible with XNode so we do `as any` for backwards compatibility
        defaultValue: arg.defaultValue !== undefined ? (_c = (0, graphql_1.astFromValue)(arg.defaultValue, arg.type)) !== null && _c !== void 0 ? _c : undefined : undefined,
        directives: getDeprecatableDirectiveNodes(arg, schema, pathToDirectivesInExtensions),
    };
}
exports.astFromArg = astFromArg;
function astFromObjectType(type, schema, pathToDirectivesInExtensions) {
    var _a, _b;
    return {
        kind: graphql_1.Kind.OBJECT_TYPE_DEFINITION,
        description: (_b = (_a = type.astNode) === null || _a === void 0 ? void 0 : _a.description) !== null && _b !== void 0 ? _b : (type.description
            ? {
                kind: graphql_1.Kind.STRING,
                value: type.description,
                block: true,
            }
            : undefined),
        name: {
            kind: graphql_1.Kind.NAME,
            value: type.name,
        },
        fields: Object.values(type.getFields()).map(field => astFromField(field, schema, pathToDirectivesInExtensions)),
        interfaces: Object.values(type.getInterfaces()).map(iFace => (0, astFromType_js_1.astFromType)(iFace)),
        directives: getDirectiveNodes(type, schema, pathToDirectivesInExtensions),
    };
}
exports.astFromObjectType = astFromObjectType;
function astFromInterfaceType(type, schema, pathToDirectivesInExtensions) {
    var _a, _b;
    const node = {
        kind: graphql_1.Kind.INTERFACE_TYPE_DEFINITION,
        description: (_b = (_a = type.astNode) === null || _a === void 0 ? void 0 : _a.description) !== null && _b !== void 0 ? _b : (type.description
            ? {
                kind: graphql_1.Kind.STRING,
                value: type.description,
                block: true,
            }
            : undefined),
        name: {
            kind: graphql_1.Kind.NAME,
            value: type.name,
        },
        fields: Object.values(type.getFields()).map(field => astFromField(field, schema, pathToDirectivesInExtensions)),
        directives: getDirectiveNodes(type, schema, pathToDirectivesInExtensions),
    };
    if ('getInterfaces' in type) {
        node.interfaces = Object.values(type.getInterfaces()).map(iFace => (0, astFromType_js_1.astFromType)(iFace));
    }
    return node;
}
exports.astFromInterfaceType = astFromInterfaceType;
function astFromUnionType(type, schema, pathToDirectivesInExtensions) {
    var _a, _b;
    return {
        kind: graphql_1.Kind.UNION_TYPE_DEFINITION,
        description: (_b = (_a = type.astNode) === null || _a === void 0 ? void 0 : _a.description) !== null && _b !== void 0 ? _b : (type.description
            ? {
                kind: graphql_1.Kind.STRING,
                value: type.description,
                block: true,
            }
            : undefined),
        name: {
            kind: graphql_1.Kind.NAME,
            value: type.name,
        },
        // ConstXNode has been introduced in v16 but it is not compatible with XNode so we do `as any` for backwards compatibility
        directives: getDirectiveNodes(type, schema, pathToDirectivesInExtensions),
        types: type.getTypes().map(type => (0, astFromType_js_1.astFromType)(type)),
    };
}
exports.astFromUnionType = astFromUnionType;
function astFromInputObjectType(type, schema, pathToDirectivesInExtensions) {
    var _a, _b;
    return {
        kind: graphql_1.Kind.INPUT_OBJECT_TYPE_DEFINITION,
        description: (_b = (_a = type.astNode) === null || _a === void 0 ? void 0 : _a.description) !== null && _b !== void 0 ? _b : (type.description
            ? {
                kind: graphql_1.Kind.STRING,
                value: type.description,
                block: true,
            }
            : undefined),
        name: {
            kind: graphql_1.Kind.NAME,
            value: type.name,
        },
        fields: Object.values(type.getFields()).map(field => astFromInputField(field, schema, pathToDirectivesInExtensions)),
        // ConstXNode has been introduced in v16 but it is not compatible with XNode so we do `as any` for backwards compatibility
        directives: getDirectiveNodes(type, schema, pathToDirectivesInExtensions),
    };
}
exports.astFromInputObjectType = astFromInputObjectType;
function astFromEnumType(type, schema, pathToDirectivesInExtensions) {
    var _a, _b;
    return {
        kind: graphql_1.Kind.ENUM_TYPE_DEFINITION,
        description: (_b = (_a = type.astNode) === null || _a === void 0 ? void 0 : _a.description) !== null && _b !== void 0 ? _b : (type.description
            ? {
                kind: graphql_1.Kind.STRING,
                value: type.description,
                block: true,
            }
            : undefined),
        name: {
            kind: graphql_1.Kind.NAME,
            value: type.name,
        },
        values: Object.values(type.getValues()).map(value => astFromEnumValue(value, schema, pathToDirectivesInExtensions)),
        // ConstXNode has been introduced in v16 but it is not compatible with XNode so we do `as any` for backwards compatibility
        directives: getDirectiveNodes(type, schema, pathToDirectivesInExtensions),
    };
}
exports.astFromEnumType = astFromEnumType;
function astFromScalarType(type, schema, pathToDirectivesInExtensions) {
    var _a, _b, _c;
    const directivesInExtensions = (0, get_directives_js_1.getDirectivesInExtensions)(type, pathToDirectivesInExtensions);
    const directives = directivesInExtensions
        ? makeDirectiveNodes(schema, directivesInExtensions)
        : ((_a = type.astNode) === null || _a === void 0 ? void 0 : _a.directives) || [];
    const specifiedByValue = (type['specifiedByUrl'] || type['specifiedByURL']);
    if (specifiedByValue && !directives.some(directiveNode => directiveNode.name.value === 'specifiedBy')) {
        const specifiedByArgs = {
            url: specifiedByValue,
        };
        directives.push(makeDirectiveNode('specifiedBy', specifiedByArgs));
    }
    return {
        kind: graphql_1.Kind.SCALAR_TYPE_DEFINITION,
        description: (_c = (_b = type.astNode) === null || _b === void 0 ? void 0 : _b.description) !== null && _c !== void 0 ? _c : (type.description
            ? {
                kind: graphql_1.Kind.STRING,
                value: type.description,
                block: true,
            }
            : undefined),
        name: {
            kind: graphql_1.Kind.NAME,
            value: type.name,
        },
        // ConstXNode has been introduced in v16 but it is not compatible with XNode so we do `as any` for backwards compatibility
        directives: directives,
    };
}
exports.astFromScalarType = astFromScalarType;
function astFromField(field, schema, pathToDirectivesInExtensions) {
    var _a, _b;
    return {
        kind: graphql_1.Kind.FIELD_DEFINITION,
        description: (_b = (_a = field.astNode) === null || _a === void 0 ? void 0 : _a.description) !== null && _b !== void 0 ? _b : (field.description
            ? {
                kind: graphql_1.Kind.STRING,
                value: field.description,
                block: true,
            }
            : undefined),
        name: {
            kind: graphql_1.Kind.NAME,
            value: field.name,
        },
        arguments: field.args.map(arg => astFromArg(arg, schema, pathToDirectivesInExtensions)),
        type: (0, astFromType_js_1.astFromType)(field.type),
        // ConstXNode has been introduced in v16 but it is not compatible with XNode so we do `as any` for backwards compatibility
        directives: getDeprecatableDirectiveNodes(field, schema, pathToDirectivesInExtensions),
    };
}
exports.astFromField = astFromField;
function astFromInputField(field, schema, pathToDirectivesInExtensions) {
    var _a, _b, _c;
    return {
        kind: graphql_1.Kind.INPUT_VALUE_DEFINITION,
        description: (_b = (_a = field.astNode) === null || _a === void 0 ? void 0 : _a.description) !== null && _b !== void 0 ? _b : (field.description
            ? {
                kind: graphql_1.Kind.STRING,
                value: field.description,
                block: true,
            }
            : undefined),
        name: {
            kind: graphql_1.Kind.NAME,
            value: field.name,
        },
        type: (0, astFromType_js_1.astFromType)(field.type),
        // ConstXNode has been introduced in v16 but it is not compatible with XNode so we do `as any` for backwards compatibility
        directives: getDeprecatableDirectiveNodes(field, schema, pathToDirectivesInExtensions),
        defaultValue: (_c = (0, graphql_1.astFromValue)(field.defaultValue, field.type)) !== null && _c !== void 0 ? _c : undefined,
    };
}
exports.astFromInputField = astFromInputField;
function astFromEnumValue(value, schema, pathToDirectivesInExtensions) {
    var _a, _b;
    return {
        kind: graphql_1.Kind.ENUM_VALUE_DEFINITION,
        description: (_b = (_a = value.astNode) === null || _a === void 0 ? void 0 : _a.description) !== null && _b !== void 0 ? _b : (value.description
            ? {
                kind: graphql_1.Kind.STRING,
                value: value.description,
                block: true,
            }
            : undefined),
        name: {
            kind: graphql_1.Kind.NAME,
            value: value.name,
        },
        // ConstXNode has been introduced in v16 but it is not compatible with XNode so we do `as any` for backwards compatibility
        directives: getDeprecatableDirectiveNodes(value, schema, pathToDirectivesInExtensions),
    };
}
exports.astFromEnumValue = astFromEnumValue;
function makeDeprecatedDirective(deprecationReason) {
    return makeDirectiveNode('deprecated', { reason: deprecationReason }, graphql_1.GraphQLDeprecatedDirective);
}
exports.makeDeprecatedDirective = makeDeprecatedDirective;
function makeDirectiveNode(name, args, directive) {
    const directiveArguments = [];
    if (directive != null) {
        for (const arg of directive.args) {
            const argName = arg.name;
            const argValue = args[argName];
            if (argValue !== undefined) {
                const value = (0, graphql_1.astFromValue)(argValue, arg.type);
                if (value) {
                    directiveArguments.push({
                        kind: graphql_1.Kind.ARGUMENT,
                        name: {
                            kind: graphql_1.Kind.NAME,
                            value: argName,
                        },
                        value,
                    });
                }
            }
        }
    }
    else {
        for (const argName in args) {
            const argValue = args[argName];
            const value = (0, astFromValueUntyped_js_1.astFromValueUntyped)(argValue);
            if (value) {
                directiveArguments.push({
                    kind: graphql_1.Kind.ARGUMENT,
                    name: {
                        kind: graphql_1.Kind.NAME,
                        value: argName,
                    },
                    value,
                });
            }
        }
    }
    return {
        kind: graphql_1.Kind.DIRECTIVE,
        name: {
            kind: graphql_1.Kind.NAME,
            value: name,
        },
        arguments: directiveArguments,
    };
}
exports.makeDirectiveNode = makeDirectiveNode;
function makeDirectiveNodes(schema, directiveValues) {
    const directiveNodes = [];
    for (const directiveName in directiveValues) {
        const arrayOrSingleValue = directiveValues[directiveName];
        const directive = schema === null || schema === void 0 ? void 0 : schema.getDirective(directiveName);
        if (Array.isArray(arrayOrSingleValue)) {
            for (const value of arrayOrSingleValue) {
                directiveNodes.push(makeDirectiveNode(directiveName, value, directive));
            }
        }
        else {
            directiveNodes.push(makeDirectiveNode(directiveName, arrayOrSingleValue, directive));
        }
    }
    return directiveNodes;
}
exports.makeDirectiveNodes = makeDirectiveNodes;
