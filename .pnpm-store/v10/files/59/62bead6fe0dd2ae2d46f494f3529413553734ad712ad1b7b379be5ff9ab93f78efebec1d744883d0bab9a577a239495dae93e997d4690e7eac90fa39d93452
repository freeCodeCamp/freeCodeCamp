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
    name: 'no-parameter-properties',
    meta: {
        deprecated: true,
        replacedBy: ['@typescript-eslint/parameter-properties'],
        type: 'problem',
        docs: {
            description: 'Disallow the use of parameter properties in class constructors',
            // too opinionated to be recommended
            recommended: false,
        },
        messages: {
            noParamProp: 'Property {{parameter}} cannot be declared in the constructor.',
        },
        schema: [
            {
                type: 'object',
                properties: {
                    allows: {
                        type: 'array',
                        items: {
                            enum: [
                                'readonly',
                                'private',
                                'protected',
                                'public',
                                'private readonly',
                                'protected readonly',
                                'public readonly',
                            ],
                        },
                        minItems: 1,
                    },
                },
                additionalProperties: false,
            },
        ],
    },
    defaultOptions: [
        {
            allows: [],
        },
    ],
    create(context, [{ allows }]) {
        /**
         * Gets the modifiers of `node`.
         * @param node the node to be inspected.
         */
        function getModifiers(node) {
            const modifiers = [];
            if (node.accessibility) {
                modifiers.push(node.accessibility);
            }
            if (node.readonly) {
                modifiers.push('readonly');
            }
            return modifiers.filter(Boolean).join(' ');
        }
        return {
            TSParameterProperty(node) {
                const modifiers = getModifiers(node);
                if (!allows.includes(modifiers)) {
                    // HAS to be an identifier or assignment or TSC will throw
                    if (node.parameter.type !== utils_1.AST_NODE_TYPES.Identifier &&
                        node.parameter.type !== utils_1.AST_NODE_TYPES.AssignmentPattern) {
                        return;
                    }
                    const name = node.parameter.type === utils_1.AST_NODE_TYPES.Identifier
                        ? node.parameter.name
                        : // has to be an Identifier or TSC will throw an error
                            node.parameter.left.name;
                    context.report({
                        node,
                        messageId: 'noParamProp',
                        data: {
                            parameter: name,
                        },
                    });
                }
            },
        };
    },
});
//# sourceMappingURL=no-parameter-properties.js.map