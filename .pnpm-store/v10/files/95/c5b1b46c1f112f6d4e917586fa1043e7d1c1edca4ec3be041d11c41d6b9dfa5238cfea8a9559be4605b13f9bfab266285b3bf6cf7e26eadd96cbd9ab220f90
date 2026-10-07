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
const tsutils = __importStar(require("tsutils"));
const ts = __importStar(require("typescript"));
const util_1 = require("../util");
const getESLintCoreRule_1 = require("../util/getESLintCoreRule");
const baseRule = (0, getESLintCoreRule_1.getESLintCoreRule)('dot-notation');
exports.default = (0, util_1.createRule)({
    name: 'dot-notation',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Enforce dot notation whenever possible',
            recommended: 'strict',
            extendsBaseRule: true,
            requiresTypeChecking: true,
        },
        schema: [
            {
                type: 'object',
                properties: {
                    allowKeywords: {
                        type: 'boolean',
                        default: true,
                    },
                    allowPattern: {
                        type: 'string',
                        default: '',
                    },
                    allowPrivateClassPropertyAccess: {
                        type: 'boolean',
                        default: false,
                    },
                    allowProtectedClassPropertyAccess: {
                        type: 'boolean',
                        default: false,
                    },
                    allowIndexSignaturePropertyAccess: {
                        type: 'boolean',
                        default: false,
                    },
                },
                additionalProperties: false,
            },
        ],
        fixable: baseRule.meta.fixable,
        hasSuggestions: baseRule.meta.hasSuggestions,
        messages: baseRule.meta.messages,
    },
    defaultOptions: [
        {
            allowPrivateClassPropertyAccess: false,
            allowProtectedClassPropertyAccess: false,
            allowIndexSignaturePropertyAccess: false,
            allowKeywords: true,
            allowPattern: '',
        },
    ],
    create(context, [options]) {
        var _a;
        const rules = baseRule.create(context);
        const { program, esTreeNodeToTSNodeMap } = (0, util_1.getParserServices)(context);
        const typeChecker = program.getTypeChecker();
        const allowPrivateClassPropertyAccess = options.allowPrivateClassPropertyAccess;
        const allowProtectedClassPropertyAccess = options.allowProtectedClassPropertyAccess;
        const allowIndexSignaturePropertyAccess = ((_a = options.allowIndexSignaturePropertyAccess) !== null && _a !== void 0 ? _a : false) ||
            tsutils.isCompilerOptionEnabled(program.getCompilerOptions(), 
            // @ts-expect-error - TS is refining the type to never for some reason
            'noPropertyAccessFromIndexSignature');
        return {
            MemberExpression(node) {
                var _a, _b;
                if ((allowPrivateClassPropertyAccess ||
                    allowProtectedClassPropertyAccess ||
                    allowIndexSignaturePropertyAccess) &&
                    node.computed) {
                    // for perf reasons - only fetch symbols if we have to
                    const propertySymbol = typeChecker.getSymbolAtLocation(esTreeNodeToTSNodeMap.get(node.property));
                    const modifierKind = (_b = (0, util_1.getModifiers)((_a = propertySymbol === null || propertySymbol === void 0 ? void 0 : propertySymbol.getDeclarations()) === null || _a === void 0 ? void 0 : _a[0])) === null || _b === void 0 ? void 0 : _b[0].kind;
                    if ((allowPrivateClassPropertyAccess &&
                        modifierKind === ts.SyntaxKind.PrivateKeyword) ||
                        (allowProtectedClassPropertyAccess &&
                            modifierKind === ts.SyntaxKind.ProtectedKeyword)) {
                        return;
                    }
                    if (propertySymbol === undefined &&
                        allowIndexSignaturePropertyAccess) {
                        const objectType = typeChecker.getTypeAtLocation(esTreeNodeToTSNodeMap.get(node.object));
                        const indexType = objectType
                            .getNonNullableType()
                            .getStringIndexType();
                        if (indexType !== undefined) {
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