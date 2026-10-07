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
const getESLintCoreRule_1 = require("../util/getESLintCoreRule");
const baseRule = (0, getESLintCoreRule_1.getESLintCoreRule)('dot-notation');
const defaultOptions = [
    {
        allowIndexSignaturePropertyAccess: false,
        allowKeywords: true,
        allowPattern: '',
        allowPrivateClassPropertyAccess: false,
        allowProtectedClassPropertyAccess: false,
    },
];
exports.default = (0, util_1.createRule)({
    name: 'dot-notation',
    meta: {
        type: 'suggestion',
        defaultOptions,
        docs: {
            description: 'Enforce dot notation whenever possible',
            extendsBaseRule: true,
            frozen: true,
            recommended: 'stylistic',
            requiresTypeChecking: true,
        },
        fixable: baseRule.meta.fixable,
        hasSuggestions: baseRule.meta.hasSuggestions,
        messages: baseRule.meta.messages,
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowIndexSignaturePropertyAccess: {
                        type: 'boolean',
                        description: 'Whether to allow accessing properties matching an index signature with array notation.',
                    },
                    allowKeywords: {
                        type: 'boolean',
                        description: 'Whether to allow keywords such as ["class"]`.',
                    },
                    allowPattern: {
                        type: 'string',
                        description: 'Regular expression of names to allow.',
                    },
                    allowPrivateClassPropertyAccess: {
                        type: 'boolean',
                        description: 'Whether to allow accessing class members marked as `private` with array notation.',
                    },
                    allowProtectedClassPropertyAccess: {
                        type: 'boolean',
                        description: 'Whether to allow accessing class members marked as `protected` with array notation.',
                    },
                },
            },
        ],
    },
    defaultOptions,
    create(context, [options]) {
        const rules = baseRule.create(context);
        const services = (0, util_1.getParserServices)(context);
        const checker = services.program.getTypeChecker();
        const allowPrivateClassPropertyAccess = options.allowPrivateClassPropertyAccess;
        const allowProtectedClassPropertyAccess = options.allowProtectedClassPropertyAccess;
        const allowIndexSignaturePropertyAccess = (options.allowIndexSignaturePropertyAccess ?? false) ||
            tsutils.isCompilerOptionEnabled(services.program.getCompilerOptions(), 'noPropertyAccessFromIndexSignature');
        return {
            MemberExpression(node) {
                if ((allowPrivateClassPropertyAccess ||
                    allowProtectedClassPropertyAccess ||
                    allowIndexSignaturePropertyAccess) &&
                    node.computed) {
                    // for perf reasons - only fetch symbols if we have to
                    const propertySymbol = services.getSymbolAtLocation(node.property) ??
                        services
                            .getTypeAtLocation(node.object)
                            .getNonNullableType()
                            .getProperties()
                            .find(propertySymbol => node.property.type === utils_1.AST_NODE_TYPES.Literal &&
                            propertySymbol.escapedName === node.property.value);
                    const modifierKind = (0, util_1.getModifiers)(propertySymbol?.getDeclarations()?.[0])?.[0].kind;
                    if ((allowPrivateClassPropertyAccess &&
                        modifierKind === ts.SyntaxKind.PrivateKeyword) ||
                        (allowProtectedClassPropertyAccess &&
                            modifierKind === ts.SyntaxKind.ProtectedKeyword)) {
                        return;
                    }
                    if (propertySymbol == null && allowIndexSignaturePropertyAccess) {
                        const objectType = services
                            .getTypeAtLocation(node.object)
                            .getNonNullableType();
                        const indexInfos = checker.getIndexInfosOfType(objectType);
                        if (indexInfos.some(info => tsutils.isTypeFlagSet(info.keyType, ts.TypeFlags.StringLike))) {
                            return;
                        }
                    }
                }
                rules.MemberExpression(node);
            },
        };
    },
});
//# sourceMappingURL=dot-notation.js.map