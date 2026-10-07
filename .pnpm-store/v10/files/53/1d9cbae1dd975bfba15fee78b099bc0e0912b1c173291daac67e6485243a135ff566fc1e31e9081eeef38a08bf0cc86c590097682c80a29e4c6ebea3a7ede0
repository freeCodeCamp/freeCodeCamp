"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWrappingFixer = getWrappingFixer;
exports.getMovedNodeCode = getMovedNodeCode;
exports.isStrongPrecedenceNode = isStrongPrecedenceNode;
exports.isWeakPrecedenceParent = isWeakPrecedenceParent;
const utils_1 = require("@typescript-eslint/utils");
/**
 * Wraps node with some code. Adds parentheses as necessary.
 * @returns Fixer which adds the specified code and parens if necessary.
 */
function getWrappingFixer(params) {
    const { node, innerNode = node, sourceCode, wrap } = params;
    const innerNodes = Array.isArray(innerNode) ? innerNode : [innerNode];
    return (fixer) => {
        const innerCodes = innerNodes.map(innerNode => {
            let code = sourceCode.getText(innerNode);
            /**
             * Wrap our node in parens to prevent the following cases:
             * - It has a weaker precedence than the code we are wrapping it in
             * - It's gotten mistaken as block statement instead of object expression
             */
            if (!isStrongPrecedenceNode(innerNode) ||
                isObjectExpressionInOneLineReturn(node, innerNode)) {
                code = `(${code})`;
            }
            return code;
        });
        if (!wrap) {
            return fixer.replaceText(node, innerCodes.join(''));
        }
        // do the wrapping
        let code = wrap(...innerCodes);
        // check the outer expression's precedence
        if (isWeakPrecedenceParent(node) &&
            // we wrapped the node in some expression which very likely has a different precedence than original wrapped node
            // let's wrap the whole expression in parens just in case
            !utils_1.ASTUtils.isParenthesized(node, sourceCode)) {
            code = `(${code})`;
        }
        // check if we need to insert semicolon
        if (/^[`([]/.test(code) && isMissingSemicolonBefore(node, sourceCode)) {
            code = `;${code}`;
        }
        return fixer.replaceText(node, code);
    };
}
/**
 * If the node to be moved and the destination node require parentheses, include parentheses in the node to be moved.
 * @param sourceCode Source code of current file
 * @param nodeToMove Nodes that need to be moved
 * @param destinationNode Final destination node with nodeToMove
 * @returns If parentheses are required, code for the nodeToMove node is returned with parentheses at both ends of the code.
 */
function getMovedNodeCode(params) {
    const { destinationNode, nodeToMove: existingNode, sourceCode } = params;
    const code = sourceCode.getText(existingNode);
    if (isStrongPrecedenceNode(existingNode)) {
        // Moved node never needs parens
        return code;
    }
    if (!isWeakPrecedenceParent(destinationNode)) {
        // Destination would never needs parens, regardless what node moves there
        return code;
    }
    // Parens may be necessary
    return `(${code})`;
}
/**
 * Check if a node will always have the same precedence if its parent changes.
 */
function isStrongPrecedenceNode(innerNode) {
    return (innerNode.type === utils_1.AST_NODE_TYPES.Literal ||
        innerNode.type === utils_1.AST_NODE_TYPES.Identifier ||
        innerNode.type === utils_1.AST_NODE_TYPES.TSTypeReference ||
        innerNode.type === utils_1.AST_NODE_TYPES.ArrayExpression ||
        innerNode.type === utils_1.AST_NODE_TYPES.ObjectExpression ||
        innerNode.type === utils_1.AST_NODE_TYPES.MemberExpression ||
        innerNode.type === utils_1.AST_NODE_TYPES.CallExpression ||
        innerNode.type === utils_1.AST_NODE_TYPES.NewExpression ||
        innerNode.type === utils_1.AST_NODE_TYPES.TaggedTemplateExpression ||
        innerNode.type === utils_1.AST_NODE_TYPES.TSInstantiationExpression);
}
/**
 * Check if a node's parent could have different precedence if the node changes.
 */
function isWeakPrecedenceParent(node) {
    const parent = node.parent;
    if (!parent) {
        return false;
    }
    if (parent.type === utils_1.AST_NODE_TYPES.UpdateExpression ||
        parent.type === utils_1.AST_NODE_TYPES.UnaryExpression ||
        parent.type === utils_1.AST_NODE_TYPES.BinaryExpression ||
        parent.type === utils_1.AST_NODE_TYPES.LogicalExpression ||
        parent.type === utils_1.AST_NODE_TYPES.ConditionalExpression ||
        parent.type === utils_1.AST_NODE_TYPES.AwaitExpression) {
        return true;
    }
    if (parent.type === utils_1.AST_NODE_TYPES.MemberExpression &&
        parent.object === node) {
        return true;
    }
    if ((parent.type === utils_1.AST_NODE_TYPES.CallExpression ||
        parent.type === utils_1.AST_NODE_TYPES.NewExpression) &&
        parent.callee === node) {
        return true;
    }
    if (parent.type === utils_1.AST_NODE_TYPES.TaggedTemplateExpression &&
        parent.tag === node) {
        return true;
    }
    return false;
}
/**
 * Returns true if a node is at the beginning of expression statement and the statement above doesn't end with semicolon.
 * Doesn't check if the node begins with `(`, `[` or `` ` ``.
 */
function isMissingSemicolonBefore(node, sourceCode) {
    for (;;) {
        // https://github.com/typescript-eslint/typescript-eslint/issues/6225
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const parent = node.parent;
        if (parent.type === utils_1.AST_NODE_TYPES.ExpressionStatement) {
            const block = parent.parent;
            if (block.type === utils_1.AST_NODE_TYPES.Program ||
                block.type === utils_1.AST_NODE_TYPES.BlockStatement) {
                // parent is an expression statement in a block
                const statementIndex = block.body.indexOf(parent);
                const previousStatement = block.body[statementIndex - 1];
                if (statementIndex > 0 &&
                    utils_1.ESLintUtils.nullThrows(sourceCode.getLastToken(previousStatement), 'Mismatched semicolon and block').value !== ';') {
                    return true;
                }
            }
        }
        if (!isLeftHandSide(node)) {
            return false;
        }
        node = parent;
    }
}
/**
 * Checks if a node is LHS of an operator.
 */
function isLeftHandSide(node) {
    // https://github.com/typescript-eslint/typescript-eslint/issues/6225
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const parent = node.parent;
    // a++
    if (parent.type === utils_1.AST_NODE_TYPES.UpdateExpression) {
        return true;
    }
    // a + b
    if ((parent.type === utils_1.AST_NODE_TYPES.BinaryExpression ||
        parent.type === utils_1.AST_NODE_TYPES.LogicalExpression ||
        parent.type === utils_1.AST_NODE_TYPES.AssignmentExpression) &&
        node === parent.left) {
        return true;
    }
    // a ? b : c
    if (parent.type === utils_1.AST_NODE_TYPES.ConditionalExpression &&
        node === parent.test) {
        return true;
    }
    // a(b)
    if (parent.type === utils_1.AST_NODE_TYPES.CallExpression && node === parent.callee) {
        return true;
    }
    // a`b`
    if (parent.type === utils_1.AST_NODE_TYPES.TaggedTemplateExpression &&
        node === parent.tag) {
        return true;
    }
    return false;
}
/**
 * Checks if a node's parent is arrow function expression and a inner node is object expression
 */
function isObjectExpressionInOneLineReturn(node, innerNode) {
    return (node.parent?.type === utils_1.AST_NODE_TYPES.ArrowFunctionExpression &&
        node.parent.body === node &&
        innerNode.type === utils_1.AST_NODE_TYPES.ObjectExpression);
}
//# sourceMappingURL=getWrappingFixer.js.map