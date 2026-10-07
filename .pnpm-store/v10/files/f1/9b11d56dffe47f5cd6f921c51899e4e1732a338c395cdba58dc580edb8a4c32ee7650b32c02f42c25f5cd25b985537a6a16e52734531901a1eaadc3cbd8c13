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
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTypeReadonly = exports.readonlynessOptionsDefaults = exports.readonlynessOptionsSchema = void 0;
const utils_1 = require("@typescript-eslint/utils");
const tsutils_1 = require("tsutils");
const ts = __importStar(require("typescript"));
const getTypeArguments_1 = require("./getTypeArguments");
const propertyTypes_1 = require("./propertyTypes");
exports.readonlynessOptionsSchema = {
    type: 'object',
    additionalProperties: false,
    properties: {
        treatMethodsAsReadonly: {
            type: 'boolean',
        },
    },
};
exports.readonlynessOptionsDefaults = {
    treatMethodsAsReadonly: false,
};
function hasSymbol(node) {
    return Object.prototype.hasOwnProperty.call(node, 'symbol');
}
function isTypeReadonlyArrayOrTuple(checker, type, options, seenTypes) {
    function checkTypeArguments(arrayType) {
        const typeArguments = 
        // getTypeArguments was only added in TS3.7
        (0, getTypeArguments_1.getTypeArguments)(arrayType, checker);
        // this shouldn't happen in reality as:
        // - tuples require at least 1 type argument
        // - ReadonlyArray requires at least 1 type argument
        /* istanbul ignore if */ if (typeArguments.length === 0) {
            return 3 /* Readonlyness.Readonly */;
        }
        // validate the element types are also readonly
        if (typeArguments.some(typeArg => isTypeReadonlyRecurser(checker, typeArg, options, seenTypes) ===
            2 /* Readonlyness.Mutable */)) {
            return 2 /* Readonlyness.Mutable */;
        }
        return 3 /* Readonlyness.Readonly */;
    }
    if (checker.isArrayType(type)) {
        const symbol = utils_1.ESLintUtils.nullThrows(type.getSymbol(), utils_1.ESLintUtils.NullThrowsReasons.MissingToken('symbol', 'array type'));
        const escapedName = symbol.getEscapedName();
        if (escapedName === 'Array') {
            return 2 /* Readonlyness.Mutable */;
        }
        return checkTypeArguments(type);
    }
    if (checker.isTupleType(type)) {
        if (!type.target.readonly) {
            return 2 /* Readonlyness.Mutable */;
        }
        return checkTypeArguments(type);
    }
    return 1 /* Readonlyness.UnknownType */;
}
function isTypeReadonlyObject(checker, type, options, seenTypes) {
    function checkIndexSignature(kind) {
        const indexInfo = checker.getIndexInfoOfType(type, kind);
        if (indexInfo) {
            if (!indexInfo.isReadonly) {
                return 2 /* Readonlyness.Mutable */;
            }
            if (indexInfo.type === type || seenTypes.has(indexInfo.type)) {
                return 3 /* Readonlyness.Readonly */;
            }
            return isTypeReadonlyRecurser(checker, indexInfo.type, options, seenTypes);
        }
        return 1 /* Readonlyness.UnknownType */;
    }
    const properties = type.getProperties();
    if (properties.length) {
        // ensure the properties are marked as readonly
        for (const property of properties) {
            if (options.treatMethodsAsReadonly) {
                if (property.valueDeclaration !== undefined &&
                    hasSymbol(property.valueDeclaration) &&
                    (0, tsutils_1.isSymbolFlagSet)(property.valueDeclaration.symbol, ts.SymbolFlags.Method)) {
                    continue;
                }
                const declarations = property.getDeclarations();
                const lastDeclaration = declarations !== undefined && declarations.length > 0
                    ? declarations[declarations.length - 1]
                    : undefined;
                if (lastDeclaration !== undefined &&
                    hasSymbol(lastDeclaration) &&
                    (0, tsutils_1.isSymbolFlagSet)(lastDeclaration.symbol, ts.SymbolFlags.Method)) {
                    continue;
                }
            }
            if ((0, tsutils_1.isPropertyReadonlyInType)(type, property.getEscapedName(), checker)) {
                continue;
            }
            const name = ts.getNameOfDeclaration(property.valueDeclaration);
            if (name && ts.isPrivateIdentifier(name)) {
                continue;
            }
            return 2 /* Readonlyness.Mutable */;
        }
        // all properties were readonly
        // now ensure that all of the values are readonly also.
        // do this after checking property readonly-ness as a perf optimization,
        // as we might be able to bail out early due to a mutable property before
        // doing this deep, potentially expensive check.
        for (const property of properties) {
            const propertyType = utils_1.ESLintUtils.nullThrows((0, propertyTypes_1.getTypeOfPropertyOfType)(checker, type, property), utils_1.ESLintUtils.NullThrowsReasons.MissingToken(`property "${property.name}"`, 'type'));
            // handle recursive types.
            // we only need this simple check, because a mutable recursive type will break via the above prop readonly check
            if (seenTypes.has(propertyType)) {
                continue;
            }
            if (isTypeReadonlyRecurser(checker, propertyType, options, seenTypes) ===
                2 /* Readonlyness.Mutable */) {
                return 2 /* Readonlyness.Mutable */;
            }
        }
    }
    const isStringIndexSigReadonly = checkIndexSignature(ts.IndexKind.String);
    if (isStringIndexSigReadonly === 2 /* Readonlyness.Mutable */) {
        return isStringIndexSigReadonly;
    }
    const isNumberIndexSigReadonly = checkIndexSignature(ts.IndexKind.Number);
    if (isNumberIndexSigReadonly === 2 /* Readonlyness.Mutable */) {
        return isNumberIndexSigReadonly;
    }
    return 3 /* Readonlyness.Readonly */;
}
// a helper function to ensure the seenTypes map is always passed down, except by the external caller
function isTypeReadonlyRecurser(checker, type, options, seenTypes) {
    seenTypes.add(type);
    if ((0, tsutils_1.isUnionType)(type)) {
        // all types in the union must be readonly
        const result = (0, tsutils_1.unionTypeParts)(type).every(t => seenTypes.has(t) ||
            isTypeReadonlyRecurser(checker, t, options, seenTypes) ===
                3 /* Readonlyness.Readonly */);
        const readonlyness = result ? 3 /* Readonlyness.Readonly */ : 2 /* Readonlyness.Mutable */;
        return readonlyness;
    }
    if ((0, tsutils_1.isIntersectionType)(type)) {
        // Special case for handling arrays/tuples (as readonly arrays/tuples always have mutable methods).
        if (type.types.some(t => checker.isArrayType(t) || checker.isTupleType(t))) {
            const allReadonlyParts = type.types.every(t => seenTypes.has(t) ||
                isTypeReadonlyRecurser(checker, t, options, seenTypes) ===
                    3 /* Readonlyness.Readonly */);
            return allReadonlyParts ? 3 /* Readonlyness.Readonly */ : 2 /* Readonlyness.Mutable */;
        }
        // Normal case.
        const isReadonlyObject = isTypeReadonlyObject(checker, type, options, seenTypes);
        if (isReadonlyObject !== 1 /* Readonlyness.UnknownType */) {
            return isReadonlyObject;
        }
    }
    if ((0, tsutils_1.isConditionalType)(type)) {
        const result = [type.root.node.trueType, type.root.node.falseType]
            .map(checker.getTypeFromTypeNode)
            .every(t => seenTypes.has(t) ||
            isTypeReadonlyRecurser(checker, t, options, seenTypes) ===
                3 /* Readonlyness.Readonly */);
        const readonlyness = result ? 3 /* Readonlyness.Readonly */ : 2 /* Readonlyness.Mutable */;
        return readonlyness;
    }
    // all non-object, non-intersection types are readonly.
    // this should only be primitive types
    if (!(0, tsutils_1.isObjectType)(type)) {
        return 3 /* Readonlyness.Readonly */;
    }
    // pure function types are readonly
    if (type.getCallSignatures().length > 0 &&
        type.getProperties().length === 0) {
        return 3 /* Readonlyness.Readonly */;
    }
    const isReadonlyArray = isTypeReadonlyArrayOrTuple(checker, type, options, seenTypes);
    if (isReadonlyArray !== 1 /* Readonlyness.UnknownType */) {
        return isReadonlyArray;
    }
    const isReadonlyObject = isTypeReadonlyObject(checker, type, options, seenTypes);
    /* istanbul ignore else */ if (isReadonlyObject !== 1 /* Readonlyness.UnknownType */) {
        return isReadonlyObject;
    }
    throw new Error('Unhandled type');
}
/**
 * Checks if the given type is readonly
 */
function isTypeReadonly(checker, type, options = exports.readonlynessOptionsDefaults) {
    return (isTypeReadonlyRecurser(checker, type, options, new Set()) ===
        3 /* Readonlyness.Readonly */);
}
exports.isTypeReadonly = isTypeReadonly;
//# sourceMappingURL=isTypeReadonly.js.map