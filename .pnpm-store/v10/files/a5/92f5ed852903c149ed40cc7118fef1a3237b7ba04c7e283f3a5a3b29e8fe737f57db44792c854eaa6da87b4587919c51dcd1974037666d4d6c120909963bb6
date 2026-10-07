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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.readonlynessOptionsDefaults = exports.readonlynessOptionsSchema = void 0;
exports.isTypeReadonly = isTypeReadonly;
const utils_1 = require("@typescript-eslint/utils");
const tsutils = __importStar(require("ts-api-utils"));
const ts = __importStar(require("typescript"));
const propertyTypes_1 = require("./propertyTypes");
const TypeOrValueSpecifier_1 = require("./TypeOrValueSpecifier");
var Readonlyness;
(function (Readonlyness) {
    /** the type cannot be handled by the function */
    Readonlyness[Readonlyness["UnknownType"] = 1] = "UnknownType";
    /** the type is mutable */
    Readonlyness[Readonlyness["Mutable"] = 2] = "Mutable";
    /** the type is readonly */
    Readonlyness[Readonlyness["Readonly"] = 3] = "Readonly";
})(Readonlyness || (Readonlyness = {}));
exports.readonlynessOptionsSchema = {
    additionalProperties: false,
    properties: {
        allow: TypeOrValueSpecifier_1.typeOrValueSpecifiersSchema,
        treatMethodsAsReadonly: {
            type: 'boolean',
        },
    },
    type: 'object',
};
exports.readonlynessOptionsDefaults = {
    allow: [],
    treatMethodsAsReadonly: false,
};
function hasSymbol(node) {
    return Object.hasOwn(node, 'symbol');
}
function isTypeReadonlyArrayOrTuple(program, type, options, seenTypes) {
    const checker = program.getTypeChecker();
    function checkTypeArguments(arrayType) {
        const typeArguments = checker.getTypeArguments(arrayType);
        // this shouldn't happen in reality as:
        // - tuples require at least 1 type argument
        // - ReadonlyArray requires at least 1 type argument
        /* istanbul ignore if */ if (typeArguments.length === 0) {
            return Readonlyness.Readonly;
        }
        // validate the element types are also readonly
        if (typeArguments.some(typeArg => isTypeReadonlyRecurser(program, typeArg, options, seenTypes) ===
            Readonlyness.Mutable)) {
            return Readonlyness.Mutable;
        }
        return Readonlyness.Readonly;
    }
    if (checker.isArrayType(type)) {
        const symbol = utils_1.ESLintUtils.nullThrows(type.getSymbol(), utils_1.ESLintUtils.NullThrowsReasons.MissingToken('symbol', 'array type'));
        const escapedName = symbol.getEscapedName();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
        if (escapedName === 'Array') {
            return Readonlyness.Mutable;
        }
        return checkTypeArguments(type);
    }
    if (checker.isTupleType(type)) {
        if (!type.target.readonly) {
            return Readonlyness.Mutable;
        }
        return checkTypeArguments(type);
    }
    return Readonlyness.UnknownType;
}
function isTypeReadonlyObject(program, type, options, seenTypes) {
    const checker = program.getTypeChecker();
    function checkIndexSignature(kind) {
        const indexInfo = checker.getIndexInfoOfType(type, kind);
        if (indexInfo) {
            if (!indexInfo.isReadonly) {
                return Readonlyness.Mutable;
            }
            if (indexInfo.type === type || seenTypes.has(indexInfo.type)) {
                return Readonlyness.Readonly;
            }
            return isTypeReadonlyRecurser(program, indexInfo.type, options, seenTypes);
        }
        return Readonlyness.UnknownType;
    }
    const properties = type.getProperties();
    if (properties.length) {
        // ensure the properties are marked as readonly
        for (const property of properties) {
            if (options.treatMethodsAsReadonly) {
                if (property.valueDeclaration != null &&
                    hasSymbol(property.valueDeclaration) &&
                    tsutils.isSymbolFlagSet(property.valueDeclaration.symbol, ts.SymbolFlags.Method)) {
                    continue;
                }
                const declarations = property.getDeclarations();
                const lastDeclaration = declarations != null && declarations.length > 0
                    ? declarations[declarations.length - 1]
                    : undefined;
                if (lastDeclaration != null &&
                    hasSymbol(lastDeclaration) &&
                    tsutils.isSymbolFlagSet(lastDeclaration.symbol, ts.SymbolFlags.Method)) {
                    continue;
                }
            }
            if (tsutils.isPropertyReadonlyInType(type, property.getEscapedName(), checker)) {
                continue;
            }
            const name = ts.getNameOfDeclaration(property.valueDeclaration);
            if (name && ts.isPrivateIdentifier(name)) {
                continue;
            }
            return Readonlyness.Mutable;
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
            if (isTypeReadonlyRecurser(program, propertyType, options, seenTypes) ===
                Readonlyness.Mutable) {
                return Readonlyness.Mutable;
            }
        }
    }
    const isStringIndexSigReadonly = checkIndexSignature(ts.IndexKind.String);
    if (isStringIndexSigReadonly === Readonlyness.Mutable) {
        return isStringIndexSigReadonly;
    }
    const isNumberIndexSigReadonly = checkIndexSignature(ts.IndexKind.Number);
    if (isNumberIndexSigReadonly === Readonlyness.Mutable) {
        return isNumberIndexSigReadonly;
    }
    return Readonlyness.Readonly;
}
// a helper function to ensure the seenTypes map is always passed down, except by the external caller
function isTypeReadonlyRecurser(program, type, options, seenTypes) {
    const checker = program.getTypeChecker();
    seenTypes.add(type);
    // If the type has an alias symbol, check it against the allow list first
    if (type.aliasSymbol && options.allow) {
        const aliasSymbol = type.aliasSymbol;
        const aliasMatches = options.allow.some(specifier => {
            const specifierName = typeof specifier === 'string' ? specifier : specifier.name;
            const names = Array.isArray(specifierName)
                ? specifierName
                : [specifierName];
            return names.includes(aliasSymbol.getName());
        });
        if (aliasMatches) {
            return Readonlyness.Readonly;
        }
    }
    if ((0, TypeOrValueSpecifier_1.typeMatchesSomeSpecifier)(type, options.allow, program)) {
        return Readonlyness.Readonly;
    }
    if (tsutils.isUnionType(type)) {
        // all types in the union must be readonly
        const result = tsutils
            .unionConstituents(type)
            .every(t => seenTypes.has(t) ||
            isTypeReadonlyRecurser(program, t, options, seenTypes) ===
                Readonlyness.Readonly);
        const readonlyness = result ? Readonlyness.Readonly : Readonlyness.Mutable;
        return readonlyness;
    }
    if (tsutils.isIntersectionType(type)) {
        // Special case for handling arrays/tuples (as readonly arrays/tuples always have mutable methods).
        if (type.types.some(t => checker.isArrayType(t) || checker.isTupleType(t))) {
            const allReadonlyParts = type.types.every(t => seenTypes.has(t) ||
                isTypeReadonlyRecurser(program, t, options, seenTypes) ===
                    Readonlyness.Readonly);
            return allReadonlyParts ? Readonlyness.Readonly : Readonlyness.Mutable;
        }
        // Normal case.
        const isReadonlyObject = isTypeReadonlyObject(program, type, options, seenTypes);
        if (isReadonlyObject !== Readonlyness.UnknownType) {
            return isReadonlyObject;
        }
    }
    if (tsutils.isConditionalType(type)) {
        const result = [type.root.node.trueType, type.root.node.falseType]
            .map(checker.getTypeFromTypeNode)
            .every(t => seenTypes.has(t) ||
            isTypeReadonlyRecurser(program, t, options, seenTypes) ===
                Readonlyness.Readonly);
        const readonlyness = result ? Readonlyness.Readonly : Readonlyness.Mutable;
        return readonlyness;
    }
    // all non-object, non-intersection types are readonly.
    // this should only be primitive types
    if (!tsutils.isObjectType(type)) {
        return Readonlyness.Readonly;
    }
    // pure function types are readonly
    if (type.getCallSignatures().length > 0 &&
        type.getProperties().length === 0) {
        return Readonlyness.Readonly;
    }
    const isReadonlyArray = isTypeReadonlyArrayOrTuple(program, type, options, seenTypes);
    if (isReadonlyArray !== Readonlyness.UnknownType) {
        return isReadonlyArray;
    }
    const isReadonlyObject = isTypeReadonlyObject(program, type, options, seenTypes);
    /* istanbul ignore else */ if (isReadonlyObject !== Readonlyness.UnknownType) {
        return isReadonlyObject;
    }
    throw new Error('Unhandled type');
}
/**
 * Checks if the given type is readonly
 */
function isTypeReadonly(program, type, options = exports.readonlynessOptionsDefaults) {
    return (isTypeReadonlyRecurser(program, type, options, new Set()) ===
        Readonlyness.Readonly);
}
//# sourceMappingURL=isTypeReadonly.js.map