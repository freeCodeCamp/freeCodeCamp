"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simpleTraverse = simpleTraverse;
const visitor_keys_1 = require("@typescript-eslint/visitor-keys");
function isValidNode(x) {
    return (typeof x === 'object' &&
        x != null &&
        'type' in x &&
        typeof x.type === 'string');
}
function getVisitorKeysForNode(allVisitorKeys, node) {
    const keys = allVisitorKeys[node.type];
    return (keys ?? []);
}
class SimpleTraverser {
    allVisitorKeys = visitor_keys_1.visitorKeys;
    selectors;
    setParentPointers;
    constructor(selectors, setParentPointers = false) {
        this.selectors = selectors;
        this.setParentPointers = setParentPointers;
        if (selectors.visitorKeys) {
            this.allVisitorKeys = selectors.visitorKeys;
        }
    }
    traverse(node, parent) {
        if (!isValidNode(node)) {
            return;
        }
        if (this.setParentPointers) {
            node.parent = parent;
        }
        if ('enter' in this.selectors) {
            this.selectors.enter(node, parent);
        }
        else if (node.type in this.selectors.visitors) {
            this.selectors.visitors[node.type](node, parent);
        }
        const keys = getVisitorKeysForNode(this.allVisitorKeys, node);
        if (keys.length < 1) {
            return;
        }
        for (const key of keys) {
            const childOrChildren = node[key];
            if (Array.isArray(childOrChildren)) {
                for (const child of childOrChildren) {
                    this.traverse(child, node);
                }
            }
            else {
                this.traverse(childOrChildren, node);
            }
        }
    }
}
function simpleTraverse(startingNode, options, setParentPointers = false) {
    new SimpleTraverser(options, setParentPointers).traverse(startingNode, undefined);
}
//# sourceMappingURL=simple-traverse.js.map