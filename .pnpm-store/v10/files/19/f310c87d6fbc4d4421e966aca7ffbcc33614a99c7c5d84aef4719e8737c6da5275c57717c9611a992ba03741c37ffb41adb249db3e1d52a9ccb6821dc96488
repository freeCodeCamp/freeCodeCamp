"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportVisitor = void 0;
const types_1 = require("@typescript-eslint/types");
const Visitor_1 = require("./Visitor");
class ExportVisitor extends Visitor_1.Visitor {
    #exportNode;
    #referencer;
    constructor(node, referencer) {
        super(referencer);
        this.#exportNode = node;
        this.#referencer = referencer;
    }
    static visit(referencer, node) {
        const exportReferencer = new ExportVisitor(node, referencer);
        exportReferencer.visit(node);
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
        if (node.exportKind === 'type' &&
            node.local.type === types_1.AST_NODE_TYPES.Identifier) {
            // export { type T };
            // type exports can only reference types
            //
            // we can't let this fall through to the Identifier selector because the exportKind is on this node
            // and we don't have access to the `.parent` during scope analysis
            this.#referencer.currentScope().referenceType(node.local);
        }
        else {
            this.visit(node.local);
        }
    }
    Identifier(node) {
        if (this.#exportNode.exportKind === 'type') {
            // export type { T };
            // type exports can only reference types
            this.#referencer.currentScope().referenceType(node);
        }
        else {
            this.#referencer.currentScope().referenceDualValueType(node);
        }
    }
}
exports.ExportVisitor = ExportVisitor;
