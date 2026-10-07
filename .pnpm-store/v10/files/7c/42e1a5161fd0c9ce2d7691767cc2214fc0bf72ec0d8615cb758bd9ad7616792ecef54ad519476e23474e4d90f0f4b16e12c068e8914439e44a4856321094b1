import type { TSESTree } from '@typescript-eslint/types';
import type { Referencer } from './Referencer';
import { Visitor } from './Visitor';
export type ExportNode = TSESTree.ExportAllDeclaration | TSESTree.ExportDefaultDeclaration | TSESTree.ExportNamedDeclaration;
export declare class ExportVisitor extends Visitor {
    #private;
    constructor(node: ExportNode, referencer: Referencer);
    static visit(referencer: Referencer, node: ExportNode): void;
    protected ExportDefaultDeclaration(node: TSESTree.ExportDefaultDeclaration): void;
    protected ExportNamedDeclaration(node: TSESTree.ExportNamedDeclaration): void;
    protected ExportSpecifier(node: TSESTree.ExportSpecifier): void;
    protected Identifier(node: TSESTree.Identifier): void;
}
