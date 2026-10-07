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
const regexpp_1 = require("@eslint-community/regexpp");
const utils_1 = require("@typescript-eslint/utils");
const ts = __importStar(require("typescript"));
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'prefer-includes',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Enforce `includes` method over `indexOf` method',
            recommended: 'stylistic',
            requiresTypeChecking: true,
        },
        fixable: 'code',
        messages: {
            preferIncludes: "Use 'includes()' method instead.",
            preferStringIncludes: 'Use `String#includes()` method with a string instead.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        const globalScope = context.sourceCode.getScope(context.sourceCode.ast);
        const services = (0, util_1.getParserServices)(context);
        const checker = services.program.getTypeChecker();
        function isNumber(node, value) {
            const evaluated = (0, util_1.getStaticValue)(node, globalScope);
            return evaluated?.value === value;
        }
        function isPositiveCheck(node) {
            switch (node.operator) {
                case '!==':
                case '!=':
                case '>':
                    return isNumber(node.right, -1);
                case '>=':
                    return isNumber(node.right, 0);
                default:
                    return false;
            }
        }
        function isNegativeCheck(node) {
            switch (node.operator) {
                case '===':
                case '==':
                case '<=':
                    return isNumber(node.right, -1);
                case '<':
                    return isNumber(node.right, 0);
                default:
                    return false;
            }
        }
        function hasSameParameters(nodeA, nodeB) {
            if (!ts.isFunctionLike(nodeA) || !ts.isFunctionLike(nodeB)) {
                return false;
            }
            const paramsA = nodeA.parameters;
            const paramsB = nodeB.parameters;
            if (paramsA.length !== paramsB.length) {
                return false;
            }
            for (let i = 0; i < paramsA.length; ++i) {
                const paramA = paramsA[i];
                const paramB = paramsB[i];
                // Check name, type, and question token once.
                if (paramA.getText() !== paramB.getText()) {
                    return false;
                }
            }
            return true;
        }
        /**
         * Parse a given node if it's a `RegExp` instance.
         * @param node The node to parse.
         */
        function parseRegExp(node) {
            const evaluated = (0, util_1.getStaticValue)(node, globalScope);
            if (evaluated == null || !(evaluated.value instanceof RegExp)) {
                return null;
            }
            const { flags, pattern } = (0, regexpp_1.parseRegExpLiteral)(evaluated.value);
            if (pattern.alternatives.length !== 1 ||
                flags.ignoreCase ||
                flags.global) {
                return null;
            }
            // Check if it can determine a unique string.
            const chars = pattern.alternatives[0].elements;
            if (!chars.every(c => c.type === 'Character')) {
                return null;
            }
            // To string.
            return String.fromCodePoint(...chars.map(c => c.value));
        }
        function escapeString(str) {
            const EscapeMap = {
                '\0': '\\0',
                '\t': '\\t',
                '\n': '\\n',
                '\v': '\\v',
                '\f': '\\f',
                '\r': '\\r',
                "'": "\\'",
                '\\': '\\\\',
                // "\b" cause unexpected replacements
                // '\b': '\\b',
            };
            const replaceRegex = new RegExp(Object.values(EscapeMap).join('|'), 'g');
            return str.replaceAll(replaceRegex, char => EscapeMap[char]);
        }
        function checkArrayIndexOf(node, allowFixing) {
            if (!(0, util_1.isStaticMemberAccessOfValue)(node, context, 'indexOf')) {
                return;
            }
            // Check if the comparison is equivalent to `includes()`.
            const callNode = node.parent;
            const compareNode = (callNode.parent.type === utils_1.AST_NODE_TYPES.ChainExpression
                ? callNode.parent.parent
                : callNode.parent);
            const negative = isNegativeCheck(compareNode);
            if (!negative && !isPositiveCheck(compareNode)) {
                return;
            }
            // Get the symbol of `indexOf` method.
            const indexofMethodDeclarations = services
                .getSymbolAtLocation(node.property)
                ?.getDeclarations();
            if (indexofMethodDeclarations == null ||
                indexofMethodDeclarations.length === 0) {
                return;
            }
            // Check if every declaration of `indexOf` method has `includes` method
            // and the two methods have the same parameters.
            for (const instanceofMethodDecl of indexofMethodDeclarations) {
                const typeDecl = instanceofMethodDecl.parent;
                const type = checker.getTypeAtLocation(typeDecl);
                const includesMethodDecl = type
                    .getProperty('includes')
                    ?.getDeclarations();
                if (!includesMethodDecl?.some(includesMethodDecl => hasSameParameters(includesMethodDecl, instanceofMethodDecl))) {
                    return;
                }
            }
            // Report it.
            context.report({
                node: compareNode,
                messageId: 'preferIncludes',
                ...(allowFixing && {
                    *fix(fixer) {
                        if (negative) {
                            yield fixer.insertTextBefore(callNode, '!');
                        }
                        yield fixer.replaceText(node.property, 'includes');
                        yield fixer.removeRange([callNode.range[1], compareNode.range[1]]);
                    },
                }),
            });
        }
        return {
            // a.indexOf(b) !== 1
            'BinaryExpression > CallExpression.left > MemberExpression'(node) {
                checkArrayIndexOf(node, /* allowFixing */ true);
            },
            // a?.indexOf(b) !== 1
            'BinaryExpression > ChainExpression.left > CallExpression > MemberExpression'(node) {
                checkArrayIndexOf(node, /* allowFixing */ false);
            },
            // /bar/.test(foo)
            'CallExpression[arguments.length=1] > MemberExpression.callee[property.name="test"][computed=false]'(node) {
                const callNode = node.parent;
                const text = parseRegExp(node.object);
                if (text == null) {
                    return;
                }
                //check the argument type of test methods
                const argument = callNode.arguments[0];
                const type = (0, util_1.getConstrainedTypeAtLocation)(services, argument);
                const includesMethodDecl = type
                    .getProperty('includes')
                    ?.getDeclarations();
                if (includesMethodDecl == null) {
                    return;
                }
                context.report({
                    node: callNode,
                    messageId: 'preferStringIncludes',
                    *fix(fixer) {
                        const argNode = callNode.arguments[0];
                        const needsParen = argNode.type !== utils_1.AST_NODE_TYPES.Literal &&
                            argNode.type !== utils_1.AST_NODE_TYPES.TemplateLiteral &&
                            argNode.type !== utils_1.AST_NODE_TYPES.Identifier &&
                            argNode.type !== utils_1.AST_NODE_TYPES.MemberExpression &&
                            argNode.type !== utils_1.AST_NODE_TYPES.CallExpression;
                        yield fixer.removeRange([callNode.range[0], argNode.range[0]]);
                        yield fixer.removeRange([argNode.range[1], callNode.range[1]]);
                        if (needsParen) {
                            yield fixer.insertTextBefore(argNode, '(');
                            yield fixer.insertTextAfter(argNode, ')');
                        }
                        yield fixer.insertTextAfter(argNode, `${node.optional ? '?.' : '.'}includes('${escapeString(text)}')`);
                    },
                });
            },
        };
    },
});
//# sourceMappingURL=prefer-includes.js.map