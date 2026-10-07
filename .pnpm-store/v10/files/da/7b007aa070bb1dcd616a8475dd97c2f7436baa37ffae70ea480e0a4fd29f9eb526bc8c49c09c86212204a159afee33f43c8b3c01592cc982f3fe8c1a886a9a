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
const util = __importStar(require("../util"));
exports.default = util.createRule({
    name: 'prefer-enum-initializers',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Require each enum member value to be explicitly initialized',
            recommended: false,
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
        const sourceCode = context.getSourceCode();
        function TSEnumDeclaration(node) {
            const { members } = node;
            members.forEach((member, index) => {
                if (member.initializer == null) {
                    const name = sourceCode.getText(member);
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