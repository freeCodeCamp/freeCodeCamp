"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildOperationNodeForField = void 0;
const graphql_1 = require("graphql");
const rootTypes_js_1 = require("./rootTypes.js");
let operationVariables = [];
let fieldTypeMap = new Map();
function addOperationVariable(variable) {
    operationVariables.push(variable);
}
function resetOperationVariables() {
    operationVariables = [];
}
function resetFieldMap() {
    fieldTypeMap = new Map();
}
function buildOperationNodeForField({ schema, kind, field, models, ignore = [], depthLimit, circularReferenceDepth, argNames, selectedFields = true, }) {
    resetOperationVariables();
    resetFieldMap();
    const rootTypeNames = (0, rootTypes_js_1.getRootTypeNames)(schema);
    const operationNode = buildOperationAndCollectVariables({
        schema,
        fieldName: field,
        kind,
        models: models || [],
        ignore,
        depthLimit: depthLimit || Infinity,
        circularReferenceDepth: circularReferenceDepth || 1,
        argNames,
        selectedFields,
        rootTypeNames,
    });
    // attach variables
    operationNode.variableDefinitions = [...operationVariables];
    resetOperationVariables();
    resetFieldMap();
    return operationNode;
}
exports.buildOperationNodeForField = buildOperationNodeForField;
function buildOperationAndCollectVariables({ schema, fieldName, kind, models, ignore, depthLimit, circularReferenceDepth, argNames, selectedFields, rootTypeNames, }) {
    const type = (0, rootTypes_js_1.getDefinedRootType)(schema, kind);
    const field = type.getFields()[fieldName];
    const operationName = `${fieldName}_${kind}`;
    if (field.args) {
        for (const arg of field.args) {
            const argName = arg.name;
            if (!argNames || argNames.includes(argName)) {
                addOperationVariable(resolveVariable(arg, argName));
            }
        }
    }
    return {
        kind: graphql_1.Kind.OPERATION_DEFINITION,
        operation: kind,
        name: {
            kind: graphql_1.Kind.NAME,
            value: operationName,
        },
        variableDefinitions: [],
        selectionSet: {
            kind: graphql_1.Kind.SELECTION_SET,
            selections: [
                resolveField({
                    type,
                    field,
                    models,
                    firstCall: true,
                    path: [],
                    ancestors: [],
                    ignore,
                    depthLimit,
                    circularReferenceDepth,
                    schema,
                    depth: 0,
                    argNames,
                    selectedFields,
                    rootTypeNames,
                }),
            ],
        },
    };
}
function resolveSelectionSet({ parent, type, models, firstCall, path, ancestors, ignore, depthLimit, circularReferenceDepth, schema, depth, argNames, selectedFields, rootTypeNames, }) {
    if (typeof selectedFields === 'boolean' && depth > depthLimit) {
        return;
    }
    if ((0, graphql_1.isUnionType)(type)) {
        const types = type.getTypes();
        return {
            kind: graphql_1.Kind.SELECTION_SET,
            selections: types
                .filter(t => !hasCircularRef([...ancestors, t], {
                depth: circularReferenceDepth,
            }))
                .map(t => {
                return {
                    kind: graphql_1.Kind.INLINE_FRAGMENT,
                    typeCondition: {
                        kind: graphql_1.Kind.NAMED_TYPE,
                        name: {
                            kind: graphql_1.Kind.NAME,
                            value: t.name,
                        },
                    },
                    selectionSet: resolveSelectionSet({
                        parent: type,
                        type: t,
                        models,
                        path,
                        ancestors,
                        ignore,
                        depthLimit,
                        circularReferenceDepth,
                        schema,
                        depth,
                        argNames,
                        selectedFields,
                        rootTypeNames,
                    }),
                };
            })
                .filter(fragmentNode => { var _a, _b; return ((_b = (_a = fragmentNode === null || fragmentNode === void 0 ? void 0 : fragmentNode.selectionSet) === null || _a === void 0 ? void 0 : _a.selections) === null || _b === void 0 ? void 0 : _b.length) > 0; }),
        };
    }
    if ((0, graphql_1.isInterfaceType)(type)) {
        const types = Object.values(schema.getTypeMap()).filter((t) => (0, graphql_1.isObjectType)(t) && t.getInterfaces().includes(type));
        return {
            kind: graphql_1.Kind.SELECTION_SET,
            selections: types
                .filter(t => !hasCircularRef([...ancestors, t], {
                depth: circularReferenceDepth,
            }))
                .map(t => {
                return {
                    kind: graphql_1.Kind.INLINE_FRAGMENT,
                    typeCondition: {
                        kind: graphql_1.Kind.NAMED_TYPE,
                        name: {
                            kind: graphql_1.Kind.NAME,
                            value: t.name,
                        },
                    },
                    selectionSet: resolveSelectionSet({
                        parent: type,
                        type: t,
                        models,
                        path,
                        ancestors,
                        ignore,
                        depthLimit,
                        circularReferenceDepth,
                        schema,
                        depth,
                        argNames,
                        selectedFields,
                        rootTypeNames,
                    }),
                };
            })
                .filter(fragmentNode => { var _a, _b; return ((_b = (_a = fragmentNode === null || fragmentNode === void 0 ? void 0 : fragmentNode.selectionSet) === null || _a === void 0 ? void 0 : _a.selections) === null || _b === void 0 ? void 0 : _b.length) > 0; }),
        };
    }
    if ((0, graphql_1.isObjectType)(type) && !rootTypeNames.has(type.name)) {
        const isIgnored = ignore.includes(type.name) || ignore.includes(`${parent.name}.${path[path.length - 1]}`);
        const isModel = models.includes(type.name);
        if (!firstCall && isModel && !isIgnored) {
            return {
                kind: graphql_1.Kind.SELECTION_SET,
                selections: [
                    {
                        kind: graphql_1.Kind.FIELD,
                        name: {
                            kind: graphql_1.Kind.NAME,
                            value: 'id',
                        },
                    },
                ],
            };
        }
        const fields = type.getFields();
        return {
            kind: graphql_1.Kind.SELECTION_SET,
            selections: Object.keys(fields)
                .filter(fieldName => {
                return !hasCircularRef([...ancestors, (0, graphql_1.getNamedType)(fields[fieldName].type)], {
                    depth: circularReferenceDepth,
                });
            })
                .map(fieldName => {
                const selectedSubFields = typeof selectedFields === 'object' ? selectedFields[fieldName] : true;
                if (selectedSubFields) {
                    return resolveField({
                        type,
                        field: fields[fieldName],
                        models,
                        path: [...path, fieldName],
                        ancestors,
                        ignore,
                        depthLimit,
                        circularReferenceDepth,
                        schema,
                        depth,
                        argNames,
                        selectedFields: selectedSubFields,
                        rootTypeNames,
                    });
                }
                return null;
            })
                .filter((f) => {
                var _a, _b;
                if (f == null) {
                    return false;
                }
                else if ('selectionSet' in f) {
                    return !!((_b = (_a = f.selectionSet) === null || _a === void 0 ? void 0 : _a.selections) === null || _b === void 0 ? void 0 : _b.length);
                }
                return true;
            }),
        };
    }
}
function resolveVariable(arg, name) {
    function resolveVariableType(type) {
        if ((0, graphql_1.isListType)(type)) {
            return {
                kind: graphql_1.Kind.LIST_TYPE,
                type: resolveVariableType(type.ofType),
            };
        }
        if ((0, graphql_1.isNonNullType)(type)) {
            return {
                kind: graphql_1.Kind.NON_NULL_TYPE,
                // for v16 compatibility
                type: resolveVariableType(type.ofType),
            };
        }
        return {
            kind: graphql_1.Kind.NAMED_TYPE,
            name: {
                kind: graphql_1.Kind.NAME,
                value: type.name,
            },
        };
    }
    return {
        kind: graphql_1.Kind.VARIABLE_DEFINITION,
        variable: {
            kind: graphql_1.Kind.VARIABLE,
            name: {
                kind: graphql_1.Kind.NAME,
                value: name || arg.name,
            },
        },
        type: resolveVariableType(arg.type),
    };
}
function getArgumentName(name, path) {
    return [...path, name].join('_');
}
function resolveField({ type, field, models, firstCall, path, ancestors, ignore, depthLimit, circularReferenceDepth, schema, depth, argNames, selectedFields, rootTypeNames, }) {
    const namedType = (0, graphql_1.getNamedType)(field.type);
    let args = [];
    let removeField = false;
    if (field.args && field.args.length) {
        args = field.args
            .map(arg => {
            const argumentName = getArgumentName(arg.name, path);
            if (argNames && !argNames.includes(argumentName)) {
                if ((0, graphql_1.isNonNullType)(arg.type)) {
                    removeField = true;
                }
                return null;
            }
            if (!firstCall) {
                addOperationVariable(resolveVariable(arg, argumentName));
            }
            return {
                kind: graphql_1.Kind.ARGUMENT,
                name: {
                    kind: graphql_1.Kind.NAME,
                    value: arg.name,
                },
                value: {
                    kind: graphql_1.Kind.VARIABLE,
                    name: {
                        kind: graphql_1.Kind.NAME,
                        value: getArgumentName(arg.name, path),
                    },
                },
            };
        })
            .filter(Boolean);
    }
    if (removeField) {
        return null;
    }
    const fieldPath = [...path, field.name];
    const fieldPathStr = fieldPath.join('.');
    let fieldName = field.name;
    if (fieldTypeMap.has(fieldPathStr) && fieldTypeMap.get(fieldPathStr) !== field.type.toString()) {
        fieldName += field.type.toString().replace('!', 'NonNull');
    }
    fieldTypeMap.set(fieldPathStr, field.type.toString());
    if (!(0, graphql_1.isScalarType)(namedType) && !(0, graphql_1.isEnumType)(namedType)) {
        return {
            kind: graphql_1.Kind.FIELD,
            name: {
                kind: graphql_1.Kind.NAME,
                value: field.name,
            },
            ...(fieldName !== field.name && { alias: { kind: graphql_1.Kind.NAME, value: fieldName } }),
            selectionSet: resolveSelectionSet({
                parent: type,
                type: namedType,
                models,
                firstCall,
                path: fieldPath,
                ancestors: [...ancestors, type],
                ignore,
                depthLimit,
                circularReferenceDepth,
                schema,
                depth: depth + 1,
                argNames,
                selectedFields,
                rootTypeNames,
            }) || undefined,
            arguments: args,
        };
    }
    return {
        kind: graphql_1.Kind.FIELD,
        name: {
            kind: graphql_1.Kind.NAME,
            value: field.name,
        },
        ...(fieldName !== field.name && { alias: { kind: graphql_1.Kind.NAME, value: fieldName } }),
        arguments: args,
    };
}
function hasCircularRef(types, config = {
    depth: 1,
}) {
    const type = types[types.length - 1];
    if ((0, graphql_1.isScalarType)(type)) {
        return false;
    }
    const size = types.filter(t => t.name === type.name).length;
    return size > config.depth;
}
