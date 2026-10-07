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
    name: 'no-duplicate-enum-values',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow duplicate enum member values',
            recommended: 'strict',
        },
        hasSuggestions: false,
        messages: {
            duplicateValue: 'Duplicate enum member value {{value}}.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        function isStringLiteral(node) {
            return (node.type === utils_1.AST_NODE_TYPES.Literal && typeof node.value === 'string');
        }
        function isNumberLiteral(node) {
            return (node.type === utils_1.AST_NODE_TYPES.Literal && typeof node.value === 'number');
        }
        return {
            TSEnumDeclaration(node) {
                const enumMembers = node.members;
                const seenValues = new Set();
                enumMembers.forEach(member => {
                    if (member.initializer === undefined) {
                        return;
                    }
                    let value;
                    if (isStringLiteral(member.initializer)) {
                        value = String(member.initializer.value);
                    }
                    else if (isNumberLiteral(member.initializer)) {
                        value = Number(member.initializer.value);
                    }
                    if (value === undefined) {
                        return;
                    }
                    if (seenValues.has(value)) {
                        context.report({
                            node: member,
                            messageId: 'duplicateValue',
                            data: {
                                value,
                            },
                        });
                    }
                    else {
                        seenValues.add(value);
                    }
                });
            },
        };
    },
});
//# sourceMappingURL=no-duplicate-enum-values.js.map