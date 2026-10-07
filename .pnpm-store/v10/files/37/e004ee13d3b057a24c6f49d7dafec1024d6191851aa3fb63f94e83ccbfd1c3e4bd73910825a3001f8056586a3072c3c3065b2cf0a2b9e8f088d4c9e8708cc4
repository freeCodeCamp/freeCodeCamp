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
const printNodeModifiers = (node, final) => {
    var _a;
    return `${(_a = node.accessibility) !== null && _a !== void 0 ? _a : ''}${node.static ? ' static' : ''} ${final} `.trimStart();
};
const isSupportedLiteral = (node) => {
    if (node.type === utils_1.AST_NODE_TYPES.Literal) {
        return true;
    }
    if (node.type === utils_1.AST_NODE_TYPES.TaggedTemplateExpression ||
        node.type === utils_1.AST_NODE_TYPES.TemplateLiteral) {
        return ('quasi' in node ? node.quasi.quasis : node.quasis).length === 1;
    }
    return false;
};
exports.default = util.createRule({
    name: 'class-literal-property-style',
    meta: {
        type: 'problem',
        docs: {
            description: 'Enforce that literals on classes are exposed in a consistent style',
            recommended: 'strict',
        },
        hasSuggestions: true,
        messages: {
            preferFieldStyle: 'Literals should be exposed using readonly fields.',
            preferFieldStyleSuggestion: 'Replace the literals with readonly fields.',
            preferGetterStyle: 'Literals should be exposed using getters.',
            preferGetterStyleSuggestion: 'Replace the literals with getters.',
        },
        schema: [{ enum: ['fields', 'getters'] }],
    },
    defaultOptions: ['fields'],
    create(context, [style]) {
        return Object.assign(Object.assign({}, (style === 'fields' && {
            MethodDefinition(node) {
                if (node.kind !== 'get' ||
                    !node.value.body ||
                    !node.value.body.body.length) {
                    return;
                }
                const [statement] = node.value.body.body;
                if (statement.type !== utils_1.AST_NODE_TYPES.ReturnStatement) {
                    return;
                }
                const { argument } = statement;
                if (!argument || !isSupportedLiteral(argument)) {
                    return;
                }
                context.report({
                    node: node.key,
                    messageId: 'preferFieldStyle',
                    suggest: [
                        {
                            messageId: 'preferFieldStyleSuggestion',
                            fix(fixer) {
                                const sourceCode = context.getSourceCode();
                                const name = sourceCode.getText(node.key);
                                let text = '';
                                text += printNodeModifiers(node, 'readonly');
                                text += node.computed ? `[${name}]` : name;
                                text += ` = ${sourceCode.getText(argument)};`;
                                return fixer.replaceText(node, text);
                            },
                        },
                    ],
                });
            },
        })), (style === 'getters' && {
            PropertyDefinition(node) {
                if (!node.readonly || node.declare) {
                    return;
                }
                const { value } = node;
                if (!value || !isSupportedLiteral(value)) {
                    return;
                }
                context.report({
                    node: node.key,
                    messageId: 'preferGetterStyle',
                    suggest: [
                        {
                            messageId: 'preferGetterStyleSuggestion',
                            fix(fixer) {
                                const sourceCode = context.getSourceCode();
                                const name = sourceCode.getText(node.key);
                                let text = '';
                                text += printNodeModifiers(node, 'get');
                                text += node.computed ? `[${name}]` : name;
                                text += `() { return ${sourceCode.getText(value)}; }`;
                                return fixer.replaceText(node, text);
                            },
                        },
                    ],
                });
            },
        }));
    },
});
//# sourceMappingURL=class-literal-property-style.js.map