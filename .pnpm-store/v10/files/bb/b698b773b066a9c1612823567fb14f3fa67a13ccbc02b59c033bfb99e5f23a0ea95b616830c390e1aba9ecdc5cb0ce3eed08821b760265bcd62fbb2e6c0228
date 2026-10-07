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
const semver = __importStar(require("semver"));
const ts = __importStar(require("typescript"));
const util = __importStar(require("../util"));
const is3dot5 = semver.satisfies(ts.version, `>= 3.5.0 || >= 3.5.1-rc || >= 3.5.0-beta`, {
    includePrerelease: true,
});
const is3dot9 = is3dot5 &&
    semver.satisfies(ts.version, `>= 3.9.0 || >= 3.9.1-rc || >= 3.9.0-beta`, {
        includePrerelease: true,
    });
exports.default = util.createRule({
    name: 'no-unnecessary-type-constraint',
    meta: {
        docs: {
            description: 'Disallow unnecessary constraints on generic types',
            recommended: 'error',
        },
        hasSuggestions: true,
        messages: {
            unnecessaryConstraint: 'Constraining the generic type `{{name}}` to `{{constraint}}` does nothing and is unnecessary.',
            removeUnnecessaryConstraint: 'Remove the unnecessary `{{constraint}}` constraint.',
        },
        schema: [],
        type: 'suggestion',
    },
    defaultOptions: [],
    create(context) {
        if (!is3dot5) {
            return {};
        }
        // In theory, we could use the type checker for more advanced constraint types...
        // ...but in practice, these types are rare, and likely not worth requiring type info.
        // https://github.com/typescript-eslint/typescript-eslint/pull/2516#discussion_r495731858
        const unnecessaryConstraints = is3dot9
            ? new Map([
                [utils_1.AST_NODE_TYPES.TSAnyKeyword, 'any'],
                [utils_1.AST_NODE_TYPES.TSUnknownKeyword, 'unknown'],
            ])
            : new Map([[utils_1.AST_NODE_TYPES.TSUnknownKeyword, 'unknown']]);
        const inJsx = context.getFilename().toLowerCase().endsWith('tsx');
        const source = context.getSourceCode();
        const checkNode = (node, inArrowFunction) => {
            const constraint = unnecessaryConstraints.get(node.constraint.type);
            function shouldAddTrailingComma() {
                if (!inArrowFunction || !inJsx) {
                    return false;
                }
                // Only <T>() => {} would need trailing comma
                return (node.parent.params.length ===
                    1 &&
                    source.getTokensAfter(node)[0].value !== ',' &&
                    !node.default);
            }
            if (constraint) {
                context.report({
                    data: {
                        constraint,
                        name: node.name.name,
                    },
                    suggest: [
                        {
                            messageId: 'removeUnnecessaryConstraint',
                            data: {
                                constraint,
                            },
                            fix(fixer) {
                                return fixer.replaceTextRange([node.name.range[1], node.constraint.range[1]], shouldAddTrailingComma() ? ',' : '');
                            },
                        },
                    ],
                    messageId: 'unnecessaryConstraint',
                    node,
                });
            }
        };
        return {
            ':not(ArrowFunctionExpression) > TSTypeParameterDeclaration > TSTypeParameter[constraint]'(node) {
                checkNode(node, false);
            },
            'ArrowFunctionExpression > TSTypeParameterDeclaration > TSTypeParameter[constraint]'(node) {
                checkNode(node, true);
            },
        };
    },
});
//# sourceMappingURL=no-unnecessary-type-constraint.js.map