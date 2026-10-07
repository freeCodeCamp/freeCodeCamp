"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _VisitorBase_childVisitorKeys, _VisitorBase_visitChildrenEvenIfSelectorExists;
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
    constructor(options) {
        var _a, _b;
        _VisitorBase_childVisitorKeys.set(this, void 0);
        _VisitorBase_visitChildrenEvenIfSelectorExists.set(this, void 0);
        __classPrivateFieldSet(this, _VisitorBase_childVisitorKeys, (_a = options.childVisitorKeys) !== null && _a !== void 0 ? _a : visitor_keys_1.visitorKeys, "f");
        __classPrivateFieldSet(this, _VisitorBase_visitChildrenEvenIfSelectorExists, (_b = options.visitChildrenEvenIfSelectorExists) !== null && _b !== void 0 ? _b : false, "f");
    }
    /**
     * Default method for visiting children.
     * @param node the node whose children should be visited
     * @param exclude a list of keys to not visit
     */
    visitChildren(node, excludeArr = []) {
        var _a;
        if (node == null || node.type == null) {
            return;
        }
        const exclude = new Set(excludeArr.concat(['parent']));
        const children = (_a = __classPrivateFieldGet(this, _VisitorBase_childVisitorKeys, "f")[node.type]) !== null && _a !== void 0 ? _a : Object.keys(node);
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
        if (node == null || node.type == null) {
            return;
        }
        const visitor = this[node.type];
        if (visitor) {
            visitor.call(this, node);
            if (!__classPrivateFieldGet(this, _VisitorBase_visitChildrenEvenIfSelectorExists, "f")) {
                return;
            }
        }
        this.visitChildren(node);
    }
}
exports.VisitorBase = VisitorBase;
_VisitorBase_childVisitorKeys = new WeakMap(), _VisitorBase_visitChildrenEvenIfSelectorExists = new WeakMap();
//# sourceMappingURL=VisitorBase.js.map