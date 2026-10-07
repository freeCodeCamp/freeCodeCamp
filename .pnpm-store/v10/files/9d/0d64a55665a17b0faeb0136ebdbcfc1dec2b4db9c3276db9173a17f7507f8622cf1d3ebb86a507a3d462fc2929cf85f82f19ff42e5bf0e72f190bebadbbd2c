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
const util_1 = require("../util");
var ArgumentType;
(function (ArgumentType) {
    ArgumentType[ArgumentType["Other"] = 0] = "Other";
    ArgumentType[ArgumentType["String"] = 1] = "String";
    ArgumentType[ArgumentType["RegExp"] = 2] = "RegExp";
    ArgumentType[ArgumentType["Both"] = 3] = "Both";
})(ArgumentType || (ArgumentType = {}));
exports.default = (0, util_1.createRule)({
    name: 'prefer-regexp-exec',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Enforce `RegExp#exec` over `String#match` if no global flag is provided',
            recommended: 'stylistic',
            requiresTypeChecking: true,
        },
        fixable: 'code',
        messages: {
            regExpExecOverStringMatch: 'Use the `RegExp#exec()` method instead.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        const globalScope = context.sourceCode.getScope(context.sourceCode.ast);
        const services = (0, util_1.getParserServices)(context);
        const checker = services.program.getTypeChecker();
        /**
         * Check if a given node type is a string.
         * @param type The node type to check.
         */
        function isStringType(type) {
            return (0, util_1.getTypeName)(checker, type) === 'string';
        }
        /**
         * Check if a given node type is a RegExp.
         * @param type The node type to check.
         */
        function isRegExpType(type) {
            return (0, util_1.getTypeName)(checker, type) === 'RegExp';
        }
        function collectArgumentTypes(types) {
            let result = ArgumentType.Other;
            for (const type of types) {
                if (isRegExpType(type)) {
                    result |= ArgumentType.RegExp;
                }
                else if (isStringType(type)) {
                    result |= ArgumentType.String;
                }
            }
            return result;
        }
        /**
         * Returns true if and only if we have syntactic proof that the /g flag is
         * absent. Returns false in all other cases (i.e. it still might or might
         * not contain the global flag).
         */
        function definitelyDoesNotContainGlobalFlag(node) {
            if ((node.type === utils_1.AST_NODE_TYPES.CallExpression ||
                node.type === utils_1.AST_NODE_TYPES.NewExpression) &&
                node.callee.type === utils_1.AST_NODE_TYPES.Identifier &&
                node.callee.name === 'RegExp') {
                const flags = node.arguments.at(1);
                if (!flags) {
                    return true;
                }
                const flagsValue = (0, util_1.getStaticValue)(flags, globalScope);
                return (!!flagsValue &&
                    (typeof flagsValue.value !== 'string' ||
                        !flagsValue.value.includes('g')));
            }
            return false;
        }
        return {
            'CallExpression[arguments.length=1] > MemberExpression'(memberNode) {
                if (!(0, util_1.isStaticMemberAccessOfValue)(memberNode, context, 'match')) {
                    return;
                }
                const objectNode = memberNode.object;
                const callNode = memberNode.parent;
                const [argumentNode] = callNode.arguments;
                const argumentValue = (0, util_1.getStaticValue)(argumentNode, globalScope);
                if (!isStringType(services.getTypeAtLocation(objectNode))) {
                    return;
                }
                // Don't report regular expressions with global flag.
                if ((!argumentValue &&
                    !definitelyDoesNotContainGlobalFlag(argumentNode)) ||
                    (argumentValue &&
                        argumentValue.value instanceof RegExp &&
                        argumentValue.value.flags.includes('g'))) {
                    return;
                }
                if (argumentNode.type === utils_1.AST_NODE_TYPES.Literal &&
                    typeof argumentNode.value === 'string') {
                    let regExp;
                    try {
                        regExp = RegExp(argumentNode.value);
                    }
                    catch {
                        return;
                    }
                    return context.report({
                        node: memberNode.property,
                        messageId: 'regExpExecOverStringMatch',
                        fix: (0, util_1.getWrappingFixer)({
                            node: callNode,
                            innerNode: [objectNode],
                            sourceCode: context.sourceCode,
                            wrap: objectCode => `${regExp.toString()}.exec(${objectCode})`,
                        }),
                    });
                }
                const argumentType = services.getTypeAtLocation(argumentNode);
                const argumentTypes = collectArgumentTypes(tsutils.unionConstituents(argumentType));
                switch (argumentTypes) {
                    case ArgumentType.RegExp:
                        return context.report({
                            node: memberNode.property,
                            messageId: 'regExpExecOverStringMatch',
                            fix: (0, util_1.getWrappingFixer)({
                                node: callNode,
                                innerNode: [objectNode, argumentNode],
                                sourceCode: context.sourceCode,
                                wrap: (objectCode, argumentCode) => `${argumentCode}.exec(${objectCode})`,
                            }),
                        });
                    case ArgumentType.String:
                        return context.report({
                            node: memberNode.property,
                            messageId: 'regExpExecOverStringMatch',
                            fix: (0, util_1.getWrappingFixer)({
                                node: callNode,
                                innerNode: [objectNode, argumentNode],
                                sourceCode: context.sourceCode,
                                wrap: (objectCode, argumentCode) => `RegExp(${argumentCode}).exec(${objectCode})`,
                            }),
                        });
                }
            },
        };
    },
});
//# sourceMappingURL=prefer-regexp-exec.js.map