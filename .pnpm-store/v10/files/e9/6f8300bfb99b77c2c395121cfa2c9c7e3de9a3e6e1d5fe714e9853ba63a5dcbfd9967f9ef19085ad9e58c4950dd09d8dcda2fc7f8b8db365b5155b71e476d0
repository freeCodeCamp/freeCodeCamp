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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util = __importStar(require("../util"));
const getESLintCoreRule_1 = require("../util/getESLintCoreRule");
const baseRule = (0, getESLintCoreRule_1.getESLintCoreRule)('no-useless-constructor');
/**
 * Check if method with accessibility is not useless
 */
function checkAccessibility(node) {
    switch (node.accessibility) {
        case 'protected':
        case 'private':
            return false;
        case 'public':
            if (node.parent &&
                node.parent.type === utils_1.AST_NODE_TYPES.ClassBody &&
                node.parent.parent &&
                'superClass' in node.parent.parent &&
                node.parent.parent.superClass) {
                return false;
            }
            break;
    }
    return true;
}
/**
 * Check if method is not useless due to typescript parameter properties and decorators
 */
function checkParams(node) {
    return !node.value.params.some(param => {
        var _a;
        return param.type === utils_1.AST_NODE_TYPES.TSParameterProperty ||
            ((_a = param.decorators) === null || _a === void 0 ? void 0 : _a.length);
    });
}
exports.default = util.createRule({
    name: 'no-useless-constructor',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow unnecessary constructors',
            recommended: 'strict',
            extendsBaseRule: true,
        },
        hasSuggestions: baseRule.meta.hasSuggestions,
        schema: baseRule.meta.schema,
        // TODO: this rule has only had messages since v7.0 - remove this when we remove support for v6
        messages: (_a = baseRule.meta.messages) !== null && _a !== void 0 ? _a : {
            noUselessConstructor: 'Useless constructor.',
        },
    },
    defaultOptions: [],
    create(context) {
        const rules = baseRule.create(context);
        return {
            MethodDefinition(node) {
                if (node.value &&
                    node.value.type === utils_1.AST_NODE_TYPES.FunctionExpression &&
                    node.value.body &&
                    checkAccessibility(node) &&
                    checkParams(node)) {
                    rules.MethodDefinition(node);
                }
            },
        };
    },
});
//# sourceMappingURL=no-useless-constructor.js.map