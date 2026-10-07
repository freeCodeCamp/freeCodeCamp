"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitorBase = void 0;
const visitor_keys_1 = require("@typescript-eslint/visitor-keys");
function isObject(obj) {
    return typeof obj === 'object' && obj != null;
}
function isNode(node) {
    return isObject(node) && typeof node.type === 'string';
}
class VisitorBase {
    #childVisitorKeys;
    #visitChildrenEvenIfSelectorExists;
    constructor(options) {
        this.#childVisitorKeys = options.childVisitorKeys ?? visitor_keys_1.visitorKeys;
        this.#visitChildrenEvenIfSelectorExists =
            options.visitChildrenEvenIfSelectorExists ?? false;
    }
    /**
     * Default method for visiting children.
     * @param node the node whose children should be visited
     * @param excludeArr a list of keys to not visit
     */
    visitChildren(node, excludeArr = []) {
        if (node?.type == null) {
            return;
        }
        const exclude = new Set([...excludeArr, 'parent']);
        const children = this.#childVisitorKeys[node.type] ?? Object.keys(node);
        for (const key of children) {
            if (exclude.has(key)) {
                continue;
            }
            const child = node[key];
            if (!child) {
                continue;
            }
            if (Array.isArray(child)) {
                for (const subChild of child) {
                    if (isNode(subChild)) {
                        this.visit(subChild);
                    }
                }
            }
            else if (isNode(child)) {
                this.visit(child);
            }
        }
    }
    /**
     * Dispatching node.
     */
    visit(node) {
        if (node?.type == null) {
            return;
        }
        const visitor = this[node.type];
        if (visitor) {
            visitor.call(this, node);
            if (!this.#visitChildrenEvenIfSelectorExists) {
                return;
            }
        }
        this.visitChildren(node);
    }
}
exports.VisitorBase = VisitorBase;
