"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeComparisonResult = void 0;
exports.compareNodes = compareNodes;
const utils_1 = require("@typescript-eslint/utils");
const visitor_keys_1 = require("@typescript-eslint/visitor-keys");
var NodeComparisonResult;
(function (NodeComparisonResult) {
    /** the two nodes are comparably the same */
    NodeComparisonResult["Equal"] = "Equal";
    /** the left node is a subset of the right node */
    NodeComparisonResult["Subset"] = "Subset";
    /** the left node is not the same or is a superset of the right node */
    NodeComparisonResult["Invalid"] = "Invalid";
})(NodeComparisonResult || (exports.NodeComparisonResult = NodeComparisonResult = {}));
function compareArrays(arrayA, arrayB) {
    if (arrayA.length !== arrayB.length) {
        return NodeComparisonResult.Invalid;
    }
    const result = arrayA.every((elA, idx) => {
        const elB = arrayB[idx];
        if (elA == null || elB == null) {
            return elA === elB;
        }
        return compareUnknownValues(elA, elB) === NodeComparisonResult.Equal;
    });
    if (result) {
        return NodeComparisonResult.Equal;
    }
    return NodeComparisonResult.Invalid;
}
function isValidNode(x) {
    return (typeof x === 'object' &&
        x != null &&
        'type' in x &&
        typeof x.type === 'string');
}
function isValidChainExpressionToLookThrough(node) {
    return (!(node.parent?.type === utils_1.AST_NODE_TYPES.MemberExpression &&
        node.parent.object === node) &&
        !(node.parent?.type === utils_1.AST_NODE_TYPES.CallExpression &&
            node.parent.callee === node) &&
        node.type === utils_1.AST_NODE_TYPES.ChainExpression);
}
function compareUnknownValues(valueA, valueB) {
    /* istanbul ignore if -- not possible for us to test this - it's just a sanity safeguard */
    if (valueA == null || valueB == null) {
        if (valueA !== valueB) {
            return NodeComparisonResult.Invalid;
        }
        return NodeComparisonResult.Equal;
    }
    /* istanbul ignore if -- not possible for us to test this - it's just a sanity safeguard */
    if (!isValidNode(valueA) || !isValidNode(valueB)) {
        return NodeComparisonResult.Invalid;
    }
    return compareNodes(valueA, valueB);
}
function compareByVisiting(nodeA, nodeB) {
    const currentVisitorKeys = visitor_keys_1.visitorKeys[nodeA.type];
    /* istanbul ignore if -- not possible for us to test this - it's just a sanity safeguard */
    if (currentVisitorKeys == null) {
        // we don't know how to visit this node, so assume it's invalid to avoid false-positives / broken fixers
        return NodeComparisonResult.Invalid;
    }
    if (currentVisitorKeys.length === 0) {
        // assume nodes with no keys are constant things like keywords
        return NodeComparisonResult.Equal;
    }
    for (const key of currentVisitorKeys) {
        // @ts-expect-error - dynamic access but it's safe
        const nodeAChildOrChildren = nodeA[key];
        // @ts-expect-error - dynamic access but it's safe
        const nodeBChildOrChildren = nodeB[key];
        if (Array.isArray(nodeAChildOrChildren)) {
            const arrayA = nodeAChildOrChildren;
            const arrayB = nodeBChildOrChildren;
            const result = compareArrays(arrayA, arrayB);
            if (result !== NodeComparisonResult.Equal) {
                return NodeComparisonResult.Invalid;
            }
            // fallthrough to the next key as the key was "equal"
        }
        else {
            const result = compareUnknownValues(nodeAChildOrChildren, nodeBChildOrChildren);
            if (result !== NodeComparisonResult.Equal) {
                return NodeComparisonResult.Invalid;
            }
            // fallthrough to the next key as the key was "equal"
        }
    }
    return NodeComparisonResult.Equal;
}
function compareNodesUncached(nodeA, nodeB) {
    if (nodeA.type !== nodeB.type) {
        // special cases where nodes are allowed to be non-equal
        // look through a chain expression node at the top-level because it only
        // exists to delimit the end of an optional chain
        //
        // a?.b && a.b.c
        // ^^^^ ChainExpression, MemberExpression
        //         ^^^^^ MemberExpression
        //
        // except for in this class of cases
        // (a?.b).c && a.b.c
        // because the parentheses have runtime meaning (sad face)
        if (isValidChainExpressionToLookThrough(nodeA)) {
            return compareNodes(nodeA.expression, nodeB);
        }
        if (isValidChainExpressionToLookThrough(nodeB)) {
            return compareNodes(nodeA, nodeB.expression);
        }
        // look through the type-only non-null assertion because its existence could
        // possibly be replaced by an optional chain instead
        //
        // a.b! && a.b.c
        // ^^^^ TSNonNullExpression
        if (nodeA.type === utils_1.AST_NODE_TYPES.TSNonNullExpression) {
            return compareNodes(nodeA.expression, nodeB);
        }
        if (nodeB.type === utils_1.AST_NODE_TYPES.TSNonNullExpression) {
            return compareNodes(nodeA, nodeB.expression);
        }
        // special case for subset optional chains where the node types don't match,
        // but we want to try comparing by discarding the "extra" code
        //
        // a && a.b
        //      ^ compare this
        // a && a()
        //      ^ compare this
        // a.b && a.b()
        //        ^^^ compare this
        // a() && a().b
        //        ^^^ compare this
        // import.meta && import.meta.b
        //                ^^^^^^^^^^^ compare this
        if (nodeA.type === utils_1.AST_NODE_TYPES.CallExpression ||
            nodeA.type === utils_1.AST_NODE_TYPES.Identifier ||
            nodeA.type === utils_1.AST_NODE_TYPES.MemberExpression ||
            nodeA.type === utils_1.AST_NODE_TYPES.MetaProperty) {
            switch (nodeB.type) {
                case utils_1.AST_NODE_TYPES.MemberExpression:
                    if (nodeB.property.type === utils_1.AST_NODE_TYPES.PrivateIdentifier) {
                        // Private identifiers in optional chaining is not currently allowed
                        // TODO - handle this once TS supports it (https://github.com/microsoft/TypeScript/issues/42734)
                        return NodeComparisonResult.Invalid;
                    }
                    if (compareNodes(nodeA, nodeB.object) !== NodeComparisonResult.Invalid) {
                        return NodeComparisonResult.Subset;
                    }
                    return NodeComparisonResult.Invalid;
                case utils_1.AST_NODE_TYPES.CallExpression:
                    if (compareNodes(nodeA, nodeB.callee) !== NodeComparisonResult.Invalid) {
                        return NodeComparisonResult.Subset;
                    }
                    return NodeComparisonResult.Invalid;
                default:
                    return NodeComparisonResult.Invalid;
            }
        }
        return NodeComparisonResult.Invalid;
    }
    switch (nodeA.type) {
        // these expressions create a new instance each time - so it makes no sense to compare the chain
        case utils_1.AST_NODE_TYPES.ArrayExpression:
        case utils_1.AST_NODE_TYPES.ArrowFunctionExpression:
        case utils_1.AST_NODE_TYPES.ClassExpression:
        case utils_1.AST_NODE_TYPES.FunctionExpression:
        case utils_1.AST_NODE_TYPES.JSXElement:
        case utils_1.AST_NODE_TYPES.JSXFragment:
        case utils_1.AST_NODE_TYPES.NewExpression:
        case utils_1.AST_NODE_TYPES.ObjectExpression:
            return NodeComparisonResult.Invalid;
        // chaining from assignments could change the value irrevocably - so it makes no sense to compare the chain
        case utils_1.AST_NODE_TYPES.AssignmentExpression:
            return NodeComparisonResult.Invalid;
        case utils_1.AST_NODE_TYPES.CallExpression: {
            const nodeBCall = nodeB;
            // check for cases like
            // foo() && foo()(bar)
            // ^^^^^ nodeA
            //          ^^^^^^^^^^ nodeB
            // we don't want to check the arguments in this case
            const aSubsetOfB = compareNodes(nodeA, nodeBCall.callee);
            if (aSubsetOfB !== NodeComparisonResult.Invalid) {
                return NodeComparisonResult.Subset;
            }
            const calleeCompare = compareNodes(nodeA.callee, nodeBCall.callee);
            if (calleeCompare !== NodeComparisonResult.Equal) {
                return NodeComparisonResult.Invalid;
            }
            // NOTE - we purposely ignore optional flag because for our purposes
            // foo?.bar() && foo.bar?.()?.baz
            // or
            // foo.bar() && foo?.bar?.()?.baz
            // are going to be exactly the same
            const argumentCompare = compareArrays(nodeA.arguments, nodeBCall.arguments);
            if (argumentCompare !== NodeComparisonResult.Equal) {
                return NodeComparisonResult.Invalid;
            }
            const typeParamCompare = compareNodes(nodeA.typeArguments, nodeBCall.typeArguments);
            if (typeParamCompare === NodeComparisonResult.Equal) {
                return NodeComparisonResult.Equal;
            }
            return NodeComparisonResult.Invalid;
        }
        case utils_1.AST_NODE_TYPES.ChainExpression:
            // special case handling for ChainExpression because it's allowed to be a subset
            return compareNodes(nodeA, nodeB.expression);
        case utils_1.AST_NODE_TYPES.Identifier:
        case utils_1.AST_NODE_TYPES.PrivateIdentifier:
            if (nodeA.name === nodeB.name) {
                return NodeComparisonResult.Equal;
            }
            return NodeComparisonResult.Invalid;
        case utils_1.AST_NODE_TYPES.Literal: {
            const nodeBLiteral = nodeB;
            if (nodeA.raw === nodeBLiteral.raw &&
                nodeA.value === nodeBLiteral.value) {
                return NodeComparisonResult.Equal;
            }
            return NodeComparisonResult.Invalid;
        }
        case utils_1.AST_NODE_TYPES.MemberExpression: {
            const nodeBMember = nodeB;
            if (nodeBMember.property.type === utils_1.AST_NODE_TYPES.PrivateIdentifier) {
                // Private identifiers in optional chaining is not currently allowed
                // TODO - handle this once TS supports it (https://github.com/microsoft/TypeScript/issues/42734)
                return NodeComparisonResult.Invalid;
            }
            // check for cases like
            // foo.bar && foo.bar.baz
            // ^^^^^^^ nodeA
            //            ^^^^^^^^^^^ nodeB
            // result === Equal
            //
            // foo.bar && foo.bar.baz.bam
            // ^^^^^^^ nodeA
            //            ^^^^^^^^^^^^^^^ nodeB
            // result === Subset
            //
            // we don't want to check the property in this case
            const aSubsetOfB = compareNodes(nodeA, nodeBMember.object);
            if (aSubsetOfB !== NodeComparisonResult.Invalid) {
                return NodeComparisonResult.Subset;
            }
            if (nodeA.computed !== nodeBMember.computed) {
                return NodeComparisonResult.Invalid;
            }
            // NOTE - we purposely ignore optional flag because for our purposes
            // foo?.bar && foo.bar?.baz
            // or
            // foo.bar && foo?.bar?.baz
            // are going to be exactly the same
            const objectCompare = compareNodes(nodeA.object, nodeBMember.object);
            if (objectCompare !== NodeComparisonResult.Equal) {
                return NodeComparisonResult.Invalid;
            }
            return compareNodes(nodeA.property, nodeBMember.property);
        }
        case utils_1.AST_NODE_TYPES.TSTemplateLiteralType:
        case utils_1.AST_NODE_TYPES.TemplateLiteral: {
            const nodeBTemplate = nodeB;
            const areQuasisEqual = nodeA.quasis.length === nodeBTemplate.quasis.length &&
                nodeA.quasis.every((elA, idx) => {
                    const elB = nodeBTemplate.quasis[idx];
                    return elA.value.cooked === elB.value.cooked;
                });
            if (!areQuasisEqual) {
                return NodeComparisonResult.Invalid;
            }
            return NodeComparisonResult.Equal;
        }
        case utils_1.AST_NODE_TYPES.TemplateElement: {
            const nodeBElement = nodeB;
            if (nodeA.value.cooked === nodeBElement.value.cooked) {
                return NodeComparisonResult.Equal;
            }
            return NodeComparisonResult.Invalid;
        }
        // these aren't actually valid expressions.
        // https://github.com/typescript-eslint/typescript-eslint/blob/20d7caee35ab84ae6381fdf04338c9e2b9e2bc48/packages/ast-spec/src/unions/Expression.ts#L37-L43
        case utils_1.AST_NODE_TYPES.ArrayPattern:
        case utils_1.AST_NODE_TYPES.ObjectPattern:
            /* istanbul ignore next */
            return NodeComparisonResult.Invalid;
        // update expression returns a number and also changes the value each time - so it makes no sense to compare the chain
        case utils_1.AST_NODE_TYPES.UpdateExpression:
            return NodeComparisonResult.Invalid;
        // yield returns the value passed to the `next` function, so it may not be the same each time - so it makes no sense to compare the chain
        case utils_1.AST_NODE_TYPES.YieldExpression:
            return NodeComparisonResult.Invalid;
        // general-case automatic handling of nodes to save us implementing every
        // single case by hand. This just iterates the visitor keys to recursively
        // check the children.
        //
        // Any specific logic cases or short-circuits should be listed as separate
        // cases so that they don't fall into this generic handling
        default:
            return compareByVisiting(nodeA, nodeB);
    }
}
const COMPARE_NODES_CACHE = new WeakMap();
/**
 * Compares two nodes' ASTs to determine if the A is equal to or a subset of B
 */
function compareNodes(nodeA, nodeB) {
    if (nodeA == null || nodeB == null) {
        if (nodeA !== nodeB) {
            return NodeComparisonResult.Invalid;
        }
        return NodeComparisonResult.Equal;
    }
    const cached = COMPARE_NODES_CACHE.get(nodeA)?.get(nodeB);
    if (cached) {
        return cached;
    }
    const result = compareNodesUncached(nodeA, nodeB);
    let mapA = COMPARE_NODES_CACHE.get(nodeA);
    if (mapA == null) {
        mapA = new WeakMap();
        COMPARE_NODES_CACHE.set(nodeA, mapA);
    }
    mapA.set(nodeB, result);
    return result;
}
//# sourceMappingURL=compareNodes.js.map