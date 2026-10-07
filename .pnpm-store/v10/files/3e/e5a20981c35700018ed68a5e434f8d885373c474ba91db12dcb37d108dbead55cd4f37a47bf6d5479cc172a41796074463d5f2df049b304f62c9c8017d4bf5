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
var _PatternVisitor_rootPattern, _PatternVisitor_callback, _PatternVisitor_assignments, _PatternVisitor_restElements;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatternVisitor = void 0;
const types_1 = require("@typescript-eslint/types");
const VisitorBase_1 = require("./VisitorBase");
class PatternVisitor extends VisitorBase_1.VisitorBase {
    static isPattern(node) {
        const nodeType = node.type;
        return (nodeType === types_1.AST_NODE_TYPES.Identifier ||
            nodeType === types_1.AST_NODE_TYPES.ObjectPattern ||
            nodeType === types_1.AST_NODE_TYPES.ArrayPattern ||
            nodeType === types_1.AST_NODE_TYPES.SpreadElement ||
            nodeType === types_1.AST_NODE_TYPES.RestElement ||
            nodeType === types_1.AST_NODE_TYPES.AssignmentPattern);
    }
    constructor(options, rootPattern, callback) {
        super(options);
        _PatternVisitor_rootPattern.set(this, void 0);
        _PatternVisitor_callback.set(this, void 0);
        _PatternVisitor_assignments.set(this, []);
        this.rightHandNodes = [];
        _PatternVisitor_restElements.set(this, []);
        __classPrivateFieldSet(this, _PatternVisitor_rootPattern, rootPattern, "f");
        __classPrivateFieldSet(this, _PatternVisitor_callback, callback, "f");
    }
    ArrayExpression(node) {
        node.elements.forEach(this.visit, this);
    }
    ArrayPattern(pattern) {
        for (const element of pattern.elements) {
            this.visit(element);
        }
    }
    AssignmentExpression(node) {
        __classPrivateFieldGet(this, _PatternVisitor_assignments, "f").push(node);
        this.visit(node.left);
        this.rightHandNodes.push(node.right);
        __classPrivateFieldGet(this, _PatternVisitor_assignments, "f").pop();
    }
    AssignmentPattern(pattern) {
        __classPrivateFieldGet(this, _PatternVisitor_assignments, "f").push(pattern);
        this.visit(pattern.left);
        this.rightHandNodes.push(pattern.right);
        __classPrivateFieldGet(this, _PatternVisitor_assignments, "f").pop();
    }
    CallExpression(node) {
        // arguments are right hand nodes.
        node.arguments.forEach(a => {
            this.rightHandNodes.push(a);
        });
        this.visit(node.callee);
    }
    Decorator() {
        // don't visit any decorators when exploring a pattern
    }
    Identifier(pattern) {
        var _a;
        const lastRestElement = (_a = __classPrivateFieldGet(this, _PatternVisitor_restElements, "f")[__classPrivateFieldGet(this, _PatternVisitor_restElements, "f").length - 1]) !== null && _a !== void 0 ? _a : null;
        __classPrivateFieldGet(this, _PatternVisitor_callback, "f").call(this, pattern, {
            topLevel: pattern === __classPrivateFieldGet(this, _PatternVisitor_rootPattern, "f"),
            rest: lastRestElement != null && lastRestElement.argument === pattern,
            assignments: __classPrivateFieldGet(this, _PatternVisitor_assignments, "f"),
        });
    }
    MemberExpression(node) {
        // Computed property's key is a right hand node.
        if (node.computed) {
            this.rightHandNodes.push(node.property);
        }
        // the object is only read, write to its property.
        this.rightHandNodes.push(node.object);
    }
    Property(property) {
        // Computed property's key is a right hand node.
        if (property.computed) {
            this.rightHandNodes.push(property.key);
        }
        // If it's shorthand, its key is same as its value.
        // If it's shorthand and has its default value, its key is same as its value.left (the value is AssignmentPattern).
        // If it's not shorthand, the name of new variable is its value's.
        this.visit(property.value);
    }
    RestElement(pattern) {
        __classPrivateFieldGet(this, _PatternVisitor_restElements, "f").push(pattern);
        this.visit(pattern.argument);
        __classPrivateFieldGet(this, _PatternVisitor_restElements, "f").pop();
    }
    SpreadElement(node) {
        this.visit(node.argument);
    }
    TSTypeAnnotation() {
        // we don't want to visit types
    }
}
exports.PatternVisitor = PatternVisitor;
_PatternVisitor_rootPattern = new WeakMap(), _PatternVisitor_callback = new WeakMap(), _PatternVisitor_assignments = new WeakMap(), _PatternVisitor_restElements = new WeakMap();
//# sourceMappingURL=PatternVisitor.js.map