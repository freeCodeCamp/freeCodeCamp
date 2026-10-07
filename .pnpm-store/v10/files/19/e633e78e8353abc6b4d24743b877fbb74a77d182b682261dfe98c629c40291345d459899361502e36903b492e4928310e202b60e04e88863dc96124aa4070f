"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
const getESLintCoreRule_1 = require("../util/getESLintCoreRule");
const baseRule = (0, getESLintCoreRule_1.getESLintCoreRule)('no-invalid-this');
const defaultOptions = [{ capIsConstructor: true }];
exports.default = (0, util_1.createRule)({
    name: 'no-invalid-this',
    meta: {
        type: 'suggestion',
        defaultOptions,
        docs: {
            description: 'Disallow `this` keywords outside of classes or class-like objects',
            extendsBaseRule: true,
        },
        hasSuggestions: baseRule.meta.hasSuggestions,
        messages: baseRule.meta.messages,
        schema: baseRule.meta.schema,
    },
    defaultOptions,
    create(context) {
        const rules = baseRule.create(context);
        /**
         * Since function definitions can be nested we use a stack storing if "this" is valid in the current context.
         *
         * Example:
         *
         * function a(this: number) { // valid "this"
         *     function b() {
         *         console.log(this); // invalid "this"
         *     }
         * }
         *
         * When parsing the function declaration of "a" the stack will be: [true]
         * When parsing the function declaration of "b" the stack will be: [true, false]
         */
        const thisIsValidStack = [];
        return {
            ...rules,
            AccessorProperty() {
                thisIsValidStack.push(true);
            },
            'AccessorProperty:exit'() {
                thisIsValidStack.pop();
            },
            FunctionDeclaration(node) {
                thisIsValidStack.push(node.params.some(param => param.type === utils_1.AST_NODE_TYPES.Identifier && param.name === 'this'));
            },
            'FunctionDeclaration:exit'() {
                thisIsValidStack.pop();
            },
            FunctionExpression(node) {
                thisIsValidStack.push(node.params.some(param => param.type === utils_1.AST_NODE_TYPES.Identifier && param.name === 'this'));
            },
            'FunctionExpression:exit'() {
                thisIsValidStack.pop();
            },
            PropertyDefinition() {
                thisIsValidStack.push(true);
            },
            'PropertyDefinition:exit'() {
                thisIsValidStack.pop();
            },
            ThisExpression(node) {
                const thisIsValidHere = thisIsValidStack[thisIsValidStack.length - 1];
                if (thisIsValidHere) {
                    return;
                }
                // baseRule's work
                rules.ThisExpression(node);
            },
        };
    },
});
//# sourceMappingURL=no-invalid-this.js.map