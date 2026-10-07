"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'adjacent-overload-signatures',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Require that function overload signatures be consecutive',
            recommended: 'stylistic',
        },
        messages: {
            adjacentSignature: 'All {{name}} signatures should be adjacent.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        /**
         * Gets the name and attribute of the member being processed.
         * @param member the member being processed.
         * @returns the name and attribute of the member or null if it's a member not relevant to the rule.
         */
        function getMemberMethod(member) {
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
                    const name = member.id?.name ?? null;
                    if (name == null) {
                        return null;
                    }
                    return {
                        name,
                        type: util_1.MemberNameType.Normal,
                        callSignature: false,
                    };
                }
                case utils_1.AST_NODE_TYPES.TSMethodSignature:
                case utils_1.AST_NODE_TYPES.MethodDefinition:
                    return {
                        ...(0, util_1.getNameFromMember)(member, context.sourceCode),
                        callSignature: false,
                        static: member.static,
                    };
                case utils_1.AST_NODE_TYPES.TSCallSignatureDeclaration:
                    return {
                        name: 'call',
                        type: util_1.MemberNameType.Normal,
                        callSignature: true,
                    };
                case utils_1.AST_NODE_TYPES.TSConstructSignatureDeclaration:
                    return {
                        name: 'new',
                        type: util_1.MemberNameType.Normal,
                        callSignature: false,
                    };
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
        function checkBodyForOverloadMethods(node) {
            const members = getMembers(node);
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
        return {
            BlockStatement: checkBodyForOverloadMethods,
            ClassBody: checkBodyForOverloadMethods,
            Program: checkBodyForOverloadMethods,
            TSInterfaceBody: checkBodyForOverloadMethods,
            TSModuleBlock: checkBodyForOverloadMethods,
            TSTypeLiteral: checkBodyForOverloadMethods,
        };
    },
});
//# sourceMappingURL=adjacent-overload-signatures.js.map