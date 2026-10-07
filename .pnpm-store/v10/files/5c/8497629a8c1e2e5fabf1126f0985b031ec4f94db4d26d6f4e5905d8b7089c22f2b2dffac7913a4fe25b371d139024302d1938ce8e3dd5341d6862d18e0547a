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
const tsutils = __importStar(require("tsutils"));
const util = __importStar(require("../util"));
exports.default = util.createRule({
    name: 'await-thenable',
    meta: {
        docs: {
            description: 'Disallow awaiting a value that is not a Thenable',
            recommended: 'error',
            requiresTypeChecking: true,
        },
        messages: {
            await: 'Unexpected `await` of a non-Promise (non-"Thenable") value.',
        },
        schema: [],
        type: 'problem',
    },
    defaultOptions: [],
    create(context) {
        const parserServices = util.getParserServices(context);
        const checker = parserServices.program.getTypeChecker();
        return {
            AwaitExpression(node) {
                const originalNode = parserServices.esTreeNodeToTSNodeMap.get(node);
                const type = checker.getTypeAtLocation(originalNode.expression);
                if (!util.isTypeAnyType(type) &&
                    !util.isTypeUnknownType(type) &&
                    !tsutils.isThenableType(checker, originalNode.expression, type)) {
                    context.report({
                        messageId: 'await',
                        node,
                    });
                }
            },
        };
    },
});
//# sourceMappingURL=await-thenable.js.map