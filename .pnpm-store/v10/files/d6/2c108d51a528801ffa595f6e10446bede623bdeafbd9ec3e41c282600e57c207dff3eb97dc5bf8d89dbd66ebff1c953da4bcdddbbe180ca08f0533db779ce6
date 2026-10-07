"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phrases = void 0;
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
exports.phrases = {
    [utils_1.AST_NODE_TYPES.TSInterfaceDeclaration]: 'Interface',
    [utils_1.AST_NODE_TYPES.TSTypeLiteral]: 'Type literal',
};
exports.default = (0, util_1.createRule)({
    name: 'prefer-function-type',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Enforce using function types instead of interfaces with call signatures',
            recommended: 'stylistic',
        },
        fixable: 'code',
        messages: {
            functionTypeOverCallableType: '{{ literalOrInterface }} only has a call signature, you should use a function type instead.',
            unexpectedThisOnFunctionOnlyInterface: "`this` refers to the function type '{{ interfaceName }}', did you intend to use a generic `this` parameter like `<Self>(this: Self, ...) => Self` instead?",
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        /**
         * Checks if there the interface has exactly one supertype that isn't named 'Function'
         * @param node The node being checked
         */
        function hasOneSupertype(node) {
            if (node.extends.length === 0) {
                return false;
            }
            if (node.extends.length !== 1) {
                return true;
            }
            const expr = node.extends[0].expression;
            return (expr.type !== utils_1.AST_NODE_TYPES.Identifier || expr.name !== 'Function');
        }
        /**
         * @param parent The parent of the call signature causing the diagnostic
         */
        function shouldWrapSuggestion(parent) {
            if (!parent) {
                return false;
            }
            switch (parent.type) {
                case utils_1.AST_NODE_TYPES.TSUnionType:
                case utils_1.AST_NODE_TYPES.TSIntersectionType:
                case utils_1.AST_NODE_TYPES.TSArrayType:
                    return true;
                default:
                    return false;
            }
        }
        /**
         * @param member The TypeElement being checked
         * @param node The parent of member being checked
         */
        function checkMember(member, node, tsThisTypes = null) {
            if ((member.type === utils_1.AST_NODE_TYPES.TSCallSignatureDeclaration ||
                member.type === utils_1.AST_NODE_TYPES.TSConstructSignatureDeclaration) &&
                member.returnType != null) {
                if (tsThisTypes?.length &&
                    node.type === utils_1.AST_NODE_TYPES.TSInterfaceDeclaration) {
                    // the message can be confusing if we don't point directly to the `this` node instead of the whole member
                    // and in favour of generating at most one error we'll only report the first occurrence of `this` if there are multiple
                    context.report({
                        node: tsThisTypes[0],
                        messageId: 'unexpectedThisOnFunctionOnlyInterface',
                        data: {
                            interfaceName: node.id.name,
                        },
                    });
                    return;
                }
                const fixable = node.parent.type === utils_1.AST_NODE_TYPES.ExportDefaultDeclaration;
                const fix = fixable
                    ? null
                    : (fixer) => {
                        const fixes = [];
                        const start = member.range[0];
                        // https://github.com/microsoft/TypeScript/pull/56908
                        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                        const colonPos = member.returnType.range[0] - start;
                        const text = context.sourceCode
                            .getText()
                            .slice(start, member.range[1]);
                        const comments = [
                            ...context.sourceCode.getCommentsBefore(member),
                            ...context.sourceCode.getCommentsAfter(member),
                        ];
                        let suggestion = `${text.slice(0, colonPos)} =>${text.slice(colonPos + 1)}`;
                        const lastChar = suggestion.endsWith(';') ? ';' : '';
                        if (lastChar) {
                            suggestion = suggestion.slice(0, -1);
                        }
                        if (shouldWrapSuggestion(node.parent)) {
                            suggestion = `(${suggestion})`;
                        }
                        if (node.type === utils_1.AST_NODE_TYPES.TSInterfaceDeclaration) {
                            if (node.typeParameters != null) {
                                suggestion = `type ${context.sourceCode
                                    .getText()
                                    .slice(node.id.range[0], node.typeParameters.range[1])} = ${suggestion}${lastChar}`;
                            }
                            else {
                                suggestion = `type ${node.id.name} = ${suggestion}${lastChar}`;
                            }
                        }
                        const isParentExported = node.parent.type === utils_1.AST_NODE_TYPES.ExportNamedDeclaration;
                        if (node.type === utils_1.AST_NODE_TYPES.TSInterfaceDeclaration &&
                            isParentExported) {
                            const commentsText = comments
                                .map(({ type, value }) => type === utils_1.AST_TOKEN_TYPES.Line
                                ? `//${value}\n`
                                : `/*${value}*/\n`)
                                .join('');
                            // comments should move before export and not between export and interface declaration
                            fixes.push(fixer.insertTextBefore(node.parent, commentsText));
                        }
                        else {
                            comments.forEach(comment => {
                                let commentText = comment.type === utils_1.AST_TOKEN_TYPES.Line
                                    ? `//${comment.value}`
                                    : `/*${comment.value}*/`;
                                const isCommentOnTheSameLine = comment.loc.start.line === member.loc.start.line;
                                if (!isCommentOnTheSameLine) {
                                    commentText += '\n';
                                }
                                else {
                                    commentText += ' ';
                                }
                                suggestion = commentText + suggestion;
                            });
                        }
                        const fixStart = node.range[0];
                        fixes.push(fixer.replaceTextRange([fixStart, node.range[1]], suggestion));
                        return fixes;
                    };
                context.report({
                    node: member,
                    messageId: 'functionTypeOverCallableType',
                    data: {
                        literalOrInterface: exports.phrases[node.type],
                    },
                    fix,
                });
            }
        }
        let tsThisTypes = null;
        let literalNesting = 0;
        return {
            TSInterfaceDeclaration() {
                // when entering an interface reset the count of `this`s to empty.
                tsThisTypes = [];
            },
            'TSInterfaceDeclaration:exit'(node) {
                if (!hasOneSupertype(node) && node.body.body.length === 1) {
                    checkMember(node.body.body[0], node, tsThisTypes);
                }
                // on exit check member and reset the array to nothing.
                tsThisTypes = null;
            },
            'TSInterfaceDeclaration TSThisType'(node) {
                // inside an interface keep track of all ThisType references.
                // unless it's inside a nested type literal in which case it's invalid code anyway
                // we don't want to incorrectly say "it refers to name" while typescript says it's completely invalid.
                if (literalNesting === 0 && tsThisTypes != null) {
                    tsThisTypes.push(node);
                }
            },
            // keep track of nested literals to avoid complaining about invalid `this` uses
            'TSInterfaceDeclaration TSTypeLiteral'() {
                literalNesting += 1;
            },
            'TSInterfaceDeclaration TSTypeLiteral:exit'() {
                literalNesting -= 1;
            },
            'TSTypeLiteral[members.length = 1]'(node) {
                checkMember(node.members[0], node);
            },
        };
    },
});
//# sourceMappingURL=prefer-function-type.js.map