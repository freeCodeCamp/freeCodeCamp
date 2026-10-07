"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUnionTypeComposer = exports.isInterfaceTypeComposer = exports.isInputTypeComposer = exports.isObjectTypeComposer = exports.isEnumTypeComposer = exports.isScalarTypeComposer = exports.visitSchema = exports.getVisitKinds = void 0;
const ObjectTypeComposer_1 = require("../ObjectTypeComposer");
const InputTypeComposer_1 = require("../InputTypeComposer");
const ScalarTypeComposer_1 = require("../ScalarTypeComposer");
const EnumTypeComposer_1 = require("../EnumTypeComposer");
const InterfaceTypeComposer_1 = require("../InterfaceTypeComposer");
const UnionTypeComposer_1 = require("../UnionTypeComposer");
const typeHelpers_1 = require("./typeHelpers");
function getVisitKinds(tc, schema) {
    let kinds = [];
    if (tc instanceof ObjectTypeComposer_1.ObjectTypeComposer) {
        kinds = ['OBJECT_TYPE', 'COMPOSITE_TYPE', 'TYPE'];
        if (schema.Query === tc)
            kinds.unshift('QUERY', 'ROOT_OBJECT');
        if (schema.Mutation === tc)
            kinds.unshift('MUTATION', 'ROOT_OBJECT');
        if (schema.Subscription === tc)
            kinds.unshift('SUBSCRIPTION', 'ROOT_OBJECT');
    }
    else if (tc instanceof InputTypeComposer_1.InputTypeComposer) {
        kinds = ['INPUT_OBJECT_TYPE', 'TYPE'];
    }
    else if (tc instanceof InterfaceTypeComposer_1.InterfaceTypeComposer) {
        kinds = ['INTERFACE_TYPE', 'ABSTRACT_TYPE', 'COMPOSITE_TYPE', 'TYPE'];
    }
    else if (tc instanceof UnionTypeComposer_1.UnionTypeComposer) {
        kinds = ['UNION_TYPE', 'ABSTRACT_TYPE', 'COMPOSITE_TYPE', 'TYPE'];
    }
    else if (tc instanceof ScalarTypeComposer_1.ScalarTypeComposer) {
        kinds = ['SCALAR_TYPE', 'TYPE'];
    }
    else if (tc instanceof EnumTypeComposer_1.EnumTypeComposer) {
        kinds = ['ENUM_TYPE', 'TYPE'];
    }
    return kinds;
}
exports.getVisitKinds = getVisitKinds;
function visitSchema(schema, visitor) {
    const visitedTCs = new WeakSet();
    schema.forEach((value, key) => {
        if (visitedTCs.has(value))
            return;
        visitedTCs.add(value);
        let tc = value;
        const visitKinds = getVisitKinds(tc, schema);
        for (const kind of visitKinds) {
            const visitorFn = visitor[kind];
            if (visitorFn) {
                const result = visitorFn(tc, schema);
                if (result === null) {
                    schema.delete(key);
                }
                else if (result === false) {
                    break;
                }
                else if ((0, typeHelpers_1.isNamedTypeComposer)(result)) {
                    tc = result;
                    schema.set(key, tc);
                }
            }
        }
    });
}
exports.visitSchema = visitSchema;
function isScalarTypeComposer(type) {
    return type instanceof ScalarTypeComposer_1.ScalarTypeComposer;
}
exports.isScalarTypeComposer = isScalarTypeComposer;
function isEnumTypeComposer(type) {
    return type instanceof EnumTypeComposer_1.EnumTypeComposer;
}
exports.isEnumTypeComposer = isEnumTypeComposer;
function isObjectTypeComposer(type) {
    return type instanceof ObjectTypeComposer_1.ObjectTypeComposer;
}
exports.isObjectTypeComposer = isObjectTypeComposer;
function isInputTypeComposer(type) {
    return type instanceof InputTypeComposer_1.InputTypeComposer;
}
exports.isInputTypeComposer = isInputTypeComposer;
function isInterfaceTypeComposer(type) {
    return type instanceof InterfaceTypeComposer_1.InterfaceTypeComposer;
}
exports.isInterfaceTypeComposer = isInterfaceTypeComposer;
function isUnionTypeComposer(type) {
    return type instanceof UnionTypeComposer_1.UnionTypeComposer;
}
exports.isUnionTypeComposer = isUnionTypeComposer;
//# sourceMappingURL=schemaVisitor.js.map