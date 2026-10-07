"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
const getESLintCoreRule_1 = require("../util/getESLintCoreRule");
const baseRule = (0, getESLintCoreRule_1.getESLintCoreRule)('no-invalid-this');
exports.default = (0, util_1.createRule)({
    name: 'no-invalid-this',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow `this` keywords outside of classes or class-like objects',
            recommended: false,
            extendsBaseRule: true,
        },
        // TODO: this rule has only had messages since v7.0 - remove this when we remove support for v6
        messages: (_a = baseRule.meta.messages) !== null && _a !== void 0 ? _a : {
            unexpectedThis: "Unexpected 'this'.",
        },
        hasSuggestions: baseRule.meta.hasSuggestions,
        schema: baseRule.meta.schema,
    },
    defaultOptions: [{ capIsConstructor: true }],
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
        return Object.assign(Object.assign({}, rules), { PropertyDefinition() {
                thisIsValidStack.push(true);
            },
            'PropertyDefinition:exit'() {
                thisIsValidStack.pop();
            },
            FunctionDeclaration(node) {
                var _a;
                thisIsValidStack.push(node.params.some(param => param.type === utils_1.AST_NODE_TYPES.Identifier && param.name === 'this'));
                // baseRule's work
                (_a = rules.FunctionDeclaration) === null || _a === void 0 ? void 0 : _a.call(rules, node);
            },
            'FunctionDeclaration:exit'(node) {
                var _a;
                thisIsValidStack.pop();
                // baseRule's work
                (_a = rules['FunctionDeclaration:exit']) === null || _a === void 0 ? void 0 : _a.call(rules, node);
            },
            FunctionExpression(node) {
                var _a;
                thisIsValidStack.push(node.params.some(param => param.type === utils_1.AST_NODE_TYPES.Identifier && param.name === 'this'));
                // baseRule's work
                (_a = rules.FunctionExpression) === null || _a === void 0 ? void 0 : _a.call(rules, node);
            },
            'FunctionExpression:exit'(node) {
                var _a;
                thisIsValidStack.pop();
                // baseRule's work
                (_a = rules['FunctionExpression:exit']) === null || _a === void 0 ? void 0 : _a.call(rules, node);
            },
            ThisExpression(node) {
                const thisIsValidHere = thisIsValidStack[thisIsValidStack.length - 1];
                if (thisIsValidHere) {
                    return;
                }
                // baseRule's work
                rules.ThisExpression(node);
            } });
    },
});
//# sourceMappingURL=no-invalid-this.js.map