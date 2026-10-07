"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportVisitor = void 0;
const definition_1 = require("../definition");
const Visitor_1 = require("./Visitor");
class ImportVisitor extends Visitor_1.Visitor {
    #declaration;
    #referencer;
    constructor(declaration, referencer) {
        super(referencer);
        this.#declaration = declaration;
        this.#referencer = referencer;
    }
    static visit(referencer, declaration) {
        const importReferencer = new ImportVisitor(declaration, referencer);
        importReferencer.visit(declaration);
    }
    ImportDefaultSpecifier(node) {
        const local = node.local;
        this.visitImport(local, node);
    }
    ImportNamespaceSpecifier(node) {
        const local = node.local;
        this.visitImport(local, node);
    }
    ImportSpecifier(node) {
        const local = node.local;
        this.visitImport(local, node);
    }
    visitImport(id, specifier) {
        this.#referencer
            .currentScope()
            .defineIdentifier(id, new definition_1.ImportBindingDefinition(id, specifier, this.#declaration));
    }
}
exports.ImportVisitor = ImportVisitor;
//# sourceMappingURL=ImportVisitor.js.map