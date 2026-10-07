"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMissingDotStar = addMissingDotStar;
const stringify_1 = require("../../../utils/stringify");
function raiseUnsupportedASTNode(astNode) {
    return new Error(`Unsupported AST node! Received: ${(0, stringify_1.stringify)(astNode)}`);
}
function addMissingDotStarTraversalAddMissing(astNode, isFirst, isLast) {
    if (!isFirst && !isLast) {
        return astNode;
    }
    const traversalResults = { hasStart: false, hasEnd: false };
    const revampedNode = addMissingDotStarTraversal(astNode, isFirst, isLast, traversalResults);
    const missingStart = isFirst && !traversalResults.hasStart;
    const missingEnd = isLast && !traversalResults.hasEnd;
    if (!missingStart && !missingEnd) {
        return revampedNode;
    }
    const expressions = [];
    if (missingStart) {
        expressions.push({ type: 'Assertion', kind: '^' });
        expressions.push({
            type: 'Repetition',
            quantifier: { type: 'Quantifier', kind: '*', greedy: true },
            expression: { type: 'Char', kind: 'meta', symbol: '.', value: '.', codePoint: Number.NaN },
        });
    }
    expressions.push(revampedNode);
    if (missingEnd) {
        expressions.push({
            type: 'Repetition',
            quantifier: { type: 'Quantifier', kind: '*', greedy: true },
            expression: { type: 'Char', kind: 'meta', symbol: '.', value: '.', codePoint: Number.NaN },
        });
        expressions.push({ type: 'Assertion', kind: '$' });
    }
    return { type: 'Group', capturing: false, expression: { type: 'Alternative', expressions } };
}
function addMissingDotStarTraversal(astNode, isFirst, isLast, traversalResults) {
    switch (astNode.type) {
        case 'Char':
            return astNode;
        case 'Repetition':
            return astNode;
        case 'Quantifier':
            throw new Error(`Wrongly defined AST tree, Quantifier nodes not supposed to be scanned!`);
        case 'Alternative':
            traversalResults.hasStart = true;
            traversalResults.hasEnd = true;
            return Object.assign(Object.assign({}, astNode), { expressions: astNode.expressions.map((node, index) => addMissingDotStarTraversalAddMissing(node, isFirst && index === 0, isLast && index === astNode.expressions.length - 1)) });
        case 'CharacterClass':
            return astNode;
        case 'ClassRange':
            return astNode;
        case 'Group': {
            return Object.assign(Object.assign({}, astNode), { expression: addMissingDotStarTraversal(astNode.expression, isFirst, isLast, traversalResults) });
        }
        case 'Disjunction': {
            traversalResults.hasStart = true;
            traversalResults.hasEnd = true;
            return Object.assign(Object.assign({}, astNode), { left: astNode.left !== null ? addMissingDotStarTraversalAddMissing(astNode.left, isFirst, isLast) : null, right: astNode.right !== null ? addMissingDotStarTraversalAddMissing(astNode.right, isFirst, isLast) : null });
        }
        case 'Assertion': {
            if (astNode.kind === '^' || astNode.kind === 'Lookahead') {
                traversalResults.hasStart = true;
                return astNode;
            }
            else if (astNode.kind === '$' || astNode.kind === 'Lookbehind') {
                traversalResults.hasEnd = true;
                return astNode;
            }
            else {
                throw new Error(`Assertions of kind ${astNode.kind} not implemented yet!`);
            }
        }
        case 'Backreference':
            return astNode;
        default:
            throw raiseUnsupportedASTNode(astNode);
    }
}
function addMissingDotStar(astNode) {
    return addMissingDotStarTraversalAddMissing(astNode, true, true);
}
