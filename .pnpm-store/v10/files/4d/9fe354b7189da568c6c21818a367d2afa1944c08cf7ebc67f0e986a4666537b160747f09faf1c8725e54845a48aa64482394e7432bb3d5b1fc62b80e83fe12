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
const getESLintCoreRule_1 = require("../util/getESLintCoreRule");
const baseRule = (0, getESLintCoreRule_1.getESLintCoreRule)('no-extra-semi');
exports.default = util.createRule({
    name: 'no-extra-semi',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow unnecessary semicolons',
            recommended: 'error',
            extendsBaseRule: true,
        },
        fixable: 'code',
        hasSuggestions: baseRule.meta.hasSuggestions,
        schema: baseRule.meta.schema,
        messages: baseRule.meta.messages,
    },
    defaultOptions: [],
    create(context) {
        const rules = baseRule.create(context);
        return Object.assign(Object.assign({}, rules), { 'TSAbstractMethodDefinition, TSAbstractPropertyDefinition'(node) {
                var _a;
                if (rules.MethodDefinition) {
                    // for ESLint <= v7
                    rules.MethodDefinition(node);
                }
                else if (rules['MethodDefinition, PropertyDefinition']) {
                    // for ESLint >= v8 < v8.3.0
                    rules['MethodDefinition, PropertyDefinition'](node);
                }
                else {
                    // for ESLint >= v8.3.0
                    (_a = rules['MethodDefinition, PropertyDefinition, StaticBlock']) === null || _a === void 0 ? void 0 : _a.call(rules, node);
                }
            } });
    },
});
//# sourceMappingURL=no-extra-semi.js.map