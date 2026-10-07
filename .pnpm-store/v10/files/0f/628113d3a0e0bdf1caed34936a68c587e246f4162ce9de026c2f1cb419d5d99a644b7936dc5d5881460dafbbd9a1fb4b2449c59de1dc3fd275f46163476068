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
const utils_1 = require("@typescript-eslint/utils");
const util = __importStar(require("../util"));
const getESLintCoreRule_1 = require("../util/getESLintCoreRule");
const baseRule = (0, getESLintCoreRule_1.getESLintCoreRule)('comma-dangle');
const OPTION_VALUE_SCHEME = [
    'always-multiline',
    'always',
    'never',
    'only-multiline',
];
const DEFAULT_OPTION_VALUE = 'never';
function normalizeOptions(options) {
    var _a, _b, _c;
    if (typeof options === 'string') {
        return {
            enums: options,
            generics: options,
            tuples: options,
        };
    }
    return {
        enums: (_a = options.enums) !== null && _a !== void 0 ? _a : DEFAULT_OPTION_VALUE,
        generics: (_b = options.generics) !== null && _b !== void 0 ? _b : DEFAULT_OPTION_VALUE,
        tuples: (_c = options.tuples) !== null && _c !== void 0 ? _c : DEFAULT_OPTION_VALUE,
    };
}
exports.default = util.createRule({
    name: 'comma-dangle',
    meta: {
        type: 'layout',
        docs: {
            description: 'Require or disallow trailing commas',
            recommended: false,
            extendsBaseRule: true,
        },
        schema: {
            $defs: {
                value: {
                    enum: OPTION_VALUE_SCHEME,
                },
                valueWithIgnore: {
                    enum: [...OPTION_VALUE_SCHEME, 'ignore'],
                },
            },
            type: 'array',
            items: [
                {
                    oneOf: [
                        {
                            $ref: '#/$defs/value',
                        },
                        {
                            type: 'object',
                            properties: {
                                arrays: { $ref: '#/$defs/valueWithIgnore' },
                                objects: { $ref: '#/$defs/valueWithIgnore' },
                                imports: { $ref: '#/$defs/valueWithIgnore' },
                                exports: { $ref: '#/$defs/valueWithIgnore' },
                                functions: { $ref: '#/$defs/valueWithIgnore' },
                                enums: { $ref: '#/$defs/valueWithIgnore' },
                                generics: { $ref: '#/$defs/valueWithIgnore' },
                                tuples: { $ref: '#/$defs/valueWithIgnore' },
                            },
                            additionalProperties: false,
                        },
                    ],
                },
            ],
            additionalProperties: false,
        },
        fixable: 'code',
        hasSuggestions: baseRule.meta.hasSuggestions,
        messages: baseRule.meta.messages,
    },
    defaultOptions: ['never'],
    create(context, [options]) {
        const rules = baseRule.create(context);
        const sourceCode = context.getSourceCode();
        const normalizedOptions = normalizeOptions(options);
        const predicate = {
            always: forceComma,
            'always-multiline': forceCommaIfMultiline,
            'only-multiline': allowCommaIfMultiline,
            never: forbidComma,
            ignore: () => { },
        };
        function last(nodes) {
            var _a;
            return (_a = nodes[nodes.length - 1]) !== null && _a !== void 0 ? _a : null;
        }
        function getLastItem(node) {
            switch (node.type) {
                case utils_1.AST_NODE_TYPES.TSEnumDeclaration:
                    return last(node.members);
                case utils_1.AST_NODE_TYPES.TSTypeParameterDeclaration:
                    return last(node.params);
                case utils_1.AST_NODE_TYPES.TSTupleType:
                    return last(node.elementTypes);
                default:
                    return null;
            }
        }
        function getTrailingToken(node) {
            const last = getLastItem(node);
            const trailing = last && sourceCode.getTokenAfter(last);
            return trailing;
        }
        function isMultiline(node) {
            const last = getLastItem(node);
            const lastToken = sourceCode.getLastToken(node);
            return (last === null || last === void 0 ? void 0 : last.loc.end.line) !== (lastToken === null || lastToken === void 0 ? void 0 : lastToken.loc.end.line);
        }
        function forbidComma(node) {
            const last = getLastItem(node);
            const trailing = getTrailingToken(node);
            if (last && trailing && util.isCommaToken(trailing)) {
                context.report({
                    node,
                    messageId: 'unexpected',
                    fix(fixer) {
                        return fixer.remove(trailing);
                    },
                });
            }
        }
        function forceComma(node) {
            const last = getLastItem(node);
            const trailing = getTrailingToken(node);
            if (last && trailing && !util.isCommaToken(trailing)) {
                context.report({
                    node,
                    messageId: 'missing',
                    fix(fixer) {
                        return fixer.insertTextAfter(last, ',');
                    },
                });
            }
        }
        function allowCommaIfMultiline(node) {
            if (!isMultiline(node)) {
                forbidComma(node);
            }
        }
        function forceCommaIfMultiline(node) {
            if (isMultiline(node)) {
                forceComma(node);
            }
            else {
                forbidComma(node);
            }
        }
        return Object.assign(Object.assign({}, rules), { TSEnumDeclaration: predicate[normalizedOptions.enums], TSTypeParameterDeclaration: predicate[normalizedOptions.generics], TSTupleType: predicate[normalizedOptions.tuples] });
    },
});
//# sourceMappingURL=comma-dangle.js.map