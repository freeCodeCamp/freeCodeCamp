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
exports.FunctionSignature = void 0;
const utils_1 = require("@typescript-eslint/utils");
const ts = __importStar(require("typescript"));
const misc_1 = require("./misc");
const { nullThrows } = utils_1.ESLintUtils;
var RestTypeKind;
(function (RestTypeKind) {
    RestTypeKind[RestTypeKind["Array"] = 0] = "Array";
    RestTypeKind[RestTypeKind["Other"] = 1] = "Other";
    RestTypeKind[RestTypeKind["Tuple"] = 2] = "Tuple";
})(RestTypeKind || (RestTypeKind = {}));
/**
 * Tracks checking the parameters of a single function signature.
 * This allows rules to "consume" parameters and check for unsafe comparisons.
 */
class FunctionSignature {
    paramTypes;
    restType;
    hasConsumedArguments = false;
    parameterTypeIndex = 0;
    constructor(paramTypes, restType) {
        this.paramTypes = paramTypes;
        this.restType = restType;
    }
    static create(checker, tsNode) {
        // getResolvedSignature only returns undefined for nodes outside the parse
        // tree, and tsNode always comes from the AST node map.
        const signature = nullThrows(checker.getResolvedSignature(tsNode), 'Expected the call-like node to resolve to a signature.');
        const paramTypes = [];
        let restType = null;
        const parameters = signature.getParameters();
        for (let index = 0; index < parameters.length; index += 1) {
            const param = parameters[index];
            const declaration = param.getDeclarations()?.[0];
            const type = checker.getTypeOfSymbolAtLocation(param, tsNode);
            const constrainedType = checker.getBaseConstraintOfType(type) ?? type;
            if (declaration && (0, misc_1.isRestParameterDeclaration)(declaration)) {
                if (checker.isTupleType(constrainedType)) {
                    restType = {
                        index,
                        kind: RestTypeKind.Tuple,
                        typeArguments: checker.getTypeArguments(constrainedType),
                    };
                }
                else {
                    const elementType = checker.getIndexTypeOfType(constrainedType, ts.IndexKind.Number);
                    restType = elementType
                        ? { index, kind: RestTypeKind.Array, type: elementType }
                        : { index, kind: RestTypeKind.Other, type: constrainedType };
                }
                break;
            }
            paramTypes.push(type);
        }
        return new FunctionSignature(paramTypes, restType);
    }
    consumeRemainingArguments() {
        this.hasConsumedArguments = true;
    }
    getNextParameterType() {
        const index = this.parameterTypeIndex;
        this.parameterTypeIndex += 1;
        if (index >= this.paramTypes.length || this.hasConsumedArguments) {
            if (this.restType == null) {
                return null;
            }
            switch (this.restType.kind) {
                case RestTypeKind.Tuple: {
                    const { typeArguments } = this.restType;
                    if (this.hasConsumedArguments) {
                        return typeArguments[typeArguments.length - 1];
                    }
                    const typeIndex = index - this.restType.index;
                    if (typeIndex >= typeArguments.length) {
                        return typeArguments[typeArguments.length - 1];
                    }
                    return typeArguments[typeIndex];
                }
                case RestTypeKind.Array:
                case RestTypeKind.Other:
                    return this.restType.type;
            }
        }
        return this.paramTypes[index];
    }
}
exports.FunctionSignature = FunctionSignature;
//# sourceMappingURL=FunctionSignature.js.map