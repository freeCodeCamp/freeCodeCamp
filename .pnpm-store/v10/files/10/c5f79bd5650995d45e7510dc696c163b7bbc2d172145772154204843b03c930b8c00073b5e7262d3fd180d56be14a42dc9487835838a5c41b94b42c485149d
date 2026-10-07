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
var _ExportVisitor_referencer, _ExportVisitor_exportNode;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportVisitor = void 0;
const types_1 = require("@typescript-eslint/types");
const Visitor_1 = require("./Visitor");
class ExportVisitor extends Visitor_1.Visitor {
    constructor(node, referencer) {
        super(referencer);
        _ExportVisitor_referencer.set(this, void 0);
        _ExportVisitor_exportNode.set(this, void 0);
        __classPrivateFieldSet(this, _ExportVisitor_exportNode, node, "f");
        __classPrivateFieldSet(this, _ExportVisitor_referencer, referencer, "f");
    }
    static visit(referencer, node) {
        const exportReferencer = new ExportVisitor(node, referencer);
        exportReferencer.visit(node);
    }
    Identifier(node) {
        if (__classPrivateFieldGet(this, _ExportVisitor_exportNode, "f").exportKind === 'type') {
            // export type { T };
            // type exports can only reference types
            __classPrivateFieldGet(this, _ExportVisitor_referencer, "f").currentScope().referenceType(node);
        }
        else {
            __classPrivateFieldGet(this, _ExportVisitor_referencer, "f").currentScope().referenceDualValueType(node);
        }
    }
    ExportDefaultDeclaration(node) {
        if (node.declaration.type === types_1.AST_NODE_TYPES.Identifier) {
            // export default A;
            // this could be a type or a variable
            this.visit(node.declaration);
        }
        else {
            // export const a = 1;
            // export something();
            // etc
            // these not included in the scope of this visitor as they are all guaranteed to be values or declare variables
        }
    }
    ExportNamedDeclaration(node) {
        if (node.source) {
            // export ... from 'foo';
            // these are external identifiers so there shouldn't be references or defs
            return;
        }
        if (!node.declaration) {
            // export { x };
            this.visitChildren(node);
        }
        else {
            // export const x = 1;
            // this is not included in the scope of this visitor as it creates a variable
        }
    }
    ExportSpecifier(node) {
        if (node.exportKind === 'type') {
            // export { type T };
            // type exports can only reference types
            //
            // we can't let this fall through to the Identifier selector because the exportKind is on this node
            // and we don't have access to the `.parent` during scope analysis
            __classPrivateFieldGet(this, _ExportVisitor_referencer, "f").currentScope().referenceType(node.local);
        }
        else {
            this.visit(node.local);
        }
    }
}
exports.ExportVisitor = ExportVisitor;
_ExportVisitor_referencer = new WeakMap(), _ExportVisitor_exportNode = new WeakMap();
//# sourceMappingURL=ExportVisitor.js.map