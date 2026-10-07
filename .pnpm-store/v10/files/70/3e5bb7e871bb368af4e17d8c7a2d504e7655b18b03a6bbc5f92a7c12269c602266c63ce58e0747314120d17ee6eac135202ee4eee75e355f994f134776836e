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
    name: 'adjacent-overload-signatures',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Require that function overload signatures be consecutive',
            recommended: 'error',
        },
        schema: [],
        messages: {
            adjacentSignature: 'All {{name}} signatures should be adjacent.',
        },
    },
    defaultOptions: [],
    create(context) {
        const sourceCode = context.getSourceCode();
        /**
         * Gets the name and attribute of the member being processed.
         * @param member the member being processed.
         * @returns the name and attribute of the member or null if it's a member not relevant to the rule.
         */
        function getMemberMethod(member) {
            var _a, _b;
            if (!member) {
                return null;
            }
            const isStatic = 'static' in member && !!member.static;
            switch (member.type) {
                case utils_1.AST_NODE_TYPES.ExportDefaultDeclaration:
                case utils_1.AST_NODE_TYPES.ExportNamedDeclaration: {
                    // export statements (e.g. export { a };)
                    // have no declarations, so ignore them
                    if (!member.declaration) {
                        return null;
                    }
                    return getMemberMethod(member.declaration);
                }
                case utils_1.AST_NODE_TYPES.TSDeclareFunction:
                case utils_1.AST_NODE_TYPES.FunctionDeclaration: {
                    const name = (_b = (_a = member.id) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : null;
                    if (name == null) {
                        return null;
                    }
                    return {
                        name,
                        static: isStatic,
                        callSignature: false,
                        type: util.MemberNameType.Normal,
                    };
                }
                case utils_1.AST_NODE_TYPES.TSMethodSignature:
                    return Object.assign(Object.assign({}, util.getNameFromMember(member, sourceCode)), { static: isStatic, callSignature: false });
                case utils_1.AST_NODE_TYPES.TSCallSignatureDeclaration:
                    return {
                        name: 'call',
                        static: isStatic,
                        callSignature: true,
                        type: util.MemberNameType.Normal,
                    };
                case utils_1.AST_NODE_TYPES.TSConstructSignatureDeclaration:
                    return {
                        name: 'new',
                        static: isStatic,
                        callSignature: false,
                        type: util.MemberNameType.Normal,
                    };
                case utils_1.AST_NODE_TYPES.MethodDefinition:
                    return Object.assign(Object.assign({}, util.getNameFromMember(member, sourceCode)), { static: isStatic, callSignature: false });
            }
            return null;
        }
        function isSameMethod(method1, method2) {
            return (!!method2 &&
                method1.name === method2.name &&
                method1.static === method2.static &&
                method1.callSignature === method2.callSignature &&
                method1.type === method2.type);
        }
        function getMembers(node) {
            switch (node.type) {
                case utils_1.AST_NODE_TYPES.ClassBody:
                case utils_1.AST_NODE_TYPES.Program:
                case utils_1.AST_NODE_TYPES.TSModuleBlock:
                case utils_1.AST_NODE_TYPES.TSInterfaceBody:
                case utils_1.AST_NODE_TYPES.BlockStatement:
                    return node.body;
                case utils_1.AST_NODE_TYPES.TSTypeLiteral:
                    return node.members;
            }
        }
        /**
         * Check the body for overload methods.
         * @param {ASTNode} node the body to be inspected.
         */
        function checkBodyForOverloadMethods(node) {
            const members = getMembers(node);
            if (members) {
                let lastMethod = null;
                const seenMethods = [];
                members.forEach(member => {
                    const method = getMemberMethod(member);
                    if (method == null) {
                        lastMethod = null;
                        return;
                    }
                    const index = seenMethods.findIndex(seenMethod => isSameMethod(method, seenMethod));
                    if (index > -1 && !isSameMethod(method, lastMethod)) {
                        context.report({
                            node: member,
                            messageId: 'adjacentSignature',
                            data: {
                                name: `${method.static ? 'static ' : ''}${method.name}`,
                            },
                        });
                    }
                    else if (index === -1) {
                        seenMethods.push(method);
                    }
                    lastMethod = method;
                });
            }
        }
        return {
            ClassBody: checkBodyForOverloadMethods,
            Program: checkBodyForOverloadMethods,
            TSModuleBlock: checkBodyForOverloadMethods,
            TSTypeLiteral: checkBodyForOverloadMethods,
            TSInterfaceBody: checkBodyForOverloadMethods,
            BlockStatement: checkBodyForOverloadMethods,
        };
    },
});
//# sourceMappingURL=adjacent-overload-signatures.js.map