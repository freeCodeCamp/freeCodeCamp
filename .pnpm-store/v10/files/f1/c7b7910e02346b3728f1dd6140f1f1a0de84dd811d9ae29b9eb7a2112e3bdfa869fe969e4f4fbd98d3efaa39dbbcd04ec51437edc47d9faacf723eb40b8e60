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
exports.hasBaseTypes = hasBaseTypes;
exports.isNumberLike = isNumberLike;
exports.isStringLike = isStringLike;
exports.matchesTypeOrBaseType = matchesTypeOrBaseType;
const ts_api_utils_1 = require("ts-api-utils");
const tsutils = __importStar(require("ts-api-utils"));
const ts = __importStar(require("typescript"));
function getBaseTypesForType(checker, type) {
    if (!tsutils.isObjectType(type)) {
        return [];
    }
    const interfaceTarget = tsutils.isTypeReference(type) ? type.target : type;
    const interfaceType = tsutils.isObjectFlagSet(interfaceTarget, ts.ObjectFlags.Interface | ts.ObjectFlags.Class) && interfaceTarget;
    if (!interfaceType) {
        return [];
    }
    return checker.getBaseTypes(interfaceType);
}
function hasBaseTypes(type) {
    return ((0, ts_api_utils_1.isObjectType)(type) &&
        (0, ts_api_utils_1.isObjectFlagSet)(type, ts.ObjectFlags.Interface | ts.ObjectFlags.Class));
}
function isNumberLike(type) {
    return tsutils
        .unionConstituents(type)
        .every(unionPart => tsutils
        .intersectionConstituents(unionPart)
        .some(intersectionPart => tsutils.isTypeFlagSet(intersectionPart, ts.TypeFlags.NumberLike)));
}
function isStringLike(type) {
    return tsutils
        .unionConstituents(type)
        .every(unionPart => tsutils
        .intersectionConstituents(unionPart)
        .some(intersectionPart => tsutils.isTypeFlagSet(intersectionPart, ts.TypeFlags.StringLike)));
}
/**
 * Recursively checks if a type or any of its base types matches the provided
 * matcher function.
 * @param services Parser services with type information
 * @param matcher Function to test if a type matches the desired criteria
 * @param type The type to check
 * @param seen Set of already visited types to prevent infinite recursion
 * @returns `true` if the type or any of its base types match the matcher
 */
function matchesTypeOrBaseType(services, matcher, type, seen = new Set()) {
    if (seen.has(type)) {
        return false;
    }
    seen.add(type);
    if (matcher(type)) {
        return true;
    }
    const checker = services.program.getTypeChecker();
    return getBaseTypesForType(checker, type).some(base => matchesTypeOrBaseType(services, matcher, base, seen));
}
//# sourceMappingURL=baseTypeUtils.js.map