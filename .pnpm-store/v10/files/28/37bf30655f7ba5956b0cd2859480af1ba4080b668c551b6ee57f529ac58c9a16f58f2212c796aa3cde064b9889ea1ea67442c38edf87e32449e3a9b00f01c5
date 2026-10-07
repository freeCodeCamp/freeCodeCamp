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
exports.getTypeName = getTypeName;
const tsutils = __importStar(require("ts-api-utils"));
const ts = __importStar(require("typescript"));
/**
 * Get the type name of a given type.
 * @param typeChecker The context sensitive TypeScript TypeChecker.
 * @param type The type to get the name of.
 */
function getTypeName(typeChecker, type) {
    // It handles `string` and string literal types as string.
    if (tsutils.isTypeFlagSet(type, ts.TypeFlags.StringLike)) {
        return 'string';
    }
    // If the type is a type parameter which extends primitive string types,
    // but it was not recognized as a string like. So check the constraint
    // type of the type parameter.
    if (tsutils.isTypeFlagSet(type, ts.TypeFlags.TypeParameter)) {
        // `type.getConstraint()` method doesn't return the constraint type of
        // the type parameter for some reason. So this gets the constraint type
        // via AST.
        const symbol = type.getSymbol();
        const decls = symbol?.getDeclarations();
        const typeParamDecl = decls?.[0];
        if (typeParamDecl != null &&
            ts.isTypeParameterDeclaration(typeParamDecl) &&
            typeParamDecl.constraint != null) {
            return getTypeName(typeChecker, typeChecker.getTypeFromTypeNode(typeParamDecl.constraint));
        }
    }
    // If the type is a union and all types in the union are string like,
    // return `string`. For example:
    // - `"a" | "b"` is string.
    // - `string | string[]` is not string.
    if (type.isUnion() &&
        type.types
            .map(value => getTypeName(typeChecker, value))
            .every(t => t === 'string')) {
        return 'string';
    }
    // If the type is an intersection and a type in the intersection is string
    // like, return `string`. For example: `string & {__htmlEscaped: void}`
    if (type.isIntersection() &&
        type.types
            .map(value => getTypeName(typeChecker, value))
            .some(t => t === 'string')) {
        return 'string';
    }
    return typeChecker.typeToString(type);
}
//# sourceMappingURL=getTypeName.js.map