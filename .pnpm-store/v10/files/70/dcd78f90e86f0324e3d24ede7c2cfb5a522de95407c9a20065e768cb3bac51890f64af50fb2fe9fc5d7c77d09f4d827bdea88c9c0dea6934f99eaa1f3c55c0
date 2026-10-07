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
const regexpp_1 = require("@eslint-community/regexpp");
const utils_1 = require("@typescript-eslint/utils");
const ts = __importStar(require("typescript"));
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'prefer-includes',
    defaultOptions: [],
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Enforce `includes` method over `indexOf` method',
            recommended: 'strict',
            requiresTypeChecking: true,
        },
        fixable: 'code',
        messages: {
            preferIncludes: "Use 'includes()' method instead.",
            preferStringIncludes: 'Use `String#includes()` method with a string instead.',
        },
        schema: [],
    },
    create(context) {
        const globalScope = context.getScope();
        const services = (0, util_1.getParserServices)(context);
        const types = services.program.getTypeChecker();
        function isNumber(node, value) {
            const evaluated = (0, util_1.getStaticValue)(node, globalScope);
            return evaluated != null && evaluated.value === value;
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
            const { pattern, flags } = (0, regexpp_1.parseRegExpLiteral)(evaluated.value);
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
                "'": "\\'",
                '\\': '\\\\',
                '\n': '\\n',
                '\r': '\\r',
                '\v': '\\v',
                '\t': '\\t',
                '\f': '\\f',
                // "\b" cause unexpected replacements
                // '\b': '\\b',
            };
            const replaceRegex = new RegExp(Object.values(EscapeMap).join('|'), 'g');
            return str.replace(replaceRegex, char => EscapeMap[char]);
        }
        function checkArrayIndexOf(node, allowFixing) {
            var _a, _b, _c;
            // Check if the comparison is equivalent to `includes()`.
            const callNode = node.parent;
            const compareNode = (((_a = callNode.parent) === null || _a === void 0 ? void 0 : _a.type) === utils_1.AST_NODE_TYPES.ChainExpression
                ? callNode.parent.parent
                : callNode.parent);
            const negative = isNegativeCheck(compareNode);
            if (!negative && !isPositiveCheck(compareNode)) {
                return;
            }
            // Get the symbol of `indexOf` method.
            const tsNode = services.esTreeNodeToTSNodeMap.get(node.property);
            const indexofMethodDeclarations = (_b = types
                .getSymbolAtLocation(tsNode)) === null || _b === void 0 ? void 0 : _b.getDeclarations();
            if (indexofMethodDeclarations == null ||
                indexofMethodDeclarations.length === 0) {
                return;
            }
            // Check if every declaration of `indexOf` method has `includes` method
            // and the two methods have the same parameters.
            for (const instanceofMethodDecl of indexofMethodDeclarations) {
                const typeDecl = instanceofMethodDecl.parent;
                const type = types.getTypeAtLocation(typeDecl);
                const includesMethodDecl = (_c = type
                    .getProperty('includes')) === null || _c === void 0 ? void 0 : _c.getDeclarations();
                if (includesMethodDecl == null ||
                    !includesMethodDecl.some(includesMethodDecl => hasSameParameters(includesMethodDecl, instanceofMethodDecl))) {
                    return;
                }
            }
            // Report it.
            context.report(Object.assign({ node: compareNode, messageId: 'preferIncludes' }, (allowFixing && {
                *fix(fixer) {
                    if (negative) {
                        yield fixer.insertTextBefore(callNode, '!');
                    }
                    yield fixer.replaceText(node.property, 'includes');
                    yield fixer.removeRange([callNode.range[1], compareNode.range[1]]);
                },
            })));
        }
        return {
            // a.indexOf(b) !== 1
            "BinaryExpression > CallExpression.left > MemberExpression.callee[property.name='indexOf'][computed=false]"(node) {
                checkArrayIndexOf(node, /* allowFixing */ true);
            },
            // a?.indexOf(b) !== 1
            "BinaryExpression > ChainExpression.left > CallExpression > MemberExpression.callee[property.name='indexOf'][computed=false]"(node) {
                checkArrayIndexOf(node, /* allowFixing */ false);
            },
            // /bar/.test(foo)
            'CallExpression[arguments.length=1] > MemberExpression.callee[property.name="test"][computed=false]'(node) {
                var _a;
                const callNode = node.parent;
                const text = parseRegExp(node.object);
                if (text == null) {
                    return;
                }
                //check the argument type of test methods
                const argument = callNode.arguments[0];
                const tsNode = services.esTreeNodeToTSNodeMap.get(argument);
                const type = (0, util_1.getConstrainedTypeAtLocation)(types, tsNode);
                const includesMethodDecl = (_a = type
                    .getProperty('includes')) === null || _a === void 0 ? void 0 : _a.getDeclarations();
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