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
var _ImportVisitor_declaration, _ImportVisitor_referencer;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportVisitor = void 0;
const definition_1 = require("../definition");
const Visitor_1 = require("./Visitor");
class ImportVisitor extends Visitor_1.Visitor {
    constructor(declaration, referencer) {
        super(referencer);
        _ImportVisitor_declaration.set(this, void 0);
        _ImportVisitor_referencer.set(this, void 0);
        __classPrivateFieldSet(this, _ImportVisitor_declaration, declaration, "f");
        __classPrivateFieldSet(this, _ImportVisitor_referencer, referencer, "f");
    }
    static visit(referencer, declaration) {
        const importReferencer = new ImportVisitor(declaration, referencer);
        importReferencer.visit(declaration);
    }
    visitImport(id, specifier) {
        __classPrivateFieldGet(this, _ImportVisitor_referencer, "f")
            .currentScope()
            .defineIdentifier(id, new definition_1.ImportBindingDefinition(id, specifier, __classPrivateFieldGet(this, _ImportVisitor_declaration, "f")));
    }
    ImportNamespaceSpecifier(node) {
        const local = node.local;
        this.visitImport(local, node);
    }
    ImportDefaultSpecifier(node) {
        const local = node.local;
        this.visitImport(local, node);
    }
    ImportSpecifier(node) {
        const local = node.local;
        this.visitImport(local, node);
    }
}
exports.ImportVisitor = ImportVisitor;
_ImportVisitor_declaration = new WeakMap(), _ImportVisitor_referencer = new WeakMap();
//# sourceMappingURL=ImportVisitor.js.map