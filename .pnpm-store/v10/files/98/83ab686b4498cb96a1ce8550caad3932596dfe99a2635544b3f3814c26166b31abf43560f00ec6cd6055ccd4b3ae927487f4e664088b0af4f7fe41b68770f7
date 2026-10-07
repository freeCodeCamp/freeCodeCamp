import { isObjectType, getNamedType, isUnionType, isNonNullType, isScalarType, isListType, isInterfaceType, isEnumType, Kind, } from 'graphql';
import { getDefinedRootType, getRootTypeNames } from './rootTypes.js';
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
export function buildOperationNodeForField({ schema, kind, field, models, ignore = [], depthLimit, circularReferenceDepth, argNames, selectedFields = true, }) {
    resetOperationVariables();
    resetFieldMap();
    const rootTypeNames = getRootTypeNames(schema);
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
function buildOperationAndCollectVariables({ schema, fieldName, kind, models, ignore, depthLimit, circularReferenceDepth, argNames, selectedFields, rootTypeNames, }) {
    const type = getDefinedRootType(schema, kind);
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
        kind: Kind.OPERATION_DEFINITION,
        operation: kind,
        name: {
            kind: Kind.NAME,
            value: operationName,
        },
        variableDefinitions: [],
        selectionSet: {
            kind: Kind.SELECTION_SET,
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
    if (isUnionType(type)) {
        const types = type.getTypes();
        return {
            kind: Kind.SELECTION_SET,
            selections: types
                .filter(t => !hasCircularRef([...ancestors, t], {
                depth: circularReferenceDepth,
            }))
                .map(t => {
                return {
                    kind: Kind.INLINE_FRAGMENT,
                    typeCondition: {
                        kind: Kind.NAMED_TYPE,
                        name: {
                            kind: Kind.NAME,
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
    if (isInterfaceType(type)) {
        const types = Object.values(schema.getTypeMap()).filter((t) => isObjectType(t) && t.getInterfaces().includes(type));
        return {
            kind: Kind.SELECTION_SET,
            selections: types
                .filter(t => !hasCircularRef([...ancestors, t], {
                depth: circularReferenceDepth,
            }))
                .map(t => {
                return {
                    kind: Kind.INLINE_FRAGMENT,
                    typeCondition: {
                        kind: Kind.NAMED_TYPE,
                        name: {
                            kind: Kind.NAME,
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
    if (isObjectType(type) && !rootTypeNames.has(type.name)) {
        const isIgnored = ignore.includes(type.name) || ignore.includes(`${parent.name}.${path[path.length - 1]}`);
        const isModel = models.includes(type.name);
        if (!firstCall && isModel && !isIgnored) {
            return {
                kind: Kind.SELECTION_SET,
                selections: [
                    {
                        kind: Kind.FIELD,
                        name: {
                            kind: Kind.NAME,
                            value: 'id',
                        },
                    },
                ],
            };
        }
        const fields = type.getFields();
        return {
            kind: Kind.SELECTION_SET,
            selections: Object.keys(fields)
                .filter(fieldName => {
                return !hasCircularRef([...ancestors, getNamedType(fields[fieldName].type)], {
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
        if (isListType(type)) {
            return {
                kind: Kind.LIST_TYPE,
                type: resolveVariableType(type.ofType),
            };
        }
        if (isNonNullType(type)) {
            return {
                kind: Kind.NON_NULL_TYPE,
                // for v16 compatibility
                type: resolveVariableType(type.ofType),
            };
        }
        return {
            kind: Kind.NAMED_TYPE,
            name: {
                kind: Kind.NAME,
                value: type.name,
            },
        };
    }
    return {
        kind: Kind.VARIABLE_DEFINITION,
        variable: {
            kind: Kind.VARIABLE,
            name: {
                kind: Kind.NAME,
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
    const namedType = getNamedType(field.type);
    let args = [];
    let removeField = false;
    if (field.args && field.args.length) {
        args = field.args
            .map(arg => {
            const argumentName = getArgumentName(arg.name, path);
            if (argNames && !argNames.includes(argumentName)) {
                if (isNonNullType(arg.type)) {
                    removeField = true;
                }
                return null;
            }
            if (!firstCall) {
                addOperationVariable(resolveVariable(arg, argumentName));
            }
            return {
                kind: Kind.ARGUMENT,
                name: {
                    kind: Kind.NAME,
                    value: arg.name,
                },
                value: {
                    kind: Kind.VARIABLE,
                    name: {
                        kind: Kind.NAME,
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
    if (!isScalarType(namedType) && !isEnumType(namedType)) {
        return {
            kind: Kind.FIELD,
            name: {
                kind: Kind.NAME,
                value: field.name,
            },
            ...(fieldName !== field.name && { alias: { kind: Kind.NAME, value: fieldName } }),
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
        kind: Kind.FIELD,
        name: {
            kind: Kind.NAME,
            value: field.name,
        },
        ...(fieldName !== field.name && { alias: { kind: Kind.NAME, value: fieldName } }),
        arguments: args,
    };
}
function hasCircularRef(types, config = {
    depth: 1,
}) {
    const type = types[types.length - 1];
    if (isScalarType(type)) {
        return false;
    }
    const size = types.filter(t => t.name === type.name).length;
    return size > config.depth;
}
