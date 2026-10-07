"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simpleTraverse = void 0;
const visitor_keys_1 = require("@typescript-eslint/visitor-keys");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isValidNode(x) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return x != null && typeof x === 'object' && typeof x.type === 'string';
}
function getVisitorKeysForNode(allVisitorKeys, node) {
    const keys = allVisitorKeys[node.type];
    return (keys !== null && keys !== void 0 ? keys : []);
}
class SimpleTraverser {
    constructor(selectors, setParentPointers = false) {
        this.allVisitorKeys = visitor_keys_1.visitorKeys;
        this.selectors = selectors;
        this.setParentPointers = setParentPointers;
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
        else if (node.type in this.selectors) {
            this.selectors[node.type](node, parent);
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
exports.simpleTraverse = simpleTraverse;
//# sourceMappingURL=simple-traverse.js.map