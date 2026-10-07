"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatternVisitor = void 0;
const types_1 = require("@typescript-eslint/types");
const VisitorBase_1 = require("./VisitorBase");
class PatternVisitor extends VisitorBase_1.VisitorBase {
    #assignments = [];
    #callback;
    #restElements = [];
    #rootPattern;
    rightHandNodes = [];
    constructor(options, rootPattern, callback) {
        super(options);
        this.#rootPattern = rootPattern;
        this.#callback = callback;
    }
    static isPattern(node) {
        const nodeType = node.type;
        return (nodeType === types_1.AST_NODE_TYPES.Identifier ||
            nodeType === types_1.AST_NODE_TYPES.ObjectPattern ||
            nodeType === types_1.AST_NODE_TYPES.ArrayPattern ||
            nodeType === types_1.AST_NODE_TYPES.SpreadElement ||
            nodeType === types_1.AST_NODE_TYPES.RestElement ||
            nodeType === types_1.AST_NODE_TYPES.AssignmentPattern);
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
        this.#assignments.push(node);
        this.visit(node.left);
        this.rightHandNodes.push(node.right);
        this.#assignments.pop();
    }
    AssignmentPattern(pattern) {
        this.#assignments.push(pattern);
        this.visit(pattern.left);
        this.rightHandNodes.push(pattern.right);
        this.#assignments.pop();
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
        const lastRestElement = this.#restElements.at(-1);
        this.#callback(pattern, {
            assignments: this.#assignments,
            rest: lastRestElement?.argument === pattern,
            topLevel: pattern === this.#rootPattern,
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
        this.#restElements.push(pattern);
        this.visit(pattern.argument);
        this.#restElements.pop();
    }
    SpreadElement(node) {
        this.visit(node.argument);
    }
    TSTypeAnnotation() {
        // we don't want to visit types
    }
}
exports.PatternVisitor = PatternVisitor;
