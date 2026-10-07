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
    name: 'no-extraneous-class',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow classes used as namespaces',
            recommended: 'strict',
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowConstructorOnly: {
                        description: 'Whether to allow extraneous classes that contain only a constructor.',
                        type: 'boolean',
                    },
                    allowEmpty: {
                        description: 'Whether to allow extraneous classes that have no body (i.e. are empty).',
                        type: 'boolean',
                    },
                    allowStaticOnly: {
                        description: 'Whether to allow extraneous classes that only contain static members.',
                        type: 'boolean',
                    },
                    allowWithDecorator: {
                        description: 'Whether to allow extraneous classes that include a decorator.',
                        type: 'boolean',
                    },
                },
            },
        ],
        messages: {
            empty: 'Unexpected empty class.',
            onlyStatic: 'Unexpected class with only static properties.',
            onlyConstructor: 'Unexpected class with only a constructor.',
        },
    },
    defaultOptions: [
        {
            allowConstructorOnly: false,
            allowEmpty: false,
            allowStaticOnly: false,
            allowWithDecorator: false,
        },
    ],
    create(context, [{ allowConstructorOnly, allowEmpty, allowStaticOnly, allowWithDecorator }]) {
        const isAllowWithDecorator = (node) => {
            return !!(allowWithDecorator &&
                node &&
                node.decorators &&
                node.decorators.length);
        };
        return {
            ClassBody(node) {
                const parent = node.parent;
                if (!parent || parent.superClass || isAllowWithDecorator(parent)) {
                    return;
                }
                const reportNode = 'id' in parent && parent.id ? parent.id : parent;
                if (node.body.length === 0) {
                    if (allowEmpty) {
                        return;
                    }
                    context.report({
                        node: reportNode,
                        messageId: 'empty',
                    });
                    return;
                }
                let onlyStatic = true;
                let onlyConstructor = true;
                for (const prop of node.body) {
                    if ('kind' in prop && prop.kind === 'constructor') {
                        if (prop.value.params.some(param => param.type === utils_1.AST_NODE_TYPES.TSParameterProperty)) {
                            onlyConstructor = false;
                            onlyStatic = false;
                        }
                    }
                    else {
                        onlyConstructor = false;
                        if ('static' in prop && !prop.static) {
                            onlyStatic = false;
                        }
                    }
                    if (!(onlyStatic || onlyConstructor)) {
                        break;
                    }
                }
                if (onlyConstructor) {
                    if (!allowConstructorOnly) {
                        context.report({
                            node: reportNode,
                            messageId: 'onlyConstructor',
                        });
                    }
                    return;
                }
                if (onlyStatic && !allowStaticOnly) {
                    context.report({
                        node: reportNode,
                        messageId: 'onlyStatic',
                    });
                }
            },
        };
    },
});
//# sourceMappingURL=no-extraneous-class.js.map