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
exports.getTypeName = void 0;
const ts = __importStar(require("typescript"));
/**
 * Get the type name of a given type.
 * @param typeChecker The context sensitive TypeScript TypeChecker.
 * @param type The type to get the name of.
 */
function getTypeName(typeChecker, type) {
    // It handles `string` and string literal types as string.
    if ((type.flags & ts.TypeFlags.StringLike) !== 0) {
        return 'string';
    }
    // If the type is a type parameter which extends primitive string types,
    // but it was not recognized as a string like. So check the constraint
    // type of the type parameter.
    if ((type.flags & ts.TypeFlags.TypeParameter) !== 0) {
        // `type.getConstraint()` method doesn't return the constraint type of
        // the type parameter for some reason. So this gets the constraint type
        // via AST.
        const symbol = type.getSymbol();
        const decls = symbol === null || symbol === void 0 ? void 0 : symbol.getDeclarations();
        const typeParamDecl = decls === null || decls === void 0 ? void 0 : decls[0];
        if (ts.isTypeParameterDeclaration(typeParamDecl) &&
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
exports.getTypeName = getTypeName;
//# sourceMappingURL=getTypeName.js.map