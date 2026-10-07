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
const ts = __importStar(require("typescript"));
const util = __importStar(require("../util"));
var Usefulness;
(function (Usefulness) {
    Usefulness[Usefulness["Always"] = 0] = "Always";
    Usefulness["Never"] = "will";
    Usefulness["Sometimes"] = "may";
})(Usefulness || (Usefulness = {}));
exports.default = util.createRule({
    name: 'no-base-to-string',
    meta: {
        docs: {
            description: 'Require `.toString()` to only be called on objects which provide useful information when stringified',
            recommended: 'strict',
            requiresTypeChecking: true,
        },
        messages: {
            baseToString: "'{{name}}' {{certainty}} evaluate to '[object Object]' when stringified.",
        },
        schema: [
            {
                type: 'object',
                properties: {
                    ignoredTypeNames: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                    },
                },
                additionalProperties: false,
            },
        ],
        type: 'suggestion',
    },
    defaultOptions: [
        {
            ignoredTypeNames: ['Error', 'RegExp', 'URL', 'URLSearchParams'],
        },
    ],
    create(context, [option]) {
        var _a;
        const parserServices = util.getParserServices(context);
        const typeChecker = parserServices.program.getTypeChecker();
        const ignoredTypeNames = (_a = option.ignoredTypeNames) !== null && _a !== void 0 ? _a : [];
        function checkExpression(node, type) {
            if (node.type === utils_1.AST_NODE_TYPES.Literal) {
                return;
            }
            const certainty = collectToStringCertainty(type !== null && type !== void 0 ? type : typeChecker.getTypeAtLocation(parserServices.esTreeNodeToTSNodeMap.get(node)));
            if (certainty === Usefulness.Always) {
                return;
            }
            context.report({
                data: {
                    certainty,
                    name: context.getSourceCode().getText(node),
                },
                messageId: 'baseToString',
                node,
            });
        }
        function collectToStringCertainty(type) {
            const toString = typeChecker.getPropertyOfType(type, 'toString');
            const declarations = toString === null || toString === void 0 ? void 0 : toString.getDeclarations();
            if (!toString || !declarations || declarations.length === 0) {
                return Usefulness.Always;
            }
            // Patch for old version TypeScript, the Boolean type definition missing toString()
            if (type.flags & ts.TypeFlags.Boolean ||
                type.flags & ts.TypeFlags.BooleanLiteral) {
                return Usefulness.Always;
            }
            if (ignoredTypeNames.includes(util.getTypeName(typeChecker, type))) {
                return Usefulness.Always;
            }
            if (declarations.every(({ parent }) => !ts.isInterfaceDeclaration(parent) || parent.name.text !== 'Object')) {
                return Usefulness.Always;
            }
            if (type.isIntersection()) {
                for (const subType of type.types) {
                    const subtypeUsefulness = collectToStringCertainty(subType);
                    if (subtypeUsefulness === Usefulness.Always) {
                        return Usefulness.Always;
                    }
                }
                return Usefulness.Never;
            }
            if (!type.isUnion()) {
                return Usefulness.Never;
            }
            let allSubtypesUseful = true;
            let someSubtypeUseful = false;
            for (const subType of type.types) {
                const subtypeUsefulness = collectToStringCertainty(subType);
                if (subtypeUsefulness !== Usefulness.Always && allSubtypesUseful) {
                    allSubtypesUseful = false;
                }
                if (subtypeUsefulness !== Usefulness.Never && !someSubtypeUseful) {
                    someSubtypeUseful = true;
                }
            }
            if (allSubtypesUseful && someSubtypeUseful) {
                return Usefulness.Always;
            }
            if (someSubtypeUseful) {
                return Usefulness.Sometimes;
            }
            return Usefulness.Never;
        }
        return {
            'AssignmentExpression[operator = "+="], BinaryExpression[operator = "+"]'(node) {
                const leftType = typeChecker.getTypeAtLocation(parserServices.esTreeNodeToTSNodeMap.get(node.left));
                const rightType = typeChecker.getTypeAtLocation(parserServices.esTreeNodeToTSNodeMap.get(node.right));
                if (util.getTypeName(typeChecker, leftType) === 'string') {
                    checkExpression(node.right, rightType);
                }
                else if (util.getTypeName(typeChecker, rightType) === 'string' &&
                    node.left.type !== utils_1.AST_NODE_TYPES.PrivateIdentifier) {
                    checkExpression(node.left, leftType);
                }
            },
            'CallExpression > MemberExpression.callee > Identifier[name = "toString"].property'(node) {
                const memberExpr = node.parent;
                checkExpression(memberExpr.object);
            },
            TemplateLiteral(node) {
                if (node.parent &&
                    node.parent.type === utils_1.AST_NODE_TYPES.TaggedTemplateExpression) {
                    return;
                }
                for (const expression of node.expressions) {
                    checkExpression(expression);
                }
            },
        };
    },
});
//# sourceMappingURL=no-base-to-string.js.map