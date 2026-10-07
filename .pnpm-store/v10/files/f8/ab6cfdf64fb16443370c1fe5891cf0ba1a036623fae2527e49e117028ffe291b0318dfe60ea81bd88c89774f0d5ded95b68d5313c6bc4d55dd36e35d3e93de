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
exports.getConstraintInfo = getConstraintInfo;
const tsutils = __importStar(require("ts-api-utils"));
/**
 * Returns whether the type is a generic and what its constraint is.
 *
 * If the type is not a generic, `isTypeParameter` will be `false`, and
 * `constraintType` will be the same as the input type.
 *
 * If the type is a generic, and it is constrained, `isTypeParameter` will be
 * `true`, and `constraintType` will be the constraint type.
 *
 * If the type is a generic, but it is not constrained, `constraintType` will be
 * `undefined` (rather than an `unknown` type), due to https://github.com/microsoft/TypeScript/issues/60475
 *
 * Successor to {@link getConstrainedTypeAtLocation} due to https://github.com/typescript-eslint/typescript-eslint/issues/10438
 *
 * This is considered internal since it is unstable for now and may have breaking changes at any time.
 * Use at your own risk.
 *
 * @internal
 *
 */
function getConstraintInfo(checker, type) {
    if (tsutils.isTypeParameter(type)) {
        const constraintType = checker.getBaseConstraintOfType(type);
        return {
            constraintType,
            isTypeParameter: true,
        };
    }
    return {
        constraintType: type,
        isTypeParameter: false,
    };
}
//# sourceMappingURL=getConstraintInfo.js.map