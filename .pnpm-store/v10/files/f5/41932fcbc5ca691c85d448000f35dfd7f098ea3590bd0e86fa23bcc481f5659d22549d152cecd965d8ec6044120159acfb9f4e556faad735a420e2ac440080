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
const utils_1 = require("@typescript-eslint/utils");
const tsutils = __importStar(require("ts-api-utils"));
const ts = __importStar(require("typescript"));
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'non-nullable-type-assertion-style',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Enforce non-null assertions over explicit type assertions',
            recommended: 'stylistic',
            requiresTypeChecking: true,
        },
        fixable: 'code',
        messages: {
            preferNonNullAssertion: 'Use a ! assertion to more succinctly remove null and undefined from the type.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        const services = (0, util_1.getParserServices)(context);
        const getTypesIfNotLoose = (node) => {
            const type = services.getTypeAtLocation(node);
            if (tsutils.isTypeFlagSet(type, ts.TypeFlags.Any | ts.TypeFlags.Unknown)) {
                return undefined;
            }
            return tsutils.unionConstituents(type);
        };
        const couldBeNullish = (type) => {
            if (tsutils.isTypeFlagSet(type, ts.TypeFlags.TypeParameter)) {
                const constraint = type.getConstraint();
                return constraint == null || couldBeNullish(constraint);
            }
            if (tsutils.isUnionType(type)) {
                for (const part of type.types) {
                    if (couldBeNullish(part)) {
                        return true;
                    }
                }
                return false;
            }
            return tsutils.isTypeFlagSet(type, ts.TypeFlags.Null | ts.TypeFlags.Undefined);
        };
        const sameTypeWithoutNullish = (assertedTypes, originalTypes) => {
            const nonNullishOriginalTypes = originalTypes.filter(type => !tsutils.isTypeFlagSet(type, ts.TypeFlags.Null | ts.TypeFlags.Undefined));
            if (nonNullishOriginalTypes.length === originalTypes.length) {
                return false;
            }
            for (const assertedType of assertedTypes) {
                if (couldBeNullish(assertedType) ||
                    !nonNullishOriginalTypes.includes(assertedType)) {
                    return false;
                }
            }
            for (const originalType of nonNullishOriginalTypes) {
                if (!assertedTypes.includes(originalType)) {
                    return false;
                }
            }
            return true;
        };
        const isConstAssertion = (node) => {
            return (node.typeAnnotation.type === utils_1.AST_NODE_TYPES.TSTypeReference &&
                node.typeAnnotation.typeName.type === utils_1.AST_NODE_TYPES.Identifier &&
                node.typeAnnotation.typeName.name === 'const');
        };
        return {
            'TSAsExpression, TSTypeAssertion'(node) {
                if (isConstAssertion(node)) {
                    return;
                }
                const originalTypes = getTypesIfNotLoose(node.expression);
                if (!originalTypes) {
                    return;
                }
                const assertedTypes = getTypesIfNotLoose(node.typeAnnotation);
                if (!assertedTypes) {
                    return;
                }
                if (sameTypeWithoutNullish(assertedTypes, originalTypes)) {
                    const expressionSourceCode = context.sourceCode.getText(node.expression);
                    const higherPrecedenceThanUnary = (0, util_1.getOperatorPrecedence)(services.esTreeNodeToTSNodeMap.get(node.expression).kind, ts.SyntaxKind.Unknown) > util_1.OperatorPrecedence.Unary;
                    context.report({
                        node,
                        messageId: 'preferNonNullAssertion',
                        fix(fixer) {
                            return fixer.replaceText(node, higherPrecedenceThanUnary
                                ? `${expressionSourceCode}!`
                                : `(${expressionSourceCode})!`);
                        },
                    });
                }
            },
        };
    },
});
//# sourceMappingURL=non-nullable-type-assertion-style.js.map