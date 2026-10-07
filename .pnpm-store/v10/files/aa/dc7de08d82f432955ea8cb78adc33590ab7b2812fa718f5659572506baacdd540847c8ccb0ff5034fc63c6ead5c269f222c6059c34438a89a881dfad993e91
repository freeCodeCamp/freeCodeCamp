import type { TSESTree } from '@typescript-eslint/types';
import type { Referencer } from './Referencer';
import { Visitor } from './Visitor';
declare class ImportVisitor extends Visitor {
    #private;
    constructor(declaration: TSESTree.ImportDeclaration, referencer: Referencer);
    static visit(referencer: Referencer, declaration: TSESTree.ImportDeclaration): void;
    protected visitImport(id: TSESTree.Identifier, specifier: TSESTree.ImportDefaultSpecifier | TSESTree.ImportNamespaceSpecifier | TSESTree.ImportSpecifier): void;
    protected ImportNamespaceSpecifier(node: TSESTree.ImportNamespaceSpecifier): void;
    protected ImportDefaultSpecifier(node: TSESTree.ImportDefaultSpecifier): void;
    protected ImportSpecifier(node: TSESTree.ImportSpecifier): void;
}
export { ImportVisitor };
//# sourceMappingURL=ImportVisitor.d.ts.map