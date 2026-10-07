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
    name: 'no-require-imports',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow invocation of `require()`',
            recommended: false,
        },
        schema: [],
        messages: {
            noRequireImports: 'A `require()` style import is forbidden.',
        },
    },
    defaultOptions: [],
    create(context) {
        return {
            'CallExpression[callee.name="require"]'(node) {
                const variable = utils_1.ASTUtils.findVariable(context.getScope(), 'require');
                // ignore non-global require usage as it's something user-land custom instead
                // of the commonjs standard
                if (!(variable === null || variable === void 0 ? void 0 : variable.identifiers.length)) {
                    context.report({
                        node,
                        messageId: 'noRequireImports',
                    });
                }
            },
            TSExternalModuleReference(node) {
                context.report({
                    node,
                    messageId: 'noRequireImports',
                });
            },
        };
    },
});
//# sourceMappingURL=no-require-imports.js.map