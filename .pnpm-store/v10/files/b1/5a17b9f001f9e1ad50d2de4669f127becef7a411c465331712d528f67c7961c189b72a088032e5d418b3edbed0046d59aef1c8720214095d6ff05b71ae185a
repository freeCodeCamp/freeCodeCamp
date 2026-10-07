import type { TSESTree } from '@typescript-eslint/types';
import type { Referencer } from './Referencer';
import { Visitor } from './Visitor';
declare class TypeVisitor extends Visitor {
    #private;
    constructor(referencer: Referencer);
    static visit(referencer: Referencer, node: TSESTree.Node): void;
    protected visitFunctionType(node: TSESTree.TSCallSignatureDeclaration | TSESTree.TSConstructorType | TSESTree.TSConstructSignatureDeclaration | TSESTree.TSFunctionType | TSESTree.TSMethodSignature): void;
    protected visitPropertyKey(node: TSESTree.TSMethodSignature | TSESTree.TSPropertySignature): void;
    protected Identifier(node: TSESTree.Identifier): void;
    protected MemberExpression(node: TSESTree.MemberExpression): void;
    protected TSCallSignatureDeclaration(node: TSESTree.TSCallSignatureDeclaration): void;
    protected TSConditionalType(node: TSESTree.TSConditionalType): void;
    protected TSConstructorType(node: TSESTree.TSConstructorType): void;
    protected TSConstructSignatureDeclaration(node: TSESTree.TSConstructSignatureDeclaration): void;
    protected TSFunctionType(node: TSESTree.TSFunctionType): void;
    protected TSImportType(node: TSESTree.TSImportType): void;
    protected TSIndexSignature(node: TSESTree.TSIndexSignature): void;
    protected TSInferType(node: TSESTree.TSInferType): void;
    protected TSInterfaceDeclaration(node: TSESTree.TSInterfaceDeclaration): void;
    protected TSMappedType(node: TSESTree.TSMappedType): void;
    protected TSMethodSignature(node: TSESTree.TSMethodSignature): void;
    protected TSNamedTupleMember(node: TSESTree.TSNamedTupleMember): void;
    protected TSPropertySignature(node: TSESTree.TSPropertySignature): void;
    protected TSQualifiedName(node: TSESTree.TSQualifiedName): void;
    protected TSTypeAliasDeclaration(node: TSESTree.TSTypeAliasDeclaration): void;
    protected TSTypeParameter(node: TSESTree.TSTypeParameter): void;
    protected TSTypePredicate(node: TSESTree.TSTypePredicate): void;
    protected TSTypeQuery(node: TSESTree.TSTypeQuery): void;
    protected TSTypeAnnotation(node: TSESTree.TSTypeAnnotation): void;
}
export { TypeVisitor };
//# sourceMappingURL=TypeVisitor.d.ts.map