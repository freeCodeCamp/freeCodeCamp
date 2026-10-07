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
exports.default = util.createRule({
    name: 'consistent-type-definitions',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Enforce type definitions to consistently use either `interface` or `type`',
            recommended: 'strict',
        },
        messages: {
            interfaceOverType: 'Use an `interface` instead of a `type`.',
            typeOverInterface: 'Use a `type` instead of an `interface`.',
        },
        schema: [
            {
                enum: ['interface', 'type'],
            },
        ],
        fixable: 'code',
    },
    defaultOptions: ['interface'],
    create(context, [option]) {
        const sourceCode = context.getSourceCode();
        /**
         * Iterates from the highest parent to the currently traversed node
         * to determine whether any node in tree is globally declared module declaration
         */
        function isCurrentlyTraversedNodeWithinModuleDeclaration() {
            return context
                .getAncestors()
                .some(node => node.type === utils_1.AST_NODE_TYPES.TSModuleDeclaration &&
                node.declare &&
                node.global);
        }
        return Object.assign(Object.assign({}, (option === 'interface' && {
            "TSTypeAliasDeclaration[typeAnnotation.type='TSTypeLiteral']"(node) {
                context.report({
                    node: node.id,
                    messageId: 'interfaceOverType',
                    fix(fixer) {
                        var _a;
                        const typeNode = (_a = node.typeParameters) !== null && _a !== void 0 ? _a : node.id;
                        const fixes = [];
                        const firstToken = sourceCode.getTokenBefore(node.id);
                        if (firstToken) {
                            fixes.push(fixer.replaceText(firstToken, 'interface'));
                            fixes.push(fixer.replaceTextRange([typeNode.range[1], node.typeAnnotation.range[0]], ' '));
                        }
                        const afterToken = sourceCode.getTokenAfter(node.typeAnnotation);
                        if (afterToken &&
                            afterToken.type === utils_1.AST_TOKEN_TYPES.Punctuator &&
                            afterToken.value === ';') {
                            fixes.push(fixer.remove(afterToken));
                        }
                        return fixes;
                    },
                });
            },
        })), (option === 'type' && {
            TSInterfaceDeclaration(node) {
                const fix = isCurrentlyTraversedNodeWithinModuleDeclaration()
                    ? null
                    : (fixer) => {
                        var _a, _b;
                        const typeNode = (_a = node.typeParameters) !== null && _a !== void 0 ? _a : node.id;
                        const fixes = [];
                        const firstToken = sourceCode.getTokenBefore(node.id);
                        if (firstToken) {
                            fixes.push(fixer.replaceText(firstToken, 'type'));
                            fixes.push(fixer.replaceTextRange([typeNode.range[1], node.body.range[0]], ' = '));
                        }
                        if (node.extends) {
                            node.extends.forEach(heritage => {
                                const typeIdentifier = sourceCode.getText(heritage);
                                fixes.push(fixer.insertTextAfter(node.body, ` & ${typeIdentifier}`));
                            });
                        }
                        if (((_b = node.parent) === null || _b === void 0 ? void 0 : _b.type) === utils_1.AST_NODE_TYPES.ExportDefaultDeclaration) {
                            fixes.push(fixer.removeRange([node.parent.range[0], node.range[0]]), fixer.insertTextAfter(node.body, `\nexport default ${node.id.name}`));
                        }
                        return fixes;
                    };
                context.report({
                    node: node.id,
                    messageId: 'typeOverInterface',
                    /**
                     * remove automatically fix when the interface is within a declare global
                     * @see {@link https://github.com/typescript-eslint/typescript-eslint/issues/2707}
                     */
                    fix,
                });
            },
        }));
    },
});
//# sourceMappingURL=consistent-type-definitions.js.map