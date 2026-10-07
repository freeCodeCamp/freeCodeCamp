"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'prefer-enum-initializers',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Require each enum member value to be explicitly initialized',
        },
        hasSuggestions: true,
        messages: {
            defineInitializer: "The value of the member '{{ name }}' should be explicitly defined.",
            defineInitializerSuggestion: 'Can be fixed to {{ name }} = {{ suggested }}',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        function TSEnumDeclaration(node) {
            const { members } = node.body;
            members.forEach((member, index) => {
                if (member.initializer == null) {
                    const name = context.sourceCode.getText(member);
                    context.report({
                        node: member,
                        messageId: 'defineInitializer',
                        data: {
                            name,
                        },
                        suggest: [
                            {
                                messageId: 'defineInitializerSuggestion',
                                data: { name, suggested: index },
                                fix: (fixer) => {
                                    return fixer.replaceText(member, `${name} = ${index}`);
                                },
                            },
                            {
                                messageId: 'defineInitializerSuggestion',
                                data: { name, suggested: index + 1 },
                                fix: (fixer) => {
                                    return fixer.replaceText(member, `${name} = ${index + 1}`);
                                },
                            },
                            {
                                messageId: 'defineInitializerSuggestion',
                                data: { name, suggested: `'${name}'` },
                                fix: (fixer) => {
                                    return fixer.replaceText(member, `${name} = '${name}'`);
                                },
                            },
                        ],
                    });
                }
            });
        }
        return {
            TSEnumDeclaration,
        };
    },
});
//# sourceMappingURL=prefer-enum-initializers.js.map