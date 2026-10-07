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
    name: 'space-before-function-paren',
    meta: {
        type: 'layout',
        docs: {
            description: 'Enforce consistent spacing before function parenthesis',
            recommended: false,
            extendsBaseRule: true,
        },
        fixable: 'whitespace',
        schema: [
            {
                oneOf: [
                    {
                        enum: ['always', 'never'],
                    },
                    {
                        type: 'object',
                        properties: {
                            anonymous: {
                                enum: ['always', 'never', 'ignore'],
                            },
                            named: {
                                enum: ['always', 'never', 'ignore'],
                            },
                            asyncArrow: {
                                enum: ['always', 'never', 'ignore'],
                            },
                        },
                        additionalProperties: false,
                    },
                ],
            },
        ],
        messages: {
            unexpected: 'Unexpected space before function parentheses.',
            missing: 'Missing space before function parentheses.',
        },
    },
    defaultOptions: ['always'],
    create(context, [firstOption]) {
        const sourceCode = context.getSourceCode();
        const baseConfig = typeof firstOption === 'string' ? firstOption : 'always';
        const overrideConfig = typeof firstOption === 'object' ? firstOption : {};
        /**
         * Determines whether a function has a name.
         * @param {ASTNode} node The function node.
         * @returns {boolean} Whether the function has a name.
         */
        function isNamedFunction(node) {
            if (node.id != null) {
                return true;
            }
            const parent = node.parent;
            return (parent.type === utils_1.AST_NODE_TYPES.MethodDefinition ||
                parent.type === utils_1.AST_NODE_TYPES.TSAbstractMethodDefinition ||
                (parent.type === utils_1.AST_NODE_TYPES.Property &&
                    (parent.kind === 'get' || parent.kind === 'set' || parent.method)));
        }
        /**
         * Gets the config for a given function
         * @param {ASTNode} node The function node
         * @returns {string} "always", "never", or "ignore"
         */
        function getConfigForFunction(node) {
            var _a, _b, _c;
            if (node.type === utils_1.AST_NODE_TYPES.ArrowFunctionExpression) {
                // Always ignore non-async functions and arrow functions without parens, e.g. async foo => bar
                if (node.async &&
                    util.isOpeningParenToken(sourceCode.getFirstToken(node, { skip: 1 }))) {
                    return (_a = overrideConfig.asyncArrow) !== null && _a !== void 0 ? _a : baseConfig;
                }
            }
            else if (isNamedFunction(node)) {
                return (_b = overrideConfig.named) !== null && _b !== void 0 ? _b : baseConfig;
                // `generator-star-spacing` should warn anonymous generators. E.g. `function* () {}`
            }
            else if (!node.generator) {
                return (_c = overrideConfig.anonymous) !== null && _c !== void 0 ? _c : baseConfig;
            }
            return 'ignore';
        }
        /**
         * Checks the parens of a function node
         * @param {ASTNode} node A function node
         * @returns {void}
         */
        function checkFunction(node) {
            const functionConfig = getConfigForFunction(node);
            if (functionConfig === 'ignore') {
                return;
            }
            let leftToken;
            let rightToken;
            if (node.typeParameters) {
                leftToken = sourceCode.getLastToken(node.typeParameters);
                rightToken = sourceCode.getTokenAfter(leftToken);
            }
            else {
                rightToken = sourceCode.getFirstToken(node, util.isOpeningParenToken);
                leftToken = sourceCode.getTokenBefore(rightToken);
            }
            // eslint-disable-next-line deprecation/deprecation -- TODO - switch once our min ESLint version is 6.7.0
            const hasSpacing = sourceCode.isSpaceBetweenTokens(leftToken, rightToken);
            if (hasSpacing && functionConfig === 'never') {
                context.report({
                    node,
                    loc: {
                        start: leftToken.loc.end,
                        end: rightToken.loc.start,
                    },
                    messageId: 'unexpected',
                    fix: fixer => fixer.removeRange([leftToken.range[1], rightToken.range[0]]),
                });
            }
            else if (!hasSpacing &&
                functionConfig === 'always' &&
                (!node.typeParameters || node.id)) {
                context.report({
                    node,
                    loc: rightToken.loc,
                    messageId: 'missing',
                    fix: fixer => fixer.insertTextAfter(leftToken, ' '),
                });
            }
        }
        return {
            ArrowFunctionExpression: checkFunction,
            FunctionDeclaration: checkFunction,
            FunctionExpression: checkFunction,
            TSEmptyBodyFunctionExpression: checkFunction,
            TSDeclareFunction: checkFunction,
        };
    },
});
//# sourceMappingURL=space-before-function-paren.js.map