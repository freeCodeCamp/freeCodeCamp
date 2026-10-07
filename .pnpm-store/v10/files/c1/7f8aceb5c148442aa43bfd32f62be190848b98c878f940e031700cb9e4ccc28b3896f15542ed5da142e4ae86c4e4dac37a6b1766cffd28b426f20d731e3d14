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
const getESLintCoreRule_1 = require("../util/getESLintCoreRule");
const baseRule = (0, getESLintCoreRule_1.getESLintCoreRule)('no-magic-numbers');
// Extend base schema with additional property to ignore TS numeric literal types
const schema = util.deepMerge(
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- https://github.com/microsoft/TypeScript/issues/17002
Array.isArray(baseRule.meta.schema)
    ? baseRule.meta.schema[0]
    : baseRule.meta.schema, {
    properties: {
        ignoreNumericLiteralTypes: {
            type: 'boolean',
        },
        ignoreEnums: {
            type: 'boolean',
        },
        ignoreReadonlyClassProperties: {
            type: 'boolean',
        },
        ignoreTypeIndexes: {
            type: 'boolean',
        },
    },
});
exports.default = util.createRule({
    name: 'no-magic-numbers',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow magic numbers',
            recommended: false,
            extendsBaseRule: true,
        },
        schema: [schema],
        messages: baseRule.meta.messages,
    },
    defaultOptions: [
        {
            ignore: [],
            ignoreArrayIndexes: false,
            enforceConst: false,
            detectObjects: false,
            ignoreNumericLiteralTypes: false,
            ignoreEnums: false,
            ignoreReadonlyClassProperties: false,
        },
    ],
    create(context, [options]) {
        const rules = baseRule.create(context);
        return {
            Literal(node) {
                var _a;
                // If it’s not a numeric literal we’re not interested
                if (typeof node.value !== 'number' && typeof node.value !== 'bigint') {
                    return;
                }
                // This will be `true` if we’re configured to ignore this case (eg. it’s
                // an enum and `ignoreEnums` is `true`). It will be `false` if we’re not
                // configured to ignore this case. It will remain `undefined` if this is
                // not one of our exception cases, and we’ll fall back to the base rule.
                let isAllowed;
                // Check if the node is a TypeScript enum declaration
                if (isParentTSEnumDeclaration(node)) {
                    isAllowed = options.ignoreEnums === true;
                }
                // Check TypeScript specific nodes for Numeric Literal
                else if (isTSNumericLiteralType(node)) {
                    isAllowed = options.ignoreNumericLiteralTypes === true;
                }
                // Check if the node is a type index
                else if (isAncestorTSIndexedAccessType(node)) {
                    isAllowed = options.ignoreTypeIndexes === true;
                }
                // Check if the node is a readonly class property
                else if (isParentTSReadonlyPropertyDefinition(node)) {
                    isAllowed = options.ignoreReadonlyClassProperties === true;
                }
                // If we’ve hit a case where the ignore option is true we can return now
                if (isAllowed === true) {
                    return;
                }
                // If the ignore option is *not* set we can report it now
                else if (isAllowed === false) {
                    let fullNumberNode = node;
                    let raw = node.raw;
                    if (((_a = node.parent) === null || _a === void 0 ? void 0 : _a.type) === utils_1.AST_NODE_TYPES.UnaryExpression &&
                        // the base rule only shows the operator for negative numbers
                        // https://github.com/eslint/eslint/blob/9dfc8501fb1956c90dc11e6377b4cb38a6bea65d/lib/rules/no-magic-numbers.js#L126
                        node.parent.operator === '-') {
                        fullNumberNode = node.parent;
                        raw = `${node.parent.operator}${node.raw}`;
                    }
                    context.report({
                        messageId: 'noMagic',
                        node: fullNumberNode,
                        data: { raw },
                    });
                    return;
                }
                // Let the base rule deal with the rest
                rules.Literal(node);
            },
        };
    },
});
/**
 * Gets the true parent of the literal, handling prefixed numbers (-1 / +1)
 */
function getLiteralParent(node) {
    var _a;
    if (((_a = node.parent) === null || _a === void 0 ? void 0 : _a.type) === utils_1.AST_NODE_TYPES.UnaryExpression &&
        ['-', '+'].includes(node.parent.operator)) {
        return node.parent.parent;
    }
    return node.parent;
}
/**
 * Checks if the node grandparent is a Typescript type alias declaration
 * @param node the node to be validated.
 * @returns true if the node grandparent is a Typescript type alias declaration
 * @private
 */
function isGrandparentTSTypeAliasDeclaration(node) {
    var _a, _b;
    return ((_b = (_a = node.parent) === null || _a === void 0 ? void 0 : _a.parent) === null || _b === void 0 ? void 0 : _b.type) === utils_1.AST_NODE_TYPES.TSTypeAliasDeclaration;
}
/**
 * Checks if the node grandparent is a Typescript union type and its parent is a type alias declaration
 * @param node the node to be validated.
 * @returns true if the node grandparent is a Typescript union type and its parent is a type alias declaration
 * @private
 */
function isGrandparentTSUnionType(node) {
    var _a, _b;
    if (((_b = (_a = node.parent) === null || _a === void 0 ? void 0 : _a.parent) === null || _b === void 0 ? void 0 : _b.type) === utils_1.AST_NODE_TYPES.TSUnionType) {
        return isGrandparentTSTypeAliasDeclaration(node.parent);
    }
    return false;
}
/**
 * Checks if the node parent is a Typescript enum member
 * @param node the node to be validated.
 * @returns true if the node parent is a Typescript enum member
 * @private
 */
function isParentTSEnumDeclaration(node) {
    const parent = getLiteralParent(node);
    return (parent === null || parent === void 0 ? void 0 : parent.type) === utils_1.AST_NODE_TYPES.TSEnumMember;
}
/**
 * Checks if the node parent is a Typescript literal type
 * @param node the node to be validated.
 * @returns true if the node parent is a Typescript literal type
 * @private
 */
function isParentTSLiteralType(node) {
    var _a;
    return ((_a = node.parent) === null || _a === void 0 ? void 0 : _a.type) === utils_1.AST_NODE_TYPES.TSLiteralType;
}
/**
 * Checks if the node is a valid TypeScript numeric literal type.
 * @param node the node to be validated.
 * @returns true if the node is a TypeScript numeric literal type.
 * @private
 */
function isTSNumericLiteralType(node) {
    var _a;
    // For negative numbers, use the parent node
    if (((_a = node.parent) === null || _a === void 0 ? void 0 : _a.type) === utils_1.AST_NODE_TYPES.UnaryExpression &&
        node.parent.operator === '-') {
        node = node.parent;
    }
    // If the parent node is not a TSLiteralType, early return
    if (!isParentTSLiteralType(node)) {
        return false;
    }
    // If the grandparent is a TSTypeAliasDeclaration, ignore
    if (isGrandparentTSTypeAliasDeclaration(node)) {
        return true;
    }
    // If the grandparent is a TSUnionType and it's parent is a TSTypeAliasDeclaration, ignore
    if (isGrandparentTSUnionType(node)) {
        return true;
    }
    return false;
}
/**
 * Checks if the node parent is a readonly class property
 * @param node the node to be validated.
 * @returns true if the node parent is a readonly class property
 * @private
 */
function isParentTSReadonlyPropertyDefinition(node) {
    const parent = getLiteralParent(node);
    if ((parent === null || parent === void 0 ? void 0 : parent.type) === utils_1.AST_NODE_TYPES.PropertyDefinition && parent.readonly) {
        return true;
    }
    return false;
}
/**
 * Checks if the node is part of a type indexed access (eg. Foo[4])
 * @param node the node to be validated.
 * @returns true if the node is part of an indexed access
 * @private
 */
function isAncestorTSIndexedAccessType(node) {
    var _a, _b, _c;
    // Handle unary expressions (eg. -4)
    let ancestor = getLiteralParent(node);
    // Go up another level while we’re part of a type union (eg. 1 | 2) or
    // intersection (eg. 1 & 2)
    while (((_a = ancestor === null || ancestor === void 0 ? void 0 : ancestor.parent) === null || _a === void 0 ? void 0 : _a.type) === utils_1.AST_NODE_TYPES.TSUnionType ||
        ((_b = ancestor === null || ancestor === void 0 ? void 0 : ancestor.parent) === null || _b === void 0 ? void 0 : _b.type) === utils_1.AST_NODE_TYPES.TSIntersectionType) {
        ancestor = ancestor.parent;
    }
    return ((_c = ancestor === null || ancestor === void 0 ? void 0 : ancestor.parent) === null || _c === void 0 ? void 0 : _c.type) === utils_1.AST_NODE_TYPES.TSIndexedAccessType;
}
//# sourceMappingURL=no-magic-numbers.js.map