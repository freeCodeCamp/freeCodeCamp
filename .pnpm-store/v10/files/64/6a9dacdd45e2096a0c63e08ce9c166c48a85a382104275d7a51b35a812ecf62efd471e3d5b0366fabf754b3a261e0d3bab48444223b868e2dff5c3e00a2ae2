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
    name: 'no-empty-interface',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow the declaration of empty interfaces',
            recommended: 'error',
        },
        fixable: 'code',
        hasSuggestions: true,
        messages: {
            noEmpty: 'An empty interface is equivalent to `{}`.',
            noEmptyWithSuper: 'An interface declaring no members is equivalent to its supertype.',
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowSingleExtends: {
                        type: 'boolean',
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            allowSingleExtends: false,
        },
    ],
    create(context, [{ allowSingleExtends }]) {
        return {
            TSInterfaceDeclaration(node) {
                var _a, _b;
                const sourceCode = context.getSourceCode();
                const filename = context.getFilename();
                if (node.body.body.length !== 0) {
                    // interface contains members --> Nothing to report
                    return;
                }
                const extend = node.extends;
                if (!extend || extend.length === 0) {
                    context.report({
                        node: node.id,
                        messageId: 'noEmpty',
                    });
                }
                else if (extend.length === 1) {
                    // interface extends exactly 1 interface --> Report depending on rule setting
                    if (!allowSingleExtends) {
                        const fix = (fixer) => {
                            let typeParam = '';
                            if (node.typeParameters) {
                                typeParam = sourceCode.getText(node.typeParameters);
                            }
                            return fixer.replaceText(node, `type ${sourceCode.getText(node.id)}${typeParam} = ${sourceCode.getText(extend[0])}`);
                        };
                        const scope = context.getScope();
                        const mergedWithClassDeclaration = (_b = (_a = scope.set
                            .get(node.id.name)) === null || _a === void 0 ? void 0 : _a.defs) === null || _b === void 0 ? void 0 : _b.some(def => def.node.type === utils_1.AST_NODE_TYPES.ClassDeclaration);
                        const isInAmbientDeclaration = !!(util.isDefinitionFile(filename) &&
                            scope.type === 'tsModule' &&
                            scope.block.declare);
                        const useAutoFix = !(isInAmbientDeclaration || mergedWithClassDeclaration);
                        context.report(Object.assign({ node: node.id, messageId: 'noEmptyWithSuper' }, (useAutoFix
                            ? { fix }
                            : !mergedWithClassDeclaration
                                ? {
                                    suggest: [
                                        {
                                            messageId: 'noEmptyWithSuper',
                                            fix,
                                        },
                                    ],
                                }
                                : null)));
                    }
                }
            },
        };
    },
});
//# sourceMappingURL=no-empty-interface.js.map