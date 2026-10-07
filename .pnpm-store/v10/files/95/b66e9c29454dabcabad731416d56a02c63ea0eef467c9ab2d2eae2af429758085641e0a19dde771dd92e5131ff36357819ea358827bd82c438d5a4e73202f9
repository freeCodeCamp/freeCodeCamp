"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTypeTemplateLiteralType = exports.isTypeBigIntLiteralType = exports.typeIsOrHasBaseType = exports.isAnyOrAnyArrayTypeDiscriminated = exports.AnyType = exports.isTypeUnknownArrayType = exports.isTypeAnyArrayType = exports.isTypeAnyType = exports.isTypeReferenceType = exports.isTypeUnknownType = exports.isTypeNeverType = exports.isTypeArrayTypeOrUnionOfArrayTypes = exports.isNullableType = void 0;
const debug_1 = __importDefault(require("debug"));
const tsutils_1 = require("tsutils");
const ts = __importStar(require("typescript"));
const getTypeArguments_1 = require("./getTypeArguments");
const typeFlagUtils_1 = require("./typeFlagUtils");
const log = (0, debug_1.default)('typescript-eslint:eslint-plugin:utils:types');
/**
 * Checks if the given type is (or accepts) nullable
 * @param isReceiver true if the type is a receiving type (i.e. the type of a called function's parameter)
 */
function isNullableType(type, { isReceiver = false, allowUndefined = true, } = {}) {
    const flags = (0, typeFlagUtils_1.getTypeFlags)(type);
    if (isReceiver && flags & (ts.TypeFlags.Any | ts.TypeFlags.Unknown)) {
        return true;
    }
    if (allowUndefined) {
        return (flags & (ts.TypeFlags.Null | ts.TypeFlags.Undefined)) !== 0;
    }
    else {
        return (flags & ts.TypeFlags.Null) !== 0;
    }
}
exports.isNullableType = isNullableType;
/**
 * Checks if the given type is either an array type,
 * or a union made up solely of array types.
 */
function isTypeArrayTypeOrUnionOfArrayTypes(type, checker) {
    for (const t of (0, tsutils_1.unionTypeParts)(type)) {
        if (!checker.isArrayType(t)) {
            return false;
        }
    }
    return true;
}
exports.isTypeArrayTypeOrUnionOfArrayTypes = isTypeArrayTypeOrUnionOfArrayTypes;
/**
 * @returns true if the type is `never`
 */
function isTypeNeverType(type) {
    return (0, typeFlagUtils_1.isTypeFlagSet)(type, ts.TypeFlags.Never);
}
exports.isTypeNeverType = isTypeNeverType;
/**
 * @returns true if the type is `unknown`
 */
function isTypeUnknownType(type) {
    return (0, typeFlagUtils_1.isTypeFlagSet)(type, ts.TypeFlags.Unknown);
}
exports.isTypeUnknownType = isTypeUnknownType;
// https://github.com/microsoft/TypeScript/blob/42aa18bf442c4df147e30deaf27261a41cbdc617/src/compiler/types.ts#L5157
const Nullable = ts.TypeFlags.Undefined | ts.TypeFlags.Null;
// https://github.com/microsoft/TypeScript/blob/42aa18bf442c4df147e30deaf27261a41cbdc617/src/compiler/types.ts#L5187
const ObjectFlagsType = ts.TypeFlags.Any |
    Nullable |
    ts.TypeFlags.Never |
    ts.TypeFlags.Object |
    ts.TypeFlags.Union |
    ts.TypeFlags.Intersection;
function isTypeReferenceType(type) {
    if ((type.flags & ObjectFlagsType) === 0) {
        return false;
    }
    const objectTypeFlags = type.objectFlags;
    return (objectTypeFlags & ts.ObjectFlags.Reference) !== 0;
}
exports.isTypeReferenceType = isTypeReferenceType;
/**
 * @returns true if the type is `any`
 */
function isTypeAnyType(type) {
    if ((0, typeFlagUtils_1.isTypeFlagSet)(type, ts.TypeFlags.Any)) {
        if (type.intrinsicName === 'error') {
            log('Found an "error" any type');
        }
        return true;
    }
    return false;
}
exports.isTypeAnyType = isTypeAnyType;
/**
 * @returns true if the type is `any[]`
 */
function isTypeAnyArrayType(type, checker) {
    return (checker.isArrayType(type) &&
        isTypeAnyType(
        // getTypeArguments was only added in TS3.7
        (0, getTypeArguments_1.getTypeArguments)(type, checker)[0]));
}
exports.isTypeAnyArrayType = isTypeAnyArrayType;
/**
 * @returns true if the type is `unknown[]`
 */
function isTypeUnknownArrayType(type, checker) {
    return (checker.isArrayType(type) &&
        isTypeUnknownType(
        // getTypeArguments was only added in TS3.7
        (0, getTypeArguments_1.getTypeArguments)(type, checker)[0]));
}
exports.isTypeUnknownArrayType = isTypeUnknownArrayType;
var AnyType;
(function (AnyType) {
    AnyType[AnyType["Any"] = 0] = "Any";
    AnyType[AnyType["AnyArray"] = 1] = "AnyArray";
    AnyType[AnyType["Safe"] = 2] = "Safe";
})(AnyType || (exports.AnyType = AnyType = {}));
/**
 * @returns `AnyType.Any` if the type is `any`, `AnyType.AnyArray` if the type is `any[]` or `readonly any[]`,
 *          otherwise it returns `AnyType.Safe`.
 */
function isAnyOrAnyArrayTypeDiscriminated(node, checker) {
    const type = checker.getTypeAtLocation(node);
    if (isTypeAnyType(type)) {
        return AnyType.Any;
    }
    if (isTypeAnyArrayType(type, checker)) {
        return AnyType.AnyArray;
    }
    return AnyType.Safe;
}
exports.isAnyOrAnyArrayTypeDiscriminated = isAnyOrAnyArrayTypeDiscriminated;
/**
 * @returns Whether a type is an instance of the parent type, including for the parent's base types.
 */
function typeIsOrHasBaseType(type, parentType) {
    const parentSymbol = parentType.getSymbol();
    if (!type.getSymbol() || !parentSymbol) {
        return false;
    }
    const typeAndBaseTypes = [type];
    const ancestorTypes = type.getBaseTypes();
    if (ancestorTypes) {
        typeAndBaseTypes.push(...ancestorTypes);
    }
    for (const baseType of typeAndBaseTypes) {
        const baseSymbol = baseType.getSymbol();
        if (baseSymbol && baseSymbol.name === parentSymbol.name) {
            return true;
        }
    }
    return false;
}
exports.typeIsOrHasBaseType = typeIsOrHasBaseType;
function isTypeBigIntLiteralType(type) {
    return (0, typeFlagUtils_1.isTypeFlagSet)(type, ts.TypeFlags.BigIntLiteral);
}
exports.isTypeBigIntLiteralType = isTypeBigIntLiteralType;
function isTypeTemplateLiteralType(type) {
    return (0, typeFlagUtils_1.isTypeFlagSet)(type, ts.TypeFlags.TemplateLiteral);
}
exports.isTypeTemplateLiteralType = isTypeTemplateLiteralType;
//# sourceMappingURL=predicates.js.map