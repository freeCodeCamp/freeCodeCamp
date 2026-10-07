"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneTypeTo = exports.unwrapTypeNameString = exports.replaceTC = exports.changeUnwrappedTC = exports.unwrapOutputTC = exports.unwrapInputTC = exports.unwrapTC = exports.getComposeTypeName = exports.getGraphQLType = exports.isTypeComposer = exports.isNamedTypeComposer = exports.isComposeInputType = exports.isComposeOutputType = exports.isComposeType = exports.isComposeNamedType = exports.isSomeInputTypeComposer = exports.isSomeOutputTypeComposer = exports.isUnionTypeDefinitionString = exports.isInterfaceTypeDefinitionString = exports.isScalarTypeDefinitionString = exports.isEnumTypeDefinitionString = exports.isInputTypeDefinitionString = exports.isOutputTypeDefinitionString = exports.isSomeInputTypeDefinitionString = exports.isSomeOutputTypeDefinitionString = exports.isTypeDefinitionString = exports.isWrappedTypeNameString = exports.isTypeNameString = void 0;
const graphql_1 = require("../graphql");
const is_1 = require("./is");
const misc_1 = require("./misc");
const dedent_1 = require("./dedent");
const ObjectTypeComposer_1 = require("../ObjectTypeComposer");
const InputTypeComposer_1 = require("../InputTypeComposer");
const ScalarTypeComposer_1 = require("../ScalarTypeComposer");
const EnumTypeComposer_1 = require("../EnumTypeComposer");
const InterfaceTypeComposer_1 = require("../InterfaceTypeComposer");
const UnionTypeComposer_1 = require("../UnionTypeComposer");
const Resolver_1 = require("../Resolver");
const NonNullComposer_1 = require("../NonNullComposer");
const ListComposer_1 = require("../ListComposer");
const ThunkComposer_1 = require("../ThunkComposer");
const deprecate_1 = __importDefault(require("./deprecate"));
function isTypeNameString(str) {
    return /^[_A-Za-z][_0-9A-Za-z]*$/.test(str);
}
exports.isTypeNameString = isTypeNameString;
function isWrappedTypeNameString(str) {
    return isTypeNameString(unwrapTypeNameString(str));
}
exports.isWrappedTypeNameString = isWrappedTypeNameString;
function isTypeDefinitionString(str) {
    return (isOutputTypeDefinitionString(str) ||
        isInputTypeDefinitionString(str) ||
        isEnumTypeDefinitionString(str) ||
        isScalarTypeDefinitionString(str) ||
        isInterfaceTypeDefinitionString(str) ||
        isUnionTypeDefinitionString(str));
}
exports.isTypeDefinitionString = isTypeDefinitionString;
function isSomeOutputTypeDefinitionString(str) {
    return (isOutputTypeDefinitionString(str) ||
        isEnumTypeDefinitionString(str) ||
        isScalarTypeDefinitionString(str) ||
        isInterfaceTypeDefinitionString(str) ||
        isUnionTypeDefinitionString(str));
}
exports.isSomeOutputTypeDefinitionString = isSomeOutputTypeDefinitionString;
function isSomeInputTypeDefinitionString(str) {
    return (isInputTypeDefinitionString(str) ||
        isEnumTypeDefinitionString(str) ||
        isScalarTypeDefinitionString(str));
}
exports.isSomeInputTypeDefinitionString = isSomeInputTypeDefinitionString;
function isOutputTypeDefinitionString(str) {
    return /type\s[^{]+\{[^}]+\}/im.test(str);
}
exports.isOutputTypeDefinitionString = isOutputTypeDefinitionString;
function isInputTypeDefinitionString(str) {
    return /input\s[^{]+\{[^}]+\}/im.test(str);
}
exports.isInputTypeDefinitionString = isInputTypeDefinitionString;
function isEnumTypeDefinitionString(str) {
    return /enum\s[^{]+\{[^}]+\}/im.test(str);
}
exports.isEnumTypeDefinitionString = isEnumTypeDefinitionString;
function isScalarTypeDefinitionString(str) {
    return /scalar\s/im.test(str);
}
exports.isScalarTypeDefinitionString = isScalarTypeDefinitionString;
function isInterfaceTypeDefinitionString(str) {
    return /interface\s/im.test(str);
}
exports.isInterfaceTypeDefinitionString = isInterfaceTypeDefinitionString;
function isUnionTypeDefinitionString(str) {
    return /union\s/im.test(str);
}
exports.isUnionTypeDefinitionString = isUnionTypeDefinitionString;
function isSomeOutputTypeComposer(type) {
    return (type instanceof ObjectTypeComposer_1.ObjectTypeComposer ||
        type instanceof InterfaceTypeComposer_1.InterfaceTypeComposer ||
        type instanceof EnumTypeComposer_1.EnumTypeComposer ||
        type instanceof UnionTypeComposer_1.UnionTypeComposer ||
        type instanceof ScalarTypeComposer_1.ScalarTypeComposer ||
        (type instanceof NonNullComposer_1.NonNullComposer && isSomeOutputTypeComposer(type.ofType)) ||
        (type instanceof ListComposer_1.ListComposer && isSomeOutputTypeComposer(type.ofType)) ||
        type instanceof ThunkComposer_1.ThunkComposer);
}
exports.isSomeOutputTypeComposer = isSomeOutputTypeComposer;
function isSomeInputTypeComposer(type) {
    return (type instanceof InputTypeComposer_1.InputTypeComposer ||
        type instanceof EnumTypeComposer_1.EnumTypeComposer ||
        type instanceof ScalarTypeComposer_1.ScalarTypeComposer ||
        (type instanceof NonNullComposer_1.NonNullComposer && isSomeInputTypeComposer(type.ofType)) ||
        (type instanceof ListComposer_1.ListComposer && isSomeInputTypeComposer(type.ofType)) ||
        type instanceof ThunkComposer_1.ThunkComposer);
}
exports.isSomeInputTypeComposer = isSomeInputTypeComposer;
function isComposeNamedType(type) {
    return ((0, graphql_1.isNamedType)(type) ||
        type instanceof ObjectTypeComposer_1.ObjectTypeComposer ||
        type instanceof InputTypeComposer_1.InputTypeComposer ||
        type instanceof InterfaceTypeComposer_1.InterfaceTypeComposer ||
        type instanceof EnumTypeComposer_1.EnumTypeComposer ||
        type instanceof UnionTypeComposer_1.UnionTypeComposer ||
        type instanceof ScalarTypeComposer_1.ScalarTypeComposer);
}
exports.isComposeNamedType = isComposeNamedType;
function isComposeType(type) {
    return (isComposeNamedType(type) ||
        (Array.isArray(type) && isComposeType(type[0])) ||
        type instanceof NonNullComposer_1.NonNullComposer ||
        type instanceof ListComposer_1.ListComposer ||
        type instanceof ThunkComposer_1.ThunkComposer ||
        type instanceof Resolver_1.Resolver ||
        (0, graphql_1.isType)(type));
}
exports.isComposeType = isComposeType;
function isComposeOutputType(type) {
    return ((0, graphql_1.isOutputType)(type) ||
        (Array.isArray(type) && isComposeOutputType(type[0])) ||
        isSomeOutputTypeComposer(type) ||
        type instanceof Resolver_1.Resolver);
}
exports.isComposeOutputType = isComposeOutputType;
function isComposeInputType(type) {
    return ((0, graphql_1.isInputType)(type) ||
        (Array.isArray(type) && isComposeInputType(type[0])) ||
        isSomeInputTypeComposer(type));
}
exports.isComposeInputType = isComposeInputType;
function isNamedTypeComposer(type) {
    return (type instanceof ObjectTypeComposer_1.ObjectTypeComposer ||
        type instanceof InputTypeComposer_1.InputTypeComposer ||
        type instanceof ScalarTypeComposer_1.ScalarTypeComposer ||
        type instanceof EnumTypeComposer_1.EnumTypeComposer ||
        type instanceof InterfaceTypeComposer_1.InterfaceTypeComposer ||
        type instanceof UnionTypeComposer_1.UnionTypeComposer);
}
exports.isNamedTypeComposer = isNamedTypeComposer;
function isTypeComposer(type) {
    return (isNamedTypeComposer(type) ||
        type instanceof ListComposer_1.ListComposer ||
        type instanceof NonNullComposer_1.NonNullComposer ||
        type instanceof ThunkComposer_1.ThunkComposer);
}
exports.isTypeComposer = isTypeComposer;
function getGraphQLType(anyType) {
    let type = anyType;
    if (type && (0, is_1.isFunction)(type.getType)) {
        type = type.getType();
    }
    if (!(0, graphql_1.isType)(type)) {
        throw new Error(`You provide incorrect type for 'getGraphQLType' method: ${(0, misc_1.inspect)(type)}`);
    }
    return type;
}
exports.getGraphQLType = getGraphQLType;
function getComposeTypeName(type, sc) {
    if (typeof type === 'string') {
        if (/^[_a-zA-Z][_a-zA-Z0-9]*$/.test(type)) {
            return type;
        }
        else {
            const docNode = (0, graphql_1.parse)(type);
            if (docNode.definitions[0] &&
                docNode.definitions[0].name &&
                typeof docNode.definitions[0].name.value === 'string') {
                return docNode.definitions[0].name.value;
            }
        }
        throw new Error(`Cannot get type name from string: ${(0, misc_1.inspect)(type)}`);
    }
    else if ((0, is_1.isFunction)(type)) {
        return getComposeTypeName(type(sc), sc);
    }
    else if (isNamedTypeComposer(type)) {
        return type.getTypeName();
    }
    else {
        try {
            const gqlType = getGraphQLType(type);
            if (typeof gqlType.name === 'string') {
                return gqlType.name;
            }
        }
        catch (e) {
            throw new Error(`Cannot get type name from ${(0, misc_1.inspect)(type)}`);
        }
    }
    throw new Error(`Cannot get type name from ${(0, misc_1.inspect)(type)}`);
}
exports.getComposeTypeName = getComposeTypeName;
function unwrapTC(anyTC) {
    if (anyTC instanceof NonNullComposer_1.NonNullComposer ||
        anyTC instanceof ListComposer_1.ListComposer ||
        anyTC instanceof ThunkComposer_1.ThunkComposer) {
        const unwrappedTC = anyTC.getUnwrappedTC();
        return unwrapTC(unwrappedTC);
    }
    return anyTC;
}
exports.unwrapTC = unwrapTC;
function unwrapInputTC(inputTC) {
    return unwrapTC(inputTC);
}
exports.unwrapInputTC = unwrapInputTC;
function unwrapOutputTC(outputTC) {
    return unwrapTC(outputTC);
}
exports.unwrapOutputTC = unwrapOutputTC;
function changeUnwrappedTC(anyTC, cb) {
    (0, deprecate_1.default)('Please use `replaceTC()` function instead.');
    return replaceTC(anyTC, cb);
}
exports.changeUnwrappedTC = changeUnwrappedTC;
function replaceTC(anyTC, replaceByTC) {
    let tc = anyTC;
    const wrappers = [];
    while (tc instanceof ListComposer_1.ListComposer ||
        tc instanceof NonNullComposer_1.NonNullComposer ||
        tc instanceof ThunkComposer_1.ThunkComposer) {
        if (tc instanceof ThunkComposer_1.ThunkComposer) {
            tc = tc.getUnwrappedTC();
        }
        else {
            wrappers.unshift(tc.constructor);
            tc = tc.ofType;
        }
    }
    tc = (0, is_1.isFunction)(replaceByTC) ? replaceByTC(tc) : replaceByTC;
    if (tc) {
        tc = wrappers.reduce((type, Wrapper) => new Wrapper(type), tc);
    }
    return tc;
}
exports.replaceTC = replaceTC;
function unwrapTypeNameString(str) {
    if (str.endsWith('!')) {
        return unwrapTypeNameString(str.slice(0, -1));
    }
    else if (str.startsWith('[') && str.endsWith(']')) {
        return unwrapTypeNameString(str.slice(1, -1));
    }
    return str;
}
exports.unwrapTypeNameString = unwrapTypeNameString;
function cloneTypeTo(type, anotherSchemaComposer, cloneMap = new Map()) {
    if (cloneMap.has(type)) {
        return cloneMap.get(type);
    }
    else if (typeof type === 'string') {
        return type;
    }
    else if (isComposeType(type)) {
        if (Array.isArray(type))
            return type[0].cloneTo(anotherSchemaComposer, cloneMap);
        else
            return type.cloneTo(anotherSchemaComposer, cloneMap);
    }
    else if ((0, graphql_1.isType)(type)) {
        const tc = anotherSchemaComposer.typeMapper.convertGraphQLTypeToComposer(type);
        cloneMap.set(type, tc);
        return tc;
    }
    else {
        throw new Error((0, dedent_1.dedent) `
      Something strange was provided to utils cloneTypeTo() method:
        ${(0, misc_1.inspect)(type)}
    `);
    }
}
exports.cloneTypeTo = cloneTypeTo;
//# sourceMappingURL=typeHelpers.js.map