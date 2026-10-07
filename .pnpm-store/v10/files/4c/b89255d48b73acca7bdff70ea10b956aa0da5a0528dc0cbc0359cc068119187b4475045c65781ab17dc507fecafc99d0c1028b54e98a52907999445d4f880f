import { getOperationASTFromRequest } from './getOperationASTFromRequest.js';
import { Kind, isListType, getNullableType, isAbstractType, isObjectType, TypeNameMetaFieldDef, SchemaMetaFieldDef, } from 'graphql';
import { collectFields, collectSubFields } from './collectFields.js';
export function visitData(data, enter, leave) {
    if (Array.isArray(data)) {
        return data.map(value => visitData(value, enter, leave));
    }
    else if (typeof data === 'object') {
        const newData = enter != null ? enter(data) : data;
        if (newData != null) {
            for (const key in newData) {
                const value = newData[key];
                Object.defineProperty(newData, key, {
                    value: visitData(value, enter, leave),
                });
            }
        }
        return leave != null ? leave(newData) : newData;
    }
    return data;
}
export function visitErrors(errors, visitor) {
    return errors.map(error => visitor(error));
}
export function visitResult(result, request, schema, resultVisitorMap, errorVisitorMap) {
    const fragments = request.document.definitions.reduce((acc, def) => {
        if (def.kind === Kind.FRAGMENT_DEFINITION) {
            acc[def.name.value] = def;
        }
        return acc;
    }, {});
    const variableValues = request.variables || {};
    const errorInfo = {
        segmentInfoMap: new Map(),
        unpathedErrors: new Set(),
    };
    const data = result.data;
    const errors = result.errors;
    const visitingErrors = errors != null && errorVisitorMap != null;
    const operationDocumentNode = getOperationASTFromRequest(request);
    if (data != null && operationDocumentNode != null) {
        result.data = visitRoot(data, operationDocumentNode, schema, fragments, variableValues, resultVisitorMap, visitingErrors ? errors : undefined, errorInfo);
    }
    if (errors != null && errorVisitorMap) {
        result.errors = visitErrorsByType(errors, errorVisitorMap, errorInfo);
    }
    return result;
}
function visitErrorsByType(errors, errorVisitorMap, errorInfo) {
    const segmentInfoMap = errorInfo.segmentInfoMap;
    const unpathedErrors = errorInfo.unpathedErrors;
    const unpathedErrorVisitor = errorVisitorMap['__unpathed'];
    return errors.map(originalError => {
        const pathSegmentsInfo = segmentInfoMap.get(originalError);
        const newError = pathSegmentsInfo == null
            ? originalError
            : pathSegmentsInfo.reduceRight((acc, segmentInfo) => {
                const typeName = segmentInfo.type.name;
                const typeVisitorMap = errorVisitorMap[typeName];
                if (typeVisitorMap == null) {
                    return acc;
                }
                const errorVisitor = typeVisitorMap[segmentInfo.fieldName];
                return errorVisitor == null ? acc : errorVisitor(acc, segmentInfo.pathIndex);
            }, originalError);
        if (unpathedErrorVisitor && unpathedErrors.has(originalError)) {
            return unpathedErrorVisitor(newError);
        }
        return newError;
    });
}
function getOperationRootType(schema, operationDef) {
    switch (operationDef.operation) {
        case 'query':
            return schema.getQueryType();
        case 'mutation':
            return schema.getMutationType();
        case 'subscription':
            return schema.getSubscriptionType();
    }
}
function visitRoot(root, operation, schema, fragments, variableValues, resultVisitorMap, errors, errorInfo) {
    const operationRootType = getOperationRootType(schema, operation);
    const collectedFields = collectFields(schema, fragments, variableValues, operationRootType, operation.selectionSet, new Map(), new Set());
    return visitObjectValue(root, operationRootType, collectedFields, schema, fragments, variableValues, resultVisitorMap, 0, errors, errorInfo);
}
function visitObjectValue(object, type, fieldNodeMap, schema, fragments, variableValues, resultVisitorMap, pathIndex, errors, errorInfo) {
    var _a;
    const fieldMap = type.getFields();
    const typeVisitorMap = resultVisitorMap === null || resultVisitorMap === void 0 ? void 0 : resultVisitorMap[type.name];
    const enterObject = typeVisitorMap === null || typeVisitorMap === void 0 ? void 0 : typeVisitorMap.__enter;
    const newObject = enterObject != null ? enterObject(object) : object;
    let sortedErrors;
    let errorMap = null;
    if (errors != null) {
        sortedErrors = sortErrorsByPathSegment(errors, pathIndex);
        errorMap = sortedErrors.errorMap;
        for (const error of sortedErrors.unpathedErrors) {
            errorInfo.unpathedErrors.add(error);
        }
    }
    for (const [responseKey, subFieldNodes] of fieldNodeMap) {
        const fieldName = subFieldNodes[0].name.value;
        let fieldType = (_a = fieldMap[fieldName]) === null || _a === void 0 ? void 0 : _a.type;
        if (fieldType == null) {
            switch (fieldName) {
                case '__typename':
                    fieldType = TypeNameMetaFieldDef.type;
                    break;
                case '__schema':
                    fieldType = SchemaMetaFieldDef.type;
                    break;
            }
        }
        const newPathIndex = pathIndex + 1;
        let fieldErrors;
        if (errorMap) {
            fieldErrors = errorMap[responseKey];
            if (fieldErrors != null) {
                delete errorMap[responseKey];
            }
            addPathSegmentInfo(type, fieldName, newPathIndex, fieldErrors, errorInfo);
        }
        const newValue = visitFieldValue(object[responseKey], fieldType, subFieldNodes, schema, fragments, variableValues, resultVisitorMap, newPathIndex, fieldErrors, errorInfo);
        updateObject(newObject, responseKey, newValue, typeVisitorMap, fieldName);
    }
    const oldTypename = newObject.__typename;
    if (oldTypename != null) {
        updateObject(newObject, '__typename', oldTypename, typeVisitorMap, '__typename');
    }
    if (errorMap) {
        for (const errorsKey in errorMap) {
            const errors = errorMap[errorsKey];
            for (const error of errors) {
                errorInfo.unpathedErrors.add(error);
            }
        }
    }
    const leaveObject = typeVisitorMap === null || typeVisitorMap === void 0 ? void 0 : typeVisitorMap.__leave;
    return leaveObject != null ? leaveObject(newObject) : newObject;
}
function updateObject(object, responseKey, newValue, typeVisitorMap, fieldName) {
    if (typeVisitorMap == null) {
        object[responseKey] = newValue;
        return;
    }
    const fieldVisitor = typeVisitorMap[fieldName];
    if (fieldVisitor == null) {
        object[responseKey] = newValue;
        return;
    }
    const visitedValue = fieldVisitor(newValue);
    if (visitedValue === undefined) {
        delete object[responseKey];
        return;
    }
    object[responseKey] = visitedValue;
}
function visitListValue(list, returnType, fieldNodes, schema, fragments, variableValues, resultVisitorMap, pathIndex, errors, errorInfo) {
    return list.map(listMember => visitFieldValue(listMember, returnType, fieldNodes, schema, fragments, variableValues, resultVisitorMap, pathIndex + 1, errors, errorInfo));
}
function visitFieldValue(value, returnType, fieldNodes, schema, fragments, variableValues, resultVisitorMap, pathIndex, errors = [], errorInfo) {
    if (value == null) {
        return value;
    }
    const nullableType = getNullableType(returnType);
    if (isListType(nullableType)) {
        return visitListValue(value, nullableType.ofType, fieldNodes, schema, fragments, variableValues, resultVisitorMap, pathIndex, errors, errorInfo);
    }
    else if (isAbstractType(nullableType)) {
        const finalType = schema.getType(value.__typename);
        const collectedFields = collectSubFields(schema, fragments, variableValues, finalType, fieldNodes);
        return visitObjectValue(value, finalType, collectedFields, schema, fragments, variableValues, resultVisitorMap, pathIndex, errors, errorInfo);
    }
    else if (isObjectType(nullableType)) {
        const collectedFields = collectSubFields(schema, fragments, variableValues, nullableType, fieldNodes);
        return visitObjectValue(value, nullableType, collectedFields, schema, fragments, variableValues, resultVisitorMap, pathIndex, errors, errorInfo);
    }
    const typeVisitorMap = resultVisitorMap === null || resultVisitorMap === void 0 ? void 0 : resultVisitorMap[nullableType.name];
    if (typeVisitorMap == null) {
        return value;
    }
    const visitedValue = typeVisitorMap(value);
    return visitedValue === undefined ? value : visitedValue;
}
function sortErrorsByPathSegment(errors, pathIndex) {
    var _a;
    const errorMap = Object.create(null);
    const unpathedErrors = new Set();
    for (const error of errors) {
        const pathSegment = (_a = error.path) === null || _a === void 0 ? void 0 : _a[pathIndex];
        if (pathSegment == null) {
            unpathedErrors.add(error);
            continue;
        }
        if (pathSegment in errorMap) {
            errorMap[pathSegment].push(error);
        }
        else {
            errorMap[pathSegment] = [error];
        }
    }
    return {
        errorMap,
        unpathedErrors,
    };
}
function addPathSegmentInfo(type, fieldName, pathIndex, errors = [], errorInfo) {
    for (const error of errors) {
        const segmentInfo = {
            type,
            fieldName,
            pathIndex,
        };
        const pathSegmentsInfo = errorInfo.segmentInfoMap.get(error);
        if (pathSegmentsInfo == null) {
            errorInfo.segmentInfoMap.set(error, [segmentInfo]);
        }
        else {
            pathSegmentsInfo.push(segmentInfo);
        }
    }
}
