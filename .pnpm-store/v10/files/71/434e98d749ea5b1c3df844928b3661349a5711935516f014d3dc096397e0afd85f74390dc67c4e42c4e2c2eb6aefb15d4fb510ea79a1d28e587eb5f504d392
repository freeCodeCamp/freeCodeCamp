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
    name: 'no-misused-new',
    meta: {
        type: 'problem',
        docs: {
            description: 'Enforce valid definition of `new` and `constructor`',
            recommended: 'error',
        },
        schema: [],
        messages: {
            errorMessageInterface: 'Interfaces cannot be constructed, only classes.',
            errorMessageClass: 'Class cannot have method named `new`.',
        },
    },
    defaultOptions: [],
    create(context) {
        /**
         * @param node type to be inspected.
         * @returns name of simple type or null
         */
        function getTypeReferenceName(node) {
            if (node) {
                switch (node.type) {
                    case utils_1.AST_NODE_TYPES.TSTypeAnnotation:
                        return getTypeReferenceName(node.typeAnnotation);
                    case utils_1.AST_NODE_TYPES.TSTypeReference:
                        return getTypeReferenceName(node.typeName);
                    case utils_1.AST_NODE_TYPES.Identifier:
                        return node.name;
                    default:
                        break;
                }
            }
            return null;
        }
        /**
         * @param parent parent node.
         * @param returnType type to be compared
         */
        function isMatchingParentType(parent, returnType) {
            if (parent &&
                'id' in parent &&
                parent.id &&
                parent.id.type === utils_1.AST_NODE_TYPES.Identifier) {
                return getTypeReferenceName(returnType) === parent.id.name;
            }
            return false;
        }
        return {
            'TSInterfaceBody > TSConstructSignatureDeclaration'(node) {
                if (isMatchingParentType(node.parent.parent, node.returnType)) {
                    // constructor
                    context.report({
                        node,
                        messageId: 'errorMessageInterface',
                    });
                }
            },
            "TSMethodSignature[key.name='constructor']"(node) {
                context.report({
                    node,
                    messageId: 'errorMessageInterface',
                });
            },
            "ClassBody > MethodDefinition[key.name='new']"(node) {
                if (node.value.type === utils_1.AST_NODE_TYPES.TSEmptyBodyFunctionExpression) {
                    if (node.parent &&
                        isMatchingParentType(node.parent.parent, node.value.returnType)) {
                        context.report({
                            node,
                            messageId: 'errorMessageClass',
                        });
                    }
                }
            },
        };
    },
});
//# sourceMappingURL=no-misused-new.js.map